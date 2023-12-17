import "./home-card.css";
export default function HomeCard() {
  return (
    <div className="home-card">
      <div className="home-card-image">
        <img
          className="img-home-card"
          src="https://images.unsplash.com/photo-1500622944204-b135684e99fd?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8bmF0dXJhbHxlbnwwfHwwfHx8MA%3D%3D"
          alt=""
        />
      </div>

      <div className="info">
        <div>
          <p className="date">20 November, 2023</p>
          <h3 className="blog-heading">Lorem ipsum dolor sit amet.</h3>

          <p className="blog-desc">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae aut
            id ullam repellendus iusto non itaque possimus sit ipsam aliquam!
          </p>
        </div>
        <div className="author-info">
          <img
            src="src/assets/human-img.jpeg"
            alt="author-img"
            className="author-pic"
          />
          <p className="author-name">Harris</p>
        </div>
      </div>
    </div>
  );
}
