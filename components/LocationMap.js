// components/LocationMap.js
import Image from 'next/image';
 

const LocationMap = () => {
  return (
    <>
    <h1 className="text-3xl font-serif mt-4 md:text-4xl font-bold mb-8 text-center">Location Map</h1>
    <div className="flex  font-serif flex-col md:flex-row items-center bg-white py-10 px-4 md:mt-10">
      
      <div className="relative w-full max-w-5xl mx-auto">
        <Image
          src={"/x.png"}
          alt="Location Map"
          layout="responsive"
          objectFit="cover"
          height={100}
          width={100}
          className="rounded-lg shadow-lg"
        />
      </div>
      <div className="mt-10 w-full max-w-5xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-center">Prime Location</h2>
        <p className="text-center mb-8 text-lg md:text-xl">Infinite Possibilities in Sector 142</p>
        <ul className="list-none space-y-4 text-gray-700">
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            Strategically situated alongside the Faridabad-Noida-Ghaziabad Expressway (FNG), ensuring efficient and expedited connectivity to diverse regions within the vicinity.
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            Located adjacent to Noida-Greater Noida Expressway, offering enhanced connectivity that further links to the Yamuna Expressway.
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            Only 16 km from the DND Flyway, offering easy access to Delhi.
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            Convenient proximity to the forthcoming Jewar International Airport.
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            35 km distance to the IGI International Airport in Delhi provides excellent connectivity for travelers and business ventures.
          </li>
          <li className="flex items-start">
            <span className="mr-2 text-orange-500">&rarr;</span>
            Strategic proximity to pivotal sectors including 82, 93, 100, 110, 137, and 168 offering convenient access to significant residential, commercial, and recreational amenities, enhancing your lifestyle with accessibility.
          </li>
        </ul>
      </div>
    </div>
    </>
   
  );
};

export default LocationMap;
