import { createClient } from 'contentful'
import Head from 'next/head'
import { BLOCKS, MARKS } from '@contentful/rich-text-types';
import { documentToReactComponents  } from '@contentful/rich-text-react-renderer';

const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_KEY,
})

const Text = ({ children }) => <p className="align-center">{children}</p>;
const options = {
    renderNode: {
        [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
        [BLOCKS.UL_LIST]: (node, children) => (
          <ul>{children}</ul>
        ),
        [BLOCKS.OL_LIST]: (node, children) => (
          <ol>{children}</ol>
        ),
        [BLOCKS.LIST_ITEM]: (node, children) => <li>{children}</li>,
  }
}

export const getStaticPaths = async () => {
    const res = await client.getEntries({ content_type: "caliFoods" })

    const paths = res.items.map(item => {
        return {
            params: { slug:item.fields.slug }
        }
    })
    
    return {
        paths,
        fallback: false
    }
}

export async function getStaticProps({ params }) {
    const { items } = await client.getEntries({ 
        content_type: "caliFoods",
        "fields.slug": params.slug
     })

     return {
         props: { recipe: items[0] },
         revalidate: 10
     }
  }

const Recipes = ({ recipe }) => {
    console.log(recipe);
    const { cookingTime, featuredImage, ingredients, methods, title } = recipe.fields
    return ( 
        <>
            <Head>
                <title>caliFoods | Recipes</title>
                <meta name="keywords" content="Calabar foods" />
            </Head>
            <div className="col-xs-12 col-md-8">

                <div className="section-container-spacer">
                    <h1>{ title }</h1>
                    <h2>Recipes </h2>
                    <p>
                        <h4>Ingredients:</h4>
                        <ul>
                            { ingredients.map(ing => (
                                <li key={ ing }>{ ing }</li>
                            )) }
                        </ul>
                    </p>
                    <p>
                        Takes about <b>{ cookingTime }</b> mins to prepare
                    </p>
                </div>

                <div className="section-container-spacer">
                    <p><img className="img-responsive" alt="" src={ 'https:' +featuredImage.fields.file.url } /></p>
                    <div className="row">
                        <div className="col-xs-12 col-md-6">
                            <p><img className="img-responsive" alt="" src="./assets/images/img-13.jpg" /></p>
                        </div>
                        <div className="col-xs-12 col-md-6">
                            <p><img className="img-responsive" alt="" src="./assets/images/img-14.jpg" /></p>
                        </div>
                    </div>
                </div>
                <h4>Method</h4>
                <div>{ documentToReactComponents(methods) }</div>
                {/* { methods.map(med => (
                    <li key={ med }>{ ing }</li>
                )) } */}
            </div>
        </>
     );
}
 
export default Recipes;