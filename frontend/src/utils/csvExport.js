export function exportTripsToCSV(trips) {
  const header = ["Trip Number", "Origin", "Destination", "Mode", "Time", "Travellers"];
  const rows = trips.map((t) => [
    t.tripNumber,
    t.origin,
    t.destination,
    t.mode,
    t.time,
    t.travellers,
  ]);

  const csvContent = [header, ...rows]
    .map((row) => row.join(","))
    .join("\n");

  const blob = new Blob([csvContent], { type: "text/csv" });
  const url = window.URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = "trips.csv";
  a.click();
  window.URL.revokeObjectURL(url);
}
