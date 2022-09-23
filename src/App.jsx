import { Post } from './components/Post'
import { Header } from './components/Header'
import { Sidebar } from './components/Sidebar'

import styles from './App.module.css'

import './global.css'

// author: {avatar_url:"", name: "", role: ""} 
// publishedAt: Date
// content: String

const posts = [
  {
    id: 1,
    author: {
      avatarUrl: 'https://github.com/gabrielturri.png',
      name: 'Gabriel Turri',
      role: 'Front End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!', },
      { type: 'paragraph', content: 'Acabei de dar um exemplo', },
      { type: 'link', content: 'Repositório no github', url:'https://github.com/gabrielturri' },
    ],
    publishedAt: new Date('2022-09-15 12:00:00')
  }, {
    id: 2,
    author: {
      avatarUrl: 'https://github.com/lucas4dum.png',
      name: 'Lucas Adum',
      role: 'Back End Developer'
    },
    content: [
      { type: 'paragraph', content: 'Fala galera!', },
      { type: 'paragraph', content: 'Acabei de dar outro exemplo', },
      { type: 'link', content: 'Repositório no github', url:'https://github.com/lucas4dum' },
    ],
    publishedAt: new Date('2022-09-17 12:00:00')
  },
];

function App() {
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        {posts.map(post => {
          return (
            <Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />
          )
        }
        )}
      </main>
    </div>
    </>
  )
}

export default App
