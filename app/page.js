export default function StudentTable() {
  const students = [
    { no: 1, nim: "2201001", nama: "Reza Pratama", gender: "Laki-laki", prodi: "Sistem Informasi", kelas: "SI-1A", semester: 3, alamat: "Jakarta", hobby: "Coding", citaCita: "Software Engineer" },
    { no: 2, nim: "2201002", nama: "Siti Aminah", gender: "Perempuan", prodi: "Teknik Informatika", kelas: "TI-2B", semester: 3, alamat: "Bandung", hobby: "Membaca", citaCita: "Data Scientist" },
    { no: 3, nim: "2201003", nama: "Budi Santoso", gender: "Laki-laki", prodi: "Sistem Informasi", kelas: "SI-1B", semester: 3, alamat: "Surabaya", hobby: "Gaming", citaCita: "Game Developer" },
    { no: 4, nim: "2201004", nama: "Ani Wijaya", gender: "Perempuan", prodi: "Teknik Informatika", kelas: "TI-1A", semester: 3, alamat: "Yogyakarta", hobby: "Menulis", citaCita: "Penulis" },
    { no: 5, nim: "2201005", nama: "Dian Sastro", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-2A", semester: 3, alamat: "Semarang", hobby: "Menyanyi", citaCita: "Penyanyi" },
    { no: 6, nim: "2201006", nama: "Rizky Ramadhan", gender: "Laki-laki", prodi: "Teknik Informatika", kelas: "TI-2C", semester: 3, alamat: "Malang", hobby: "Olahraga", citaCita: "Atlet" },
    { no: 7, nim: "2201007", nama: "Sarah Febriani", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-1C", semester: 3, alamat: "Medan", hobby: "Melukis", citaCita: "Desainer Grafis" },
    { no: 8, nim: "2201008", nama: "Andi Wijaya", gender: "Laki-laki", prodi: "Teknik Informatika", kelas: "TI-3A", semester: 3, alamat: "Bali", hobby: "Traveling", citaCita: "Travel Blogger" },
    { no: 9, nim: "2201009", nama: "Lina Kusuma", gender: "Perempuan", prodi: "Sistem Informasi", kelas: "SI-2B", semester: 3, alamat: "Palembang", hobby: "Fotografi", citaCita: "Fotografer" },
    { no: 10, nim: "2201010", nama: "Hendra Saputra", gender: "Laki-laki", prodi: "Teknik Informatika", kelas: "TI-1B", semester: 3, alamat: "Makassar", hobby: "Membaca", citaCita: "Peneliti" }
  ];

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-xl font-semibold text-center mb-4">Data Mahasiswa</h2>
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 text-sm">
          <thead>
            <tr className="bg-gray-200">
              <th className="border border-gray-300 px-2 py-1">No</th>
              <th className="border border-gray-300 px-2 py-1">NIM</th>
              <th className="border border-gray-300 px-2 py-1">Nama</th>
              <th className="border border-gray-300 px-2 py-1">Gender</th>
              <th className="border border-gray-300 px-2 py-1">Prodi</th>
              <th className="border border-gray-300 px-2 py-1">Kelas</th>
              <th className="border border-gray-300 px-2 py-1">Semester</th>
              <th className="border border-gray-300 px-2 py-1">Alamat</th>
              <th className="border border-gray-300 px-2 py-1">Hobby</th>
              <th className="border border-gray-300 px-2 py-1">Cita-cita</th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index} className="text-center bg-white border border-gray-300">
                <td className="border border-gray-300 px-2 py-1">{student.no}</td>
                <td className="border border-gray-300 px-2 py-1">{student.nim}</td>
                <td className="border border-gray-300 px-2 py-1">{student.nama}</td>
                <td className="border border-gray-300 px-2 py-1">{student.gender}</td>
                <td className="border border-gray-300 px-2 py-1">{student.prodi}</td>
                <td className="border border-gray-300 px-2 py-1">{student.kelas}</td>
                <td className="border border-gray-300 px-2 py-1">{student.semester}</td>
                <td className="border border-gray-300 px-2 py-1">{student.alamat}</td>
                <td className="border border-gray-300 px-2 py-1">{student.hobby}</td>
                <td className="border border-gray-300 px-2 py-1">{student.citaCita}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden grid grid-cols-1 gap-4">
        {students.map((student, index) => (
          <div key={index} className="border border-gray-300 p-2 rounded bg-white shadow">
            <p><strong>{student.no}. {student.nama}</strong></p>
            <p><strong>NIM:</strong> {student.nim}</p>
            <p><strong>Gender:</strong> {student.gender}</p>
            <p><strong>Prodi:</strong> {student.prodi}</p>
            <p><strong>Kelas:</strong> {student.kelas}</p>
            <p><strong>Semester:</strong> {student.semester}</p>
            <p><strong>Alamat:</strong> {student.alamat}</p>
            <p><strong>Hobby:</strong> {student.hobby}</p>
            <p><strong>Cita-cita:</strong> {student.citaCita}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
