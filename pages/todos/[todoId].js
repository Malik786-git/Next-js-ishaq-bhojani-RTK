import React from "react";

const index = (props) => {
  return (
    <>
      <h1 style={{ color: "orange" }}>About us</h1>
      <h1>{props.title}</h1>
      <h1>{props?.todo?.title}</h1>     
    </>
  );
};

export default index;

export const getStaticPaths = async () => {
  return {
    paths: [
      {
        params: {
          todoId: '1',
        },
      },
      // Add other dynamic paths if needed
    ],
    fallback: true, // fallback true refers to if the path doesn't match the pre-defined paths, it won't give a 404.
                    // if we false it, to it render only given params in our cast /todos/1 only give
  };
};

export const getStaticProps = async (context) => {

  const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${context.params.todoId}`);
  const data = await res.json();

  return {
    props: {
      title: "Hello",
      todo: data,
    },
    revalidate: 10, // for new todo add on list or delete some todo.. update api
  };
};