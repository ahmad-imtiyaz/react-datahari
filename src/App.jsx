import { useState, useEffect } from "react";

function App() {
  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const [today, setToday] = useState("");

  useEffect(() => {
    const now = new Date();
    setToday(days[now.getDay()]);
  }, []);

  return (
    <div
      style={{ fontFamily: "Arial", textAlign: "center", marginTop: "50px" }}
    >
      <h1>📅 Data Hari</h1>
      <h2>Hari ini: {today}</h2>
      <h3>Daftar Hari:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {days.map((day, index) => (
          <li key={index} style={{ margin: "5px 0" }}>
            {day}{" "}
            {day === "Sabtu" || day === "Minggu"
              ? "🌞 (Weekend)"
              : "💼 (Weekday)"}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
