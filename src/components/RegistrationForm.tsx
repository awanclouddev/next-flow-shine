import React from 'react';
import { useForm } from 'react-hook-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Checkbox } from '@/components/ui/checkbox';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { User, Phone, Mail, MapPin, GraduationCap, Building, Calendar, Users, Tag } from 'lucide-react';

interface FormData {
  fullName: string;
  gender: 'male' | 'female';
  phoneNumber: string;
  email: string;
  city: string;
  education: string;
  institution: string;
  attendanceDays: string[];
}

const RegistrationForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>();
  const { toast } = useToast();
  const attendanceDays = watch('attendanceDays') || [];

  const educationLevels = [
    'SMA/SMK',
    'D3/Diploma',
    'S1/Sarjana',
    'S2/Magister',
    'S3/Doktor',
    'Lainnya'
  ];

  const eventDays = [
    {
      date: 'Rabu, 13 Agustus 2025',
      description: 'Opening Ceremony & Keynote',
      value: 'day1'
    },
    {
      date: 'Kamis, 14 Agustus 2025',
      description: 'Tech Talks & Workshops',
      value: 'day2'
    },
    {
      date: 'Jumat, 15 Agustus 2025',
      description: 'Innovation Showcase',
      value: 'day3'
    },
    {
      date: 'Sabtu, 16 Agustus 2025',
      description: 'Networking & Closing',
      value: 'day4'
    }
  ];

  const handleDayChange = (dayValue: string, checked: boolean) => {
    const currentDays = attendanceDays || [];
    if (checked) {
      setValue('attendanceDays', [...currentDays, dayValue]);
    } else {
      setValue('attendanceDays', currentDays.filter(day => day !== dayValue));
    }
  };

  const onSubmit = (data: FormData) => {
    console.log('Form submitted:', data);
    toast({
      title: "Registrasi Berhasil!",
      description: "Data Anda telah diterima. Tiket gratis akan dikirim melalui email.",
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white p-4 md:p-8">
      <div className="mx-auto max-w-4xl">
        {/* Header */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-2">
            IPExpose 2025
          </h1>
          <p className="text-xl text-muted-foreground mb-4">
            Indonesia's Premier Technology Expo
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <Calendar className="h-5 w-5" />
            <span>13-16 Agustus 2025 | Jakarta Convention Center</span>
          </div>
        </div>

        {/* Event Details Card */}
        <Card className="mb-8 border-primary/20">
          <CardHeader className="bg-primary text-primary-foreground">
            <CardTitle className="text-2xl">Detail Event</CardTitle>
          </CardHeader>
          <CardContent className="p-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Calendar className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Tanggal</p>
                    <p className="text-muted-foreground">13-16 Agustus 2025</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Lokasi</p>
                    <p className="text-muted-foreground">Jakarta Convention Center</p>
                    <p className="text-sm text-muted-foreground">Gelora Bung Karno, Jakarta</p>
                  </div>
                </div>
              </div>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Tag className="h-5 w-5 text-green-600" />
                  <div>
                    <p className="font-semibold">Tiket</p>
                    <p className="text-green-600 font-semibold text-lg">GRATIS</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <Users className="h-5 w-5 text-primary" />
                  <div>
                    <p className="font-semibold">Pendaftar</p>
                    <p className="text-muted-foreground">4,237 orang telah mendaftar</p>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Registration Form */}
        <Card>
          <CardHeader>
            <div className="flex items-center gap-3">
              <div className="bg-primary/10 p-2 rounded-lg">
                <User className="h-6 w-6 text-primary" />
              </div>
              <div>
                <CardTitle className="text-2xl">Registrasi Peserta</CardTitle>
                <CardDescription>
                  Lengkapi data diri Anda untuk mendapatkan tiket gratis
                </CardDescription>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Personal Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Data Pribadi</h3>
                
                {/* Full Name */}
                <div className="space-y-2">
                  <Label htmlFor="fullName" className="text-sm font-medium">
                    Nama Lengkap <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <User className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="fullName"
                      placeholder="Masukkan nama lengkap Anda"
                      className="pl-10"
                      {...register('fullName', { required: 'Nama lengkap wajib diisi' })}
                    />
                  </div>
                  {errors.fullName && (
                    <p className="text-sm text-red-500">{errors.fullName.message}</p>
                  )}
                </div>

                {/* Gender */}
                <div className="space-y-3">
                  <Label className="text-sm font-medium">
                    Jenis Kelamin <span className="text-red-500">*</span>
                  </Label>
                  <RadioGroup
                    onValueChange={(value) => setValue('gender', value as 'male' | 'female')}
                    className="grid grid-cols-2 gap-4"
                  >
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                      <RadioGroupItem value="male" id="male" />
                      <Label htmlFor="male" className="flex items-center gap-2 cursor-pointer">
                        <span className="text-blue-500">♂</span>
                        Laki-laki
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 border rounded-lg p-3 hover:bg-muted/50">
                      <RadioGroupItem value="female" id="female" />
                      <Label htmlFor="female" className="flex items-center gap-2 cursor-pointer">
                        <span className="text-pink-500">♀</span>
                        Perempuan
                      </Label>
                    </div>
                  </RadioGroup>
                </div>

                {/* Phone Number */}
                <div className="space-y-2">
                  <Label htmlFor="phoneNumber" className="text-sm font-medium">
                    Nomor HP / WhatsApp Aktif <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Phone className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="phoneNumber"
                      placeholder="08xxxxxxxxxx"
                      className="pl-10"
                      {...register('phoneNumber', { 
                        required: 'Nomor HP wajib diisi',
                        pattern: {
                          value: /^08[0-9]{8,11}$/,
                          message: 'Format nomor HP tidak valid'
                        }
                      })}
                    />
                  </div>
                  {errors.phoneNumber && (
                    <p className="text-sm text-red-500">{errors.phoneNumber.message}</p>
                  )}
                </div>

                {/* Email */}
                <div className="space-y-2">
                  <Label htmlFor="email" className="text-sm font-medium">
                    Alamat Email <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="email"
                      type="email"
                      placeholder="nama@email.com"
                      className="pl-10"
                      {...register('email', { 
                        required: 'Email wajib diisi',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Format email tidak valid'
                        }
                      })}
                    />
                  </div>
                  {errors.email && (
                    <p className="text-sm text-red-500">{errors.email.message}</p>
                  )}
                </div>

                {/* City */}
                <div className="space-y-2">
                  <Label htmlFor="city" className="text-sm font-medium">
                    Kota Domisili <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <MapPin className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="city"
                      placeholder="Jakarta, Bandung, Surabaya, dll."
                      className="pl-10"
                      {...register('city', { required: 'Kota domisili wajib diisi' })}
                    />
                  </div>
                  {errors.city && (
                    <p className="text-sm text-red-500">{errors.city.message}</p>
                  )}
                </div>
              </div>

              <Separator />

              {/* Professional Information */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold">Informasi Profesional</h3>
                
                {/* Education */}
                <div className="space-y-2">
                  <Label className="text-sm font-medium">
                    Pendidikan Terakhir <span className="text-red-500">*</span>
                  </Label>
                  <Select onValueChange={(value) => setValue('education', value)}>
                    <SelectTrigger>
                      <div className="flex items-center gap-2">
                        <GraduationCap className="h-4 w-4 text-muted-foreground" />
                        <SelectValue placeholder="Pilih pendidikan terakhir" />
                      </div>
                    </SelectTrigger>
                    <SelectContent>
                      {educationLevels.map((level) => (
                        <SelectItem key={level} value={level}>
                          {level}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>

                {/* Institution */}
                <div className="space-y-2">
                  <Label htmlFor="institution" className="text-sm font-medium">
                    Instansi / Pekerjaan <span className="text-red-500">*</span>
                  </Label>
                  <div className="relative">
                    <Building className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                    <Input
                      id="institution"
                      placeholder="PT. ABC, Universitas XYZ, Freelancer, dll."
                      className="pl-10"
                      {...register('institution', { required: 'Instansi/Pekerjaan wajib diisi' })}
                    />
                  </div>
                  {errors.institution && (
                    <p className="text-sm text-red-500">{errors.institution.message}</p>
                  )}
                </div>
              </div>

              <Separator />

              {/* Event Attendance */}
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold">Pilih Hari Kehadiran</h3>
                  <p className="text-sm text-muted-foreground">
                    Anda dapat memilih lebih dari satu hari
                  </p>
                </div>
                
                <div className="grid gap-3">
                  {eventDays.map((day) => (
                    <div key={day.value} className="flex items-center space-x-3 border rounded-lg p-4 hover:bg-muted/50">
                      <Checkbox
                        id={day.value}
                        checked={attendanceDays.includes(day.value)}
                        onCheckedChange={(checked) => handleDayChange(day.value, checked as boolean)}
                      />
                      <div className="flex-1">
                        <Label htmlFor={day.value} className="font-medium cursor-pointer">
                          {day.date}
                        </Label>
                        <p className="text-sm text-muted-foreground">{day.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Submit Button */}
              <div className="pt-6">
                <Button 
                  type="submit" 
                  className="w-full bg-primary hover:bg-primary/90 text-primary-foreground py-6 text-lg font-semibold"
                >
                  <Tag className="mr-2 h-5 w-5" />
                  Daftar & Dapatkan Tiket Gratis
                </Button>
              </div>
            </form>
          </CardContent>
        </Card>

        {/* Facilities */}
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Fasilitas Event</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-lg">✓</span>
                <span>Sertifikat kehadiran</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-lg">✓</span>
                <span>Networking session</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-lg">✓</span>
                <span>Goodie bag eksklusif</span>
              </div>
              <div className="flex items-center gap-2 text-green-600">
                <span className="text-lg">✓</span>
                <span>Akses ke semua workshop</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default RegistrationForm;