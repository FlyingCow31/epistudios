import Navbar, {MobileNavbar} from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import {ContactForm} from "@/app/components/forms/contact/ContactForm";




export default function page() {
    return (
        <div>
            <MobileNavbar/>
            <Navbar/>
            <main>
                <ContactForm/>
            </main>
            <Footer/>
        </div>
    )
}
