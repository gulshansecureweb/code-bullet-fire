import ContactFormSection from './ContactFormSection';

export default function Footer(){
 return(
    <div className="footer">
        <div className="container-fluid footer">
            <div className="row contact">
                <div className="col-md-6 contact-form">
                <ContactFormSection/> 
                </div>
                <div className="col-md-4 col-md-offset-1 content-ct">
                    <h3><span className="ti-twitter"></span> Contact details</h3>
                    <p>Email: <a href="mailto:tester@gmail.com">tester@gmail.com</a> </p>
                    <hr/>
                    <p>Phone No: <a href="tel:+4733378901">+47 333 78 901</a> </p>
                    <hr/>
                    <p>Address : #0999 ,xyz,lpt </p>
                </div>
            </div>

            <div className="row footer-credit">
                <div className="col-md-6 col-sm-6">
                <p>&copy; 2015, <a href="http://www.designerdada.com">DesignerDada.com</a> | All rights reserved.</p>
                </div>
                <div className="col-md-6 col-sm-6"> 
                <ul className="footer-menu">
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                    <li><a href="#">Terms &amp; Condition</a></li>
                </ul>
                </div>
            </div>
        </div>
    </div>
 )   
}