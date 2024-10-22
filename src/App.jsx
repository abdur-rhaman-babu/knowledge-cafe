import { useState } from "react";
import Blogs from "./components/Blogs/Blogs";
import Bookmarks from "./components/Bookmarks/Bookmarks";
import Header from "./components/Header/Header";

const App = () => {
  const [bookmarks, setBookmarks] = useState ([])
  const handleBookmarks = (blog) =>{
    const newBookmark = [...bookmarks, blog]
    setBookmarks(newBookmark)
}
  return (
    <div>
        <Header/>
       <div className="md:flex justify-between max-w-7xl mx-auto mt-4 gap-10">
          <Blogs handleBookmarks = {handleBookmarks}/>
          <div className="md:w-1/3 text-center bg-neutral-200 p-10">
            <h1 className="text-2xl font-bold text-left">Bookmark Blog: {bookmarks.length}</h1>
            {
                bookmarks.map((bookmark)=>  <Bookmarks key={bookmark.id} bookmark = {bookmark}/>)
            }
          </div>
       </div>
    </div>
  );
};

export default App;