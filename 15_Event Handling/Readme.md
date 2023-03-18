<h1>15_Event Handling</h1>

<h2>1 State</h2>
State adalah data private sebuah component. Data ini hanya tersedia untuk component tersebut dan tidak bisa diakses dari component lain.
yang harus diperhatikan ketika menggunakan state.

- Data yang bisa dimodifikasi menggunakan setState
- setiap terjadi modifikasi akan terjadi render ulang
- Bersifat Asynchronous
- Dipakai dalam class

<h2>2 Stateful component & Stateless component</h2>
perbedaan stateless component dan stateful component

1 Stateful component

stateful component memiliki state. Component ini dibuat dengan class. kelebihan dari class component adalah memiliki lifecycle.
- stateful mengerti tentang aplikasi
- melakukan data fetching
- berinteraksi dengan aplikasi
- tidak dapat digunakan kembali
- meneruskan status dan data ke anak anaknya

2 Stateless component

sebuah fungsi javascript yang hanya mengambil sebuah inputan, biasanya functional component ini digunakan untuk membungkus component kecil seperti component table, button dan lainnya
- stateless tidak mengerti tentang aplikasi
- tidak melakukan data fetching
- tujuan utamanya visualisasi
- dapat digunakan kembali
- Hanya berkomunikasi dengan induk langsung

<h2>3 Handling Event</h2>
Event handling adalah proses menangani action atau interaction yang dilakukan user pada element-element di dalam aplikasi web. Dalam ReactJS, event handling bisa dilakukan dengan menambahkan event listener pada element tersebut.

contoh dari penggunaan handling event: 

<h4>Function Component</h4>

```
import React, { useState } from "react";
function Button() {
  const [clicks, setClicks] = useState(0);
  function handleClick() {
    setClicks(clicks + 1);
    console.log("Tombol diklik!");
  }
  return (
    <div>
      <button onClick={handleClick}>Klik saya</button>
      <p>Jumlah klik: {clicks}</p>
    </div>
  );
}
```
