import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Camera, CameraOff, Scan, UserCheck, X, CheckCircle, AlertCircle, ArrowLeft } from 'lucide-react';
import { toast } from '@/components/ui/use-toast';

const BarcodeScanner = () => {
  const navigate = useNavigate();
  const videoRef = useRef(null);
  const [isScanning, setIsScanning] = useState(false);
  const [hasCamera, setHasCamera] = useState(false);
  const [manualCode, setManualCode] = useState('');
  const [scannedResult, setScannedResult] = useState(null);
  const [participantInfo, setParticipantInfo] = useState(null);
  const [recentScans, setRecentScans] = useState([
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      code: 'QR001',
      time: '10:30',
      status: 'checked-in'
    },
    {
      id: 2,
      name: 'Sarah Smith',
      email: 'sarah@example.com',
      code: 'QR002',
      time: '10:15',
      status: 'checked-in'
    }
  ]);

  useEffect(() => {
    const isLoggedIn = localStorage.getItem('isAdminLoggedIn');
    if (!isLoggedIn) {
      navigate('/admin/login');
    }
    
    // Check if camera is available
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
      setHasCamera(true);
    }
  }, [navigate]);

  const startScanning = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ 
        video: { 
          facingMode: 'environment',
          width: { ideal: 640 },
          height: { ideal: 480 }
        } 
      });
      
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setIsScanning(true);
        toast({
          title: "Kamera Aktif",
          description: "Arahkan kamera ke barcode untuk memindai",
        });
      }
    } catch (error) {
      toast({
        title: "Error",
        description: "Tidak dapat mengakses kamera. Pastikan izin kamera telah diberikan.",
        variant: "destructive",
      });
    }
  };

  const stopScanning = () => {
    if (videoRef.current && videoRef.current.srcObject) {
      const tracks = videoRef.current.srcObject.getTracks();
      tracks.forEach(track => track.stop());
      videoRef.current.srcObject = null;
    }
    setIsScanning(false);
  };

  const handleManualSubmit = (e) => {
    e.preventDefault();
    if (manualCode.trim()) {
      processBarcode(manualCode.trim());
      setManualCode('');
    }
  };

  const processBarcode = (code) => {
    // Simulate participant lookup
    const mockParticipant = {
      name: 'John Doe',
      email: 'john@example.com',
      company: 'PT. Technology Solutions',
      registrationId: code,
      registrationDate: '15 Juli 2025',
      status: 'registered'
    };

    setScannedResult(code);
    setParticipantInfo(mockParticipant);
    
    // Add to recent scans
    const newScan = {
      id: recentScans.length + 1,
      name: mockParticipant.name,
      email: mockParticipant.email,
      code: code,
      time: new Date().toLocaleTimeString('id-ID', { hour: '2-digit', minute: '2-digit' }),
      status: 'checked-in'
    };
    setRecentScans([newScan, ...recentScans.slice(0, 4)]);

    toast({
      title: "Barcode Berhasil Dipindai",
      description: `Peserta ${mockParticipant.name} telah check-in`,
    });
  };

  const confirmCheckIn = () => {
    if (participantInfo) {
      toast({
        title: "Check-in Berhasil",
        description: `${participantInfo.name} telah dicatat hadir`,
      });
      
      // Reset states
      setScannedResult(null);
      setParticipantInfo(null);
    }
  };

  const resetScan = () => {
    setScannedResult(null);
    setParticipantInfo(null);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      {/* Header */}
      <div className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-3">
              <Button
                variant="ghost"
                size="sm"
                onClick={() => navigate('/admin/dashboard')}
                className="mr-2"
              >
                <ArrowLeft className="h-4 w-4" />
              </Button>
              <img 
                src="/lovable-uploads/2a9754aa-9a18-46dd-b388-ad079832413e.png" 
                alt="IPExpose Indonesia Logo" 
                className="h-8 w-auto object-contain"
              />
              <div>
                <h1 className="text-xl font-bold text-foreground">Scanner Barcode</h1>
                <p className="text-sm text-muted-foreground">IPExpose Indonesia 2025</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4">
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {recentScans.length} scan hari ini
              </Badge>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scanner Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Scan className="h-5 w-5" />
                  Pemindaian Barcode
                </CardTitle>
                <CardDescription>
                  Pilih metode pemindaian barcode peserta
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Tabs defaultValue="camera" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="camera" disabled={!hasCamera}>
                      <Camera className="h-4 w-4 mr-2" />
                      Scan Otomatis
                    </TabsTrigger>
                    <TabsTrigger value="manual">
                      <Scan className="h-4 w-4 mr-2" />
                      Input Manual
                    </TabsTrigger>
                  </TabsList>
                  
                  <TabsContent value="camera" className="mt-6">
                    <div className="space-y-4">
                      <div className="relative bg-gray-100 rounded-lg overflow-hidden" style={{ aspectRatio: '4/3' }}>
                        {isScanning ? (
                          <video
                            ref={videoRef}
                            autoPlay
                            playsInline
                            className="w-full h-full object-cover"
                          />
                        ) : (
                          <div className="w-full h-full flex items-center justify-center">
                            <div className="text-center">
                              <CameraOff className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-500">Kamera tidak aktif</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Scanning overlay */}
                        {isScanning && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-64 h-64 border-2 border-blue-500 rounded-lg opacity-50">
                              <div className="w-full h-full border border-white rounded-lg animate-pulse" />
                            </div>
                          </div>
                        )}
                      </div>
                      
                      <div className="flex gap-2">
                        {!isScanning ? (
                          <Button onClick={startScanning} className="flex-1">
                            <Camera className="h-4 w-4 mr-2" />
                            Mulai Scan
                          </Button>
                        ) : (
                          <Button onClick={stopScanning} variant="destructive" className="flex-1">
                            <CameraOff className="h-4 w-4 mr-2" />
                            Berhenti Scan
                          </Button>
                        )}
                      </div>
                    </div>
                  </TabsContent>
                  
                  <TabsContent value="manual" className="mt-6">
                    <form onSubmit={handleManualSubmit} className="space-y-4">
                      <div>
                        <Label htmlFor="manualCode">Kode Barcode</Label>
                        <Input
                          id="manualCode"
                          type="text"
                          placeholder="Masukkan kode barcode..."
                          value={manualCode}
                          onChange={(e) => setManualCode(e.target.value)}
                          className="mt-1"
                        />
                      </div>
                      <Button type="submit" className="w-full">
                        <Scan className="h-4 w-4 mr-2" />
                        Proses Barcode
                      </Button>
                    </form>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Scan Result */}
            {scannedResult && participantInfo && (
              <Card className="border-green-200 bg-green-50">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-green-700">
                    <CheckCircle className="h-5 w-5" />
                    Hasil Pemindaian
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Nama Peserta</Label>
                        <p className="text-lg font-semibold">{participantInfo.name}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Email</Label>
                        <p className="text-lg">{participantInfo.email}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Perusahaan</Label>
                        <p className="text-lg">{participantInfo.company}</p>
                      </div>
                      <div>
                        <Label className="text-sm font-medium text-gray-600">Kode Registrasi</Label>
                        <p className="text-lg font-mono">{participantInfo.registrationId}</p>
                      </div>
                    </div>
                    
                    <Separator />
                    
                    <div className="flex gap-2">
                      <Button onClick={confirmCheckIn} className="flex-1">
                        <UserCheck className="h-4 w-4 mr-2" />
                        Konfirmasi Check-in
                      </Button>
                      <Button onClick={resetScan} variant="outline">
                        <X className="h-4 w-4 mr-2" />
                        Reset
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            )}
          </div>

          {/* Recent Scans Sidebar */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle>Scan Terbaru</CardTitle>
                <CardDescription>
                  Daftar peserta yang baru saja check-in
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {recentScans.map((scan) => (
                    <div key={scan.id} className="flex items-center gap-3 p-3 rounded-lg bg-muted/50">
                      <div className="p-2 rounded-full bg-green-100">
                        <UserCheck className="h-4 w-4 text-green-600" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="font-medium text-foreground truncate">{scan.name}</p>
                        <p className="text-sm text-muted-foreground truncate">{scan.email}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-xs">
                            {scan.code}
                          </Badge>
                          <span className="text-xs text-muted-foreground">{scan.time}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Quick Stats */}
            <Card className="mt-6">
              <CardHeader>
                <CardTitle>Statistik Hari Ini</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Total Check-in</span>
                    <span className="text-sm font-medium">127</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Peserta Hadir</span>
                    <span className="text-sm font-medium text-green-600">87%</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Belum Check-in</span>
                    <span className="text-sm font-medium">19</span>
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

export default BarcodeScanner;