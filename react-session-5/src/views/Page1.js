import React, { useEffect } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";

export default function Page1() {
  const location = useLocation();
  const params = useParams();

  const [searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    console.log({ location });
    console.log({ params });

    console.log("state", location.state);

    console.log("query", searchParams.get("query"));
  }, [location, params, searchParams]);

  return (
    <div>
      This is Page 1{" "}
      <button onClick={() => setSearchParams({ query: "1234" })}>
        Get query
      </button>
    </div>
  );
}
