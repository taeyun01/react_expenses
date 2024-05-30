import { createSlice } from "@reduxjs/toolkit";

const testData = [
  {
    id: "25600f72-56b4-41a7-a9c2-47358580e252",
    date: "2022-01-05",
    item: "식비",
    amount: 100000,
    description: "세광양대창",
  },
  {
    id: "25600f72-53b4-4187-a9c2-473585854",
    date: "2021-01-10",
    item: "도서",
    amount: 40500,
    description: "모던 자바스크립트",
  },
  {
    id: "24310f72-56b4-41a7-a9c2-458580ef1f45",
    date: "2024-01-20",
    item: "식비",
    amount: 50000,
    description: "회식",
  },
  {
    id: "25600f72-99b4-41z7-e4h6-47312365e265",
    date: "2022-02-02",
    item: "간식",
    amount: 500,
    description: "아이스크림",
  },
  {
    id: "25143e72-16e2-22a7-a9c2-47358580e2f6",
    date: "2021-02-26",
    item: "여행",
    amount: 1055000,
    description: "일본여행",
  },
  {
    id: "25600f72-97p2-14a7-a9c2-47363950e2t7",
    date: "2022-02-15",
    item: "미용",
    amount: 155000,
    description: "미용실",
  },
  {
    id: "24312f70-97q2-14a7-a9c2-47132950e2t8",
    date: "2024-02-08",
    item: "도서",
    amount: 75000,
    description:
      "자율주행차량 운전주행모드 자동 전환용 인식률 90% 이상의 다중 센서 기반 운전자 상태 인식 및 상황 인식 원천 기술 개발",
  },
];

localStorage.getItem("expenses")
  ? JSON.parse(localStorage.getItem("expenses"))
  : localStorage.setItem("expenses", JSON.stringify(testData));

localStorage.getItem("selectMonth")
  ? JSON.parse(localStorage.getItem("selectMonth"))
  : localStorage.setItem("selectMonth", JSON.stringify(1));

const initialState = {
  expenses: testData,
  month: [
    {
      number: 1,
    },
    {
      number: 2,
    },
    {
      number: 3,
    },
    {
      number: 4,
    },
    {
      number: 5,
    },
    {
      number: 6,
    },
    {
      number: 7,
    },
    {
      number: 8,
    },
    {
      number: 9,
    },
    {
      number: 10,
    },
    {
      number: 11,
    },
    {
      number: 12,
    },
  ],
  totalMonth: "",
  sortType: "latest",
};

const expensesSlice = createSlice({
  name: "expenses",
  initialState,
  reducers: {
    createReducer: (state, action) => {
      state.expenses = [action.payload, ...state.expenses];
      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },
    deleteReducer: (state, action) => {
      const { id } = action.payload;
      state.expenses = state.expenses.filter((exp) => exp.id !== id);
      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },
    editReducer: (state, action) => {
      const { id, date, item, amount, description } = action.payload;
      state.expenses = state.expenses.map((exp) =>
        exp.id === id
          ? {
              ...exp,
              date,
              item,
              amount,
              description,
            }
          : exp
      );
      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },
    totalMonthReducer: (state, action) => {
      state.totalMonth = action.payload;
    },
    displayReducer: (state, action) => {
      state.expenses = action.payload;
    },
  },
});

export const {
  createReducer,
  deleteReducer,
  editReducer,
  totalMonthReducer,
  displayReducer,
  sortedReducer,
} = expensesSlice.actions;
export default expensesSlice.reducer;
