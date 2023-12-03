import { useEffect, useState } from "react";
import apiClient from "../../services/api-client";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState("");
  const [isLoading, setLoading] = useState(false);

  console.log("request config");
  console.log(requestConfig);

  useEffect(
    () => {
      const controller = new AbortController();
      setLoading(true);
      console.log("GET method");
      console.log(
        apiClient.get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
      );
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });
      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  console.log("data from useData");
  console.log(data);
  return { data, error, isLoading };
};

export default useData;
