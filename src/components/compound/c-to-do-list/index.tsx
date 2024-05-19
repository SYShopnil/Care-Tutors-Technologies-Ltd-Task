"use client";
import { useState } from "react";
import { CPaginationToDo } from "../c-to-do-pagination";
import { CTodoItem } from "../c-to-do-items";
import { TodoItem } from "@src/lib/store/todoSlice";
import { useAppSelector } from "@src/lib/store/hook";
import { showItemLimitPerPage } from "@src/config";
import { SLoading } from "@src/components/root";

const CTodoList = () => {
  const todos = useAppSelector((state) => state.todos);
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * showItemLimitPerPage;
  const indexOfFirstItem = indexOfLastItem - showItemLimitPerPage;
  const currentTodos: TodoItem[] = todos.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  const paginate: (pageNumber: number) => void = (pageNumber) =>
    setCurrentPage(pageNumber);

  return (
    <div>
      {currentTodos.length ? (
        <>
          {currentTodos.map((todo) => (
            <CTodoItem key={todo.id} todo={todo} />
          ))}
          <CPaginationToDo
            itemsPerPage={showItemLimitPerPage}
            totalItems={todos.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </>
      ) : (
        <div>
          <SLoading text="No ToDo Found!!" />
        </div>
      )}
    </div>
  );
};
export default CTodoList;
