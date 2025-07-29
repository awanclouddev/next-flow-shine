import React from 'react';
import { Clock, Calendar, MapPin, QrCode } from 'lucide-react';
import { Card } from '@/components/ui/card';

const RegistrationConfirmation = () => {
  return (
    <div 
      className="min-h-screen p-4 relative"
      style={{
        backgroundImage: "url('/lovable-uploads/31743b1c-4f62-44cd-897e-f7cac45f121f.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 bg-white/90 backdrop-blur-sm"></div>
      
      <div className="max-w-4xl mx-auto relative z-10">
        <Card className="overflow-hidden border-0 shadow-2xl bg-white">
          {/* Header with logos */}
          <div className="bg-white p-6 flex justify-between items-center border-b">
            <div className="flex items-center space-x-4">
              {/* DGIP Logo */}
              <div className="w-20 h-16 bg-gradient-to-br from-yellow-400 to-yellow-600 rounded-lg flex items-center justify-center relative">
                <div className="absolute top-2 left-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute top-2 right-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute bottom-2 left-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <div className="absolute bottom-2 right-2 w-3 h-3 bg-blue-600 rounded-sm"></div>
                <span className="text-blue-800 font-bold text-xs">DGIP</span>
              </div>
            </div>
            <div className="flex items-center space-x-4">
              {/* IP XPOSE Logo */}
              <img 
                src="/lovable-uploads/433b8e5b-e251-40ad-bd4f-5a6f583b50a2.png" 
                alt="IP XPOSE Indonesia" 
                className="h-16 w-auto"
              />
            </div>
          </div>

          {/* Main content */}
          <div className="relative bg-white">
            {/* IP EXHIBITION branding with background */}
            <div 
              className="relative bg-cover bg-center p-12"
              style={{
                backgroundImage: "url('/lovable-uploads/31743b1c-4f62-44cd-897e-f7cac45f121f.png')",
                backgroundSize: 'cover',
                backgroundPosition: 'center'
              }}
            >
              <div className="absolute inset-0 bg-white/95"></div>
              
              <div className="relative z-10 text-center mb-8">
                {/* IP EXHIBITION logo */}
                <div className="flex items-center justify-center mb-6">
                  <img 
                    src="/lovable-uploads/ef49a089-6124-4be5-860c-2c6ad0036815.png" 
                    alt="IP EXHIBITION" 
                    className="max-w-md w-full h-auto"
                  />
                </div>

                {/* Success message */}
                <div className="space-y-4 mb-8">
                  <p className="text-green-600 text-lg font-semibold">
                    ANDA TELAH BERHASIL MENDAFTAR
                  </p>
                  <h1 className="text-3xl font-bold text-gray-800">
                    "REGISTRASI PENGUNJUNG
                  </h1>
                  <h2 className="text-3xl font-bold text-gray-800">
                    IP XPOSE 2025"
                  </h2>
                </div>
              </div>
            </div>

            {/* Blue section with event details */}
            <div className="bg-blue-600 text-white p-8">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Clock className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium">09:00 - 16:00</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <Calendar className="w-6 h-6" />
                    </div>
                    <span className="text-xl font-medium">13 - 16 Agustus 2025</span>
                  </div>
                  
                  <div className="flex items-center space-x-4">
                    <div className="w-8 h-8 flex items-center justify-center">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <div className="text-xl font-medium">Convention Hall, SMESCO</div>
                      <div className="text-lg">Jakarta Selatan</div>
                    </div>
                  </div>
                </div>

                {/* QR Code section */}
                <div className="flex justify-center">
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
            </div>

            {/* Decorative wave border */}
            <div className="h-8 bg-white relative overflow-hidden">
              <svg viewBox="0 0 400 30" className="w-full h-full absolute top-0">
                <defs>
                  <pattern id="wave" x="0" y="0" width="40" height="30" patternUnits="userSpaceOnUse">
                    <circle cx="20" cy="30" r="15" fill="#2563eb" />
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#wave)" />
              </svg>
            </div>

            {/* Footer */}
            <div className="bg-blue-600 text-white p-6">
              <div className="flex justify-between items-center text-sm">
                <span>ipxpose@dgip.go.id</span>
                <span>ipxpose.dgip.go.id</span>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationConfirmation;