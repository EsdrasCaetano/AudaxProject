import React, { useEffect, useState } from 'react'
import axios from 'axios'

import ApiItem from './components/ApiItem'
import './Home.css'

const baseURL = 'https://api.github.com/users/esdrascaetano/repos'
/*
  <img src={repository.owner.avatar_url}/>
  <ApiItem title='ID: ' item={repository.id} />
  <ApiItem title='Projeto: ' item={repository.name} />
  <ApiItem title='Usuario: ' item={repository.owner.login} />
  <ApiItem title='Descrição: ' item={repository.description} />
  <ApiItem title='Star: ' item={repository.stargazes_counter ? repository.stargazes_counter : '0'} />
  <ApiItem title='Email: ' item={repository.email} />
  <button className='btn btn-danger'>a</button>
*/
const Home = () => {
  const [data, setData] = useState([])
  useEffect(() => {
    axios
      .get(baseURL)
      .then(res => {
        setData(res.data)
      })
  }, [data.id])

  return (
    <div className='container'>
      <div id='infoPessoal'>
        <h1>Olá, sou Esdras Caetano.</h1>
        <span>Sou estudante de Análise e Desenvolvimento de Sistemas e atualmente estudo
        JavaScript e React. Eu principalmente
        desenvolvo front-end e sou um apaixonado por teconogia, em especial React.js e CSS.
        Todos os meus projetos se encontram no Github.
        Também pretendo criar um blog para compartilhar aprendizado e experiência que venha
        adquirir ao longo da carreira.
        </span>
      </div>
      <div id='repo'>
        {data.map((repository) => {
          return (
            <div key={repository.id} className='card border-0'>
              <div className='card-body'>
                <ApiItem item={repository.language} />
                <h5 className='card-title'>{repository.name}</h5>
                <p className='card-text'>{repository.description}</p>
                <a href={repository.html_url} className='btn btn-success border-0'>Ver código no Github</a>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Home
