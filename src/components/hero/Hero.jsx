import "./hero.scss";

function Hero() {
  return (
    <div className="hero">
      <div className="wrapper">
        <div className="textContainer">
          <h2>EYRAM TAY</h2>
          <h1>Software Developer</h1>
          <div className="buttons">
            <button>See the Latest Works</button>
            <button>Contact Me</button>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        {" "}
        <img src="/hero1.png" alt="" />{" "}
      </div>
    </div>
  );
}

export default Hero;
