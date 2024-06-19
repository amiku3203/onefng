import Brochure from "@/components/Brochure";
import Gallery from "@/components/Gallery";
import Header from "@/components/Header";
 
import Home from "@/components/Home";
import LocationMap from "@/components/LocationMap";
import RegisterForm from "@/app/contact/page";
import Amenities from "@/components/amb";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <>
     <Header />
     <Home />
     <Brochure/>
     <Amenities />
     <LocationMap />
     <Gallery />
     <RegisterForm />
     <Footer />
    </>
     
      
  );
}
