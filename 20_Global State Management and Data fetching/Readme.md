<h1>20_Global State Management and Data fetching</h1>

State management library adalah library yang digunakan untuk mengelola state pada suatu aplikasi JavaScript.

<h2> 1. Mengenal library state management di react </h2>

<h3> Redux </h3>
Redux adalah salah satu library state management yang biasa disandingkan dengan react.
kelebihan menggunakan redux adalah mempermudah dalam mengelola state dimana mengubah state di child-child component tanpa harus membuat bantuan dengan props didalam component didalam props component.

<h3> Recoil </h3>
Recoil adalah sebuah library state management untuk React yang dikembangkan oleh tim Facebook. Library ini memungkinkan Anda untuk dengan mudah mengelola state global pada aplikasi React Anda dengan lebih intuitif dan efisien.

<h3> Jotai </h3>
Jotai adalah sebuah library state management untuk React yang memungkinkan pengelolaan state yang mudah dan efisien dalam aplikasi React. Jotai fokus pada pendekatan "atomik"

<h2> 2. Redux Thunk </h2>
Sebuah middleware Redux yang memungkinkan untuk menulis action creator yang mengembalikan sebuah fungsi (thunk) daripada sebuah objek tindakan (action). Alasan menggunakan
redux thunk adalah

- Untuk menghandle side effect logic yang kompleks
- Untuk logic async seperti request data

<h2> 3. Pengenalan Store </h2>

Store pada Redux adalah objek pusat yang menyimpan state global dari aplikasi.terdapat hal penting lainnya dari store

dispatch(action): 
Metode ini digunakan untuk mengirimkan sebuah action ke store, sehingga store dapat memperbarui state sesuai dengan informasi yang terkandung dalam action tersebut.

Contoh penggunaan Store:
```
import { createStore } from 'redux';

const initialState = {
  count: 0
};

function counterReducer(state = initialState, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
```
