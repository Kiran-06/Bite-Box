import { useEffect, useRef } from "react";
import { CategoryProvider } from "../contexts/CategoryContext";
import CategorySection from "../CategorySection";
import EnduserGridView from "./EnduserGridView";
import LeftSidebar from "../LeftSidebar";
import Footer from "./footer";
import PromoBanner from "../PromoBanner";

function Home() {
    const categoryRef = useRef(null);

    useEffect(() => {
        const shouldScroll = localStorage.getItem('scrollToCategories');
        if (shouldScroll === 'true') {
            localStorage.removeItem('scrollToCategories');

            // Scroll to CategorySection after the page loads
            if (categoryRef.current) {
                categoryRef.current.scrollIntoView({ behavior: "smooth" });
            }
        }
    }, []);

    return (
        <div className="home-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>
            {/* Promo Banner */}
            <PromoBanner />

            {/* Main Content */}
            <main style={{ display: "flex", flex: "1" }}>
                <LeftSidebar />
                <EnduserGridView />
            </main>

            {/* Category Section */}
            <CategoryProvider>
                <div ref={categoryRef}>
                    <CategorySection />
                </div>
            </CategoryProvider>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
