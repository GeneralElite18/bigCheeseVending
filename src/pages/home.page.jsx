import '../stylings/homePage.css';
import welcomeImage from '../images/WelcomeImage.png';
import snackImage from '../images/SnackDisplay.jpg';
import MachineTypes from '../images/VendingMachineTypes.png'
import { Link } from 'react-router-dom';


function HomePage() {
    return (
        <div>
            <h1 className="mainHeader">We Do the Work, You Enjoy the Benefits</h1>
            <div className="homeSection">
                <div className="sectionFlex">
                    <div className="sectionItem">
                        <h2>Vending Machine Services</h2>
                        <p>We install and service modern vending machines stocked with popular snacks and drinks. All of it handled and maintained at no cost to your business.</p>
                        <div className="buttonSection">
                            <Link to="/contact" className="button">Request a Vending Machine</Link>
                        </div>
                    </div>
                    <div className="sectionItem">
                        <img src={welcomeImage} alt="Vending Machine Image" className="welcomeImage" />
                    </div>
                </div>
            </div>
            <h1 className="mainHeader">Vending Service Made Easy</h1>
            <div className="homeSection">
                <div className="sectionFlex">
                    <div className="sectionItem">
                        <img src={snackImage} alt="Snack Image" className="welcomeImage" />
                    </div>
                    <div className="sectionItem">
                        <h2>How it Works</h2>
                        <p><strong>1. Contact Us:</strong> Tell us about your location and needs.</p>
                        <p><strong>2. Free Installation:</strong> We deliver and set up your machine at no cost.</p>
                        <p><strong>3. Ongoing Service:</strong> We keep it stocked, cleaned, and maintained.</p>
                        <div className="buttonSection">
                            <Link to="/contact" className="button">Request a Vending Machine</Link>
                        </div>
                    </div>
                </div>
            </div>
            <h1 className="mainHeader">A Wide Variety of Machines</h1>
            <div className="homeSection">
                <div className="sectionFlex">
                    <div className="sectionItem">
                        <h2>Find the Right Machine for Your Location</h2>
                        <p>Whether you're looking for a classic snack machine, a compact candy dispenser, or a high-tech smart vending system, we've got you covered.</p>
                        <div className="buttonSection">
                            <Link to="/contact" className="button">Request a Vending Machine</Link>
                        </div>
                    </div>
                    <div className="sectionItem">
                        <img src={MachineTypes} alt="Machine Type Image" className="welcomeImage" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;