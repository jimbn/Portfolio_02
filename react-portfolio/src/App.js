import React, { useState } from "react";

import Header from './components/Header';
import Footer from './components/Footer';

import './App.css';

function App() {

  const [pages] = useState ([
    { name: "About" },
    { name: "Project" },
    { name: "Resume" }
  ]);

  const [ currentPage, setCurrentPage ] = useState( pages[0] );

  return (
    <div className="">
      <Header/>
      <main>
        {/* Render page content */}
      </main>
      <Footer/>
    </div>
  );
}

export default App;
