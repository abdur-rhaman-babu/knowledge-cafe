import { useEffect, useState } from "react";
import Blog from "../Blog/Blog";
import PropTypes from "prop-types";
import { getCartFromLS } from "../../Utils/localStorage";

const Blogs = ({handleBookmarks, handleReadingTime, setBookmarks}) => {
    const [blogs, setBlogs] = useState([])
    useEffect(()=>{
        fetch('blogs.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
    },[])

   useEffect(()=>{
        if(blogs.length){
            const storedCart = getCartFromLS ()
            const addCart = []
            for (const id of storedCart){
                console.log(id)
                const blog = blogs.find((blog)=> blog.id === id)
                addCart.push(blog)
            }
            setBookmarks(addCart)
        }
   },[blogs,setBookmarks])
    
    return (
        <div className="md:w-2/3">
            {
                blogs.length > 0 && blogs.map((blog)=> 
                <Blog key={blog.id} blog = {blog} 
                handleBookmarks = {handleBookmarks}
                handleReadingTime = {handleReadingTime}
                />)
            }
    
        </div>
    );
};

Blogs.propTypes = {
    handleBookmarks: PropTypes.func.isRequired,
    handleReadingTime: PropTypes.func.isRequired,
    setBookmarks: PropTypes.func.isRequired
    // blogs: PropTypes.array.isRequired
}

export default Blogs;