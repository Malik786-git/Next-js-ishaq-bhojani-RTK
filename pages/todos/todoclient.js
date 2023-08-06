import Head from "next/head";
import React, { useEffect, useState } from "react";

const index = () => {
  const [todos, setTodos] = useState([]);
  useEffect(()=>{
    (async function () {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
        const data = await res.json();
        setTodos(data);
    })();
  }, [])

  return (
    <>
    <Head>
      <title>Todo Page</title>
      <meta name="decs" content="todos of users" />
    </Head>
      <h1 style={{ color: "orange" }}>Client Side Rendering</h1>
      <div>
        {todos?.map((todo) => (
          <h2 key={todo.id}>{todo.title}</h2>
        ))}
      </div>
    </>
  );
};

export default index;

