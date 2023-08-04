import { Road } from "../models/Road.ts";
import { Device } from "../models/Devices.ts";

export async function fetchRoads(): Promise<Road[]> {
  try {
    const res = await fetch('http://localhost:3000/roads');
    return res.json();
  } catch (e) {
    console.error('Failed to fetch roads. Reason: ', e);
    return [];
  }
}

export async function fetchDevices(): Promise<Device[]> {
  try {
    const res = await fetch('http://localhost:3000/devices');
    return res.json();
  } catch (e) {
    console.error('Failed to fetch devices. Reason: ', e);
    return [];
  }
}