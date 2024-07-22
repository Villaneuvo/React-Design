import "../css/Card.css";

function Card() {
  return (
    <div className="wrapper">
      <div className="wrapper-img">
        <img
          src="https://cdn.pixabay.com/photo/2024/06/19/07/16/girl-8839335_1280.jpg"
          alt="image"
        />
      </div>
      <div className="wrapper-content">
        <h1>Stay Updated!</h1>
        <span>Join 60.000+ product managers receiving monthly updates on:</span>
        <ul>
          <li>Product discovery and building what matters</li>
          <li>Measuring to ensure updates are success</li>
          <li>And much more!</li>
        </ul>
        <form>
          <label>Email address</label>
          <input
            type="text"
            id="email"
            name="email"
            placeholder="email@company.com"
          />
        </form>
        <button>Subscribe to monthly newsletter</button>
      </div>
    </div>
  );
}

export default Card;
