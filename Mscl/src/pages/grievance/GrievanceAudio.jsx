import React, { useState, useRef, useEffect } from "react";
import { MdOutlinePlayCircle } from "react-icons/md";

const GrievanceAudio = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const GrievanceDetails = [
    {
      organisation_id: "c6d490f9-c0ac-44ec-b1d0-c683feb34ccb",
      call_type: "incoming",
      caller_number: "7708209937",
      receiver_number: "9655601220",
      did_number: "918645628277",
      received_at: "2025-01-30T16:18:58.999Z",
      ended_at: "2025-01-30T16:19:28.208Z",
      call_id: "2ed17775-8a79-4fb8-a28b-8c897769a31d",
      call_status: "answered",
      call_duration: "00:00:20",
      call_recording_url:
        "https://doosra-ivr-voicemails.s3.ap-south-1.amazonaws.com/ten20_infomedia/2025-01-30_21-49_7708209937-09655601220_2ed17775-8a79-4fb8-a28b-8c897769a31d.wav",
      agent_name: "Kasi",
    },
  ];

  useEffect(() => {
    function handleClickOutside(event) {
      if (audioRef.current && !audioRef.current.contains(event.target)) {
        setIsPlaying(false);
      }
    }

    function handleTabChange() {
      if (document.hidden) {
        setIsPlaying(false);
      }
    }
    // when clicks outside and tab changes close and reset to default

    if (isPlaying) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("visibilitychange", handleTabChange);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("visibilitychange", handleTabChange);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("visibilitychange", handleTabChange);
    };
  }, [isPlaying]);

  return (
    <div className="p-4">
      {GrievanceDetails.map((details, index) => (
        <div key={index} className="space-y-4">
          <p>Agent Name: {details.agent_name}</p>
          <p>Call Type:{details.call_type}</p>
          <p>Caller Number: {details.caller_number}</p>
          <p>Receiver Number: {details.receiver_number}</p>
          <p>Call Status: {details.call_status}</p>

          {/* Audio Player (Fixed Layout) */}

          <div className="flex items-center gap-2">
            Call Recording:
            <p className="flex items-center" ref={audioRef}>
              {!isPlaying ? (
                <button onClick={() => setIsPlaying(true)}>
                  <MdOutlinePlayCircle className="size-6 " />
                </button>
              ) : (
                <audio controls autoPlay className="h-10 ">
                  <source src={details.call_recording_url} type="audio/wav" />
                  Your browser does not support the audio element.
                </audio>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default GrievanceAudio;
