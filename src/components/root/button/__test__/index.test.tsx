import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import {
  EToDoMode,
  ICEditTodo,
} from "@src/types/compound/c-to-do-create-update";

import { ICTodoItem } from "@src/types/compound/c-to-do-item";
import CStoreProvider from "@src/components/compound/c-store-provider";
import { IInputForm } from "@src/types/root/c-input-form";
import { BtnColorSchema, IButton } from "@src/types/root";
import { Button } from "..";

const mock_button: IButton = {
  btnText: "Test Input",
  colorSchema: BtnColorSchema.SolidBgGrayTextViolet,
  isArrow: false,
};
describe("When Button has Rendered", () => {
  it("Expect render successfully", async () => {
    render(<Button {...mock_button} />);
    const myElement = screen.getByRole(EDataTestId.CButton);
    expect(myElement).toMatchSnapshot();
  });
});
