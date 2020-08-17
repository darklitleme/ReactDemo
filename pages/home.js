import React from "react";

export default function Home() {
  return (
    <div className="overlay">
      <h2 className="title">Title of the site</h2>
      <p className="description">This is the description of this cool site</p>
      <a
        href="/"
        className="btn"
        onClick={(e) => {
          e.preventDefault();
          document.getElementsByClassName("btn")[0].classList.toggle("active");

          document
            .getElementsByClassName("ReadMeContent")[0]
            .classList.toggle("active");
          document
            .getElementsByClassName("ReadMore")[0]
            .classList.toggle("active");
          document
            .getElementsByClassName("ReadLess")[0]
            .classList.toggle("active");
        }}
      >
        <div className="ReadMeContent">
          Content This is a bit of text, so i can fill in this space. What do
          you think of all the annimations? <br />
          Come on it's cool!
          <br />
          <br />
          This site is also mobile friendly
        </div>
        <div className="ReadMore">Read More...</div>
        <div className="ReadLess">Click to Read Less...</div>
      </a>
    </div>
  );
}
