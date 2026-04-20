import React, { useState, useRef } from "react";
import "../style/createpost.scss";

const CreatePost = () => {


  const [caption, setCaption] = useState("")
  const postImageInputFieldRef = useRef(null)

  function handleSubmit(e) {
    e.preventDefault()

    const file = postImageInputFieldRef.current.files[0]

  }

  return (
    <main className="create-post-page">
      <div className="form-container">
        <h1>Create Post</h1>
        <form onSubmit = {handleSubmit}>
          <label className="post-image-label" htmlFor="postImage">
            Select image
          </label>
          <input  ref = {postImageInputFieldRef} hidden type="file" name="postImage" id="postImage" />
          <input
            value= {caption}
            onChange = {(e) => {setCaption(e.target.value)}} 
            type="text" name="caption" id="caption" />
          <button className="button primary-button">create post</button>
        </form>
      </div>
    </main>
  );
};

export default CreatePost;
