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
    <div className="w-full mb-3 flex flex-col">
      <input
        className={`${
          hasError && 'border-[#ff7a7a]'
        } w-full pl-3 text-[#000] p-2 outline-none border rounded-lg`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={val}
        onChange={onChangeHandler}
        onBlur={onBlurHandler}
      />
      {hasError && (
        <p className="text-xs pt-1 self-end text-[#ff7a7a]">
          {type !== 'email'
            ? `${placeholder} cannot be empty`
            : 'Looks like this is not an email'}
        </p>
      )}
    </div>
  );
};

export default Input;
