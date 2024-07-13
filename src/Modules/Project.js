import React from "react";
import "./Project.css";
import { useEffect } from "react";

function ProjectCard({ image, altText, title, description, links }) {
  return (
    <div className="project-card">
      <img className="card-img-top" src={image} alt={altText} />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="button-container">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.url}
              target="new"
              className="btn btn-light btn-sm m-1"
            >
              {link.text}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Project() {
  useEffect(() => {
    function Animate() {
      const imgContainers = document.querySelectorAll(".project-card");

      const observerOptions = {
        threshold: 0.1, // Adjust this threshold as needed
      };

      const observerCallback = (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.style.transform = "scale(1)";
            entry.target.style.opacity = "1";
          }
        });
      };

      const observer = new IntersectionObserver(
        observerCallback,
        observerOptions
      );

      imgContainers.forEach((container) => observer.observe(container));
    }

    Animate();
  }, []);
  const projects = [
    {
      image:
        "https://www.lyyti.com/hs-fs/hubfs/1_Images/Blog/event-management-system.jpg?width=2000&name=event-management-system.jpg",
      altText: "Event Management",
      title: "Event Management",
      description:
        "Developed dynamic React-based web app integrating with Google Calendar API for CRUD operations, featuring secure Google Auth login.",
      links: [
        {
          url: "https://event-app-durgaprasad-2002s-projects.vercel.app/",
          text: "Try it!",
        },
      ],
    },
    {
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY23c3UXCGS-CXNb-SSvsP5DFoGGzzDhY4s6-EYInUtA&s",
      altText: "DNS Management Tool",
      title: "DNS Management Tool",
      description:
        "Developed a robust DNS management tool designed to handle DNS configurations with features comparable to AWS Route 53.",
      links: [
        {
          url: "https://dns-guru.vercel.app/",
          text: "Try it!",
        },
      ],
    },
    {
      image:
        "https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcRPSWfTFhRH5i2L7R8T4VnZak5ozoCQ6yKoVE6ENY1stxm8OkMK",
      altText: "STAAR Exports & Imports",
      title: "STAAR Exports & Imports (Freelance)",
      description:
        "Spearheaded the creation of an innovative E-Commerce website, facilitating seamless international trade with a sophisticated email notification system.",
      links: [{ url: "https://staarfoods.com/", text: "Try it!" }],
    },
    {
      image:
        "https://media.istockphoto.com/id/1290071290/vector/rental-car-icon.jpg?s=612x612&w=0&k=20&c=q4EsvU3jJJYbcZTJ1EzKh6c-Dvy39HagvAUgTCRK9bE=",
      altText: "Car Rental Application",
      title: "Car Rental Application",
      description:
        "Developed using Bootstrap, React Js, Node Js, MongoDB and allows the user to manage Car bookings.",
      links: [
        {
          url: "https://durgaprasad-2002.github.io/Client_Car/",
          text: "Try it!",
        },
      ],
    },
    {
      image:
        "https://lawacademybhopal.com/wp-content/uploads/2024/02/mba-after-law-llb.jpg",
      altText: "Legis Code",
      title: "Legis Code (Freelance)",
      description:
        "A comprehensive platform for legal practitioners, featuring a categorized repository of laws.",
      links: [{ url: "https://hasiniworld.in/", text: "Try it!" }],
    },

    {
      image:
        "https://img.freepik.com/free-vector/tiny-doctors-patients-near-hospital-flat-vector-illustration-therapist-face-mask-saying-goodbye-cured-people-near-medical-building-ambulance-emergency-clinic-concept_74855-25338.jpg",
      altText: "Hospital Management Application",
      title: "Hospital Management Application",
      description:
        "Developed using Bootstrap, JavaScript, React Js, Node Js, MongoDB Cluster.",
      links: [
        {
          url: "https://github.com/Durgaprasad-2002/ApolloShineProject",
          text: "Source Code",
        },
      ],
    },
    {
      image: "https://www.hotstats.com/hubfs/hotel_restaurant_waiter-1.jpeg",
      altText: "Restaurant Application",
      title: "Restaurant Application",
      description:
        "This Java console-based task management system simplifies organization and boosts productivity.",
      links: [
        {
          url: "https://github.com/Durgaprasad-2002/HeroViredTask3",
          text: "Source Code",
        },
      ],
    },
    {
      image:
        "https://www.designer-daily.com/wp-content/uploads/2020/03/web-dev-business.jpg",
      altText: "Minor Projects",
      title: "Minor Projects",
      description:
        "Developed various basic web applications using HTML, CSS, JavaScript, React Js, NodeJs, MongoDB.",
      links: [
        { url: "https://github.com/Durgaprasad-2002/", text: "Source Codes" },
      ],
    },
  ];

  return (
    <div className="project-container">
      <div className="Prow1" id="pro">
        <h2 style={{ marginLeft: "-25px" }}>Projects</h2>
      </div>
      <div className="project-content">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            image={project.image}
            altText={project.altText}
            title={project.title}
            description={project.description}
            links={project.links}
          />
        ))}
      </div>
    </div>
  );
}
