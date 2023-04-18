import React, { useState, useEffect } from "react";
import Layout from "../components/Layout/Layout";
import { getDoc, doc } from "firebase/firestore";
import { db } from "../firebase.config";
import { getAuth } from "firebase/auth";
import { useNavigate, Link, useParams } from "react-router-dom";
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import Footer from "../components/Layout/Footer";
import Spinner from "../components/Spinner";
import SwipeCore, { EffectCoverflow, Navigation, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";
import "../styles/listing.css";
import {
  FaBed,
  FaBath,
  FaParking,
  FaHouseDamage,
  FaArrowCircleRight,
} from "react-icons/fa";

//config
SwipeCore.use([EffectCoverflow, Pagination]);

const Listing = () => {
  const [listing, setListing] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); //eslint-disable-line
  const params = useParams();
  const auth = getAuth(); //eslint-disable-line

  useEffect(() => {
    const fetchListing = async () => {
      const docRef = doc(db, "listings", params.listingId);
      const docSnap = await getDoc(docRef);
      if (docSnap.exists()) {
        console.log(docSnap.data());
        setListing(docSnap.data());
        setLoading(false);
        // console.log(listing.geolocation.lat, listing.geolocation.lng);
      }
    };
    fetchListing();
  }, [params.listingId]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <Layout title={listing.name}>
        <div className="row listing-container">
          <div className="col-md-8 listing-container-col1">
            {listing.imgUrls === undefined ? (
              <Spinner />
            ) : (
              <Swiper
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={1}
                coverflowEffect={{
                  rotate: 50,
                  stretch: 0,
                  depth: 100,
                  modifier: 1,
                  slideShadows: true,
                }}
                pagination={true}
                className="mySwipe p-2"
              >
                {listing.imgUrls.map((url, index) => (
                  <SwiperSlide className="m-3 d-flex justify-content-center" key={index}>
                    <img src={listing.imgUrls[index]} alt={listing.name} />
                  </SwiperSlide>
                ))}
              </Swiper>
            )}
          </div>
          <div className="col-md-4 listing-container-col2">
            <h3>{listing.name}</h3>
            <h6>
              Price :{" "}
              {listing.offer ? listing.discountedPrice : listing.regularPrice} /
              RS
            </h6>
            <p>Property For : {listing.type === "rent" ? "Rent" : "Sale"}</p>
            <p>
              {listing.offer && (
                <span>
                  {listing.regularPrice - listing.discountedPrice} Discount
                </span>
              )}
            </p>
            <p>
              <FaBed size={20} /> &nbsp;
              {listing.bedrooms > 1
                ? `${listing.bedrooms} Bedrooms`
                : "1 Bedroom"}
            </p>
            <p>
              <FaBath size={20} /> &nbsp;
              {listing.bathrooms > 1
                ? `${listing.bathrooms} bathrooms`
                : "1 Bathroom"}
            </p>
            <p>
              <FaParking size={20} /> &nbsp;
              {listing.parking ? `Parking spot` : "no spot for parking"}
            </p>
            <p>
              <FaHouseDamage size={20} /> &nbsp;
              {listing.furnished ? `furnished house` : "not furnished"}
            </p>

            <Link
              className="btn btn-success  "
              to={`/contact/${listing.userRef}?listingName=${listing.name}`}
            >
              Contact Landlord <FaArrowCircleRight size={20} />
            </Link>


          </div>
        </div>
      </Layout>
      <div className='container'>
        <p className='listingLocationTitle'><h1>Location</h1>{listing.Location}</p>
        <hr />
        <div className="container">
          {listing && listing.geolocation && (


            <MapContainer
              style={{ height: '60vh', width: '100%' }}
              center={[listing.geolocation.lat, listing.geolocation.lng]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url='https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png'
              />

              <Marker
                position={[listing.geolocation.lat || 0, listing.geolocation.lng || 0]}
              >
                <Popup>{listing.location}</Popup>
              </Marker>
            </MapContainer>
          )}

        </div>

      </div>

<Footer/>
    </>
  );
};

export default Listing; 