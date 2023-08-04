import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import styles from './style.module.css'
import { useEffect, useState } from "react";
import { fetchDevices, fetchRoads } from "../../utils/api.ts";
import { Road } from "../../models/Road.ts";
import { Device } from "../../models/Devices.ts";

const Map = () => {
  const position = [54.6195283689314, 39.7427952289581];

  const [roads, setRoads] = useState<Road[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);

  useEffect(() => {
    fetchRoads().then(roads => { setRoads(roads) });
    fetchDevices().then(devices => { setDevices(devices) });
  }, []);

  return (
    <MapContainer className={styles.mapContainer} center={position} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {roads.map((road) => (<Polyline positions={road.coordinates} pathOptions={{ color: 'red' }} />))}
      {devices.map((device) => (
        <Marker position={[device.lat, device.lon]}>
          <Popup>
            {device.name} <br /> {device.status} <br/> {device.type} <br/> {`${device.lat}, ${device.lon}`}
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  )
};

export default Map;
