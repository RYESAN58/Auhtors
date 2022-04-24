import './App.css';
import CreateAuthor from './components/Create';
import {BrowserRouter, Routes, Route, link} from 'react-router-dom'
import AllAuthors from './components/all';
import Update from './components/edit';
import Error from './components/error';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<CreateAuthor/>}/>
        <Route path='/all' element={<AllAuthors/>}/>
        <Route path='/edit/:id' element={<Update/>}/>
        <Route path='/error' element={<Error/>}/>
      </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
