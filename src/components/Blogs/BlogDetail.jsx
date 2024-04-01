
import React from "react";
import Footer from "../footer/Footer";
import "./blog.css";
import image1 from "../../asset/image/Image.png";
import image2 from "../../asset/image/Image1.png";
function BlogDetail() {
  return (
    <>
      <div className="container-fluid blog-detail sslide-in">
        <div className="row">
          <div className="blog-detail-box">
            <h2 className="blog-detail-box-heading">
              The Impact of Technology on the Workplace: How Technology is
              Changing
            </h2>
            <div className="blog-detail-insidebox">
              <img src={image1} />
              <p className="blog-detail-insidebox_1">Tracey Wilson</p>
              <p className="blog-detail-insidebox_2">August 20,2022</p>
            </div>
          </div>
        </div>
        <div className="row row_2" style={{ marginTop: "20px" }}>
          <img src={image2} />
        </div>
        <div className="row row_3">
          <p className="row_3_para">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className="row_3_para">
            One of the most rewardingaspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
          <h5>
            Research Your Destination
          </h5>
            <p className="row_3_para">
            Traveling is an enriching experience that opens up new horizons,
            exposes us to different cultures, and creates memories that last a
            lifetime. However, traveling can also be stressful and overwhelming,
            especially if you don't plan and prepare adequately. In this blog
            article, we'll explore tips and tricks for a memorable journey and
            how to make the most of your travels.
          </p>
          <p className="row_3_para">
            One of the most rewardingaspects of traveling is immersing yourself
            in the local culture and customs. This includes trying local
            cuisine, attending cultural events and festivals, and interacting
            with locals. Learning a few phrases in the local language can also
            go a long way in making connections and showing respect.
          </p>
        </div>
        
      </div>
      <Footer />
    </>
  );
}

export default BlogDetail;

