import DataTable from 'components/DataTable';
import Footer from 'components/Footer';
import NavBar from 'components/NavBar';
import React from 'react';



function App() {
  return (
    <>
      <NavBar />
      <div className="container">
         <h1 className="text-primary">OLA MUNDO</h1>
         <DataTable/>
      </div>
      <Footer/>
  </>
  );
}

export default App;
