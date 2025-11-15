// src/hooks/useFetch.js
import { useCallback, useEffect, useState } from "react";

/**
 * useFetch(asyncFn, deps?)
 * asyncFn: hàm async trả về Promise (thường là service)
 */
export default function useFetch(asyncFn, deps = []) {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const execute = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const res = await asyncFn();
      setData(res?.data ?? res);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  }, deps); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    execute();
  }, [execute]);

  return { data, loading, error, refetch: execute };
}
