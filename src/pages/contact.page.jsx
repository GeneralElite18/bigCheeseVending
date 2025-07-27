import '../stylings/contactPage.css';



function ContactPage() {
    return (
        <div>
            <h1 className="mainHeader">Request a Machine</h1>
            <div className="section">
                <div className="sectionFlex">
                    <div className="sectionItem">
                        <h2>Contact Us</h2>
                        <p>Need a Vending Machine? Contact Us! We proudly serve the Northern Colorado area between Denver and Fort Collins!</p>
                        <br />
                        <p><strong>Email: </strong><a href="mailto:BigCheeseVending@gmail.com" className="link">BigCheeseVending@gmail.com</a></p>
                        <p><strong>Phone: </strong><span class="number">303 - 859 - 3265</span></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactPage;