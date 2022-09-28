import { useState } from 'react';

import { format, formatDistanceToNow } from 'date-fns';
import ptBR from 'date-fns/locale/pt-BR';

import styles from './Post.module.css'
import { Comment } from './Comment'
import { Avatar } from './Avatar'


export function Post({ author, publishedAt, content }) {
  const [comments, setComments] = useState([
    'Post muito bacana!'
  ])
  const [newCommentText, setNewCommentText] = useState('')

  // Date format to: 11 de Maio às 11:13
const publishedDateFormatted = format(publishedAt, "d 'de' LLLL 'às' HH:mm'h'",{
  locale: ptBR,
})

const publishedDateRelativeToNow = formatDistanceToNow(publishedAt, {
  locale: ptBR,
  addSuffix: 'há'
})

function handleCreateNewComment() {
  event.preventDefault();

  setComments([...comments, newCommentText]);
  setNewCommentText('')
}

function handleNewCommentChange() {
  event.target.setCustomValidity('');
  setNewCommentText(event.target.value)
}

function handleNewCommentInvalid() {
  event.target.setCustomValidity('Este campo é obrigatório!')
}

function deleteComment(commentToDelete) {
  const commentsWithoutDeleteOne = comments.filter(comment => {
    return comment !== commentToDelete;
  })

  setComments(commentsWithoutDeleteOne);
}

  const isNewCommentEmpty = newCommentText.length === 0;

  return(
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar hasBorder src={author.avatarUrl}/>
          <div className={styles.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>
        <time title={publishedDateFormatted} dateTime={publishedAt.toISOString()}>
          {publishedDateRelativeToNow}
        </time>
      </header>
      
      <div className={styles.content}>
        {content.map(line => {
          if(line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>;
          } else if (line.type === 'link') {
            return <p key={line.content}><a href={line.url}>{line.content}</a></p>;
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
        <strong>Deixe seu comentário</strong>

        {/* Campo de texto */}
        <textarea
          name='comment'
          placeholder='Deixe um comentário'
          value={newCommentText}
          onChange={handleNewCommentChange}
          onInvalid={handleNewCommentInvalid}
          required
        />

        <footer>
          <button 
            type='submit' 
            disabled={isNewCommentEmpty}
          >
            Publicar</button>
        </footer>
      </form>

{/* Comments section */}
      <div className={styles.commentList}>
        {comments.map(comment => {
          return (
            <Comment
              key={comment} 
              content={comment} 
              onDeleteComment={deleteComment}
            />
          )
        })}
        </div>
    </article>
  )
}