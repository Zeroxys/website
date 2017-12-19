import React from 'react'
import {Fade} from 'react-reveal'

const imagesTools = (props) => {
  console.log(props.delay)
  return (
    <Fade>
      <img style={props.style} src={props.link} alt="imagen chidolira"/>
    </Fade>
  )
}

export default imagesTools
