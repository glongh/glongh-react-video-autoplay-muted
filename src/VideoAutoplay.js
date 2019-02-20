import React, { useEffect, useRef } from 'react'

const VideoAutoplay = ({ children, ...props }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        videoRef.current.defaultMuted = true;
    }, {});

    return (
        <video ref={videoRef} {...props}>
            { children }
        </video>
    )
};

export default VideoAutoplay;