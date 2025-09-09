import { useState, useEffect } from "react";
import Header from "./components/Header";
import DayList from "./components/DayList";
import Footer from "./components/Footer";

function App() {
  const [today, setToday] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [quote, setQuote] = useState("");

  const days = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];
  const quotes = [
    "Tetap semangat, hari baru peluang baru!",
    "Jangan menyerah, kerja keras tak pernah sia-sia.",
    "Waktu adalah aset paling berharga, gunakan dengan bijak.",
    "Kecil tapi konsisten lebih baik daripada besar tapi berhenti.",
  ];

  useEffect(() => {
    const now = new Date();
    setToday(days[now.getDay()]);
    setDate(now.toLocaleDateString("id-ID"));
    setQuote(quotes[Math.floor(Math.random() * quotes.length)]);

    const interval = setInterval(() => {
      const current = new Date();
      setTime(current.toLocaleTimeString("id-ID"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      style={{ fontFamily: "Arial", textAlign: "center", marginTop: "20px" }}
    >
      <Header today={today} date={date} time={time} />
      <h3>🌟 Quote Hari Ini:</h3>
      <p style={{ fontStyle: "italic" }}>{quote}</p>
      <DayList today={today} days={days} />
      <Footer />
    </div>
  );
}

export default App;
