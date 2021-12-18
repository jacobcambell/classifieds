/**
 * @jest-environment jsdom
 */

import CreateListingForm from "./CreateListingForm";
import { render, screen, fireEvent } from "@testing-library/react";

describe("CreateListingForm", () => {
  test("Title should be at least 3 characters long", async () => {
    const { findByTestId, findByText } = render(<CreateListingForm />);

    const titleInput = await findByTestId("titleInput");
    const submitBtn = await findByTestId("submitBtn");

    fireEvent.input(titleInput, { target: { value: "tw" } });

    fireEvent.click(submitBtn);

    await findByText("Title should be at least 3 characters long.");
  });

  test("Title should be at most 50 characters long", async () => {
    const { findByTestId, findByText } = render(<CreateListingForm />);

    const titleInput = await findByTestId("titleInput");
    const submitBtn = await findByTestId("submitBtn");

    fireEvent.input(titleInput, {
      target: { value: "123456789012345678901234567890123456789012345678901" },
    });

    fireEvent.click(submitBtn);

    await findByText("Title should be no more than 50 characters long.");
  });

  test("Price should be a value than can change to a number", async () => {
    const { findByTestId, findByText } = render(<CreateListingForm />);

    const titleInput = await findByTestId("titleInput");
    const priceInput = await findByTestId("priceInput");
    const submitBtn = await findByTestId("submitBtn");

    fireEvent.input(titleInput, { target: { value: "A great title" } });
    fireEvent.input(priceInput, {
      target: { value: "Tacos" }, // Tacos cannot use Number("Tacos")
    });

    fireEvent.click(submitBtn);

    await findByText("Price should be a number value");
  });

  test("Price should be between 0 and 99999", async () => {
    const { findByTestId, findByText } = render(<CreateListingForm />);

    const titleInput = await findByTestId("titleInput");
    const priceInput = await findByTestId("priceInput");
    const submitBtn = await findByTestId("submitBtn");

    fireEvent.input(titleInput, { target: { value: "A great title" } });
    fireEvent.input(priceInput, {
      target: { value: "-13" },
    });

    fireEvent.click(submitBtn);

    await findByText("Price should at least have a value of 0");

    fireEvent.input(priceInput, {
      target: { value: "102910" },
    });

    fireEvent.click(submitBtn);

    await findByText("Price should be no more than 99999");
  });

  test("Price should not be empty", async () => {
    const { findByTestId, findByText } = render(<CreateListingForm />);

    const titleInput = await findByTestId("titleInput");
    const priceInput = await findByTestId("priceInput");
    const submitBtn = await findByTestId("submitBtn");

    fireEvent.input(titleInput, { target: { value: "A great title" } });

    fireEvent.click(submitBtn);

    await findByText("Price should not be empty");
  });
});
