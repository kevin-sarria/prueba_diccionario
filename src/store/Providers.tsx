"use client"

import { ReactNode } from "react"
import { Provider } from "react-redux"
import { store } from "./reduxStore"

export const Providers = ({ children }: { children: ReactNode | ReactNode[] }) => {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  )
}
