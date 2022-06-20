import Header from "../components/Header";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

export default function Layout( { children }) {
    return (
        <>
            <Header />
            <Navbar />
            <main>{children}</main>
            <Footer />
        </>
    )
}