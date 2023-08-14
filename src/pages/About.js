import React from "react";
import MultiplePizzas from "../assets/multiplePizzas.jpeg";
import "../styles/About.css";
function About() {
  return (
    <div className="about">
      <div
        className="aboutTop"
        style={{ backgroundImage: `url(${MultiplePizzas})` }}
      ></div>
      <div className="aboutBottom">
        <h1> ABOUT US</h1>
        <p>
        Welcome to God's Pizza, your passport to a world of heavenly flavors! Our pizzeria is a sacred haven where time-honored traditions meet a modern twist. With a celestial dedication to crafting each pie, we blend premium ingredients, secret sauces, and expert artistry to deliver a slice of divinity in every bite. From classic creations to bold innovations, our menu is a celestial symphony of taste that promises to elevate your pizza experience. Whether you dine in our welcoming ambiance or have a taste of paradise delivered to your doorstep, God's Pizza invites you to savor the divine essence of pizza perfection. Join us in this gastronomic odyssey and treat your senses to the extraordinary – after all, at God's Pizza, every slice is a touch of the divine.
        </p>
      </div>
    </div>
  );
}

export default About;
