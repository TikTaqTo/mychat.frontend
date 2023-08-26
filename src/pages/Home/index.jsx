import React from "react";
import { Message } from "../../components/";

import "./Home.scss";

const Home = () => {
  return (
    <section className="home">
      <Message
        avatar={"https://aniyuki.com/wp-content/uploads/2023/02/aniyuki-berserk-avatar-41.jpg"}
        text={"Что вершит судьбу человечества в этом мире? Некое незримое существо или закон, подобно Длани Господней парящей над миром? По крайне мере истинно то, что человек не властен даже над своей волей."}
        date={new Date(2023, 7, 26, 21, 5)}/>
    </section>
  );
};

export default Home;