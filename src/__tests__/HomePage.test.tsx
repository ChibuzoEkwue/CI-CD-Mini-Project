import { render, screen } from "@testing-library/react";
import HomePage from "@/app/page";

describe("HomePage (Server Component)", () => {
  it("should contain home text", async () => {
    // Call the server component like a function
    const ui = await HomePage();

    // Render the resolved JSX
    render(ui);

    expect(screen.getByTestId("home-text")).toBeInTheDocument();
    expect(screen.getByTestId("home-text")).toHaveTextContent(
      "Welcome to the CI/CD Mini Project",
    );
  });
});
