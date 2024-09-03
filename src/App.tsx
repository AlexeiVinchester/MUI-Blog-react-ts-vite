import { NavigationPanel } from "./components/NavigationPanel";
import { PaperContainer } from "./components/PaperContainer";
import { InfoBlogContainer } from "./components/InfoBlogContainer";
import { Cards } from "./components/Cards";
import { Footer } from "./components/Footer";

function App() {

    return (
        <>
            <NavigationPanel />
            <main>
                <PaperContainer />
                <InfoBlogContainer />
                <Cards />
            </main>
            <Footer />
        </>
    );
};

export { App } 
