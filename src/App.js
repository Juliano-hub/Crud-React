import logo from './logo.svg';

// npm start 
// json-server --watch src/database/database.json
// json-server --watch database.json

import Cadastro from './components/Cadastro'
import './App.css';

function App() {
  return (
    <div className="row">
      <div className="col-md-8 offset-md-2">
        <Cadastro/>
      </div>
    </div>
  )
  
}

export default App;
