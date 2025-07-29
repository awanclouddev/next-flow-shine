import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Users, Building, Calendar, TrendingUp, Eye, UserPlus, Mail, Scan } from 'lucide-react';

const AdminDashboard = () => {
  const navigate = useNavigate();

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

  const stats = [
    {
      title: 'Total Pendaftar',
      value: '4,237',
      description: '+125 hari ini',
      icon: Users,
      trend: '+12%',
      color: 'text-blue-600',
      bgColor: 'bg-blue-100'
    },
    {
      title: 'Total Exhibitor',
      value: '127',
      description: '+8 bulan ini',
      icon: Building,
      trend: '+8%',
      color: 'text-green-600',
      bgColor: 'bg-green-100'
    },
    {
      title: 'Hari Tersisa',
      value: '156',
      description: 'hingga event dimulai',
      icon: Calendar,
      trend: '',
      color: 'text-orange-600',
      bgColor: 'bg-orange-100'
    },
    {
      title: 'Tingkat Kehadiran',
      value: '87%',
      description: 'dari target peserta',
      icon: TrendingUp,
      trend: '+5%',
      color: 'text-purple-600',
      bgColor: 'bg-purple-100'
    }
  ];

  const recentActivities = [
    {
      id: 1,
      action: 'Pendaftaran baru',
      detail: 'John Doe mendaftar sebagai peserta',
      time: '2 menit yang lalu',
      icon: UserPlus,
      color: 'text-blue-600'
    },
    {
      id: 2,
      action: 'Email terkirim',
      detail: 'Konfirmasi pendaftaran dikirim ke 50 peserta',
      time: '15 menit yang lalu',
      icon: Mail,
      color: 'text-green-600'
    },
    {
      id: 3,
      action: 'Exhibitor baru',
      detail: 'PT. Tech Innovation bergabung sebagai exhibitor',
      time: '1 jam yang lalu',
      icon: Building,
      color: 'text-purple-600'
    },
    {
      id: 4,
      action: 'Pendaftaran baru',
      detail: 'Sarah Smith mendaftar sebagai peserta',
      time: '2 jam yang lalu',
      icon: UserPlus,
      color: 'text-blue-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
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
            
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                onClick={() => navigate('/admin/participants')}
              >
                <Users className="h-4 w-4 mr-2" />
                Kelola Peserta
              </Button>
              <Button variant="outline" onClick={handleLogout}>
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-foreground mb-2">Selamat Datang, Admin!</h2>
          <p className="text-muted-foreground">
            Kelola event IPExpose Indonesia 2025 dari dashboard ini
          </p>
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm font-medium text-muted-foreground mb-1">
                      {stat.title}
                    </p>
                    <p className="text-3xl font-bold text-foreground">
                      {stat.value}
                    </p>
                    <p className="text-sm text-muted-foreground mt-1">
                      {stat.description}
                    </p>
                    {stat.trend && (
                      <p className="text-sm text-green-600 font-medium mt-1">
                        {stat.trend} dari bulan lalu
                      </p>
                    )}
                  </div>
                  <div className={`p-3 rounded-full ${stat.bgColor}`}>
                    <stat.icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Activities */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Aktivitas Terbaru</CardTitle>
                <CardDescription>
                  Pantau aktivitas terbaru di platform
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentActivities.map((activity) => (
                    <div key={activity.id} className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted/50">
                      <div className={`p-2 rounded-full bg-muted`}>
                        <activity.icon className={`h-4 w-4 ${activity.color}`} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground">{activity.action}</p>
                        <p className="text-sm text-muted-foreground">{activity.detail}</p>
                        <p className="text-xs text-muted-foreground mt-1">{activity.time}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Quick Actions */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Aksi Cepat</CardTitle>
                <CardDescription>
                  Akses fitur utama dengan cepat
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-3">
                <Button 
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/participants')}
                >
                  <Users className="h-4 w-4 mr-2" />
                  Kelola Peserta
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/participants')}
                >
                  <Eye className="h-4 w-4 mr-2" />
                  Lihat Detail Peserta
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                  onClick={() => navigate('/admin/scanner')}
                >
                  <Scan className="h-4 w-4 mr-2" />
                  Scanner Barcode
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Mail className="h-4 w-4 mr-2" />
                  Kirim Email Massal
                </Button>
                <Button 
                  variant="outline" 
                  className="w-full justify-start"
                >
                  <Building className="h-4 w-4 mr-2" />
                  Kelola Exhibitor
                </Button>
              </CardContent>
            </Card>

            {/* Event Info */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Info Event</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Tanggal Event</span>
                    <span className="text-sm font-medium">13-16 Agu 2025</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Lokasi</span>
                    <span className="text-sm font-medium">Jakarta</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Kapasitas</span>
                    <span className="text-sm font-medium">5,000 peserta</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Status</span>
                    <span className="text-sm font-medium text-green-600">Aktif</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;