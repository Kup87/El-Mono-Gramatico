import './Styles/style.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import CartContextProvider from './context/cartContext';
import ItemDetailContainer from './Containers/ItemDetailContainer';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart/Cart';

function App() {
  return (
    <BrowserRouter>
    <CartContextProvider>
      <div className='App'>
        <NavBar />
       
         {/* <ItemCount stock = {4}  initialItemAmount = {1} /> */}
        
        <Routes> 
          <Route path='/' element={<ItemListContainer />} />
          <Route path='/categoria/:categoria' element={<ItemListContainer />} />
          <Route path='/libros/:libroid' element={<ItemDetailContainer />} />
          <Route path='/categoria/:categoria/libros/:libroid' element={<ItemDetailContainer />} />
          <Route path='/cart' element={<Cart />} />
          {/* <Route path='/*' element={<Navigate to='/' />} /> */}
        </Routes>
      </div>
      
      </CartContextProvider>
    </BrowserRouter>
  );
}

export default App;
