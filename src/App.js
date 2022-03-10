import './App.css';
import './Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <ItemListContainer greeting = "Hola. Aquí va a ir la lista con los items"/>
    <ItemCount stock = {4}  initialItemAmount = {1} />
    
    </div>
  );
}

export default App;
