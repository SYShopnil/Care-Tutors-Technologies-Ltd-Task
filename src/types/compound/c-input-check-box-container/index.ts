import { BtnColorSchema } from "@src/types/root";
import { ITextDataElements } from "../s-show-all-texts-boxs-type";

export enum ECInputCheckBoxContainerMode {
  UPDATE = "UPDATE",
  READ = "READ",
  CREATE = "CREATE",
}

export interface ICInputCheckBoxContainer {
  existElement?: ITextDataElements[];
  mode?: ECInputCheckBoxContainerMode;
  btnHandler?: (elements: ITextDataElements[]) => void;
  btnText?: string;
  btnColorSchema?: BtnColorSchema;
}
