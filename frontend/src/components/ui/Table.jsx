export default function Table({ columns, data, striped = false }) {
  return (
    <div style={{ overflowX: "auto", boxShadow: "0 4px 6px rgba(0,0,0,0.05)", borderRadius: "8px", border: "1px solid #e5e7eb" }}>
      <table style={{ width: "100%", borderCollapse: "collapse", backgroundColor: "#fff", textAlign: "left" }}>
        <thead>
          <tr style={{ backgroundColor: "#f3f4f6", color: "#374151", fontSize: "0.85rem", textTransform: "uppercase" }}>
            {columns.map((col, index) => (
              <th key={index} style={{ padding: "12px 16px", fontWeight: "600" }}>{col}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, rowIndex) => (
            <tr key={rowIndex} style={{ backgroundColor: striped && rowIndex % 2 === 0 ? "#f9fafb" : "#ffffff", borderTop: "1px solid #e5e7eb" }}>
              {Object.values(row).map((cell, cellIndex) => (
                <td key={cellIndex} style={{ padding: "12px 16px", fontSize: "0.9rem", color: "#4b5563" }}>{cell}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}