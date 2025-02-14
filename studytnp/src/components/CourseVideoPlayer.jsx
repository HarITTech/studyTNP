import React, { useRef } from "react";
import { useParams } from "react-router-dom";
import ReactPlayer from "react-player";
import { heroBackground } from '../assets';
import Header from './Header';
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
// import { courseData } from "../data/courseData";


gsap.registerPlugin(ScrollTrigger);

const courseData = {
    "0": {
      title: "Aptitude Basics Course",
      description: "Learn the essential aptitude skills required for competitive exams and job interviews.",
      thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
      totalVideos: 6,
      views: "50K views",
      price: "00.0",
      videos: [
        { id: "0", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
        { id: "1", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
        { id: "2", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
        { id: "3", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
        { id: "4", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
        { id: "5", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
        { id: "6", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
        { id: "7", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
      ],
      notes: [
        {
          _id: "67ae2433176b84dec8bdf7e0",
          title: "Log into Our Firebase Hosting",
          chapter: "Chapter 1",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", // Replace with actual URL
        },
        {
          _id: "67ae2433176b84dec8bdf7e1",
          title: "React Template",
          chapter: "Chapter 2",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e2",
          title: "Basic Functionality",
          chapter: "Chapter 3",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e3",
          title: "Dynamic JavaScript with JSX",
          chapter: "Chapter 4",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e4",
          title: "What Is React Hooks",
          chapter: "Chapter 5",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e5",
          title: "React Hooks",
          chapter: "Chapter 6",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e6",
          title: "React Hooks",
          chapter: "Chapter 7",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e7",
          title: "React Hooks",
          chapter: "Chapter 8",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
        {
          _id: "67ae2433176b84dec8bdf7e8",
          title: "React Hooks",
          chapter: "Chapter 9",
          thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
        },
      ],
    }
  };

const CourseVideoPlayer = () => {
      
    const { playlistId, videoId } = useParams();
    // console.log(playlistId);
    // console.log(videoId);
    
    // const playlist = courseData[playlistId];
    // const video = playlist?.videos.find((v) => v.id === videoId);
    // const { playlistId, videoId } = useParams();
    const course = courseData[playlistId];
    const video = course.videos.find(v => v.id === videoId);


      const carouselRef = useRef(null);
    
      const scrollLeft = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: -250, behavior: "smooth" });
        }
      };
    
      const scrollRight = () => {
        if (carouselRef.current) {
          carouselRef.current.scrollBy({ left: 250, behavior: "smooth" });
        }
      };

        useEffect(() => {
          const cursor = document.getElementById("cursor");
          document.addEventListener("mousemove", (event) => {
            cursor.style.left = `${event.clientX - 100}px`;
            cursor.style.top = `${event.clientY - 100}px`;
          });
      
          gsap.to("#nav", {
            backgroundColor: "#000",
            height: "100px",
            duration: 0.5,
            scrollTrigger: {
              trigger: "#nav",
              scroller: "body",
              start: "top -10%",
              end: "top -11%",
              scrub: 1,
            },
          });
        }, []);
    
  return (

    <div className="relative w-full h-screen overflow-y-auto">

        {/* Cursor */}
      {/* <div
        id="cursor"
        className="fixed h-[200px] w-[200px] bg-[#702295c1] opacity-40 blur-[50px] rounded-full z-10 pointer-events-none"
      ></div> */}

      {/* Background Image */}
      <img
        src={heroBackground}
        alt="Background"
        className="fixed w-full h-full object-cover -z-10"
      />

      {/* Navbar */}
      <div
        id="nav"
        className="fixed top-0 left-0 w-full h-[140px] flex justify-center items-center z-50 transition-all"
      >
        {/* <img src={logo} alt="CSE Tech Mania Logo" className="h-[75px] w-[483px]" /> */}
        <Header />
      </div>
      

      {/* Main Content */}
      {/* <div id="main" className="relative bg-black bg-opacity-45 min-h-screen w-full">

      </div> */}

      <div className="relative bg-black bg-opacity-45 w-full flex flex-col md:flex-row min-h-screen backdrop-blur-sm p-6 pt-24">
        {/* Left Panel: Fixed Course Info */}
        
        <div className=" relative w-full md:w-3/4 p-4 shadow-lg h-full md:sticky md:top-28 mb-6 md:mb-0 border-[2px] border-[#484848ec] rounded-2xl">
            
                <ReactPlayer url={video.videoUrl} controls width="100%" height="500px" />
                <h1 className="text-xl font-bold mt-4 break-words w-full">{video.title}</h1>
                <div className="flex items-center text-white py-5 rounded-lg shadow-lg">
                    {/* Profile Image */}
                    <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSpjRkfdV2CW7Sg2sT7e3zRmUyUUIOh5IW0bw&s" // Replace with the actual profile image URL
                        alt="img"
                        className="w-[40px] h-[40px] rounded-full mr-4 object-cover"
                    />
                    
                    {/* Channel Info */}
                    <div>
                        <p className="text-gray-400 text-xs">Published By</p>
                        <h3 className="text-base font-bold flex items-center">
                        Clever Programmer
                        {/* <span className="ml-1 text-gray-400">✔️</span> */}
                        </h3>
                    </div>
                </div>
                <div className=" bg-[#505050f7] border-[1px] border-[#7c7c7cec] rounded-2xl px-5 py-3">
                    <p className="text-gray-300">{video.description}</p>
                </div>
        
        </div>
        
        {/* Right Panel: Scrollable Video List */}
        <div className="w-full md:w-1/4 md:ml-6 backdrop-blur-sm h-[85vh] p-6 border-[2px] rounded-2xl border-[#484848ec] ">
        <div className=''>
            <h2 className="text-xl font-bold pb-3">Playlist</h2>
        </div>
          {/* Video List */}
          <div className="space-y-4 overflow-y-auto h-[75vh] custom-scrollbar pr-5">
            {course.videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center h-[90px] bg-[#4e4e4eb2] rounded-xl hover:bg-[#6d6d6dd4] p-4 shadow-md cursor-pointer hover:shadow-xl transition  border-[1px] border-[#7c7c7cec]"
                // onClick={() => navigate(`/course/${courseid}/video/${video.id}`)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-[108px] h-[60px] object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-sm font-semibold break-words w-full">{video.title}</h3>
                  <p className="text-gray-400 text-xs break-words w-full">{video.description}</p>
                  <p className="text-gray-300 text-xs mt-2 break-words w-full">{video.date} • {video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

    
    <div className="relative w-full max-w-full px-8 md:px-20  pb-15 bg-black bg-opacity-45">
            <h2 className="text-white text-xl font-semibold mb-3">Notes</h2>
            <div className="relative">
              {/* Left Scroll Button */}
              <button
                onClick={scrollLeft}
                className="absolute left-0 z-10 p-2 bg-black bg-opacity-60 rounded-full text-white top-1/2 transform -translate-y-1/2 hidden lg:block"
              >
                <FaChevronLeft size={20} />
              </button>
    
              {/* Scrollable Container */}
              <div
                ref={carouselRef}
                className="flex space-x-4 overflow-x-auto scrollbar-hide px-4 scroll-smooth scroll-container"
                style={{ scrollBehavior: "smooth" }}
              >
                {course.notes.map((note) => (
                  <div key={note._id} className="flex flex-col w-48 shrink-0 gap-2 p-3 bg-[#5959595c] backdrop-blur-sm border-[1px] border-[#4d4d4d] rounded-xl">
                    <div className="relative">
                      <img
                        src={note.thumbnail}
                        alt={note.title}
                        className="w-full h-28 object-cover rounded-md"
                      />
                      <span className="absolute bottom-1 left-2 bg-black text-white text-xs px-2 py-1 rounded">
                        {note.chapter}
                      </span>
                    </div>
                    <p className="text-white text-sm mt-2 truncate w-full">{note.title}</p>
                  </div>
                ))}
              </div>
    
              {/* Right Scroll Button */}
              <button
                onClick={scrollRight}
                className="absolute right-0 z-10 p-2 bg-black bg-opacity-60 rounded-full text-white top-1/2 transform -translate-y-1/2 hidden lg:block"
              >
                <FaChevronRight size={20} />
              </button>
            </div>
          </div>



    </div>


  )
}

export default CourseVideoPlayer
