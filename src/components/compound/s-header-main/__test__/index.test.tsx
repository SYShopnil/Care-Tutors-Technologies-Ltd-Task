import { render, screen } from "@testing-library/react";
import { SHeaderMain } from "..";
import { EDataTestId } from "@src/types/common";

describe("When Header Main has rendered", () => {
  it("Expect render successfully", async () => {
    const { getByTestId } = render(await SHeaderMain());
    // const myElement = getByTestId(EDataTestId.SHeaderMain);
    const myElement = screen.getByTestId(EDataTestId.SHeaderMain);
    expect(myElement).toMatchSnapshot();
  });
});
