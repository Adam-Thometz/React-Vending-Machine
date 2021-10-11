import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Navbar from './Navbar';
import VendingMachine from './VendingMachine';
import GreenTea from './food-components/GreenTea';
import YogurtBerries from './food-components/YogurtBerries';
import Salmon from './food-components/Salmon';
import Kombucha from './food-components/Kombucha';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Route exact path="/">
          <VendingMachine />
        </Route>
        <Route exact path="/green-tea">
          <GreenTea />
        </Route>
        <Route exact path="/yogurt">
          <YogurtBerries />
        </Route>
        <Route exact path="/salmon">
          <Salmon />
        </Route>
        <Route exact path="/kombucha">
          <Kombucha />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;