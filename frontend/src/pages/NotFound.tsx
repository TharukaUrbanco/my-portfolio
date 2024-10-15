import { ChevronLeft } from "lucide-react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="flex flex-col h-screen items-center justify-center">
      <h4 className="text-[55px] light-orange">404</h4>
      <h5 className="text-2xl light-orange -mt-2">Page not found !!!</h5>
      <Link
        to="/"
        className="border-[2px] border-white px-4 py-2 rounded-xl text-lg mt-6 dark-white flex items-center justify-center"
      >
        <ChevronLeft className="h-6 w-6 text-white" />
        Back to Home
      </Link>
    </div>
  );
};

export default NotFound;
