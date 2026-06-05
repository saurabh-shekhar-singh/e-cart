import { ProductState } from "@/types/app";
import axios from "axios";
import { useEffect, useState } from "react";

function useFetchProduct<T>(url: string): ProductState<T> {
  const [state, setState] = useState<ProductState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
    console.log("Calling API");
    const fetchProducts = async () => {
      try {
        const response = await axios.get(url);
        setState({
          data: response.data,
          loading: false,
          error: null,
        });
      } catch (error) {
        setState({
          data: null,
          loading: false,
          error: error as Error,
        });
      }
    };
    fetchProducts();
  }, [url]);

  return state;
}

export default useFetchProduct;
