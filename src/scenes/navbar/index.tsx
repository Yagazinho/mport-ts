import { useState } from "react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import Logo from "@/assets/img/eagletlogo.png";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";
interface Props {
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
}

const Navbar = ({selectedPage, setSelectedPage}: Props) => {
  const flexBetween = "flex items-center justify-between";
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false)
  const isAboveMediumScreens = useMediaQuery("(min-width: 1068px)")
  return (
    <nav>
      <div className={`${flexBetween} fixed top-0 z-30 w-full py-6`}>
        <div className={`${flexBetween} mx-auto w-5/6`}>
          <div className={`${flexBetween} w-full gap-16`}>
            {/* left side */}
            <img alt="logo" src={Logo} />
            {/* right side */}            
            {isAboveMediumScreens ? ( <div className={`${flexBetween} w-full`}>
              <div className={`flex items-center ml-auto gap-8 text-sm`}>
                <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Resume" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              </div>
              <div>
              </div>
            </div>
            ): (<button 
            className="rounded-full bg-transparent p-2"
            onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <Bars3Icon className="h-6 w-6 text-white" />
            </button>)}
          </div>
        </div>
      </div>
      {/* MOBILE MENU MODAL */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="fixed right-0 bottom-0 z-40 h-full w-[300px] bg-primary-300 drop-shadow-xl">
          {/* CLOSE ICON */}
          <div className="flex justify-end p-12">
            <button onClick={() => setIsMenuToggled(!isMenuToggled)}>
              <XMarkIcon className="h-6 w-6 text-gray-50"/>
            </button>
          </div>
          {/* MENU ITEMS */}
              <div className="ml-[33%] flex flex-col gap-10 text-2xl text-primary-50">
                <Link 
                page="Home"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Portfolio"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Resume" 
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="About"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
                <Link 
                page="Contact"
                selectedPage={selectedPage}
                setSelectedPage={setSelectedPage} />
              </div>
        </div>
      )}
    </nav>
  )
}

export default Navbar