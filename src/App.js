import './App.css';
import cities from './cities.json';
import { Form } from './components/Form/Form';

function App() {

  return (
    <div className="App">
      <Form cities={cities}/>
    </div>
  );
}

export default App;
