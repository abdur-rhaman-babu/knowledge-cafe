import PropTypes from "prop-types";
import { CiBookmark } from "react-icons/ci";
const Blog = ({ blog, handleBookmarks, handleReadingTime }) => {
//   console.log(blog);
  const {
    cover,
    author_img,
    author,
    posted_date,
    reading_time,
    title,
    hashtags,
  } = blog;
  return (
    <div>
      <img className="w-full" src={cover} alt="" />
      <div className="py-4">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-4">
          <img
            className="w-14 h-14 rounded-full border"
            src={author_img}
            alt=""
          />
          <div>
            <h3 className="font-semibold text-xl">{author}</h3>
            <h4>{posted_date}</h4>
          </div>
        </div>
        <div className="flex items-center gap-2">
          <p>{reading_time} min read</p>
          <i onClick={()=>handleBookmarks(blog)}><CiBookmark /></i>
        </div>
      </div>
      <h3 className="text-3xl font-bold">{title}</h3>
      <div className="flex gap-3">
        {hashtags.map((tag, i) => (
          <p key={i}>{tag}</p>
        ))}
      </div>
      <button onClick={()=>handleReadingTime(reading_time)} className="text-xl text-indigo-600 underline">
       Mark as read
      </button>
      </div>
    </div>
  );
};

Blog.propTypes = {
  blog: PropTypes.object.isRequired,
  handleBookmarks: PropTypes.func.isRequired,
  handleReadingTime: PropTypes.func.isRequired,
};

export default Blog;
