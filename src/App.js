import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';
import ContactForm from './components/Contact';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Work></Work>
        <ContactForm></ContactForm>
      </main>
    </div >
  );
}

export default App;
