import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function BookList(){
  return (
    <section className="bookList">
    <Book />
    <Book />
    <Book />
    <Book />
    </section>    
    
  )
}

const Book = () => {
  return (
    <article>
       <Image></Image>
       <Title></Title>
       <Author />
    </article>
  )
}
const Image = () => <img src="https://m.media-amazon.com/images/I/91cZHR17O6L._AC_UL480_FMwebp_QL65_.jpg" />

const Title = () => <h1>The Last Thing He Told Me: The No. 1 New York Times Bestseller and Reese's Book Club Pick</h1>

const Author = () => <h4>Laura Dave</h4>

ReactDOM.render(<BookList />, document.getElementById('root'))