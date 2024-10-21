import React from "react";
import SkeletonLoader from "../../../Components/SkeletonLoader";

const Loader: React.FC = () => {
  return (
    <div className="flex flex-col gap-2 w-[90%] mt-10 md:w-[500px] border border-gray-300 rounded-[10px] p-2">
      <div className="flex w-[100%] mb-4 mt-2 items-center justify-center">
        <SkeletonLoader width="40%" height="20px" />
      </div>
      <SkeletonLoader width="30%" height="20px" />
      <SkeletonLoader width="100%" height="40px" />
      <SkeletonLoader width="30%" height="20px" />
      <SkeletonLoader width="100%" height="40px" />
      <SkeletonLoader width="30%" height="20px" />
      <SkeletonLoader width="100%" height="40px" />
      <SkeletonLoader width="30%" height="20px" />
      <SkeletonLoader width="100%" height="40px" />
      <div className="flex w-[100%] mt-4">
        <SkeletonLoader width="100%" height="40px" />
      </div>
    </div>
  );
};

export default Loader;
