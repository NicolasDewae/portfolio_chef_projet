import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import ServicesList from './components/servicesList/ServicesList';
import Contact from './components/contact/Contact';
import { useState } from 'react';


function App() {
  const [translate, setTranslate] = useState(false);
  const handleTranslate = () => {
      setTranslate(!translate);
  }
  return (
    <div className="App">
      {/* Translation button */}
      <button className='translateBtn' onClick={handleTranslate}>
        <p className='translate'>
            {translate ? 'Fr' : 'En'}
        </p>
      </button>
      <Navbar data={translate} />
      <Main />
      <About data={translate} />
      <ServicesList data={translate} />
      <Contact data={translate} />
    </div>
  );
}

export default App;
