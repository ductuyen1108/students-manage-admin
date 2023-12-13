export interface IParam {
  id: string;
}

export interface IProvince {
  name: string;
  slug: string;
  type: string;
  nameWithType: string;
  code: string;
}

export interface IDistrict {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}

export interface IWard {
  id: string;
  name: string;
  type: string;
  slug: string;
  nameWithType: string;
  path: string;
  pathWithType: string;
  code: string;
  parent_code: string;
}
