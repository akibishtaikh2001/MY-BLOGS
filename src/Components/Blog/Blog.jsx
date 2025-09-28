import React from 'react';
import { FaBookmark } from "react-icons/fa";

const Blog = ({ blog }) => {
    //    const { blog } = props;
    console.log(blog);


    return (
        <div className="card bg-base-100 w-96 shadow-sm m-2">
            <figure className="px-10 pt-10">
                <img
                    src={blog.cover}
                    alt="Shoes"
                    className="rounded-xl" />
            </figure>
            <div className="card-body  text-center">
                <div className="author flex justify-around items-center  ">
                    <h3> {blog.author} </h3>
                    <img className=' w-16 ' src={blog.author_img} alt="" />
                    <FaBookmark size={25} />
                </div>
                <h2 className="card-title" > {blog.title}  </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className=' flex '>
                    {
                        blog.hashtags.map(hash => <p> {hash} </p>)
                    }

                </div>
                    <div className="card-actions justify-end  ">
                    <button className="btn btn-primary">mark as a reading</button>
                </div>
            </div>
        </div>
    );
};

export default Blog;