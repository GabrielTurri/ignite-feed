import styles from './Post.module.css'

export function Post() {
  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <img className={styles.avatar} src="https://github.com/gabrielturri.png"/>
          <div className={styles.authorInfo}>
            <strong>Gabriel Turri</strong>
            <span>Web Developer</span>
          </div>
        </div>
        <time title='11 de Maio às 11:13' dateTime='2022-05-11 08:15:23'>Publicado há 1h</time>
      </header>
      
      <div className={styles.content}>
        <p>Fala galera!</p>
        <p>Acabei de dar um exemplo</p>
        <p><a href="https://github.com/gabrielturri">Repositório no Github</a></p>
        <p><a href="">#EaeBeleza</a></p>
      </div>
    </article>
  )
}