import { Link } from "react-router-dom";
import { CheckCircle, Calendar, Users, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

const RegistrationSuccess = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-2xl mx-auto text-center">
          {/* Success Icon */}
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto bg-primary/10 rounded-full flex items-center justify-center">
              <CheckCircle className="w-12 h-12 text-primary" />
            </div>
            <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-primary-foreground" />
            </div>
          </div>

          {/* Main Message */}
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Pendaftaran Berhasil!
          </h1>
          <p className="text-xl text-muted-foreground mb-8">
            Selamat! Anda telah berhasil mendaftar untuk event Komunitas Blogger Palembang
          </p>

          {/* Success Card */}
          <Card className="p-8 mb-8 border-primary/20 bg-card/50 backdrop-blur-sm">
            <div className="space-y-6">
              <div className="flex items-center justify-center space-x-2 text-primary">
                <Calendar className="w-5 h-5" />
                <span className="font-semibold">Event akan segera dimulai</span>
              </div>
              
              <div className="text-center space-y-3">
                <h3 className="text-lg font-semibold text-foreground">
                  Langkah Selanjutnya
                </h3>
                <div className="space-y-2 text-muted-foreground">
                  <p className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Cek email Anda untuk konfirmasi pendaftaran</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Simpan tanggal event di kalender Anda</span>
                  </p>
                  <p className="flex items-center justify-center space-x-2">
                    <span className="w-2 h-2 bg-primary rounded-full"></span>
                    <span>Bergabung dengan grup WhatsApp komunitas</span>
                  </p>
                </div>
              </div>

              <div className="pt-4 border-t border-border/50">
                <div className="flex items-center justify-center space-x-2 text-sm text-muted-foreground">
                  <Users className="w-4 h-4" />
                  <span>Anda akan bergabung dengan 500+ blogger Palembang lainnya</span>
                </div>
              </div>
            </div>
          </Card>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild className="group">
              <Link to="/">
                Kembali ke Beranda
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <a 
                href="https://wa.me/your-whatsapp-number" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group"
              >
                Gabung WhatsApp Group
                <ArrowRight className="w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="mt-12 p-6 bg-muted/30 rounded-lg border border-border/50">
            <h4 className="font-semibold text-foreground mb-2">
              Ada Pertanyaan?
            </h4>
            <p className="text-sm text-muted-foreground">
              Hubungi kami di <span className="text-primary font-medium">admin@bloggercommunity.com</span> 
              {" "}atau melalui WhatsApp untuk bantuan lebih lanjut.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegistrationSuccess;