import Grid from "./Grid";
import LeftSidebar from "./LeftSidebar";
import PromoBanner from "./PromoBanner";
import { Link } from "react-router-dom";
import Category from "./Category";

function Home() {
    return (
        <div className="main-content">
            <LeftSidebar />
            <Grid />
        </div>
    )
}
export default Home;