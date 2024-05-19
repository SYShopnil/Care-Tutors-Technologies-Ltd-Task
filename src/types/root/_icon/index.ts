export enum IconName {
  Logo = "Logo",
  TbError404 = "TbError404",
  FaArrowAltCircleRight = "FaArrowAltCircleRight",
}

export interface IIconStore {
  iconName: IconName;
  fill?: string;
}
