import './share.css';
import PermMediaIcon from '@mui/icons-material/PermMedia';
export default function Share() {
  return (
          <div className='share'>
               <div className="shareWrapper">
                   <div className="shareTop">
                     <img  className="shareProfileImg" src="/assets/person/1.jpeg" alt="" />
                     <input type="text" placeholder="What's in your mind " 
                         className="shareInput" />
                   </div>
                   <hr className="shareHr"/>
                   <div className="shareBottom">
                      <div className="shareOptions">
                          <div className="shareOption">
                            <PermMediaIcon  className="shareIcon" />
                             <span className='shareOptionText'>Photo or Video </span>
                          </div>
                      </div>
                   </div>
               </div>
          </div>
  )
}
