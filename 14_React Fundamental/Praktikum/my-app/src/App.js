
import './App.css';
import Body from './component/body';
import Navbar from './component/navbar';
import Table from './component/table';
import Title from './component/title';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Title />
      <Body />
      <Table />
    </div>
  );
}

export default App;
