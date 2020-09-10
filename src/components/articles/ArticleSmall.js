import React from 'react';

const ArticleSmall = () => {
    return (
        <div className="article-small">
            <a href="">See more</a>
            <div className="article-small__wrapper">
                <div className="article-small__imageContainer">
                    <img src="./images/1.jpg" alt="" className="article-small__image" />
                </div>
                <div className="article-small__contentContainer">
                    <h5 className="article-small__type">Software</h5>
                    <h3 className="article-small__intro">Lorem ipsum dolor sit amet consectetur.</h3>
                    <p className="article-small__description">Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
                    <span className="article-small__date">14 September 2020</span>
                </div>
            </div>
        </div>
    )
}

export default ArticleSmall;
