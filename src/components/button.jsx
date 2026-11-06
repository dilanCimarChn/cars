import './styles/Button.css';
export default function Button({ car }) {
  return (
    <details className="button car-details">
      <summary>Learn more about {car.title}</summary>
      <p>{car.details}</p>
    </details>
  );
}
