import styles from './Comment.module.css'
import {Trash, ThumbsUp} from 'phosphor-react'

export function Comment(){
  return( 
    <div className={styles.comment}>
      <img src="https://github.com/gabrielturri.png" alt="" />

      <div className={styles.commentBox}>
        <div className={styles.commentContent}>
          <header>
            <div className={styles.authorAndTime}>
              <strong>Gabriel Turri</strong>
              <time title='11 de Maio às 11:13' dateTime='2022-05-11 08:15:23'>Cerca de 1h atrás</time>
            </div>
            
            <button title='Deletar comentário'>
              <Trash size={24}/>
            </button>
          </header>

          <p>Muito bom, parabéns!</p>
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