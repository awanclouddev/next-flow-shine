import { Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import RegistrationSuccess from "./pages/RegistrationSuccess";
import RegistrationConfirmation from "./pages/RegistrationConfirmation";
import AdminLogin from "./pages/admin/Login";
import AdminLayout from "./components/admin/AdminLayout";
import AdminDashboard from "./pages/admin/Dashboard";
import AdminParticipants from "./pages/admin/Participants";
import AdminBarcodeScanner from "./pages/admin/BarcodeScanner";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Index />} />
        <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/registration-confirmation" element={<RegistrationConfirmation />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin" element={<AdminLayout />}>
          <Route path="dashboard" element={<AdminDashboard />} />
          <Route path="participants" element={<AdminParticipants />} />
          <Route path="scanner" element={<AdminBarcodeScanner />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;