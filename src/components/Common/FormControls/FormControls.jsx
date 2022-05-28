import React from "react";

export const Input = (name, type, placeholder, value, onChange, onBlur) => {
  return (
    <div>
      <input name={name} type={type} placeholder={placeholder} value={value} onChange={onChange} onBlur={onBlur} />
    </div>
  );
};
