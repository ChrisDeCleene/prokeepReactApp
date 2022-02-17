import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Auth from "../Auth";

const setIsLoggedIn = () => {};

const typeIntoForm = ({ email, password }) => {
  const emailInputElement = screen.getByRole("textbox");
  const passwordInputElement = screen.getByLabelText("Password");
  if (email) {
    userEvent.type(emailInputElement, email);
  }
  if (password) {
    userEvent.type(passwordInputElement, password);
  }
  return {
    emailInputElement,
    passwordInputElement,
  };
};

const clickSubmitButton = () => {
  const submitButtonElement = screen.getByRole("button", {
    name: /login/i,
  });

  userEvent.click(submitButtonElement);
};

describe("Auth", () => {
  beforeEach(() => {
    // eslint-disable-next-line testing-library/no-render-in-setup
    render(<Auth setIsLoggedIn={setIsLoggedIn} />);
  });
  test("inputs should be initially empty", () => {
    // Email input should be empty
    expect(screen.getByRole("textbox").value).toBe("");
    // Password input should be empty
    expect(screen.getByLabelText("Password").value).toBe("");
  });
  test("should be able to type an email", () => {
    const { emailInputElement } = typeIntoForm({ email: "eve.holt@reqres.in" });
    expect(emailInputElement.value).toBe("eve.holt@reqres.in");
  });
  test("should be able to type a password", () => {
    const { passwordInputElement } = typeIntoForm({ password: "password!" });
    expect(passwordInputElement.value).toBe("password!");
  });
  describe("Error Handling", () => {
    test("should show email error message on invalid email", () => {
      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();

      typeIntoForm({ email: "eve.holtreqres.in" });

      clickSubmitButton();

      expect(
        screen.getByText(/the email you input is invalid/i)
      ).toBeInTheDocument();
    });
    test("should show password error if password is less than 5 characters", () => {
      expect(
        screen.queryByText(
          /the password you entered must contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();

      // Type in a correct email and incorrect password
      typeIntoForm({ email: "eve.holt@reqres.in", password: "pass" });

      clickSubmitButton();

      expect(
        screen.getByText(
          /the password you entered must contain 5 or more characters/i
        )
      ).toBeInTheDocument();
    });
    test("should show no error message if every input is valid", () => {
      typeIntoForm({ email: "eve.holt@reqres.in", password: "password!" });

      clickSubmitButton();
      
      expect(
        screen.queryByText(/the email you input is invalid/i)
      ).not.toBeInTheDocument();

      expect(
        screen.queryByText(
          /the password you entered must contain 5 or more characters/i
        )
      ).not.toBeInTheDocument();
    });
  });
});
