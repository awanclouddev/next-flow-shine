import React from 'react';
import { Clock, Calendar, MapPin, QrCode } from 'lucide-react';
import { Card } from '@/components/ui/card';

const RegistrationConfirmation = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4">
      <div className="max-w-4xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-2xl">
          {/* Header with logos */}
          <div className="bg-white p-6 flex justify-between items-center border-b">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">DGIP</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-orange-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xs">IP XPOSE</span>
              </div>
            </div>
          </div>

          {/* Main content */}
          <div className="relative bg-gradient-to-br from-blue-600 via-blue-700 to-blue-800 text-white">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 opacity-10">
              <div className="w-full h-full bg-white rounded-full transform translate-x-32 -translate-y-32"></div>
            </div>
            <div className="absolute bottom-0 left-0 w-48 h-48 opacity-5">
              <div className="w-full h-full bg-white rounded-full transform -translate-x-24 translate-y-24"></div>
            </div>

            <div className="relative z-10 p-12">
              {/* IP Exhibition branding */}
              <div className="text-center mb-8">
                <div className="flex items-center justify-center mb-4">
                  <div className="text-6xl font-bold">
                    <span className="text-blue-300">i</span>
                    <span className="text-orange-400">P</span>
                  </div>
                  <span className="text-3xl font-light ml-2 tracking-wider">EXHIBITION</span>
                </div>
              </div>

              {/* Success message */}
              <div className="text-center mb-8">
                <p className="text-green-300 text-lg font-medium mb-4">
                  ANDA TELAH BERHASIL MENDAFTAR
                </p>
                <h1 className="text-3xl font-bold mb-2">
                  "REGISTRASI PENGUNJUNG
                </h1>
                <h2 className="text-3xl font-bold">
                  IP XPOSE 2025"
                </h2>
              </div>

              {/* Event details */}
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-xl">09:00 - 16:00</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-xl">13 - 16 Agustus 2025</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xl">Convention Hall, SMESCO</div>
                      <div className="text-lg opacity-90">Jakarta Selatan</div>
                    </div>
                  </div>
                </div>

                {/* QR Code section */}
                <div className="flex justify-center">
                  <div className="bg-white p-6 rounded-2xl">
                    <div className="w-32 h-32 bg-black rounded-lg flex items-center justify-center">
                      <QrCode className="w-24 h-24 text-white" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative border */}
            <div className="h-8 bg-white">
              <svg viewBox="0 0 400 20" className="w-full h-full">
                <defs>
                  <pattern id="scallop" x="0" y="0" width="40" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="0" r="20" fill="rgb(37, 99, 235)" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#scallop)" />
              </svg>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-blue-900 text-white p-6">
            <div className="flex justify-between items-center">
              <span>ipxpose@dgip.go.id</span>
              <span>ipxpose.dgip.go.id</span>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;