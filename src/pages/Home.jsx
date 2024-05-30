import ExpensesInput from "../components/ExpensesInput";
import ExpensesList from "../components/ExpensesList";
import Margin from "../components/Margin";
import SelectMonth from "../components/SelectMonth";

const Home = () => {
  return (
    <>
      <ExpensesInput />
      <Margin />
      <SelectMonth />
      <Margin />
      <ExpensesList />
    </>
  );
};

export default Home;
