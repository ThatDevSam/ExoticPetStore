
import Hero from "../components/Hero"
import NewsLetter from "../components/NewsLetter"
import Contact from "../components/Contact";
import FeaturedProducts from "../components/FeaturedProducts";

function Home () {
    return(
        <main>
            <Hero />
            <FeaturedProducts numOfProducts={4} />
            <NewsLetter />
            <Contact />
        </main>
    )
}

export default Home