import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import Service from './components/service/Service';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <Service />
      <Contact />
    </div>
  );
}

export default App;
