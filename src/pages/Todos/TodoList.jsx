import { useRef, memo, useState } from "react";
import { AiOutlineDelete } from "react-icons/ai";
import { BsChevronDown } from "react-icons/bs";
import { ImRadioUnchecked, ImCheckmark } from "react-icons/im";

function TodoList({ todoList, setTodoList, audioRef }) {
  const unComplete = todoList.filter((item) => item.completed == false);

  const [itemComplete, setItemComplete] = useState(true);
  // delete
  const handleDelete = (id) => {
    setTodoList((prev) => {
      const newTodoList = prev.filter((item, i) => {
        return item.id !== id;
      });
      return newTodoList;
    });
  };

  const handleComplete = (id) => {
    audioRef.current.play();
    const newTodoList = todoList;
    let temp;
    newTodoList.forEach((todo, index) => {
      if (todo.id === id) temp = index;
    });
    setTodoList((prev) => {
      prev[temp].completed = true;
      return [...prev];
    });
  };
  const handleUnComplete = (id) => {
    audioRef.current.play();
    const newTodoList = todoList;
    let temp;
    newTodoList.forEach((todo, index) => {
      if (todo.id === id) temp = index;
    });
    setTodoList((prev) => {
      prev[temp].completed = false;
      return [...prev];
    });
  };

  let completeReversed = useRef();
  let complete = todoList.filter((item) => item.completed == true);
  completeReversed = complete.reverse();

  return (
    <ul className="todo-list h-[60vh] mx-auto overflow-y-scroll ">
      {unComplete.map((item) => (
        <li
          key={item.id}
          className="px-[16px] py-[8px] bg-wlighter rounded-md text-[18px] font-semibold mb-[10px] flex justify-between items-center"
        >
          <div className="flex items-center gap-x-[10px] cursor-pointer ">
            {/* complete btn */}
            <div
              className="relative check-complete"
              onClick={() => handleComplete(item.id)}
            >
              <ImRadioUnchecked className="text-[22px] check-complete-radio rounded-full text-[#808080] " />
              <ImCheckmark className="hidden check-complete-tick absolute top-[50%] translate-y-[-50%] left-[5px] text-[12px] " />
            </div>

            <div>
              {item.content}
              <div className="text-gray-500 text-[12px]">Task</div>
            </div>
          </div>
          <div
            className="text-[24px] cursor-pointer"
            onClick={() => handleDelete(item.id)}
          >
            <AiOutlineDelete />
          </div>
        </li>
      ))}
      {/* item complete */}
      {completeReversed.length > 0 ? (
        <>
          <button
            className="px-[16px] py-[4px] font-normal bg-wlighter mb-[10px] rounded-md
              flex items-center gap-x-[10px] hover:bg-white
             "
            onClick={() => {
              document
                .querySelector(".dropdown-complete")
                .classList.toggle("active");
              setItemComplete(!itemComplete);
            }}
          >
            <BsChevronDown className="text-[12px] transition-all dropdown-complete " />
            <div>Completed {completeReversed.length}</div>
          </button>
          {itemComplete && (
            <div>
              {completeReversed.map((item) => (
                <li
                  key={item.id}
                  className="px-[16px] py-[8px] bg-wlighter rounded-md text-[18px] font-semibold mb-[10px] flex justify-between items-center"
                >
                  <div className="flex items-center gap-x-[10px] cursor-pointer">
                    <div
                      className="relative"
                      onClick={() => handleUnComplete(item.id)}
                    >
                      <ImRadioUnchecked className="bg-[#808080] text-[22px] rounded-full text-[#808080] " />
                      <ImCheckmark className="text-white absolute top-[50%] translate-y-[-50%] left-[5px] text-[12px] " />
                    </div>
                    <div>
                      <h3 className="line-through text-gray-500">
                        {item.content}
                      </h3>
                      <div className="text-gray-500 text-[12px]">Task</div>
                    </div>
                  </div>
                  <div className="text-[24px] cursor-pointer">
                    <AiOutlineDelete onClick={() => handleDelete(item.id)} />
                  </div>
                </li>
              ))}
            </div>
          )}
        </>
      ) : (
        <> </>
      )}
    </ul>
  );
}

export default TodoList;
