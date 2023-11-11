const Input = ({
  val,
  hasError,
  type,
  name,
  placeholder,
  onChangeHandler,
  onBlurHandler,
}) => {
  return (
    <div className="w-full">
      <input
        className="w-full pl-3 p-2 mb-3"
        type={type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {hasError && (
        <p className="self-end">
          {type !== 'email'
            ? `${name} cannot be empty`
            : 'Looks like this is not an email'}
        </p>
      )}
    </div>
  );
};

export default Input;
