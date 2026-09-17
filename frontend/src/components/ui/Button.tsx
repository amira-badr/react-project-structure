export default function Button({ text, onClick, variant = "primary", disabled = false }) {
  const styles = {
    padding: "10px 20px",
    borderRadius: "8px",
    border: "none",
    fontWeight: "bold",
    cursor: disabled ? "not-allowed" : "pointer",
    opacity: disabled ? 0.6 : 1,
    color: "#fff",
    backgroundColor: variant === "secondary" ? "#4b5563" : variant === "danger" ? "#dc2626" : "#2563eb"
  };

  return (
    <button onClick={onClick} disabled={disabled} style={styles}>
      {text}
    </button>
  );
}