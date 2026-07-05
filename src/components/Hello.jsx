import { useState } from "react";
import useCache from "../hooks/useCache";

export default function Hello() {
  const [name, setName] = useState("React Developer");

  const { setCache, getCache } = useCache();

  const handleChangeName = () => {
    setName("Senior React Developer");
    setCache("user", "Senior React Developer");
  };

  return (
    <>
      <h1 className="title">Hello {name}</h1>

      <button
        className="button"
        onClick={handleChangeName}
      >
        Change Name
      </button>

      <p>
        <strong>Hello</strong> {getCache("user")}
      </p>

      <hr />

     
    </>
  );
}