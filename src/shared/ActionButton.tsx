import React from "react"
import AnchorLink from "react-anchor-link-smooth-scroll"
import { SelectedPage } from "./types"

interface Props {
    children: React.ReactNode
    setSelectedPage: (value: SelectedPage) => void;
}

const ActionButton = ({children, setSelectedPage}: Props) => {
  return (
    <AnchorLink
    className="rounded-md bg-primary-100 hover:bg-gray-50 px-10 py-2 hover:text-white"
    onClick={() => setSelectedPage(SelectedPage.Resume)}
    href={`#${SelectedPage.Resume}`}>
      {children}
    </AnchorLink>
  )
}

export default ActionButton