import Head from 'next/head'
import Socials from '../components/Socials';

const Contact = () => {
    return ( 
        <>
            <Head>
                <title>caliFoods | Contact</title>
                <meta name="keywords" content="Calabar foods" />
            </Head>
            <div className="row">
                <div className="col-xs-12">
                    <div className="section-container-spacer">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                    </div>
                    <div className="section-container-spacer">
                    <form action="" className="reveal-content">
                        <div className="row">
                            <div className="col-md-6">
                            <div className="form-group">
                                <input type="email" className="form-control" id="email" placeholder="Email" />
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary btn-lg">Send</button>
                            </div>
                            <div className="col-md-6">
                            <ul className="list-unstyled address-container">
                                <li>
                                <span className="fa-icon">
                                    <i className="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                + 234 703 485 7296
                                </li>
                                <li>
                                <span className="fa-icon">
                                    <i className="fa fa-at" aria-hidden="true"></i>
                                </span>
                                connelblaze@gmail.com
                                </li>
                                <li>
                                <span className="fa-icon">
                                    <i className="fa fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                Awka, Anambra
                                </li>
                            </ul>
                            <h3>Follow me on social networks</h3>
                            <Socials />
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
     );
}
 
export default Contact;