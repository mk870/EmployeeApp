import React from 'react'

type Props = {
  height:string,
  width:string,
}

const SkeletonLoader:React.FC<Props> = ({height,width}) => {
  return (
    <div className="flex animate-pulse bg-gray-200 rounded-[7px]" style={{
      height,
      width
    }}>
    </div>
  )
}

export default SkeletonLoader