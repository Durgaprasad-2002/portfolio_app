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
            entry.target.classList.add("show-op");
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
        "https://d2vrvpw63099lz.cloudfront.net/do-i-need-a-chatbot/header-chat-box.png",
      altText: "Chatbot Image",
      title: "ChatBot Application",
      description:
        "Developed a chatbot interface that interacts with an LLM API, parses responses, allows users to save results, and includes an admin panel for managing saved data.",
      links: [
        {
          url: "http://truechatbot.vercel.app/",
          text: "Try it!",
        },
      ],
    },
    {
      image:
        "https://assets.nintendo.com/image/upload/ar_16:9,c_lpad,w_930/b_white/f_auto/q_auto/ncom/en_CA/games/switch/e/exploding-kittens-switch/hero",
      altText: "Exploding Kitten Card Game",
      title: "Exploding Kitten Card Game",
      description:
        " It is a single-player web-based game. It features a leaderboard, automatic game-saving, and dynamic card interactions, providing an engaging and interactive gaming experience.",
      links: [
        {
          url: "https://kittenexplode.vercel.app/",
          text: "Try it!",
        },
      ],
    },
    {
      image:
        "https://www.lyyti.com/hs-fs/hubfs/1_Images/Blog/event-management-system.jpg?width=2000&name=event-management-system.jpg",
      altText: "Event Management",
      title: "Event Management",
      description:
        "Developed dynamic React-based web app integrating with Google Calendar API for CRUD operations, featuring secure Google Auth login.",
      links: [
        {
          url: "https://eventmanage-app.vercel.app/",
          text: "Try it!",
        },
      ],
    },
    {
      image: "https://kinsta.com/wp-content/uploads/2018/05/what-is-dns.png",
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
        "https://static1.makeuseofimages.com/wordpress/wp-content/uploads/2022/01/url-shortener.jpg",
      altText: "TinyIt",
      title: "TinyIt",
      description:
        "Created TinyIt, a tool to convert long URLs into short, shareable links with aliases and analytics.",
      links: [{ url: "https://tinyit.vercel.app/", text: "Try it!" }],
    },
    {
      image: "https://blog.dktcdn.net/files/blog-la-gi-3.png",
      altText: "Blog Website",
      title: "Blog Website",
      description:
        "This project is a full-stack blog application with user authentication, blog creation, and commenting features, built using Express.js and MongoDB.",
      links: [
        { url: "https://blogify-app-kqxx.onrender.com/", text: "Try it!" },
      ],
    },

    {
      image:
        "https://www.shutterstock.com/image-vector/car-sharing-online-application-concept-600nw-1898241121.jpg",
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
        "https://images.marketpath.com/9dda7041-2870-4a96-bf1e-dd8342e86e7c/image/83401e05-762f-4dae-9b16-c27ecd1df6fd/importexport_summary.png",
      altText: "STAAR Exports & Imports",
      title: "STAAR Exports & Imports ",
      description:
        "Spearheaded the creation of an innovative E-Commerce website, facilitating seamless international trade with a sophisticated email notification system.",
      links: [{ url: "https://staarfoods.com/", text: "Try it!" }],
    },
    {
      image:
        "https://lawacademybhopal.com/wp-content/uploads/2024/02/mba-after-law-llb.jpg",
      altText: "Legis Code",
      title: "Legis Code ",
      description:
        "A comprehensive platform for legal practitioners, featuring a categorized repository of laws.",
      links: [{ url: "https://legiscode.vercel.app/", text: "Try it!" }],
    },

    {
      image:
        "https://www.emedstore.in/images/servicepage/hospital-app-website-development.png?version=1.1",
      altText: "Hospital Management Application",
      title: "Hospital Management",
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
      <div className="Prow1" id="projects">
        <h2 style={{ marginLeft: "-15px" }}>Projects</h2>
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
