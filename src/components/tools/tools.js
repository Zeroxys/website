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
      width : 200,
      height: 200,
      animation : `${props.className ? 'fadeIn' : 'fadeOut'} .80s ease-in .4s forwards` ,
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
    'https://firebasestorage.googleapis.com/v0/b/salad-a7c82.appspot.com/o/kisspng-node-js-javascript-web-application-express-js-comp-5ae0f84e5e7537.0464945815246930703869.png?alt=media&token=c7c84264-84df-4b32-a5c7-ccd03b796f98',
    'http://api.postcss.org/logo.svg',
    'https://gitlab.com/uploads/-/system/project/avatar/1640530/react-logo.png',
    'https://juststickers.in/wp-content/uploads/2016/03/npm-coaster.png',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Webpack.png/429px-Webpack.png',
    'https://www.nuno-sarmento.com/wp-content/uploads/2017/07/nginx.png'
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
