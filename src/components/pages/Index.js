import React from 'react';
import Article from '../articles/Article';
import ArticleSmall from '../articles/ArticleSmall';

const Index = () => {
    return (
        <section className="articles">
            <div className="container">
                <div className="articles__wrapper">
                    <div className="articles__left">
                        <Article />
                        <Article />
                        <Article />
                    </div>
                    <div className="articles__right">
                        <ArticleSmall />
                        <ArticleSmall />
                        <ArticleSmall />
                        <ArticleSmall />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;
