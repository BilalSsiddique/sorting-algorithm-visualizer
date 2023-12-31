import { useState } from "react";
import { data } from "../utils/data";
import { useNavigate } from "react-router-dom";

const useSort = () => {
  const [sortedData, setSortedData] = useState(data);
  const [swaps, setSwaps] = useState<number[]>([]);
  const [countIteration, setCountIeration] = useState(0);

  const navigate = useNavigate();

  function reset() {
    navigate(0);
  }

  async function bubbleSort() {
    setCountIeration(0);
    const dataDup = data.slice();
    let swap = true;
    while (swap) {
      swap = false;
      for (let i = 0; i < dataDup.length; i++) {
        setCountIeration((prev) => prev + 1);
        if (dataDup[i] > dataDup[i + 1]) {
          const temp = dataDup[i];
          dataDup[i] = dataDup[i + 1];
          dataDup[i + 1] = temp;
          swap = true;
          setSwaps([i, i + 1]);
          setSortedData([...dataDup]);

          await new Promise((resolve) => setTimeout(resolve, 1000));
          setSwaps([]);
        }
      }

      if (!swap) {
        break;
      }
    }
  }
  return {
    sortedData,
    swaps,
    countIteration,
    bubbleSort,
    reset,
  };
};

export default useSort;
