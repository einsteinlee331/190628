import React from 'react';
import '../assets/css/App.css';
import Footer from './Footer.jsx'
import AddTodo from '../containers/AddTodo.jsx'

const App=()=> (
    <div className="App">
      <AddTodo/>
      <Footer/>
    </div>
  );

export default App;