import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import Auth from "../Auth";

const setIsLoggedIn = () => {};

describe("Auth", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Auth setIsLoggedIn={setIsLoggedIn} />, { wrapper: MemoryRouter });
  });
  test("inputs should be initially empty", () => {
    // Email input should be empty
    expect(screen.getByRole("textbox").value).toBe("");
    // Password input should be empty
    expect(screen.getByLabelText("Password").value).toBe("");
  });
  test("should be able to type an email", () => {
    const emailInputElement = screen.getByRole("textbox");
    userEvent.type(emailInputElement, "eve.holt@reqres.in");
    expect(emailInputElement.value).toBe("eve.holt@reqres.in");
  });
  test("should be able to type a password", () => {
    const passwordInputElement = screen.getByLabelText("Password");
    userEvent.type(passwordInputElement, "password!");
    expect(passwordInputElement.value).toBe("password!");
  });
  describe("Error Handling", () => {
    test("should show email error message on invalid email", () => {
      const invalidEmailMessageElement = screen.queryByText(
        /the email you input is invalid/i
      );
      expect(
        invalidEmailMessageElement
      ).not.toBeInTheDocument();

      userEvent.type(screen.getByLabelText("Email"), "eve.holtreqres.in");

      const submitButtonElement = screen.getByRole("button", {
        name: /login/i,
      });

      userEvent.click(submitButtonElement);
      
      expect(invalidEmailMessageElement).toBeInTheDocument()
    });
  });
});
