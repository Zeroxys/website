import React from 'react'
import profile from '../../img/perfil.jpg'
import {StyleRoot} from 'radium'
import info from './Info'

const Bio = () => {

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
      padding: '0 70px 0 70px',
      display: 'flex',
      justifyContent: 'center',
      alignItems : 'center',
      flexDirection : 'column'
    }
  }

  return (
    <StyleRoot>
      <section className="Bio">
        <div style={styles.bioContent}>
          <h2 style={styles.title}>
            {info.name}
          </h2>
          <p>{info.history}</p>
          <p>{info.history2}</p>
          <p>{info.history3}</p>
        </div>

        <div style={styles.imgContent}>
          <img src={profile} style={styles.img} alt="Miguel Zavala"/>
          <div style={styles.iconsContent}>
            <span className="fa fa-2x fa-medium Bio-icons" aria-hidden="true"></span>
            <span className="fa fa-2x fa-facebook Bio-icons" aria-hidden="true"></span>
            <span class="fa fa-2x fa-linkedin Bio-icons" aria-hidden="true"></span>
            <span className="fa fa-2x fa-twitter Bio-icons" aria-hidden="true"></span>
            <span className="fa fa-2x fa-github-alt Bio-icons" aria-hidden="true"></span>
          </div>
        </div>
      </section>
    </StyleRoot>
  )
}

export default Bio
