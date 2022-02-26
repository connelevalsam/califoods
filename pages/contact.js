import Head from 'next/head'

const Contact = () => {
    return ( 
        <>
            <Head>
                <title>caliFoods | Contact</title>
                <meta name="keywords" content="Calabar foods" />
            </Head>
            <div class="row">
                <div class="col-xs-12">
                    <div class="section-container-spacer">
                    <h1>Contact</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                    </div>
                    <div class="section-container-spacer">
                    <form action="" class="reveal-content">
                        <div class="row">
                            <div class="col-md-6">
                            <div class="form-group">
                                <input type="email" class="form-control" id="email" placeholder="Email" />
                            </div>
                            <div class="form-group">
                                <input type="text" class="form-control" id="subject" placeholder="Subject" />
                            </div>
                            <div class="form-group">
                                <textarea class="form-control" rows="3" placeholder="Enter your message"></textarea>
                            </div>
                            <button type="submit" class="btn btn-primary btn-lg">Send</button>
                            </div>
                            <div class="col-md-6">
                            <ul class="list-unstyled address-container">
                                <li>
                                <span class="fa-icon">
                                    <i class="fa fa-phone" aria-hidden="true"></i>
                                </span>
                                + 234 703 485 7296
                                </li>
                                <li>
                                <span class="fa-icon">
                                    <i class="fa fa-at" aria-hidden="true"></i>
                                </span>
                                connelblaze@gmail.com
                                </li>
                                <li>
                                <span class="fa-icon">
                                    <i class="fa fa fa-map-marker" aria-hidden="true"></i>
                                </span>
                                Awka, Anambra
                                </li>
                            </ul>
                            <h3>Follow me on social networks</h3>
                            <a href="https://www.linkedin.com/" title="" class="fa-icon">
                                <i class="fa fa-linkedin"></i>
                            </a>
                            <a href="https://twitter.com/" title="" class="fa-icon">
                                <i class="fa fa-twitter"></i>
                            </a>
                            <a href="https://dribbble.com/" title="" class="fa-icon">
                                <i class="fa fa-dribbble"></i>
                            </a>
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