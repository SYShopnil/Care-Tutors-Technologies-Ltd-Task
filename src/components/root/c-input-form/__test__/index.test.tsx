import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import {
  EToDoMode,
  ICEditTodo,
} from "@src/types/compound/c-to-do-create-update";

import { ICTodoItem } from "@src/types/compound/c-to-do-item";
import CStoreProvider from "@src/components/compound/c-store-provider";
import { IInputForm } from "@src/types/root/c-input-form";
import { BtnColorSchema } from "@src/types/root";
import { CInputForm } from "..";

const mock_input_form: IInputForm = {
  btnText: "Test Input",
  btnVariant: BtnColorSchema.SolidBgGrayTextViolet,
  handleSubmit: () => {},
  setDescription: () => {},
  setTitle: () => {},
  toDoData: {
    description: "This is description",
    title: "This is title",
  },
};
describe("When Input Form Has Rendered", () => {
  it("Expect render successfully", async () => {
    render(
      <CStoreProvider>
        <CInputForm {...mock_input_form} />
      </CStoreProvider>
    );
    const myElement = screen.getByRole(EDataTestId.CInputForm);
    expect(myElement).toMatchSnapshot();
  });
});
