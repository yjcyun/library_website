import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/Layout';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';


const App=() =>{
  return (
    <BrowserRouter>
        <Layout>
          <Route exact path='/' component={HomePage}/>
          <Route path='/login' component={LoginPage}/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;