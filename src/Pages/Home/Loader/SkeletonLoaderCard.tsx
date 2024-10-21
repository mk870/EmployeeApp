import React from "react";
import SkeletonLoader from "../../../Components/SkeletonLoader";


const SkeletonLoaderCard:React.FC = () => {
  return (
    <div className="flex flex-col w-[250px] border border-gray-300 rounded-[5px] gap-2 pt-3 px-1 pb-1">
      <SkeletonLoader height="15px" width="50%" />
      <SkeletonLoader height="15px" width="100%" />
      <SkeletonLoader height="15px" width="50%" />
      <SkeletonLoader height="15px" width="100%" />
      <SkeletonLoader height="15px" width="50%" />
      <SkeletonLoader height="15px" width="100%" />
      <div className="flex flex-col w-[100%] mt-4 gap-2">
        <SkeletonLoader height="40px" width="100%" />
        <SkeletonLoader height="40px" width="100%" />
      </div>
    </div>
  );
};

export default SkeletonLoaderCard;
