import { useState } from 'react'
import DatePicker from 'react-datepicker'
import "react-datepicker/dist/react-datepicker.css"

const NoteForm = ({ createNote }) => {
  const [newNote, setNewNote] = useState('')
  const [selectedDate, setSelectedDate] = useState(null) // Default date is today

  const localISOTime = selectedDate 
    ? new Date(selectedDate.getTime() - selectedDate.getTimezoneOffset() * 60000).toISOString() 
    : null;

  const addNote = (event) => {
    event.preventDefault()

    if (!selectedDate) return // Prevent submitting if no date is selected

    createNote({
      content: newNote,
      date: localISOTime, // Keeps local time without shifting
      important: true
    })

    setNewNote('')
    setSelectedDate(null) // Reset to current date
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
            dateFormat="yyyy-dd-MM" // Date format
            placeholderText="Click to select a date" // Placeholder when empty
          />
        </div>
        <button type="submit">save</button>
      </form>
    </div>
  )
}

export default NoteForm