function Header({ today, date, time }) {
  return (
    <div>
      <h1>📅 Data Hari</h1>
      <h2>Hari ini: {today}</h2>
      <h3>Tanggal: {date}</h3>
      <h3>Waktu: {time}</h3>
    </div>
  );
}

export default Header;
