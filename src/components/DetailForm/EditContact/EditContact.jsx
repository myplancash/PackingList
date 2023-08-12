import {useState} from 'react'
import {EditContactSection} from './EditContact.styles';

const EditContact = ({initialData, onSave}) => {

  const [name, setName] = useState(initialData.name)
  const [email, setEmail] = useState(initialData.email)
  
  return (
    <EditContactSection>
      <label >
        Name: {' '}
        <input 
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </label>
      <label >
        Email: {' '}
        <input 
          type="text"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </label>
      <button
        onClick={() => {
          const updatedData = {
            id: initialData.id,
            name: name,
            email: email
          } 
          onSave(updatedData) 
        }}
      >Save</button>
      <button onClick={() => {
        setName(initialData.name)
        setEmail(initialData.email)
      }}>Reset</button>
      
    </EditContactSection>
  )
}

export default EditContact