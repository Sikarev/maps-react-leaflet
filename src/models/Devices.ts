export interface Device {
  id:                     string;
  name:                   string;
  type:                   DeviceType;
  status:                 Status;
  lat:                    number;
  lon:                    number;
  imei:                   string;
  location:               string;
  text:                   DeviceText;
  videocamera_id:         number;
  imageUri?:              string;
  timeOfLastImageUpdate?: Date;
}

export enum Status {
  Active = "active",
}

export const StatusMap = {
  [Status.Active]: 'Работает',
}

export enum DeviceText {
  Empty = "-",
  TestMode = "Табло работает в тестовом режиме",
}

export enum DeviceType {
  Board = "board",
}

export const DeviceTypeMap = {
  [DeviceType.Board]: 'Табло',
}