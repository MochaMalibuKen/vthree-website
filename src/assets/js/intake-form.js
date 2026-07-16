// the VThree Agency - Intake Form JavaScript for Formspree
// Anti-spam, validation, and submission handling

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('intake-form');
  if (!form) return;
  const submitBtn = form.querySelector('button[type="submit"]');
  const errorSummary = document.getElementById('error-summary');
  const errorList = document.getElementById('error-list');
  let timestampSet = false;
  
  // Set anti-spam timestamp after 1.5 seconds
  setTimeout(() => {
    document.getElementById('timestamp').value = Date.now();
    timestampSet = true;
  }, 1500);
  
  // Form submission handler
  form.addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Anti-spam checks
    if (!timestampSet) {
      showErrors(['Please wait a moment before submitting.']);
      return;
    }
    
    // Honeypot check
    if (form.elements.honey?.value) {
      // Silent success for spam bots - redirect to thanks page
      window.location.href = '/thanks.html';
      return;
    }
    
    // Validate form
    const errors = validateForm();
    if (errors.length > 0) {
      showErrors(errors);
      return;
    }
    
    // Show loading state
    submitBtn.textContent = 'Sending...';
    submitBtn.disabled = true;
    hideErrors();
    
    try {
      // Submit to Formspree
      const formData = new FormData(form);
      formData.set('_replyto', form.elements.email.value);
      
      const response = await fetch(form.action, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: formData
      });
      
      if (response.ok) {
        // Analytics event
        if (window.dataLayer) {
          window.dataLayer.push({ event: 'intake_submit' });
        }
        
        // Redirect to thanks page
        window.location.href = '/thanks.html';
      } else {
        const data = await response.json();
        const error = data.errors?.[0]?.message || 'Something went wrong. Please try again.';
        showErrors([error]);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      showErrors(['Something went wrong. Please try again.']);
    } finally {
      // Reset button state
      submitBtn.textContent = 'Send Project Details';
      submitBtn.disabled = false;
    }
  });
  
  function validateForm() {
    const errors = [];
    const required = form.querySelectorAll('[required]');
    
    required.forEach(field => {
      if (field.type === 'radio') {
        const radioGroup = form.querySelectorAll(`input[name="${field.name}"]`);
        const isChecked = Array.from(radioGroup).some(radio => radio.checked);
        if (!isChecked) {
          const fieldset = field.closest('fieldset');
          const legend = fieldset?.querySelector('legend')?.textContent || field.name;
          if (!errors.some(error => error.includes(legend))) {
            errors.push(`${legend} is required`);
          }
        }
      } else if (!field.value.trim()) {
        const label = form.querySelector(`label[for="${field.id}"]`)?.textContent || field.name;
        errors.push(`${label.replace(' *', '')} is required`);
      }
    });
    
    // Email validation
    const email = form.elements.email;
    if (email.value && !email.value.includes('@')) {
      errors.push('Please enter a valid email address');
    }
    
    return errors;
  }
  
  function showErrors(errors) {
    errorList.innerHTML = errors.map(error => `<li>${error}</li>`).join('');
    errorSummary.style.display = 'block';
    errorSummary.focus();
    errorSummary.scrollIntoView({ behavior: 'smooth' });
  }
  
  function hideErrors() {
    errorSummary.style.display = 'none';
  }
});
