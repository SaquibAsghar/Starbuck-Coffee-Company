import "./App.css";
import Spotify from "./assets/Spotify";
import StarBucksLogo from "./assets/StarBucksLogo";
import Button from "./components/Button/Button";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import Wrapper from "./components/WrapperSection/Wrapper";

function App() {
  return (
    <>
      <nav>
        <div className="flex h-[51px] bg-slate-200">
          <div>
            <StarBucksLogo />
          </div>
          <NavBar />
        </div>
      </nav>

      <div>
        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88178.jpg"
          text="Hand holding a phone with a Cafe Latte and Bacon Gouda sandwich."
        ></Wrapper>

        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88117.jpg"
          text="A Starbucks® beverage and food item near a mobile phone with Starbucks mobile app pay screen open. They are surrounded by gold Stars."
        />
        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88122.jpg"
          text="A cold espresso drink in a tall, clear glass with a creamy marbling that gets darker toward the bottom."
        />
        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88120.jpg"
          text="A latte with crema on top next to a cold coffee with frothy topping, both in clear glasses."
        />
        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88124.jpg"
          text="Two square, egg-based breakfast items with bits of spinach and chives showing."
        />
        <Wrapper
          imageSrc="https://content-prod-live.cert.starbucks.com/binary/v2/asset/137-88216.jpg"
          text="Two tumblers and one cold cup featuring Alison Bremner's art on a colored background."
        />
      </div>

      <section>
        <article>
          <span>*Triple Star Tuesday:​</span>
          <p>
            Offer valid 1/9/24 at participating stores. Must activate this offer
            to earn triple Stars on transactions made during the offer window.
            Stars cannot be earned on purchases of alcohol, Starbucks Cards or
            Starbucks Card reloads. See starbucks.com/terms for details.​
          </p>
        </article>
        <article>
          <span>$3 Thursday:​​</span>
          <p>
            Valid 12-6pm only on 1/11/24 at participating stores on a grande or
            smaller handcrafted drink. Customizations cost extra. Excludes
            canned, bottled beverages and alcohol. Valid for one time use.
            Cannot be combined with other offers or discounts. Excludes delivery
            services.​​
          </p>
        </article>
        <article>
          <span>BOGO Weekend:​​</span>
          <p>
            Valid 12-6p only on 1/13/24-1/14/24 at participating stores. Buy a
            handcrafted drink, get one of equal or lesser value for free ($10
            max value). Product availability varies by store. Limited to stock
            on hand. Cannot be combined with other offers or promotions.
            Excludes delivery services.​
          </p>
        </article>
      </section>

      <Footer />

     
    </>
  );
}

export default App;
