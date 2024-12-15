import ArticleComp from "./Components/ArticleComp";
import BelowSection from "./Components/BelowSection";
import HeroSection from "./Components/HeroSection";
import LocationAndGroups from "./Components/LocationAndGroups";
import Navbar from "./Components/Navbar";
import img1 from './assets/img-1.jpg'
import img2 from './assets/img-2.jpg'
import img3 from './assets/img-3.jpg'
import user2 from './assets/user2.jpg'
import user1 from './assets/user1.jpg'
import user3 from './assets/user3.jpg'
import user4 from './assets/user4.jpg'

import SignupModalMob from "./Components/SignUpModLMob";
import { useState } from "react";
const App = () => {
  let [isLogin, setLoginState]=useState<boolean>(false);
  let login=()=>{
    
    setLoginState((prev)=>!prev);
  }
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const handleSignupClick = () => {
    setIsModalOpen((prev) => !prev); // Toggle modal visibility
  };
  return (
    <div>
      
      <Navbar isLogin={isLogin} login={login}/>
      <HeroSection />
      <BelowSection />
      <hr className="mx-auto mt-0" style={{ maxWidth: '1048px' }} />
      <div className="mx-auto d-flex gap- justify-content-center" style={{ maxWidth: '1048px' }}>
        <div className="posts-center position-relative">
          <div className="d-flex d-lg-none w-100 position-absolute top-4 align-items-center justify-content-between custom-main-button">
            <div className="text-main-posts">Posts(368)</div>
            <button className="btn btn-filter d-flex align-items-center gap-2">
              Filter : All
              <img
                src="data:image/svg+xml,%3csvg%20width='22'%20height='22'%20viewBox='0%200%2022%2022'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='baseline-arrow_drop_down-24px'%20clip-path='url(%23clip0_1_1136)'%3e%3cpath%20id='Vector'%20d='M6.41667%209.16669L11%2013.75L15.5833%209.16669H6.41667Z'%20fill='black'/%3e%3c/g%3e%3cdefs%3e%3cclipPath%20id='clip0_1_1136'%3e%3crect%20width='22'%20height='22'%20fill='white'/%3e%3c/clipPath%3e%3c/defs%3e%3c/svg%3e"
                alt="arrowdown"
                width="20"
                height="20"
              />
            </button>
          </div>
          <main className="d-flex flex-column gap-4" >
            <ArticleComp img={img1} heading="What if famous brands had regular fonts? Meet RegulaBrands!" type="Article" logo="✍️"  workDesc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"  userImg={user1} username="Siddharth Goyal" views="1.4k"/>
            <ArticleComp img={img2} heading="Tax Benefits for Investment under National Pension Scheme launched by Government" type="Education" logo="🔬️"  workDesc="I’ve worked in UX for the better part of a decade. From now on, I plan to rei…"  userImg={user3} username="Siddharth Goyal" views="1.4k"/>
            <ArticleComp img={img3} heading="Finance & Investment Elite Social Mixer @Lujiazui" location="Ahmedabad, India" type="Meeting" logo="🗓️" dop='Fri, 12 Oct, 2018' buttonText="Visit Website"   userImg={user2} buttonColor="rgb(229, 97, 53)" username="Siddharth Goyal" views="1.4k"/>
            <ArticleComp  heading="Software Developer" type="Job" logo="💼️"  companyName="Innovaccer Analytics Private Ltd." location="Noida, India" buttonText="Apply on TimeJobs"   userImg={user4} buttonColor="rgb(2, 184, 117)" username="Siddharth Goyal" views="1.4k"/>
            <div
              className="d-flex flex-column border border-1 rounded-2"
              style={{
                maxWidth: '692px',
                borderColor: 'rgb(224, 224, 224)',
                fill: 'rgb(255, 255, 255)'
              }}
            />
            
            
            
          </main>
          
        </div>
        <LocationAndGroups/>
        <button onClick={handleSignupClick} id='signup' className="btn circle-write-post rounded-circle d-flex justify-content-center align-items-center position-fixed d-lg-none"
        style={{bottom:'18px', right:'18px'}}
        >
          <img src="data:image/svg+xml,%3csvg%20width='24'%20height='24'%20viewBox='0%200%2024%2024'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cg%20id='icon/image/edit_24px'%3e%3cpath%20id='icon/image/edit_24px_2'%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M17.6588%203C17.4088%203%2017.1488%203.1%2016.9588%203.29L15.1288%205.12L18.8788%208.87L20.7088%207.04C21.0988%206.65%2021.0988%206.02%2020.7088%205.63L18.3688%203.29C18.1688%203.09%2017.9188%203%2017.6588%203ZM14.0588%209.02L14.9788%209.94L5.91878%2019H4.99878V18.08L14.0588%209.02ZM2.99878%2017.25L14.0588%206.19L17.8088%209.94L6.74878%2021H2.99878V17.25Z'%20fill='white'/%3e%3c/g%3e%3c/svg%3e" alt="write a post" height="24" width="24"/>
          </button>
        {<SignupModalMob isModalOpen={isModalOpen} handleSignupClick={handleSignupClick}  />}
      </div>
      
    </div>
  );
};


export default App;
