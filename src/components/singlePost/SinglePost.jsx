import "./singlePost.css";

export default function SinglePost() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
        />
        <h1 className="singlePostTitle">
          Lorem ipsum dolor sit amet.
          <div className="singlePostEdit">
            <i className="singlePostIcon far fa-edit"></i>
            <i className="singlePostIcon far fa-trash-alt"></i>
          </div>
        </h1>
        <div className="singlePostInfo">
          <span className="singlePostAuthor">
            Author: <b>Fiticostini</b>
          </span>
          <span className="singlePostDate">1 hour ago</span>
        </div>
        <p className="singlePostDesc">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
          animi cum illo ipsum nisi impedit libero dolor id soluta excepturi
          fugiat, rerum commodi reiciendis voluptatum sint aliquid voluptatibus
          ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
          animi cum illo ipsum nisi impedit libero dolor id soluta excepturi
          fugiat, rerum commodi reiciendis voluptatum sint aliquid voluptatibus
          ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
          animi cum illo ipsum nisi impedit libero dolor id soluta excepturi
          fugiat, rerum commodi reiciendis voluptatum sint aliquid voluptatibus
          ad.Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae in
          animi cum illo ipsum nisi impedit libero dolor id soluta excepturi
          fugiat, rerum commodi reiciendis voluptatum sint aliquid voluptatibus
          ad.
        </p>
      </div>
    </div>
  );
}
