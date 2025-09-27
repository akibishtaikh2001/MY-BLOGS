import React from 'react';

const Blog = ({ blog }) => {
    //    const { blog } = props;
    console.log(blog);


    return (
       <div className="card bg-base-100 w-96 shadow-sm">
  <figure className="px-10 pt-10">
    <img
      src={blog.cover}
      alt="Shoes"
      className="rounded-xl" />
  </figure>
  <div className="card-body items-end text-center">
    <h2 className="card-title" > {blog.title} </h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div className="card-actions">
      <button className="btn btn-primary">mark as a reading</button>
    </div>
  </div>
</div>
    );
};

export default Blog;