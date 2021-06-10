import React,{ useState } from "react";
import arrow from "../images/icon-arrow.svg";
function SearchForm({ipDom, getIpTrack, setIpDom, children}){
  const [error, setError] = useState(false);
  const dregex = new RegExp(
    "^(?!-)[A-Za-z0-9-]+([\\-\\.]{1}[a-z0-9]+)*\\.[A-Za-z]{2,6}$",
    "g"
  );

  const handleOnChange = (evt) =>{
    setIpDom(evt.target.value);
  }

  const handleSubmit = (evt) =>{
    evt.preventDefault();
    if(dregex.test(ipDom)){
      setError(false);
      getIpTrack(ipDom, true);
      return;
    }

    setError(true);
  };
  
  return(
    <div className="sForm padd-sm">
      <h3 className="heading-primary text-center mtb-small">IP Address Tracker</h3>
      <div className="sForm__sbar">
        <form className="sForm__fill" onSubmit={handleSubmit}>
          <input
            className="sForm__sbar-text"
            onChange={handleOnChange}
            value={ipDom}
            aria-label="ip address"
            placeholder="Search for any IP address or domain" 
            type="text">
          </input>
          {error && (
            <p className="sForm__err"
            >
            Invalid IP Address/Domain Name </p>
          )}
          <button
            aria-label="submit"
            className="sForm__sbar-btn"
            type="submit">
            <img src={arrow} alt="Arrow" />
          </button>
        </form>
      </div>
      {children}
    </div>
  )
}

export default SearchForm;