import Navbar, {MobileNavbar} from "@/app/components/navbar/Navbar";
import Footer from "@/app/components/footer/Footer";
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
