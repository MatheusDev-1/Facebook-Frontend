import React, { Component } from 'react';

class PostItem extends Component {
  state = {
    posts: [
      {
        id: 1,
        author: {
          name: "Matheus Oliveira da Hora",
          avatar: "https://media-exp1.licdn.com/dms/image/C4E03AQFPDec4T8c3Eg/profile-displayphoto-shrink_200_200/0?e=1585785600&v=beta&t=jv5yKS-PFS4tB6vu1QCJ0BrA9H0zzwxtrs-NAisy4r8"},
        date: "17 Fev 2020",
        text: "Desafio 4 finalizado! Pequena recriação do frontend de postagens do facebook :P",
        comentarios: [
          {
            id: 1,
            author: {
              name: "Diego Fernandes",
              avatar: "https://avatars0.githubusercontent.com/u/2254731?s=460&v=4"
            },
            text: "Vamo que vamo!"
          },
          {
            id: 2,
            author: {
              name: "Elaine Almeida",
              avatar: "https://pkimgcdn.peekyou.com/8ba5c0c33de484dc0b726721cba1ef1a.jpeg"
            },
            text: "Parabéns Matheus!"
          }
        ]
      },
      {
        id: 2,
        author: {
          name: "Guilherme Vale",
          avatar: "https://scontent.fbsb4-1.fna.fbcdn.net/v/t1.0-9/82154085_2586274018255089_9157982328004280320_n.jpg?_nc_cat=109&_nc_ohc=66yK-jGEkQ8AX-x4Hxd&_nc_ht=scontent.fbsb4-1.fna&oh=6f79bfe3e4a5186fdb706a110ed837c3&oe=5EC1B88E"},
        date: "17 Fev 2020",
        text: "Caramba são uns dias tipo hoje que eu fico muito feliz de ter escolhido bem minha faculdade. Eu sinto que tô no lugar, no caminho certo",
        comentarios: []
      },
      {
        id: 3,
        author: {
          name: "Rafaela Sukiyama",
          avatar: "https://pbs.twimg.com/profile_images/1225164637315796993/8BKGUpXg_400x400.png"},
        date: "17 Fev 2020",
        text: "Procreate: você só pode usar 30 camadas para esse desenho. Eu: jokes on you eu só uso uma mesmo",
        comentarios: [
          {
            id: 1,
            author: {
              name: "Juscelino Gomes",
              avatar: "https://pbs.twimg.com/profile_images/1225943006034817024/uH6EAkFl_400x400.jpg"
            },
            text: "Rafa eu estava pensando nisso mesmo como vc fez para ocultar o hominho para desenhar o barco/fundo?"
          },
          {
            id: 2,
            author: {
              name: "Rafaela Sukiyama",
              avatar: "https://pbs.twimg.com/profile_images/1225164637315796993/8BKGUpXg_400x400.png "
            },
            text: "Eu geralmente uso sketch pro fundo e pro personagem separado, depois das cores eu junto tudo e só faço em 1 camada. Porém nesse caso eu acidentalmente exclui o sketch e tive que colar um print depois kak"
          }
        ]
      },

    ]
  }

  render(){
    return (
      <>
      {this.state.posts.map(p => (
       <div className="post">
        <div className="postUser">
          <div className="containerAvatar">
            <img id="avatar" src={p.author.avatar}></img>
          </div>
          <div className="containerUser">
            <span id='authorUser'>{p.author.name}</span>
            <span id='date'>{p.date}</span>
          </div>
        </div>
        
        <div className="containerContent">
          <span id="content">{p.text}</span>
        </div>

        <hr></hr>

        {p.comentarios.map(c => (
          <div className="comments">
          <div id="userAvatarComment">
            <img id ="commentAvatar" src={c.author.avatar}></img>
          </div>

          <div id="commentContainer">
            <span id="authorCommentName">{c.author.name}</span>
            <span id="commentContent">{c.text}</span>
          </div>
          </div>
        ))}   
     </div> 
      ))}
      </>
    )
  }
}

export default PostItem;

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
