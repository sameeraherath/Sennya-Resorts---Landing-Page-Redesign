import React from "react";
const MapComponent = () => {
  return (
    <div className="flex justify-center my-6 ">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15850.290568973714!2d80.7811686!3d6.6997305!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae38bf9386cf255%3A0x6da55a5df4f09e26!2sSennya%20Resorts!5e0!3m2!1sen!2slk!4v1726734608491!5m2!1sen!2slk"
        width="90%"
        height="400px"
        className="border-0"
        allowFullscreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Google Map"
      ></iframe>
    </div>
  );
};

export default MapComponent;
