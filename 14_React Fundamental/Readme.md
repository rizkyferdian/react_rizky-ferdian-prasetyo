<h1>
1. React Fundamental
</h1>

<h2>1. Apa itu JSX</h2>
JSX merupakan singkatan dari JavaScript Syntax Extension atau dikenal juga dengan Javascript XML. JSX adalah ekstensi React untuk Javasript. Sintaks JSX mirip seperti HTML, sehingga membuat kita lebih gampang menyusun elemen pada komponen React.

Contoh Penggunaan JSX
```
const element = <h1>Halo, Dunia!</h1>;
```

<h2>
2. React Component
</h2>

Apa itu komponen?

Komponen memungkinkan kamu membagi User Interface (UI) menjadi bagian-bagian yang independen dan dapat digunakan kembali, dan memikirkan setiap bagian secara terpisah.
Dengan komponen kita juga tidak lupa dengan penggunaan function dan class component. Berikut penjabaran tentang function component dan class component:

<h4>Function Component</h4>

React Function Component adalah jenis React component yang memiliki syntax yang lebih simple dan memungkinkan kita untuk menggunakan React Hooks.

Contoh penggunaan Function Component:

```
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}
```

<h4>Class Component</h4>

Class Component adalah komponen yang dibuat melalui Class JavaScript dan mewarisi sifat React Component

Contoh Penggunaan class component:
```
class Welcome extends React.Component {
  render() {
    return <h1>Hello, {this.props.name}</h1>;
  }
}
```

<h2>
3. State
</h2>

state digunakan untuk menghandle data di dalam component yang terus berubah. Berikut penggunaan state pada function component & class component

Function Component

```
import React, { useState } from 'react';
export default function App() {
  const [state, setState] = useState('Koko');
  return (
    <div>
      <h1>Welcome</h1>
      <p>My Name is {state}</p>
    </div>
  );
}
```

Class Component

```
class Header extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "Belajar Reactjs",
      subTitle: "Reactjs untuk pemula"
    };
  }

  render() {
    return (
      <div>
        <h1>{this.state.title}</h1>
        <h2>{this.state.subTitle}</h2>
      </div>
    );
  }
}
```

