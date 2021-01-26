import './App.css';
import Home from './components/Hero/Hero'
import Features from './components/Features/Features'
import TechStack from './components/Techstack/Techstack'
function App() {
  return (
    <div className="App">
      <Home />
      <Features />
      <TechStack/>
    </div>
  );
}

export default App;
