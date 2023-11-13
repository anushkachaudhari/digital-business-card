import React from "react";
import ReactDOM from "react-dom/client";

export default function Main() {
  return (
    <main>
      <section className="main--about">
        <h2>About</h2>
        <p>
          Hi everyone, my name is Anushka Chaudhari, and I am a programmer
          analyst intern here at Walmart! I completed my bachelors in Computer
          Science at the Georgia Institute of Technology last Spring and am now
          pursuing my Masters in Computer Science here again. I have experience
          working as a software engineer in the past, and now I am excited to
          expand my skillbase and knowledge.{" "}
        </p>
      </section>
      <section className="main--interests">
        <h2>Interests</h2>
        <p>
          Some of my interests include baking, going on runs, and watching TV
          shows on Netflix. One of my favorites is Breaking Bad. When I'm not
          doing those I'm usually spending time with my friends and family or
          listening to some music.{" "}
        </p>
      </section>
    </main>
  );
}
