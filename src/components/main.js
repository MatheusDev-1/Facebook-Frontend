import React, { Component } from 'react';

import Post from './post'

class Main extends Component{
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
    const { posts } = this.state

    return(
      <div className="panel">
        {posts.map(dados => (
          <Post key={dados.id} {... dados}/>
          ))}
      </div>
    )
  }
}

export default Main;