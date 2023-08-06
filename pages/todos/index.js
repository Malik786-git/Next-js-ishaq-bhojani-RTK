import Head from "next/head";
import React from "react";

const index = (props) => {
  return (
    <>
    <Head>
      <title>Todo Page</title>
      <meta name="decs" content="todos of users" />
    </Head>
      <h1 style={{ color: "orange" }}>About us</h1>
      <h1>{props.title}</h1>
      <div>
        {props.todo.map((todo) => (
          <h2 key={todo.id}>{todo.title}</h2>
        ))}
      </div>
    </>
  );
};

export default index;


// SSR (JIT) Used it where you want to data show on request, like dynamic pages..
export async function getServerSideProps(context) {
  console.log(context, 'ssr context');
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  const data = await res.json();
  return {
    props: {
      title: "Hello",
      todo: data,
    },
  };
}


// 
// export async function getStaticProps() {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
//   const data = await res.json();
//   return {
//     props: {
//       title: "Hello",
//       todo: data,
//     },
//     revalidate: 10, // for new todo add on list or delete some todo.. update api
//   };
// }