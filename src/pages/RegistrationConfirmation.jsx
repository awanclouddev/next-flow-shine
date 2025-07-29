import React from 'react';
import { Clock, Calendar, MapPin } from 'lucide-react';
import { Card } from '@/components/ui/card';

const RegistrationConfirmation = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-4 flex items-center justify-center">
      <div className="max-w-2xl mx-auto">
        <Card className="overflow-hidden border-0 shadow-2xl bg-white">
          {/* Header with logos */}
          <div className="bg-white p-6 flex justify-between items-center">
            <div className="flex items-center">
              {/* DJDKI Logo */}
              <img 
                src="/lovable-uploads/66947fd7-7c64-42db-b5e4-f6fdc3bcb546.png" 
                alt="DJDKI Logo" 
                className="h-16 w-auto"
              />
            </div>
            <div className="flex items-center">
              {/* IP XPOSE Logo */}
              <img 
                src="/lovable-uploads/433b8e5b-e251-40ad-bd4f-5a6f583b50a2.png" 
                alt="IP XPOSE Indonesia" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Main content with white background */}
          <div className="bg-white px-8 py-12">
            {/* IP EXHIBITION logo */}
            <div className="text-center mb-8">
              <img 
                src="/lovable-uploads/ef49a089-6124-4be5-860c-2c6ad0036815.png" 
                alt="IP EXHIBITION" 
                className="max-w-lg w-full h-auto mx-auto"
              />
            </div>

            {/* Success message */}
            <div className="text-center space-y-4">
              <p className="text-green-600 text-lg font-semibold tracking-wide">
                ANDA TELAH BERHASIL MENDAFTAR
              </p>
              <h1 className="text-2xl font-bold text-gray-800 leading-tight">
                "REGISTRASI PENGUNJUNG<br />
                IP XPOSE 2025"
              </h1>
            </div>
          </div>

          {/* Decorative scalloped border */}
          <div className="h-4 bg-blue-600 relative overflow-hidden">
            <svg viewBox="0 0 400 16" className="w-full h-full" preserveAspectRatio="none">
              <defs>
                <pattern id="scallop" x="0" y="0" width="20" height="16" patternUnits="userSpaceOnUse">
                  <circle cx="10" cy="0" r="8" fill="white" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="#2563eb" />
              <rect width="100%" height="100%" fill="url(#scallop)" />
            </svg>
          </div>

          {/* Blue section with event details */}
          <div className="bg-blue-600 text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              {/* Event details - LEFT SIDE */}
              <div className="space-y-6">
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">09:00 - 16:00</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <Calendar className="w-6 h-6 flex-shrink-0" />
                  <span className="text-lg font-medium">13 - 16 Agustus 2025</span>
                </div>
                
                <div className="flex items-center space-x-3">
                  <MapPin className="w-6 h-6 flex-shrink-0" />
                  <div className="text-lg font-medium">
                    <div>Convention Hall, SMESCO</div>
                    <div>Jakarta Selatan</div>
                  </div>
                </div>
              </div>

              {/* QR Code section - RIGHT SIDE */}
              <div className="flex justify-center md:justify-end">
                <div className="bg-white p-4 rounded-lg">
                  <img 
                    src="/lovable-uploads/98a20163-55bd-464e-b088-fb73ea2bed81.png" 
                    alt="QR Code" 
                    className="w-32 h-32"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Footer */}
          <div className="bg-blue-600 text-white px-8 py-4 border-t border-blue-500">
            <div className="flex justify-between items-center text-sm">
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