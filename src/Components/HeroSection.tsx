import { useState } from 'react';
import hero from '../assets/hero.jpeg'
const HeroSection = () => {
  let [group, setGrpStatus]=useState<boolean>(true);
  return (
    <div
      className="container-fluid p-0 position-relative custom-bg-container"
      style={{
        height: "440px",background:`url(${hero}) center center/cover no-repeat`
      }}
    >
      <div className="container d-flex flex-column h-100 background-text-home">
        <div className="d-flex d-lg-none justify-content-between mt-3">
          <button className="btn">
          <img src="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M16%207H3.83L9.42%201.41L8%200L0%208L8%2016L9.41%2014.59L3.83%209H16V7Z'%20fill='white'/%3e%3c/svg%3e" alt="back"/>
          </button>
          <div className="btn join-group p-2 text-white" onClick={()=>{
            setGrpStatus((prevState)=>!prevState);
          }}>{group?'Join Group':'Leave Group'}</div>
        </div>
        <div>
          <h1 className="text-white">Computer Engineering</h1>
          <p className="text-white mb-5">
            142,765 Computer Engineers follow this
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
