import Link from 'next/link'
import Image from 'next/image'
const { default: Socials } = require("./Socials")

const Header = () => {
    return ( 
        <header>
            <div className="navbar navbar-default visible-xs">
                <button type="button" className="navbar-toggle collapsed">
                    <span className="sr-only">Toggle navigation</span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                    <span className="icon-bar"></span>
                </button>
                <Link href="/"><a className="navbar-brand">Cali Foods</a></Link>
            </div>

            <nav className="sidebar">
                <div className="navbar-collapse" id="navbar-collapse">
                    <div className="site-header hidden-xs">
                        <Link href="/">
                            <a className="site-brand" title="">
                                <img className="img-responsive site-logo" alt="" src="/images/mashup-logo.svg" />
                                Cali Foods
                            </a>
                        </Link>
                        <p>Home of carefully cooked delicious Calabar food with a touch of kop no me and wonderful flavours.</p>
                    </div>
                    <ul className="nav">
                        <li>
                            <Link href='/'>
                                <a title="">Home</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/about'>
                                <a title="">About</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/services'>
                                <a title="">Services</a>
                            </Link>
                        </li>
                        <li>
                            <Link href='/contact'>
                                <a title="">Contact</a>
                            </Link>
                        </li>

                    </ul>

                    <nav className="nav-footer">
                        <p className="nav-footer-social-buttons">
                            <Socials />
                        </p>
                        <p>?? 2021 CB | Website created with <a href="http://www.mashup-template.com/" title="Create website with free html template">Mashup Template</a>/<a href="https://www.unsplash.com/" title="Beautiful Free Images">Unsplash</a></p>
                    </nav>  
                </div> 
            </nav>

        </header>
     );
}
 
export default Header;