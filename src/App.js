import { useEffect, useState } from 'react';
import './App.css';
import axios from 'axios';
import { Home } from "./components/Home";
import { Repositories } from "./components/Repositories";
import { About } from "./components/About";
import { Follower } from "./components/Follower";
import { BrowserRouter as Router, Link, Routes, Route } from 'react-router-dom';
import { FaGithub } from "react-icons/fa";
import { FaRegSun } from "react-icons/fa";
import { IoMoon } from "react-icons/io5";


function App() {
  const [searchName, setSearchName] = useState("");
  const [show,setShow] = useState(false);
  const [theme,setTheme] = useState("light-theme");
  const [toggletheme,setToggletheme] = useState(true);

  const toggleTheme = () => {
    setToggletheme(!toggletheme);
    if(theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme")
    }
  }

  useEffect(() => {
    document.body.className = theme;
  })


  async function getUser() {
    setShow(!show);
    try {
      const response = await axios.get(`https://api.github.com/users/${searchName}`);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    
    <div className="App ">
        <button onClick={() => toggleTheme()} className='toggleTheme border-2 border-black px-8 py-4 m-1 rounded-full relative duration-500 '>
            {
              toggletheme ? 
              <FaRegSun className='text-[#fbfb66]  outline-none font-bold text-2xl absolute left-1 top-[3px] rounded-full duration-500'/> :
              <IoMoon className=' text-2xl absolute left-9 top-1 rounded-full'/>
            }
        </button>
      <Router>
      <div className='flex flex-col items-center'>
        <h1 className='md:text-4xl text-2xl text-center font-bold mt-2 mb-4 flex'><FaGithub className='text-center'/>Welcome to Github Profile Viewer</h1>
        <h2 className='md:text-2xl text-xl font-semibold mb-4'>Enter User Name to search</h2>
      </div>
      <div className='flex items-center justify-center mb-4'>
        <input type='text' placeholder='Enter User Name' onChange={(e) => setSearchName(e.target.value)}
        className='text-black outline-none border-2 border-black mr-2 rounded-full text-center w-[150px] md:w-[200px]' />
        <button onClick={getUser} className='text-black font-bold bg-blue-200 border-2 border-blue-400 px-4  rounded-full focus:scale-x-100'>Search</button>
      </div>
      <nav className='mt-2 mb-4 md:mr-2'>
          <ul className='flex justify-center gap-2 text-lg md:text-xl font-semibold md:border-0 border-b-black border-t-black border-2'>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/repositories">Repositories</Link>
            </li>
            <li>
              <Link to="/followers">Followers</Link>
            </li>
            <li>
              <Link to="/about" className='text-center'>About us</Link>
            </li>
          </ul>
        </nav>
        <div className=''>
          <Routes className='flex h-[100vh] items-center justify-center'>
            <Route path="/" element={show ?  <Home search={searchName}/> : <div></div>  } />
            <Route path="/repositories" element={show ? <Repositories search={searchName}/> : <div></div>} />
            <Route path="/followers" element={show ? <Follower search={searchName}/> : <div></div>} />
            <Route path="/about" element={<About />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
