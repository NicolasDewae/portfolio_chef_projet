import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import ServicesList from './components/servicesList/ServicesList';
import Contact from './components/contact/Contact';
import { useState } from 'react';
import Timeline from './components/timeline/Timeline';
import english_flag from './assets/icons/english_flag.png';
import french_flag from './assets/icons/french_flag.png';

function App() {
  const [translate, setTranslate] = useState(false);
  const handleTranslate = () => {
      setTranslate(!translate);
  }
  return (
    <div className="App">
      {/* Translation button */}
      <button className='translateBtn' onClick={handleTranslate}>
          <img src={translate ? french_flag : english_flag} alt='translate' />
          {translate ? <p>Français</p> : <p>English</p>}
      </button>
      <Navbar data={translate} />
      <Main />
      <About data={translate} />
      <Timeline data={translate} />
      <ServicesList data={translate} />
      <Contact data={translate} />
    </div>
  );
}

export default App;
