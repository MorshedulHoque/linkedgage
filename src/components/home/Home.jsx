import React from "react";
import { Helmet } from "react-helmet"; // Import Helmet
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
    <div className="relative overflow-hidden">
      {/* Add Helmet component for dynamic meta description */}
      <Helmet>
        <title>LinkedGage - Boost LinkedIn Engagement</title>
        <meta
          name="description"
          content="Boost LinkedIn engagement with LinkedGage! AI-powered comments in your tone, saving time and building connections. Perfect for professionals and brands to stand out."
        />
      </Helmet>
      
      <Hero />
      <HeroSecond />
      <NewSlider />
      <HeroThird />
      <HeroFourth />
      <ReviewCard />
      <HeroFifth />
      <FAQ />
      <NewsletterSignup />
    </div>
  );
};

export default Home;
