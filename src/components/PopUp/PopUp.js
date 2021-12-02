import "./PopUp.scss";

export default function PopUp({ name }) {
  return (
    <div className={name ? "visable" : "hidden"}>
      <h2>CONGRATULATIONS {name.toUpperCase()}!!</h2>
      <p>Doge burned his morning Pop Tart :(</p>
    </div>
  );
}
