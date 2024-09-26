import { services } from "../services";
import { Container, Card } from "..";
const Services = () => {
  return (
    <Container
      id="services"
      className="flex lg:flex-row flex-col w-full h-[fit-content] justify-center items-center flex-wrap bg-slate-200 lg:gap-[20px] gap-[10px] lg:mt-7 lg:mb-7 px-[30px] pb-[40px]"
    >
      <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8 place-items-center"> {/* Fixed 3 columns */}
      {services.map((service) => (
        <Card
          key={service.id}
          className="flex flex-col gap-[20px] lg:w-[400px] w-[full] h-[fit-content] bg-white rounded-[20px] shadow-lg mt-[10px] items-center"
        >
          <img src={service.icon} alt="" className="w-[70px]" />
          <h4>{service.text}</h4>
          <p>{service.desc}</p>
        </Card>
      ))}
      </div>
    </Container>
  );
};
export default Services;
