// import React from "react";
// import video from "../assets/video.mp4";

// const VideoSection = () => {
//   return (
//     <section className="position-relative overflow-hidden">
      
//       {/* Background Video */}
//       <video
//         src={video}
//         autoPlay
//         muted
//         loop
//         playsInline
//         className="w-100 vh-100 object-fit-cover"
//       />

//       {/* Dark Overlay */}
//       <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-50"></div>

//       {/* Text Content */}
//       <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
//         <h1 className="fw-bold display-5">Luxury Car Rentals</h1>
//         <p className="lead">
//           Drive premium cars with comfort & style
//         </p>
//       </div>

//     </section>
//   );
// };

// export default VideoSection;
import React from "react";
import video from "../assets/video.mp4";

const VideoSection = () => {
  return (
    <section className="container my-5 head-reveal">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8">

          {/* Video Card */}
          <div className="position-relative rounded-4 overflow-hidden shadow-lg ">

            {/* Video */}
            <video
              src={video}
              autoPlay
              muted
              loop
              playsInline
              className="w-100 video-small object-fit-cover"
            />

            {/* Overlay */}
            <div className="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>

            {/* Text */}
            <div className="position-absolute top-50 start-50 translate-middle text-center text-white px-3">
              <h4 className="fw-bold mb-1 ">Enjoy Your Journey</h4>
              <p className="mb-0 small text-warning">Luxury • Comfort • Style</p>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default VideoSection;
