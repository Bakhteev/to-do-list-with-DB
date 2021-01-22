import React, { Fragment, useContext, useEffect } from 'react'
import Form from '../components/form'
import Loader from '../components/loader'
import Notes from '../components/notes'
import { FirebaseContext } from '../context/firebase/firebaseContext'
import {AlertContext} from '../context/alert/alertContext'

const Home = () => {
  const { loading, notes, fetchNotes, removeNote } = useContext(FirebaseContext)
  const {show} = useContext(AlertContext)
  useEffect(() => {
    fetchNotes()
  }, [])

  return (
    <Fragment>
      <Form />
      <hr />
      {loading ? (
        <Loader />
      ) : (
        <Notes notes={notes} onRemove={removeNote} showAlert={show} />
      )}
    </Fragment>
  )
}

export default Home
