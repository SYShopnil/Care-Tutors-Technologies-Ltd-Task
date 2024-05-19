import { TodoItem } from "@src/lib/store/todoSlice";
import { BtnColorSchema } from "../Button";

export interface IInputForm {
  handleSubmit: (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => void;
  toDoData: Pick<TodoItem, "title" | "description">;
  setDescription: (value: string) => void;
  setTitle: (value: string) => void;
  btnText: string;
  btnVariant: BtnColorSchema;
}
