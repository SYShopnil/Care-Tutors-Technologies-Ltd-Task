import { render, screen } from "@testing-library/react";
import { CToDoCreateAndUpdate } from "..";
import { EDataTestId } from "@src/types/common";
import {
  EToDoMode,
  ICEditTodo,
} from "@src/types/compound/c-to-do-create-update";
import CStoreProvider from "../../c-store-provider";

const mock_update: ICEditTodo = {
  mode: EToDoMode.UPDATE,
  onClose: () => {
    console.log(`hello`);
  },
  todo: {
    description: "Hello this is description",
    id: "12345",
    title: "Hello this is a title",
  },
};
describe("When To Do Update and Create Component Rendered", () => {
  it("Expect render successfully", async () => {
    render(
      <CStoreProvider>
        <CToDoCreateAndUpdate {...mock_update} />
      </CStoreProvider>
    );
    const myElement = screen.getByRole(EDataTestId.CToDoCreateUpdate);
    expect(myElement).toMatchSnapshot();
  });
});
