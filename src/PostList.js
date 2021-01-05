import { useEffect, useState } from 'react'
import { DataStore } from '@aws-amplify/datastore'

import { Post } from './models'

export default function PostList () {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Post)
      setPosts(models)
    }
    getData()
  }, [])

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <section>
            <h2>{post.title}</h2>
            <p>{post.content.substring(0, 300)}...</p>
          </section>
        </div>
      ))}
    </div>
  )
}
