import React from 'react' 
// import moment from 'moment'


const NewsItem = (props) => {
 // var Link = require('react-router').Link
    let { title, description, imageUrl, newsUrl, author, date, source} = props;
    return (
      
      <div className="my-3">
        <div className="card">
          <img src={!imageUrl?"https://cdn.analyticsvidhya.com/wp-content/uploads/2019/09/types_of_sampling.jpg":imageUrl} 
              className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}...</p>
            <p className="card-text"><small className="text-muted">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
            <a href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  
}

export default NewsItem
