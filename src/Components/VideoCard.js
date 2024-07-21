import React, { useState, useEffect } from 'react';
import './VideoCard.css';
import VideoCardInfo from './VideoCardInfo';
import './VideoThumbnails.css'

export default function VideoCard({videoTitle,videoCategory,videoRating,releaseYear,thumbnail}) {
  const [showInfo, setShowInfo] = useState(false);
  const [timer, setTimer] = useState(null);

  const handleMouseEnter = () => {
    const timeout = setTimeout(() => {
      setShowInfo(true);
    }, 500);
    if (timer) {
      clearTimeout(timer);
    }
    setTimer(timeout);
  };
  const handleMouseLeave = () => {
    if (timer) {
      clearTimeout(timer);
    }
    setShowInfo(false);
  };
  return (
    <div className={`vCard-Container ${thumbnail}`} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      {showInfo && <VideoCardInfo thumbnail={thumbnail} videoTitle={videoTitle} videoCategory={videoCategory} videoRating={videoRating} releaseYear={releaseYear}/>}
    </div>
  );
}
