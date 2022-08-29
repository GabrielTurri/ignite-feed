import { Post } from './Post'
import { Header } from './Components/Header'
import { Sidebar } from './Components/Sidebar'

import styles from './App.module.css'
import './global.css'

function App() {
  return (
    <>
    <Header/>

    <div className={styles.wrapper}>
      <Sidebar />
      <main>
        <Post></Post>
      </main>
    </div>
    </>
  )
}

export default App
