import React from 'react'

const BookPage = () => {
  return (
    <div>
      <h2>New in General Fiction</h2>
      <div className='sort-container'>
        <h4 className='sort-count'>4 results</h4>
        <div className='sort-view-by'>
          <div className='sort-view'>
            <h4>Views: </h4>

          </div>
          <div className='sort-by'>
            <select name='' id=''>
              <option value=''>Newest Addtions</option>
              <option value=''>Title</option>
              <option value=''>Author</option>
              <option value=''>Date</option>
            </select>
          </div>
        </div>
      </div>

    </div>
  )
}

export default BookPage
