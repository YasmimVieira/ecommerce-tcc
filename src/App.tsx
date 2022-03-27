import Button from './components/button/button';
import MenuOptions from './components/menu-options/menuOptions';
import NavBar from './components/navbar/navbar';
import Products from './pages/products/products';
import './App.scss';
import Signin from './pages/authentication/signin/signin';

function App() {
  return (
    <div className="App">
      {/* <NavBar></NavBar>
      <main className="main">
        <MenuOptions></MenuOptions>
        <Products /> 
      </main> */}
      <Signin />
    </div>
  );
}

export default App;
