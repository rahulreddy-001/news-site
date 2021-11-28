import React from "react";
import Header from "./Header";
import Headline from "./Headline";
import "./homepage.css";
import { FaSearch } from "react-icons/fa";
import Categories from "./Categories";
const API_KEY = "b93a6533fc9b47e59e8f40664b440484";
function Homepage() {
  const [q, setQ] = React.useState("India");
  var init_url =
    "https://newsapi.org/v2/everything?" +
    `q=${q}&` +
    "sortBy=popularity&" +
    `apiKey=${API_KEY}`;
  const [url, setUrl] = React.useState(init_url);
  const [dataArr, setDataArr] = React.useState([]);
  var setText = (text) => {
    setQ(text.target.value);
    console.log(q);
  };
  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      setUrl(init_url);
    }
  };

  React.useEffect(() => {
    async function fetchUrl() {
      const response = await fetch(url);
      const articalsObj = await response.json();
      setDataArr(articalsObj.articles);
      return response;
    }
    fetchUrl();
  }, [url]);

  return (
    <div>
      <Header />
      <div className="searchBtn">
        <input
          type="text"
          className="searchBar"
          placeholder="Search Keyword"
          onChange={(text) => setText(text)}
          onKeyPress={handleKeyPress}
        />
        <FaSearch className="btn" />
      </div>
      <Categories setCat={setUrl} />
      {dataArr.map((e) => {
        return (
          <Headline
            key={e.source.name + e.publishedAt + e.title}
            source_name={e.source.name}
            publishedAt={e.publishedAt}
            title={e.title}
            image={e.urlToImage}
            description={e.description}
            content={e.content}
            url={e.url}
          />
        );
      })}
    </div>
  );
}

export default Homepage;
