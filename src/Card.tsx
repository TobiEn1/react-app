import img from "./assets/images.jpg";
function Card() {
  return (
    <div className="card">
      <img src={img} alt="pp"></img>
      <h2>Tobi</h2>
      <p>Comp Sci Student</p>
    </div>
  );
}
export default Card;
