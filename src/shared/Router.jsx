import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detail from "../pages/Detail";
import Home from "../pages/Home";
import Notfound from "../pages/Notfound";
import ExpenseProvider from "../context/Context";

const Router = () => {
  return (
    <ExpenseProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="*" element={<Notfound />} />
        </Routes>
      </BrowserRouter>
    </ExpenseProvider>
  );
};

export default Router;
