import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import ListaLibros from './ListaLibros';
import Nav from './Nav';


function App() {
  return (

    <div className="App">
      <Nav />
          <header className="App-header">
            
        <div>
          <h1>Listado de libros</h1>
              <ListaLibros/>
        </div>
      </header>
    </div>
  );
}

export default App;
