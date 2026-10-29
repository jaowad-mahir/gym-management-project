
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div className="min-h-screen bg-[#10110f] text-white">
      <Outlet />
    </div>
  );
};

export default Root;
