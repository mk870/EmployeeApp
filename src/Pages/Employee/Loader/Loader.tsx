import React from "react";
import SkeletonLoader from "../../../Components/SkeletonLoader";

const Loader: React.FC = () => {
  return (
    <>
      <div className="flex flex-col gap-3 justify-center items-center">
        <div className="flex animate-pulse bg-gray-200 rounded-[100px] w-[200px] h-[200px]"></div>
        <SkeletonLoader height="20px" width="200px" />
      </div>
      <div className="flex w-[100%] flex-col gap-3 justify-center items-center md:items-start md:justify-start">
        <SkeletonLoader height="20px" width="250px" />
        <SkeletonLoader height="20px" width="250px" />
      </div>
      <div className="flex flex-col gap-3 w-[100%] md:w-[700px] mt-3">
        <SkeletonLoader height="20px" width="100%" />
        <SkeletonLoader height="20px" width="100%" />
        <SkeletonLoader height="20px" width="100%" />
        <SkeletonLoader height="20px" width="100%" />
        <SkeletonLoader height="20px" width="100%" />
        <SkeletonLoader height="20px" width="100%" />
      </div>
      <div className="flex gap-3 w-[100%] md:w-[500px] mt-3">
        <SkeletonLoader height="40px" width="100%" />
        <SkeletonLoader height="40px" width="100%" />
      </div>
    </>
  );
};

export default Loader;
