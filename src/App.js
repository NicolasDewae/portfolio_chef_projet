import './App.css';
import Navbar from './components/navbar/Navbar';
import Main from './components/main/Main';
import About from './components/about/About';
import ServicesList from './components/servicesList/ServicesList';
import Contact from './components/contact/Contact';
import { servicesListData } from './config/i18n';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Main />
      <About />
      <ServicesList servicesListData={servicesListData} />
      <Contact />
    </div>
  );
}

export default App;
