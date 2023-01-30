import React from "react";


import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";


const projectList = [
  {
    title: "A currency converter",
    description:
      "A simple currency convertor created using html, css, and Javascript.",
    url: "https://itotiaharrison.github.io/currency-converter/",
  },
  {
    title: "A movies app",
    description:
      "A movies app created using React, css, and open API.",
    url: "https://zippy-dusk-059389.netlify.app/",
  },
  {
    title: "Weather App",
    description:
      "Created using React, css, and an open API",
    url: "https://github.com/ItotiaHarrison/Weather-App",
  },
  {
    title: "Job application site",
    description:
      "I worked in a team of 5 to create a job application site using Ruby on rails for back-end and React for front-end.",
    url: "https://imaginative-beignet-60f579.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="light" id="portfolio">
      <h2>Projects</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
