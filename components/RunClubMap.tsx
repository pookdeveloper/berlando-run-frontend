"use client";

import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { runClubs } from "@/lib/data";
import type { LatLngExpression } from "leaflet";

const DEFAULT_CENTER: LatLngExpression = [48.8, 5.0];

export function RunClubMap() {
  return (
    <div className="map-surface">
      <MapContainer
        center={DEFAULT_CENTER}
        zoom={5}
        scrollWheelZoom={false}
        style={{ height: "420px", width: "100%" }}
        keyboard
        aria-label="Interactive map of run clubs in European cities"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />
        {runClubs.map((club) => (
          <Marker
            key={club.city}
            position={[club.coordinates.lat, club.coordinates.lng]}
            title={`${club.city} run club`}
          >
            <Popup>
              <strong>{club.city}</strong>
              <div>{club.country}</div>
              <div>{club.schedule}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}
