import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { 
  BarChart3, 
  Users, 
  QrCode, 
  Settings, 
  CreditCard, 
  UserCheck, 
  HelpCircle,
  LogOut,
  Menu
} from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarHeader,
  SidebarFooter,
  SidebarTrigger,
  useSidebar,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";

const menuItems = [
  { title: "Dashboard", url: "/admin/dashboard", icon: BarChart3 },
  { title: "Participants", url: "/admin/participants", icon: Users },
  { title: "Barcode Scanner", url: "/admin/scanner", icon: QrCode },
];


const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <div className="h-screen flex flex-col bg-card">
      {/* Header */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-sm">IP</span>
          </div>
          <div className="min-w-0">
            <h2 className="font-semibold text-foreground text-sm">IPExpose</h2>
            <p className="text-xs text-muted-foreground">Admin Portal</p>
          </div>
        </div>
      </div>

      {/* Menu Content */}
      <div className="flex-1 px-3 py-4 overflow-auto">
        <div className="mb-6">
          <div className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            MENU
          </div>
          <div className="space-y-1">
            {menuItems.map((item) => (
              <button
                key={item.title}
                onClick={() => navigate(item.url)}
                className={`w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm transition-colors ${
                  isActive(item.url) 
                    ? "bg-primary text-primary-foreground" 
                    : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"
                }`}
              >
                <item.icon className="w-4 h-4 shrink-0" />
                <span className="truncate">{item.title}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-3 border-t border-border">
        <button
          onClick={handleLogout}
          className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-sm text-destructive hover:bg-destructive/10 transition-colors"
        >
          <LogOut className="w-4 h-4 shrink-0" />
          <span>Logout</span>
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;
