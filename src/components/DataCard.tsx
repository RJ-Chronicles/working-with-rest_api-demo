import * as React from "react";
interface AppData {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}
export default function DataCard(props: any) {
  console.log(props);
  const { title, description, price, rating, thumbnail } = props.data;
  return (
    <div className="card" style={{ width: "18rem" }}>
      <img className="card-img-top" src={thumbnail} alt="Card  cap" />
      <div className="card-body">
        <h5 className="card-title">{title}</h5>
        <p className="card-text">{description}</p>
        <div className="d-flex justify-content-between">
          <strong>Price: {price}USD</strong>
          <strong>Rating: {rating}</strong>
        </div>
        <a href="google.com" className="btn btn-primary">
          explore more
        </a>
      </div>
    </div>
  );
}
