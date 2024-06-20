// components/Amenities.js
import Image from 'next/image';
 
const amenitiesList = [
  '21 High Speed Elevators',
  'Separate Entrance for Office & Retail',
  'Steel Composite Building',
  'Multi-Level Car Parking',
  'Service Floor',
  'EV Charging Pods',
  'Green Sit Out Areas',
  'Indoor Air Quality',
  'Sustainable Materials',
  'Earthquake Resistance',
  'Green Spaces',
  'Grade A Offices',
  'Glass Facade',
  'Cycle Tracks',
  'Business Center'
];

const Amenities = () => {
  return (
    <div className="relative font-serif flex flex-col items-center bg-white py-10 px-4 md:mt-10">
      <Image
        src={"/bg1.jpg"}
        alt="Amenities Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
      <div className="relative z-10 w-full h-full flex flex-col items-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-8 text-center text-white">AMENITIES</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full px-4">
          {amenitiesList.map((amenity, index) => (
            <div
              key={index}
              className="border cursor-pointer transition-transform border-white p-4 text-white text-center bg-opacity-50 bg-black hover:bg-teal-500"
            >
              {amenity}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Amenities;
