import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes, faExclamationCircle } from '@fortawesome/free-solid-svg-icons'
import nameToInitials from './nameToInitials'
function ContactItem({ id, name, phoneNumber, onDeleteContact }) {
  const [isDeleting, setIsDeleting] = useState(false)
  return (
    <div
      className="contact-item"
      onBlur={() => {
        setIsDeleting(false)
      }}
    >
      <div className="contact-item__image">{nameToInitials(name)}</div>
      <div className="contact-item__content">
        <div className="contact-item__name">{name}</div>
        <div className="contact-item__number">{phoneNumber}</div>
      </div>
      <a href="##" className="contact-item__remove-button">
        {isDeleting === false && (
          <FontAwesomeIcon
            size="lg"
            icon={faTimes}
            color="#f16e6e"
            onClick={() => {
              setIsDeleting(true)
            }}
          />
        )}
        {isDeleting === true && (
          <FontAwesomeIcon
            size="lg"
            icon={faExclamationCircle}
            color="#f59f62"
            onClick={() => {
              onDeleteContact(id)
            }}
          />
        )}
      </a>
    </div>
  )
}

export default ContactItem
