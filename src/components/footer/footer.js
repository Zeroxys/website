import React from 'react'
import Radium from 'radium'

const Footer = () => {

  let styles = {
    footerContent : {
      display: 'flex',
      justifyContent : 'center',
      alignItems: 'center',
      backgroundColor: 'grey',
      height : 100,

      '@media (max-width : 900px)' : { 
        height : '180px' 
      }
    },

    content : {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection : 'row',
      flexWrap: 'wrap',

      
    },

    social : {
      display: 'flex',
      justifyContent : 'center',
    },

    link : {
      padding: 0,
      margin: 5,
      listStyle: 'none',
    },

    a: {
      transition: '.6s',
      color: 'lightgrey',
      textDecoration : 'none',

      ':hover' : {
        color : '#f1f1f1'
      }
    }
  }

  return (
    <section style={styles.footerContent}>
      <div style={styles.content}>
        <p>Miguel Zavala © 2018 | Hosped on Digital Ocean</p>
        <ul style={styles.social}>
          <li key='a' style={styles.link}><a key="e" style={styles.a} href="https://www.facebook.com/profile.php?id=100014838370119">Facebook</a></li>
          <li key='b' style={styles.link}><a key="f" style={styles.a} href="https://twitter.com/unzavala">Twitter</a></li>
          <li key='c' style={styles.link}><a key="g" style={styles.a} href="https://github.com/zeroxys">Github</a></li>
          <li key='d' style={styles.link}><a key="h" style={styles.a} href="https://medium.com/@Miguezav">Medium</a></li>
        </ul>
      </div>
    </section>
  )
}

export default Radium(Footer)

        