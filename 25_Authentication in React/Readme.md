<h1>25_Authentication in React</h1>

Authentication pada React adalah proses untuk memverifikasi identitas pengguna dalam sebuah aplikasi React. Dalam konteks aplikasi web React, autentikasi biasanya dilakukan dengan cara meminta pengguna untuk memasukkan username dan password pada form login, kemudian server akan memverifikasi kebenaran kombinasi username dan password tersebut.

<h2>1. Penjelasan JWT</h2>
Dalam pengembangan aplikasi web, JWT digunakan sebagai bentuk autentikasi dan otorisasi pada RESTful API.Pada pengembangan aplikasi web dengan menggunakan React, JWT dapat digunakan untuk mengamankan data pada RESTful API yang diakses oleh aplikasi tersebut. Dalam implementasinya, ketika user melakukan login pada aplikasi, server akan mengembalikan sebuah token JWT yang berisi informasi user, seperti ID user dan role user. Token tersebut kemudian dapat disimpan pada browser user, misalnya pada local storage.

<h2> 2. Local storage</h2>
Local storage adalah sebuah fitur pada browser yang memungkinkan aplikasi untuk menyimpan data secara lokal pada perangkat pengguna. Dalam konteks autentikasi, local storage dapat digunakan untuk menyimpan informasi autentikasi pengguna, seperti token JWT atau informasi user yang telah berhasil login.

<h2>3. Library pendukung (React router & redux)</h2>

dalam pengembangan aplikasi React, biasanya menggunakan library atau framework tertentu seperti React Router atau Redux yang dapat mempermudah implementasi autentikasi. React Router dapat digunakan untuk menentukan halaman mana yang hanya dapat diakses oleh pengguna yang telah login, sedangkan Redux dapat digunakan untuk menyimpan data autentikasi dalam state global aplikasi.
