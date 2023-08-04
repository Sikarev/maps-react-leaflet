import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import styles from './style.module.css'
import useRoadMap from './useRoadMap.ts';

const Map = () => {
  const { defaultPosition, roads, devices, refreshRoads, refreshDevices } = useRoadMap();

  return (
    <MapContainer className={styles.mapContainer} center={defaultPosition} zoom={13}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {roads.map((road) => (<Polyline positions={road.coordinates} pathOptions={{ color: 'red', weight: 1 }} />))}
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
