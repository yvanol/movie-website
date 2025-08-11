// src/pages/BlogPage/BlogPage.js
import React, { useEffect, useState } from "react";
import BlogCard from "../../components/BlogCard/BlogCard";


function BlogPage() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch('/data/blogData.json')
      .then(res => res.json())
      .then(data => setBlogs(data))
      .catch(e => console.log(e.message));
  }, []);

  return (
    <section id="blogs" className="blogs">
      <div className="container-fluid">
        <div className="row">
          <h4 className="section-title">Our Blog</h4>
        </div>
        <div className="row mt-5">
          {blogs.length > 0 ? (
            blogs.map(blog => (
              <BlogCard key={blog._id} blog={blog} />
            ))
          ) : (
            <p>No blog posts found.</p>
          )}
        </div>
      </div>
    </section>
  );
}

export default BlogPage;
