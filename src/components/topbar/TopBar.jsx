import "./topbar.css"

export default function TopBar() {
  return (
    <div className='top'>
        <div className='topLeft'>
            <i className="topIcon fa-brands fa-square-facebook"></i>
            <i className="topIcon fa-brands fa-square-x-twitter"></i>
            <i className="topIcon fa-brands fa-square-pinterest"></i>
            <i className="topIcon fa-brands fa-square-instagram"></i>
        </div>
        <div className='topCenter'>
            <ul className='topList'>
                <li className='topListItem'>HOME</li>
                <li className='topListItem'>ABOUT</li>
                <li className='topListItem'>CONTACT</li>
                <li className='topListItem'>WRITE</li>
                <li className='topListItem'>LOGOUT</li>
            </ul>
        </div>
        <div className='topRight'>
            <img
                className='topImg'
                src='https://images.pexels.com/photos/18201340/pexels-photo-18201340/free-photo-of-mujer-cara-retrato-pelirrojo.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                alt=''
            />
            <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
        </div>
       
    </div>

  )
}
