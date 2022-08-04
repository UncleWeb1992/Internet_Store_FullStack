import React, { useEffect, useState } from "react";
import { normalizeDate } from "../../../utils/normalizeDate";
import PropTypes from "prop-types";
import { useAuth } from "../../../hooks/useAuth";

const Comment = ({
  _id: commentId,
  content,
  created_at: created,
  onRemove,
  userId,
}) => {
  const { getUserById } = useAuth();
  const [commentsUser, setCommentsUser] = useState(null);
  const { currentUser } = useAuth();

  const commentsRules = commentsUser
    ? currentUser._id === commentsUser._id || currentUser.admin
    : null;

  useEffect(() => {
    getUserById(userId).then((res) => setCommentsUser(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="comment">
      <div className="comment__content">
        <p className="comment__text">{content}</p>
        <span className="comment__date">
          <b style={{ marginRight: "10px" }}>
            {commentsUser && commentsUser.name}
          </b>
          {normalizeDate(created)}
        </span>
      </div>
      {commentsRules ? (
        <img
          src="../../img/close.png"
          alt="close_image"
          onClick={() => onRemove(commentId)}
        />
      ) : null}
    </div>
  );
};

Comment.propTypes = {
  _id: PropTypes.string,
  content: PropTypes.string,
  created_at: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onRemove: PropTypes.func,
  userId: PropTypes.string,
};

export default Comment;
