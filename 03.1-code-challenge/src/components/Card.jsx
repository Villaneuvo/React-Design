import "../css/Card.css";
import Button from "./Button";

function Card() {
  return (
    <div className="card">
      <img
        className="card-img"
        // src="https://media.licdn.com/dms/image/D5603AQHXEnpo6zg8fA/profile-displayphoto-shrink_200_200/0/1672558687600?e=2147483647&v=beta&t=13Fd_668aeoDBSepliJWekJoQPjAD4nKPHcRLOmyxi0"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTW3KF3h08ffSSopGV-ZLZLJH7mxiQnfIs16A&s"
        alt="Avatar"
      />
      <div className="container">
        {/* <h4>Xaviera Putri</h4> */}
        <h4>Zahra Nabila Maharani</h4>
        {/* <span>Jakarta, Indonesia</span> */}
        <span>Klaten, Indonesia</span>
        <p>{`"Data Science and Computer Science Students."`}</p>
      </div>
      <Button val="Github" />
      <Button val="Linked In" />
      <Button val="Instagram" />
      <Button val="Twitter" />
      <Button val="Medium" />
    </div>
  );
}

export default Card;
