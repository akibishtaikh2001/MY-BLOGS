
import './App.css'
import Blogs from './Components/Blogs/Blogs'
import Navbar from './Components/Navbar/Navbar'

function App() {
 


  return (
    <>
     
      <Navbar></Navbar>
     
     
     <div className="main_container flex text-center">
      <div className="left_container w-[70%]">
       
         <Blogs></Blogs>
      </div>
      <div className="right_container w-[30%] ">
        <h1>Reading time: 0</h1>
        <h1>bookmarked count: 0</h1>
      </div>
     </div>
     
    </>
  )
}

export default App
