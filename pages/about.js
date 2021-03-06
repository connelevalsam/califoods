import Head from 'next/head'
import Link from 'next/link'

const About = () => {
    return ( 
        <>
            <Head>
                <title>caliFoods | About</title>
                <meta name="keywords" content="Calabar foods" />
            </Head>
            <div className="row">
                <div className="col-xs-12 col-md-6">
                    <img className="img-responsive" alt="" src="/images/img-10.jpg" />
                </div>
                <div className="col-xs-12 col-md-6">
                    <h1>About me</h1>
                    
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <h3>Incididunt ut labore </h3>

                    <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl.</p>

                    <h3>Ut enim ad minim veniam </h3>
                    
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas luctus at sem quis varius. 
                    Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Phasellus iaculis magna sagittis elit sagittis, at hendrerit lorem venenatis. Morbi accumsan iaculis blandit. Cras ultrices hendrerit nisl.</p>
                    <h3>Phasellus iaculis magna </h3>
                    <p>Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non
                    proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
                    
                    <Link href="/contact">
                        <a className="btn btn-primary" title=""> Get in touch</a>
                    </Link>
                </div>
            </div>
        </>
     );
}
 
export default About;