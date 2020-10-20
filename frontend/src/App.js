import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';


const App=() =>{
  return (
    <BrowserRouter>
        <Layout>
          <Route exact path='/' component={HomePage}/>
        </Layout>
    </BrowserRouter>
  );
}

export default App;