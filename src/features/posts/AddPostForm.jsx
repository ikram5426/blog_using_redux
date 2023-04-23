import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { postAdded } from "./postsSlice";

const AddPostForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const onTitleChange = (e) => setTitle(e.target.value);
  const onContentChange = (e) => setContent(e.target.value);

  const onSavePost = () => {
    if (title && content) {
      dispatch(
        postAdded(title,content)
      );
      setTitle("");
      setContent("");
    }
  };

  return (
    <section>
      <h2>Add New Post</h2>
      <form>
        <label htmlFor='postTitle'>Post title:</label>
        <input
          type='text'
          name='postTitle'
          id='postTitle'
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor='postContent'>Content:</label>
        <input
          type='text'
          name='postContent'
          id='postContent'
          value={content}
          onChange={onContentChange}
        />
        <button type='button' onClick={onSavePost}>Save Post</button>
      </form>
    </section>
  );
};

export default AddPostForm;
