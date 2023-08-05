export interface Road {
  id:           string;
  name:         string;
  number:       string;
  update:       Date;
  type:         RoadType;
  begin:        number;
  end:          number;
  kind:         Kind;
  organization: string;
  coordinates:  Array<Array<number[]>>;
}

export enum Kind {
  Empty = "-",
}

export enum RoadType {
  Municipal = 'Межмуниципальное',
  Regional = 'Региональное',
  RegionalAndMunicipal = 'Региональное или межмуниципальное',
}

export const RoadColor = {
  [RoadType.Municipal]: 'blue',
  [RoadType.Regional]: 'red',
  [RoadType.RegionalAndMunicipal]: 'green',
}
