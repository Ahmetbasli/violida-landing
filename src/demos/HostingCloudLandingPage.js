import React, { useRef } from "react";
import AnimationRevealPage from "helpers/AnimationRevealPage.js";
import Hero from "components/hero/TwoColumnWithPrimaryBackground.js";
import Features from "components/features/ThreeColWithSideImageWithPrimaryBackground.js";
import MainFeature from "components/features/TwoColWithButton.js";
import Pricing from "components/pricing/ThreePlansWithHalfPrimaryBackground.js";
import Testimonial from "components/testimonials/SimplePrimaryBackground.js";
import FAQ from "components/faqs/TwoColumnPrimaryBackground.js";
import Footer from "components/footers/FiveColumnDark.js";
import serverRedundancyIllustrationImageSrc from "images/server-redundancy-illustration.svg";
import serverSecureIllustrationImageSrc from "images/server-secure-illustration.svg";

export default () => {
  const features = useRef(null);
  const pricing = useRef(null);
  // console.log(features);
  // const executeFeaturesScroll = () => {
  //   console.log(features.current);
  //   features.current.scrollIntoView();
  // };
  // const executePricingScroll = () => pricing.current.scrollIntoView();

  return (
    <AnimationRevealPage>
      <Hero
      // executeFeaturesScroll={executeFeaturesScroll}
      // executePricingScroll={executePricingScroll}
      />
      <div ref={features}>
        <Features />
      </div>
      <div ref={pricing}>
        <Pricing />
      </div>
      {/* <MainFeature 
        subheading="Reliable"
        heading="Highly Redundant Servers With Backup"
        imageSrc={serverRedundancyIllustrationImageSrc}
        buttonRounded={false}
      />
      <MainFeature 
        subheading="Secure"
        heading="State of the Art Computer Security"
        imageSrc={serverSecureIllustrationImageSrc}
        buttonRounded={false}
        textOnLeft={false}
      /> */}
      <Testimonial />
      <FAQ />
      <Footer />
    </AnimationRevealPage>
  );
};
