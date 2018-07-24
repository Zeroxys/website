import React from 'react'
import Radium from 'radium'

const Works = () => {

  let styles = {
    worksContent : {
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'grey',
      height : 800,
      '@media (max-width: 900px)' : {
        height: 1400
      }
    },

    works : {
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      width: '90%',
      flex:'wrap',

      '@media (max-width: 900px)': {
        flexDirection: 'column',
        height: 1100
      }
    },

    card : {
      position: 'relative',
      width: '280px',
      height:'300px',
    },

    textOverlay: {
      display: 'flex',
      height : 200,
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f1f1f1',
      borderRadius: '0px 0px 8px 8px',
      boxShadow: '-2px 2px 10px grey'
    },

    img : {
      borderRadius: '8px 8px 0px 0px',
      display:'block',
      width: 280,
      height: 150,
      transition: '1s',
      boxShadow: '-2px 0px 10px grey',
      ':hover' : {
        backgroundColor: 'grey'
      }
    },

    links : {
      textDecoration : 'none',
      color: 'grey',
    }

  }

  return (
    <section style={styles.worksContent}>
      <h2 style={{marginBottom:100, fontSize: '2.4em'}}>Works done</h2>
      <div id="tools" style={styles.works}>

        <div style={styles.card} key="a">
          <img key="ad" style={styles.img} src='https://firebasestorage.googleapis.com/v0/b/salad-a7c82.appspot.com/o/logo-blue.png?alt=media&token=511eea77-1337-4469-80ea-92a2e2b4efe0' alt="https://clouddy.com.mx"/>
          <div style={styles.textOverlay}>
            <a style={styles.links} href="https://clouddy.com.mx"><h3>ClouddyTeam</h3></a>
            <p>Currently I have a little entrepreneurship called Clouddy. There i work with
              technologies as React, React Native, Webpack, Nodejs.
            </p>
          </div>
        </div>

        <div style={styles.card} key="d">
          <img key="zxc" style={styles.img} src='https://consultoriajuridicagaytanyasociados.com/img/logo.png' alt="imagen chidolira"/>
          <div style={styles.textOverlay}>
            <a style={styles.links} href="https://consultoriajuridicagaytanyasociados.com"><h3>Consultoria Gaytan</h3></a>
            <p>Was my firstjob like a web developer, the website was made on Materializee Framework.</p>
          </div>
        </div>

        <div style={styles.card} key="sd">
          <img key="zxcv" style={styles.img} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
          <div style={styles.textOverlay}>
            <h3>Kefflapp</h3>
            <p>My first product made with React Native, comming soon on PlayStore</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Radium(Works)
