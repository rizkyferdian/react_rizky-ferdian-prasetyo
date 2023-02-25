<h1>
8_CSS
</h1>

CSS adalah singkatan dari cascading style sheets, yaitu bahasa yang digunakan untuk menentukan tampilan dan format. CSS juga memiliki fungsi untuk membuat tampilan
lebih berwarna , tertata rapi , dan dapat digunakan di berbagai device.

<h2> 1. Bagaimana cara menambahkan CSS </h2>

Ada 3 cara untuk menambahkan CSS kedalam HTML:
- External CSS 
kode CSS yang diletakkan di luar dokumen HTML sebagai file .css . untuk mengaksesnya (<link rel="stylesheet" type="text/css" href="style.css" />)
- Internal CSS 
Kode CSS internal diletakkan pada bagian atas bagian <head> . kita dapat menambahkan css pada halaman yang sama/ file yang sama. contoh : 
<style>
  body {
    background-color : green;
  }
</style>

- inline CSS
kode css yang digunakan pada bagian area/baris atribut yang ingin di ubah atau di styling. syntax ini dapat digunakan untuk elemen tunggal pada HTML

<h2> 2. CSS Selector </h2>
CSS selector digunakan untuk memilih elemen mana dari HTML yang akan di ubah atau didesain. untuk menggunakan selector ini kita dapat menggunakan ID dan class.

- Selector class -> kita bisa menuliskan karakter titik (.) kemudian diikuti dengan nama class.
- Selector ID -> Biasanya, saat memilih elemen dengan id tertentu, kita dapat meunlis dengan karakter hash (#), kemudian diikuti dengan id elemen.


<h2> 3. CSS Grouping </h2>

css grouping adalah memilih semua elemen HTML dengan style css yang sama. Tujuannya untuk meminimalisir penulisan perintah CSS yang sama secara berulang-ulang.
