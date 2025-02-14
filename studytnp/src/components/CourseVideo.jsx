// import { useState } from "react";
// import Header from "./Header";
// import SideNavbar from "./SideNavbar";
// import SubHeader from "./SubHeader";

// const courseVideos = [
//   {
//     id: "0",
//     title: "Aptitude Tutorial",
//     videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0",
//     thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
//     description: "Learn the basics of aptitude for job preparation.",
//     date: "Feb 10, 2024",
//     views: "12K views",
//   },
//   {
//     id: "1",
//     title: "Interview Crack Tutorial",
//     videoUrl: "https://www.youtube.com/embed/63baP9l21F0",
//     thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg",
//     description: "Master the skills to crack technical interviews.",
//     date: "Jan 25, 2024",
//     views: "8K views",
//   },
// ];

// const CourseVideos = () => {
//   const [selectedVideo, setSelectedVideo] = useState(courseVideos[0]);

//   return (
//     <>
//         <Header />
//         {/* <SideNavbar /> */}
//         <SubHeader/>
//         <div className="min-h-screen bg-gray-100 p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Course Videos</h1>
        
//         {/* Video Player */}
//         <div className="flex flex-col items-center mb-8">
//             <iframe
//             width="100%"
//             height="450"
//             className="w-full max-w-2xl rounded-lg shadow-lg"
//             src={selectedVideo.videoUrl}
//             title={selectedVideo.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//             ></iframe>
//             <h2 className="text-xl font-semibold mt-4">{selectedVideo.title}</h2>
//             <p className="text-gray-600 text-sm">{selectedVideo.description}</p>
//             <p className="text-gray-500 text-xs">{selectedVideo.date} • {selectedVideo.views}</p>
//         </div>
        
//         {/* Video List Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//             {courseVideos.map((video) => (
//             <div
//                 key={video.id}
//                 className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
//                 onClick={() => setSelectedVideo(video)}
//             >
//                 <img
//                 src={video.thumbnail}
//                 alt={video.title}
//                 className="w-full h-40 object-cover rounded-lg mb-4"
//                 />
//                 <h3 className="text-lg font-semibold">{video.title}</h3>
//                 <p className="text-gray-600 text-sm">{video.description}</p>
//                 <p className="text-gray-500 text-xs mt-2">{video.date} • {video.views}</p>
//             </div>
//             ))}
//         </div>
//         </div>
//     </>
//   );
// };

// export default CourseVideos;















// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Header from "./Header";
// import SubHeader from "./SubHeader";

// // Sample course video data
// const courseData = {
//   "0": [
//     { id: "0", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//     { id: "1", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//     { id: "2", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//     { id: "3", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//     { id: "4", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//     { id: "5", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//   ],
//   "1": [
//     { id: "0", title: "Interview Prep - Basics", videoUrl: "https://youtu.be/pSVk-5WemQ0?si=euezdS0K1h061aOZ", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Basic interview prep guide.", date: "Mar 5, 2024", views: "5K views" },
//     { id: "1", title: "Mock Interview Tips", videoUrl: "https://youtu.be/o5vvBYgtzjw?si=Df733TIrHZtFpPhw", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Tips to ace interviews.", date: "Mar 10, 2024", views: "7K views" },
//     { id: "2", title: "Interview Prep - Basics", videoUrl: "https://youtu.be/pSVk-5WemQ0?si=euezdS0K1h061aOZ", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Basic interview prep guide.", date: "Mar 5, 2024", views: "5K views" },
//   ],
// };

// const CourseVideos = () => {
//   const { id } = useParams();
//   const videos = courseData[id] || [];
//   const [selectedVideo, setSelectedVideo] = useState(videos[0]);

//   if (videos.length === 0) {
//     return <h2 className="text-center text-red-500">Course Not Found</h2>;
//   }

//   return (
//     <>
//       <Header />
//       {/* <SubHeader /> */}
//       <div className="min-h-screen bg-gray-100 p-6">
//         <h1 className="text-3xl font-bold text-center mb-6">Course Videos</h1>

//         {/* Video Player */}
//         <div className="flex flex-col items-center mb-8">
//           <iframe
//             width="100%"
//             height="450"
//             className="w-full max-w-2xl rounded-lg shadow-lg"
//             src={selectedVideo.videoUrl}
//             title={selectedVideo.title}
//             frameBorder="0"
//             allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//             allowFullScreen
//           ></iframe>
//           <h2 className="text-xl font-semibold mt-4">{selectedVideo.title}</h2>
//           <p className="text-gray-600 text-sm">{selectedVideo.description}</p>
//           <p className="text-gray-500 text-xs">{selectedVideo.date} • {selectedVideo.views}</p>
//         </div>

//         {/* Video List Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
//           {videos.map((video) => (
//             <div
//               key={video.id}
//               className="bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
//               onClick={() => setSelectedVideo(video)}
//             >
//               <img src={video.thumbnail} alt={video.title} className="w-full h-40 object-cover rounded-lg mb-4" />
//               <h3 className="text-lg font-semibold">{video.title}</h3>
//               <p className="text-gray-600 text-sm">{video.description}</p>
//               <p className="text-gray-500 text-xs mt-2">{video.date} • {video.views}</p>
//             </div>
//           ))}
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseVideos;
















// import { useParams } from "react-router-dom";
// import { useState } from "react";
// import Header from "./Header";

// // Sample course video data
// const courseData = {
//   "0": {
//     title: "Aptitude Basics Course",
//     description: "Learn the essential aptitude skills required for competitive exams and job interviews.",
//     thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
//     totalVideos: 6,
//     views: "50K views",
//     videos: [
//       { id: "0", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//       { id: "1", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//       { id: "2", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//       { id: "3", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//       { id: "4", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//       { id: "5", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
//       { id: "6", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
//       { id: "7", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
    
//     ]
//   }
// };

// const CourseVideos = () => {
//   const { id } = useParams();
//   const playlist = courseData[id];
//   const [selectedVideo, setSelectedVideo] = useState(playlist.videos[0]);

//   if (!playlist) {
//     return <h2 className="text-center text-red-500">Course Not Found</h2>;
//   }

//   return (
//     <>
//       <Header />
//       <div className="flex flex-col md:flex-row min-h-screen bg-gray-100 p-6 mt-28">
//         {/* Left Panel: Playlist Info */}
//         <div className="md:w-1/3 bg-white rounded-lg shadow-lg p-6 mb-6 md:mb-0">
//           <img src={playlist.thumbnail} alt={playlist.title} className="w-full rounded-lg mb-4" />
//           <h1 className="text-2xl font-bold mb-2">{playlist.title}</h1>
//           <p className="text-gray-600 text-sm mb-2">{playlist.description}</p>
//           <p className="text-gray-500 text-xs">{playlist.totalVideos} Videos • {playlist.views}</p>
//         </div>
        
//         {/* Right Panel: Video List */}
//         <div className="md:w-2/3 ml-0 md:ml-6">
//           {/* Video List */}
//           <div className="space-y-4">
//             {playlist.videos.map((video) => (
//               <div
//                 key={video.id}
//                 className="flex items-center bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
//                 onClick={() => setSelectedVideo(video)}
//               >
//                 <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded-lg mr-4" />
//                 <div>
//                   <h3 className="text-lg font-semibold">{video.title}</h3>
//                   <p className="text-gray-600 text-sm">{video.description}</p>
//                   <p className="text-gray-500 text-xs mt-2">{video.date} • {video.views}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default CourseVideos;





















import { useParams } from "react-router-dom";
import { useState } from "react";
import Header from "./Header";
import { heroBackground } from "../assets";

const courseData = {
  "0": {
    title: "Aptitude Basics Course",
    description: "Learn the essential aptitude skills required for competitive exams and job interviews.",
    thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg",
    totalVideos: 6,
    views: "50K views",
    videos: [
      { id: "0", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
      { id: "1", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
        { id: "2", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
      { id: "3", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
      { id: "4", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
      { id: "5", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
      { id: "6", title: "Aptitude Basics", videoUrl: "https://www.youtube.com/embed/X8BYu3dMKf0", thumbnail: "https://img.youtube.com/vi/X8BYu3dMKf0/0.jpg", description: "Learn aptitude basics.", date: "Feb 10, 2024", views: "12K views" },
      { id: "7", title: "Advanced Aptitude", videoUrl: "https://www.youtube.com/embed/63baP9l21F0", thumbnail: "https://img.youtube.com/vi/63baP9l21F0/0.jpg", description: "Advanced aptitude techniques.", date: "Feb 15, 2024", views: "9K views" },
    ]
  }
};

const CourseVideos = () => {
  const { id } = useParams();
  const playlist = courseData[id];
  const [selectedVideo, setSelectedVideo] = useState(playlist.videos[0]);

  if (!playlist) {
    return <h2 className="text-center text-red-500">Course Not Found</h2>;
  }

  return (
    <div 
    style={{
        backgroundImage: `url(${heroBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}>
      <Header />
      <div className="flex flex-col md:flex-row min-h-screen bg-[#00000042] backdrop-blur-sm p-6 mt-24 border-[1px] border-[#5e5d5d] rounded-xl">
        {/* Left Panel: Fixed Course Info */}
        <div className="md:w-1/3 bg-gradient-to-br from-[#623d6974] to-[#ba5fe4] rounded-lg shadow-lg p-6 h-full sticky top-28">
          <img src={playlist.thumbnail} alt={playlist.title} className="w-full rounded-lg mb-4" />
          <h1 className="text-2xl font-bold mb-2">{playlist.title}</h1>
          <p className="text-gray-600 text-sm mb-2">{playlist.description}</p>
          <p className="text-gray-500 text-xs">{playlist.totalVideos} Videos • {playlist.views}</p>
        </div>
        
        {/* Right Panel: Scrollable Video List */}
        <div className="md:w-2/3 md:ml-6 overflow-y-auto h-screen pb-20">
          {/* Video List */}
          <div className="space-y-4">
            {playlist.videos.map((video) => (
              <div
                key={video.id}
                className="flex items-center bg-white rounded-lg shadow-md p-4 cursor-pointer hover:shadow-xl transition"
                onClick={() => setSelectedVideo(video)}
              >
                <img src={video.thumbnail} alt={video.title} className="w-32 h-20 object-cover rounded-lg mr-4" />
                <div>
                  <h3 className="text-lg font-semibold">{video.title}</h3>
                  <p className="text-gray-600 text-sm">{video.description}</p>
                  <p className="text-gray-500 text-xs mt-2">{video.date} • {video.views}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CourseVideos;
