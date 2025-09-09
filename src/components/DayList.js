function DayList({ today, days }) {
  return (
    <div>
      <h3>Daftar Hari:</h3>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {days.map((day, index) => (
          <li
            key={index}
            style={{
              margin: "5px 0",
              fontWeight: day === today ? "bold" : "normal",
              color: day === today ? "blue" : "black",
            }}
          >
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

export default DayList;
