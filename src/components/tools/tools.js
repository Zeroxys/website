import React from 'react'

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
      color: 'black'
    },

    img: {
      width : 300,
    }
  }

  return (
    <div style={styles.toolsContent}>
      <h2>Herrramientas que actualmente uso</h2>
      <div>
        <img style={styles.img} src='https://rishabh.io/tech/nodejs/img/nodejs.png' alt="imagen chidolira"/>
        <img style={styles.img} src='https://raw.githubusercontent.com/sebastian-software/postcss-smart-import/HEAD/assets/postcss.png' alt="imagen chidolira"/>
        <img style={styles.img} src='https://www.google.com.mx/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwjp7ILcvIfYAhVSx2MKHaYaCVkQjRwIBw&url=https%3A%2F%2Fgithub.com%2Fvscode-icons%2Fvscode-icons%2Fissues%2F305&psig=AOvVaw1cjc5NJz6uJ8-ih9B7afLI&ust=1513271155609528' alt="imagen chidolira"/>
        <img style={styles.img} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
      </div>
    </div>
  )
}

export default Tools
