import { useState, useEffect } from 'react';
import If from './If';
import Modal from './Modal';
import Post from './Post';
import NewPost from './NewPost';
import { MdPostAdd } from 'react-icons/md';
import './PostsList.scss';
import { useLoaderData } from 'react-router-dom';


export default function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isNewModal, setIsNewModal] = useState(false);

  const postsData = useLoaderData();

  // This is the right way to do it:
  useEffect(() => {
    setIsFetching(true);
    fetch('http://localhost:8080/posts').then(res => res.json()).then(data => {
      console.log('Data', data);
      setPosts(data.posts);
      setIsFetching(false);
    });
  }, []);

  const onNewPost = async (formData) => {
    console.log(`Adding a new post:`, formData);
    setPosts(currPosts => [...currPosts, formData]);
    await fetch('http://localhost:8080/posts', { 
      headers: { 'Content-Type': 'application/json' },
      method: 'POST', body: JSON.stringify(formData),
    });
    setIsNewModal(false);
  }


  return (
    <>
      <h1>Posts</h1>
      <button className="add-btn" onClick={ () => setIsNewModal(true) }>
        Add New Post <MdPostAdd size={20}/>
      </button>
      <If exp={isFetching}><h2>Fetching Data...</h2></If>
      <If exp={!isFetching && !posts.length}><h2>No Posts</h2></If>
      <If exp={!isFetching && posts.length}>
        <div className="posts">
          {posts.map((post, ind) => <Post key={ind} postData={post}/>)}
        </div>
      </If>
      <Modal isOpen={isNewModal} onClose={ () => setIsNewModal(false) }>
        <NewPost onNewPost={onNewPost}/>
      </Modal>

    </>
  );
}
