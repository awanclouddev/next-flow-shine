import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import AdminLogin from "./pages/admin/Login";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminParticipants from "./pages/admin/Participants";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />
        <Route path="/admin/participants" element={<AdminParticipants />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;