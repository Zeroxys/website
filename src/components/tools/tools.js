import React from 'react'
import Radium from 'radium'

const Tools = () => {

  let styles = {
    toolsContent : {
      display: 'flex', 
      justifyContent : 'flex-start',
      alignItems: 'center',
      flexDirection : 'column',
      width : '100%',
      minHeight: 600,
      backgroundColor: '#f1f1f1',
      color: 'grey'
    },

    img: {
      width : 300,
      height: 100
    },

    imgR: {
      width : 180,
      height: 100
    }
  }

  return (
    <div style={styles.toolsContent}>
      <h2>Herrramientas que actualmente uso</h2>
      <div>
        <img style={styles.img} src='https://rishabh.io/tech/nodejs/img/nodejs.png' alt="imagen chidolira"/>
        <img style={styles.img} src='http://api.postcss.org/logo.svg' alt="imagen chidolira"/>
        <img style={styles.imgR} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
        <img style={styles.imgR} src='https://juststickers.in/wp-content/uploads/2016/03/npm-coaster.png' alt="imagen chidolira"/>
      </div>
    </div>
  )
}

export default Radium(Tools)
