import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  expenses: [],
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
      state.expenses = state.expenses.filter(
        (exp) => exp.id !== action.payload.id
      );
      localStorage.setItem(
        "expenses",
        JSON.stringify(state.expenses)
      );
    },
    editReducer: (state, action) => {
      state.expenses = state.expenses.map((exp) =>
        exp.id === action.payload.id
          ? {
              ...exp,
              date: action.payload.date,
              item: action.payload.item,
              amount: action.payload.amount,
              description: action.payload.description,
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
    sortedReducer: (state, action) => {
      state.sortType = action.payload;
      localStorage.setItem(
        "sortType",
        JSON.stringify(state.sortType)
      );
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
