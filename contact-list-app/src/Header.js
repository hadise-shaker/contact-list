import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import AddButton from "./AddButton";

function Header({ onShowAddForm, searchString, setSearchString }) {
  return (
    <header className="contact-list-header">
      <AddButton onClick={onShowAddForm} />
      <h1 className="contact-list-header__title">Contacts</h1>
      <label className="contact-list-header__search">
        <div className="contact-list-header__search-icon">
          <FontAwesomeIcon icon={faSearch} color="#757575" />
        </div>
        <input
          type="text"
          className="contact-list-header__search-input"
          placeholder="Search"
          value={searchString}
          onChange={e => setSearchString(e.target.value)}
        />
      </label>
    </header>
  );
}

export default Header;
