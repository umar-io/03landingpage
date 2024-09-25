import { Outlet } from "react-router-dom";
import NavBar  from "../component/NavBar";

const LandingLayout = () => {
  return (
    <>
    <NavBar src={""} />
    <Outlet />
    </>
  )
}
export default LandingLayout