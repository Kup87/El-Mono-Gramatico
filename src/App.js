import './App.css';
import './Styles/style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './Containers/ItemListContainer';


function App() {
  return (
    <div className='App'>
    <NavBar />
    <ItemListContainer greeting = "Hola. Aquí va a ir la lista con los items"/>
    </div>
  );
}

export default App;
