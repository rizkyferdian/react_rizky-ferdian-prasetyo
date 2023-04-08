<h1>26_Introduction GraphQL and Apollo Client Setup</h1>

GraphQL adalah sebuah bahasa permintaan (query language) yang diciptakan oleh Facebook pada tahun 2012.GraphQL digunakan untuk mengambil dan memanipulasi data dari server, dan dapat digunakan pada berbagai bahasa pemrograman seperti JavaScript.

<h2>1. Pengenalan Hasura</h2>

Hasura adalah salah satu platform pengembangan GraphQL yang populer dan dapat digunakan untuk mengembangkan API GraphQL yang cepat dan mudah. Hasura memiliki fitur-fitur seperti autentikasi dan otorisasi, pemantauan performa, pengiriman pesan real-time, dan integrasi dengan berbagai sumber data.

<h2>2. Pengenalan Query</h2>

Query adalah salah satu fitur utama dalam GraphQL yang digunakan untuk meminta data dari server. Di dalam query GraphQL, pengguna menentukan tipe data dan properti yang diperlukan dari server, dan dapat juga menentukan relasi antar tipe data yang diminta.

contoh query GraphQL :

```
query {
  user(id: 1) {
    name
    email
  }
}
```

<h2>3. Pengenalan Mutation</h2>

Mutation adalah salah satu fitur utama dalam GraphQL yang digunakan untuk mengirimkan perubahan data ke server.Mutation digunakan untuk memodifikasi data pada server, seperti menambah, mengedit, atau menghapus data. 

```
mutation {
  addUser(input: { name: "John Doe", email: "johndoe@example.com" }) {
    id
    name
    email
  }
}
```
