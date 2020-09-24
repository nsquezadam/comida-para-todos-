import React, { Fragment } from "react";
import { Icon} from '@iconify/react';
// import twotoneFacebook from '@iconify/icons-ic/twotone-facebook';
import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";

function LinksRRSS() {
  return (
    <Fragment>
    
        <div className="containerRRSS">
        <a href="https://www.instagram.com/">
          <Icon icon={instagramWithCircle} color="#828282" />
        </a>
        </div>

        <div className="containerRRSS">
        <a href="https://www.twitter.com/">
          <Icon icon={twitterWithCircle} color="#828282" />
        </a>
        </div>
    
    </Fragment>
  );
}
export default LinksRRSS;
