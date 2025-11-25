export enum HomeSideBarAdditionalValue {
  NOTIFICATION = "NOTIFICATION",
  FRIENDSREQUESTS = "FRIENDSREQUESTS",
}

export interface HomeSideBarItem {
  id: number;
  title: string;
  iconName: string;
  path: string;
  additionalValue?: HomeSideBarAdditionalValue;
}
