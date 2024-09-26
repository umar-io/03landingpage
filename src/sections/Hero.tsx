import { Container, Button} from "..";
import { FiUserPlus } from "react-icons/fi";
import { FiLogIn } from "react-icons/fi";
import { smiling } from "../assets";

const Hero: React.FC = () => {
  return (
    <>
      <Container className="lg:flex w-full h-[400px] mt-[4rem]">
        <div className="flex flex-col lg:w-[50%] w-full gap-[30px] bg-gray-800 border-t border-red-500 p-5">
          <div className="flex flex-col lg:justify-start lg:items-start items-center w-full lg:mt-[30px] mt-4">
            <h3 className="text-white uppercase lg:mb-0 font-normal text-[20px]">
              welcome to
            </h3>
            <h1 className="lg:text-[3.5rem] text-[40px] text-white font-bold lg:mt-0 mt-2">
              TopUp Access
            </h1>
          </div>
          <div className="w-full lg:justify-start lg:items-start justify-center ">
            <p className="text-white gap-[5px] capitalize lg:text-left text-center text-wrap text-[15px]">
              Experience the best data & airtime topup for all networks, cable
              subscription, electricity bills payment, recharge card printing,
              bulk SMS and many more on topup access.
            </p>
          </div>
          <div className="flex lg:justify-start justify-center gap-[20px] w-full">
            <Button
              to={"/register"}
              text={"Register"}
              icon={<FiUserPlus />}
              className="flex justify-center text-white items-center bg-red-500 rounded hover:bg-red-600"
            />
            <Button
              to={"/login"}
              text={"Login"}
              icon={<FiLogIn />}
              className="flex justify-center text-white items-center bg-red-500 rounded hover:bg-red-600"
            />
          </div>
        </div>
        <div className="lg:w-[50%] w-full">
          <img src={smiling} alt="" className="w-full h-[400px] bg-[100%] bg-cover object-contain" />
        </div>
      </Container>
    </>
  );
};
export default Hero;
