import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'
import { Avatar } from './Avatar'

export function Comment(props){
  function handleDeleteComment(comment){ 
    console.log('deletar')
    
  }

  return( 
    <div className={styles.comment}>
      <Avatar hasBorder={false} src="https://github.com/gabrielturri.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Turri</strong>
              <time title='11 de Maio às 11:13' dateTime='2022-05-11 08:15:23'>Cerca de 1h atrás</time>
            </div>
            
            <button onClick={handleDeleteComment} title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>{props.content}</p>
        </div>
        <footer>
          <button>
            <ThumbsUp />
            Aplaudir <span>20</span>
          </button>
        </footer>
      </div>
    </div>
  )
}