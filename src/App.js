import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';
import Work from './components/Work';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
        <Work></Work>
      </main>
    </div >
  );
}

export default App;
