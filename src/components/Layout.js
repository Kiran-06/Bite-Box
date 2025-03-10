import { Outlet } from "react-router-dom";
import Header from "./Header";

import { ScrollProvider } from "./contexts/ScrollContext";

function Layout() {

    return (
        <>

            <ScrollProvider>
                <Header />
                <Outlet />
            </ScrollProvider>


        </>
    )
}

export default Layout;