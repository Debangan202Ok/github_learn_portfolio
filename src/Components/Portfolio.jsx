/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "A simple Retro styled Portfolio",
    description:
      "I was thinking of making a retro styled facebook themed portfolio using react, and here it is.",
    url: "https://comforting-genie-d0dcfd.netlify.app/",
  },
  {
    title: "What About Simple js game?",
    description:
      "After watching too many video tutorials. i was thinking of making a simple js game, and here it is.",
    url: "https://github.com/pauldebangan1970/GuessTheNum",
  },
  {
    title: "My Resume Site",
    description:
      "I chellenged myself to make a resume site using only html and css, and i did it.All source codes are available in my github account.",
    url: "https://pauldebangan1970.github.io/Porfolio/",
  },
  {
    title: "A simle Data Structure wiki",
    description:
      "A day before my exam i was thinking of making a simple data structure wiki using html and css, and here it is.",
    url: "https://data-structure-skill.netlify.app/",
  },
];

const Portfolio = () => {
  return (
    <section className="padding port-back" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center", borderRadius: "1rem", overflow: "hidden" }}>
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
