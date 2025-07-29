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

const otherItems = [
  { title: "Settings", url: "/admin/settings", icon: Settings },
  { title: "Payment", url: "/admin/payment", icon: CreditCard },
  { title: "Accounts", url: "/admin/accounts", icon: UserCheck },
  { title: "Help", url: "/admin/help", icon: HelpCircle },
];

const AdminSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { collapsed } = useSidebar();

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  const isActive = (path) => location.pathname === path;

  return (
    <Sidebar 
      className="border-r border-border bg-background"
      collapsible="icon"
    >
      {/* Header */}
      <SidebarHeader className="p-4 border-b border-border bg-background">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-primary rounded-full flex items-center justify-center shrink-0">
            <span className="text-primary-foreground font-bold text-sm">IP</span>
          </div>
          {!collapsed && (
            <div className="min-w-0">
              <h2 className="font-semibold text-foreground text-sm">IPExpose</h2>
              <p className="text-xs text-muted-foreground">Admin Portal</p>
            </div>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent className="px-3 py-4">
        {/* Menu Section */}
        <SidebarGroup className="mb-6">
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Menu
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    className={`w-full justify-start transition-colors mb-1 h-10 ${
                      isActive(item.url) 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="ml-3 truncate">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Others Section */}
        <SidebarGroup>
          <SidebarGroupLabel className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-3 px-2">
            Others
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {otherItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton
                    onClick={() => navigate(item.url)}
                    className={`w-full justify-start transition-colors mb-1 h-10 ${
                      isActive(item.url) 
                        ? "bg-primary text-primary-foreground hover:bg-primary/90" 
                        : "hover:bg-accent hover:text-accent-foreground"
                    }`}
                  >
                    <item.icon className="w-4 h-4 shrink-0" />
                    {!collapsed && <span className="ml-3 truncate">{item.title}</span>}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>

      {/* Footer */}
      <SidebarFooter className="p-3 border-t border-border bg-background">
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton
              onClick={handleLogout}
              className="w-full justify-start text-destructive hover:bg-destructive/10 hover:text-destructive transition-colors h-10"
            >
              <LogOut className="w-4 h-4 shrink-0" />
              {!collapsed && <span className="ml-3">Logout</span>}
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
        
        {/* Sidebar Toggle */}
        <div className="mt-2">
          <SidebarTrigger className="w-full h-8" />
        </div>
      </SidebarFooter>
    </Sidebar>
  );
};

export default AdminSidebar;
