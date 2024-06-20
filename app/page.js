import Brochure from "@/app/office/page";
import Gallery from "@/app/gallery/page";
import Header from "@/components/Header";
import Home from "@/app/overview/page";
import LocationMap from "@/app/location/page";
import RegisterForm from "@/app/contact/page";
import Amenities from "@/app/amen/page";
import Footer from "@/components/Footer";
export default function page() {
  return (
    <>
     <Header/>
     <Home/>
     <Brochure/>
     <Amenities/>
     <LocationMap/>
     <Gallery/>
     <RegisterForm/>
     <Footer/>
    </>
     
      
  );
}
