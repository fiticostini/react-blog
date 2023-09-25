import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React & Nodes</span>
        <span className="headerTitleLg">Blog</span>
      </div>
      <img
        className="headerImg"
        src="https://images.pexels.com/photos/12015355/pexels-photo-12015355.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
        alt=""
      />
    </div>
  );
}
