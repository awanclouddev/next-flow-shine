import { useEffect } from 'react';
import { useNavigate, useLocation, Outlet } from 'react-router-dom';
import { SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import { AdminSidebar } from './AdminSidebar';

const AdminLayout = () => {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem('isAdminLoggedIn');
    navigate('/admin/login');
  };

  return (
    <SidebarProvider defaultOpen={true}>
      <div className="min-h-screen flex w-full">
        <AdminSidebar onLogout={handleLogout} />
        
        <div className="flex-1 flex flex-col min-w-0">
          {/* Header */}
          <div className="bg-white border-b sticky top-0 z-10">
            <div className="flex items-center h-16 px-4 sm:px-6 lg:px-8">
              <SidebarTrigger className="mr-4" />
              <div className="flex items-center gap-3">
                <img 
                  src="/lovable-uploads/2a9754aa-9a18-46dd-b388-ad079832413e.png" 
                  alt="IPExpose Indonesia Logo" 
                  className="h-8 w-auto object-contain"
                />
                <div>
                  <h1 className="text-xl font-bold text-foreground">Admin Dashboard</h1>
                  <p className="text-sm text-muted-foreground">IPExpose Indonesia 2025</p>
                </div>
              </div>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1 bg-gradient-to-br from-blue-50 to-white overflow-auto">
            <Outlet />
          </div>
        </div>
      </div>
    </SidebarProvider>
  );
};

export default AdminLayout;