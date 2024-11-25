import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const projects = [
  {
    title: "Site de stage",
    description:
      "Un site dynamique pour une école de conduite avec chargement dynamique et base de données PostgreSQL.",
    link: "https://github.com/Chia600/Projet-auto-ecole-chanth",
    techStack: ["Django", "PostgreSQL"],
    images: [
      `${process.env.PUBLIC_URL}/assets/Capture d'écran 2024-10-10 182345.png`,
      `${process.env.PUBLIC_URL}/assets/Capture d'écran 2024-10-10 182309.png`,
      `${process.env.PUBLIC_URL}/assets/project1-screenshot3.png`,
    ],
  },
  {
    title: "Site Portfolio",
    description: "Un site dynamique afin de me présenter",
    link: "https://github.com/Chia600/Portfoliov2",
    techStack: ["React"],
    images: [
      `${process.env.PUBLIC_URL}/assets/`,
      `${process.env.PUBLIC_URL}/assets/`,
      `${process.env.PUBLIC_URL}/assets/`,
    ],
  },
  // Add more projects here
];

function Projects() {
  const projectSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <section>
      <h2>Projets</h2>
      {projects.map((project, index) => (
        <div key={index} style={{ marginBottom: "30px", textAlign: "center" }}>
          <h3>{project.title}</h3>
          <p>{project.description}</p>
          <p>{project.techStack.join(", ")}</p>
          <a href={project.link} target="_blank" rel="noopener noreferrer">
            Voir le projet
          </a>
          <Slider {...projectSettings} style={{ marginTop: "20px" }}>
            {project.images.map((image, idx) => (
              <div key={idx}>
                <img
                  src={image}
                  alt={`Screenshot ${idx + 1} of ${project.title}`}
                  style={{
                    width: "30%",         // Adjust the width to fit nicely in the carousel
                    height: "50%",
                    display: "block",
                    margin: "auto",
                    borderRadius: "8px",
                  }}
                />
              </div>
            ))}
          </Slider>
        </div>
      ))}
    </section>
  );
}

export default Projects;
