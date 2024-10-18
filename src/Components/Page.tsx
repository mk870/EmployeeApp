import React from 'react'

type Props = {
  children:React.ReactNode
}

const Page:React.FC<Props> = ({
  children
}) => {
  return (
    <div className='w-full h-full flex flex-col'>
      {children}
    </div>
  )
}

export default Page