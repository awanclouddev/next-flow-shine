import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table';
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from '@/components/ui/pagination';
import { Badge } from '@/components/ui/badge';
import {
  Users,
  Search,
  Filter,
  Eye,
  Edit,
  Trash2,
  Mail,
  Download,
  ArrowUpDown
} from 'lucide-react';

const AdminParticipants = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filterGender, setFilterGender] = useState('all');
  const [filterEducation, setFilterEducation] = useState('all');
  const [sortField, setSortField] = useState('registrationDate');
  const [sortOrder, setSortOrder] = useState('desc');
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  // Mock data - replace with real API call
  const allParticipants = [
    {
      id: 1,
      fullName: 'John Doe',
      email: 'john.doe@email.com',
      phoneNumber: '081234567890',
      city: 'Jakarta',
      gender: 'male',
      education: 'S1/Sarjana',
      institution: 'PT. Tech Solutions',
      registrationDate: '2025-01-20',
      status: 'confirmed',
      attendanceDays: ['day1', 'day2']
    },
    {
      id: 2,
      fullName: 'Sarah Smith',
      email: 'sarah.smith@email.com',
      phoneNumber: '082345678901',
      city: 'Bandung',
      gender: 'female',
      education: 'S2/Magister',
      institution: 'Universitas Teknologi',
      registrationDate: '2025-01-19',
      status: 'pending',
      attendanceDays: ['day1', 'day3']
    },
    {
      id: 3,
      fullName: 'Ahmad Rahman',
      email: 'ahmad.rahman@email.com',
      phoneNumber: '083456789012',
      city: 'Surabaya',
      gender: 'male',
      education: 'D3/Diploma',
      institution: 'CV. Digital Creative',
      registrationDate: '2025-01-18',
      status: 'confirmed',
      attendanceDays: ['day2', 'day4']
    },
    {
      id: 4,
      fullName: 'Maria Garcia',
      email: 'maria.garcia@email.com',
      phoneNumber: '084567890123',
      city: 'Medan',
      gender: 'female',
      education: 'S1/Sarjana',
      institution: 'Freelancer',
      registrationDate: '2025-01-17',
      status: 'confirmed',
      attendanceDays: ['day1']
    },
    {
      id: 5,
      fullName: 'David Wong',
      email: 'david.wong@email.com',
      phoneNumber: '085678901234',
      city: 'Yogyakarta',
      gender: 'male',
      education: 'S3/Doktor',
      institution: 'Institut Teknologi',
      registrationDate: '2025-01-16',
      status: 'confirmed',
      attendanceDays: ['day1', 'day2', 'day3', 'day4']
    }
  ];

  // Filter and search participants
  const filteredParticipants = allParticipants
    .filter(participant => {
      const matchesSearch = participant.fullName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          participant.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          participant.phoneNumber.includes(searchTerm);
      const matchesGender = filterGender === 'all' || participant.gender === filterGender;
      const matchesEducation = filterEducation === 'all' || participant.education === filterEducation;
      return matchesSearch && matchesGender && matchesEducation;
    })
    .sort((a, b) => {
      const aValue = a[sortField];
      const bValue = b[sortField];
      if (sortOrder === 'asc') {
        return aValue > bValue ? 1 : -1;
      } else {
        return aValue < bValue ? 1 : -1;
      }
    });

  // Pagination
  const totalPages = Math.ceil(filteredParticipants.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedParticipants = filteredParticipants.slice(startIndex, startIndex + itemsPerPage);

  const handleSort = (field) => {
    if (sortField === field) {
      setSortOrder(sortOrder === 'asc' ? 'desc' : 'asc');
    } else {
      setSortField(field);
      setSortOrder('asc');
    }
  };

  const handleViewDetail = (participant) => {
    alert(`Detail Peserta:\n\nNama: ${participant.fullName}\nEmail: ${participant.email}\nTelepon: ${participant.phoneNumber}\nKota: ${participant.city}\nPendidikan: ${participant.education}\nInstansi: ${participant.institution}`);
  };

  const handleEdit = (participant) => {
    alert(`Edit peserta: ${participant.fullName}`);
  };

  const handleDelete = (participant) => {
    if (confirm(`Hapus peserta ${participant.fullName}? Aksi ini tidak dapat dibatalkan.`)) {
      alert(`Peserta ${participant.fullName} telah dihapus`);
    }
  };

  const handleSendEmail = (participant) => {
    alert(`Kirim email ke ${participant.fullName} (${participant.email})`);
  };

  const getStatusBadge = (status) => {
    switch (status) {
      case 'confirmed':
        return <Badge className="bg-green-100 text-green-800">Terkonfirmasi</Badge>;
      case 'pending':
        return <Badge variant="secondary">Menunggu</Badge>;
      default:
        return <Badge variant="outline">Tidak Diketahui</Badge>;
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Header */}
      <div className="flex justify-between items-center mb-8">
        <div>
          <h1 className="text-3xl font-bold text-foreground mb-2">Kelola Peserta</h1>
          <p className="text-muted-foreground">Kelola data peserta IPExpose 2025</p>
        </div>
        
        <div className="flex items-center gap-4">
          <Button variant="outline">
            <Download className="h-4 w-4 mr-2" />
            Export Data
          </Button>
        </div>
      </div>
        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-full">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{allParticipants.length}</p>
                  <p className="text-sm text-muted-foreground">Total Peserta</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-green-100 rounded-full">
                  <Users className="h-5 w-5 text-green-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {allParticipants.filter(p => p.status === 'confirmed').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Terkonfirmasi</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-yellow-100 rounded-full">
                  <Users className="h-5 w-5 text-yellow-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">
                    {allParticipants.filter(p => p.status === 'pending').length}
                  </p>
                  <p className="text-sm text-muted-foreground">Menunggu</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="p-6">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-purple-100 rounded-full">
                  <Users className="h-5 w-5 text-purple-600" />
                </div>
                <div>
                  <p className="text-2xl font-bold">{filteredParticipants.length}</p>
                  <p className="text-sm text-muted-foreground">Hasil Filter</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Filters and Search */}
        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Filter className="h-5 w-5" />
              Filter & Pencarian
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Cari nama, email, atau telepon..."
                  className="pl-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              
              <Select value={filterGender} onValueChange={setFilterGender}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter Jenis Kelamin" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Jenis Kelamin</SelectItem>
                  <SelectItem value="male">Laki-laki</SelectItem>
                  <SelectItem value="female">Perempuan</SelectItem>
                </SelectContent>
              </Select>
              
              <Select value={filterEducation} onValueChange={setFilterEducation}>
                <SelectTrigger>
                  <SelectValue placeholder="Filter Pendidikan" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Semua Pendidikan</SelectItem>
                  <SelectItem value="SMA/SMK">SMA/SMK</SelectItem>
                  <SelectItem value="D3/Diploma">D3/Diploma</SelectItem>
                  <SelectItem value="S1/Sarjana">S1/Sarjana</SelectItem>
                  <SelectItem value="S2/Magister">S2/Magister</SelectItem>
                  <SelectItem value="S3/Doktor">S3/Doktor</SelectItem>
                </SelectContent>
              </Select>
              
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setFilterGender('all');
                  setFilterEducation('all');
                }}
              >
                Reset Filter
              </Button>
            </div>
          </CardContent>
        </Card>

        {/* Participants Table */}
        <Card>
          <CardHeader>
            <CardTitle>Daftar Peserta ({filteredParticipants.length} peserta)</CardTitle>
            <CardDescription>
              Kelola data peserta yang telah mendaftar
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="overflow-x-auto">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="cursor-pointer" onClick={() => handleSort('fullName')}>
                      <div className="flex items-center gap-1">
                        Nama
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort('email')}>
                      <div className="flex items-center gap-1">
                        Email
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Telepon</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort('city')}>
                      <div className="flex items-center gap-1">
                        Kota
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Jenis Kelamin</TableHead>
                    <TableHead>Pendidikan</TableHead>
                    <TableHead>Instansi</TableHead>
                    <TableHead className="cursor-pointer" onClick={() => handleSort('registrationDate')}>
                      <div className="flex items-center gap-1">
                        Tgl Daftar
                        <ArrowUpDown className="h-4 w-4" />
                      </div>
                    </TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Aksi</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {paginatedParticipants.map((participant) => (
                    <TableRow key={participant.id}>
                      <TableCell className="font-medium">{participant.fullName}</TableCell>
                      <TableCell>{participant.email}</TableCell>
                      <TableCell>{participant.phoneNumber}</TableCell>
                      <TableCell>{participant.city}</TableCell>
                      <TableCell>
                        {participant.gender === 'male' ? 'Laki-laki' : 'Perempuan'}
                      </TableCell>
                      <TableCell>{participant.education}</TableCell>
                      <TableCell>{participant.institution}</TableCell>
                      <TableCell>
                        {new Date(participant.registrationDate).toLocaleDateString('id-ID')}
                      </TableCell>
                      <TableCell>{getStatusBadge(participant.status)}</TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleViewDetail(participant)}
                          >
                            <Eye className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleEdit(participant)}
                          >
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleSendEmail(participant)}
                          >
                            <Mail className="h-4 w-4" />
                          </Button>
                          <Button
                            size="sm"
                            variant="outline"
                            onClick={() => handleDelete(participant)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>

            {/* Pagination */}
            {totalPages > 1 && (
              <div className="mt-6">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious 
                        onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                        className={currentPage === 1 ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                    
                    {[...Array(totalPages)].map((_, i) => {
                      const page = i + 1;
                      if (page === 1 || page === totalPages || (page >= currentPage - 1 && page <= currentPage + 1)) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationLink
                              onClick={() => setCurrentPage(page)}
                              isActive={currentPage === page}
                              className="cursor-pointer"
                            >
                              {page}
                            </PaginationLink>
                          </PaginationItem>
                        );
                      } else if (page === currentPage - 2 || page === currentPage + 2) {
                        return (
                          <PaginationItem key={page}>
                            <PaginationEllipsis />
                          </PaginationItem>
                        );
                      }
                      return null;
                    })}
                    
                    <PaginationItem>
                      <PaginationNext 
                        onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                        className={currentPage === totalPages ? 'pointer-events-none opacity-50' : 'cursor-pointer'}
                      />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
              </div>
            )}
          </CardContent>
        </Card>
    </div>
  );
};

export default AdminParticipants;