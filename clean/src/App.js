import React, { useState } from "react";
import Item from "./components/Item";

const Todo = () => {
  const [todos, setTodos] = useState([
    { id: 1, name: "play" },
    { id: 2, name: "sleep" },
  ]);

  const handleSubmit = (e) => {
    e.preventDefault(); /////// هذي ميثود ثابته ماتسمح لصفحة تسوي رفرش

    if (e.target.task.value) {
      const todo = {
        /////////////////////////  الآوبجكت الجديد اللي راح نضفية
        id: todos.length + 1, /////////// يحتوي على آي دي
        name: e.target.task.value, ///////////////// يحتوي على نيم
      };
      setTodos([...todos, todo]); ///// ست ستيت هي : اداة استخدمها عشان اقدر اغير على الستيت الاصليه لانني ما اقدر اوصل لها إلا بأداة
      e.target.task.value = ""; /////////////////////// فضينا الإنبوت بعد ماضفنا
    }
  };

  const handleDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id)); /// ست ستيت هي : اداة استخدمها عشان اقدر (أغير) على الستيت الاصليه لانني ما اقدر اوصل لها إلا بأداة
  };

  const handleUpdate = (id) => {
    const update = prompt("Pleae Enter your update"); /// ست ستيت هي : اداة استخدمها عشان اقدر (أغير) على الستيت الاصليه لانني ما اقدر اوصل لها إلا بأداة
    const arr = todos.map((item) => {
      if (item.id == id) {
        return { ...item, name: update };
      } else {
        return item;
      }
    });
    console.log(arr);
    setTodos(arr);
  };

  return (
    <div className="todo">
      <form onSubmit={handleSubmit}>
        <input type="text" name="task" />
        <button>Add Task</button>
      </form>
      <ul className="todos">
        {todos.map((todo, i) => (
          <Item
            todo={todo}
            key={i}
            handleDelete={handleDelete}
            handleUpdate={handleUpdate}
            // money={25}
          />
        ))}
      </ul>
    </div>
  );
};

export default Todo;
