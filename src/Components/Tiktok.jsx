import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillTikTok } from "react-icons/ai";
import { MdOndemandVideo, MdInsertPhoto, MdHistory } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BsHighlights } from "react-icons/bs";
import { MdContentPaste, MdOutlineClear } from "react-icons/md";

export default function Tiktok() {
  const [text, setText] = useState("");
  const [activeType, setActiveType] = useState("Video");
  const [videoUrl, setVideoUrl] = useState("");
  const [error, setError] = useState("");

  const handlePaste = async () => {
    try {
      if (navigator.clipboard && navigator.clipboard.readText) {
        const clipboardText = await navigator.clipboard.readText();
        setText(clipboardText);
      } else {
        alert("Clipboard API not supported in this browser.");
      }
    } catch (err) {
      console.error("Failed to read clipboard: ", err);
      alert("Unable to access clipboard. Please use Ctrl+V.");
    }
  };

  const handleClear = () => {
    setText("");
    setVideoUrl("");
    setError("");
  };

  const handleDownload = () => {
    const trimmed = text.trim();
    const facebookRegex = /^https?:\/\/(www\.)?tiktok\.com\/.+/;

    if (trimmed.length === 0) {
      setError("Link is required.");
      setVideoUrl("");
    } else if (facebookRegex.test(trimmed)) {
      setError("");
      setVideoUrl("https://www.w3schools.com/html/mov_bbb.mp4");
    } else {
      setError("Invalid link.");
      setVideoUrl("");
    }
  };

  const handleVideoDownload = () => {
    const a = document.createElement("a");
    a.href = videoUrl;
    a.download = "facebook-video.mp4";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <div className="fb-home bg-gray-900 flex flex-col justify-center min-h-screen">
      <button className="flex flex-col items-center mx-auto px-4 py-3 sm:px-6 sm:py-4 bg-white text-black rounded-xl hover:brightness-75 transition duration-300 font-bold w-32 sm:w-40">
        <AiFillTikTok className="text-5xl sm:text-6xl md:text-7xl text-black" />
        <span className="mt-2">TikTok</span>
      </button>

      <div className="flex flex-col justify-center">
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-auto">
          <button
            onClick={() => setActiveType("Video")}
            className="flex items-center justify-center py-3 px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20"
          >
            <MdOndemandVideo className="inline mr-2 text-xl" /> Video
          </button>
          <button
            onClick={() => setActiveType("Photo")}
            className="flex items-center justify-center py-3 px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white"
          >
            <MdInsertPhoto className="inline mr-2 text-xl" /> Photo
          </button>
          <button
            onClick={() => setActiveType("Reel")}
            className="flex items-center justify-center py-3 px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white"
          >
            <TfiVideoClapper className="inline mr-2 text-xl" /> Reels
          </button>
          <button
            onClick={() => setActiveType("Story")}
            className="flex items-center justify-center py-3 px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white"
          >
            <MdHistory className="inline mr-2 text-xl" /> Story
          </button>
          <button
            onClick={() => setActiveType("Highlight")}
            className="flex items-center justify-center py-3 px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white"
          >
            <BsHighlights className="inline mr-2 text-xl" /> Highlights
          </button>
        </div>
      </div>

      <div className="text-center pt-8 flex flex-col items-center w-full">
        <h1 className="font-normal text-5xl mb-8 text-white">
          TikTok {activeType} Download
        </h1>

        <div className="flex flex-col justify-center sm:flex-row items-center w-[100%]">
          <span className="p-2 bg-white rounded-sm flex items-center w-[70%]">
            <input
              type="text"
              placeholder="Paste link here"
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-[100%] h-6 p-1"
            />

            {text.length > 0 ? (
              <button
                onClick={handleClear}
                className="border border-blue-500 rounded px-2 py-1 bg-gray-200 ml-2 flex items-center"
              >
                <MdOutlineClear className="inline" /> Clear
              </button>
            ) : (
              <button
                onClick={handlePaste}
                className="border border-blue-500 rounded px-2 py-1 bg-gray-200 ml-2 flex items-center"
              >
                <MdContentPaste className="inline" /> Paste
              </button>
            )}
          </span>
          <button
            onClick={handleDownload}
            className="bg-red-500 hover:bg-red-400 py-3.5 rounded-sm border border-red-600 transition text-white font-bold px-6 mt-3 sm:mt-0 sm:ml-3"
          >
            Download
          </button>
        </div>

        <div className="mt-6 text-white w-[70%]">
          {error && <p className="text-red-400 text-lg">{error}</p>}

          {videoUrl && (
            <div className="flex flex-col items-center">
              <video controls className="mt-4 rounded-lg w-full">
                <source src={videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <button
                onClick={handleVideoDownload}
                className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-3"
              >
                Download Video
              </button>
            </div>
          )}
        </div>
      </div>

      <Link
        to="/"
        className="block bg-red-500 w-[15%] mx-auto hover:bg-red-400 py-3.5 rounded-sm border border-red-600 transition text-white text-center font-bold px-6 mt-5"
      >
        Go to HomePage
      </Link>
    </div>
  );
}
