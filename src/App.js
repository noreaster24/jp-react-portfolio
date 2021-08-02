import React, { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import ContactForm from './components/Contact';


function App() {
  const [categories] = useState([
    <About></About>,
    <Projects></Projects>,
    <Work></Work>
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
      ></Nav>
      <main>
        {!contactSelected ? (
          <>
          currentCategory={currentCategory}
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div >
  );
}

export default App;
