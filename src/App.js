import { Home } from './components/Pages/Home/Home';
import { Login } from './components/Pages/Login/Login';
import { Registro } from './components/Pages/Registro/Registro';
import { List } from './components/Pages/List/List';



import { Header } from './components/Layouts/Header/Header';
import { Route, Routes } from 'react-router-dom';



function App() {
  return (
    <div>
      <Header/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Registro" element={<Registro />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Listar" element={<List />} />
      </Routes>
    </div>    
  );
}

export default App;
