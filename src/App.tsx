import "./styles.css";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import DataCard from "./components/DataCard";
interface AppData {
  id: number;
  title: string;
  description: string;
  price: number;
  rating: number;
  thumbnail: string;
}
export default function App() {
  const [data, setData] = useState<AppData>();
  const [index, setIndex] = useState(1);
  const getData = async (e: any) => {
    let tempIndex = 1;
    const eventType = e.target.id;
    if (eventType === "next") {
      tempIndex = index + 1;
      setIndex(tempIndex);
    } else {
      if (index === 1) {
        return;
      }
      tempIndex = index - 1;
      setIndex(tempIndex);
    }
    const response = await axios.get(
      "https://dummyjson.com/products/" + tempIndex
    );
    console.log(response.data.title);
    const loadedData = {
      id: response.data.id,
      title: response.data.title,
      description: response.data.description,
      price: response.data.price,
      rating: response.data.rating,
      thumbnail: response.data.thumbnail,
    };
    setData(loadedData);
  };

  return (
    <div className="container" style={{ marginTop: "40px" }}>
      <div style={{ width: "500px", margin: "auto" }}>
        <div className="d-flex justify-content-around">
          <button
            name="prev"
            id="prev"
            type="button"
            className="btn btn-success"
            onClick={getData}
          >
            PREV PRODUCT
          </button>

          <button
            name="next"
            id="next"
            type="button"
            className="btn btn-success"
            onClick={getData}
          >
            NEXT PRODUCT
          </button>
        </div>
        {data && (
          <div className="d-flex justify-content-center mt-5">
            <DataCard data={data} />
          </div>
        )}
      </div>
    </div>
  );
}
