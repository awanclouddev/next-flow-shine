import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SidebarProvider } from "@/components/ui/sidebar";
import AdminSidebar from "./AdminSidebar";

const AdminLayout = ({ children }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  return (
    <div className="min-h-screen flex w-full bg-background">
      {/* Bagian 1: Sidebar (Kiri) - Fixed width */}
      <div className="w-64 bg-card border-r border-border flex-shrink-0">
        <AdminSidebar />
      </div>
      
      {/* Bagian 2: Content Area (Kanan) - Flexible width */}
      <div className="flex-1 overflow-hidden">
        <main className="h-screen overflow-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;