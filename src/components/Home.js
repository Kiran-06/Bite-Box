import Grid from "./Grid";
import LeftSidebar from "./LeftSidebar";
import PromoBanner from "./PromoBanner";

function Home() {
    return(
        <div className="main-content">
            <LeftSidebar />
            <Grid />
        </div>
    )
}

export default Home;