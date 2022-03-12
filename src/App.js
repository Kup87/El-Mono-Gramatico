import './Styles/style.css';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <ItemListContainer/>
    {/* <ItemCount stock = {4}  initialItemAmount = {1} /> */}
    </div>
  );
}

export default App;
