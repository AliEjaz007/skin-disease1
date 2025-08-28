// import React from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// // Fix default marker icon issue in React Leaflet
// delete L.Icon.Default.prototype._getIconUrl;
// L.Icon.Default.mergeOptions({
//   iconRetinaUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
//   iconUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
//   shadowUrl:
//     'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
// });

// const dummyLocations = [
//   { id: 1, title: 'Mayo Hospital', latitude: 31.582045, longitude: 74.329376 },
//   { id: 2, title: 'Jinnah Hospital', latitude: 31.483889, longitude: 74.303611 },
//   { id: 3, title: 'Services Hospital', latitude: 31.509197, longitude: 74.316039 },
//   { id: 4, title: 'Shaukat Khanum Hospital', latitude: 31.467897, longitude: 74.265610 },
//   { id: 5, title: 'General Hospital', latitude: 31.517200, longitude: 74.320000 },
//   { id: 6, title: 'Punjab Institute of Cardiology', latitude: 31.540084, longitude: 74.343254 },
//   { id: 7, title: 'Fatima Memorial Hospital', latitude: 31.524200, longitude: 74.350300 },
//   { id: 8, title: 'Hameed Latif Hospital', latitude: 31.493168, longitude: 74.339127 },
//   { id: 9, title: 'Gulab Devi Hospital', latitude: 31.491159, longitude: 74.313503 },
//   { id: 10, title: 'Ittefaq Hospital', latitude: 31.471621, longitude: 74.333921 },
// ];

// function App() {
//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <MapContainer center={[31.5204, 74.3587]} zoom={12} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {dummyLocations.map(location => (
//           <Marker key={location.id} position={[location.latitude, location.longitude]}>
//             <Popup>{location.title}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default App;







// import React, { useEffect, useState } from 'react';
// import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';
// import L from 'leaflet';

// import iconUrl from 'leaflet/dist/images/marker-icon.png';
// import iconShadow from 'leaflet/dist/images/marker-shadow.png';

// // Fix marker icon issue
// const defaultIcon = L.icon({
//   iconUrl,
//   shadowUrl: iconShadow,
//   iconAnchor: [12, 41],
// });
// L.Marker.prototype.options.icon = defaultIcon;

// const dummyAPIResponse = [
//   { id: 1, title: 'Mayo Hospital', latitude: 31.582045, longitude: 74.329376 },
//   { id: 2, title: 'Jinnah Hospital', latitude: 31.483889, longitude: 74.303611 },
//   { id: 3, title: 'Services Hospital', latitude: 31.509197, longitude: 74.316039 },
//   { id: 4, title: 'Shaukat Khanum Hospital', latitude: 31.467897, longitude: 74.265610 },
//   { id: 5, title: 'General Hospital', latitude: 31.517200, longitude: 74.320000 },
//   { id: 6, title: 'Punjab Institute of Cardiology', latitude: 31.540084, longitude: 74.343254 },
//   { id: 7, title: 'Fatima Memorial Hospital', latitude: 31.524200, longitude: 74.350300 },
//   { id: 8, title: 'Hameed Latif Hospital', latitude: 31.493168, longitude: 74.339127 },
//   { id: 9, title: 'Gulab Devi Hospital', latitude: 31.491159, longitude: 74.313503 },
//   { id: 10, title: 'Ittefaq Hospital', latitude: 31.471621, longitude: 74.333921 },
// ];

// function App() {
//   const [locations, setLocations] = useState([]);
//   const [searchText, setSearchText] = useState('');

//   // Simulate fetching from API
//   useEffect(() => {
//     setTimeout(() => {
//       setLocations(dummyAPIResponse);
//     }, 1000); // simulate delay
//   }, []);

//   const filteredLocations = locations.filter(loc =>
//     loc.title.toLowerCase().includes(searchText.toLowerCase())
//   );

//   return (
//     <div style={{ height: '100vh', width: '100%' }}>
//       <div style={{ padding: '10px', position: 'absolute', zIndex: 1000 }}>
//         <input
//           type="text"
//           placeholder="Search hospitals..."
//           onChange={(e) => setSearchText(e.target.value)}
//           style={{
//             padding: '8px',
//             borderRadius: '4px',
//             border: '1px solid #ccc',
//             width: '250px'
//           }}
//         />
//       </div>

//       <MapContainer center={[31.5204, 74.3587]} zoom={12} style={{ height: '100%', width: '100%' }}>
//         <TileLayer
//           attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
//           url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
//         />
//         {filteredLocations.map((location) => (
//           <Marker
//             key={location.id}
//             position={[location.latitude, location.longitude]}
//           >
//             <Popup>{location.title}</Popup>
//           </Marker>
//         ))}
//       </MapContainer>
//     </div>
//   );
// }

// export default App;




//==================================================== SAHIL 
import React, { useState } from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import './MapLocation.css';
import L from 'leaflet';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';


const dummyLocations = [

//  Lahore Locations (200)
 { id: 1, title: 'Mayo Hospital', latitude: 31.582045, longitude: 74.329376, rating: 4.2, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Hospital Road, Lahore', facilityType: 'Government' },
 { id: 2, title: 'Jinnah Hospital', latitude: 31.483889, longitude: 74.303611, rating: 4.0, doctor: 'Dr. Imran Malik', specialty: 'Dermatology', address: 'Allama Iqbal Town, Lahore', facilityType: 'Government' },
 { id: 3, title: 'Services Hospital', latitude: 31.509197, longitude: 74.316039, rating: 3.8, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'Ghaus-ul-Azam Road, Lahore', facilityType: 'Government' },
 { id: 4, title: 'Shaukat Khanum Hospital', latitude: 31.467897, longitude: 74.265610, rating: 4.5, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 5, title: 'General Hospital', latitude: 31.517200, longitude: 74.320000, rating: 3.9, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Ferozepur Road, Lahore', facilityType: 'Government' },
 { id: 6, title: 'Punjab Institute of Cardiology', latitude: 31.540084, longitude: 74.343254, rating: 4.1, doctor: 'Dr. Ali Raza', specialty: 'Dermatology', address: 'Jail Road, Lahore', facilityType: 'Government' },
 { id: 7, title: 'Fatima Memorial Hospital', latitude: 31.524200, longitude: 74.350300, rating: 4.3, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Shadman, Lahore', facilityType: 'Private' },
 { id: 8, title: 'Hameed Latif Hospital', latitude: 31.493168, longitude: 74.339127, rating: 4.4, doctor: 'Dr. Usman Haider', specialty: 'Cosmetic Dermatology', address: 'Garden Town, Lahore', facilityType: 'Private' },
 { id: 9, title: 'Gulab Devi Hospital', latitude: 31.491159, longitude: 74.313503, rating: 3.7, doctor: 'Dr. Nida Aslam', specialty: 'Dermatology', address: 'Ferozepur Road, Lahore', facilityType: 'Government' },
 { id: 10, title: 'Ittefaq Hospital', latitude: 31.471621, longitude: 74.333921, rating: 4.0, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 11, title: 'Doctors Hospital Lahore', latitude: 31.5080, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Asim Riaz', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 12, title: 'Cosmetique Clinic Lahore', latitude: 31.4710, longitude: 74.3720, rating: 4.8, doctor: 'Dr. Azim Jahangir', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 4, Lahore', facilityType: 'Private' },
 { id: 13, title: 'Lahore Skin Clinic', latitude: 31.5200, longitude: 74.3580, rating: 4.6, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Gulberg III, Lahore', facilityType: 'Private' },
 { id: 14, title: 'Skin & Laser Center Lahore', latitude: 31.5100, longitude: 74.3400, rating: 4.5, doctor: 'Dr. Zara Ali', specialty: 'Dermatopathology', address: 'Canal Bank Road, Lahore', facilityType: 'Private' },
 { id: 15, title: 'DHA Medical Centre', latitude: 31.4750, longitude: 74.3750, rating: 4.3, doctor: 'Dr. Kamran Butt', specialty: 'Dermatology', address: 'DHA Phase 5, Lahore', facilityType: 'Private' },
 { id: 16, title: 'National Hospital & Medical Centre', latitude: 31.4890, longitude: 74.3750, rating: 4.4, doctor: 'Dr. Nabeel Aslam', specialty: 'Pediatric Dermatology', address: 'DHA Phase 1, Lahore', facilityType: 'Private' },
 { id: 17, title: 'Skin Perfection Clinic', latitude: 31.5150, longitude: 74.3500, rating: 4.7, doctor: 'Dr. Amina Rehman', specialty: 'Cosmetic Dermatology', address: 'Gulberg II, Lahore', facilityType: 'Private' },
 { id: 18, title: 'Lahore General Hospital', latitude: 31.5170, longitude: 74.3200, rating: 3.9, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'Ferozepur Road, Lahore', facilityType: 'Government' },
 { id: 19, title: 'Aesthetic Skin Care Lahore', latitude: 31.5050, longitude: 74.3300, rating: 4.6, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 20, title: 'Farooq Hospital', latitude: 31.4800, longitude: 74.3000, rating: 4.1, doctor: 'Dr. Hira Naveed', specialty: 'Dermatology', address: 'Allama Iqbal Town, Lahore', facilityType: 'Private' },
 { id: 21, title: 'Skin Solutions Clinic', latitude: 31.5250, longitude: 74.3550, rating: 4.5, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatopathology', address: 'Shadman II, Lahore', facilityType: 'Private' },
 { id: 22, title: 'Evercare Hospital Lahore', latitude: 31.4620, longitude: 74.3600, rating: 4.4, doctor: 'Dr. Sana Mirza', specialty: 'Dermatology', address: 'DHA Phase 8, Lahore', facilityType: 'Private' },
 { id: 23, title: 'Skin Glow Clinic', latitude: 31.4900, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 24, title: 'Dr. Shehla’s Skin Clinic', latitude: 31.5000, longitude: 74.3100, rating: 4.7, doctor: 'Dr. Shehla Naz', specialty: 'Dermatology', address: 'Faisal Town, Lahore', facilityType: 'Private' },
 { id: 25, title: 'Lahore Medical City', latitude: 31.4850, longitude: 74.2950, rating: 4.2, doctor: 'Dr. Zohaib Rana', specialty: 'Pediatric Dermatology', address: 'Allama Iqbal Town, Lahore', facilityType: 'Private' },
 { id: 26, title: 'Sir Ganga Ram Hospital', latitude: 31.5500, longitude: 74.3200, rating: 3.8, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Dermatology', address: 'Queens Road, Lahore', facilityType: 'Government' },
 { id: 27, title: 'Dr. Zain’s Dermatology Clinic', latitude: 31.4700, longitude: 74.3800, rating: 4.5, doctor: 'Dr. Zain Haider', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 3, Lahore', facilityType: 'Private' },
 { id: 28, title: 'Al-Noor Skin Clinic', latitude: 31.5200, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Noor Fatima', specialty: 'Dermatology', address: 'Gulberg V, Lahore', facilityType: 'Private' },
 { id: 29, title: 'Skin & Hair Clinic Lahore', latitude: 31.4950, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Talha Rizwan', specialty: 'Dermatopathology', address: 'Model Town Extension, Lahore', facilityType: 'Private' },
 { id: 30, title: 'Shalamar Hospital', latitude: 31.5700, longitude: 74.3800, rating: 4.0, doctor: 'Dr. Amna Javed', specialty: 'Dermatology', address: 'Shalimar Link Road, Lahore', facilityType: 'Private' },
 { id: 31, title: 'Dr. Fatima’s Skin Care', latitude: 31.5100, longitude: 74.3550, rating: 4.6, doctor: 'Dr. Fatima Zahid', specialty: 'Cosmetic Dermatology', address: 'Gulberg IV, Lahore', facilityType: 'Private' },
 { id: 32, title: 'Akhter Skin Clinic', latitude: 31.4800, longitude: 74.3100, rating: 4.3, doctor: 'Dr. Akhter Saeed', specialty: 'Dermatology', address: 'Township, Lahore', facilityType: 'Private' },
 { id: 33, title: 'Masood Hospital', latitude: 31.4920, longitude: 74.3310, rating: 4.2, doctor: 'Dr. Mariam Asif', specialty: 'Dermatology', address: 'Garden Town, Lahore', facilityType: 'Private' },
 { id: 34, title: 'Dr. Hassan’s Aesthetic Studio', latitude: 31.4650, longitude: 74.3700, rating: 4.7, doctor: 'Dr. Hassan Rauf', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 6, Lahore', facilityType: 'Private' },
 { id: 35, title: 'Skin First Clinic', latitude: 31.4850, longitude: 74.3400, rating: 4.5, doctor: 'Dr. Rabia Khan', specialty: 'Dermatopathology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 36, title: 'Dr. Ali’s Skin & Laser', latitude: 31.5150, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Ali Hamza', specialty: 'Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 37, title: 'Lahore Dermatology Centre', latitude: 31.5300, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sobia Malik', specialty: 'Cosmetic Dermatology', address: 'Shadman I, Lahore', facilityType: 'Private' },
 { id: 38, title: 'Al-Shafi Hospital', latitude: 31.4850, longitude: 74.2850, rating: 4.1, doctor: 'Dr. Usama Khan', specialty: 'Dermatology', address: 'Allama Iqbal Town, Lahore', facilityType: 'Private' },
 { id: 39, title: 'Dr. Noor’s Skin Studio', latitude: 31.4750, longitude: 74.3650, rating: 4.5, doctor: 'Dr. Noor Ahmed', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 7, Lahore', facilityType: 'Private' },
 { id: 40, title: 'Skin Essence Clinic', latitude: 31.4950, longitude: 74.3150, rating: 4.4, doctor: 'Dr. Ayesha Riaz', specialty: 'Dermatology', address: 'Faisal Town, Lahore', facilityType: 'Private' },
 { id: 41, title: 'Dr. Salman’s Skin Care', latitude: 31.5250, longitude: 74.3350, rating: 4.3, doctor: 'Dr. Salman Butt', specialty: 'Dermatopathology', address: 'Gulberg I, Lahore', facilityType: 'Private' },
 { id: 42, title: 'Iqra Medical Complex', latitude: 31.4700, longitude: 74.3550, rating: 4.2, doctor: 'Dr. Hania Khan', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 43, title: 'Dr. Mehwish’s Aesthetic Clinic', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Mehwish Ali', specialty: 'Cosmetic Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 44, title: 'Lahore Care Hospital', latitude: 31.5150, longitude: 74.3100, rating: 4.1, doctor: 'Dr. Fahad Qureshi', specialty: 'Dermatology', address: 'Ferozepur Road, Lahore', facilityType: 'Private' },
 { id: 45, title: 'Dr. Ayesha’s Skin Lounge', latitude: 31.4800, longitude: 74.3700, rating: 4.5, doctor: 'Dr. Ayesha Farooq', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 2, Lahore', facilityType: 'Private' },
 { id: 46, title: 'Skin Harmony Clinic', latitude: 31.4900, longitude: 74.3050, rating: 4.4, doctor: 'Dr. Zainab Akram', specialty: 'Dermatology', address: 'Township, Lahore', facilityType: 'Private' },
 { id: 47, title: 'Dr. Umar’s Dermatology Hub', latitude: 31.5100, longitude: 74.3650, rating: 4.3, doctor: 'Dr. Umar Farooq', specialty: 'Dermatopathology', address: 'Gulberg VI, Lahore', facilityType: 'Private' },
 { id: 48, title: 'Surgimed Hospital', latitude: 31.5350, longitude: 74.3450, rating: 4.2, doctor: 'Dr. Nadia Khan', specialty: 'Dermatology', address: 'Zafar Ali Road, Lahore', facilityType: 'Private' },
 { id: 49, title: 'Dr. Saad’s Skin & Laser', latitude: 31.4650, longitude: 74.3500, rating: 4.6, doctor: 'Dr. Saad Ahmed', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 9, Lahore', facilityType: 'Private' },
 { id: 50, title: 'Lahore Aesthetic Clinic', latitude: 31.4950, longitude: 74.3350, rating: 4.5, doctor: 'Dr. Sana Iqbal', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 51, title: 'Dr. Hina’s Skin Care', latitude: 31.5200, longitude: 74.3200, rating: 4.4, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'Shadman III, Lahore', facilityType: 'Private' },
 { id: 52, title: 'Bahria International Hospital', latitude: 31.4500, longitude: 74.3500, rating: 4.3, doctor: 'Dr. Ahmed Raza', specialty: 'Dermatology', address: 'Bahria Town, Lahore', facilityType: 'Private' },
 { id: 53, title: 'Dr. Aliya’s Skin Studio', latitude: 31.4750, longitude: 74.3550, rating: 4.6, doctor: 'Dr. Aliya Khan', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 4, Lahore', facilityType: 'Private' },
 { id: 54, title: 'Skin Vitality Clinic', latitude: 31.4850, longitude: 74.3200, rating: 4.5, doctor: 'Dr. Faizan Ahmed', specialty: 'Dermatology', address: 'Township, Lahore', facilityType: 'Private' },
 { id: 55, title: 'Dr. Rabia’s Dermatology Centre', latitude: 31.5100, longitude: 74.3300, rating: 4.4, doctor: 'Dr. Rabia Saeed', specialty: 'Dermatopathology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 56, title: 'Lahore Wellness Clinic', latitude: 31.5300, longitude: 74.3500, rating: 4.3, doctor: 'Dr. Ammar Khan', specialty: 'Dermatology', address: 'Gulberg VII, Lahore', facilityType: 'Private' },
 { id: 57, title: 'Dr. Zara’s Skin Lounge', latitude: 31.4650, longitude: 74.3650, rating: 4.6, doctor: 'Dr. Zara Malik', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 10, Lahore', facilityType: 'Private' },
 { id: 58, title: 'Skin Radiance Clinic', latitude: 31.4900, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Saima Khan', specialty: 'Dermatology', address: 'Faisal Town, Lahore', facilityType: 'Private' },
 { id: 59, title: 'Dr. Bilal’s Aesthetic Hub', latitude: 31.5150, longitude: 74.3350, rating: 4.4, doctor: 'Dr. Bilal Riaz', specialty: 'Cosmetic Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 60, title: 'Aadil Hospital', latitude: 31.4750, longitude: 74.3450, rating: 4.2, doctor: 'Dr. Ayesha Akram', specialty: 'Dermatology', address: 'DHA Phase 1, Lahore', facilityType: 'Private' },
 { id: 61, title: 'Dr. Sana’s Skin Care', latitude: 31.5050, longitude: 74.3100, rating: 4.6, doctor: 'Dr. Sana Riaz', specialty: 'Cosmetic Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 62, title: 'Skin Elegance Clinic', latitude: 31.5250, longitude: 74.3400, rating: 4.5, doctor: 'Dr. Usman Ali', specialty: 'Dermatology', address: 'Gulberg VIII, Lahore', facilityType: 'Private' },
 { id: 63, title: 'Dr. Ahmed’s Dermatology Studio', latitude: 31.4800, longitude: 74.3550, rating: 4.4, doctor: 'Dr. Ahmed Saeed', specialty: 'Dermatopathology', address: 'DHA Phase 5, Lahore', facilityType: 'Private' },
 { id: 64, title: 'Lahore Skin Wellness', latitude: 31.4900, longitude: 74.3250, rating: 4.3, doctor: 'Dr. Mariam Khan', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 65, title: 'Dr. Faiza’s Skin Lounge', latitude: 31.5150, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Faiza Ahmed', specialty: 'Cosmetic Dermatology', address: 'Shadman IV, Lahore', facilityType: 'Private' },
 { id: 66, title: 'Skin Balance Clinic', latitude: 31.4700, longitude: 74.3650, rating: 4.5, doctor: 'Dr. Zainab Riaz', specialty: 'Dermatology', address: 'DHA Phase 6, Lahore', facilityType: 'Private' },
 { id: 67, title: 'Dr. Kamran’s Dermatology Hub', latitude: 31.4950, longitude: 74.3100, rating: 4.4, doctor: 'Dr. Kamran Ali', specialty: 'Cosmetic Dermatology', address: 'Faisal Town, Lahore', facilityType: 'Private' },
 { id: 68, title: 'Lahore Aesthetic Hub', latitude: 31.5250, longitude: 74.3300, rating: 4.3, doctor: 'Dr. Ayesha Malik', specialty: 'Dermatology', address: 'Gulberg IX, Lahore', facilityType: 'Private' },
 { id: 69, title: 'Dr. Nabeel’s Skin Care', latitude: 31.4800, longitude: 74.3400, rating: 4.6, doctor: 'Dr. Nabeel Ahmed', specialty: 'Cosmetic Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 70, title: 'Skin Renewal Clinic', latitude: 31.5050, longitude: 74.3250, rating: 4.5, doctor: 'Dr. Sobia Riaz', specialty: 'Dermatology', address: 'Model Town, Lahore', facilityType: 'Private' },
 { id: 71, title: 'Dr. Arif’s Dermatology Centre', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Arif Malik', specialty: 'Dermatopathology', address: 'DHA Phase 7, Lahore', facilityType: 'Private' },
 { id: 72, title: 'Lahore Skin Harmony', latitude: 31.4900, longitude: 74.3350, rating: 4.3, doctor: 'Dr. Hira Ahmed', specialty: 'Dermatology', address: 'Gulberg X, Lahore', facilityType: 'Private' },
 { id: 73, title: 'Dr. Sana’s Aesthetic Studio', latitude: 31.4750, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Khan', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 8, Lahore', facilityType: 'Private' },
 { id: 74, title: 'Skin Clarity Clinic', latitude: 31.5100, longitude: 74.3200, rating: 4.5, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 75, title: 'Dr. Amina’s Skin Lounge', latitude: 31.5250, longitude: 74.3100, rating: 4.4, doctor: 'Dr. Amina Khan', specialty: 'Cosmetic Dermatology', address: 'Shadman V, Lahore', facilityType: 'Private' },
 { id: 76, title: 'Lahore Skin Radiance', latitude: 31.4800, longitude: 74.3650, rating: 4.3, doctor: 'Dr. Usman Riaz', specialty: 'Dermatology', address: 'DHA Phase 9, Lahore', facilityType: 'Private' },
 { id: 77, title: 'Dr. Zara’s Dermatology Hub', latitude: 31.4950, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Zara Ahmed', specialty: 'Cosmetic Dermatology', address: 'Faisal Town, Lahore', facilityType: 'Private' },
 { id: 78, title: 'Skin Bliss Clinic', latitude: 31.5150, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Gulberg XI, Lahore', facilityType: 'Private' },
 { id: 79, title: 'Dr. Saad’s Aesthetic Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.4, doctor: 'Dr. Saad Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 10, Lahore', facilityType: 'Private' },
 { id: 80, title: 'Lahore Skin Elegance', latitude: 31.5050, longitude: 74.3350, rating: 4.3, doctor: 'Dr. Hina Saeed', specialty: 'Dermatology', address: 'Johar Town, Lahore', facilityType: 'Private' },
 { id: 81, title: 'Dr. Fatima’s Skin Studio', latitude: 31.4850, longitude: 74.3500, rating: 4.6, doctor: 'Dr. Fatima Khan', specialty: 'Cosmetic Dermatology', address: 'Gulberg XII, Lahore', facilityType: 'Private' },
 { id: 82, title: 'Skin Harmony Lahore', latitude: 31.4700, longitude: 74.3400, rating: 4.5, doctor: 'Dr. Imran Riaz', specialty: 'Dermatology', address: 'DHA Phase 11, Lahore', facilityType: 'Private' },
 { id: 83, title: 'Dr. Ayesha’s Dermatology Hub', latitude: 31.5100, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Ayesha Malik', specialty: 'Cosmetic Dermatology', address: 'Model Town Link Road, Lahore', facilityType: 'Private' },
 { id: 84, title: 'Lahore Skin Vitality', latitude: 31.5250, longitude: 74.3150, rating: 4.3, doctor: 'Dr. Usman Saeed', specialty: 'Dermatopathology', address: 'Shalimar Bagh, Lahore', facilityType: 'Private' },
 { id: 85, title: 'Dr. Sana’s Aesthetic Lounge', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Bahria Town Phase 1, Lahore', facilityType: 'Private' },
 { id: 86, title: 'Skin Radiance Centre', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Bilal Khan', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Extension, Lahore', facilityType: 'Private' },
 { id: 87, title: 'Dr. Zara’s Skin Care', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Dermatology', address: 'Gulberg XIII, Lahore', facilityType: 'Private' },
 { id: 88, title: 'Lahore Dermatology Clinic', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Faizan Malik', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 12, Lahore', facilityType: 'Private' },
 { id: 89, title: 'Dr. Hina’s Skin Studio', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Butt', specialty: 'Dermatology', address: 'Township Sector D, Lahore', facilityType: 'Private' },
 { id: 90, title: 'Skin Elegance Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Ayesha Saeed', specialty: 'Cosmetic Dermatology', address: 'Shadman VI, Lahore', facilityType: 'Private' },
 { id: 91, title: 'Dr. Usman’s Dermatology Centre', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Khan', specialty: 'Dermatopathology', address: 'DHA Phase 13, Lahore', facilityType: 'Private' },
 { id: 92, title: 'Lahore Skin Bliss', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Sana Riaz', specialty: 'Dermatology', address: 'Bahria Town Phase 2, Lahore', facilityType: 'Private' },
 { id: 93, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Gulberg XIV, Lahore', facilityType: 'Private' },
 { id: 94, title: 'Skin Harmony Clinic', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Faisal Town Block B, Lahore', facilityType: 'Private' },
 { id: 95, title: 'Dr. Faizan’s Skin Lounge', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Model Town Extension, Lahore', facilityType: 'Private' },
 { id: 96, title: 'Lahore Skin Vitality Centre', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Shalimar Garden, Lahore', facilityType: 'Private' },
 { id: 97, title: 'Dr. Sana’s Dermatology Hub', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 14, Lahore', facilityType: 'Private' },
 { id: 98, title: 'Skin Radiance Studio', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Bahria Town Phase 3, Lahore', facilityType: 'Private' },
 { id: 99, title: 'Dr. Zara’s Aesthetic Clinic', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Ahmed', specialty: 'Cosmetic Dermatology', address: 'Gulberg XV, Lahore', facilityType: 'Private' },
 { id: 100, title: 'Lahore Skin Care Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Riaz', specialty: 'Dermatology', address: 'Faisal Town Block C, Lahore', facilityType: 'Private' },
 { id: 101, title: 'Dr. Hina’s Skin Lounge', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'Shadman VII, Lahore', facilityType: 'Private' },
 { id: 102, title: 'Skin Bliss Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Khan', specialty: 'Dermatology', address: 'DHA Phase 15, Lahore', facilityType: 'Private' },
 { id: 103, title: 'Dr. Usman’s Dermatology Studio', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 4, Lahore', facilityType: 'Private' },
 { id: 104, title: 'Lahore Skin Elegance Clinic', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Gulberg XVI, Lahore', facilityType: 'Private' },
 { id: 105, title: 'Dr. Bilal’s Aesthetic Lounge', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Khan', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block D, Lahore', facilityType: 'Private' },
 { id: 106, title: 'Skin Harmony Centre', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Shalimar Town, Lahore', facilityType: 'Private' },
 { id: 107, title: 'Dr. Faizan’s Skin Studio', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 16, Lahore', facilityType: 'Private' },
 { id: 108, title: 'Lahore Skin Vitality Hub', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Bahria Town Phase 5, Lahore', facilityType: 'Private' },
 { id: 109, title: 'Dr. Sana’s Dermatology Lounge', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Gulberg XVII, Lahore', facilityType: 'Private' },
 { id: 110, title: 'Skin Radiance Clinic', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Faisal Town Block E, Lahore', facilityType: 'Private' },
 { id: 111, title: 'Dr. Zara’s Aesthetic Hub', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Shadman VIII, Lahore', facilityType: 'Private' },
 { id: 112, title: 'Lahore Skin Care Studio', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'DHA Phase 17, Lahore', facilityType: 'Private' },
 { id: 113, title: 'Dr. Hina’s Skin Centre', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 6, Lahore', facilityType: 'Private' },
 { id: 114, title: 'Skin Bliss Lounge', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Gulberg XVIII, Lahore', facilityType: 'Private' },
 { id: 115, title: 'Dr. Usman’s Dermatology Hub', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block F, Lahore', facilityType: 'Private' },
 { id: 116, title: 'Lahore Skin Elegance Centre', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Shalimar Garden II, Lahore', facilityType: 'Private' },
 { id: 117, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 18, Lahore', facilityType: 'Private' },
 { id: 118, title: 'Skin Harmony Clinic', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Bahria Town Phase 7, Lahore', facilityType: 'Private' },
 { id: 119, title: 'Dr. Faizan’s Skin Lounge', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulberg XIX, Lahore', facilityType: 'Private' },
 { id: 120, title: 'Lahore Skin Vitality Centre', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Faisal Town Block G, Lahore', facilityType: 'Private' },
 { id: 121, title: 'Dr. Sana’s Dermatology Hub', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Shadman IX, Lahore', facilityType: 'Private' },
 { id: 122, title: 'Skin Radiance Studio', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'DHA Phase 19, Lahore', facilityType: 'Private' },
 { id: 123, title: 'Dr. Zara’s Aesthetic Clinic', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Ahmed', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 8, Lahore', facilityType: 'Private' },
 { id: 124, title: 'Lahore Skin Care Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Gulberg XX, Lahore', facilityType: 'Private' },
 { id: 125, title: 'Dr. Hina’s Skin Lounge', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block H, Lahore', facilityType: 'Private' },
 { id: 126, title: 'Skin Bliss Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Shalimar Garden III, Lahore', facilityType: 'Private' },
 { id: 127, title: 'Dr. Usman’s Dermatology Studio', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 20, Lahore', facilityType: 'Private' },
 { id: 128, title: 'Lahore Skin Elegance Clinic', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Bahria Town Phase 9, Lahore', facilityType: 'Private' },
 { id: 129, title: 'Dr. Bilal’s Aesthetic Lounge', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXI, Lahore', facilityType: 'Private' },
 { id: 130, title: 'Skin Harmony Centre', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Faisal Town Block I, Lahore', facilityType: 'Private' },
 { id: 131, title: 'Dr. Faizan’s Skin Studio', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Shadman X, Lahore', facilityType: 'Private' },
 { id: 132, title: 'Lahore Skin Vitality Hub', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'DHA Phase 21, Lahore', facilityType: 'Private' },
 { id: 133, title: 'Dr. Sana’s Dermatology Lounge', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 10, Lahore', facilityType: 'Private' },
 { id: 134, title: 'Skin Radiance Clinic', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Gulberg XXII, Lahore', facilityType: 'Private' },
 { id: 135, title: 'Dr. Zara’s Aesthetic Hub', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block J, Lahore', facilityType: 'Private' },
 { id: 136, title: 'Lahore Skin Care Studio', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Shalimar Garden IV, Lahore', facilityType: 'Private' },
 { id: 137, title: 'Dr. Hina’s Skin Centre', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 22, Lahore', facilityType: 'Private' },
 { id: 138, title: 'Skin Bliss Lounge', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Bahria Town Phase 11, Lahore', facilityType: 'Private' },
 { id: 139, title: 'Dr. Usman’s Dermatology Hub', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXIII, Lahore', facilityType: 'Private' },
 { id: 140, title: 'Lahore Skin Elegance Centre', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Faisal Town Block K, Lahore', facilityType: 'Private' },
 { id: 141, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Shadman XI, Lahore', facilityType: 'Private' },
 { id: 142, title: 'Skin Harmony Clinic', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'DHA Phase 23, Lahore', facilityType: 'Private' },
 { id: 143, title: 'Dr. Faizan’s Skin Lounge', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 12, Lahore', facilityType: 'Private' },
 { id: 144, title: 'Lahore Skin Vitality Centre', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Gulberg XXIV, Lahore', facilityType: 'Private' },
 { id: 145, title: 'Dr. Sana’s Dermatology Hub', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block L, Lahore', facilityType: 'Private' },
 { id: 146, title: 'Skin Radiance Studio', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Shalimar Garden V, Lahore', facilityType: 'Private' },
 { id: 147, title: 'Dr. Zara’s Aesthetic Clinic', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 24, Lahore', facilityType: 'Private' },
 { id: 148, title: 'Lahore Skin Care Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Bahria Town Phase 13, Lahore', facilityType: 'Private' },
 { id: 149, title: 'Dr. Hina’s Skin Lounge', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXV, Lahore', facilityType: 'Private' },
 { id: 150, title: 'Skin Bliss Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Faisal Town Block M, Lahore', facilityType: 'Private' },
 { id: 151, title: 'Dr. Usman’s Dermatology Studio', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Shadman XII, Lahore', facilityType: 'Private' },
 { id: 152, title: 'Lahore Skin Elegance Clinic', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'DHA Phase 25, Lahore', facilityType: 'Private' },
 { id: 153, title: 'Dr. Bilal’s Aesthetic Lounge', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 14, Lahore', facilityType: 'Private' },
 { id: 154, title: 'Skin Harmony Centre', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Gulberg XXVI, Lahore', facilityType: 'Private' },
 { id: 155, title: 'Dr. Faizan’s Skin Studio', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block N, Lahore', facilityType: 'Private' },
 { id: 156, title: 'Lahore Skin Vitality Hub', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Shalimar Garden VI, Lahore', facilityType: 'Private' },
 { id: 157, title: 'Dr. Sana’s Dermatology Lounge', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 26, Lahore', facilityType: 'Private' },
 { id: 158, title: 'Skin Radiance Clinic', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Bahria Town Phase 15, Lahore', facilityType: 'Private' },
 { id: 159, title: 'Dr. Zara’s Aesthetic Hub', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXVII, Lahore', facilityType: 'Private' },
 { id: 160, title: 'Lahore Skin Care Studio', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Faisal Town Block O, Lahore', facilityType: 'Private' },
 { id: 161, title: 'Dr. Hina’s Skin Centre', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'Shadman XIII, Lahore', facilityType: 'Private' },
 { id: 162, title: 'Skin Bliss Lounge', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'DHA Phase 27, Lahore', facilityType: 'Private' },
 { id: 163, title: 'Dr. Usman’s Dermatology Hub', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 16, Lahore', facilityType: 'Private' },
 { id: 164, title: 'Lahore Skin Elegance Centre', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Gulberg XXVIII, Lahore', facilityType: 'Private' },
 { id: 165, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block P, Lahore', facilityType: 'Private' },
 { id: 166, title: 'Skin Harmony Clinic', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Shalimar Garden VII, Lahore', facilityType: 'Private' },
 { id: 167, title: 'Dr. Faizan’s Skin Lounge', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 28, Lahore', facilityType: 'Private' },
 { id: 168, title: 'Lahore Skin Vitality Centre', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Bahria Town Phase 17, Lahore', facilityType: 'Private' },
 { id: 169, title: 'Dr. Sana’s Dermatology Hub', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXIX, Lahore', facilityType: 'Private' },
 { id: 170, title: 'Skin Radiance Studio', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Faisal Town Block Q, Lahore', facilityType: 'Private' },
 { id: 171, title: 'Dr. Zara’s Aesthetic Clinic', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Shadman XIV, Lahore', facilityType: 'Private' },
 { id: 172, title: 'Lahore Skin Care Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'DHA Phase 29, Lahore', facilityType: 'Private' },
 { id: 173, title: 'Dr. Hina’s Skin Lounge', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 18, Lahore', facilityType: 'Private' },
 { id: 174, title: 'Skin Bliss Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Gulberg XXX, Lahore', facilityType: 'Private' },
 { id: 175, title: 'Dr. Usman’s Dermatology Studio', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block R, Lahore', facilityType: 'Private' },
 { id: 176, title: 'Lahore Skin Elegance Clinic', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Shalimar Garden VIII, Lahore', facilityType: 'Private' },
 { id: 177, title: 'Dr. Bilal’s Aesthetic Lounge', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 30, Lahore', facilityType: 'Private' },
 { id: 178, title: 'Skin Harmony Centre', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Bahria Town Phase 19, Lahore', facilityType: 'Private' },
 { id: 179, title: 'Dr. Faizan’s Skin Studio', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXXI, Lahore', facilityType: 'Private' },
 { id: 180, title: 'Lahore Skin Vitality Hub', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'Faisal Town Block S, Lahore', facilityType: 'Private' },
 { id: 181, title: 'Dr. Sana’s Dermatology Lounge', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Shadman XV, Lahore', facilityType: 'Private' },
 { id: 182, title: 'Skin Radiance Clinic', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'DHA Phase 31, Lahore', facilityType: 'Private' },
 { id: 183, title: 'Dr. Zara’s Aesthetic Hub', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 20, Lahore', facilityType: 'Private' },
 { id: 184, title: 'Lahore Skin Care Studio', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Gulberg XXXII, Lahore', facilityType: 'Private' },
 { id: 185, title: 'Dr. Hina’s Skin Centre', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block T, Lahore', facilityType: 'Private' },
 { id: 186, title: 'Skin Bliss Lounge', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Shalimar Garden IX, Lahore', facilityType: 'Private' },
 { id: 187, title: 'Dr. Usman’s Dermatology Hub', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 32, Lahore', facilityType: 'Private' },
 { id: 188, title: 'Lahore Skin Elegance Centre', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Bahria Town Phase 21, Lahore', facilityType: 'Private' },
 { id: 189, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 31.5150, longitude: 74.3350, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXXIII, Lahore', facilityType: 'Private' },
 { id: 190, title: 'Skin Harmony Clinic', latitude: 31.4700, longitude: 74.3500, rating: 4.5, doctor: 'Dr. Zara Malik', specialty: 'Dermatology', address: 'Faisal Town Block U, Lahore', facilityType: 'Private' },
 { id: 191, title: 'Dr. Faizan’s Skin Lounge', latitude: 31.5050, longitude: 74.3250, rating: 4.4, doctor: 'Dr. Faizan Riaz', specialty: 'Cosmetic Dermatology', address: 'Shadman XVI, Lahore', facilityType: 'Private' },
 { id: 192, title: 'Lahore Skin Vitality Centre', latitude: 31.5250, longitude: 74.3200, rating: 4.3, doctor: 'Dr. Sana Ahmed', specialty: 'Dermatology', address: 'DHA Phase 33, Lahore', facilityType: 'Private' },
 { id: 193, title: 'Dr. Sana’s Dermatology Hub', latitude: 31.4800, longitude: 74.3600, rating: 4.6, doctor: 'Dr. Sana Iqbal', specialty: 'Cosmetic Dermatology', address: 'Bahria Town Phase 22, Lahore', facilityType: 'Private' },
 { id: 194, title: 'Skin Radiance Studio', latitude: 31.4950, longitude: 74.3300, rating: 4.5, doctor: 'Dr. Usman Saeed', specialty: 'Dermatology', address: 'Gulberg XXXIV, Lahore', facilityType: 'Private' },
 { id: 195, title: 'Dr. Zara’s Aesthetic Clinic', latitude: 31.5150, longitude: 74.3450, rating: 4.4, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Faisal Town Block V, Lahore', facilityType: 'Private' },
 { id: 196, title: 'Lahore Skin Care Centre', latitude: 31.4700, longitude: 74.3550, rating: 4.3, doctor: 'Dr. Bilal Khan', specialty: 'Dermatology', address: 'Shalimar Garden X, Lahore', facilityType: 'Private' },
 { id: 197, title: 'Dr. Hina’s Skin Lounge', latitude: 31.5050, longitude: 74.3200, rating: 4.6, doctor: 'Dr. Hina Malik', specialty: 'Cosmetic Dermatology', address: 'DHA Phase 34, Lahore', facilityType: 'Private' },
 { id: 198, title: 'Skin Bliss Hub', latitude: 31.5250, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Faizan Malik', specialty: 'Dermatology', address: 'Bahria Town Phase 23, Lahore', facilityType: 'Private' },
 { id: 199, title: 'Dr. Usman’s Dermatology Studio', latitude: 31.4800, longitude: 74.3650, rating: 4.4, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulberg XXXV, Lahore', facilityType: 'Private' },
 { id: 200, title: 'Lahore Skin Elegance Clinic', latitude: 31.4900, longitude: 74.3400, rating: 4.3, doctor: 'Dr. Ayesha Saeed', specialty: 'Dermatology', address: 'Faisal Town Block W, Lahore', facilityType: 'Private' },

 // Karachi Locations (50)
 { id: 201, title: 'Aga Khan University Hospital', latitude: 24.8918, longitude: 67.0748, rating: 4.6, doctor: 'Dr. Sadia Masood', specialty: 'Dermatology', address: 'Stadium Road, Karachi', facilityType: 'Private' },
 { id: 202, title: 'Civil Hospital Karachi', latitude: 24.8584, longitude: 67.0104, rating: 3.8, doctor: 'Dr. Farhan Ali', specialty: 'Dermatology', address: 'Mission Road, Karachi', facilityType: 'Government' },
 { id: 203, title: 'Liaquat National Hospital', latitude: 24.8945, longitude: 67.0681, rating: 4.3, doctor: 'Dr. Maria Khan', specialty: 'Cosmetic Dermatology', address: 'National Stadium Road, Karachi', facilityType: 'Private' },
 { id: 204, title: 'South City Hospital', latitude: 24.8237, longitude: 67.0405, rating: 4.5, doctor: 'Dr. Zainab Riaz', specialty: 'Dermatopathology', address: 'Clifton, Karachi', facilityType: 'Private' },
 { id: 205, title: 'Dr. Ziauddin Hospital', latitude: 24.8115, longitude: 67.0469, rating: 4.2, doctor: 'Dr. Ahmed Khan', specialty: 'Dermatology', address: 'Block 6, Clifton, Karachi', facilityType: 'Private' },
 { id: 206, title: 'Skin Care Clinic Karachi', latitude: 24.8600, longitude: 67.0600, rating: 4.4, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Cosmetic Dermatology', address: 'PECHS, Karachi', facilityType: 'Private' },
 { id: 207, title: 'Jinnah Postgraduate Medical Centre', latitude: 24.8500, longitude: 67.0500, rating: 3.9, doctor: 'Dr. Kamran Ali', specialty: 'Dermatology', address: 'Rafiqui Shaheed Road, Karachi', facilityType: 'Government' },
 { id: 208, title: 'Dr. Nida’s Skin Studio', latitude: 24.8200, longitude: 67.0300, rating: 4.6, doctor: 'Dr. Nida Rehman', specialty: 'Cosmetic Dermatology', address: 'Clifton Block 5, Karachi', facilityType: 'Private' },
 { id: 209, title: 'Karachi Skin & Laser', latitude: 24.8800, longitude: 67.0700, rating: 4.5, doctor: 'Dr. Saad Malik', specialty: 'Dermatology', address: 'Gulshan-e-Iqbal, Karachi', facilityType: 'Private' },
 { id: 210, title: 'Aesthetic Hub Karachi', latitude: 24.8300, longitude: 67.0400, rating: 4.4, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'Clifton Block 2, Karachi', facilityType: 'Private' },
 { id: 211, title: 'Dr. Zara’s Skin Care', latitude: 24.8700, longitude: 67.0600, rating: 4.3, doctor: 'Dr. Zara Khan', specialty: 'Dermatology', address: 'Gulshan-e-Iqbal Block 10, Karachi', facilityType: 'Private' },
 { id: 212, title: 'Skin Harmony Clinic', latitude: 24.8400, longitude: 67.0500, rating: 4.5, doctor: 'Dr. Faizan Ahmed', specialty: 'Cosmetic Dermatology', address: 'PECHS Block 6, Karachi', facilityType: 'Private' },
 { id: 213, title: 'Dr. Sana’s Dermatology Hub', latitude: 24.8600, longitude: 67.0800, rating: 4.4, doctor: 'Dr. Sana Riaz', specialty: 'Dermatology', address: 'North Nazimabad, Karachi', facilityType: 'Private' },
 { id: 214, title: 'Skin Radiance Studio', latitude: 24.8500, longitude: 67.0700, rating: 4.6, doctor: 'Dr. Bilal Saeed', specialty: 'Cosmetic Dermatology', address: 'Gulshan-e-Iqbal Block 13, Karachi', facilityType: 'Private' },
 { id: 215, title: 'Dr. Usman’s Skin Lounge', latitude: 24.8200, longitude: 67.0600, rating: 4.3, doctor: 'Dr. Usman Khan', specialty: 'Dermatology', address: 'Clifton Block 4, Karachi', facilityType: 'Private' },
 { id: 216, title: 'Karachi Skin Elegance', latitude: 24.8700, longitude: 67.0500, rating: 4.5, doctor: 'Dr. Ayesha Malik', specialty: 'Cosmetic Dermatology', address: 'PECHS Block 3, Karachi', facilityType: 'Private' },
 { id: 217, title: 'Dr. Bilal’s Aesthetic Studio', latitude: 24.8600, longitude: 67.0400, rating: 4.4, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatology', address: 'Gulshan-e-Iqbal Block 5, Karachi', facilityType: 'Private' },
 { id: 218, title: 'Skin Harmony Centre', latitude: 24.8300, longitude: 67.0700, rating: 4.6, doctor: 'Dr. Zara Riaz', specialty: 'Cosmetic Dermatology', address: 'Clifton Block 7, Karachi', facilitytype: 'Private' },

// Other Punjab Locations (2)
  { id: 219, title: 'Sargodha Dermatology', latitude: 32.0836, longitude: 72.6711, rating: 4.3, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'University Road, Sargodha', facilityType: 'Private' },
  { id: 220, title: 'Sahiwal Skin Clinic', latitude: 30.6657, longitude: 73.1083, rating: 4.4, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'High Street, Sahiwal', facilityType: 'Private' },

  // Bahawalpur Locations (5)
{ id: 221, title: 'Bahawalpur Skin Wellness', latitude: 29.3957, longitude: 71.6833, rating: 4.2, doctor: 'Dr. Saad Malik', specialty: 'Dermatology', address: 'Circular Road, Bahawalpur', facilityType: 'Private' },
{ id: 222, title: 'Victoria Hospital Dermatology', latitude: 29.4000, longitude: 71.6800, rating: 3.9, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'Model Town, Bahawalpur', facilityType: 'Government' },
{ id: 223, title: 'Skin Bliss Bahawalpur', latitude: 29.3980, longitude: 71.6850, rating: 4.4, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'University Road, Bahawalpur', facilityType: 'Private' },
{ id: 224, title: 'Dr. Shehla’s Skin Clinic', latitude: 29.3960, longitude: 71.6820, rating: 4.5, doctor: 'Dr. Shehla Naz', specialty: 'Dermatopathology', address: 'Satellite Town, Bahawalpur', facilityType: 'Private' },
{ id: 225, title: 'Bahawalpur Dermatology Hub', latitude: 29.3970, longitude: 71.6840, rating: 4.3, doctor: 'Dr. Nabeel Aslam', specialty: 'Cosmetic Dermatology', address: 'Dera Bakha Road, Bahawalpur', facilityType: 'Private' },

// Dera Ghazi Khan Locations (3)
{ id: 226, title: 'DG Khan Skin Care', latitude: 30.0456, longitude: 70.6391, rating: 4.4, doctor: 'Dr. Usman Haider', specialty: 'Dermatology', address: 'Jampur Road, Dera Ghazi Khan', facilityType: 'Private' },
{ id: 227, title: 'District Hospital DG Khan', latitude: 30.0500, longitude: 70.6350, rating: 3.7, doctor: 'Dr. Zohaib Rana', specialty: 'Dermatology', address: 'Hospital Chowk, Dera Ghazi Khan', facilityType: 'Government' },
{ id: 228, title: 'Skin First DG Khan', latitude: 30.0480, longitude: 70.6380, rating: 4.5, doctor: 'Dr. Sana Mirza', specialty: 'Cosmetic Dermatology', address: 'College Road, Dera Ghazi Khan', facilityType: 'Private' },

// Hyderabad Locations (10)
{ id: 229, title: 'Hyderabad Skin Clinic', latitude: 25.3960, longitude: 68.3578, rating: 4.5, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Auto Bhan Road, Hyderabad', facilityType: 'Private' },
{ id: 230, title: 'Civil Hospital Hyderabad', latitude: 25.4000, longitude: 68.3600, rating: 3.9, doctor: 'Dr. Imran Malik', specialty: 'Dermatology', address: 'Hali Road, Hyderabad', facilityType: 'Government' },
{ id: 231, title: 'Aesthetic Skin Hyderabad', latitude: 25.3920, longitude: 68.3550, rating: 4.6, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'Qasimabad, Hyderabad', facilityType: 'Private' },
{ id: 232, title: 'Dr. Faisal’s Dermatology Hub', latitude: 25.3980, longitude: 68.3590, rating: 4.4, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'Latifabad Unit 7, Hyderabad', facilityType: 'Private' },
{ id: 233, title: 'Skin Harmony Hyderabad', latitude: 25.3940, longitude: 68.3530, rating: 4.5, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Saddar, Hyderabad', facilityType: 'Private' },
{ id: 234, title: 'Radiance Skin Clinic', latitude: 25.3970, longitude: 68.3560, rating: 4.3, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Thandi Sarak, Hyderabad', facilityType: 'Private' },
{ id: 235, title: 'Dr. Nida’s Skin Lounge', latitude: 25.3900, longitude: 68.3500, rating: 4.6, doctor: 'Dr. Nida Aslam', specialty: 'Cosmetic Dermatology', address: 'Hussainabad, Hyderabad', facilityType: 'Private' },
{ id: 236, title: 'Hyderabad Dermatology Center', latitude: 25.3990, longitude: 68.3610, rating: 4.2, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Citizen Colony, Hyderabad', facilityType: 'Private' },
{ id: 237, title: 'Skin Perfection Hyderabad', latitude: 25.3950, longitude: 68.3580, rating: 4.4, doctor: 'Dr. Asim Riaz', specialty: 'Dermatopathology', address: 'Latifabad Unit 6, Hyderabad', facilityType: 'Private' },
{ id: 238, title: 'Dr. Maham’s Aesthetic Clinic', latitude: 25.3930, longitude: 68.3520, rating: 4.5, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Kohsar, Hyderabad', facilityType: 'Private' },

// Sukkur Locations (5)
{ id: 239, title: 'Sukkur Skin Care', latitude: 27.7052, longitude: 68.8574, rating: 4.3, doctor: 'Dr. Amina Rehman', specialty: 'Dermatology', address: 'Military Road, Sukkur', facilityType: 'Private' },
{ id: 240, title: 'Civil Hospital Sukkur', latitude: 27.7000, longitude: 68.8600, rating: 3.8, doctor: 'Dr. Kamran Butt', specialty: 'Dermatology', address: 'Station Road, Sukkur', facilityType: 'Government' },
{ id: 241, title: 'Skin Glow Sukkur', latitude: 27.7020, longitude: 68.8550, rating: 4.4, doctor: 'Dr. Zara Ali', specialty: 'Cosmetic Dermatology', address: 'Shikarpur Road, Sukkur', facilityType: 'Private' },
{ id: 242, title: 'Dr. Hira’s Dermatology Studio', latitude: 27.7060, longitude: 68.8580, rating: 4.5, doctor: 'Dr. Hira Naveed', specialty: 'Pediatric Dermatology', address: 'Queens Road, Sukkur', facilityType: 'Private' },
{ id: 243, title: 'Sukkur Aesthetic Lounge', latitude: 27.7040, longitude: 68.8560, rating: 4.6, doctor: 'Dr. Bilal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Minara Road, Sukkur', facilityType: 'Private' },

// Larkana Locations (5)
{ id: 244, title: 'Larkana Skin Wellness', latitude: 27.5580, longitude: 68.2140, rating: 4.2, doctor: 'Dr. Saad Malik', specialty: 'Dermatology', address: 'Bakrani Road, Larkana', facilityType: 'Private' },
{ id: 245, title: 'Chandka Medical College Hospital', latitude: 27.5600, longitude: 68.2100, rating: 3.9, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'VIP Road, Larkana', facilityType: 'Government' },
{ id: 246, title: 'Skin Bliss Larkana', latitude: 27.5560, longitude: 68.2160, rating: 4.4, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'Station Road, Larkana', facilityType: 'Private' },
{ id: 247, title: 'Dr. Shehla’s Skin Clinic', latitude: 27.5590, longitude: 68.2120, rating: 4.5, doctor: 'Dr. Shehla Naz', specialty: 'Dermatopathology', address: 'Ansari Muhalla, Larkana', facilityType: 'Private' },
{ id: 248, title: 'Larkana Dermatology Hub', latitude: 27.5570, longitude: 68.2150, rating: 4.3, doctor: 'Dr. Nabeel Aslam', specialty: 'Cosmetic Dermatology', address: 'Wagan Road, Larkana', facilityType: 'Private' },

// Nawabshah Locations (3)
{ id: 249, title: 'Nawabshah Skin Care', latitude: 26.2440, longitude: 68.4090, rating: 4.4, doctor: 'Dr. Usman Haider', specialty: 'Dermatology', address: 'Hospital Road, Nawabshah', facilityType: 'Private' },
{ id: 250, title: 'People’s Medical Hospital', latitude: 26.2400, longitude: 68.4100, rating: 3.8, doctor: 'Dr. Zohaib Rana', specialty: 'Dermatology', address: 'Sakrand Road, Nawabshah', facilityType: 'Government' },
{ id: 251, title: 'Skin First Nawabshah', latitude: 26.2420, longitude: 68.4070, rating: 4.5, doctor: 'Dr. Sana Mirza', specialty: 'Cosmetic Dermatology', address: 'Katchery Road, Nawabshah', facilityType: 'Private' },

// Mirpur Khas Locations (2)
{ id: 252, title: 'Mirpur Khas Dermatology', latitude: 25.5260, longitude: 69.0150, rating: 4.3, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Umerkot Road, Mirpur Khas', facilityType: 'Private' },
{ id: 253, title: 'Dr. Ali’s Aesthetic Hub', latitude: 25.5280, longitude: 69.0130, rating: 4.4, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Satellite Town, Mirpur Khas', facilityType: 'Private' },


 // Sialkot Locations (25)
 { id: 254, title: 'Khan Skin & Laser Center', latitude: 32.4945, longitude: 74.5229, rating: 4.6, doctor: 'Dr. Sadia Munir Rana', specialty: 'Cosmetic Dermatology', address: 'Commissioner Road, Sialkot', facilityType: 'Private' },
 { id: 255, title: 'Bashir Hospital Sialkot', latitude: 32.4978, longitude: 74.5365, rating: 4.4, doctor: 'Prof. Dr. Zahida Rani', specialty: 'Dermatology', address: 'Khadim Ali Road, Model Town, Sialkot', facilityType: 'Private' },
 { id: 256, title: 'Dermesthetic Clinic Sialkot', latitude: 32.4912, longitude: 74.5310, rating: 4.5, doctor: 'Dr. Komal Liaqat', specialty: 'Cosmetic Dermatology', address: 'Near Cantonment, Sialkot', facilityType: 'Private' },
 { id: 257, title: 'Khalida Memorial Hospital', latitude: 32.5050, longitude: 74.5100, rating: 4.3, doctor: 'Dr. Zareen Saqib Suleri', specialty: 'Dermatology', address: 'Cantt Road, Sialkot', facilityType: 'Private' },
 { id: 258, title: 'Sialkot Skin Care Clinic', latitude: 32.4900, longitude: 74.5200, rating: 4.2, doctor: 'Dr. Kiran Rafique', specialty: 'Pediatric Dermatology', address: 'Paris Road, Sialkot', facilityType: 'Private' },
 { id: 259, title: 'Allama Iqbal Memorial Hospital', latitude: 32.5010, longitude: 74.5400, rating: 3.9, doctor: 'Dr. Amir Habib', specialty: 'Dermatology', address: 'Jail Road, Sialkot', facilityType: 'Government' },
 { id: 260, title: 'Sialkot Dermatology Centre', latitude: 32.4950, longitude: 74.5250, rating: 4.4, doctor: 'Dr. Tahir Shehzad', specialty: 'Cosmetic Dermatology', address: 'Defence Road, Sialkot', facilityType: 'Private' },
 { id: 261, title: 'Skin Harmony Sialkot', latitude: 32.4880, longitude: 74.5150, rating: 4.5, doctor: 'Dr. Bashir Ahmed Bhatti', specialty: 'Dermatology', address: 'Ghazi Road, Sialkot', facilityType: 'Private' },
 { id: 262, title: 'Aesthetic Skin Sialkot', latitude: 32.4920, longitude: 74.5280, rating: 4.3, doctor: 'Dr. Maj. Muhammad Naeem', specialty: 'Cosmetic Dermatology', address: 'Aziz Shaheed Road, Sialkot', facilityType: 'Private' },
 { id: 263, title: 'Sialkot General Hospital', latitude: 32.4980, longitude: 74.5320, rating: 3.8, doctor: 'Dr. Saeed Nawaz', specialty: 'Dermatology', address: 'Church Road, Sialkot', facilityType: 'Government' },
 { id: 264, title: 'Dr. Ali’s Skin Studio', latitude: 32.4890, longitude: 74.5180, rating: 4.6, doctor: 'Dr. Muhammad Ali', specialty: 'Cosmetic Dermatology', address: 'Kashmir Road, Sialkot', facilityType: 'Private' },
 { id: 265, title: 'Skin Radiance Sialkot', latitude: 32.4940, longitude: 74.5240, rating: 4.4, doctor: 'Dr. Ayesha Malik', specialty: 'Dermatology', address: 'Saddar Bazar, Sialkot', facilityType: 'Private' },
 { id: 266, title: 'Sialkot Aesthetic Hub', latitude: 32.4870, longitude: 74.5140, rating: 4.5, doctor: 'Dr. Hina Butt', specialty: 'Cosmetic Dermatology', address: 'Rangpura Road, Sialkot', facilityType: 'Private' },
 { id: 267, title: 'Dr. Zara’s Skin Care', latitude: 32.4960, longitude: 74.5260, rating: 4.3, doctor: 'Dr. Zara Khan', specialty: 'Dermatology', address: 'Shahabpura Road, Sialkot', facilityType: 'Private' },
 { id: 268, title: 'Skin Elegance Sialkot', latitude: 32.4905, longitude: 74.5195, rating: 4.4, doctor: 'Dr. Faizan Ahmed', specialty: 'Cosmetic Dermatology', address: 'Wazirabad Road, Sialkot', facilityType: 'Private' },
 { id: 269, title: 'Sialkot Skin Wellness', latitude: 32.4935, longitude: 74.5235, rating: 4.2, doctor: 'Dr. Sana Riaz', specialty: 'Dermatology', address: 'Pasrur Road, Sialkot', facilityType: 'Private' },
 { id: 270, title: 'Dr. Bilal’s Dermatology Hub', latitude: 32.4885, longitude: 74.5165, rating: 4.5, doctor: 'Dr. Bilal Saeed', specialty: 'Cosmetic Dermatology', address: 'Daska Road, Sialkot', facilityType: 'Private' },
 { id: 271, title: 'Sialkot Skin Vitality', latitude: 32.4955, longitude: 74.5275, rating: 4.3, doctor: 'Dr. Usman Khan', specialty: 'Dermatology', address: 'Gohadpur Road, Sialkot', facilityType: 'Private' },
 { id: 272, title: 'Dr. Ayesha’s Skin Lounge', latitude: 32.4915, longitude: 74.5215, rating: 4.6, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Cosmetic Dermatology', address: 'Mughal Road, Sialkot', facilityType: 'Private' },
 { id: 273, title: 'Skin Bliss Sialkot', latitude: 32.4895, longitude: 74.5175, rating: 4.4, doctor: 'Dr. Kamran Ali', specialty: 'Dermatology', address: 'Haji Pura Road, Sialkot', facilityType: 'Private' },
 { id: 274, title: 'Sialkot Dermatology Studio', latitude: 32.4945, longitude: 74.5255, rating: 4.5, doctor: 'Dr. Nida Rehman', specialty: 'Cosmetic Dermatology', address: 'Sambrial Road, Sialkot', facilityType: 'Private' },
 { id: 275, title: 'Dr. Saad’s Skin Care', latitude: 32.4875, longitude: 74.5135, rating: 4.3, doctor: 'Dr. Saad Malik', specialty: 'Dermatology', address: 'Airport Road, Sialkot', facilityType: 'Private' },
 { id: 276, title: 'Sialkot Skin Harmony', latitude: 32.4925, longitude: 74.5225, rating: 4.4, doctor: 'Dr. Mariam Asif', specialty: 'Cosmetic Dermatology', address: 'Capital Road, Sialkot', facilityType: 'Private' },
 { id: 277, title: 'Dr. Hina’s Aesthetic Clinic', latitude: 32.4965, longitude: 74.5285, rating: 4.5, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Green Wood Street, Sialkot', facilityType: 'Private' },
 { id: 278, title: 'Sialkot Skin Perfection', latitude: 32.4900, longitude: 74.5200, rating: 4.3, doctor: 'Dr. Faisal Ahmed', specialty: 'Cosmetic Dermatology', address: 'Kutchery Road, Sialkot', facilityType: 'Private' },

 // Gujranwala Locations (25)
 { id: 279, title: 'Ali Family Clinic', latitude: 32.1540, longitude: 74.1840, rating: 4.4, doctor: 'Dr. Atiya Imran', specialty: 'Dermatology', address: 'Sialkot Road, Gujranwala', facilityType: 'Private' },
 { id: 280, title: 'Al-Shifa Future Hospital', latitude: 32.1610, longitude: 74.1900, rating: 4.3, doctor: 'Dr. Maria Anwar', specialty: 'Cosmetic Dermatology', address: 'Hospital Road, Gujranwala', facilityType: 'Private' },
 { id: 281, title: 'Winner Health Care', latitude: 32.1660, longitude: 74.1950, rating: 4.1, doctor: 'Dr. Warda Naeem', specialty: 'Dermatology', address: 'Wapda Town, Gujranwala', facilityType: 'Private' },
 { id: 282, title: 'Gujranwala Skin Clinic', latitude: 32.1580, longitude: 74.1870, rating: 4.5, doctor: 'Dr. Nabeela Cheema', specialty: 'Cosmetic Dermatology', address: 'Main Market Model Town, Gujranwala', facilityType: 'Private' },
 { id: 283, title: 'Chattha Hospital', latitude: 32.1520, longitude: 74.1820, rating: 4.2, doctor: 'Dr. Saif Ullah Chattha', specialty: 'Dermatology', address: 'Civil Lines, Gujranwala', facilityType: 'Private' },
 { id: 284, title: 'Gujranwala General Hospital', latitude: 32.1600, longitude: 74.1880, rating: 3.8, doctor: 'Dr. Saima Manzoor', specialty: 'Dermatology', address: 'Munir Chowk, Gujranwala', facilityType: 'Government' },
 { id: 285, title: 'Dr. Amjad Iqbal Clinic', latitude: 32.1550, longitude: 74.1850, rating: 4.4, doctor: 'Dr. Ayub Adil', specialty: 'Cosmetic Dermatology', address: 'Sialkot Road, Gujranwala', facilityType: 'Private' },
 { id: 286, title: 'Skin Radiance Gujranwala', latitude: 32.1570, longitude: 74.1860, rating: 4.5, doctor: 'Dr. Basharat Gill', specialty: 'Dermatology', address: 'Main College Road, Gujranwala', facilityType: 'Private' },
 { id: 287, title: 'Gujranwala Aesthetic Hub', latitude: 32.1590, longitude: 74.1890, rating: 4.3, doctor: 'Dr. Zara Malik', specialty: 'Cosmetic Dermatology', address: 'Wapda Town, Gujranwala', facilityType: 'Private' },
 { id: 288, title: 'Dr. Sana’s Skin Studio', latitude: 32.1530, longitude: 74.1830, rating: 4.6, doctor: 'Dr. Sana Riaz', specialty: 'Dermatology', address: 'Satellite Town, Gujranwala', facilityType: 'Private' },
 { id: 289, title: 'Skin Harmony Gujranwala', latitude: 32.1560, longitude: 74.1875, rating: 4.4, doctor: 'Dr. Faizan Ahmed', specialty: 'Cosmetic Dermatology', address: 'Jalil Town, Gujranwala', facilityType: 'Private' },
 { id: 290, title: 'Gujranwala Dermatology Centre', latitude: 32.1620, longitude: 74.1910, rating: 4.2, doctor: 'Dr. Usman Khan', specialty: 'Dermatology', address: 'Rahwali Cantt, Gujranwala', facilityType: 'Private' },
 { id: 291, title: 'Dr. Bilal’s Skin Lounge', latitude: 32.1545, longitude: 74.1845, rating: 4.5, doctor: 'Dr. Bilal Saeed', specialty: 'Cosmetic Dermatology', address: 'Peoples Colony, Gujranwala', facilityType: 'Private' },
 { id: 292, title: 'Gujranwala Skin Wellness', latitude: 32.1585, longitude: 74.1885, rating: 4.3, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Dermatology', address: 'G.T. Road, Gujranwala', facilityType: 'Private' },
 { id: 293, title: 'Skin Elegance Gujranwala', latitude: 32.1605, longitude: 74.1905, rating: 4.4, doctor: 'Dr. Kamran Ali', specialty: 'Cosmetic Dermatology', address: 'Model Town, Gujranwala', facilityType: 'Private' },
 { id: 294, title: 'Dr. Nida’s Dermatology Hub', latitude: 32.1525, longitude: 74.1825, rating: 4.5, doctor: 'Dr. Nida Rehman', specialty: 'Dermatology', address: 'Civil Lines, Gujranwala', facilityType: 'Private' },
 { id: 295, title: 'Gujranwala Skin Vitality', latitude: 32.1555, longitude: 74.1855, rating: 4.3, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Wapda Town, Gujranwala', facilityType: 'Private' },
 { id: 296, title: 'Dr. Hina’s Aesthetic Studio', latitude: 32.1575, longitude: 74.1875, rating: 4.6, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Satellite Town, Gujranwala', facilityType: 'Private' },
 { id: 297, title: 'Skin Bliss Gujranwala', latitude: 32.1595, longitude: 74.1895, rating: 4.4, doctor: 'Dr. Mariam Asif', specialty: 'Cosmetic Dermatology', address: 'Rahwali Cantt, Gujranwala', facilityType: 'Private' },
 { id: 298, title: 'Gujranwala Skin Perfection', latitude: 32.1615, longitude: 74.1915, rating: 4.5, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatology', address: 'Peoples Colony, Gujranwala', facilityType: 'Private' },
 { id: 299, title: 'Dr. Zara’s Skin Lounge', latitude: 32.1535, longitude: 74.1835, rating: 4.3, doctor: 'Dr. Zara Khan', specialty: 'Cosmetic Dermatology', address: 'G.T. Road, Gujranwala', facilityType: 'Private' },
 { id: 300, title: 'Gujranwala Dermatology Studio', latitude: 32.1565, longitude: 74.1865, rating: 4.4, doctor: 'Dr. Sana Iqbal', specialty: 'Dermatology', address: 'Model Town, Gujranwala', facilityType: 'Private' },
 { id: 301, title: 'Dr. Usman’s Skin Care', latitude: 32.1585, longitude: 74.1885, rating: 4.5, doctor: 'Dr. Usman Riaz', specialty: 'Cosmetic Dermatology', address: 'Civil Lines, Gujranwala', facilityType: 'Private' },
 { id: 302, title: 'Gujranwala Skin Harmony', latitude: 32.1605, longitude: 74.1905, rating: 4.3, doctor: 'Dr. Ayesha Malik', specialty: 'Dermatology', address: 'Wapda Town, Gujranwala', facilityType: 'Private' },
 { id: 303, title: 'Dr. Faizan’s Aesthetic Clinic', latitude: 32.1525, longitude: 74.1825, rating: 4.6, doctor: 'Dr. Faizan Ahmed', specialty: 'Cosmetic Dermatology', address: 'Satellite Town, Gujranwala', facilityType: 'Private' },

 // Rawalpindi Locations (25)
 { id: 304, title: 'Rawalpindi Skin Clinic', latitude: 33.6007, longitude: 73.0679, rating: 4.6, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Murree Road, Rawalpindi', facilityType: 'Private' },
 { id: 305, title: 'Holy Family Hospital', latitude: 33.6167, longitude: 73.0740, rating: 4.2, doctor: 'Dr. Imran Malik', specialty: 'Dermatology', address: 'Satellite Town, Rawalpindi', facilityType: 'Government' },
 { id: 306, title: 'Aesthetic Skin Center', latitude: 33.5950, longitude: 73.0500, rating: 4.5, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'Bahria Town, Rawalpindi', facilityType: 'Private' },
 { id: 307, title: 'Skin & Laser Clinic Pindi', latitude: 33.6100, longitude: 73.0650, rating: 4.4, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'Commercial Market, Rawalpindi', facilityType: 'Private' },
 { id: 308, title: 'Rawalpindi General Hospital', latitude: 33.6200, longitude: 73.0800, rating: 3.9, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Mall Road, Rawalpindi', facilityType: 'Government' },
 { id: 309, title: 'Dr. Ali’s Skin Studio', latitude: 33.6050, longitude: 73.0700, rating: 4.3, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Defence Housing Authority, Rawalpindi', facilityType: 'Private' },
 { id: 310, title: 'Skin Harmony Pindi', latitude: 33.6150, longitude: 73.0750, rating: 4.5, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Chaklala Scheme III, Rawalpindi', facilityType: 'Private' },
 { id: 311, title: 'Radiance Dermatology Clinic', latitude: 33.6000, longitude: 73.0600, rating: 4.6, doctor: 'Dr. Usman Haider', specialty: 'Cosmetic Dermatology', address: 'G-11 Markaz, Rawalpindi', facilityType: 'Private' },
 { id: 312, title: 'Pindi Skin Care Center', latitude: 33.6120, longitude: 73.0680, rating: 4.2, doctor: 'Dr. Nida Aslam', specialty: 'Dermatology', address: 'Westridge, Rawalpindi', facilityType: 'Private' },
 { id: 313, title: 'Dr. Bilal’s Aesthetic Hub', latitude: 33.6180, longitude: 73.0720, rating: 4.4, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Saddar, Rawalpindi', facilityType: 'Private' },
 { id: 314, title: 'Skin Solutions Pindi', latitude: 33.6055, longitude: 73.0710, rating: 4.3, doctor: 'Dr. Asim Riaz', specialty: 'Cosmetic Dermatology', address: 'Gulzar-e-Quaid, Rawalpindi', facilityType: 'Private' },
 { id: 315, title: 'Rawalpindi Dermatology Clinic', latitude: 33.6105, longitude: 73.0640, rating: 4.5, doctor: 'Dr. Azim Jahangir', specialty: 'Dermatopathology', address: 'Chaklala Cantt, Rawalpindi', facilityType: 'Private' },
 { id: 316, title: 'Dr. Maham’s Skin Lounge', latitude: 33.5955, longitude: 73.0550, rating: 4.6, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Bahria Phase VII, Rawalpindi', facilityType: 'Private' },
 { id: 317, title: 'Skin Perfection Pindi', latitude: 33.6160, longitude: 73.0760, rating: 4.4, doctor: 'Dr. Zara Ali', specialty: 'Dermatology', address: 'Satellite Town Phase II, Rawalpindi', facilityType: 'Private' },
 { id: 318, title: 'Dr. Kamran’s Skin Care', latitude: 33.6030, longitude: 73.0690, rating: 4.3, doctor: 'Dr. Kamran Butt', specialty: 'Cosmetic Dermatology', address: 'Defence Road, Rawalpindi', facilityType: 'Private' },
 { id: 319, title: 'Pindi Aesthetic Clinic', latitude: 33.6110, longitude: 73.0670, rating: 4.5, doctor: 'Dr. Nabeel Aslam', specialty: 'Pediatric Dermatology', address: 'CBR Town, Rawalpindi', facilityType: 'Private' },
 { id: 320, title: 'Skin Glow Pindi', latitude: 33.6070, longitude: 73.0730, rating: 4.6, doctor: 'Dr. Amina Rehman', specialty: 'Cosmetic Dermatology', address: 'G-13, Rawalpindi', facilityType: 'Private' },
 { id: 321, title: 'Rawalpindi Medical Centre', latitude: 33.6190, longitude: 73.0790, rating: 4.1, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'Committee Chowk, Rawalpindi', facilityType: 'Private' },
 { id: 322, title: 'Dr. Saad’s Skin Studio', latitude: 33.6020, longitude: 73.0620, rating: 4.5, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Bahria Phase VIII, Rawalpindi', facilityType: 'Private' },
 { id: 323, title: 'Skin Essence Pindi', latitude: 33.6155, longitude: 73.0700, rating: 4.4, doctor: 'Dr. Hira Naveed', specialty: 'Dermatology', address: 'Chakri Road, Rawalpindi', facilityType: 'Private' },
 { id: 324, title: 'Dr. Bilal’s Dermatology Hub', latitude: 33.6060, longitude: 73.0680, rating: 4.3, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatopathology', address: 'Westridge II, Rawalpindi', facilityType: 'Private' },
 { id: 325, title: 'Pindi Skin Radiance', latitude: 33.6130, longitude: 73.0660, rating: 4.5, doctor: 'Dr. Sana Mirza', specialty: 'Dermatology', address: 'Saddar Cantt, Rawalpindi', facilityType: 'Private' },
 { id: 326, title: 'Dr. Arif’s Skin Care', latitude: 33.5980, longitude: 73.0580, rating: 4.6, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'G-14, Rawalpindi', facilityType: 'Private' },
 { id: 327, title: 'Skin First Pindi', latitude: 33.6170, longitude: 73.0770, rating: 4.4, doctor: 'Dr. Shehla Naz', specialty: 'Dermatology', address: 'IJP Road, Rawalpindi', facilityType: 'Private' },
 { id: 328, title: 'Rawalpindi Aesthetic Lounge', latitude: 33.6040, longitude: 73.0630, rating: 4.5, doctor: 'Dr. Zohaib Rana', specialty: 'Cosmetic Dermatology', address: 'Bahria Phase VI, Rawalpindi', facilityType: 'Private' },

 // Islamabad Locations (25)
 { id: 329, title: 'Shifa International Hospital', latitude: 33.6937, longitude: 73.0343, rating: 4.7, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Dermatology', address: 'Sector H-8/4, Islamabad', facilityType: 'Private' },
 { id: 330, title: 'PIMS Hospital', latitude: 33.6894, longitude: 73.0377, rating: 4.1, doctor: 'Dr. Imran Khan', specialty: 'Dermatology', address: 'G-8/3, Islamabad', facilityType: 'Government' },
 { id: 331, title: 'Islamabad Skin Clinic', latitude: 33.7000, longitude: 73.0500, rating: 4.6, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'F-7 Markaz, Islamabad', facilityType: 'Private' },
 { id: 332, title: 'Aesthetic Dermatology Center', latitude: 33.6840, longitude: 73.0290, rating: 4.5, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'F-10 Markaz, Islamabad', facilityType: 'Private' },
 { id: 333, title: 'Polyclinic Hospital', latitude: 33.7080, longitude: 73.0800, rating: 4.0, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Sector G-6/2, Islamabad', facilityType: 'Government' },
 { id: 334, title: 'Dr. Ali’s Skin Studio', latitude: 33.6950, longitude: 73.0400, rating: 4.4, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'F-8 Markaz, Islamabad', facilityType: 'Private' },
 { id: 335, title: 'Skin Harmony Islamabad', latitude: 33.7020, longitude: 73.0550, rating: 4.6, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'E-11/2, Islamabad', facilityType: 'Private' },
 { id: 336, title: 'Radiance Skin Clinic', latitude: 33.6900, longitude: 73.0450, rating: 4.5, doctor: 'Dr. Usman Haider', specialty: 'Cosmetic Dermatology', address: 'G-9 Markaz, Islamabad', facilityType: 'Private' },
 { id: 337, title: 'Islamabad Dermatology Center', latitude: 33.6970, longitude: 73.0600, rating: 4.3, doctor: 'Dr. Nida Aslam', specialty: 'Dermatology', address: 'F-6 Markaz, Islamabad', facilityType: 'Private' },
 { id: 338, title: 'Dr. Bilal’s Skin Hub', latitude: 33.7050, longitude: 73.0700, rating: 4.4, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'D-12, Islamabad', facilityType: 'Private' },
 { id: 339, title: 'Skin Solutions Islamabad', latitude: 33.6920, longitude: 73.0350, rating: 4.5, doctor: 'Dr. Asim Riaz', specialty: 'Cosmetic Dermatology', address: 'F-11 Markaz, Islamabad', facilityType: 'Private' },
 { id: 340, title: 'Islamabad Aesthetic Clinic', latitude: 33.6980, longitude: 73.0520, rating: 4.6, doctor: 'Dr. Azim Jahangir', specialty: 'Dermatopathology', address: 'E-7, Islamabad', facilityType: 'Private' },
 { id: 341, title: 'Dr. Maham’s Skin Lounge', latitude: 33.6860, longitude: 73.0300, rating: 4.4, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'G-10 Markaz, Islamabad', facilityType: 'Private' },
 { id: 342, title: 'Skin Perfection Islamabad', latitude: 33.7040, longitude: 73.0650, rating: 4.5, doctor: 'Dr. Zara Ali', specialty: 'Dermatology', address: 'F-5 Markaz, Islamabad', facilityType: 'Private' },
 { id: 343, title: 'Dr. Kamran’s Skin Care', latitude: 33.6910, longitude: 73.0420, rating: 4.3, doctor: 'Dr. Kamran Butt', specialty: 'Cosmetic Dermatology', address: 'E-8, Islamabad', facilityType: 'Private' },
 { id: 344, title: 'Islamabad Skin Wellness', latitude: 33.6990, longitude: 73.0580, rating: 4.6, doctor: 'Dr. Nabeel Aslam', specialty: 'Pediatric Dermatology', address: 'G-7 Markaz, Islamabad', facilityType: 'Private' },
 { id: 345, title: 'Skin Glow Islamabad', latitude: 33.6870, longitude: 73.0330, rating: 4.5, doctor: 'Dr. Amina Rehman', specialty: 'Cosmetic Dermatology', address: 'F-9 Park, Islamabad', facilityType: 'Private' },
 { id: 346, title: 'Dr. Faiza’s Dermatology', latitude: 33.7030, longitude: 73.0620, rating: 4.2, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'E-11/1, Islamabad', facilityType: 'Private' },
 { id: 347, title: 'Islamabad Aesthetic Studio', latitude: 33.6940, longitude: 73.0390, rating: 4.6, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'F-7/3, Islamabad', facilityType: 'Private' },
 { id: 348, title: 'Skin Essence Islamabad', latitude: 33.7010, longitude: 73.0540, rating: 4.4, doctor: 'Dr. Hira Naveed', specialty: 'Dermatology', address: 'G-6/1-3, Islamabad', facilityType: 'Private' },
 { id: 349, title: 'Dr. Bilal’s Skin Center', latitude: 33.6880, longitude: 73.0360, rating: 4.5, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatopathology', address: 'F-10/1, Islamabad', facilityType: 'Private' },
 { id: 350, title: 'Islamabad Skin Radiance', latitude: 33.7060, longitude: 73.0680, rating: 4.4, doctor: 'Dr. Sana Mirza', specialty: 'Dermatology', address: 'D-13, Islamabad', facilityType: 'Private' },
 { id: 351, title: 'Dr. Arif’s Skin Lounge', latitude: 33.6930, longitude: 73.0410, rating: 4.6, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'E-9, Islamabad', facilityType: 'Private' },
 { id: 352, title: 'Skin First Islamabad', latitude: 33.7000, longitude: 73.0530, rating: 4.5, doctor: 'Dr. Shehla Naz', specialty: 'Dermatology', address: 'F-6/2, Islamabad', facilityType: 'Private' },
 { id: 353, title: 'Islamabad Aesthetic Hub', latitude: 33.6890, longitude: 73.0380, rating: 4.6, doctor: 'Dr. Zohaib Rana', specialty: 'Cosmetic Dermatology', address: 'G-11/1, Islamabad', facilityType: 'Private' },

 // Peshawar Locations (25)
 { id: 354, title: 'Dr. Kashif’s Aesthetic Studio', latitude: 34.0151, longitude: 71.5249, rating: 4.7, doctor: 'Dr. Kashif Ali', specialty: 'Cosmetic Dermatology', address: 'Chinar Road, University Town, Peshawar', facilityType: 'Private' },
 { id: 355, title: 'Khyber Teaching Hospital Dermatology', latitude: 34.0080, longitude: 71.5780, rating: 4.2, doctor: 'Dr. Azer Rashid', specialty: 'Dermatology', address: 'Jamrud Road, Peshawar', facilityType: 'Government' },
 { id: 356, title: 'Skin Harmony Clinic', latitude: 34.0100, longitude: 71.5600, rating: 4.5, doctor: 'Dr. Rozina Asif', specialty: 'Cosmetic Dermatology', address: 'Deans Trade Centre, Peshawar', facilityType: 'Private' },
 { id: 357, title: 'Peshawar Skin Care Center', latitude: 34.0050, longitude: 71.5700, rating: 4.4, doctor: 'Dr. Adil Hamayun', specialty: 'Dermatopathology', address: 'Saddar Road, Peshawar', facilityType: 'Private' },
 { id: 358, title: 'Lady Reading Hospital Dermatology', latitude: 34.0020, longitude: 71.5800, rating: 3.9, doctor: 'Dr. Fahad Faizullah', specialty: 'Dermatology', address: 'Peshawar Cantt, Peshawar', facilityType: 'Government' },
 { id: 359, title: 'Aesthetic Skin Studio', latitude: 34.0120, longitude: 71.5500, rating: 4.6, doctor: 'Dr. Shumaila Khan', specialty: 'Cosmetic Dermatology', address: 'University Road, Peshawar', facilityType: 'Private' },
 { id: 360, title: 'Skin Radiance Peshawar', latitude: 34.0070, longitude: 71.5650, rating: 4.3, doctor: 'Dr. Nida Rehman', specialty: 'Pediatric Dermatology', address: 'Hayatabad Phase 1, Peshawar', facilityType: 'Private' },
 { id: 361, title: 'Dr. Ali’s Dermatology Hub', latitude: 34.0090, longitude: 71.5750, rating: 4.5, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Gulberg Road, Peshawar', facilityType: 'Private' },
 { id: 362, title: 'Peshawar Dermatology Clinic', latitude: 34.0060, longitude: 71.5600, rating: 4.2, doctor: 'Dr. Sana Iqbal', specialty: 'Dermatology', address: 'Canal Road, Peshawar', facilityType: 'Private' },
 { id: 363, title: 'Skin Perfection Peshawar', latitude: 34.0140, longitude: 71.5700, rating: 4.4, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Tahkal, Peshawar', facilityType: 'Private' },
 { id: 364, title: 'Dr. Maham’s Skin Lounge', latitude: 34.0110, longitude: 71.5550, rating: 4.6, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Hayatabad Phase 2, Peshawar', facilityType: 'Private' },
 { id: 365, title: 'Peshawar Skin Wellness', latitude: 34.0085, longitude: 71.5680, rating: 4.3, doctor: 'Dr. Asim Riaz', specialty: 'Dermatopathology', address: 'Faqirabad, Peshawar', facilityType: 'Private' },
 { id: 366, title: 'Skin Glow Clinic', latitude: 34.0130, longitude: 71.5620, rating: 4.5, doctor: 'Dr. Amina Rehman', specialty: 'Cosmetic Dermatology', address: 'Regi Model Town, Peshawar', facilityType: 'Private' },
 { id: 367, title: 'Dr. Kamran’s Skin Care', latitude: 34.0040, longitude: 71.5760, rating: 4.4, doctor: 'Dr. Kamran Butt', specialty: 'Dermatology', address: 'Saddar Cantt, Peshawar', facilityType: 'Private' },
 { id: 368, title: 'Peshawar Aesthetic Center', latitude: 34.0105, longitude: 71.5580, rating: 4.6, doctor: 'Dr. Zara Ali', specialty: 'Cosmetic Dermatology', address: 'University Town Phase 2, Peshawar', facilityType: 'Private' },
 { id: 369, title: 'Skin Essence Peshawar', latitude: 34.0075, longitude: 71.5640, rating: 4.5, doctor: 'Dr. Hira Naveed', specialty: 'Pediatric Dermatology', address: 'Gulbahar, Peshawar', facilityType: 'Private' },
 { id: 370, title: 'Dr. Bilal’s Skin Studio', latitude: 34.0095, longitude: 71.5720, rating: 4.3, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatology', address: 'Pahari Pura, Peshawar', facilityType: 'Private' },
 { id: 371, title: 'Peshawar Skin Vitality', latitude: 34.0125, longitude: 71.5570, rating: 4.4, doctor: 'Dr. Faiza Qasim', specialty: 'Cosmetic Dermatology', address: 'Hayatabad Phase 3, Peshawar', facilityType: 'Private' },
 { id: 372, title: 'Dr. Saad’s Dermatology', latitude: 34.0065, longitude: 71.5610, rating: 4.6, doctor: 'Dr. Saad Malik', specialty: 'Dermatopathology', address: 'Shami Road, Peshawar', facilityType: 'Private' },
 { id: 373, title: 'Skin Bliss Peshawar', latitude: 34.0145, longitude: 71.5690, rating: 4.5, doctor: 'Dr. Shehla Naz', specialty: 'Dermatology', address: 'Nasir Bagh Road, Peshawar', facilityType: 'Private' },
 { id: 374, title: 'Dr. Arif’s Skin Care', latitude: 34.0080, longitude: 71.5530, rating: 4.4, doctor: 'Dr. Arif Khan', specialty: 'Cosmetic Dermatology', address: 'Gulshan Iqbal Colony, Peshawar', facilityType: 'Private' },
 { id: 375, title: 'Peshawar Skin Harmony', latitude: 34.0115, longitude: 71.5660, rating: 4.6, doctor: 'Dr. Nabeel Aslam', specialty: 'Pediatric Dermatology', address: 'Tahkal Payan, Peshawar', facilityType: 'Private' },
 { id: 376, title: 'Skin First Peshawar', latitude: 34.0055, longitude: 71.5740, rating: 4.3, doctor: 'Dr. Usman Haider', specialty: 'Dermatology', address: 'Cantonment Plaza, Peshawar', facilityType: 'Private' },
 { id: 377, title: 'Dr. Zohaib’s Aesthetic Clinic', latitude: 34.0135, longitude: 71.5590, rating: 4.5, doctor: 'Dr. Zohaib Rana', specialty: 'Cosmetic Dermatology', address: 'Ring Road, Peshawar', facilityType: 'Private' },
 { id: 378, title: 'Peshawar Dermatology Lounge', latitude: 34.0100, longitude: 71.5630, rating: 4.4, doctor: 'Dr. Sana Mirza', specialty: 'Dermatopathology', address: 'Hayatabad Phase 4, Peshawar', facilityType: 'Private' },

 // Other KPK Locations (25)
 { id: 379, title: 'Mardan Skin Clinic', latitude: 34.1958, longitude: 72.0359, rating: 4.3, doctor: 'Dr. Ayesha Siddiqui', specialty: 'Dermatology', address: 'Bank Road, Mardan', facilityType: 'Private' },
 { id: 380, title: 'Swat Dermatology Center', latitude: 35.2212, longitude: 72.4292, rating: 4.5, doctor: 'Dr. Imran Khan', specialty: 'Cosmetic Dermatology', address: 'Mingora Bazar, Swat', facilityType: 'Private' },
 { id: 381, title: 'Abbottabad Skin Care', latitude: 34.1888, longitude: 73.2323, rating: 4.4, doctor: 'Dr. Saima Butt', specialty: 'Dermatopathology', address: 'Mansehra Road, Abbottabad', facilityType: 'Private' },
 { id: 382, title: 'Dera Ismail Khan Hospital', latitude: 31.8313, longitude: 70.9022, rating: 3.8, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Tank Road, Dera Ismail Khan', facilityType: 'Government' },
 { id: 383, title: 'Kohat Aesthetic Clinic', latitude: 33.5808, longitude: 71.4461, rating: 4.6, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Main Bazaar, Kohat', facilityType: 'Private' },
 { id: 384, title: 'Mingora Skin Studio', latitude: 35.2270, longitude: 72.4330, rating: 4.2, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Saidu Sharif, Swat', facilityType: 'Private' },
 { id: 385, title: 'Bannu Dermatology Hub', latitude: 32.9888, longitude: 70.6042, rating: 4.3, doctor: 'Dr. Usman Haider', specialty: 'Dermatology', address: 'Lakki Road, Bannu', facilityType: 'Private' },
 { id: 386, title: 'Haripur Skin Care', latitude: 33.9993, longitude: 72.9338, rating: 4.5, doctor: 'Dr. Nida Aslam', specialty: 'Cosmetic Dermatology', address: 'Main GT Road, Haripur', facilityType: 'Private' },
 { id: 387, title: 'Chitral Skin Clinic', latitude: 35.8500, longitude: 71.7833, rating: 4.4, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatopathology', address: 'Chitral Bazaar, Chitral', facilityType: 'Private' },
 { id: 388, title: 'Nowshera Dermatology', latitude: 34.0150, longitude: 71.9650, rating: 4.1, doctor: 'Dr. Maham Tariq', specialty: 'Dermatology', address: 'Risalpur Road, Nowshera', facilityType: 'Government' },
 { id: 389, title: 'Swabi Skin Wellness', latitude: 34.1167, longitude: 72.4667, rating: 4.5, doctor: 'Dr. Asim Riaz', specialty: 'Cosmetic Dermatology', address: 'Topi Road, Swabi', facilityType: 'Private' },
 { id: 390, title: 'Malakand Skin Center', latitude: 34.5667, longitude: 71.9167, rating: 4.3, doctor: 'Dr. Amina Rehman', specialty: 'Pediatric Dermatology', address: 'Batgram Road, Malakand', facilityType: 'Private' },
 { id: 391, title: 'Timergara Aesthetic Clinic', latitude: 34.8333, longitude: 71.8333, rating: 4.6, doctor: 'Dr. Kamran Butt', specialty: 'Cosmetic Dermatology', address: 'Main Bazaar, Timergara', facilityType: 'Private' },
 { id: 392, title: 'Lakki Marwat Skin Care', latitude: 32.6067, longitude: 70.9117, rating: 4.2, doctor: 'Dr. Zara Ali', specialty: 'Dermatology', address: 'Khyber Road, Lakki Marwat', facilityType: 'Private' },
 { id: 393, title: 'Hangu Dermatology Hub', latitude: 33.5333, longitude: 71.0667, rating: 4.4, doctor: 'Dr. Hira Naveed', specialty: 'Cosmetic Dermatology', address: 'Thall Road, Hangu', facilityType: 'Private' },
 { id: 394, title: 'Dir Skin Studio', latitude: 35.2000, longitude: 71.8700, rating: 4.5, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatopathology', address: 'Dir Bazaar, Dir', facilityType: 'Private' },
 { id: 395, title: 'Charsadda Skin Care', latitude: 34.1500, longitude: 71.7333, rating: 4.3, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatology', address: 'Shabqadar Road, Charsadda', facilityType: 'Private' },
 { id: 396, title: 'Karak Aesthetic Center', latitude: 33.1167, longitude: 71.0833, rating: 4.6, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Main Road, Karak', facilityType: 'Private' },
 { id: 397, title: 'Batagram Skin Clinic', latitude: 34.6833, longitude: 73.0167, rating: 4.4, doctor: 'Dr. Shehla Naz', specialty: 'Pediatric Dermatology', address: 'Allai Road, Batagram', facilityType: 'Private' },
 { id: 398, title: 'Kohistan Dermatology', latitude: 35.2833, longitude: 73.4667, rating: 4.2, doctor: 'Dr. Arif Khan', specialty: 'Dermatology', address: 'Pattan Road, Kohistan', facilityType: 'Government' },
 { id: 399, title: 'Tank Skin Wellness', latitude: 32.2167, longitude: 70.3833, rating: 4.5, doctor: 'Dr. Nabeel Aslam', specialty: 'Cosmetic Dermatology', address: 'Main Bazaar, Tank', facilityType: 'Private' },
 { id: 400, title: 'Parachinar Skin Care', latitude: 33.9000, longitude: 70.1000, rating: 4.3, doctor: 'Dr. Usman Haider', specialty: 'Dermatopathology', address: 'Kurram Agency, Parachinar', facilityType: 'Private' },
 { id: 401, title: 'Shangla Aesthetic Clinic', latitude: 34.9167, longitude: 72.6667, rating: 4.6, doctor: 'Dr. Zohaib Rana', specialty: 'Cosmetic Dermatology', address: 'Alpuri Road, Shangla', facilityType: 'Private' },
 { id: 402, title: 'Bajaur Skin Center', latitude: 34.7500, longitude: 71.5000, rating: 4.4, doctor: 'Dr. Sana Mirza', specialty: 'Dermatology', address: 'Khar Road, Bajaur', facilityType: 'Private' },
 { id: 403, title: 'Orakzai Dermatology Lounge', latitude: 33.7500, longitude: 70.7500, rating: 4.5, doctor: 'Dr. Hina Shahid', specialty: 'Cosmetic Dermatology', address: 'Main Area, Orakzai', facilityType: 'Private' },

 { id: 404, title: 'Gilgit Skin Care Clinic', latitude: 35.9200, longitude: 74.3140, rating: 4.4, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Main Bazaar, Gilgit', facilityType: 'Private' },
  { id: 405, title: 'Combined Military Hospital (CMH) Gilgit', latitude: 35.9180, longitude: 74.3200, rating: 4.0, doctor: 'Dr. Imran Malik', specialty: 'Dermatology', address: 'Hospital Road, Gilgit', facilityType: 'Government' },
  { id: 406, title: 'Aesthetic Skin Gilgit', latitude: 35.9150, longitude: 74.3100, rating: 4.5, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'Jutial, Gilgit', facilityType: 'Private' },
  { id: 407, title: 'Dr. Faisal’s Dermatology Hub', latitude: 35.9220, longitude: 74.3160, rating: 4.3, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'Kashmir Road, Gilgit', facilityType: 'Private' },
  { id: 408, title: 'District Headquarters Hospital (DHQ) Gilgit', latitude: 35.9190, longitude: 74.3180, rating: 3.8, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Shahrah-e-Quaid-e-Azam, Gilgit', facilityType: 'Government' },
  { id: 409, title: 'Skin Harmony Gilgit', latitude: 35.9170, longitude: 74.3120, rating: 4.6, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Danyore Road, Gilgit', facilityType: 'Private' },
  { id: 410, title: 'Radiance Skin Clinic', latitude: 35.9215, longitude: 74.3130, rating: 4.4, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Konodas, Gilgit', facilityType: 'Private' },
  { id: 411, title: 'Dr. Nida’s Skin Lounge', latitude: 35.9140, longitude: 74.3090, rating: 4.5, doctor: 'Dr. Nida Aslam', specialty: 'Cosmetic Dermatology', address: 'Nagar Road, Gilgit', facilityType: 'Private' },
  { id: 412, title: 'Gilgit Dermatology Center', latitude: 35.9230, longitude: 74.3170, rating: 4.2, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Airport Road, Gilgit', facilityType: 'Private' },
  { id: 413, title: 'Skin Perfection Gilgit', latitude: 35.9165, longitude: 74.3110, rating: 4.3, doctor: 'Dr. Asim Riaz', specialty: 'Dermatopathology', address: 'Zulfiqarabad, Gilgit', facilityType: 'Private' },
  { id: 414, title: 'Dr. Maham’s Aesthetic Clinic', latitude: 35.9205, longitude: 74.3150, rating: 4.6, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Sultanabad, Gilgit', facilityType: 'Private' },
  { id: 415, title: 'Gilgit Skin Wellness', latitude: 35.9185, longitude: 74.3190, rating: 4.4, doctor: 'Dr. Amina Rehman', specialty: 'Dermatology', address: 'Khomer, Gilgit', facilityType: 'Private' },
  { id: 416, title: 'Skin Glow Gilgit', latitude: 35.9130, longitude: 74.3080, rating: 4.5, doctor: 'Dr. Kamran Butt', specialty: 'Cosmetic Dermatology', address: 'Riverside Road, Gilgit', facilityType: 'Private' },
  { id: 417, title: 'Dr. Zara’s Skin Care', latitude: 35.9225, longitude: 74.3145, rating: 4.3, doctor: 'Dr. Zara Ali', specialty: 'Pediatric Dermatology', address: 'Majini Mahala, Gilgit', facilityType: 'Private' },
  { id: 418, title: 'Gilgit Aesthetic Lounge', latitude: 35.9175, longitude: 74.3105, rating: 4.6, doctor: 'Dr. Hira Naveed', specialty: 'Cosmetic Dermatology', address: 'Barmas, Gilgit', facilityType: 'Private' },
  { id: 419, title: 'Skin Essence Gilgit', latitude: 35.9210, longitude: 74.3165, rating: 4.4, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatology', address: 'Nomal Road, Gilgit', facilityType: 'Private' },
  { id: 420, title: 'Dr. Saad’s Dermatology Studio', latitude: 35.9155, longitude: 74.3095, rating: 4.5, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Jutial Cantt, Gilgit', facilityType: 'Private' },
  { id: 421, title: 'Gilgit Skin Vitality', latitude: 35.9195, longitude: 74.3175, rating: 4.2, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatopathology', address: 'Sakwar, Gilgit', facilityType: 'Private' },
  { id: 422, title: 'Dr. Arif’s Skin Clinic', latitude: 35.9145, longitude: 74.3085, rating: 4.6, doctor: 'Dr. Arif Khan', specialty: 'Dermatology', address: 'Danyore Bazaar, Gilgit', facilityType: 'Private' },
  { id: 423, title: 'Skin Bliss Gilgit', latitude: 35.9200, longitude: 74.3135, rating: 4.4, doctor: 'Dr. Shehla Naz', specialty: 'Cosmetic Dermatology', address: 'Jutial Bazaar, Gilgit', facilityType: 'Private' },
  { id: 424, title: 'Gilgit Skin Harmony', latitude: 35.9180, longitude: 74.3115, rating: 4.5, doctor: 'Dr. Nabeel Aslam', specialty: 'Pediatric Dermatology', address: 'Kashrot, Gilgit', facilityType: 'Private' },
  { id: 425, title: 'Dr. Zohaib’s Skin Care', latitude: 35.9220, longitude: 74.3185, rating: 4.3, doctor: 'Dr. Zohaib Rana', specialty: 'Cosmetic Dermatology', address: 'Gilgit Cantonment, Gilgit', facilityType: 'Private' },
  { id: 426, title: 'Skin First Gilgit', latitude: 35.9160, longitude: 74.3100, rating: 4.6, doctor: 'Dr. Sana Mirza', specialty: 'Dermatology', address: 'Amphery, Gilgit', facilityType: 'Private' },
  { id: 427, title: 'Gilgit Dermatology Studio', latitude: 35.9215, longitude: 74.3155, rating: 4.4, doctor: 'Dr. Usman Haider', specialty: 'Dermatopathology', address: 'Nagral, Gilgit', facilityType: 'Private' },
  { id: 428, title: 'Dr. Hina’s Aesthetic Hub', latitude: 35.9190, longitude: 74.3125, rating: 4.5, doctor: 'Dr. Hina Shahid', specialty: 'Cosmetic Dermatology', address: 'Baseen, Gilgit', facilityType: 'Private' },

  // Quetta Locations (20)
  { id: 429, title: 'Quetta Skin Care Clinic', latitude: 30.1798, longitude: 66.9750, rating: 4.5, doctor: 'Dr. Ayesha Khan', specialty: 'Dermatology', address: 'Patel Road, Quetta', facilityType: 'Private' },
  { id: 430, title: 'Bolan Medical Complex', latitude: 30.1900, longitude: 66.9800, rating: 4.0, doctor: 'Dr. Imran Malik', specialty: 'Dermatology', address: 'Brewery Road, Quetta', facilityType: 'Government' },
  { id: 431, title: 'Aesthetic Skin Quetta', latitude: 30.1850, longitude: 66.9700, rating: 4.6, doctor: 'Dr. Saima Butt', specialty: 'Cosmetic Dermatology', address: 'Jinnah Road, Quetta', facilityType: 'Private' },
  { id: 432, title: 'Dr. Faisal’s Dermatology Hub', latitude: 30.1820, longitude: 66.9760, rating: 4.3, doctor: 'Dr. Faisal Ahmed', specialty: 'Dermatopathology', address: 'Zarghoon Road, Quetta', facilityType: 'Private' },
  { id: 433, title: 'Civil Hospital Quetta', latitude: 30.1880, longitude: 66.9820, rating: 3.8, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Liaquat Road, Quetta', facilityType: 'Government' },
  { id: 434, title: 'Skin Harmony Quetta', latitude: 30.1770, longitude: 66.9720, rating: 4.4, doctor: 'Dr. Ali Raza', specialty: 'Cosmetic Dermatology', address: 'Sariab Road, Quetta', facilityType: 'Private' },
  { id: 435, title: 'Radiance Skin Clinic', latitude: 30.1815, longitude: 66.9730, rating: 4.5, doctor: 'Dr. Sara Iqbal', specialty: 'Pediatric Dermatology', address: 'Model Town, Quetta', facilityType: 'Private' },
  { id: 436, title: 'Dr. Nida’s Skin Lounge', latitude: 30.1840, longitude: 66.9690, rating: 4.6, doctor: 'Dr. Nida Aslam', specialty: 'Cosmetic Dermatology', address: 'Hazar Ganji, Quetta', facilityType: 'Private' },
  { id: 437, title: 'Quetta Dermatology Center', latitude: 30.1830, longitude: 66.9770, rating: 4.2, doctor: 'Dr. Bilal Saeed', specialty: 'Dermatology', address: 'Airport Road, Quetta', facilityType: 'Private' },
  { id: 438, title: 'Skin Perfection Quetta', latitude: 30.1865, longitude: 66.9710, rating: 4.4, doctor: 'Dr. Asim Riaz', specialty: 'Dermatopathology', address: 'Killi Shabo, Quetta', facilityType: 'Private' },
  { id: 439, title: 'Dr. Maham’s Aesthetic Clinic', latitude: 30.1805, longitude: 66.9750, rating: 4.5, doctor: 'Dr. Maham Tariq', specialty: 'Cosmetic Dermatology', address: 'Alamo Chowk, Quetta', facilityType: 'Private' },
  { id: 440, title: 'Quetta Skin Wellness', latitude: 30.1885, longitude: 66.9790, rating: 4.3, doctor: 'Dr. Amina Rehman', specialty: 'Dermatology', address: 'Double Road, Quetta', facilityType: 'Private' },
  { id: 441, title: 'Skin Glow Quetta', latitude: 30.1830, longitude: 66.9680, rating: 4.6, doctor: 'Dr. Kamran Butt', specialty: 'Cosmetic Dermatology', address: 'Gulistan Road, Quetta', facilityType: 'Private' },
  { id: 442, title: 'Dr. Zara’s Skin Care', latitude: 30.1825, longitude: 66.9745, rating: 4.4, doctor: 'Dr. Zara Ali', specialty: 'Pediatric Dermatology', address: 'Samungli Road, Quetta', facilityType: 'Private' },
  { id: 443, title: 'Quetta Aesthetic Lounge', latitude: 30.1875, longitude: 66.9705, rating: 4.5, doctor: 'Dr. Hira Naveed', specialty: 'Cosmetic Dermatology', address: 'Nawa Killi, Quetta', facilityType: 'Private' },
  { id: 444, title: 'Skin Essence Quetta', latitude: 30.1810, longitude: 66.9765, rating: 4.3, doctor: 'Dr. Bilal Ahmed', specialty: 'Dermatology', address: 'Kuchlak Road, Quetta', facilityType: 'Private' },
  { id: 445, title: 'Dr. Saad’s Dermatology Studio', latitude: 30.1855, longitude: 66.9695, rating: 4.6, doctor: 'Dr. Saad Malik', specialty: 'Cosmetic Dermatology', address: 'Satellite Town, Quetta', facilityType: 'Private' },
  { id: 446, title: 'Quetta Skin Vitality', latitude: 30.1795, longitude: 66.9775, rating: 4.2, doctor: 'Dr. Faiza Qasim', specialty: 'Dermatopathology', address: 'Chiltan Road, Quetta', facilityType: 'Private' },
  { id: 447, title: 'Dr. Arif’s Skin Clinic', latitude: 30.1845, longitude: 66.9685, rating: 4.5, doctor: 'Dr. Arif Khan', specialty: 'Dermatology', address: 'Kasi Road, Quetta', facilityType: 'Private' },
  { id: 448, title: 'Skin Bliss Quetta', latitude: 30.1800, longitude: 66.9735, rating: 4.4, doctor: 'Dr. Shehla Naz', specialty: 'Cosmetic Dermatology', address: 'Meezan Chowk, Quetta', facilityType: 'Private' },

  // Other Balochistan Locations (5)
  { id: 449, title: 'Gwadar Skin Clinic', latitude: 25.1264, longitude: 62.3225, rating: 4.3, doctor: 'Dr. Nabeel Aslam', specialty: 'Dermatology', address: 'Marine Drive, Gwadar', facilityType: 'Private' },
  { id: 450, title: 'Turbat Dermatology Center', latitude: 26.0012, longitude: 63.0485, rating: 4.4, doctor: 'Dr. Usman Haider', specialty: 'Cosmetic Dermatology', address: 'Main Road, Turbat', facilityType: 'Private' },
  { id: 451, title: 'Sibi Skin Care', latitude: 29.5432, longitude: 67.8773, rating: 4.2, doctor: 'Dr. Zohaib Rana', specialty: 'Pediatric Dermatology', address: 'Jinnah Road, Sibi', facilityType: 'Private' },
  { id: 452, title: 'Khuzdar Aesthetic Clinic', latitude: 27.8119, longitude: 66.6109, rating: 4.5, doctor: 'Dr. Sana Mirza', specialty: 'Cosmetic Dermatology', address: 'Sariab Road, Khuzdar', facilityType: 'Private' },
  { id: 453, title: 'Loralai Dermatology Hub', latitude: 30.3705, longitude: 68.5980, rating: 4.3, doctor: 'Dr. Hina Shahid', specialty: 'Dermatology', address: 'Tehsil Road, Loralai', facilityType: 'Private' },

];

let DefaultIcon = L.icon({
    iconUrl: icon,
    shadowUrl: iconShadow,
    iconAnchor: [12, 41],
});

L.Marker.prototype.options.icon = DefaultIcon;
const App = () => {
  const [selectedLocation, setSelectedLocation] = useState(null);

  const handleMarkerClick = (location) => {
    setSelectedLocation(location);
  };

  const closeDetails = () => {
    setSelectedLocation(null);
  };

  return (
    <div className="app-container">
      <MapContainer
        center={[32.4945, 74.5229]}
        zoom={12}
        style={{ height: '100vh', width: '100%' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {dummyLocations.map((location) => (
          <Marker
            key={location.id}
            position={[location.latitude, location.longitude]}
            eventHandlers={{
              click: () => handleMarkerClick(location),
            }}
          >
            <Popup>
              <div>
                <h4>{location.title}</h4>
                <p>Rating: {location.rating}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {selectedLocation && (
        <div className="details-container">
          <h2 className="details-title">{selectedLocation.title}</h2>
          <p className="details-text">Doctor: {selectedLocation.doctor}</p>
          <p className="details-text">Specialty: {selectedLocation.specialty}</p>
          <p className="details-text">Rating: {selectedLocation.rating}</p>
          <p className="details-text">Address: {selectedLocation.address}</p>
          <p className="details-text">Facility: {selectedLocation.facilityType}</p>
          <button className="close-button" onClick={closeDetails}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default App;