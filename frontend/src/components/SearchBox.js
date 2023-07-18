import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const SearchBox = () => {
  const [keyword, setKeyword] = useState('')
  const navigate = useNavigate()
  const submitHandler = (e) => {
    e.preventDefault()
    if (keyword.trim()) {
      navigate(`/search/${keyword}`)
    } else {
      navigate('/')
    }
  }
  return (
    <Form onSubmit={submitHandler} inline='true'>
      <div className='d-flex align-items-center'>
        <Form.Control
          type='text'
          name='q'
          onChange={(e) => setKeyword(e.target.value)}
          placeholder='Search Products'
          className='p-1 mr-sm-2 '
        ></Form.Control>
        <Button type='submit' variant='outline-success' className=' p-2'>
          Search
        </Button>
      </div>
    </Form>
  )
}

export default SearchBox
