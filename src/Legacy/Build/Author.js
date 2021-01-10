import React, { useEffect, useState } from "react";
import { getAuthorName } from "../Fetches/fetches";

const Author = (props) => {
  const [name, setName] = useState("");

  useEffect(() => {
    const getInfo = async () => {
      const name = await getAuthorName(props.id);
      setName(name);
    };
    getInfo();
  });

  return <div>{name}</div>;
};

export default Author;
