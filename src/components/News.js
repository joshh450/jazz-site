import React from 'react'
import teamData from '../teamData.json'

const News = ({ mode }) => {
    
    const mappedNews = teamData.news.map((article, i) => {
        if(i === 0) {
            return(
                <div className="news-featured-item" key={i}>
                    <img 
                        className="news-featured-image" 
                        src={article.image} 
                        alt={article.headline}
                    />
                    <h1 className={`news-featured-headline ${mode}-text-accent`}>
                        {article.headline}
                    </h1>
                    <span className="news-featured-date">
                        {article.date}
                    </span>
                    <p className="news-featured-description">
                        {article.description}
                    </p>
                </div>
            )
        } else {
            return(
                <div className="news-item" key={i}>
                    <img 
                        className="news-image" 
                        src={article.image} 
                        alt={article.headline}
                    />
                    <div className="news-content-wrap">
                        <h3 className={`news-headline ${mode}-text-accent`}>
                            {article.headline}
                        </h3>
                        <span className="news-date">
                            {article.date}
                        </span>
                        <p className="news-description">
                            {article.description}
                        </p>
                    </div>
                </div>
            )
        }
    })

    return (
        <section>
            <h3 className={`section-header ${mode}-text-accent`}>
                News
            </h3>
            {mappedNews}
        </section>
    )
}

export default News