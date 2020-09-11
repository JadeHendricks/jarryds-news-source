import React from 'react';
import Moment from 'react-moment';

const ArticleSmall = ({ headline: { title, description, publishedAt, source, url, urlToImage } }) => {
    return (
        <div className="article-small">
            <div className="article-small__wrapper">
                <div className="article-small__imageContainer">
                    <img src={ urlToImage ? urlToImage : 'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png' } alt={ title } className="article-small__image" />
                </div>
                <div className="article-small__contentContainer">
                    <h5 className="article-small__type">{ source?.name }</h5>
                    <h3 className="article-small__intro">{ title }</h3>
                    <p className="article-small__description">{ description }</p>
                    <span className="article-small__date">Published on:<Moment format="DD/MM/YYYY">{ publishedAt }</Moment></span>
                </div>
            </div>
            <a href={ url } target="_blank" rel="noopener noreferrer">See more</a>
        </div>
    )
}

export default ArticleSmall;
