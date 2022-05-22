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
                <meta name="author" content="Connel Asikong" />
            </Head>
            <div className="row">
                <div className="col-xs-12 section-container-spacer">
                    <h1>Services</h1>
                    <p>CaliFoods is not just about recipes or training. We do beyond that, we offer the
                        following services.</p>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-12.jpg" />
                    <h2>Training</h2>
                    <p>The recipes are part of the free <strong>Training</strong> done by our Staff.
                        We offer personal and group tutoring on preparations of various meals.<br />
                    </p>
                    <Link href="/contact">
                        <a className="btn btn-primary" title=""> Get in touch</a>
                    </Link>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-13.jpg " />
                    <h2>Home Delivery</h2>
                    <p>
                        We do <strong>Home Delivery </strong>for orders received based on our Calender.
                        So make your orders a day before at least so we can deliver to you when doing rounds.
                    </p>
                    <Link href="/contact">
                        <a className="btn btn-primary" title=""> Get in touch</a>
                    </Link>
                </div>

                <div className="col-xs-12 col-md-4 section-container-spacer">
                    <img className="img-responsive" alt="" src="./assets/images/img-14.jpg " />
                    <h2>Cook Out</h2>
                    <p>
                        <strong>Cook outs</strong> or any occassion, we are capable of handling, from a little get together
                        to a big Wedding, just name it and we will give you the best services.
                    </p>
                    <Link href="/contact">
                        <a className="btn btn-primary" title=""> Get in touch</a>
                    </Link>
                </div>

            </div>
        </>
     );
}
 
export default Services;
