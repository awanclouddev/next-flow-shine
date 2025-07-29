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
              {/* DGIP Logo */}
              <div className="w-20 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <span className="text-blue-800 font-bold text-xs">DGIP</span>
              </div>
              <div className="ml-2 text-xs text-gray-600">
                <div className="font-semibold">KEMENTERIAN HUKUM DAN HAM REPUBLIK INDONESIA</div>
                <div>DIREKTORAT JENDERAL KEKAYAAN INTELEKTUAL</div>
              </div>
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

          {/* Decorative wave border */}
          <div className="h-8 bg-white relative">
            <svg viewBox="0 0 400 30" className="w-full h-full">
              <defs>
                <pattern id="wave" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                  <circle cx="20" cy="30" r="15" fill="#2563eb" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#wave)" />
            </svg>
          </div>

          {/* Blue section with event details */}
          <div className="bg-blue-600 text-white p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
              {/* Time */}
              <div className="flex items-center space-x-3">
                <Clock className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">09:00 - 16:00</span>
              </div>
              
              {/* Date */}
              <div className="flex items-center space-x-3">
                <Calendar className="w-6 h-6 flex-shrink-0" />
                <span className="text-lg font-medium">13 - 16 Agustus 2025</span>
              </div>
              
              {/* Location */}
              <div className="flex items-center space-x-3">
                <MapPin className="w-6 h-6 flex-shrink-0" />
                <div className="text-lg font-medium">
                  <div>Convention Hall, SMESCO</div>
                  <div>Jakarta Selatan</div>
                </div>
              </div>
            </div>

            {/* QR Code section - centered below */}
            <div className="flex justify-center mt-8">
              <div className="bg-white p-4 rounded-lg">
                <div className="w-32 h-32 bg-black rounded flex items-center justify-center">
                  <div className="grid grid-cols-8 gap-px w-28 h-28">
                    {Array.from({ length: 64 }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-full h-full ${
                          Math.random() > 0.5 ? 'bg-black' : 'bg-white'
                        }`}
                      />
                    ))}
                  </div>
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