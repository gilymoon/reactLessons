import React from "react";

const UserForm = ({ firstName, lastName, handleChange }) => (
  <form className="user-form">
    <input
      onChange={handleChange}
      value={firstName}
      type="text"
      name="firstName"
      className="user-form__input"
    />
    <input
      onChange={handleChange}
      value={lastName}
      type="text"
      name="lastName"
      className="user-form__input"
    />
  </form>
);

export default UserForm;
