"use client";

import { CInputForm } from "@src/components/root/c-input-form";
import { addTodo, editTodo } from "@src/lib/store/todoSlice";
import {
  EToDoMode,
  ICEditTodo,
} from "@src/types/compound/c-to-do-create-update";
import { BtnColorSchema } from "@src/types/root";
import { useState } from "react";
import { useDispatch } from "react-redux";

export const CToDoCreateAndUpdate = ({ todo, onClose, mode }: ICEditTodo) => {
  const [title, setTitle] = useState(todo?.title || "");
  const [description, setDescription] = useState(todo?.description || "");
  const dispatch = useDispatch();
  const btnText = mode == EToDoMode.CREATE ? "Add ToDo" : "Update";
  const btnVariant =
    mode == EToDoMode.CREATE
      ? BtnColorSchema.SolidBgGrayTextViolet
      : BtnColorSchema.SolidBgWhiteTextGreen;
  const handleSubmit = (
    e: React.MouseEvent<HTMLElement> | React.FormEvent<HTMLFormElement>
  ) => {
    e.preventDefault();

    switch (mode) {
      case EToDoMode.CREATE: {
        if (title.trim() && description.trim()) {
          dispatch(addTodo({ title, description }));
          setTitle("");
          setDescription("");
        }
        break;
      }
      case EToDoMode.UPDATE: {
        todo && dispatch(editTodo({ id: todo.id, title, description }));
        onClose && onClose();
        break;
      }
    }
  };
  return (
    <CInputForm
      handleSubmit={handleSubmit}
      setDescription={setDescription}
      setTitle={setTitle}
      toDoData={{ description, title }}
      btnText={btnText}
      btnVariant={btnVariant}
    />
  );
};
