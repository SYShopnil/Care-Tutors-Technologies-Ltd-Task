import { render, screen } from "@testing-library/react";
import { EDataTestId } from "@src/types/common";
import CStoreProvider from "../../c-store-provider";

import CTodoList from "..";

describe("When To Do List Rendered", () => {
  it("Expect render successfully", async () => {
    render(
      <CStoreProvider>
        <CTodoList />
      </CStoreProvider>
    );
    const myElement = screen.getByRole(EDataTestId.CToDoList);
    expect(myElement).toMatchSnapshot();
  });
});
