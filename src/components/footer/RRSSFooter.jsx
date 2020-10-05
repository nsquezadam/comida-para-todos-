import React, { Fragment } from "react";
import { Icon } from "@iconify/react";
import '../../assets/styles/components/RRSSFooter.scss'; 
import facebookIcon from "@iconify/icons-cib/facebook";
import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";

const RRSSFooter = () => {
  return (
    <Fragment>
      <div className="BoxContainerRRSS-footer">
        <div className="containerRRSS-Footer">
          <a href="https://www.twitter.com/">
            <Icon icon={twitterWithCircle} color="#FF8150" />
          </a>
        </div>
        <div className="containerRRSS-Footer">
          <a href="https://www.facebook.com/">
            <Icon icon={facebookIcon} color="#FF8150" />
          </a>
        </div>
        <div className="containerRRSS-Footer">
          <a href="https://www.instagram.com/">
            <Icon icon={instagramWithCircle} color="#FF8150" />
          </a>
        </div>
      </div>
    </Fragment>
  );
};

export default RRSSFooter;
