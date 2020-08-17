import React from "react";

export default function About() {
  return (
    <div className="wrapper">
      <section className="section parallax">
        <div className="overlay">
          <h2 className="title">About me</h2>
        </div>
      </section>
      <section className="section">
        <div className="overlay">
          <h2 className="title">Im a developer</h2>
          <p className="description">
            I am a really cool developrer, as you can see :D
            <br />
            <br />I normly to back end development but i can do front end too!
          </p>
        </div>
      </section>
      <section className="section parallax">
        <div className="overlay">
          <p className="description">
            Is their anything else you would like to see?
          </p>
        </div>
      </section>
    </div>
  );
}
