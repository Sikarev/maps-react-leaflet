import { useEffect, useState } from 'react';
import { Road } from '../../models/Road.ts';
import { Device } from '../../models/Devices.ts';
import { fetchDevices, fetchRoads } from '../../utils/api.ts';

const useRoadMap = () => {
  const defaultPosition = [54.6195283689314, 39.7427952289581];

  const [roads, setRoads] = useState<Road[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);

  const [isFetching, setIsFetching] = useState(false);


  const refreshRoads = () => {
    return fetchRoads().then(roads => { setRoads(roads) });
  };

  const refreshDevices = () => {
    return fetchDevices().then(devices => { setDevices(devices) });
  }

  const refreshData = () => {
    setIsFetching(true)

    setRoads([]);
    setDevices([]);

    return Promise.all([refreshRoads(), refreshDevices()]).finally(() => setIsFetching(false));
  }

  useEffect(() => {
    refreshData();
  }, []);

  return {
    defaultPosition,
    roads,
    devices,
    refreshData,
    isFetching,
  }
}

export default useRoadMap;