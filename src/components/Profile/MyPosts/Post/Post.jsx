import React from 'react'
import styles from './Post.module.css'

const Post = (props) => {
   return (
     <div>
       <img
         className={styles.avatar}
         src="https://cdn.akamai.steamstatic.com/steamcommunity/public/images/avatars/85/858258a36b14983df2fcab7dd840dcc2bb13aa2e_full.jpg"
       />
       {props.message}
     </div>
   );
 };
export default Post