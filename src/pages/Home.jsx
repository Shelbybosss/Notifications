import React from 'react';
import "./Home.css";
import image from "../assets/assets/images/avatar-jacob-thompson.webp"
import image1 from "../assets/assets/images/avatar-angela-gray.webp";
import image2 from "../assets/assets/images/avatar-anna-kim.webp";
import image3 from "../assets/assets/images/avatar-jacob-thompson.webp";
import image4 from "../assets/assets/images/avatar-kimberly-smith.webp";
import image5 from "../assets/assets/images/avatar-mark-webber.webp";
import image6 from "../assets/assets/images/avatar-nathan-peterson.webp";
import image7 from "../assets/assets/images/avatar-rizky-hasanuddin.webp";


function Home() {
  return (
    <div className='Main'>
        <div className='inner-main'>
            <div className='header'>
                <p className='main-heading'>Notifications <span className='number'>3</span></p>
                <p className='hover'>Mark All as Read</p>
            </div>

            <div className='notifications'>

                 <div className='notification-main' style={{backgroundColor:'#e6f3ff'}}>

                    <div className='notification-left'>
                        <img src={image2} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'> Mark Webber</span> reacted to your recent post My first tournament today! <span className='reddot'></span> </div>
                    <div>1m ago</div>
                    </div>

                </div>




                <div className='notification-main' style={{backgroundColor:'#e6f3ff'}}>

                    <div className='notification-left' >
                        <img src={image1} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'>Angela Gray</span> followed you <span className='reddot'></span></div>
                    <div>  5m ago</div>
                    </div>

                </div>

               


                <div className='notification-main' style={{backgroundColor:'#e6f3ff'}}>

                    <div className='notification-left' >
                        <img src={image3} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'>Jacob Thompson</span> has joined your group <span className='clubname'>Chess Club</span> <span className='reddot'></span></div>
                    <div>1 day ago</div>
                    </div>

                </div>


                <div className='notification-main'>

                    <div className='notification-left'>
                        <img src={image4} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'>Rizky Hasanuddin</span> sent you a private message </div>
                    <div>5 days ago</div>
                    <div className='comment'> Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
                    I'm already having lots of fun and improving my game.</div>
                    </div>

                </div>


                <div className='notification-main'>

                    <div className='notification-left'>
                        <img src={image5} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'> Kimberly Smith </span> commented on your picture </div>
                    <div> 1 week ago</div>
                    </div>

                </div>

                 <div className='notification-main'>

                    <div className='notification-left'>
                        <img src={image6} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'>Nathan Peterson</span>   reacted to your recent post <span className='bold'>5 end-game strategies to increase your win rate</span> </div>
                    <div>  2 weeks ago</div>
                    </div>

                </div>

                <div className='notification-main'>

                    <div className='notification-left'>
                        <img src={image7} alt="jacob"></img>
                    </div>

                    <div className='notification-right'>
                    <div><span className='name'> Anna Kim     </span> left the group  <span className='clubname'>Chess Club</span></div>
                    <div>2 weeks ago</div>
                    </div>

                </div>

               

              

            </div>
        </div>
    </div>
  )
}

export default Home