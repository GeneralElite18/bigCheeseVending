import '../stylings/faqPage.css';
import { Link } from 'react-router-dom';


function FAQPage() {
    return (
        <div>
            <h1 className="mainHeader">Frequently Asked Questions</h1>
            <div className="section">
                <div className="sectionFlex">
                    <div className="sectionItem">
                        <h2>How much does it cost to get a vending machine?</h2>
                        <p>Our vending machine installation is completely free! We cover the cost of the machine, installation, and maintenance.</p>
                        <br />
                        <h2>Who restocks the machine?</h2>
                        <p>We handle all restocking and inventory management. Most machines are serviced weekly or as needed.</p>
                        <br />
                        <h2>What types of products do you offer?</h2>
                        <p>We offer a wide variety of snack and drinks, as well as healthy options. We even customize selections based on your preferences or needs of your customers or employees.</p>
                        <br />
                        <h2>How much spaces does a vending machine need?</h2>
                        <p>Most machines need about 3 feet of wall space and access to a standard electrical outlet.</p>
                        <br />
                        <h2>What happens if a machine breaks down or has an issue?</h2>
                        <p>If there is an issue, just reach out to us and we'll take care of fixes or replacements quickly. Usually within 24-48 hours.</p>
                        <br />
                        <h2>Is there a contract or long-term commitment involved?</h2>
                        <p>Nope! Our goal is to provide a great service and products so you'll want to keep the machine.</p>
                         <div className="buttonSection">
                             <Link to="/contact" className="buttonFAQ">Request a Free Vending Machine</Link>
                        </div>
                        <br />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FAQPage;