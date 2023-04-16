<h1>27_GraphQL Query and Mutation</h1>

<h2>1. Query</h2> 

Query pada GraphQL adalah permintaan atau pertanyaan yang dikirimkan oleh client ke server GraphQL untuk mendapatkan data dari API GraphQL. Query ini ditulis dalam format GraphQL, yang memungkinkan client untuk memilih secara spesifik data apa yang mereka inginkan, serta struktur dan format data tersebut

<h2>2 Mutation </h2>

Mutation pada GraphQL adalah operasi untuk memodifikasi data pada API GraphQL. Dalam GraphQL, operasi mutation digunakan untuk melakukan tindakan seperti menambah, mengubah, atau menghapus data pada server.

contoh penggunaan mutation:
```
mutation {
  tambahMahasiswa(nama: "Doni", umur: 25) {
    id
    nama
    umur
  }
}
```

<h2>3 Apollo </h2>
Apollo GraphQL adalah salah satu library atau framework yang paling populer digunakan untuk mengembangkan aplikasi berbasis GraphQL di berbagai platform seperti web, mobile, dan desktop.Apollo GraphQL menyediakan banyak fitur dan alat yang memudahkan para pengembang dalam mengimplementasikan GraphQL pada aplikasi mereka, seperti client dan server GraphQL, integrasi dengan berbagai framework front-end seperti React dan Angular, serta dukungan untuk state management dan caching data.
