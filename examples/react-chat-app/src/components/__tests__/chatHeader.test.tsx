import { render, screen } from "@testing-library/react";
import { expect, test } from 'vitest'
import ChatHeader from "../ChatHeader";


  test("displays 'Loading...' when loading is true", () => {
    render(<ChatHeader loading={true} />);
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("displays 'Landbot core example' when loading is false", () => {
    render(<ChatHeader loading={false} />);
    expect(screen.getByText("Landbot core example")).toBeInTheDocument();
  });

