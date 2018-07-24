import React from 'react'
import profile from '../../img/perfil.jpg'
import {StyleRoot, keyframes} from 'radium'
import info from './Info'

const Bio = (props) => {

  let blinkAnim = keyframes({
    '0%' :{
      opacity: 0
    },
    '50%' :{
      opacity: 1
    }
  })

  let styles = {
    imgContent : {
      display:'flex',
      justifyContent : 'center',
      alignItems:'center',
      flexDirection: 'column',

    },

    img : {
      width: 350,
      heigth: 350,
      borderRadius: '50%',
      '@media (max-width: 600px)' : {
        width: 300,
        heigth: 300,
      }
    },

    iconsContent: {
      width:350,
      height: 80,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'row',
      marginTop: 20,
    },

    bioContent : {
      display: 'flex',
      justifyContent: 'center',
      alignItems : 'center',
      flexDirection : 'column',

      '@media (min-width: 900px)' : {
        padding: '0 0px 0 0px'
      }
    },

    word: {
      backgroundColor: 'lightgrey',
      height: '1.4em',
      padding: '0 14px 0 7px',
      display: 'inline-block',
      verticalAlign: 'middle',
      position: 'relative',

      ':before' : {
        content: '',
        backgroundColor: '#4A4A4A',
        width: '1px',
        position: 'absolute',
        top: '5px',
        bottom: '5px',
        right: '7px',
        animation: 'blinkNaim 500ms linear infinite',
        animationName: blinkAnim
      }      
    },

    links : {
      textDecoration : 'none'
    }
  }

  return (
    <StyleRoot>
      <section className="Bio">
        <div style={styles.bioContent}>
          <h2>Hello I'm Miguel Zavala current <span id="word" style={styles.word}>{props.words[0]}</span></h2>
          <h3 style={styles.title}>
            {info.name}
          </h3>
          <p>{info.history}</p>
          <p>{info.history2}</p>
          <p>{info.history3}</p>
        </div>

        <div style={styles.imgContent}>
          <img src={profile} style={styles.img} alt="Miguel Zavala"/>
          <div style={styles.iconsContent}>
            <a href="https://medium.com/@Miguezav" style={styles.links}><span className="fa fa-2x fa-medium Bio-icons" aria-hidden="true"></span></a>
            <a href="https://www.facebook.com/profile.php?id=100014838370119" style={styles.links}><span className="fa fa-2x fa-facebook Bio-icons" aria-hidden="true"></span></a>
            <a href="https://www.linkedin.com/in/miguel-angel-zavala-castillo/" style={styles.links}><span className="fa fa-2x fa-linkedin Bio-icons" aria-hidden="true"></span></a>
            <a href="https://twitter.com/unzavala" style={styles.links}><span className="fa fa-2x fa-twitter Bio-icons" aria-hidden="true"></span></a>
            <a href="https://github.com/zeroxys" style={styles.links}><span className="fa fa-2x fa-github-alt Bio-icons" aria-hidden="true"></span></a>
          </div>
        </div>
      </section>
    </StyleRoot>
  )
}

export default Bio
