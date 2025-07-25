import React from 'react';
import { CheckCircle, X, Calendar, Users, Mail, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

const SuccessModal = ({ isOpen, onClose, onContinue }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm animate-fade-in">
      <Card className="relative w-full max-w-md p-0 overflow-hidden border-0 shadow-2xl animate-scale-in">
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-primary/10" />
        
        {/* Close button */}
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-8 h-8 text-muted-foreground hover:text-foreground"
        >
          <X className="w-4 h-4" />
        </Button>

        <div className="relative p-8 text-center">
          {/* Success icon with animation */}
          <div className="relative mb-6">
            <div className="w-20 h-20 mx-auto bg-primary/10 rounded-full flex items-center justify-center animate-scale-in">
              <CheckCircle className="w-10 h-10 text-primary animate-pulse" />
            </div>
            <div className="absolute -top-1 -right-1 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle className="w-4 h-4 text-primary-foreground" />
            </div>
          </div>

          {/* Success message */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl font-bold text-foreground">
              Pendaftaran Berhasil!
            </h2>
            <p className="text-muted-foreground">
              Selamat! Data Anda telah berhasil tersimpan untuk event Komunitas Blogger Palembang
            </p>
          </div>

          {/* Success details */}
          <div className="space-y-3 mb-8 p-4 bg-muted/30 rounded-lg border border-border/50">
            <div className="flex items-center justify-center space-x-2 text-sm text-primary">
              <Mail className="w-4 h-4" />
              <span>Email konfirmasi akan segera dikirim</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-primary">
              <Calendar className="w-4 h-4" />
              <span>Simpan tanggal event di kalender</span>
            </div>
            <div className="flex items-center justify-center space-x-2 text-sm text-primary">
              <Users className="w-4 h-4" />
              <span>Bergabung dengan 500+ blogger lainnya</span>
            </div>
          </div>

          {/* Action buttons */}
          <div className="flex flex-col space-y-3">
            <Button 
              onClick={onContinue}
              className="group w-full"
            >
              Lihat Detail Pendaftaran
              <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
            </Button>
            <Button 
              variant="outline" 
              onClick={onClose}
              className="w-full"
            >
              Tutup
            </Button>
          </div>

          {/* Additional info */}
          <div className="mt-6 p-3 bg-accent/20 rounded-lg">
            <p className="text-xs text-muted-foreground">
              Butuh bantuan? Hubungi kami di{' '}
              <span className="text-primary font-medium">admin@bloggercommunity.com</span>
            </p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default SuccessModal;