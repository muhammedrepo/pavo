import { features } from "../constants";
import { Wrapper } from "../assets/wrapper/FeaturesStyles";

const Features = () => {
  return (
    <Wrapper id="features">
      <div className="cards-1">
        <div className="container px-4 sm:px-8 xl:px-4 ">
          {features.map((feature) => {
            const { id, icon, title, content } = feature;

            return (
              <div key={id} className="card">
                <div className="card-image">
                  <img src={icon} alt="icon" />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{title}</h5>
                  <p className="mb-4">{content}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </Wrapper>
  );
};

export default Features;
