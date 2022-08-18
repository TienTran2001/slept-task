import { GiNotebook } from "react-icons/gi";

function EmptyTodo() {
  return (
    <div className="absolute top-[50%] right-[50%] translate-x-[50%] translate-y-[-50%]  w-[300px] bg-darkLight text-white p-[30px] rounded-md text-center">
      <GiNotebook className="text-[100px] mx-auto mb-[10px] " />
      <h2 className="text-[26px] font-semibold mb-[10px]  ">
        Wondering where your task are?
      </h2>
      <p>
        Any tasks you didn't complete in My Day last time show up in the
        suggestion pane{" "}
      </p>
    </div>
  );
}

export default EmptyTodo;
