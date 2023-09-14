import useSort from "../hooks/UseSort";
import { data } from "../utils/data";
import Title from "./Title";
import { MdKeyboardBackspace } from "react-icons/md";
import { Link } from "react-router-dom";

const BubbleSort = () => {
  const { swaps, bubbleSort, sortedData, reset, countIteration } = useSort();

  return (
    <div className="h-screen flex justify-center place-items-center">
      <div className="flex flex-col gap-5">
        <Title text="Bubble Sort Algorithm" />
        <div className="flex text-sm sm:text-base gap-2">
          {Array.isArray(data) &&
            data.map((item, index) => (
              <div key={index} className={`bg-gray-600  p-2 rounded-md`}>
                <h2 className="">{item}</h2>
              </div>
            ))}
        </div>
        <div className="self-start flex gap-2">
          <button
            className="font-bold  px-5 py-2 bg-amber-600"
            onClick={bubbleSort}
          >
            Sort
          </button>
          <button className="font-bold  px-5 py-2 bg-amber-600" onClick={reset}>
            Reset
          </button>
        </div>

        <div className="flex  gap-2">
          {Array.isArray(sortedData) &&
            sortedData.map((item, index) => (
              <div
                key={index}
                className={`bg-lime-600  ${
                  swaps.includes(index)
                    ? "text-gray-300 font-extrabold swap-animation"
                    : ""
                } p-2 rounded-md`}
              >
                <h2>{item}</h2>
              </div>
            ))}
        </div>
        <h2 className="self-start text-lime-500 font-bold">
          ITERATION : <span className="text-[#535bf2]">{countIteration}</span>
        </h2>
      </div>

      {/* Back */}
      <div className="absolute top-5 left-5 ">
        <Link to="/">
          <button className="flex items-center gap-3 font-bold  px-5 py-2 bg-amber-600">
            <MdKeyboardBackspace color="#Fffff" size={20} />
            <p>Back</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default BubbleSort;
