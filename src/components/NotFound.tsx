import { Link } from "react-router-dom";
import { MdOutlineKeyboardBackspace } from "react-icons/md";

const NotFound = () => {
  return (
    <div className="h-screen flex  items-center shadow-2xl justify-center ">
      <div className="bg-white h-3/6 gap-4 w-3/6 justify-center flex flex-col items-center">
        <h1 className="text-red-500 font-bold">Route Not Found</h1>
        <Link to="/">
          <button className="flex items-center gap-3 font-bold  px-5 py-2 bg-amber-600">
            <MdOutlineKeyboardBackspace color="#Fffff" size={20} />
            <p>Back</p>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
