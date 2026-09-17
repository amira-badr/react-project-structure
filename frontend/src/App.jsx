import Button from "./components/ui/Button";
import Card from "./components/ui/Card";
import Table from "./components/ui/Table";

export default function App() {
  const tableColumns = ["Name", "Role", "City"];
  const tableData = [
    { name: "Amira Badr", role: "Full Stack Developer", city: "Minya" },
    { name: "Sara Ali", role: "Frontend Developer", city: "Cairo" },
    { name: "Omar Mohamed", role: "Backend Developer", city: "Alexandria" },
  ];

  return (
    <div style={{ padding: "40px 20px", maxWidth: "800px", margin: "0 auto", backgroundColor: "#f8fafc", minHeight: "100vh" }}>
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "2rem", fontWeight: "bold", color: "#1f2937" }}>Reusable Components Dashboard</h1>
        <p style={{ color: "#6b7280" }}>Assignment 2 Demonstration</p>
      </header>

      {/* Buttons */}
      <section style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#374151", marginBottom: "15px" }}>1. Button Component</h2>
        <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
          <Button text="Primary Action" variant="primary" onClick={() => alert("Primary clicked!")} />
          <Button text="Secondary Action" variant="secondary" onClick={() => alert("Secondary clicked!")} />
          <Button text="Danger Zone" variant="danger" disabled={true} />
        </div>
      </section>

      {/* Cards */}
      <section style={{ background: "#fff", padding: "20px", borderRadius: "10px", marginBottom: "20px", border: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#374151", marginBottom: "15px" }}>2. Card Component</h2>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px" }}>
          <Card title="Standard Card" description="This is a simple description for the standard reusable card component." />
          <Card title="Interactive Card" description="This card demonstrates the use of the children prop for nested content.">
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <span style={{ fontSize: "0.8rem", color: "#2563eb", background: "#eff6ff", padding: "4px 8px", borderRadius: "4px", fontWeight: "bold" }}>Active</span>
              <Button text="View Profile" variant="primary" onClick={() => alert("Profile clicked!")} />
            </div>
          </Card>
        </div>
      </section>

      {/* Table */}
      <section style={{ background: "#fff", padding: "20px", borderRadius: "10px", border: "1px solid #e5e7eb" }}>
        <h2 style={{ fontSize: "1.2rem", color: "#374151", marginBottom: "15px" }}>3. Table Component</h2>
        <Table columns={tableColumns} data={tableData} striped={true} />
      </section>
    </div>
  );
}