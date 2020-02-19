import React, { Component } from 'react';

import Comment from "./comments"

function Post ( { author, date, text, comentarios } ) {
    return (
       <div className="post">
        <div className="postUser">
          <div className="containerAvatar">
            <img id="avatar" src={author.avatar}></img>
          </div>
          <div className="containerUser">
            <span id='authorUser'>{author.name}</span>
            <span id='date'>{date}</span>  
          </div>
        </div>
        
        <div className="containerContent">
          <span id="content">{text}</span>
        </div>
        <hr></hr>

        {comentarios.map( comentario => (
          <Comment key={comentarios.id} {... comentario}/>
        ))}
     </div>


      )
    }
  
export default Post;

// {p.comentarios.map(c => (
//   <div className="comments">
//   <div id="userAvatarComment">
//     <img id ="commentAvatar" src={c.author.avatar}></img>
//   </div>

//   <div id="commentContainer">
//     <span id="authorCommentName">{c.author.name}</span>
//     <span id="commentContent">{c.text}</span>
//   </div>
//   </div>
// ))} 

// <div className="post">
{/* <div className="postUser">
<div id="containerAvatar">
  <img id="avatar" src="https://ya-webdesign.com/images/avatar-png-1.png"></img>
</div>
<div className="containerUser">
  <span id='authorUser'>Matheus Oliveira da Hora</span>
  <span id='date'>17 Fev 2020</span>
</div>
</div>

<div className="containerContent">
<span id="content">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum</span>
<p>PS: Se você não vai até o facebook, eu trago o facebook até você Rafaela</p>
</div>


<div className="comments">
<div id="userAvatarComment">
<img id ="commentAvatar" src="https://i.dlpng.com/static/png/6728143_thumb.png"></img>
</div>
<div id="commentContainer">
  <span id="authorCommentName">Rafaela Sukiyama</span>
  <span id="commentContent">Até aqui Matheus? Por que você não vai se fuder? emoteHate</span>
</div>

</div>
</div> */}
