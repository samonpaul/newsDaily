import React from 'react'

const NewsItem = ({title, description, imageUrl, url, author, date, source}) => {

        return (
            <div className="card" style={{width: "18rem"}}>
                <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                    <span className="badge text-bg-info">{source}</span>
                        <p className="card-text"><small className="text-muted">By {author}, {new Date(date).toLocaleDateString()}</small></p>
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text">{description}</p>
                        <a rel="noreferrer" href={url} target="_blank" className="btn btn-sm btn-dark">Read More</a>
                    </div>
            </div>
        )
    }


export default NewsItem