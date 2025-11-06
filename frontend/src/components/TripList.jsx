import React from "react";

function TripList({ trips }) {
  return (
    <div className="bg-gray-100 p-6 rounded-xl shadow-md">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Saved Trips
      </h2>
      {trips.length === 0 ? (
        <p className="text-gray-500">No trips recorded yet.</p>
      ) : (
        <ul className="space-y-3">
          {trips.map((trip, index) => (
            <li
              key={index}
              className="border p-4 rounded-lg bg-white shadow-sm"
            >
              <p>
                <span className="font-medium">Trip #{trip.tripNumber}</span> –{" "}
                {trip.origin} → {trip.destination}
              </p>
              <p className="text-sm text-gray-600">
                Mode: {trip.mode}, Time: {trip.time}, Travellers:{" "}
                {trip.travellers}
              </p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default TripList;
