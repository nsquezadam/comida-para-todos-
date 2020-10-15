import React, { Fragment } from "react";
//import facebook from "../../icons/facebook.png";
// npm install --save-dev @iconify/react @iconify/icons-cib
import { Icon } from "@iconify/react";
import facebookIcon from "@iconify/icons-cib/facebook";
import twitterWithCircle from "@iconify/icons-entypo-social/twitter-with-circle";
import instagramWithCircle from "@iconify/icons-entypo-social/instagram-with-circle";
import "../../assets/styles/components/menu/LinksRRSS.scss";

function LinksRRSS() {
  return (
    <Fragment>
      <div className="boxContainerRRSS">
        <div className="containerRRSS">
          <a href="https://www.facebook.com/Comida-para-Todos-100133851719302/">
            <Icon icon={facebookIcon} color="#333333" />
          </a>
        </div>
        <div className="containerRRSS">
          <a href="https://www.instagram.com/comida_para_todos_cl/">
            <Icon icon={instagramWithCircle} color="#333333" />
          </a>
        </div>

        <div className="containerRRSS">
          <a href="https://twitter.com/ChileComida?s=08">
            <Icon icon={twitterWithCircle} color="#333333" />
          </a>
        </div>
      </div>
    </Fragment>
  );
}
export default LinksRRSS;
