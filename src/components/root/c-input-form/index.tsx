import React from "react";
import { Button } from "../button";
import { IInputForm } from "@src/types/root/c-input-form";
import { EDataTestId } from "@src/types/common";

export const CInputForm = ({
  handleSubmit,
  toDoData: { description, title },
  setDescription,
  setTitle,
  btnText,
  btnVariant,
}: IInputForm) => {
  return (
    <form className="space-y-4" role={EDataTestId.CInputForm}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Title"
        className="w-full p-2 border rounded"
      />
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className={`w-full p-2 border rounded`}
        placeholder="Description"
      />

      <div className="flex justify-center items-center">
        <Button
          btnText={btnText}
          colorSchema={btnVariant}
          isArrow={false}
          clickHandler={handleSubmit}
        />
      </div>
    </form>
  );
};
