import { Route, Routes } from "react-router-dom";
import ValidationForm from "./pages/ValidationForm/ValidationForm";
// import FormWithValidation from "./pages/FormWithValidation/FormWithValidation";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<ValidationForm />} />
        {/* <Route path="/" element={<FormWithValidation />} /> */}
      </Routes>
    </>
  );
}

export default App;
