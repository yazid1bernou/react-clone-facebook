import './post.css';
import MoreVertIcon from '@mui/icons-material/MoreVert';

export default function Post() {
  return (
        <div className='post'>
             <div className="postWrapper">
                <div className="postTop">
                     <div className="postTopLeft">
                        <img className="postProfileImg" src="/assets/person/1.jpeg" alt="" />
                        <span className="postUsername">Bernou Adem</span>
                        <span className="postDate">10 min ago</span>
                     </div>
                     <div className="postTopRight">
                        <MoreVertIcon />
                     </div>
                </div>
                <div className="postCenter">
                    <span className="postText">
                     Hey ! it's my first post .
                    </span>
                    <img  className="postImg" src="/assets/post/1.jpeg" alt="" />
                </div>
                <div className="postBottom">
                     <div className="postBottomLeft">
                          <img src="/assets/like.png" alt="" />
                          <img src="/assets/heart.png" alt="" />
                          <span className="postLikeCounter">32 people like it</span>
                     </div>
                     <div className="postBottomRight">
                          <span className="postCommentText">9 comments</span>
                     </div>
                </div>
             </div>
        </div>
  )
}
