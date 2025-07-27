import { HashRouter, NavLink, Routes, Route} from 'react-router-dom';
import './stylings/App.css';
import Logo from './images/BigCheeseLogo.png'

import HomePage from './pages/home.page';
import FAQPage from './pages/faq.page';
import ContactPage from './pages/contact.page';

function App() {
  return (
    <HashRouter hashType="hashbang">
        <header className="header">
          <img src={Logo} alt="" className="logo"/>
          <div className="navLinkMenu">
            <a href='/' className="navLink">Home</a>
            <a href='/faq' className="navLink">FAQ</a>
            <a href='/contact' className="navLink">Contact</a>
          </div>
        </header>
        <div className="headerSpacer">
          <img src={Logo} alt="" className="logo"/>
        </div>
        <Routes>
          <Route path='/' element={<HomePage />}></Route>
          <Route path='/faq' element={<FAQPage />}></Route>
          <Route path='/contact' element={<ContactPage />}></Route>
        </Routes>
    </HashRouter>
  );
}

export default App;
