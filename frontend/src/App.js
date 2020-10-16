import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';


const App=() =>{
  

  return (
    <BrowserRouter>
        <Layout>
          App
        </Layout>
    </BrowserRouter>
  );
}

export default App;