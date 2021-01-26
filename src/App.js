import './App.css';
import Home from './components/Hero/Hero'
import Features from './components/Features/Features'
import TechStack from './components/Techstack/Techstack'
import Discord from './components/Discord/Discord'
function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <TechStack/>
      <Discord/>
    </div>
  );
}

export default App;
