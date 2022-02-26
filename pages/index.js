import Head from 'next/head'
import Image from 'next/image'
import Script from 'next/script'
import Masonry from 'react-masonry-css'
import { createClient } from 'contentful'
import RecipeCard from '../components/RecipeCard'

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

export default function Home({ recipes }) {
  // console.log(recipes)
  const breakPoints = {
    default: 3,
    1100: 2,
    600: 1,
  }
  return (
    <>
      <Head>
        <title>caliFoods | Home</title>
        <meta name="keywords" content="Calabar foods" />
      </Head>
      <div className="hero-full-wrapper">
        {/* <div className="grid" >
          <div className="gutter-sizer"></div>
          <div className="grid-sizer"></div> */}
          
        <Masonry
          breakpointCols={breakPoints}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column">
          {
            recipes.map(recipe => (
              <RecipeCard key={recipe.sys.id} recipe={recipe} />
            ))
          }
        </Masonry>
          
        
        {/* </div> */}
        
      </div>
      {/* <Script
        id="load-content"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener("DOMContentLoaded", function (event) {
            masonryBuild();
          });`,
        }}
      />
      <Script
        id="load-content2"
        dangerouslySetInnerHTML={{
          __html: `document.addEventListener("DOMContentLoaded", function (event) {
            navbarToggleSidebar();
            navActivePage();
          });`,
        }}
      />
      <Script src="/main.85741bff.js" strategy='lazyOnload' />
      <Script src="https://unpkg.com/masonry-layout@4/dist/masonry.pkgd.min.js" /> */}
      {/* <Script src="/mine.js" /> */}
    </>
  )
}
