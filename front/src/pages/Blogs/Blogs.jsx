import { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import './Blog.css'

const Blogs = () => {
  const { blog_list } = useContext(StoreContext);

  console.log(blog_list)

  return (
    <div
      className=" flex flex-row justify-center items-center gap-[3rem] flex-wrap py-[2rem] px-[1rem]"
    >
      {blog_list.map((blog, index) => (
        <div
          key={index}
          className="flex flex-col justify-center w-[100%] md:w-[45%] lg:w-[30%]"
        >
           <img src={"http://localhost:4000" + '/images/' +  blog.image} alt="" className="h-[300px]"/>
          <h2 className="">{blog.title}</h2>
          <p className="different_style_font">{blog.description}</p>
          <a href={blog.link} className="">
            Read More
          </a>
        </div>
      ))}
    </div>
  );
};

export default Blogs;
