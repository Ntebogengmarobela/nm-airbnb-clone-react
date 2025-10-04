import React from 'react';
import Banner from './Banner'
import "./Home.css";
import Card from './Card';
// import "./Card.css"

const Home = () => {
  return (
    <div className="home">
      <Banner />
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/Mt/MtTemplate-120627/original/15b314ec-e389-4700-9c6f-11176516418a.jpeg?im_w=960"
          title="Online Experiences"
          description="Unique activities we can do together, led by a world of hosts"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-1381736899277005148/original/e0f260b4-99c1-4324-a4d1-be4564146981.jpeg?im_w=720"
          title="Unique stays"
          description="Spaces that are more that just a place to sleep"
        />
        <Card
          src="https://a0.muscache.com/4ea/air/v2/pictures/bb2bc09b-6284-4198-bf6a-fe4e65fd5967.jpg?im_w=960"
          title="Entire homes"
          description="Comfortable private places, with room for friends or family"
        />
      </div>
      <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6MTI3ODM2MDE2Mzc5MjM2MTIxMw%3D%3D/original/bdee6092-0926-48c8-95b7-e260459c0316.jpeg?im_w=720"
          title="Entire rental unit in Cape Town, South Africa"
          description="2 guests · 1 bedroom · 1 bed · 1.5 baths"
          price="R38,358 ZAR for 5 nights"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-941025641566774873/original/b0c1d03b-9435-4452-a30a-15305e691f10.jpeg?im_w=720"
          title="Entire rental unit in Sandton, South Africa"
          description="6 guests · 3 bedrooms 2 beds · 3.5 baths"
          price="R7,000 ZAR for 1 night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/hosting/Hosting-U3RheVN1cHBseUxpc3Rpbmc6ODI5NjE4MzczMDIwNTY2MTk2/original/53c4c642-047c-4544-80a7-ee7339b49bf2.jpeg?im_w=720"
          title="Luxurious 5-Bedroom Villa in Bishopscourt"
          description="10 guests · 5 bedrooms ·5 beds · 5.5 baths"
          price="R240,691 ZAR for 5 nights"
        />
      </div>
    </div>
  );
}

export default Home;
