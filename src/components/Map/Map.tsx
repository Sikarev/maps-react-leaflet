import { MapContainer, Marker, Polyline, Popup, TileLayer } from 'react-leaflet';
import styles from './style.module.css'
import useRoadMap from './useRoadMap.ts';
import DeviceCard from '../DeviceCard.tsx';
import { RoadColor } from '../../models/Road.ts';
import RefreshButton from '../RefreshButton/RefreshButton.tsx';

const Map = () => {
  const { defaultPosition, roads, devices, refreshData, isFetching } = useRoadMap();

  return (
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    <MapContainer className={styles.mapContainer} center={defaultPosition} zoom={10}>
      <TileLayer
        /* eslint-disable-next-line @typescript-eslint/ban-ts-comment */
        // @ts-ignore
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {(roads ?? []).map((road) => (<Polyline key={road.id} positions={road.coordinates} pathOptions={{ color: RoadColor[road.type], weight: 1 }} />))}
      {(devices ?? []).map((device) => (
        <Marker key={device.id} position={[device.lat, device.lon]}>
          <Popup>
            <DeviceCard device={device} />
          </Popup>
        </Marker>
      ))}
      <RefreshButton
        onRefresh={refreshData}
        isLoading={isFetching}
      />
    </MapContainer>
  )
};

export default Map;
