import React, { useState } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";



const News = (props) => {

    const[articles, setArticles] = useState([])
    const[loading, setLoading] = useState(true)
    const[page, setPage] = useState(1)
    const[totalResults, setTotalResutls] = useState(0)

    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }


    const updateNews = async() => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1e7c02c618fa4191b8f51dafbbcb0231&page=${page}&pageSize=${props.pageSize}`;
        setLoading(true);
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        props.setProgess(70);
        setArticles(parseData.articles)
        setLoading(false)
        setTotalResutls(parseData.totalResults)

       props.setProgess(100);
    }

    useState(() => {
        document.title =`${capitalizeFirstLetter(props.category)} - News` ;
        updateNews();
    },[])


    const fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=us&category=${props.category}&apiKey=1e7c02c618fa4191b8f51dafbbcb0231&page=${page+1}&pageSize=${props.pageSize}`;
        setPage(page+1);
        let data = await fetch(url);
        let parseData = await data.json()
        console.log(parseData);
        setArticles(articles.concat(parseData.articles));
        setTotalResutls(parseData.totalResults)
    };
    
        return (
            <>
                <h1 className="text-center" style={{ margin: '35px 0px', marginTop: '90px' }}> News - Top {capitalizeFirstLetter(props.category)} Headlines </h1>
                {loading && <Spinner />}
                <InfiniteScroll
                    dataLength={articles.length}
                    next={fetchMoreData}
                    hasMore={articles.length !== totalResults}
                    loader={<Spinner />}
                >
                    <div className="container">
                        <div className="row">
                            {!loading && articles.map((element) => {
                                return <div className="col-md-4" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 40) : ""} description={element.description ? element.description.slice(0, 60) : ""}
                                        imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name} />
                                </div>
                            })}
                        </div>
                    </div>
                </InfiniteScroll>
            </>
        )

}

News.defaultProps = {
    country: 'in',
    pageSize: 8,
    category: 'general'
}

News.propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string,
}

export default News
