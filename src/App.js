
import './App.css';
import Home from './Components/Home/Home';

import {
    BrowserRouter,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import About from './Components/About/About';
import Contact from './Components/Contact/Contact';
import Portfolio from './Components/Portfolio/Portfolio';
import GalleryPage from './Components/Gallery/GalleryPage';
import Service1 from './Components/Services/Service1';
import Service2 from './Components/Services/Service2';
import Service3 from './Components/Services/Service3';

function App() {
    return (
        <BrowserRouter >
            <div className="App">
                <>

                    <nav className="navbar navbar-expand-lg sticky-top">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row">
                                    <div className="col-sm-12 col-md-6 col-lg-6 Footerimg">

                                        <h3>ARCH <span>HUB</span></h3>
                                    </div>
                                </div>
                            </div>
                            <button className="navbar-toggler btn-light bg-secondary" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbarNavDropdown">
                                <ul className="navbar-nav">
                                    <li className="nav-item ">
                                        <Link className="nav-link  " aria-current="page" as={Link} to="/">HOME</Link>
                                    </li>
                                    <li className="nav-item dropdown text-light">
                                        <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            SERVICES
                                        </a>
                                        <ul className="dropdown-menu">
                                            <li><Link className="dropdown-item" as={Link} to="/Service1">BUILDING PLANING</Link></li>
                                            <li><Link className="dropdown-item" as={Link} to="/Service2">ARCHITECTURE VISUALISATION</Link></li>
                                            <li><Link className="dropdown-item" as={Link} to="/Service3">3D BUILDING MODELING</Link></li>
                                        </ul>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" as={Link} to="/GalleryPage">Gallery</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" as={Link} to="/About">ABOUT</Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link" as={Link} to="/Contact">CONTACT</Link>
                                    </li>
                                    {/* <li className="nav-item">
                                            <Link className="nav-link" as={Link} to="/Portfolio">PORTFOLIO</Link>
                                        </li> */}
                                </ul>
                            </div>
                        </div>
                    </nav>
                </>

                <Routes >
                    <Route path='/' element={<Home />} />
                    <Route path='/About' element={<About />} />
                    <Route path='/Contact' element={<Contact />} />
                    <Route path='/Portfolio' element={<Portfolio />} />
                    <Route path='/GalleryPage' element={<GalleryPage />} />
                    <Route path='/Service1' element={<Service1 />} />
                    <Route path='/Service2' element={<Service2 />} />
                    <Route path='/Service3' element={<Service3 />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;
