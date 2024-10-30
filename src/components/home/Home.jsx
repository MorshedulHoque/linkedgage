import React from "react";
import Hero from "./Hero";
import HeroSecond from "./HeroSecond";
import HeroThird from "./HeroThird";
import HeroFourth from "./HeroFourth";
import HeroFifth from "./HeroFifth";
import NewSlider from "./NewSlider";
import ReviewCard from "./ReviewCard";
import FAQ from "./Faq";
import NewsletterSignup from "./NewsletterSignup";


const Home = () => {
  return (
    <div className="relative">
        <Hero />
        <HeroSecond />
        <NewSlider />
        <HeroThird />
        <HeroFourth />
        <ReviewCard />
        <HeroFifth />
        <FAQ />
        <NewsletterSignup/>
    </div>
  );
};

export default Home;
