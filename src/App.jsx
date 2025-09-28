
import { useState } from 'react'
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
 const [bookmarked, setBookmarked] = useState([])

  const handelBookMark = (blog) => {
      setBookmarked([...bookmarked, blog])
  }

  console.log(bookmarked);
  return (
    <>
     
      <Navbar></Navbar>
     
     
     <div className="main_container flex text-center">
      <div className="left_container w-[70%]">
       
         <Blogs handelBookMark={handelBookMark} ></Blogs>
      </div>
      <div className="right_container w-[30%] ">
        <h1>Reading time: 0</h1>
        <h1>bookmarked count: 0</h1>

        {
          bookmarked.map(marked => <p> {marked.title} </p> )
        }

      </div>
     </div>
     
    </>
  )
}

export default App
