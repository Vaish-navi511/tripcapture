import React, { useState } from "react";

function TripForm({ addTrip }) {
  const [trip, setTrip] = useState({
    tripNumber: "",
    origin: "",
    destination: "",
    mode: "",
    time: "",
    travellers: 1,
  });

  const handleChange = (e) => {
    setTrip({ ...trip, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Add trip to parent state
    addTrip(trip);

    // Reset form
    setTrip({
      tripNumber: "",
      origin: "",
      destination: "",
      mode: "",
      time: "",
      travellers: 1,
    });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-gray-100 p-6 rounded-xl shadow-md space-y-4"
    >
      <h2 className="text-xl font-semibold text-gray-800">
        Enter Trip Details
      </h2>

      <div>
        <label className="block text-sm font-medium">Trip Number</label>
        <input
          type="text"
          name="tripNumber"
          value={trip.tripNumber}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Origin</label>
        <input
          type="text"
          name="origin"
          value={trip.origin}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Destination</label>
        <input
          type="text"
          name="destination"
          value={trip.destination}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">Mode of Travel</label>
        <select
          name="mode"
          value={trip.mode}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        >
          <option value="">Select</option>
          <option value="car">Car</option>
          <option value="bus">Bus</option>
          <option value="train">Train</option>
          <option value="bike">Bike</option>
          <option value="walk">Walk</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium">Time</label>
        <input
          type="time"
          name="time"
          value={trip.time}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <div>
        <label className="block text-sm font-medium">
          Number of Travellers
        </label>
        <input
          type="number"
          name="travellers"
          min="1"
          value={trip.travellers}
          onChange={handleChange}
          className="w-full mt-1 p-2 border rounded-lg"
          required
        />
      </div>

      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
      >
        Save Trip
      </button>
    </form>
  );
}

export default TripForm;
