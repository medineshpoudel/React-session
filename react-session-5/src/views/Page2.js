import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function Page2() {
  const navigate = useNavigate();

  //Async and sync

  //Handle Async - Promises and Async Await

  //Callback hell

  //Axios - HTTP Library just like Fetch

  const getRecords = async () => {
    try {
      const results = await axios.get(
        "https://jsonplaceholder.typicode.com/todos/"
      );

      // const results = await axios.post('url', data, {headers})

      return results.data;
    } catch (error) {
      return [];
    }
  };

  useEffect(() => {
    const getAllData = async () => {
      const results = await getRecords();
      setRecords(results);
    };

    getAllData();
  }, []);

  const [records, setRecords] = useState([]);

  const handleRedirectToPage2 = () => {
    const obj = {
      name: "Jack",
    };

    navigate("/page1/1234", { state: obj });
  };

  return (
    <div>
      This is Page 2
      <button onClick={() => handleRedirectToPage2()}>
        Take me back to Page 1
      </button>
      {records.map((el, index) => (
        <div>
          <input value={`${el.id},${el.name ?? ""},${el.address ?? ""}`} />
        </div>
      ))}
    </div>
  );
}
