import React from 'react'
import Radium, {keyframes} from 'radium'

const Tools = (props) => {

  const fadeIn = keyframes({
    '100%' : {opacity: 1}
  })

  const fadeOut = keyframes({
    '100%' : {opacity: 0}
  })

  const styles = {

    toolsContent : {
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
      opacity: props.className ? 0 : 1,
      width : 300,
      height: 100,
      animation : `${props.className ? 'fadeIn' : 'fadeOut'} .6s ease-in .4s forwards` ,
      animationName : props.className ? fadeIn : fadeOut
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
    <div style={styles.toolsContent}>
      <h2>Current Stack</h2>
      <div style={styles.imageContent}>
        {imageSrc.map( (el, i) => {
          return (
              <img style={styles.img} src={el} key={i} alt={el}/>)
        })}
      </div>
    </div>
  )
}

export default Radium(Tools)
