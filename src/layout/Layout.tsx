import { LayoutWrapper } from "../assets/styles/LayoutStyles/layout";
import About from "../components/About";
import Blog from "../components/Blog";
import Contacts from "../components/Contacts";
import Customer from "../components/Customer";
import Download from "../components/Download";
import Footer from "../components/Footer";
import Header from "../components/Header";
import HelpSection from "../components/HelpSection";
import Team from "../components/Team";

function Layout () {
    return (
        <LayoutWrapper>
            <Header />
            <main>
                <About />
                <Download />
                <HelpSection />
                <Team />
                <Customer />
                <Blog />
                <Contacts />
            </main>
            <footer>
                <Footer />
            </footer>
        </LayoutWrapper>
    )
};

export default Layout;
