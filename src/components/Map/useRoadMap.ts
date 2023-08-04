import { useEffect, useState } from 'react';
import { Road } from '../../models/Road.ts';
import { Device } from '../../models/Devices.ts';
import { fetchDevices, fetchRoads } from '../../utils/api.ts';

const useRoadMap = () => {
  const defaultPosition = [54.6195283689314, 39.7427952289581];

  const [roads, setRoads] = useState<Road[]>([]);
  const [devices, setDevices] = useState<Device[]>([]);

  const refreshRoads = () => {
    fetchRoads().then(roads => { setRoads(roads) });
  };

  const refreshDevices = () => {
    fetchDevices().then(devices => { setDevices(devices) });
  }

  useEffect(() => {
    refreshRoads();
    refreshDevices();
  }, []);

  return {
    defaultPosition,
    roads,
    devices,
    refreshRoads,
    refreshDevices,
  }
}

export default useRoadMap;