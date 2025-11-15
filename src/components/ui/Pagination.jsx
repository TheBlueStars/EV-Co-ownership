// src/components/ui/Pagination.jsx
import Button from "./Button.jsx";

export default function Pagination({
  page,
  totalPages,
  onChange,
}) {
  if (totalPages <= 1) return null;

  const goto = (p) => {
    if (p < 1 || p > totalPages) return;
    onChange?.(p);
  };

  return (
    <div className="mt-3 flex items-center justify-between text-xs text-slate-500">
      <span>
        Trang {page} / {totalPages}
      </span>
      <div className="flex items-center gap-2">
        <Button
          variant="outline"
          disabled={page <= 1}
          onClick={() => goto(page - 1)}
        >
          Trước
        </Button>
        <Button
          variant="outline"
          disabled={page >= totalPages}
          onClick={() => goto(page + 1)}
        >
          Sau
        </Button>
      </div>
    </div>
  );
}
