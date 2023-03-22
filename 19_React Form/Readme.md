<h1>19_React Form</h1>

<h2>1. Controlled Component</h2>

Controlled component adalah komponen pada React yang nilai atau state-nya dikendalikan secara eksplisit oleh React melalui props. Dalam sebuah controlled component, 
nilai input dari pengguna atau perubahan state tidak tersimpan pada DOM, melainkan pada state komponen React.

<h2>2. Unontrolled Component</h2>

Uncontrolled component pada React adalah komponen yang nilai atau state-nya tidak dikendalikan secara eksplisit oleh React melalui props. Dalam sebuah uncontrolled component, 
nilai input dari pengguna disimpan langsung pada DOM, dan tidak disimpan pada state komponen React.

<h2>3. Kelebihan Unontrolled Component & controlled component</h2>

Kelebihan Uncontrolled Component:
- Mudah dan cepat untuk diimplementasikan karena tidak memerlukan penanganan state pada komponen.
- Cocok digunakan untuk kasus-kasus sederhana dan tidak kompleks.

Kelebihan Controlled Component:
- Memastikan bahwa nilai dari input selalu dapat dikontrol dan diprediksi.
- Mudah untuk memvalidasi input sebelum disimpan pada state, sehingga dapat meminimalkan kesalahan pengguna.
- Meningkatkan reusability dan mempermudah pengelolaan state pada komponen-komponen React.
