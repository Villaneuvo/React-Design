import "../css/Card.css";

function Card() {
  return (
    <div className="wrapper">
      <div className="wrapper-title">
        <h1>Contact Us</h1>
      </div>
      <form>
        <div className="form-row">
          <div className="input-data">
            <label>First Name *</label>
            <div className="underline"></div>
            <input type="text" required />
          </div>
          <div className="input-data">
            <label>Last Name *</label>
            <div className="underline"></div>
            <input type="text" required />
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <label>Email Address *</label>
            <div className="underline"></div>
            <input type="text" required />
          </div>
        </div>
        <div className="form-row-radio">
          <label className="radio-title">Query Type *</label>
          <div className="form-radio">
            <div className="wrapper-radio">
              <input
                type="radio"
                id="generalEnquiry"
                name="queryType"
                required
              />
              <label>General Enquiry</label>
            </div>
            <div className="wrapper-radio">
              <input
                type="radio"
                id="supportRequest"
                name="queryType"
                required
              />
              <label>Support Request</label>
            </div>
          </div>
        </div>
        <div className="form-row">
          <div className="input-data">
            <label>Message *</label>
            <div className="underline"></div>
            <textarea name="" id=""></textarea>
          </div>
        </div>
        <div className="form-row">
          <div className="check-box">
            <label htmlFor="">
              <input type="checkbox" />
              <span className="checkmark">
                I consent to being contacted by the team *
              </span>
            </label>
          </div>
        </div>
      </form>
      <button>Submit</button>
    </div>
  );
}

export default Card;
