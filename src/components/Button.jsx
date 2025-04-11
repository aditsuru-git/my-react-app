function Button({ color, setBgColor }) {
  return (
    <button
      className="outline-0 bg-red-400 rounded-4xl text-2xl w-38 shadow-lg font-medium  "
      style={{ backgroundColor: color }}
      onClick={() => {
        setBgColor(color);
      }}
    >
      {color}
    </button>
  );
}

export default Button;
