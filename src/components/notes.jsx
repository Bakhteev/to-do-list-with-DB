import React from 'react'
import { TransitionGroup, CSSTransition } from 'react-transition-group'

const Notes = ({ notes, onRemove, showAlert }) => (
  <TransitionGroup component="ul" className="list-group">
    {notes.map((note) => (
      <CSSTransition key={note.id} classNames={'note'} timeout={800}>
        <li className="list-group-item note">
          <div>
            <strong>{note.title}</strong>
            <small>{new Date().toLocaleDateString()}</small>
          </div>

          <button
            type="button"
            className="btn btn-outline-danger btn-sm"
            onClick={() => 
              [onRemove(note.id), showAlert('Заметка успешно удалена', 'success')]
            }
          >
            &times;
          </button>
        </li>
      </CSSTransition>
    ))}
  </TransitionGroup>
)

export default Notes
