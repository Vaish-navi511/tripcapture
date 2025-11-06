import React, { useState } from "react";
import Header from "./components/Header";
import TripForm from "./components/TripForm";
import TripList from "./components/TripList";

function App() {
  const [trips, setTrips] = useState([]);

  // function to add a new trip
  const addTrip = (trip) => {
    setTrips([...trips, trip]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="p-6 max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-600">
           TravelTrack
        </h1>
        <p className="mt-4 text-gray-600">
          Capture your travel details below. Data will be stored for analysis.
        </p>

        <section className="mt-8">
          <TripForm addTrip={addTrip} />
        </section>

        <section className="mt-8">
          <TripList trips={trips} />
        </section>
      </main>
    </div>
  );
}

export default App;
