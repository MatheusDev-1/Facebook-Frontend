import React, { Component } from 'react';

function Comment ( { author, text } ){
  return(
    <div className="comments">
      <div id="userAvatarComment">
        <img id ="commentAvatar" src={author.avatar}></img>
      </div>

      <div id="commentContainer">
        <span id="authorCommentName">{author.name}</span>
        <span id="commentContent">{text}</span>
      </div>
    </div>
  )
}

export default Comment;
