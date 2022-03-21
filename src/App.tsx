import Button from './components/button/button';
import MenuOptions from './components/menu-options/menuOptions';
import NavBar from './components/navbar/navbar';

function App() {
  return (
    <div className="App">
      <Button
      type="submit"
      >Continuar</Button>
      <NavBar></NavBar>
      <MenuOptions></MenuOptions>
    </div>
  );
}

export default App;
