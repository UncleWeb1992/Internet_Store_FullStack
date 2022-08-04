import React from "react";
import { useDispatch } from "react-redux";
import { removeComment } from "../../../store/coments";
import Comment from "./comment";
import SimpleBar from "simplebar-react";

const CommentsList = ({ data }) => {
  const dispath = useDispatch();
  const handleRemoveComent = (id) => {
    dispath(removeComment(id));
  };

  if (data && data.length) {
    return (
      <div className="coments__list">
        <SimpleBar style={{ maxHeight: "350px" }}>
          {data.map((comment, index) => (
            <Comment key={index} {...comment} onRemove={handleRemoveComent} />
          ))}
        </SimpleBar>
      </div>
    );
  } else return null;
};

export default CommentsList;
