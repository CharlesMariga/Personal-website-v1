import React from "react";

export default function Loader({ finishedLoading }) {
  setTimeout(() => {
    finishedLoading();
  }, 2000);

  return (
    <div className="min-h-screen">
      <h1>Loading...</h1>
    </div>
  );
}
