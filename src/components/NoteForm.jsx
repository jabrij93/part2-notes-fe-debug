import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')
  const [selectedDate, setSelectedDate] = useState(new Date()) // Default date is today

  const addNote = (event) => {
    event.preventDefault()
    createNote({
      content: newNote,
      important: true,
      date: selectedDate.toISOString() // Send the date as an ISO string to the backend
    })

    setNewNote('')
    setSelectedDate(new Date()) // Reset to current date
  }

  return (
    <div>
      <h2>Create a new note</h2>

      <form onSubmit={addNote}>
        <input
          value={newNote}
          onChange={event => setNewNote(event.target.value)}
        />
        <div>
          <label>Pick a date:</label>
          <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm