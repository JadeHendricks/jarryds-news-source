import React from 'react';
import Moment from 'react-moment';

const Article = ({ headline: { title, description, publishedAt, source, url, urlToImage } }) => {
    return (
        <div className="article">
            <div className="article__wrapper">
                <h5 className="article__type">{ source?.name }</h5>
                <h3 className="article__intro">{ title }</h3>
            </div>
            <div className="article__imageContainer">
                <img className="article__image" src={ urlToImage ? urlToImage : 'https://www.brdtex.com/wp-content/uploads/2019/09/no-image-480x480.png' } alt={ title } title={ title } />
            </div>
            <div className="article__wrapper">
            <p className="article__description">{ description }</p>
            <br />
            <p>Published on: <Moment format="DD/MM/YYYY">{ publishedAt }</Moment></p>
            </div>
            <a href={ url } target="_blank">See more</a>
        </div>
    )
}

export default Article;
