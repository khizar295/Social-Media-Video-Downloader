import React, { useState } from "react";
import { Link } from "react-router-dom";
import { AiFillTikTok } from "react-icons/ai";
import Img1 from "../assets/tiktok.png";
import { MdOndemandVideo, MdInsertPhoto, MdHistory } from "react-icons/md";
import { TfiVideoClapper } from "react-icons/tfi";
import { BsHighlights } from "react-icons/bs";
import { MdContentPaste, MdOutlineClear } from "react-icons/md";

export default function Facebook() {
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
    <div>
      <div className="fb-home bg-gray-900 flex flex-col justify-center min-h-screen">
        <button className="flex flex-col items-center mx-auto px-4 py-3 sm:px-6 sm:py-4 bg-white text-black rounded-xl hover:brightness-75 transition duration-300 font-bold w-32 sm:w-40">
          <AiFillTikTok className="text-5xl sm:text-6xl md:text-7xl text-black" />
          <span className="mt-2">TikTok</span>
        </button>

        <div className="flex flex-col justify-center">
          <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 mx-auto gap-2 sm:gap-3 md:gap-4">
            <button
              onClick={() => setActiveType("Video")}
              className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white text-sm sm:text-base"
            >
              <MdOndemandVideo className="inline mr-2 text-lg sm:text-xl" />{" "}
              Video
            </button>
            <button
              onClick={() => setActiveType("Photo")}
              className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white text-sm sm:text-base"
            >
              <MdInsertPhoto className="inline mr-2 text-lg sm:text-xl" /> Photo
            </button>
            <button
              onClick={() => setActiveType("Reel")}
              className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white text-sm sm:text-base"
            >
              <TfiVideoClapper className="inline mr-2 text-lg sm:text-xl" />{" "}
              Reels
            </button>
            <button
              onClick={() => setActiveType("Story")}
              className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white text-sm sm:text-base"
            >
              <MdHistory className="inline mr-2 text-lg sm:text-xl" /> Story
            </button>
            <button
              onClick={() => setActiveType("Highlight")}
              className="flex items-center justify-center py-2 sm:py-3 px-3 sm:px-4 font-semibold text-white bg-white/30 backdrop-blur-md transition hover:backdrop-blur-sm hover:bg-white/20 border-l border-white text-sm sm:text-base"
            >
              <BsHighlights className="inline mr-2 text-lg sm:text-xl" />{" "}
              Highlights
            </button>
          </div>
        </div>

        <div className="text-center pt-8 flex flex-col items-center w-full">
          <h1 className="font-normal text-3xl sm:text-4xl md:text-5xl mb-8 text-white text-center px-2">
            TikTok {activeType} Download
          </h1>

          <div className="flex flex-col justify-center sm:flex-row items-center w-[95%] sm:w-[85%] md:w-[70%]">
            <span className="p-2 bg-white rounded-sm flex items-center w-full sm:w-[70%]">
              <input
                type="text"
                placeholder="Paste link here"
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="w-full h-8 sm:h-6 p-1 text-sm sm:text-base"
              />

              {text.length > 0 ? (
                <button
                  onClick={handleClear}
                  className="border border-blue-500 rounded px-2 py-1 bg-gray-200 ml-2 flex items-center text-sm sm:text-base"
                >
                  <MdOutlineClear className="inline" /> Clear
                </button>
              ) : (
                <button
                  onClick={handlePaste}
                  className="border border-blue-500 rounded px-2 py-1 bg-gray-200 ml-2 flex items-center text-sm sm:text-base"
                >
                  <MdContentPaste className="inline" /> Paste
                </button>
              )}
            </span>
            <button
              onClick={handleDownload}
              className="bg-red-500 hover:bg-red-400 py-2.5 sm:py-3.5 rounded-sm border border-red-600 transition text-white font-bold px-4 sm:px-6 mt-3 sm:mt-0 sm:ml-3 text-sm sm:text-base"
            >
              Download
            </button>
          </div>

          <div className="mt-6 text-white w-[95%] sm:w-[85%] md:w-[70%]">
            {error && (
              <p className="text-red-400 text-base sm:text-lg">{error}</p>
            )}

            {videoUrl && (
              <div className="flex flex-col items-center">
                <video controls className="mt-4 rounded-lg w-full">
                  <source src={videoUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <button
                  onClick={handleVideoDownload}
                  className="bg-green-600 hover:bg-green-500 text-white font-bold py-2 px-4 rounded mt-3 text-sm sm:text-base"
                >
                  Download Video
                </button>
              </div>
            )}
          </div>
        </div>

        <Link
          to="/"
          className="block bg-red-500 w-[60%] sm:w-[40%] md:w-[20%] mx-auto hover:bg-red-400 py-2.5 sm:py-3.5 rounded-sm border border-red-600 transition text-white text-center font-bold px-4 sm:px-6 mt-5 text-sm sm:text-base"
        >
          Go to HomePage
        </Link>
      </div>

      <div className="download mt-16 flex flex-col md:flex-row items-center md:items-start md:ms-37">
        <div className="text-center md:text-left">
          <h1 className="text-4xl font-bold text-black-500">
            TikTok Videos Download
          </h1>
          <p className="text-lg mt-8">
            Have you ever wanted to save a video from TikTok? Maybe you want
            to <br /> share it with someone else, or perhaps you want to keep it
            for later. <br /> Whatever the case may be, we have the tool for
            you. TikTok Video <br /> Downloader is a simple and easy-to-use
            tool that lets you download your <br /> videos from TikTok. It's
            never been easier to save and share your favorite <br /> TikTok
            videos with friends, family, and anyone who loves them as much{" "}
            <br /> as you do. With our simple and easy-to-use tool, you can
            download all the <br /> videos you want from TikTok and save them
            on your computer or <br /> mobile device.
          </p>
        </div>
        <div className="mt-10 md:mt-0 md:ms-10 flex justify-center">
          <img src={Img1} alt="" className="w-3/4 md:w-75" />
        </div>
      </div>

      <div className="min-h-[146px] px-4 how-download">
        <div className="bg-gray-900 w-full max-w-[980px] mx-auto rounded-3xl py-13 px-6 md:px-26">
          <h1 className="text-white text-2xl md:text-[2.6em] font-medium">
            How to download video from TikTok?
          </h1>

          <h1 className="text-white text-xl md:text-[2em] font-bold mt-9">
            1. Copy the URL
          </h1>
          <p className="text-white text-base md:text-[1.1em] mt-1 leading-relaxed">
            Open the TikTok app or website, go to the photo, video, reels,
            carousel or IGTV you want to download. Copy the URL.
          </p>

          <h1 className="text-white text-xl md:text-[2em] font-bold mt-8">
            2. Paste the link
          </h1>
          <p className="text-white text-base md:text-[1.1em] mt-1 leading-relaxed">
            Return to the Downloader website, paste the link into the input
            field at the top of the page and click the "Download" button to
            start downloading.
          </p>

          <h1 className="text-white text-xl md:text-[2em] font-bold mt-8">
            3. Download video
          </h1>
          <p className="text-white text-base md:text-[1.1em] mt-1 leading-relaxed">
            Review the results and find the file you want to download. Click the
            "Download" button. Ready! The file is saved to your device.
          </p>
        </div>
      </div>
    </div>
  );
}
