import './App.css';
import Nav from './components/Nav';
import About from './components/About';
import Projects from './components/Projects';


function App() {
  return (
    <div>
      <Nav></Nav>
      <main>
        <About></About>
        <Projects></Projects>
      </main>
    </div>
  );
}

export default App;
