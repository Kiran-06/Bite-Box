import { Outlet } from "react-router-dom";
import Header from "./Header";

import { ScrollProvider } from "./contexts/ScrollContext";
import { AuthProvider, useAuth } from "./contexts/AuthContext";

function Layout() {
    const { showAuthModal } = useAuth();

    return (
        <>

            <ScrollProvider>
                <Header />
                <div id="outlet-page">
                    <Outlet />
                </div>
            </ScrollProvider>


        </>
    )
}

export default Layout;