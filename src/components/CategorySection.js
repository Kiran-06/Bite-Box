import { useCategoryContext } from "./contexts/CategoryContext";
import { useScroll } from "./contexts/ScrollContext";


function CategorySection() {

    const { categoriesRef } = useScroll();

    const { categories } = useCategoryContext();
    return (
        <div ref={categoriesRef}>
            <section id="category">

                <div className="category-heading">

                    <h2>

                        Category

                    </h2>

                    <span>

                        All

                    </span>

                </div>

                <div className="category-container">
                    {
                        categories.map(
                            (category, index) => (
                                <div className="category-box">
                                    <img alt={category.category_name} src={category.image} />
                                    <span>{category.category_name}</span>
                                </div>
                            )
                        )
                    }


                </div>

            </section>
        </div>
    )
}

export default CategorySection;