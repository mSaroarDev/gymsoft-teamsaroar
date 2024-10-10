export const Form = ({ children, onSubmit, className = "" }) => {
  return (
    <>
      <form onSubmit={onSubmit} className={className}>
        {children}
      </form>
    </>
  );
};

export const Label = ({ text, className = "" }) => (
  <label
    className={`w-full font-semibold inline-block ${className}`}
    style={{ marginBottom: "4px" }}
  >
    {text}
  </label>
);

export const Input = ({
  type = "text",
  onChange,
  id,
  name,
  value,
  placeholder,
  ...rest
}) => {
  return (
    <>
      <input
        type={type}
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder || "Enter Placeholder"}
        {...rest}
      />
    </>
  );
};

export const Texarea = ({ onChange, id, name, value, placeholder }) => {
  return (
    <>
      <textarea
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder || "Enter Placeholder"}
      ></textarea>
    </>
  );
};

export const Select = ({
  onChange,
  id,
  name,
  value,
  placeholder,
  children,
}) => {
  return (
    <>
      <select
        onChange={onChange}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder || "Enter Placeholder"}
      >
        {children}
      </select>
    </>
  );
};
