import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'

function AddButton({ onClick }) {
  return (
    <a href="##" className="contact-list-header__add-icon" onClick={onClick}>
      <FontAwesomeIcon size="lg" icon={faPlus} color="white" />
    </a>
  )
}

export default AddButton
