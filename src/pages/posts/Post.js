import { useState } from 'react';
import { MdPostAdd, MdMessage } from 'react-icons/md';

export default function Post({ postData }) {

  return (
    <div className="post">
      <p>{postData.title}</p>
      <p><MdMessage/> {postData.text}</p>      
    </div>
  );
}
