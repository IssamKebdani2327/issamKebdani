
import './footer.css'

function Footer () {

    return (
        <div className="footer" id='footer'>
            <div className="footer-top">
                <div className="footer-top-left">
                    <h3>KBD</h3>
                    <p>i am a frontend developer from algeria with 1 years of experience in companies like Apple, google and Microsoft</p>
                </div>
                <div className="footer-top-right">
                    <input type="email" placeholder='enter your email' />
                    <button>Subscribe</button>
                </div>
            </div>
            <hr />
            <div className="footer-bottom">
                <div className="footer-bottom-left">
                    &copy; {new Date().getFullYear()} issam kebdani. All right reserved
                </div>
                <div className="footer-bottom-right">
                    <p>term of services</p>
                    <p>privacy policy</p>
                    <p>contact with me</p>
                </div>
            </div>
        </div>
    ) ;
}


export default Footer ;