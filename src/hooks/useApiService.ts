import axios from "axios";
import { useEffect, useState } from "react";

type ProductState<T> = {
  data: T | null;
  loading: boolean;
  error: Error | null;
};
function useFetchProduct<T>(url: string): ProductState<T> {
  const [state, setState] = useState<ProductState<T>>({
    data: null,
    loading: true,
    error: null,
  });

  useEffect(() => {
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
