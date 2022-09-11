import styled from "styled-components";
import { articleDetail, articleDetailSmall } from "../assets";
const Wrapper = styled.section`
  .ex-header {
    padding-top: 8.5rem;
    padding-bottom: 4rem;
    background-color: #f1f9fc;
  }

  .ex-basic-1 .list-unstyled .fas {
    font-size: 0.375rem;
    line-height: 1.625rem;
  }

  .ex-basic-1 .text-box {
    padding: 1.25rem 1.25rem 0.5rem 1.25rem;
    background-color: #f1f9fc;
  }

  .ex-cards-1 .card {
    border: none;
    background-color: transparent;
  }

  .ex-cards-1 .card .fa-stack {
    width: 2em;
    font-size: 1.125rem;
  }

  .ex-cards-1 .card .fa-stack-2x {
    color: #ff6e84;
  }

  .ex-cards-1 .card .fa-stack-1x {
    color: #ffffff;
    font-weight: 700;
    line-height: 2.125rem;
  }

  @media (min-width: 768px) {
    .ex-basic-1 .text-box {
      padding: 1.75rem 2rem 0.875rem 2rem;
    }
  }

  @media (min-width: 1024px) {
    .ex-cards-1 .card {
      display: inline-block;
      width: 306px;
      vertical-align: top;
    }

    .ex-cards-1 .card:nth-of-type(3n + 2) {
      margin-right: 1rem;
      margin-left: 1rem;
    }
  }

  @media (min-width: 1280px) {
    .ex-cards-1 .card {
      width: 328px;
    }

    .ex-cards-1 .card:nth-of-type(3n + 2) {
      margin-right: 2.875rem;
      margin-left: 2.875rem;
    }
  }
`;

const Article = () => {
  return (
    <Wrapper>
      <header className="ex-header bg-gray">
        <div className="container px-4 sm:px-8 xl:px-4">
          <h1 className="xl:ml-24">Article Details</h1>
        </div>
      </header>

      <div className="ex-basic-1 py-12">
        <div className="container px-4 sm:px-8">
          <img
            className="inline mt-12 mb-4"
            src={articleDetail}
            alt="alternative"
          />
        </div>
      </div>

      <div className="ex-basic-1 pt-4">
        <div className="container px-4 sm:px-8 xl:px-32">
          <p className="mb-4">
            {" "}
            Are you looking for ways to grow the user base for your mobile
            application? Then you have arrived at the right place. Here you will
            find a curated collection of landing page HTML templates that will
            help you build an engaging online presentation for your mobile app
            and convince visitors to become loyal paying users.
          </p>
          <p className="mb-12">
            {" "}
            All templates in the roundup are premium which means you need to pay
            for them but we're talking small amounts of money which won't break
            your bank account but will help authors make a living. In return you
            get a high quality, updated item together with high quality and very
            prompt technical support.
          </p>

          <h2 className="mb-4">Advantages of working with this template</h2>
          <p className="mb-4">
            Besides buying the template you need some basic web skills in order
            to customize it. Nothing too fancy HTML/CSS will do just fine and a
            little bit of image editing. You can always hire a web designer to
            help with the customization work while you provide the template and
            the content that is the most important.
          </p>
          <p className="mb-6">
            Riga is a landing page HTML template made with Tailwind CSS to help
            you showcase your mobile app online and persuade visitors to
            download it from the app stores. The author used Tailwind CSS to
            build the template and integrated a nice animated navigation that
            slides from outside the screen.
          </p>
        </div>
      </div>

      <div className="ex-cards-1 py-4">
        <div className="container px-4 sm:px-8">
          <div className="card">
            <ul className="list-unstyled">
              <li className="flex">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x"></span>
                  <span className="fa-stack-1x">1</span>
                </span>
                <div className="flex-1 ml-3">
                  <h5 className="mt-0.5 mb-1.5">High Quality Service</h5>
                  <p className="mb-4">
                    Features include an eye catching morphtext in the header,
                    details lightbox for more details information
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <ul className="list-unstyled">
              <li className="flex">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x"></span>
                  <span className="fa-stack-1x">2</span>
                </span>
                <div className="flex-1 ml-3">
                  <h5 className="mt-0.5 mb-1.5">Prompt Timely Delivery</h5>
                  <p className="mb-4">
                    Statistics numbers for important values, card slider for
                    testimonials, image slider for customer logos
                  </p>
                </div>
              </li>
            </ul>
          </div>

          <div className="card">
            <ul className="list-unstyled">
              <li className="flex">
                <span className="fa-stack">
                  <span className="fas fa-circle fa-stack-2x"></span>
                  <span className="fa-stack-1x">3</span>
                </span>
                <div className="flex-1 ml-3">
                  <h5 className="mt-0.5 mb-1.5">Skilled Team Involved</h5>
                  <p className="mb-4">
                    Some useful extra pages are bundled with the template lik
                    article details, terms conditions and privacy policy
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="ex-basic-1 pt-6 pb-12">
        <div className="container px-4 sm:px-8 xl:px-32">
          <p className="mb-12">
            {" "}
            Features include an eye catching morphtext in the header, details
            lightbox for more details information, statistics numbers for
            important values, card slider for testimonials, image slider for
            customer logos and working forms that will enable your landing page
            to provide leads in order to achieve your marketing goals.
          </p>

          <h2 className="mb-6">New elements added to the package</h2>
          <img
            className="inline mb-12"
            src={articleDetailSmall}
            alt="alternative"
          />
          <p className="mb-4">
            {" "}
            Some useful extra pages are bundled with the template lik article
            details, terms conditions and privacy policy which can be customized
            as per your requirements. Riga has an impactful dark style design
            combined with warm colors and angular background shapes with the
            unique goal of making your mobile app stand out.{" "}
          </p>
          <p className="mb-12">
            {" "}
            Leon is an easy to customize landing page HTML template built with
            Tailwind CSS for promoting mobile apps to the online audience and
            making visitors download them from app stores. This template is
            built with HTML and Tailwind CSS to ensure the highest flexibility
            for all users.
          </p>
          <div className="text-box mb-12">
            <h3 className="mb-2">
              Visitors love a beautiful and efficient website
            </h3>
            <p className="mb-4">
              {" "}
              All designers, developers and tech-savvy people will be able to
              customize this template with basic web coding skills. Among the
              features you will find details lightbox for more details
              information, tabbed content for feature details, video lightbox,
              card slider for testimonials, statistics numbers, image slider for
              customer logos, dropdown navigation and useful extra pages for
              article details, terms.
            </p>
          </div>
          <p className="mb-6">
            {" "}
            Together with touches of call to action green, the overall landing
            page design will showcase your app beautifully and will help with
            convincing visitors to download it from the app stores. Orange and
            gray hues with one color backgrounds to maximize the impact of your
            content image slider for customer logos and working forms.
          </p>
          <ul className="list-unstyled mb-12 space-y-2">
            <li className="flex">
              <i className="fas fa-square"></i>
              <div className="flex-1 ml-2">
                <strong>Card slider</strong> for testimonials, statistics
                numbers for important values image slider for logos
              </div>
            </li>
            <li className="flex">
              <i className="fas fa-square"></i>
              <div className="flex-1 ml-2">
                <strong>Dropdown navigation</strong> and useful extra pages for
                article details, terms conditions and privacy policy
              </div>
            </li>
            <li className="flex">
              <i className="fas fa-square"></i>
              <div className="flex-1 ml-2">
                <strong>Clean light design</strong> mixing purple, orange and
                gray hues with one color backgrounds to maximize
              </div>
            </li>
            <li className="flex">
              <i className="fas fa-square"></i>
              <div className="flex-1 ml-2">
                <strong>Together with</strong> touches of call to action green,
                the overall landing page design will showcase your app
              </div>
            </li>
            <li className="flex">
              <i className="fas fa-square"></i>
              <div className="flex-1 ml-2">
                <strong>This template</strong> is built with HTML and Tailwind
                CSS to ensure the highest flexibility for all users
              </div>
            </li>
          </ul>

          <a className="btn-solid-reg mb-12" href="index.html#download">
            Download
          </a>
        </div>
      </div>
    </Wrapper>
  );
};

export default Article;
