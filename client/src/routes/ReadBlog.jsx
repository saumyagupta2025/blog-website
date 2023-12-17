import "./read-blog.css";
// import "./../src/assets/human-img.jpeg";
export default function ReadBlog() {
  return (
    <div className="page-container">
      <div className="blog-container">
        <div className="img-banner-container">
          <img
            src="https://c4.wallpaperflare.com/wallpaper/292/446/516/ultra-wide-photography-wallpaper-preview.jpg"
            alt=""
            className="banner-img"
          />
        </div>
        <h1 className="blog-heading">
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </h1>

        <p className="blog-text">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Architecto
          facilis tempore libero optio nemo explicabo accusamus! Illum beatae
          repellat praesentium quas odio eveniet voluptatum nobis officiis
          ratione perferendis! Eius voluptates accusamus harum adipisci impedit,
          in aperiam eligendi. Minima ad asperiores harum nemo placeat, delectus
          unde odio deleniti pariatur excepturi iste. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Consectetur maiores similique
          voluptatibus, in explicabo blanditiis facilis aut dolorum? Delectus
          numquam neque quos aspernatur culpa distinctio dolorem provident illo
          unde dolores maxime et blanditiis excepturi voluptate aliquid facere
          maiores officia dicta, dignissimos velit explicabo doloremque
          sapiente? Error inventore quo vitae laborum voluptate temporibus,
          doloribus enim, fugiat quis exercitationem quidem excepturi numquam?
        </p>

        <div className="blog-tags-container">
          <div className="tags">
            <p className="tag-name">Application</p>
            <p className="tag-name">Software</p>
            <p className="tag-name">Web Dev</p>
            <p className="tag-name">Artificial Intelligence</p>
          </div>
        </div>
      </div>

      <div className="author-info-container">
        <div>
          <img
            src="./../../src/assets/human-img.jpeg"
            alt="author-img"
            className="author-img"
          />
        </div>
        <div className="author-info">
          <h5 className="written-by">Written by Saumya Gupta</h5>
          {/* Prop.author-name */}
          <button className="follow-btn">Follow</button>
        </div>
        <p className="author-desc">Lorem ipsum dolor sit amet consectetur.</p>
        <hr />
      </div>
    </div>
  );
}
