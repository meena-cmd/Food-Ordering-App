import { useRouteError } from "react-router-dom";
import React from 'react'

const Error = () => {
  const error = useRouteError();
  console.log(error);

  return (
    <div>
      <h1>Oops!!!</h1>
      <h1>Something went Wrong...</h1>

      <h1>
        {error.status}:{error.statusText}
      </h1>
    </div>
  );
};
export default Error;
