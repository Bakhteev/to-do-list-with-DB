import React from 'react'
import Form from '../components/form'
import Notes from '../components/notes'

const Home = () => {
  const notes = new Array(3)
    .fill('')
    .map((_, index) => ({ id: index, title: `Note ${index + 1}` }))
  return (
    <React.Fragment>
      <Form />
      <hr />
      <Notes notes={notes} />
    </React.Fragment>
  )
}

export default Home
