import React from 'react'
import './List.css'

const List = ({ items }) => {

  return (
      <table className='list-table'>
        <tbody>
          {items.map(({name, id, description}) => (
            <tr key={id} className='list-row'>
              <td className='list-cell'>{name}</td>
              <td className='list-cell'>{description}</td>
            </tr>
          ))}
        </tbody>
    </table>
  )
}

export default List