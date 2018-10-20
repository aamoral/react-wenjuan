import React from "react";
import "./PostItem.css";

function PostItem(props) {
  const { post } = props;
  return (
    <li className='item'>
      <div className='title'>
        {post.title}
      </div>
      <div>   
        <input type="checkbox" value="{post.author}"></input>{post.author}
      </div>
      <div>
        <input type="checkbox" value="{post.date}"></input>{post.date}
      </div>
      <div>
        <input type="checkbox" value="{post.good}"></input>{post.good}
      </div>
      <div>
        <input type="checkbox" value="{post.post}"></input>{post.post}
      </div>
    </li>
  
  );
  
}

export default PostItem;
