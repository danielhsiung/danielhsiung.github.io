import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import BillInput from "../component/BillInput";
import "@testing-library/jest-dom";
import { jest } from "@jest/globals";

describe("確認怪物打擊有正確運作", () => {
  test("測試選擇 110 年 11 月先輸入 11111111 後怪物血條會降低", () => {
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>
    );
    const bloodplay = screen.queryByTestId("bloodplay");
    const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
    const button = screen.queryByText("兌獎");
    fireEvent.change(input_box, { target: { value: "11111111" } });
    fireEvent.click(button);
    expect(bloodplay).toHaveStyle({
      transform: "scale(0.9,1)"
    });
  });
});

describe("測試Input元件是否都有正確運作", () => {
  test("button 有正確清空輸入匡", () => {
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>
    );
    const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
    const button = screen.queryByText("兌獎");
    fireEvent.change(input_box, { target: { value: "31150905" } });
    fireEvent.click(button);
    expect(input_box.value).toBe("");
  }),
    test("測試選擇 110 年 11 月 輸入 31150905 會跳出 congragulations", () => {
      render(
        <Provider store={store}>
          <BillInput />
        </Provider>
      );
      const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
      const button = screen.queryByText("兌獎");
      const congrats = screen.queryByTestId("congragulations");
      fireEvent.change(input_box, { target: { value: "31150905" } });
      fireEvent.click(button);
      expect(congrats).toHaveStyle({
        opacity: 1
      });
    }),
    test("測試選擇 110 年 11 月 輸入 11111111 不會跳出 congragulations", () => {
      render(
        <Provider store={store}>
          <BillInput />
        </Provider>
      );
      const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
      const button = screen.queryByText("兌獎");
      const congrats = screen.queryByTestId("congragulations");
      fireEvent.change(input_box, { target: { value: "11111111" } });
      fireEvent.click(button);
      expect(congrats).toHaveStyle({
        opacity: 0
      });
    });

  test("測試選擇 110 年 11 月 輸入 31150905 congragulations 中會顯示恭喜獲得特別獎", () => {
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>
    );
    const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
    const button = screen.queryByText("兌獎");
    const congrats_text = screen.queryByRole("heading");
    fireEvent.change(input_box, { target: { value: "31150905" } });
    fireEvent.click(button);
    expect(congrats_text).toHaveTextContent("恭喜獲得特別獎");
  });

  test("測試選擇 110 年 11 月先輸入 11111111 後輸入 31150905 會跳出 congragulations", () => {
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>
    );
    const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
    const button = screen.queryByText("兌獎");
    const congrats_text = screen.queryByRole("heading");
    fireEvent.change(input_box, { target: { value: "11111111" } });
    fireEvent.click(button);
    fireEvent.change(input_box, { target: { value: "31150905" } });
    fireEvent.click(button);
    expect(congrats_text).toHaveTextContent("恭喜獲得特別獎");
  });

  test("測試選擇 110 年 11 月輸入 1111 會跳出警訊", () => {
    render(
      <Provider store={store}>
        <BillInput />
      </Provider>
    );
    const alertMock = jest.spyOn(window, "alert").mockImplementation();

    const input_box = screen.queryByPlaceholderText("請輸入發票全8碼...");
    const button = screen.queryByText("兌獎");

    fireEvent.change(input_box, { target: { value: "1111" } });
    fireEvent.click(button);
    expect(alertMock).toHaveBeenCalledTimes(1);
  });
});
