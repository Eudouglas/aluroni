import Footer from 'components/Footer';
import Menu from 'components/Menu';
import PaginaPadrao from 'components/PaginaPadrao';
import Cardapio from 'pages/Cardapio';
import Inicio from 'pages/inicio';
import NotFound from 'pages/NotFound';
import Sobre from 'pages/Sobre';
import Prato from 'pages/Prato';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <Menu />

        <Routes>
          <Route path='/' element={<PaginaPadrao/>}>
            <Route path='cardapio' element={<Cardapio />} />
            <Route index element={<Inicio />} />
            <Route path='sobre' element={<Sobre/>} />
          </Route>
          <Route path='prato/:id' element={<Prato />} />
          <Route path='*' element={<NotFound/>}  />
        </Routes>
      </Router>
      <Footer/>
    </main>
  );
}