export default function ChatbotBox() {
  return (
    <div style={{
      position: "fixed",
      bottom: 20,
      right: 20,
      width: 320,
      height: 420,
      background: "#0f172a",
      color: "white",
      border: "1px solid rgba(255,255,255,.12)",
      borderRadius: 12,
      boxShadow: "0 16px 40px rgba(0,0,0,.35)",
      display: "flex",
      flexDirection: "column",
      zIndex: 10000
    }}>
      <div style={{
        padding: "10px 12px",
        borderBottom: "1px solid rgba(255,255,255,.12)",
        fontWeight: 700
      }}>
        VTHREE — Chat
      </div>

      <div style={{ flex: 1, padding: 12, overflowY: "auto" }}>
        <p>Hi! I’m your site assistant 👋</p>
        <p>Ask me about services, projects, or booking a consult.</p>
      </div>

      <form
        onSubmit={(e) => { e.preventDefault(); alert("Placeholder — we’ll wire a real bot next."); }}
        style={{ padding: 12, borderTop: "1px solid rgba(255,255,255,.12)", display: "flex", gap: 8 }}
      >
        <input
          name="msg"
          placeholder="Type a message…"
          style={{
            flex: 1,
            padding: "10px 12px",
            borderRadius: 8,
            border: "1px solid rgba(255,255,255,.14)",
            background: "#0b1222",
            color: "white"
          }}
        />
        <button className="btn" type="submit" style={{ padding: "10px 14px" }}>Send</button>
      </form>
    </div>
  );
}