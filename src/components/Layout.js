import { Outlet } from "react-router-dom";
import Header from "./Header";
import PromoBanner from "./PromoBanner";

function Layout(){
    return(
        <>
            <Header />
            <PromoBanner />
            <Outlet />
        </>
    )
}

export default Layout;