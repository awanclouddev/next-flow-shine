'use client';
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

const RegistrationForm = () => {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm();
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

  const handleDayChange = (dayValue, checked) => {
    const currentDays = attendanceDays || [];
    if (checked) {
      setValue('attendanceDays', [...currentDays, dayValue]);
    } else {
      setValue('attendanceDays', currentDays.filter(day => day !== dayValue));
    }
  };

  const onSubmit = (data) => {
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
          <div className="flex justify-center mb-2">
            <img 
              src="/lovable-uploads/2a9754aa-9a18-46dd-b388-ad079832413e.png" 
              alt="IPExpose Indonesia Logo" 
              className="h-16 md:h-20 w-auto object-contain"
            />
          </div>
          <p className="text-xl text-muted-foreground mb-4">
            Indonesia's Premier Technology Expo
          </p>
          <div className="flex items-center justify-center gap-2 text-lg text-muted-foreground">
            <div className="bg-yellow-100 p-1 rounded">
              <Calendar className="h-5 w-5 text-yellow-600" />
            </div>
            <span>13-16 Agustus 2025 | Jakarta Convention Center</span>
          </div>
        </div>

        {/* Hero Card */}
        <Card className="mb-8 bg-primary text-primary-foreground overflow-hidden">
          <CardContent className="p-0">
            <div className="grid md:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 space-y-6">
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold mb-4 leading-tight">
                    Bergabunglah dengan IPExpose 2025!
                  </h2>
                  <p className="text-lg text-primary-foreground/90 leading-relaxed">
                    Event teknologi terbesar Indonesia yang mempertemukan ribuan profesional, startup, dan inovator teknologi.
                  </p>
                </div>
                
                <div className="flex items-center gap-8">
                  <div className="flex items-center gap-3">
                    <Users className="h-6 w-6" />
                    <div>
                      <p className="text-xl font-bold">5000+</p>
                      <p className="text-sm text-primary-foreground/80">Peserta</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <Building className="h-6 w-6" />
                    <div>
                      <p className="text-xl font-bold">100+</p>
                      <p className="text-sm text-primary-foreground/80">Exhibitor</p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Right Image */}
              <div className="relative">
                <img 
                  src="/lovable-uploads/35d9bc97-b1e8-4445-9bbb-081da955115b.png"
                  alt="IPExpose 2025 Event Audience"
                  className="w-full h-full object-cover min-h-[300px] rounded-r-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-primary/10 rounded-r-lg"></div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Event Details Card */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-foreground">Detail Event</CardTitle>
          </CardHeader>
          <CardContent className="p-6 space-y-6">
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Calendar className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Tanggal</p>
                  <p className="text-muted-foreground">13-16 Agustus 2025</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <div className="bg-primary rounded-full p-1 mt-0.5">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                </div>
                <div>
                  <p className="font-semibold text-foreground text-lg">Waktu</p>
                  <p className="text-muted-foreground">09:00 - 17:00 WIB</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Lokasi</p>
                  <p className="text-muted-foreground">Jakarta Convention Center</p>
                  <p className="text-muted-foreground">Gelora Bung Karno, Jakarta</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Tag className="h-5 w-5 text-primary mt-0.5" />
                <div>
                  <p className="font-semibold text-foreground text-lg">Tiket</p>
                  <p className="text-green-600 font-semibold text-lg">GRATIS</p>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Facilities */}
            <div>
              <h3 className="text-xl font-bold text-foreground mb-4">Fasilitas Event</h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">Sertifikat kehadiran</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">Networking session</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">Goodie bag eksklusif</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-5 h-5 rounded bg-green-100 flex items-center justify-center">
                    <span className="text-green-600 text-sm font-bold">✓</span>
                  </div>
                  <span className="text-muted-foreground">Akses ke semua workshop</span>
                </div>
              </div>
            </div>

            <Separator className="my-6" />

            {/* Registration Count */}
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-yellow-100 rounded-full mb-3">
                <Users className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-2xl font-bold text-foreground">4,237 orang</p>
                <p className="text-muted-foreground">telah mendaftar</p>
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
                    onValueChange={(value) => setValue('gender', value)}
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
                  <h3 className="text-lg font-semibold">Pilih Hari Kehadiran <span className="text-red-500">*</span></h3>
                  <p className="text-sm text-muted-foreground">
                    Anda dapat memilih lebih dari satu hari
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-4">
                  {eventDays.map((day) => (
                    <div key={day.value} className="flex items-start space-x-3 border rounded-lg p-4 hover:bg-muted/50">
                      <Checkbox
                        id={day.value}
                        checked={attendanceDays.includes(day.value)}
                        onCheckedChange={(checked) => handleDayChange(day.value, checked)}
                        className="mt-0.5"
                      />
                      <div className="flex-1">
                        <Label htmlFor={day.value} className="font-medium cursor-pointer text-sm">
                          {day.date}
                        </Label>
                        <p className="text-xs text-muted-foreground mt-1">{day.description}</p>
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

      </div>
    </div>
  );
};

export default RegistrationForm;