
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'
import { TiMediaPause } from 'react-icons/ti';

function App() {
  const [bookmarked, setBookmarked] = useState([]);
  const [readingCount, setReadingCount] = useState(0)

  const handelBookMark = (blog) => {
    setBookmarked([...bookmarked, blog])
  }


  const handleMarkAsRead = (time) => {
    const newTime = readingCount + time;
    setReadingCount(newTime);

  }




  return (
    <>

      <Navbar></Navbar>


      <div className="main_container flex text-center">
        <div className="left_container w-[70%]">

          <Blogs handelBookMark={handelBookMark} handleMarkAsRead={handleMarkAsRead} ></Blogs>
        </div>
        <div className="right_container w-[30%] ">
          <h1>Reading time: {readingCount} </h1>
          <h1>bookmarked count: {bookmarked.length}</h1>

          {
            bookmarked.map(marked => <p> {marked.title} </p>)
          }

        </div>
      </div>

    </>
  )
}

export default App
