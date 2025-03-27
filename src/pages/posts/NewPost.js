import { useState } from 'react';

export default function NewPost({ onNewPost }) {
  const [formData, setFormData] = useState({ title: '', post: '' });  

  const formUpdate = (event) => {
    const field = event.target.name;
    const value = event.target.value;
    setFormData(form => ({...form, [field]: value}));
  }

  const submitForm = (event) => {
    event.preventDefault();
    onNewPost(formData);
  }

  return (
    <form onSubmit={submitForm}>
      <label htmlFor="title">Title: <input type="text" name="title" value={formData.title} onChange={formUpdate}/> </label>
      <label htmlFor="text">Post: <textarea name="text" value={formData.desc} onChange={formUpdate}/> </label>
      {/* <button type="button" onClick={ () => setIsNewModal(false) }>Cancel</button> */}
      <button type="submit">Save</button>
    </form>
  );
}
