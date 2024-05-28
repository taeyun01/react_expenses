import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";
import TotalExpenses from "../components/TotalExpenses";

const Home = () => {
  return (
    <>
      <ExpensesInput />
      <Margin />
      <SelectMonth />
      <Margin />
      <TotalExpenses />
      <Margin />
      <ExpensesList />
    </>
  );
};

export default Home;
