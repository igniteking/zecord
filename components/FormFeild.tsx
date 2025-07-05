import React from "react";

const FormFeild = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  placeholder,
  as = "input",
  options = [],
}: FormFieldProps) => {
  return (
    <div className="form-field">
      <label htmlFor={id}>{label}</label>
      {as === "textarea" ? (
        <textarea
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      ) : as === "select" ? (
        <select name={id} id={id} value={value} onChange={onChange}>
          {options.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      ) : (
        <input
          type="text"
          name={id}
          id={id}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
      )}
    </div>
  );
};

export default FormFeild;
