import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Movie from './components/Movie';
import Search from './components/Search';
import Signup from './components/Signup';
import Signin from './components/Signin';
import Facts from './components/Facts';

function App() {
  return (
    <div>

      <BrowserRouter>
        <Routes>

          <Route path='/' element={<Movie/>}/>
          <Route path='/search' element={<Search/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/signin' element={<Signin/>}/>
          <Route path='/facts' element={<Facts/>}/>

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
