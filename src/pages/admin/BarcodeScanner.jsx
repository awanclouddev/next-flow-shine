import { useState, useEffect, useRef } from 'react';
import QrScanner from 'qr-scanner';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Camera, CameraOff, Scan, UserCheck, X, CheckCircle } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const BarcodeScanner = () => {
  const videoRef = useRef(null);
  const qrScannerRef = useRef(null);
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
    // Check if camera is available
    QrScanner.hasCamera().then(hasCamera => {
      setHasCamera(hasCamera);
    });

    // Cleanup QR scanner on unmount
    return () => {
      if (qrScannerRef.current) {
        qrScannerRef.current.destroy();
      }
    };
  }, []);

  const startScanning = async () => {
    console.log('startScanning called');
    try {
      if (!videoRef.current) {
        console.error('Video ref not found');
        return;
      }

      console.log('Creating QR scanner instance');
      console.log('Video element:', videoRef.current);
      
      // Create QR scanner instance
      qrScannerRef.current = new QrScanner(
        videoRef.current,
        (result) => {
          console.log('QR Code detected:', result.data);
          // Process the scanned QR code
          processBarcode(result.data);
          // Stop scanning after successful scan
          stopScanning();
        },
        {
          preferredCamera: 'environment', // Use back camera
          highlightScanRegion: true,
          highlightCodeOutline: true,
          maxScansPerSecond: 5,
          returnDetailedScanResult: true,
        }
      );

      console.log('Starting QR scanner');
      await qrScannerRef.current.start();
      setIsScanning(true);
      
      // Ensure video is visible
      if (videoRef.current) {
        videoRef.current.style.display = 'block';
        console.log('Video display set to block');
      }
      
      toast({
        title: "Kamera Aktif",
        description: "Arahkan kamera ke QR code untuk memindai",
      });
      
      console.log('QR scanner started successfully');
    } catch (error) {
      console.error('Error starting QR scanner:', error);
      setIsScanning(false);
      toast({
        title: "Error",
        description: `Tidak dapat mengakses kamera: ${error.message}`,
        variant: "destructive",
      });
    }
  };

  const stopScanning = () => {
    if (qrScannerRef.current) {
      qrScannerRef.current.stop();
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
      title: "QR Code Berhasil Dipindai",
      description: `Data QR Code: ${code}`,
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
    <div className="p-8 space-y-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Scanner QR Code</h1>
          <p className="text-muted-foreground">IPExpose Indonesia 2025</p>
        </div>
        
        <Badge variant="outline" className="bg-green-50 text-green-700">
          {recentScans.length} scan hari ini
        </Badge>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Scanner Section */}
          <div className="lg:col-span-2">
            <Card className="mb-6">
              <CardHeader>
                 <CardTitle className="flex items-center gap-2">
                   <Scan className="h-5 w-5" />
                   Pemindaian QR Code
                 </CardTitle>
                 <CardDescription>
                   Pilih metode pemindaian QR code peserta
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
                        <video
                          ref={videoRef}
                          autoPlay
                          playsInline
                          muted
                          className="w-full h-full object-cover"
                        />
                        
                        {!isScanning && (
                          <div className="absolute inset-0 flex items-center justify-center bg-gray-100">
                            <div className="text-center">
                              <CameraOff className="h-16 w-16 mx-auto text-gray-400 mb-4" />
                              <p className="text-gray-500">Kamera tidak aktif</p>
                            </div>
                          </div>
                        )}
                        
                        {/* Scanning overlay */}
                        {isScanning && (
                          <div className="absolute inset-0 pointer-events-none">
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-64 h-64 border-4 border-blue-500 rounded-lg">
                                <div className="w-full h-full border-2 border-white rounded-lg animate-pulse opacity-70" />
                              </div>
                            </div>
                            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2">
                              <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-sm">
                                Memindai QR Code...
                              </div>
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
                         <Label htmlFor="manualCode">Kode QR Code</Label>
                         <Input
                           id="manualCode"
                           type="text"
                           placeholder="Masukkan teks dari QR code..."
                           value={manualCode}
                           onChange={(e) => setManualCode(e.target.value)}
                           className="mt-1"
                         />
                       </div>
                       <Button type="submit" className="w-full">
                         <Scan className="h-4 w-4 mr-2" />
                         Proses QR Code
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
  );
};

export default BarcodeScanner;