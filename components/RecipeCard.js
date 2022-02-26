import Link from 'next/link'

const RecipeCard = ({ recipe  }) => {
    const { title, slug, thumbnail } = recipe.fields
    var imageURL = 'https:' + thumbnail.fields.file.url;
    return ( 
        <div className="food-item" style={{ position: 'relative', display: 'block' }}>
            <img className="img-responsive" alt="" 
            src={ imageURL } />
            <Link href={'/recipes/' +slug}>
                <a className="project-description">
                    <div className="project-text-holder">
                        <div className="project-text-inner">
                            <h3>{ title }</h3>
                            <p>Discover more</p>
                        </div>
                    </div>
                </a>
            </Link>
        </div>
     );
}
 
export default RecipeCard;