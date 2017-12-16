import React from 'react'
import Radium from 'radium'

const Works = () => {

  let styles = {
    worksContent : {
      display:'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      flexDirection: 'column',
      color: 'grey',
      height : 600,

      '@media (max-width: 900px)' : {
        height: 1200
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
        height: 900
      }
    },

    card : {
      position: 'relative',
      width: '200px',
    },

    textOverlay: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      backgroundColor: '#f1f1f1',
      borderRadius: '0px 0px 8px 8px',
      boxShadow: '-2px 2px 10px grey'
    },

    img : {
      display: 'block',
      width: 200,
      transition: '1s',
      boxShadow: '-2px 0px 10px grey',

      ':hover' : {
        backgroundColor: 'grey'
      }
    }

  }

  return (
    <section style={styles.worksContent}>
      <h2>Works done</h2>
      <div style={styles.works}>

        <div style={styles.card} key="a">
          <img key="ad" style={styles.img} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
          <div style={styles.textOverlay}>
            <h3>Some web page</h3>
            <p>a simple web project</p>
          </div>
        </div>

        <div style={styles.card} key="d">
          <img key="zxc" style={styles.img} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
          <div style={styles.textOverlay}>
            <h3>Some web page</h3>
            <p>a simple web project</p>
          </div>
        </div>

        <div style={styles.card} key="sd">
          <img key="zxcv" style={styles.img} src='https://raw.githubusercontent.com/AvraamMavridis/lambda-react-boilerplate/master/img/react.png' alt="imagen chidolira"/>
          <div style={styles.textOverlay}>
            <h3>Some web page</h3>
            <p>a simple web project</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Radium(Works)
