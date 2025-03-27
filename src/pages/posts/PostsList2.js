import { useState, useEffect } from 'react';
import If from './If';
import Modal from './Modal';
import Post from './Post';
import NewPost from './NewPost';
import { MdPostAdd } from 'react-icons/md';
import './PostsList.scss';
import { useLoaderData } from 'react-router-dom';

export function postLoader() {
  return fetch('http://localhost:8080/posts').then(res => res.json()).then(data => {
    console.log('Data', data);
    return data;
  });
}

export default function PostsList() {  
  // It waits for the loader to render the whole component
  const posts = useLoaderData().posts; 

  return (
    <>
      <h1>Posts</h1>
      <div className="posts">
        {posts.map((post, ind) => <Post key={ind} postData={post}/>)}
      </div>
    </>
  );
}
