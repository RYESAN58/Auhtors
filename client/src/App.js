import './App.css';
import CreateAuthor from './components/Create';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom'
import AllAuthors from './components/all';
import Update from './components/edit';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateAuthor/>}/>
        <Route path='/all' element={<AllAuthors/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
