import React from 'react';

const Article = () => {
    return (
        <div className="article">
            <div className="article__wrapper">
                <h5 className="article__type">Software</h5>
                <h3 className="article__intro">DeltaMaker – The new kid on the block An Elegant 3D Printer and a new wicked ass thing</h3>
            </div>
            <div className="article__imageContainer">
                <img className="article__image" src="./images/Konstructs_03.jpg" alt="image" />
            </div>
            <div className="article__wrapper">
                <p className="article__description">
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nam quos, in accusamus ullam earum facere quo suscipit accusantium eos ratione incidunt, 
                    natus minus maxime fugit provident id repellat officia esse commodi error ipsum? Cupiditate reprehenderit fugiat eos ut autem deleniti perferendis 
                    quisquam voluptatibus aliquid delectus rerum, mollitia, natus iure voluptas?
                </p>
            </div>
            <a href="#">See more</a>
        </div>
    )
}

export default Article;
