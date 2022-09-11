import { cards } from "../constants";
import { Wrapper } from "../assets/wrapper/PricingStyles";

const Pricing = () => {
  return (
    <Wrapper>
      <div id="pricing" className="cards-2">
        <div className="absolute bottom-0 h-40 w-full bg-white"></div>
        <div className="container px-4 pb-px sm:px-8">
          <h2 className="mb-2.5 text-white lg:max-w-xl lg:mx-auto">
            Pricing options for all budgets
          </h2>
          <p className="mb-16 text-white lg:max-w-3xl lg:mx-auto">
            Our pricing plans are setup in such a way that any user can start
            enjoying Pavo without worrying so much about costs. They are
            flexible and work for any type of industry{" "}
          </p>

          {cards.map((card) => {
            const { id, title, content, price } = card;

            return (
              <div key={id} className="card">
                <div className="card-body">
                  <div className="card-title">{title}</div>
                  <div className="price">
                    <span className="currency">$</span>
                    <span className="value">{price}</span>
                  </div>
                  <div className="frequency">monthly</div>
                  <p>{content}</p>
                  <ul className="list mb-7 space-y-2 text-left">
                    {card.lists.map((list) => {
                      const { first, second, third, fourth } = list;

                      return (
                        <>
                          <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>{first}</div>
                          </li>
                          <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>{second}</div>
                          </li>
                          <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>{third}</div>
                          </li>
                          <li className="flex">
                            <i className="fas fa-chevron-right"></i>
                            <div>{fourth}</div>
                          </li>
                        </>
                      );
                    })}
                  </ul>
                  <div className="button-wrapper">
                    <a className="btn-solid-reg page-scroll" href="#download">
                      Download
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Pricing;
