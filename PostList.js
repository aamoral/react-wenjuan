import React, { Component } from "react";
import PostItem from "./PostItem";
import "./PostList.css";

class PostList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: []
    };
    this.timer = null;
    this.handleVode=this.handleVode.bind(this);
  }

  handleVode(id){
    alert('asd');

  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, title: "1、大家一起来讨论React吧", author: "张三", date: "------------", post: "============" ,good:"、、、、、、、、、、、、、"},
          { id: 2, title: "2、前端框架，你最爱哪一个", author: "李四", date: "---------------", post: "=============" ,good:"、、、、、、、、、、"},
          { id: 3, title: "3、西游记都有谁", author: "王五", date: "--------------", post: "=============" ,good:"、、、、、、、、、、"},
          { id: 3, title: "4、前端都有什么", author: "王五", date: "---------------", post: "==========" ,good:"、、、、、、、、、、、、"},
          { id: 3, title: "5、三大框架不包括那个", author: "王五", date: "---------------", post: "===========" ,good:"、、、、、、、、、、"},
          { id: 3, title: "6、三大框架不包括那个", author: "王五", date: "--------------", post: "============" ,good:"、、、、、、、、"}
        ]
      });
    }, 1000);
  }

  componentWillUnmount() {
    if(this.timer) {
      clearTimeout(this.timer);
    }
  }

  render() {
    return (
      <div className='container'>
        <h2>调查问卷</h2>
        <ul>
          {this.state.posts.map(item =>
            <PostItem
              post = {item}
            />
          )}
        </ul>
        <input className="inp" type="button" value="提交" onClick={this.handleVode}/>
      </div>
    );
  }
}

export default PostList;
