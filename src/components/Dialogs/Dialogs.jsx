import React from 'react'
import styles from './Dialogs.module.css'
import Message from './Message/Message'
import User from './User/User'

const Dialogs = () => {
   return(
      <div className = {styles.item}>
         <User />
         <Message />
      </div>
   )
}

export default Dialogs