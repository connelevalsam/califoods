import Link from 'next/link'

const Socials = () => {
    return ( 
        <>
            <Link href="https://www.linkedin.com/in/connel-asikong-00016181">
                <a className="fa-icon" title="">
                    <i className="fa fa-linkedin"></i>
                </a>
            </Link>
            <Link href="https://twitter.com/ConnelBlaze">
                <a className="fa-icon" title="">
                    <i className="fa fa-twitter"></i>
                </a>
            </Link>
            <Link href="https://connelblaze.medium.com">
                <a className="fa-icon" title="">
                    <i className="fa fa-medium"></i>
                </a>
            </Link>
        </>
     );
}
 
export default Socials;