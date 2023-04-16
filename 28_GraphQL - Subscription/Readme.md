<h1>
28_GraphQL - Subscription</h1>

<h2>1. Penjelasan Subscription</h2>
Subscription pada GraphQL adalah fitur yang memungkinkan klien (client) untuk berlangganan atau subscribe pada pembaruan data secara real-time dari server. Dalam konteks GraphQL, subscription mirip dengan query dan mutation, namun dengan sifat yang berbeda karena hasilnya tidak hanya sekali, tetapi terus-menerus diperbarui oleh server ketika ada perubahan data yang terjadi.

<h2> 2 Contoh Penggunaan </h2>
```
const MESSAGE_SUBSCRIPTION = gql`
  subscription MessageSubscription($roomId: ID!) {
    messageAdded(roomId: $roomId) {
      id
      content
      createdAt
      user {
        id
        name
      }
    }
  }
`;
```

<h2>3 Fitur </h2>
GraphQL subscription memiliki beberapa fitur yang memudahkan penggunaannya, di antaranya:

- Selektivitas: 

Klien dapat memilih hanya menerima pembaruan untuk field atau data tertentu yang mereka butuhkan, sehingga menghemat sumber daya pada server dan jaringan.

- Ketersediaan: 

GraphQL subscription dirancang untuk memastikan ketersediaan dan skalabilitas sistem, sehingga dapat diimplementasikan pada sistem yang besar dan kompleks.

- Integrasi: 

GraphQL subscription dapat diintegrasikan dengan teknologi lain, seperti WebSocket dan Server-Sent Events, sehingga dapat digunakan pada berbagai jenis aplikasi dan infrastruktur.
