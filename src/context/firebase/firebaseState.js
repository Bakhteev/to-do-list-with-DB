import React from 'react'
import { FirebaseContext } from './firebaseContext'

const FirebaseState = ({children}) => {
  return (
    <FirebaseContext.Provider>
      {children}
    </FirebaseContext.Provider>
  )
}

export default FirebaseState
