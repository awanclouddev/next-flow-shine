import { NavLink, useLocation } from 'react-router-dom';
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarFooter,
  SidebarHeader,
  useSidebar,
} from '@/components/ui/sidebar';
import { Button } from '@/components/ui/button';
import { 
  LayoutDashboard, 
  Users, 
  Scan, 
  Mail, 
  Building, 
  Eye,
  Settings,
  LogOut,
  Calendar,
  BarChart3
} from 'lucide-react';

const menuItems = [
  {
    title: 'Dashboard',
    url: '/admin/dashboard',
    icon: LayoutDashboard,
  },
  {
    title: 'Kelola Peserta',
    url: '/admin/participants',
    icon: Users,
  },
  {
    title: 'Scanner Barcode',
    url: '/admin/scanner',
    icon: Scan,
  },
];

const quickActions = [
  {
    title: 'Lihat Detail Peserta',
    url: '/admin/participants',
    icon: Eye,
  },
  {
    title: 'Kirim Email Massal',
    url: '#',
    icon: Mail,
  },
  {
    title: 'Kelola Exhibitor',
    url: '#',
    icon: Building,
  },
  {
    title: 'Laporan Event',
    url: '#',
    icon: BarChart3,
  },
];

export function AdminSidebar({ onLogout }) {
  const { collapsed } = useSidebar();
  const location = useLocation();
  const currentPath = location.pathname;

  const isActive = (path) => currentPath === path;
  
  const getNavClasses = (path) => 
    isActive(path) 
      ? "bg-primary text-primary-foreground hover:bg-primary/90" 
      : "hover:bg-muted";

  return (
    <Sidebar className={collapsed ? "w-16" : "w-64"} collapsible>
      <SidebarHeader className="border-b">
        <div className="flex items-center gap-2 p-4">
          {!collapsed && (
            <>
              <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                <Settings className="h-4 w-4 text-primary-foreground" />
              </div>
              <div>
                <h2 className="font-semibold text-sm">Admin Panel</h2>
                <p className="text-xs text-muted-foreground">IPExpose 2025</p>
              </div>
            </>
          )}
        </div>
      </SidebarHeader>

      <SidebarContent>
        {/* Main Navigation */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && "Navigasi Utama"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {menuItems.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={item.url} 
                      className={getNavClasses(item.url)}
                    >
                      <item.icon className="h-4 w-4" />
                      {!collapsed && <span>{item.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Quick Actions */}
        <SidebarGroup>
          <SidebarGroupLabel>
            {!collapsed && "Aksi Cepat"}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {quickActions.map((action) => (
                <SidebarMenuItem key={action.title}>
                  <SidebarMenuButton asChild>
                    <NavLink 
                      to={action.url}
                      className={getNavClasses(action.url)}
                      onClick={(e) => {
                        if (action.url === '#') {
                          e.preventDefault();
                          alert(`${action.title} - Fitur dalam pengembangan`);
                        }
                      }}
                    >
                      <action.icon className="h-4 w-4" />
                      {!collapsed && <span>{action.title}</span>}
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>

        {/* Event Info */}
        {!collapsed && (
          <SidebarGroup>
            <SidebarGroupLabel>Info Event</SidebarGroupLabel>
            <SidebarGroupContent>
              <div className="p-4 bg-muted/50 rounded-lg space-y-2">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4 text-muted-foreground" />
                  <div>
                    <p className="text-xs font-medium">13-16 Agu 2025</p>
                    <p className="text-xs text-muted-foreground">Jakarta</p>
                  </div>
                </div>
                <div className="text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Peserta:</span>
                    <span className="font-medium">4,237</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Exhibitor:</span>
                    <span className="font-medium">127</span>
                  </div>
                </div>
              </div>
            </SidebarGroupContent>
          </SidebarGroup>
        )}
      </SidebarContent>

      <SidebarFooter className="border-t">
        <SidebarMenu>
          <SidebarMenuItem>
            <Button 
              variant="ghost" 
              className="w-full justify-start" 
              onClick={onLogout}
            >
              <LogOut className="h-4 w-4" />
              {!collapsed && <span>Logout</span>}
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarFooter>
    </Sidebar>
  );
}