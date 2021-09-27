import * as data from './etsy.json';
import './App.css';
import Listing from './components/Listing';

const items = data.default;

function App() {
  return (
    <div className="App">
      <Listing items={items} />
    </div>
  );
}

export default App;
