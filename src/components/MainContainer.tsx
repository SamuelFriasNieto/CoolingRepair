import React from 'react'

interface MainContainerProps {
  children: React.ReactNode;
}

const MainContainer = ({children}: MainContainerProps) => {
  return (
    <div className='px-4'>
      {children}
    </div>
  )
}

export default MainContainer