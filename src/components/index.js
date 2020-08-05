import React, { useState } from 'react'

import _ from 'lodash'
import axios from 'axios'

import Welcome from './welcome'
import Master from './master'

const Container = ({ classes }) => {
  const [loading, setLoading] = React.useState(false)
  const [view, setView] = React.useState([])

  const requests = () => {
    const responses = []

    axios.get('https://swapi.dev/api/people/1')
      .then(response => {
        responses.push('luke')

        setView(responses)
        responses.length === 2 && setLoading(false)
      })
    axios.get('https://swapi.dev/api/people/4')
      .then(response => {
        responses.push('vader')

        setView(responses)
        responses.length === 2 && setLoading(false)
      })
  }

  const handleClick = () => {
    setLoading(true)
    requests()
  }

  const handleBackClick = () => {
    setView(['welcome'])
  }

  const getView = () => {
    switch(view[0]) {
      case'luke': return(
        <Master
          background='#FBFE63'
          handleClick={handleClick}
          handleBackClick={handleBackClick}
          loading={loading}
          masterName='Luke Skywalker'
          master='luke'
        />
      )
      case 'vader': return(
        <Master
          background='#2B2B2B'
          handleClick={handleClick}
          handleBackClick={handleBackClick}
          loading={loading}
          masterName='Darth Vader'
          master='vader'
        />
      )
      default: return(
        <Welcome
          loading={loading}
          handleClick={handleClick}
        />
      )
    }
  }

  return(
    <>
      {getView()}
    </>
  )
}

export default Container
