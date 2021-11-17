import React from 'react'
import styles from './Dialogs.module.css'
import DialogItem from './DialogItem/DialogItem'
import Message from './Message/Message'
import User from './User/User'

const Dialogs = (props) => {
   return(<div>
      <DialogItem />
      <Message />
      <User />
   </div>)
}

export default Dialogs