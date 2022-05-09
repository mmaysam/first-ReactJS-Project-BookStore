import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const firstBook ={
  img:"https://m.media-amazon.com/images/I/91cZHR17O6L._AC_UL480_FMwebp_QL65_.jpg",
  title: "The Last Thing He Told Me: The No. 1 New York Times Bestseller and Reese's Book Club Pick",
  author: "Laura Dave"

}

const secondBook ={
  img:"https://m.media-amazon.com/images/I/81wIWXQBWPL._AC_UL480_FMwebp_QL65_.jpg",
  title: "David Bowie (Volume 26)",
  author: "Ana Albero"

}

const thirdBook ={
  img:"https://m.media-amazon.com/images/I/71b+W6NDruS._AC_UL480_FMwebp_QL65_.jpg",
  title: "Never Split the Difference - Negotiating as if Your Life Depended on It by Chris Voss",
  author: "Tahl Raz"

}

function BookList(){
  return (
    <section className="bookList">
    <Book img={firstBook.img} title={firstBook.title} author={firstBook.author} />
    <Book img={secondBook.img} title={secondBook.title} author={secondBook.author}/>
    <Book img={thirdBook.img} title={thirdBook.title} author={thirdBook.author}/>
    </section>    
    
  )
}
const Book = (props) => {
  return (
    <article className='book'>
       <img src={props.img} />
       <h1>{props.title}</h1>
       <h4>{props.author}</h4>
</article>
  )
}
ReactDOM.render(<BookList />, document.getElementById('root'))