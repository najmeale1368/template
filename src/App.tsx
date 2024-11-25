import { Route, Routes } from "react-router-dom";
import FormWithValidation from "./pages/FormWithValidation/FormWithValidation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<FormWithValidation />} />
      </Routes>
    </>
  );
}

export default App;
