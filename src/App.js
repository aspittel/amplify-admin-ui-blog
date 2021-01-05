import { Route } from 'react-router-dom'
import { withAuthenticator } from '@aws-amplify/ui-react'

import CreatePost from './CreatePost'
import PostContainer from './Post'
import NavBar from './NavBar'
import PostList from './PostList'

function App () {
  return (
    <div className='section'>
      <div className='container'>
        <NavBar />
        <div className='section'>
          <Route path='/new'>
            <CreatePost />
          </Route>
          <Route path='/post/:id'>
            <PostContainer />
          </Route>
          <Route path='/' exact>
            <PostList />
          </Route>
        </div>
      </div>
    </div>
  )
}

export default withAuthenticator(App)
