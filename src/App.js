import React from 'react'
import PostList from './features/posts/PostList';
import AddPostForm from './features/posts/AddPostForm';
// import { useSelector ,useDispatch} from 'react-redux';


const App = () => {
  return (
    <main className="app">
<AddPostForm/>
<PostList/>
    </main>
  );
}

export default App