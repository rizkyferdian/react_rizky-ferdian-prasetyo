<h1>22_Introduction Restfull AP</h1>

RESTful API (Representational State Transfer API) adalah salah satu arsitektur API yang paling populer dan sering digunakan dalam pengembangan aplikasi web.

<h2> 1. HTTP method pada RESTful API</h2>

- GET: digunakan untuk mengambil (retrieve) data dari sumber daya yang sudah ada. Contohnya, mengambil data profil pengguna dari sebuah aplikasi.
- POST: digunakan untuk menambahkan (create) data baru ke sumber daya. Contohnya, menambahkan data pengguna baru ke dalam database.
- PUT: digunakan untuk memperbarui (update) data yang sudah ada pada sumber daya. Contohnya, mengubah data profil pengguna yang sudah ada pada sebuah aplikasi.
- DELETE: digunakan untuk menghapus (delete) data yang sudah ada pada sumber daya. Contohnya, menghapus data pengguna yang sudah ada pada sebuah aplikasi.

<h2> 2. HTTP Response code</h2>

kode numerik yang diberikan oleh server HTTP untuk memberi tahu client tentang status permintaan yang dilakukan.

contoh kode status HTTP yang umum digunakan : 

- 200 OK: Permintaan berhasil diproses.
- 201 Created: Permintaan berhasil diproses dan sumber daya baru berhasil dibuat.
- 204 No Content: Permintaan berhasil diproses, tetapi tidak ada konten yang dikembalikan.
- 400 Bad Request: Permintaan tidak dapat diproses karena kesalahan pada sintaks permintaan.
- 401 Unauthorized: Client tidak memiliki hak akses yang diperlukan untuk mengakses sumber daya.
- 404 Not Found: Sumber daya yang diminta tidak ditemukan pada server.
- 500 Internal Server Error: Terjadi kesalahan pada server saat memproses permintaan.

<h2> 3. request dan respon format pada restful API </h2>
Format request dan response pada RESTful API sering menggunakan format data yang terstandarisasi, seperti JSON (JavaScript Object Notation) atau XML (eXtensible Markup Language). Kedua format ini digunakan untuk menyederhanakan proses transfer data antara client dan server.
