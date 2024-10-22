import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";
import { addToLS, removeCartFormLS } from "./Utils/localStorage";

const App = () => {
  const [bookmarks, setBookmarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);

  const handleBookmarks = (blog) => {
    const newBookmark = [...bookmarks, blog];
    if(bookmarks.indexOf(blog) === -1){
      setBookmarks(newBookmark);
      addToLS(blog.id);
    }else{
      alert("This data already added")
    }
  };

  const handleReadingTime = (time, id) => {
    if(bookmarks.length){
      const newReadingTime = readingTime + time;
        setReadingTime(newReadingTime);
    }else{
      alert('No added to bookmark')
    }
    
    const remainingBookmark = bookmarks.filter((bookmark)=> bookmark.id !== id)
    setBookmarks(remainingBookmark)
    removeCartFormLS(id)
  };

  return (
    <div>
      <Header />
      <div className="md:flex justify-between max-w-7xl mx-auto mt-4 gap-10">
        <Blogs
          handleBookmarks={handleBookmarks}
          handleReadingTime={handleReadingTime}
          setBookmarks={setBookmarks}
        />
        <div className="md:w-1/3">
          <h1 className="text-3xl font-bold bg-orange-50 my-4 p-4 border-teal-600 border-2">
            Spent time on read: {readingTime}
          </h1>
          <div className="text-center h-full bg-neutral-200 p-10">
            <h1 className="text-2xl font-bold text-left">
              Bookmark Blog: {bookmarks.length}
            </h1>
            {bookmarks.map((bookmark) => (
              <Bookmarks key={bookmark.id} bookmark={bookmark} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
