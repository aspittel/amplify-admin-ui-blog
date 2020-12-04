import 'bulma/css/bulma.css'

import { DataStore } from '@aws-amplify/datastore'
import { useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'

import CreatePost from './CreatePost'
import { Post, Comment } from './models'
import PostContainer from './Post'
import NavBar from './NavBar'
import PostList from './PostList'


function App () {
  const [posts, setPosts] = useState([])
  useEffect(() => {
    const getData = async () => {
      const models = await DataStore.query(Post)
      const comments = await DataStore.query(Comment)
      console.log(comments)
      setPosts(models)
    }
    getData()
  }, [])

  return (
    <div className='section'>
      <div className='container'>
        <NavBar />
        <div className='section'>
          <Route path='/new'>
            <CreatePost />
          </Route>
          <Route path='/post/:id'>
            <PostContainer posts={posts} />
          </Route>
          <Route path='/' exact>
            <PostList posts={posts} />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticator(App)
