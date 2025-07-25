import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegistrationSuccess from "./pages/RegistrationSuccess";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;