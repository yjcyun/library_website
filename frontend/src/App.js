import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import BookPage from './pages/BookPage';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


const App=() =>{
  return (
    <BrowserRouter>
        <Layout>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
          <Route path='/books' component={BookPage}/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;