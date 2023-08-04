export interface Device {
  id:                     string;
  name:                   string;
  type:                   Type;
  status:                 Status;
  lat:                    number;
  lon:                    number;
  imei:                   string;
  location:               string;
  text:                   Text;
  videocamera_id:         number;
  imageUri?:              string;
  timeOfLastImageUpdate?: Date;
}

export enum Status {
  Active = "active",
}

export enum Text {
  Empty = "-",
  TestMode = "Табло работает в тестовом режиме",
}

export enum Type {
  Board = "board",
}