import React, { useState } from "react";

// Example courses with links for each skill level
const courses = {
  beginner: [
    {
      title: "Python for Beginners",
      watchLink: "https://youtu.be/ix9cRaBkVe0?si=3_VKDERvatujjcqK",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "HTML/CSS for Beginners",
      watchLink: "https://youtu.be/G3e-cpL7ofc?si=qygtzBuiyiJ9gOlV",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "Java for Beginners",
      watchLink: "https://youtu.be/eIrMbAQSU34?si=0zxQsrDoe-4QmF-M",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    }
  ],
  intermediate: [
    {
      title: "TypeScript Intermediate Learners",
      watchLink: "https://youtu.be/gieEQFIfgYc?si=JQyxBi34Y62j5t9M",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "C++ for Intermediate Learners",
      watchLink: "https://youtu.be/-TkoO8Z07hI?si=6b3cgNnBbSWCrQs8",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "Swift for Intermediate Learners",
      watchLink: "https://youtu.be/CwA1VWP0Ldw?si=g0WQJMCp2IwphW_t",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    }
  ],
  expert: [
    {
      title: "Rust for Experts",
      watchLink: "https://youtu.be/BpPEoZW5IiY?si=tVrbQ9CnQb3L7l4M",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "F# for Experts",
      watchLink: "https://www.youtube.com/watch?v=c7eNDJN758U",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    },
    {
      title: "Kotlin for Experts",
      watchLink: "https://www.youtube.com/watch?v=EExSSotojVI",
      downloadLink: "https://en1.savefrom.net/1-youtube-video-downloader-3vV/"
    }
  ]
};

function CoursesPage() {
  const [showVideo, setShowVideo] = useState(false);

  const toggleVideo = () => {
    setShowVideo(!showVideo);
  };

  return (
    <div className="w-full min-h-screen bg-gradient-to-r from-green-500 to-blue-500 px-4 py-10">
      <div className="flex flex-col items-center justify-start space-y-12">
        
        {/* Beginner Courses - Horizontal Layout */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 w-full text-center">Beginner Courses</h2>
          {courses.beginner.map((course) => (
            <div key={course.title} className="p-6 bg-white shadow-2xl rounded-2xl text-center w-72 transform transition duration-300 hover:scale-105">
              <h3 className="font-semibold mb-4">{course.title}</h3>
              <a
                href={course.watchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 block mb-2"
              >
                Watch Video
              </a>
              <a
                href={course.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 block"
              >
                Download Video (paste the link of the watch video)
              </a>
            </div>
          ))}
        </div>

        {/* Intermediate Courses - Horizontal Layout */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 w-full text-center">Intermediate Courses</h2>
          {courses.intermediate.map((course) => (
            <div key={course.title} className="p-6 bg-white shadow-2xl rounded-2xl text-center w-72 transform transition duration-300 hover:scale-105">
              <h3 className="font-semibold mb-4">{course.title}</h3>
              <a
                href={course.watchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 block mb-2"
              >
                Watch Video
              </a>
              <a
                href={course.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 block"
              >
                Download Video (paste the link of the watch video)
              </a>
            </div>
          ))}
        </div>

        {/* Expert Courses - Horizontal Layout */}
        <div className="w-full flex flex-wrap justify-center gap-8">
          <h2 className="text-3xl font-extrabold text-gray-800 mb-8 w-full text-center">Expert Courses</h2>
          {courses.expert.map((course) => (
            <div key={course.title} className="p-6 bg-white shadow-2xl rounded-2xl text-center w-72 transform transition duration-300 hover:scale-105">
              <h3 className="font-semibold mb-4">{course.title}</h3>
              <a
                href={course.watchLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-500 text-white py-2 px-6 rounded-md hover:bg-blue-600 block mb-2"
              >
                Watch Video
              </a>
              <a
                href={course.downloadLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 text-white py-2 px-6 rounded-md hover:bg-green-600 block"
              >
                Download Video (paste the link of the watch video)
              </a>
            </div>
          ))}
        </div>

        {/* Button to Toggle Video */}
        <div className="mt-10">
          <button
            onClick={toggleVideo}
            className="bg-purple-600 text-white py-2 px-6 rounded-md hover:bg-purple-700 "
          >
            {showVideo ? "Hide Video" : "Show Video(for downloading the course)"}
          </button>
        </div>

        {/* Video Section */}
        {showVideo && (
          <div className="mt-8 w-full flex justify-center">
            <video
              width="1600"
              controls
              src="src/assets/Recording 2025-01-30 183152.mp4"
              type="video/mp4"
              className="rounded-lg shadow-lg"
            >
              Your browser does not support the video tag.
            </video>
          </div>
        )}

      </div>
    </div>
  );
}

export default CoursesPage;
