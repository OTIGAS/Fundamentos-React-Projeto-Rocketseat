import { Header } from './componentes/Header';
import { Sidebar } from './componentes/Sidebar';
import { Post } from './componentes/Post';

import styles from './App.module.css';
import './global.css';

//author: {avatar_url: "", name: "", role: ""}
//publisheAt: Date
//content: String

const posts = [
{
  id: 1,
  author: {
    avatarUrl: "https://github.com/TiagoGouvea2000.png",
    name: "Tiago Faria Gouvea",
    role: "Estágiario"
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2022-12-03 20:00:00')
},
{
  id: 2,
  author: {
    avatarUrl: "https://github.com/yRenato36.png",
    name: "Renato Santana",
    role: "Estágiario"
  },
  content: [
    {type: 'paragraph', content: 'Fala galeraa 👋'},
    {type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portifa. É um projeto que fiz no NLW Return, evento da Rocketseat. O nome do projeto é DoctorCare 🚀'},
    {type: 'link', content: 'jane.design/doctorcare'}
  ],
  publishedAt: new Date('2022-12-09 20:00:00')
}
]

function App() {
  return (
    <div>
      <Header />
      <div className={styles.wrapper}>
        <Sidebar />
        <main>
          {posts.map(post => {
            return (<Post 
              key={post.id}
              author={post.author}
              content={post.content}
              publishedAt={post.publishedAt}
            />)
          })}
        </main>
      </div>
    </div>
  )
}

export default App
