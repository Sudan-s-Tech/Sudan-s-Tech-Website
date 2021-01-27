import './App.css';
import Home from './components/Hero/Hero'
import Features from './components/Features/Features'
import TechStack from './components/Techstack/Techstack'
import Discord from './components/Discord/Discord'
import Vision from './components/Vision/Vision'
import Impact from './components/Impact/Impact'
function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <Vision />
      <TechStack/>
      <Impact />
      <Discord/>
    </div>
  );
}

export default App;
