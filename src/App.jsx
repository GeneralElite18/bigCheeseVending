import { Link, NavLink, Routes, Route} from 'react-router-dom';
import './stylings/App.css';
import Logo from './images/BigCheeseLogo.png'
import ScrollToTop from './javaScripts/ScrollToTop';

import HomePage from './pages/home.page';
import FAQPage from './pages/faq.page';
import ContactPage from './pages/contact.page';

function App() {
  return (
    <div>
        <header className="header">
          <img src={Logo} alt="" className="logo"/>
          <div className="navLinkMenu">
            <Link to="/" className="navLink">Home</Link>
            <Link to="/faq" className="navLink">FAQ</Link>
            <Link to="/contact" className="navLink">Contact</Link>
          </div>
        </header>
        <div className="headerSpacer">
          <img src={Logo} alt="" className="logo"/>
        </div>
        <ScrollToTop />
        <Routes>
          <Route path='/bigCheeseVending/#' element={<HomePage />}></Route>
          <Route path='/bigCheeseVending/#/faq' element={<FAQPage />}></Route>
          <Route path='/bigCheeseVending/#/contact' element={<ContactPage />}></Route>
        </Routes>
    </div>
  );
}

export default App;
