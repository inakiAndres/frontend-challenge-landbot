import { render, screen, fireEvent } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import ChatInput from "../ChatInput";
import { vi } from "vitest";
import React from "react";

import { useLandbotCore } from "../../lib/hooks/useLandbotCore";

vi.mock("../../lib/hooks/useLandbotCore", () => ({
  useLandbotCore: vi.fn(() => ({ current: { sendMessage: vi.fn() } }))
}));

describe("ChatInput component", () => {
  const mockStore = configureStore([]);
  let store;

  beforeEach(() => {
    store = mockStore({
      config: { config: { text: { text_input_placeholder: "Type a message..." } } }
    });
  });

  it("renders input and button", () => {
    render(
      <Provider store={store}>
        <ChatInput />
      </Provider>
    );
    expect(screen.getByPlaceholderText("Type a message...")).toBeInTheDocument();
    expect(screen.getByRole("button")).toBeDisabled();
  });

  it("enables button when input has text", () => {
    render(
      <Provider store={store}>
        <ChatInput />
      </Provider>
    );
    const input = screen.getByPlaceholderText("Type a message...");
    fireEvent.change(input, { target: { value: "Hello" } });
    expect(screen.getByRole("button")).not.toBeDisabled();
  });

  it("sends message and clears input when clicking send", () => {
    const sendMessageMock = vi.fn();
    (useLandbotCore as jest.Mock).mockReturnValue({ current: { sendMessage: sendMessageMock } });
    
    render(
      <Provider store={store}>
        <ChatInput />
      </Provider>
    );

    const input = screen.getByPlaceholderText("Type a message...");
    const button = screen.getByRole("button");
    
    fireEvent.change(input, { target: { value: "Hello" } });
    fireEvent.click(button);
    
    expect(sendMessageMock).toHaveBeenCalledWith({ message: "Hello" });
    expect(input.value).toBe("");
  });
});
