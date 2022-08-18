import { useEffect, useRef, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { ImRadioUnchecked } from "react-icons/im";
import EmptyTodo from "./EmptyTodo";

import { audio } from "../../assets/index";
import "./todo.css";

import TodoList from "./TodoList";

function Todos() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(() => {
    const todos = JSON.parse(localStorage.getItem("todos"));
    return todos || [];
  });

  const [complete, setComplete] = useState([]);

  const wrapInputRef = useRef();
  const inputRef = useRef();
  const btnRef = useRef();
  const audioRef = useRef();

  const [iconIp, setIconIp] = useState(false);

  const saveStorage = () => {
    const newTodos = JSON.stringify(todoList);
    localStorage.setItem("todos", newTodos);
  };
  const handleDelete = (index) => {
    console.log("click");
    setTodoList((prev) => {
      const newTodoList = prev;
      newTodoList.splice(index, 1);
      return newTodoList;
    });
  };

  useEffect(() => {
    document.title = "Slept - tasks";
  });
  useEffect(() => {
    // bắt sự kiện cho trường hợp click tra ngoài div input
    const handle = (event) => {
      var isClickInsideElement = wrapInputRef.current.contains(event.target);
      if (!isClickInsideElement) {
        //Do something click is outside specified element
        setIconIp(false);
        inputRef.current.placeholder = "Add a task";
      } else {
        setIconIp(true);
        inputRef.current.focus();
        inputRef.current.placeholder = 'Try typing "study React"';
      }
    };
    document.addEventListener("click", handle);
    return () => {
      document.removeEventListener("click", handle);
    };
  }, []);

  useEffect(() => {
    const handle = (e) => {
      if (e.key === "Enter") {
        btnRef.current.click();
        setIconIp(true);
      }
    };
    inputRef.current.addEventListener("keypress", handle);
  }, []);
  useEffect(() => {
    const handleFocus = () => {
      wrapInputRef.current.classList.add("wrap-input");
    };
    inputRef.current.addEventListener("focus", handleFocus);

    const handleBlur = () => {
      wrapInputRef.current.classList.remove("wrap-input");
    };
    inputRef.current.addEventListener("blur", handleBlur);
  }, []);

  const genID = () => {
    return (
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2) +
      Math.random().toString(36).substr(2)
    );
  };
  const handleSubmit = () => {
    if (todo != "") {
      setTodoList((prev) => [
        ...prev,
        {
          id: genID(),
          content: todo,
          completed: false,
        },
      ]);
      setTodo("");
    }
  };

  saveStorage();
  console.log("render");
  return (
    <section className="w-full mx-auto lg:w-[70vw] ">
      <h2 className="text-[38px] font-semibold mb-[10px] text-white">My Day</h2>
      {/* List Todo */}
      {todoList.length > 0 ? (
        <TodoList
          todoList={todoList}
          setTodoList={setTodoList}
          audioRef={audioRef}
          complete={complete}
          setComplete={setComplete}
          // unComplete={unComplete}
        />
      ) : (
        <EmptyTodo />
      )}
      {/* audio */}
      <audio className="hidden" ref={audioRef} src={audio} />

      {/* Input todo */}

      <div
        className=" right-[50%] translate-x-[50%] w-[90vw] absolute bottom-[5vh]  border rounded-md border-purple-600 shadow-md px-[16px] py-[8px] bg-wlight flex items-center gap-x-[10px] text-white lg:w-[70vw] "
        ref={wrapInputRef}
      >
        <span className="text-[20px]">
          {iconIp ? (
            <ImRadioUnchecked onClick={() => handleSubmit()} />
          ) : (
            <FaPlus />
          )}
        </span>
        <input
          placeholder="Add a task"
          ref={inputRef}
          value={todo}
          type="text"
          className="w-full inline-block  outline-none bg-transparent todo-input"
          onChange={(e) => setTodo(e.target.value)}
        />
        <button ref={btnRef} onClick={() => handleSubmit()}></button>
      </div>
    </section>
  );
}

export default Todos;
