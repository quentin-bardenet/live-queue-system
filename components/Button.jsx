const Button = ({ text }) => {
  return (
    <button
      type="submit"
      className="bg-orange-500 py-2 px-2 rounded-md text-white max-w-sm mt-3 h-full"
    >
      {text}
    </button>
  );
};

export default Button;
