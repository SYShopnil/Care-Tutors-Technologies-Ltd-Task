import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import CStoreProvider from "../../c-store-provider";
import { CTodoItem } from "..";
import { ICTodoItem } from "@src/types/compound/c-to-do-item";

const mock_to_do_item: ICTodoItem = {
  todo: {
    completed: true,
    description: "Hello this is completed",
    id: "2123",
    title: "This is demo title",
  },
};
describe("When To Do Item Rendered", () => {
  it("Expect render successfully", async () => {
    render(
      <CStoreProvider>
        <CTodoItem {...mock_to_do_item} />
      </CStoreProvider>
    );
    const myElement = screen.getByRole(EDataTestId.CTodoItem);
    expect(myElement).toMatchSnapshot();
  });
});
