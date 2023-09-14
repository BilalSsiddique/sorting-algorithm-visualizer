import Title from "./Title";
import { Link } from "react-router-dom";
const Home = () => {
  return (
    <>
      <Title />
      <div className="main gap-2 flex-wrap justify-center items-center">
        <Link to="/bubble-sort">
          <button className="font-bold   px-5 py-2 bg-amber-600">
            BUBBLE SORT
          </button>
        </Link>
        <Link to="/quick-sort">
          <button
            disabled={true}
            className="disabled:bg-[#cccccc] disabled:text-[#999999] font-bold  px-5 py-2 bg-amber-600"
          >
            QUICK SORT
          </button>
        </Link>
        <Link to="/selection-sort">
          <button
            disabled={true}
            className="disabled:bg-[#cccccc] disabled:text-[#999999] font-bold  px-5 py-2 bg-amber-600"
          >
            SELECTION SORT
          </button>
        </Link>
        <Link to="/merge-sort">
          <button
            disabled={true}
            className="disabled:bg-[#cccccc] disabled:text-[#999999] font-bold  px-5 py-2 bg-amber-600"
          >
            MERGE SORT
          </button>
        </Link>
        <Link to="/insertion-sort">
          <button
            disabled={true}
            className="disabled:bg-[#cccccc] disabled:text-[#999999] font-bold  px-5 py-2 bg-amber-600"
          >
            INSERTION SORT
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
