import React from "react";

const about = (props) => {
  return (
    <>
      <h1 style={{ color: "orange" }}>About us</h1>
      <h1>{props.title}</h1>
      <h1>{props.todo.title}</h1>
    </>
  );
};

export default about;

export async function getStaticProps() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos/1`);
    const data = await res.json();
    return {
      props: {
        title: "Hello",
        todo: data
      },
      // notFound: true, 
      revalidate: 10, // for new todo add on list or delete some todo.. update api 
    };

}
