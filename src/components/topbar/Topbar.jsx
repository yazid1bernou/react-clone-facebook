import './topbar.css';
import { Search , Person , Chat , Notifications } from '@mui/icons-material';
export default function Topbar () {
    return (
        <div className='topbarContainer'>
              <div className="topbarLeft">
                 <span className='logo'> Yazid social</span>
              </div>
              <div className="topbarCenter">
                  <div className="searchbar">
                     <Search />
                     <input type="text" placeholder='Search for Friend , posts , videos .' className='searchInput' /> 
                  </div>
              </div>
              <div className="topbarRight">
                   <div className="topbarLinks">
                     <span className="topbarLink">Home page</span>
                     <span className="topbarLink">Timeline</span>
                   </div>
                   <div className="topbarIncons">
                       <div className="topbarIconItem">
                          <Person />
                          <span className="topbarInconBadge">
                              1
                          </span>
                       </div>
                       <div className="topbarIconItem">
                          <Chat />
                          <span className="topbarInconBadge">
                             2
                          </span>
                       </div>
                       <div className="topbarIconItem">
                          <Notifications />
                          <span className="topbarInconBadge">
                             3
                          </span>
                       </div>
                   </div>
                   <img  src='/assets/person/1.jpeg' alt='' className='topbarImage' />
              </div>
        </div>
    )
}