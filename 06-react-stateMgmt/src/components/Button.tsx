import "../css/Button.css";

function Button() {
  const list = ["Github", "LinkedIn", "Twitter", "Facebook", "Instagram"];

  return (
    <div className="button-container">
      {list.map((item) => (
        <button key={item}>{item}</button>
      ))}
    </div>
  );
}

export default Button;
