import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import App from "./App";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";

describe("測試Input元件與List元件之間的關聯", () => {
  test("原本在list頁面點選首頁按鈕會跳轉頁面，再度點擊list會回到list", async () => {
    render(
      <MemoryRouter initialEntries={["/list"]}>
        <Provider store={store}>
          <App />
        </Provider>
      </MemoryRouter>
    );
    const diary_btn = screen.queryByTestId("diarybtn");
    const homebtn = screen.queryByTestId("homebtn");
    const Billlist = await screen.findByTestId("billlist");
    expect(Billlist).toBeInTheDocument();
    fireEvent.click(homebtn);
    const BillInput = await screen.findByTestId("billinput");
    expect(BillInput).toBeInTheDocument();
    fireEvent.click(diary_btn);
    const Billlist2 = await screen.findByTestId("billlist");
    expect(Billlist2).toBeInTheDocument();
  });
});
