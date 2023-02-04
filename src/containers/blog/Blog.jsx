import React from 'react';
import { Article } from '../../components';
import './blog.css';

import {blog01, blog02, blog03, blog04, blog05} from './imports'
;
function Blog() {
  return (
    <div className='gpt3__blog section__padding'>
      <div className='gpt3__blog-heading'>
        <h1 className='gradient__text'>A lot is happening, We are blogging about it.</h1>
      </div>
      <div className='gpt3__blog-container'>
        <div className='gpt3__blog-container__groupA'>
          <Article imgUrl={blog01}  date="Sep 22 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
        </div>
        <div className='gpt3__blog-container__groupB'>
          <Article imgUrl={blog02} date="June 3 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog03} date="Aug 3 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog04} date="May 2 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
          <Article imgUrl={blog05} date="May 5 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
        </div>
      </div>
    </div>
  );
}

export default Blog;