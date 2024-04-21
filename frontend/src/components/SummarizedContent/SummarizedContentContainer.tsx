import React, { useEffect, useState } from "react"
import SummarizedContent from "./SummarizedContent"
import axiosInstance from "../../service/axiosConfig"
import { useParams } from "react-router-dom";
import { History } from "../../interfaces/History";
import { useNavigate } from "react-router-dom";

const SummarizedContentContainer = () => {
  const navigate = useNavigate()
  const [data, setData] = useState<History>()

  const { id } = useParams<string>();

  const getSummarizedContent = async () => {
    try {
      const response = await axiosInstance.get(`/api/v1/histories/${id}`)  
      setData(response.data)
      if(response.status === 401){
        localStorage.removeItem("token")
        navigate("/sign-in")
      }
    }catch (error) {
      console.log(error)
    }
  
  }

  useEffect(() => {
    getSummarizedContent()
  }, [id])

  return <SummarizedContent data={data} />
}

export default SummarizedContentContainer
