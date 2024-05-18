import Image from "next/image";
import Header from "./components/header";
import OurStory from "./components/about";
import { FlipWordsDemo } from "./components/words-section";
import { ImagesSliderDemo } from "./components/imagesslider";
import TextImageComponent from "./components/subscribe";
import Footer from "./components/footer";
import SimpleMap from "./components/google-maps"
import ContactUs from "./components/contact-us";

export default function Home() {
  return (
   <>
  
 <Header />
      
    <div className="flex justify-center bg-white">
        <Image
          src="/proteas.png"
          width={500} // Adjust width to fill the full width
          height={400}
          alt="Picture of the author"
        />
      </div>
    <OurStory />

    <ImagesSliderDemo />

    <div className="bg-white">
      <TextImageComponent
        text={<p>This is some text content.</p>}
        image={<Image src="/proteas.png" alt="Image" 
        width={500} // Adjust width to fill the full width
        height={400}
        />}
      />
    </div>
    <SimpleMap />
    <ContactUs />
<Footer />
  </>
  );
}
