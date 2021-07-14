import React, { Component } from "react";
import "./BlogPosts.css";
import BlogImg from "../../images/Breakfast.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

class BlogPosts extends Component {
  constructor(props) {
    super(props);

    this.state = {
      blogs: [
        {
          id: 1,
          title: "Healthy Vegetables Salads to try",
          genre: "Vegetables",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max imemollitia, molestiae quas vel sint commodi repu diandae consequ untur elit sit.",
          date: "February 2,2021",
        },
        {
          id: 2,
          title: "Healthy Fruits & Salads to try",
          genre: "Fruits",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max imemollitia, molestiae quas vel sint commodi repu diandae consequ untur elit sit.",
          date: "November 8,2021",
        },
        {
          id: 3,
          title: "Healthy Sprouts & Salads to try",
          genre: "Cereals",
          content:
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Max imemollitia, molestiae quas vel sint commodi repu diandae consequ untur elit sit.",
          date: "December 2,2021",
        },
      ],
    };
  }

  render() {
    return (
      <div className="blogPostsContainer">
        <h2 className="blogPostsHeader">
          Fo<span className="underlineTxt">ood B</span>log Posts
        </h2>

        <div className="blogPostsWrapper">
          {this.state.blogs.map((blog) => (
            <div key={blog.id} className="blogPostWrapper">
              <img className="blogPostImage" src={BlogImg} alt="blog"/>
              <div className="blogPostInfoWrapper">
                <p className="blogPostDate">{blog.date}</p>
                <button className="blogAdminBtn">
                  <FontAwesomeIcon icon={faUser} />
                  &nbsp; Admin
                </button>
                <p className="blogGenre">{blog.genre}</p>
                <h3 className="blogPostTitle">{blog.title}</h3>
                <p className="blogPostShortContent">{blog.content}</p>
                <a className="readMore">
                  Read More <FontAwesomeIcon icon={faArrowRight} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default BlogPosts;
