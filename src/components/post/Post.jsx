import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
        <div className='post'>
             <div className="postWrapper">
                <div className="postTop">
                     <div className="postTopLeft">
                        <img className="postProfileImg" src="/assetss/person/1.jpeg" alt="" />
                        <span className="postUsername">Bernou Adem</span>
                        <span className="postDate">10 min ago</span>
                     </div>
                     <div className="postTopRight">
                        <MoreVertIcon />
                     </div>
                </div>
                <div className="postCenter">

                </div>
                <div className="postBottom">

                </div>
             </div>
        </div>
  )
}
