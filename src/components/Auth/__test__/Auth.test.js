import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Auth from "../Auth";

const setIsLoggedIn = () => {};

describe("Auth", () => {
  test("inputs should be initially empty", () => {
    render(<Auth setIsLoggedIn={setIsLoggedIn} />, { wrapper: MemoryRouter });
    // Email input should be empty
    expect(screen.getByRole("textbox").value).toBe("");
    // Password input should be empty
    expect(screen.getByLabelText("Password").value).toBe("");
  });
});
