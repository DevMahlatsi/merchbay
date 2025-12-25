import Cart from "./Cart";
import Logo from "./Logo";
import MenuIcon from "./MenuIcon";

export default function NavBar(){
  return(
    <>
    <div className="bg-gray-800 flex justify-between">
      <MenuIcon/>
      <Logo/>
      <Cart/>
    </div>
    

    </>
  )
}