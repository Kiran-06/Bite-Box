import { CategoryProvider } from "../contexts/CategoryContext";
import CategorySection from "../CategorySection";
import Grid from "../Grid";
import LeftSidebar from "../LeftSidebar";
import PromoBanner from "../PromoBanner";

function Home() {

    return(
        <>
            <PromoBanner />
            <div className="main-content">
                <LeftSidebar />
                <Grid />
            </div>
            <CategoryProvider>
                <CategorySection/>
            </CategoryProvider>
            
        
        </>
    )
}

export default Home;