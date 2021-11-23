import React from "react";
import { useSelector } from "react-redux";

function HomeComponent() {
  const loginState = useSelector((state) => state.login);

  return (
    <div
      style={{
        display: "flex",
        textAlign: "center",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <pre>
        <h1>Welcome to QuickTracker {loginState.login.name}</h1>
        <h2 className="text-center mt-2">
          Here, You can easily track your favourite books, movies, shows, and
          songs.
        </h2>
        <h2 className="text-center mt-2">Have Fun!</h2>
      </pre>
    </div>
  );
}

export default HomeComponent;
