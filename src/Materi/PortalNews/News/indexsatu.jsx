import React, { useEffect, useState } from 'react';

const API_KEY = "23706d07218f40dab2d9ce45ce4b502f";
const HEADLINES_NEWS = "https://newsapi.org/v2/top-headlines?country=us&apiKey=";
const SEARCH_NEWS = "https://newsapi.org/v2/everything?q=";

const NewsApp = () => {
  const [newsDataArr, setNewsDataArr] = useState([]);
  const [newsQuery, setNewsQuery] = useState('');

  useEffect(() => {
    
    fetchHeadlines();
    
  }, []);

  const fetchHeadlines = async () => {
    const response = await fetch(HEADLINES_NEWS + API_KEY);
    if (response.status >= 100 && response.status < 300) {
      const dataJson = await response.json();
      setNewsDataArr(dataJson.articles);
    } else {
      console.log(response.status, response.statusText);
    }
  };

  const fetchQueryNews = async () => {
    if (newsQuery === '') return;

    const response = await fetch(SEARCH_NEWS + encodeURIComponent(newsQuery) + "&apiKey=" + API_KEY);
    if (response.status >= 100 && response.status < 300) {
      const dataJson = await response.json();
      setNewsDataArr(dataJson.articles);
    }
  };

  const displayNews = () => {
    if (newsDataArr.length === 0) {
      return <h5>Data tidak ditemukan</h5>;
    }

    return newsDataArr.map((news, index) => {
      const date = news.publishedAt.split("T");

      return (
        <div className="col-sm-12 col-md-4 col-lg-4 p-2 card" key={index}>
          <div className="p-2">
            <img height="matchparent" width="100%" src={news.urlToImage} alt="News" />

            <div>
              <h5 className="card-title">{news.title}</h5>
              <h6 className="text-primary">{date[0]}</h6>
              <p className="text-muted">{news.description}</p>
              <a className="btn btn-success" target="_blank" href={news.url}>Read more</a>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div>
       
      <nav className="navbar navbar-dark bg-dark">
        <div className="container-fluid">
        <a className="navbar-brand">Portal Berita</a>
          <a className="navbar-brand">React-Class News</a>
          <a className="navbar-brand">Home</a>
          
          <form className="d-flex ms-auto" role="search">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search news.."
              aria-label="search"
              value={newsQuery}
              onChange={(e) => setNewsQuery(e.target.value)}
            />
            <button className="btn btn-primary" type="button" onClick={fetchQueryNews}>
              Search
            </button>
          </form>
        </div>
      </nav> 
      <div>
        <div className="row m-3" id="newsType"></div>
        <div className="row me-2 ms-2" id="newsdetails">
          {displayNews()}
        </div>
      </div>
    </div>
  );
};

export default NewsApp;