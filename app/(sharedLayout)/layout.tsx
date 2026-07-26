import React, { ReactNode } from 'react'
import { NavigationMenuDemo } from "../../components/web/navbar"
const sharedlayout = ({children}:{children: ReactNode}) => {
  return (
    <>
    <NavigationMenuDemo />
    {children}
    </>
  )
}

export default sharedlayout