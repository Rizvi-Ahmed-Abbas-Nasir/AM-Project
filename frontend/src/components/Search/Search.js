import React from 'react'
import './Search.css';

function Search() {
  return (
    <div className='Search'>
    <link href="//maxcdn.bootstrapcdn.com/font-awesome/4.1.0/css/font-awesome.min.css" rel="stylesheet" />
    <div class="box">
  <div class="container-2">
      <span class="icon"><i class="fa fa-search"></i></span>
      <input type="search" id="search" placeholder="Search..." />
      </div>
    </div>
    </div>
  )
}

export default Search