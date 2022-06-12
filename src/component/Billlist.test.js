import { fireEvent, render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../store";
import Billlist from "./Billlist";
import "@testing-library/jest-dom";

describe("測試清單功能可以正常運作",()=>{
    test("清單可以成功載入", async()=>{
        render(
            <Provider store={store}>
                <Billlist/>
            </Provider>
        )
         const table = await screen.findByTestId("table")
         expect(table).toBeTruthy();
    })

    test("點選 111 1-2 月按鈕可以成功跳出 1-2 月資料", async()=>{
        render(
            <Provider store={store}>
                <Billlist/>
            </Provider>
        )
         const table = await screen.findByTestId("table")
         const monthbtn = screen.queryByTestId("11101")
    
         fireEvent.click(monthbtn)
         const month= await screen.queryAllByTestId("months")
         expect(month[0]).toHaveTextContent("11101");
    })
})