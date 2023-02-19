import React from 'react';

function FormNavbar() {
  return (
    <form
      data-id="search-form"
      className="header-controls-search-form form-inline invisible"
    >
      <input className="form-control" placeholder="Поиск" />
    </form>
  );
}

export default FormNavbar;
