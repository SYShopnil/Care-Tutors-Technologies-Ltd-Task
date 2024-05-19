import { TodoItem } from "@src/lib/store/todoSlice";

export enum EToDoMode {
  CREATE = "CREATE",
  UPDATE = "UPDATE",
}

export interface ICEditTodo {
  todo?: Pick<TodoItem, "title" | "description" | "id">;
  onClose?: () => any;
  mode: EToDoMode;
}
