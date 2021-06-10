import React,{ useState, useEffect } from "react";
import SearchForm from "./components/SearchForm";
import IpDetails from "./components/IpDetails";
import ShowMap from "./components/ShowMap";
import "./scss/style.scss";
import "leaflet/dist/leaflet.css";

function App() {
  
  const [ipTrack, setIpTrack] = useState({}); //declaare a new state ipTrack for information to be shown
  const [ipDom, setIpDom] = useState("");// declare a new state ipDom for domain.

  const getIp = async (ipDom, isDom)=>{
    let reqUrl;
    if(ipDom){
      if(isDom){
        reqUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}&domain=${ipDom}`
      }
    }
    else{
      reqUrl = `https://geo.ipify.org/api/v1?apiKey=${process.env.REACT_APP_API_KEY}`
    }

    const info = await fetch(reqUrl).then(
      (res) => res.json()).then((info) => {
        const {ip, location, isp} = info;
        return{
          ip: ip,
          loc: location.city,
          tz: location.timezone,
          isp: isp,
          lat: location.lat,
          lng: location.lng,
        };
      });
    return info;
  };

  useEffect(()=>{
    setIpTrack({loading: true});
    getIp().then((info)=>{
      setIpTrack({...info, loading:false})
    });
  }, []);

  const getIpTrack = (ipDom,isDom)=>{
    setIpDom({...ipTrack, loading: true});
    getIp(ipDom, isDom).then((info)=>{
      setIpTrack({...info, loading: false});
    });
  };
  
  if(ipTrack.loading){
    return <div></div>
  }
  
  return (
    <div>
      <SearchForm
        ipDom={ipDom}
        getIpTrack={getIpTrack}
        setIpDom={setIpDom}
      >      
        <IpDetails ipTrack={ipTrack} />
      </SearchForm>
      
      <ShowMap position={{lat: ipTrack.lat, lng: ipTrack.lng}} />
    </div>
  );
}

export default App;
