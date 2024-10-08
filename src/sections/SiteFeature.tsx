import { Container, Card } from "..";
import { siteFeature } from "../SiteFeature";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const SiteFeature = () => {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <Container className="flex lg:flex-row flex-col w-full h-[fit-content] items-center lg:gap-[20px] gap-[10px] justify-between lg:px-[80px] lg:mt-7 lg:mb-7 px-[30px] mt-[200px] mb-[40px]">
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-col-1 gap-8 place-items-center"> {/* Fixed 3 columns */}
      {siteFeature.map((feature) => (
        <Card
          key={feature.id}
          className="flex flex-col gap-[40px] lg:w-[400px] w-[full] h-[fit-content] bg-slate-800 rounded shadow-lg"
        >
          <div
            className="flex justify-start items-center gap-4"
            data-aos={`${feature.direction}`}
          >
            <img
              src={feature.icon}
              alt=""
              className="w-[40px] h-[40px] rounded-[50%]"
            />
            <h5 className="text-white" data-aos={`${feature.direction}`}>
              {feature.featureName}
            </h5>
          </div>
          <h4
            className="text-red-400 font-thin mb-[20px] text-[16px]"
            data-aos={`${feature.direction}`}
          >
            {feature.text}
          </h4>
        </Card>
      ))}
      </div>
    </Container>
  );
};

export default SiteFeature;
