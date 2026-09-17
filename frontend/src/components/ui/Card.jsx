export default function Card({ title, description, image, children }) {
  return (
    <div style={{
      backgroundColor: "#ffffff",
      borderRadius: "12px",
      boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
      padding: "20px",
      border: "1px solid #e5e7eb",
      maxWidth: "350px",
      marginBottom: "20px"
    }}>
      {image && <img src={image} alt={title} style={{ width: "100%", height: "160px", objectFit: "cover", borderRadius: "8px", marginBottom: "15px" }} />}
      {title && <h3 style={{ fontSize: "1.25rem", fontWeight: "bold", color: "#1f2937", marginBottom: "10px" }}>{title}</h3>}
      {description && <p style={{ color: "#4b5563", fontSize: "0.9rem", marginBottom: "15px" }}>{description}</p>}
      {children && <div style={{ borderTop: "1px solid #e5e7eb", paddingTop: "12px", marginTop: "12px" }}>{children}</div>}
    </div>
  );
}