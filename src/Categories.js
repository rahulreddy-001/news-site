import React from "react";
import "./categories.css";

const API_KEY = "b93a6533fc9b47e59e8f40664b440484";
var catArr = [
  {
    name: "COVID-19",
    imgSrc:
      "https://media.istockphoto.com/photos/covid19-coronavirus-booster-vaccination-concept-picture-id1334441038?b=1&k=20&m=1334441038&s=170667a&w=0&h=w64hkuRGYNQyAmPcr3d3hEovGTOxz71OEl5zxIp5Zc0=",
  },
  {
    name: "LATEST",
    imgSrc:
      "https://media.istockphoto.com/photos/file-folder-of-latest-updates-picture-id1214940965?b=1&k=20&m=1214940965&s=170667a&w=0&h=8yds6kj6cvPAdwZxOpOJCMUE_SzICUCRWiaLbB2Dhrc=",
  },
  {
    name: "BREAKING",
    imgSrc:
      "https://media.istockphoto.com/photos/breaking-news-world-news-with-map-backgorund-picture-id1182477852?b=1&k=20&m=1182477852&s=170667a&w=0&h=JELSsVdEVClnMhZRbZs2GJQ8DLqd5OKkru-VANqlf24=",
  },
  {
    name: "HYDERABAD",
    imgSrc:
      "https://media.istockphoto.com/photos/the-spectacular-char-minar-during-the-blue-hour-picture-id1010240892?b=1&k=20&m=1010240892&s=170667a&w=0&h=3-J2F1_2XnEnklW6vXZ5XF68SpElS7C2fv90D1XKkGI=",
  },
  {
    name: "POLITICS",
    imgSrc:
      "https://media.istockphoto.com/photos/united-we-vote-picture-id173932687?b=1&k=20&m=173932687&s=170667a&w=0&h=2ogA2MCQ_smI7PlOtyxIWwRsbAZYOrz2-nMAF-mSdq0=",
  },
  {
    name: "TECHNOLOGY",
    imgSrc:
      "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8dGVjaG5vbG9neXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700&q=60",
  },
  {
    name: "BUSINESS",
    imgSrc:
      "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8N3x8YnVzaW5lc3N8ZW58MHx8MHx8&auto=format&fit=crop&w=700&q=60",
  },
  {
    name: "SPORTS",
    imgSrc:
      "https://media.istockphoto.com/photos/basketball-player-slam-dunking-ball-picture-id1254565557?b=1&k=20&m=1254565557&s=170667a&w=0&h=4CVcz-1Y6WMS4DcILPbCNiFEEB55IWmb2v1YWy03xAI=",
  },
];
function Categories({ setCat }) {
  return (
    <div className="cats">
      {catArr.map((data) => {
        return (
          <div
            className="cat_details"
            key={data.name + data.imgSrc}
            onClick={() =>
              setCat(
                "https://newsapi.org/v2/everything?" +
                  `q=${data.name}&` +
                  "sortBy=popularity&" +
                  `apiKey=${API_KEY}`
              )
            }
          >
            <img className="cover_img" src={data.imgSrc} alt="" />
            <div className="cat_name">{`${data.name}`}</div>
          </div>
        );
      })}
    </div>
  );
}

export default Categories;
