<h1> 24_Restfull API with Javascript <h1>

<h2> 1. Pengenalan Mock up API </h2>

Mock API adalah sebuah API palsu atau tiruan yang dibuat dengan tujuan untuk menyimulasikan respons dari sebuah API yang sebenarnya.Mock API dapat digunakan untuk menirukan respons dari API yang sebenarnya, baik itu berupa respons sukses atau respons gagal. Dalam banyak kasus, mock API dibuat dengan mudah dengan menggunakan alat-alat yang tersedia seperti Postman, MockServer, atau beberapa layanan online yang menyediakan layanan mock API

<h2> 2. Get API </h2>

Get API atau GET request adalah metode permintaan HTTP yang digunakan untuk mengambil atau membaca data dari server.

contoh code get API :

```
    async function getUsers() {
          let url =
            "https://6299e3697b866a90ec452547.mockapi.io/peserta/v1/users";
          try {
            let res = await fetch(url);
            console.log("your status : ", res.status); // untuk dapat melakukan pengecekan terhadap status data
            return await res.json();
          } catch (error) {
            console.log(error);
          }
     }
```

<h2> 3. Axios </h2>

Axios adalah sebuah library JavaScript yang digunakan untuk mengirim permintaan HTTP dari browser atau dari sisi server menggunakan Node.js.Dalam pengembangan RESTful API, Axios digunakan untuk mengirim permintaan HTTP seperti GET, POST, PUT, DELETE, dan lain-lain ke server yang menjalankan API tersebut. 
