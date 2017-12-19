import React from 'react'
import Radium from 'radium'
import ImageTools from './images'

const Tools = () => {

  let styles = {
    toolsContent : {
      border:'1px solid red',
      display: 'flex', 
      justifyContent : 'space-around',
      alignItems: 'center',
      flexDirection : 'column',
      width : '100%',
      minHeight: 500,
      backgroundColor: '#f1f1f1',
      color: 'grey',

      '@media (max-width : 900px)' : {
        minHeight: 1000,
      }
    },

    imageContent : {
      border: '1px solid blue',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems : 'center',
      flexDirection: 'row',
      width: '90%',
      flexWrap: 'wrap',

      '@media (max-width : 900px)' : {
        flexDirection : 'column',
      }
    },

    img: {
      border:'1px solid yellow',
      width : 300,
      height: 100
    },

    imgR: {
      border:'1px solid green',
      width : 180,
      height: 100
    },

    imgM: {
      border:'1px solid purple',
      width : 200,
      height: 200
    }
  }

  let imageSrc = [
    'https://rishabh.io/tech/nodejs/img/nodejs.png',
    'http://api.postcss.org/logo.svg',
    'https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png',
    'https://juststickers.in/wp-content/uploads/2016/03/npm-coaster.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Webpack.png/429px-Webpack.png'
  ]

  return (
    <div id="tools" style={styles.toolsContent}>
      <h2>Current Stack</h2>
      <div style={styles.imageContent}>
        {imageSrc.map( (el, i) => {
          return (
              <ImageTools delay={i} style={styles.imgM} link={el} key={i}/>)
        })}
      </div>
    </div>
  )
}

export default Radium(Tools)
