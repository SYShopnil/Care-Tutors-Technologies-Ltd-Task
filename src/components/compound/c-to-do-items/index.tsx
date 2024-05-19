"use client";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { CToDoCreateAndUpdate } from "../c-to-do-create-update";
import { TodoItem, deleteTodo } from "@src/lib/store/todoSlice";
import { EToDoMode } from "@src/types/compound/c-to-do-create-update";
import { Button } from "@src/components/root";
import { BtnColorSchema } from "@src/types/root";

interface ICTodoItem {
  todo: TodoItem;
}

export const CTodoItem = ({ todo }: ICTodoItem) => {
  const [isEditing, setIsEditing] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = () => {
    dispatch(deleteTodo(todo.id));
  };

  return (
    <div className="p-5 bg-white shadow-lg rounded mb-4">
      {isEditing ? (
        <CToDoCreateAndUpdate
          todo={todo}
          onClose={() => setIsEditing(false)}
          mode={EToDoMode.UPDATE}
        />
      ) : (
        <div className="p-2">
          <h3 className="text-xl ">
            <span className="font-bold">Title: </span>
            {todo.title}
          </h3>
          <p>
            <span className="font-bold ">Description:</span> {todo.description}
          </p>
          <div className="flex space-x-4 mt-2">
            <Button
              btnText="Edit"
              colorSchema={BtnColorSchema.SolidBgGrayTextViolet}
              isArrow={true}
              clickHandler={() => setIsEditing(true)}
            />

            <Button
              btnText="Delete"
              colorSchema={BtnColorSchema.SolidBgWhiteTextGreen}
              isArrow={true}
              clickHandler={handleDelete}
            />
          </div>
        </div>
      )}
    </div>
  );
};
