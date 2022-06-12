import { screen, render } from "@testing-library/react";
import Billaward from "./BillAward";
import { Provider } from "react-redux";
import store from "../store";

describe("檢查獎章頁面", () => {
  test("測試一開始九個獎章有正常畫出", () => {
    render(
      <Provider store={store}>
        <Billaward />
      </Provider>
    );
    const award = screen.queryAllByTestId("award");
    expect(award.length).toBe(9);
  });
});
