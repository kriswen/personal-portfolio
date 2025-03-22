export default function HeroSection() {
  function handleClick(url) {
    window.open(url, "_blank")
  }

  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title">Hello, I'm Kris Wen</p>
          <h1 className="hero--section--title">
            <span className="hero--section--title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section--description">
            Full-stack developer that transforming ideas into captivating
            digital realities.
          </p>
        </div>
        <div className="hero--section--buttons">
          <button
            className="btn btn-primary btn-linkedIn"
            onClick={() => handleClick("https://www.linkedin.com/in/kriswen")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                fill="currentColor"
              ></path>
            </svg>
            Let's Connect
          </button>
          <button
            className="btn btn-primary btn-download"
            onClick={() =>
              handleClick(
                "https://drive.google.com/file/d/1yd4iLgmP74BwiSoFknIHL6pJxdQLWZfQ/"
              )
            }
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="32"
              height="32"
              viewBox="0 0 33 33"
              fill="none"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M12 13V4M7 14H5a1 1 0 0 0-1 1v4c0 .6.4 1 1 1h14c.6 0 1-.4 1-1v-4c0-.6-.4-1-1-1h-2m-1-5-4 5-4-5m9 8h0"
                fill="currentColor"
              ></path>
            </svg>
            Download Resume
          </button>
        </div>
      </div>
      <div className="hero--section--image">
        <img
          className="image-rounded-edges"
          height="500"
          src="./img/hero-background-814x576.jpg"
          alt="Hero Section"
        />
      </div>
    </section>
  )
}
