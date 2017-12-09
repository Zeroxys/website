import React from 'react'
import profile from '../../img/perfil.jpg'

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
      borderRadius: '50%'
    },

    iconsContent: {
      width:200,
      height: 80,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      marginTop: 20,
      border:'1px solid red'
    }
  }

  return (
    <section className="Bio">
      <div>
        <h2>
          "Miguel Zavala"
        </h2>
        <p>shalalala</p>
      </div>

      <div style={styles.imgContent}>
        <img src={profile} style={styles.img} alt="Miguel Zavala"/>
        <div style={styles.iconsContent}>
          <span class="fa fa-2x fa-medium" aria-hidden="true"></span>
          <span class="fa fa-2x fa-facebook" aria-hidden="true"></span>
          <span class="fa fa-2x fa-twitter" aria-hidden="true"></span>
        </div>
      </div>
    </section>
  )
}

export default Bio
