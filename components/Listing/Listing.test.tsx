/**
 * @jest-environment jsdom
 */

import Listing from "./Listing";
import { render } from "@testing-library/react";

describe("Listing", () => {
  test("Title should be correctly shown", () => {
    const title = "Great Product";

    const { getByText } = render(
      <Listing
        image={"https://via.placeholder.com/250"}
        price={6}
        title={title}
      />
    );

    getByText(title);
  });

  test("Price should be correctly shown", () => {
    const price = 5.12;

    const { getByText } = render(
      <Listing
        image={"https://via.placeholder.com/250"}
        price={price}
        title={"Great product"}
      />
    );

    getByText("$" + price);
  });
});
