import { createClient } from 'contentful'
import Link from 'next/link'
import Head from 'next/head'

export async function getStaticProps() {
    const client = createClient({
        space: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_KEY,
    })

    const res = await client.getEntries({ content_type: "caliFoods" })

    return {
        props: {
            recipes: res.items
        }
    }
}

const Services = ({ recipes }) => {
    console.log(recipes);
    return ( 
        <>
            <Head>
                <title>caliFoods | Services</title>
                <meta name="keywords" content="Calabar foods" />
            </Head>
            <div className="row">
                <div className="col-xs-12 section-container-spacer">
                    <h1>Services</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
                    tempor incididunt ut labore et dolore magna aliqua. <br />Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                    consequat.</p>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-12.jpg" />
                    <h2>Consectetur</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <Link href="/contact">
                        <a className="btn btn-primary" title=""> Get in touch</a>
                    </Link>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-13.jpg " />
                    <h2>Adipiscing</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="/contact" className="btn btn-primary" title=""> Get in touch</a>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-14.jpg " />
                    <h2>Dolor</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <a href="/contact" className="btn btn-primary" title=""> Get in touch</a>
                </div>

            </div>
        </>
     );
}
 
export default Services;