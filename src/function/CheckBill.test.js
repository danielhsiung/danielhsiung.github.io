import FetchBill from "./CheckBill";

describe("發票兌獎測試器", () => {
  test("輸入為110 1131150905應該出現特別獎", () => {
    expect(FetchBill(11011, "31150905")).toEqual("恭喜獲得特別獎");
  });

  test("輸入為110 28564531應該出現特獎", () => {
    expect(FetchBill(11011, "28564531")).toEqual("恭喜獲得特獎");
  });

  test("輸入為110 05754219應該出現頭獎", () => {
    expect(FetchBill(11011, "05754219")).toEqual("恭喜獲得頭獎");
  });

  test("輸入為110 05954219應該出現六獎", () => {
    expect(FetchBill(11011, "05854219")).toEqual("恭喜獲得四獎");
  });

  test("輸入為110 05954219應該出現六獎", () => {
    expect(FetchBill(11011, "05857219")).toEqual("恭喜獲得六獎");
  });

  test("輸入為11101 46596321應該出現頭獎", () => {
    expect(FetchBill(11101, "46596321")).toEqual("恭喜獲得頭獎");
  });

  test("輸入為11101 48596321應該出現三獎", () => {
    expect(FetchBill(11101, "48596321")).toEqual("恭喜獲得三獎");
  });

  test("輸入為11103 28467179應該出現頭獎", () => {
    expect(FetchBill(11103, "28467179")).toEqual("恭喜獲得頭獎");
  });
});
