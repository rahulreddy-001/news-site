import React from "react";
import "./headline.css";
function Headline({
  source_name,
  publishedAt,
  title,
  image,
  description,
  content,
  url,
}) {
  var urlIcon = url;
  var arrIcon = urlIcon.split("/");
  var iconAdd = arrIcon[0] + "//" + arrIcon[2] + "/favicon.ico";
  const [inDetail, setInDetail] = React.useState(false);
  if (!inDetail) {
    return (
      <>
        <div
          className="headline_card"
          onClick={() => {
            setInDetail(true);
          }}
        >
          <div className="publisher_time">
            <img src={iconAdd} className="icon" alt="" />
            <div className="publisher">{source_name}</div>
            <div className="time"> {publishedAt}</div>
          </div>
          <div className="title_image">
            <div className="title">{title}</div>
            <img className="image" src={image} alt="" />
          </div>
        </div>
      </>
    );
  } else {
    return (
      <>
        <div
          className="headline_card"
          onClick={() => {
            setInDetail(false);
          }}
        >
          <div className="publisher_time">
            <img src={iconAdd} className="icon" alt="" />
            <div className="publisher">{source_name}</div>
            <div className="time"> {publishedAt}</div>
          </div>
          <div className="title">{title}</div>
          <div className="description">{description}</div>
          <img className="image_" src={image} alt="" />
          <div className="content">{content}</div>
          <a href={url} target="_blank" rel="noreferrer" className="link">
            {"Read more >>"}
          </a>
        </div>
      </>
    );
  }
}

export default Headline;
