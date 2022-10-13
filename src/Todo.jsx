import React from 'react';

const Todo = ({ todos }) => {
  return (
    <>
      {todos.map((index, todo) => (
        <>
          <h3>{todo.title}</h3>
          <div>{todo.description}</div>
        </>
      ))}
    </>
  );
};

export default Todo;
