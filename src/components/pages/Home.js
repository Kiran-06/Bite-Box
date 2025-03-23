import { CategoryProvider } from "../contexts/CategoryContext";
import CategorySection from "../CategorySection";
import Grid from "../Grid";
import LeftSidebar from "../LeftSidebar";
import Footer from "./footer";
import PromoBanner from "../PromoBanner";

function Home() {
    return (
        <div className="home-container" style={{ display: "flex", flexDirection: "column", minHeight: "100vh" }}>

            {/* Promo Banner */}
            <PromoBanner />

            {/* Main Content */}
            <main style={{ display: "flex", flex: "1" }}>
                <LeftSidebar />
                <Grid />
            </main>

            {/* Category Section */}
            <CategoryProvider>
                <CategorySection />
            </CategoryProvider>

            {/* Footer */}
            <Footer />
        </div>
    );
}

export default Home;
