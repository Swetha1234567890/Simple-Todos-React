// Write your code here

import './index.css'

const TodoItem = props => {
  const {todosList, onDelete} = props
  const {id, title} = todosList

  const onClickDelete = () => {
    onDelete(id)
  }

  return (
    <li className="list-item-container">
      <p className="title">{title}</p>
      <button className="button" type="button" onClick={onClickDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
