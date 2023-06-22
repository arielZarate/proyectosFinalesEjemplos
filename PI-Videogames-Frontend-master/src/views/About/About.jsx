export default function About() {
  return (
    <div className="text-center container mt-4">
      <section>
        <h3 className="text-secondary mt-3">About Gamepedia</h3>
        <h4 className="text-light">
          Web site made by Leandro Licata, powered by RAWG API, the largest open
          videogames database!
        </h4>
      </section>
      <section>
        <h3 className="text-secondary mt-3">You can find me in:</h3>

        <a
          href="https://www.linkedin.com/in/leandro-nicol%C3%A1s-licata-522898265/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/linkedin.png"
            alt="linkedin"
            style={{ height: 18 }}
            className="img-fluid me-2"
          />
          LinkedIn
        </a>
        <br />
        <a
          href="https://github.com/LeandroLicata"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/github.png"
            alt="github"
            style={{ height: 18 }}
            className="img-fluid me-2"
          />
          GitHub
        </a>
        <br />
        <a
          href="https://dev-leandrodev.pantheonsite.io/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/icons/web-site.png"
            alt="web-site"
            style={{ height: 18 }}
            className="img-fluid me-2"
          />
          My portfolio
        </a>
        <br />
        <img
          src="/images/thank-you.png"
          alt="motoko"
          className="img-fluid"
          style={{ height: 200}}
        />
        <h3 className="text-info mt-3">Thank you for visiting Gamepedia!</h3>
      </section>
    </div>
  );
}
