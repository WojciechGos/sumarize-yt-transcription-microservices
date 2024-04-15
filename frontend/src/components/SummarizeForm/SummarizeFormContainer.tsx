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

  const updateVideoLinkForm = (value: string) => {
    setVideoLink(value);
    if (value.trim() === "") setShowError(false);
  };

  const isYouTubeUrl = (text: string) => {
    let youtubeRegex =
      /^(https?:\/\/)?(www\.)?(youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;

    return youtubeRegex.test(text);
  };

  const goToSummarizedContent = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!isYouTubeUrl(videoLink)) {
      setShowError(true);
      return;
    }

    try {
      const response = await axiosInstance.post("/api/v1/summarize", {
        video_url: videoLink,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
    }

    navigate(PATH.SUMMARIZE_PAGE);
  };

  return (
    <SummarizeForm
      goToSummarizedContent={goToSummarizedContent}
      videoLink={videoLink}
      updateVideoLinkForm={updateVideoLinkForm}
      showError={showError}
    />
  );
};

export default SummarizeFormContainer;
