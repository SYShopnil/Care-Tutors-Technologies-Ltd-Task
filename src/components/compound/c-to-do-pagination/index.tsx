"use client";

import { IPagination } from "@src/types/compound/c-to-do-pagination";

export const CPaginationToDo = ({
  itemsPerPage,
  totalItems,
  paginate,
  currentPage,
}: IPagination) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="flex justify-center space-x-2">
        {pageNumbers.map((number) => (
          <li
            key={number}
            className={`px-4 py-2 border rounded ${
              currentPage === number ? "bg-[#7F4D4F] text-white" : "bg-white"
            }`}
          >
            <button onClick={() => paginate(number)}>{number}</button>
          </li>
        ))}
      </ul>
    </nav>
  );
};
