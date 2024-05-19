import { render, screen } from "@testing-library/react";
import { SHeaderMain } from "..";
import { EDataTestId } from "@src/types/common";

describe("When Header Main has rendered", () => {
  it("Expect render successfully", async () => {
    render(await SHeaderMain());
    const myElement = screen.getByRole(EDataTestId.SHeaderMain);
    expect(myElement).toMatchSnapshot();
  });
});
