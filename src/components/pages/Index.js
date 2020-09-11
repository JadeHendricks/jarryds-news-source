import React, { useEffect, useContext } from 'react';
import Article from '../articles/Article';
import ArticleSmall from '../articles/ArticleSmall';
import BaseContext from "../../context/base/BaseContext";

const Index = () => {

    const { getHeadlines, headLines, currentCategory } = useContext(BaseContext);

    useEffect(() => {
        getHeadlines(currentCategory);
        // eslint-disable-next-line
    }, [])

    return (
        <section className="articles">
            <div className="container">
                <div className="articles__wrapper">
                    <div className="articles__left">
                        { headLines &&  headLines.slice(0, 8).map(headline => <Article key={ Math.random() * 10000 } headline={ headline }/>)}
                    </div>
                    <div className="articles__right">
                        { headLines &&  headLines.slice(8, 20).map(headline => <ArticleSmall key={ Math.random() * 10000 } headline={ headline }/>)}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Index;
