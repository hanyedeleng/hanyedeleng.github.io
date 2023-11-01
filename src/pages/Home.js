import React from "react";
import { tech_blog_db } from "../db/blogs";
import react_project_photo from "../assets/react_project.png";

const Home = () => {
  console.log("tech db: ", tech_blog_db);

  return (
    <div style={{ display: "flex", gap: "16px", marginTop: "1rem" }}>
      this is the home page
      {tech_blog_db.map((element) => (
        <div key={element.id}>
          <p>show something here</p>
          <img
            // src={react_project_photo}
            src={element.photo_link}
            style={{ width: "260px", height: "160px" }}
          ></img>
          <div>{element.blog_title}</div>
        </div>
      ))}
    </div>
  );
};

export default Home;
