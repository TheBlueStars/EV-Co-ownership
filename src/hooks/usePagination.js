// src/hooks/usePagination.js
import { useMemo, useState } from "react";
import { PAGE_SIZE_DEFAULT } from "../utils/constants";

export default function usePagination(totalItems = 0, initialPageSize = PAGE_SIZE_DEFAULT) {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(initialPageSize);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(totalItems / pageSize)),
    [totalItems, pageSize],
  );

  const goto = (p) => {
    const next = Math.max(1, Math.min(totalPages, p));
    setPage(next);
  };

  const next = () => goto(page + 1);
  const prev = () => goto(page - 1);

  return {
    page,
    pageSize,
    totalPages,
    setPage: goto,
    setPageSize,
    next,
    prev,
  };
}
