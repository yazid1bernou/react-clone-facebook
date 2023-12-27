import Online from '../online/Online';
import './rightbar.css';
import {Users} from "../../dummyData";
export default function Rightbar() {
  return (
      <div className='rightbar'>
            <div className="rightbarWrapper">
                 <div className="birthdayContainer"></div>
                 <img  className="birthdayImg" src="/assets/gift.png" alt="" />
                 <span className="birthdayText">
                     <b>Adem bernou </b> and <b> 3 others friends </b> have birthday today
                 </span>
            </div>
            <img className="rightbarAd" src="/assets/ad.png" alt="" />
            <h4 className="rightbarTitle">Online Friends </h4>
            <ul className="rightbarFriendList">
              {Users.map((u) => (
                   <Online key={u.id} user ={u} />
              ))}
               
               
                
               
            </ul>
      </div>
  )
}
