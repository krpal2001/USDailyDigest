import React from 'react'

const Newsitem =(props)=> {
  
    let {title, description,imageUrl,newsUrl,author,date} = props;
    return (
      <div className="my-3">
        <div className="card">
 
  <img src={!imageUrl?"https://static.vecteezy.com/system/resources/previews/003/778/434/non_2x/breaking-news-background-tv-channel-news-screensaver-illustration-free-vector.jpg":imageUrl} className="card-img-top" alt="..."/>
  <div className="card-body">
 
    <h5 className="card-title">{title}</h5>
   
    <p className="card-text">{description}</p>
    <p class="card-text"><small class="text-body-secondary">By {!author?"Unknown":author} on {new Date(date).toGMTString()}</small></p>
    <a href={newsUrl} target ="_blank" rel="noopener noreferrer" className="btn btn-dark">Read more</a>
  </div>
</div>
<div className="d-flex justify-content-between">...</div>
      </div>
    ) 

}

export default Newsitem
