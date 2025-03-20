const Note = ({ note, toggleImportance }) => {
  const label = note.important
    ? 'make not important' : 'make important'

  return (
    <li className='note'>
      <span>{note.content}, {note.date.split('T')[0].split('-').reverse().join('-')} </span> 
      <button onClick={toggleImportance}>{label}</button>
    </li>
  )
}

export default Note