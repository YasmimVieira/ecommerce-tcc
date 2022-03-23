import Button from './components/button/button';
import MenuOptions from './components/menu-options/menuOptions';
import NavBar from './components/navbar/navbar';
import Products from './pages/products/products';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <main className="main">
        <MenuOptions></MenuOptions>
        <Products /> 
      </main>
    </div>
  );
}

export default App;
