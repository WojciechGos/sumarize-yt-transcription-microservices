import { Button } from "@mui/material";
import React from "react";
import { FaPlus } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PATH from "../../../path";

const AddItem = () => {
  return (
    <div className="flex justify-around w-full mt-5 mb-5">
      <p className="text-3xl">Add summarization</p>
      <Link to={PATH.HOME_PAGE}>
        <Button
          children={<FaPlus style={{ color: "black", fontSize: 24 }} />}
        />
      </Link>
    </div>
  );
};

export default AddItem;
