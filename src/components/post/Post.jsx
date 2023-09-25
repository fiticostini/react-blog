import "./post.css";

export default function Post() {
  return (
    <div className="post">
      <img
        className="postImg"
        src="https://images.pexels.com/photos/1631677/pexels-photo-1631677.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt=""
      />
      <div className="postInfo">
        <div className="postCats">
          <span className="postCat">Music</span>
          <span className="postCat">life</span>
        </div>
        <span className="postTitle">Lorem ipsum dolor sit amet</span>
        <hr />
        <span className="postDate">1 hour ago</span>
      </div>
      <p className="postDesc">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Veniam officia
        voluptatem maiores. Voluptates ipsum voluptatem quae nisi odio. Magni
        temporibus voluptatem eos ea labore in expedita similique nesciunt minus
        dolores? Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Veniam officia voluptatem maiores. Voluptates ipsum voluptatem quae nisi
        odio. Magni temporibus voluptatem eos ea labore in expedita similique
        nesciunt minus dolores? Lorem ipsum, dolor sit amet consectetur
        adipisicing elit. Veniam officia voluptatem maiores. Voluptates ipsum
        voluptatem quae nisi odio. Magni temporibus voluptatem eos ea labore in
        expedita similique nesciunt minus dolores?
      </p>
    </div>
  );
}
