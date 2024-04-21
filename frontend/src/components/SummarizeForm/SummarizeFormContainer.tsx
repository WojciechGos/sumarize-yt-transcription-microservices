import React from "react";
import SummarizeForm from "./SummarizeForm";
import axiosInstance from "../../service/axiosConfig";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import PATH from "../../path";

const SummarizeFormContainer = () => {
  const navigate = useNavigate();
  const [videoLink, setVideoLink] = useState<string>("");
  const [showError, setShowError] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");
  const [loadingSpin, setLoadingSpin] = useState<boolean>(false);
  const updateVideoLinkForm = (value: string) => {
    setVideoLink(value);
    if (value.trim() === "") setShowError(false);
  };

  const isYouTubeUrl = (text: string) => {
    let youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    return youtubeRegex.test(text);
  };
  const isLogged = localStorage.getItem("token") !== null;



  const goToSummarizedContent = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isYouTubeUrl(videoLink)) {
      setShowError(true);
      setErrorMessage("Please enter a valid youtube video link.");
      return;
    }

    if(isLogged === false){
      setShowError(true);
      setErrorMessage("Make sure you are signed in.")
      return
    }

    try {
      setLoadingSpin(true);
      const response = await axiosInstance.post("/api/v1/summarize", {
        videoUrl: videoLink,
      });
      setLoadingSpin(false);
      console.log(response);
      navigate(`${PATH.SUMMARIZE_PAGE}/${response.data.id}`);
    } catch (error) {
      setLoadingSpin(false);
      setErrorMessage("An error occurred. Make sure the video has enabled subtitles");
      console.log(error);
    }
  };

  return (
    <SummarizeForm
      goToSummarizedContent={goToSummarizedContent}
      videoLink={videoLink}
      updateVideoLinkForm={updateVideoLinkForm}
      showError={showError}
      isLogged={isLogged}
      errorMessage={errorMessage}
      loadingSpin={loadingSpin}
    />
  );
};

export default SummarizeFormContainer;
