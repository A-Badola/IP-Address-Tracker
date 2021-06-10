import React from "react";

function IpDetails(props) {
  const { ip, loc, tz, isp} = props.ipTrack; // ip Address, location, timezone, service provider
  return(
    <div className="ipinfo p-medium">
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Ip Address</h3>
        <p className="ipinfo__content">{ip}</p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Location</h3>
        <p className="ipinfo__content">{loc ? loc : "---"}</p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">Timezone</h3>
        <p className="ipinfo__content">{tz? `UTC${tz}` : "---"}</p>
      </div>
      <div className="ipinfo-box">
        <h3 className="heading-secondary">ISP</h3>
        <p className="ipinfo__content">{isp? isp : "---" }</p>
      </div>
    </div>
  );
}

export default IpDetails;