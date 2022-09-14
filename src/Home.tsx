import { FC, memo } from "react";
import HomeBox from "./HomeBox";
type Props = {};
const Home: FC<Props> = (props) => {
  return (
    <div>
      <div className="bg-hero-home h-screen bg-cover border-b-4 border-yellow-700 shadow-md shadow-red-400">
        <div>
          <div className="text-blue-700 sm:text-7xl text-5xl font-extrabold flex flex-col pt-24 md:pt-56 xl:ml-10 px-4 ">
            <span>When you need</span>
            <span>answers, you know</span>
            <span>where to go.</span>
          </div>
          <p className="text-yellow-500 text-2xl mx-4 sm:mx-16 font-extrabold text-shadow shadow-white mt-8">
            Hospitals are only an intermediate stage of civilization, never
            intended at all even to take in the whole sick population.
          </p>
        </div>
      </div>
      <div className="flex flex-col items-center sm:justify-around sm:flex-row mt-1 py-4 bg-yellow-300">
        <HomeBox
          img="https://fofhealthcenter.org/get/files/image/galleries/medical8.png?65x65"
          heading="Medical"
        >
          Pediatrics, Family Practice, Internal Medicine and OB/GYN
        </HomeBox>
        <HomeBox
          img="https://fofhealthcenter.org/get/files/image/galleries/dental5.png?46x65"
          heading="   Dental"
        >
          Pediatric and Adult Dental Services
        </HomeBox>
        <HomeBox
          img="https://fofhealthcenter.org/get/files/image/galleries/behavioural6.png?47x65"
          heading="Behavioral Health"
        >
          Psychiatrist, Psychologists, Licensed Clinical Social Worker and
          Licensed Marriage and Family Therapist
        </HomeBox>
      </div>
      <div className="sm:h-screen h-full bg-white flex justify-center items-center flex-col my-12 ">
        <div className="sm:px-24 px-4 space-y-8">
          <h1 className="text-5xl font-extrabold">
            Welcome to Super City Health Center
          </h1>
          <p className="text-gray-700 font-bold ">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore a
            laborum inventore est ipsum beatae consequuntur sapiente ipsam.
            Facilis nobis ipsum iusto error vitae minus aliquid, voluptatibus
            numquam officiis Lorem ipsum dolor, sit amet consectetur adipisicing
            elit. Impedit at quae vero adipisci! Repellendus eaque eveniet
            repudiandae quia debitis placeat cupiditate. Veniam tempora eum
            asperiores eius? Assumenda eum quaerat quia.
          </p>
        </div>
        <div className="flex px-10 mt-10">
          <div>
            <img
              className="w-32 h-28 sm:w-28 sm:h-28 md:h-36 md:w-36 lg:w-48 lg:h-48 sm:mt-44"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-diwali-festivals-and-holidays-flaticons-lineal-color-flat-icons-3.png"
            />
          </div>
          <div className="border-8 p-4 rounded-full border-blue-400">
            <img
              className="w-32 h-32 sm:w-28 sm:h-28 md:h-36 md:w-36 lg:w-full lg:h-full "
              src="https://img.icons8.com/external-icongeek26-linear-colour-icongeek26/344/external-namaste-india-icongeek26-linear-colour-icongeek26.png"
            />
          </div>
          <div>
            <img
              className="w-32 h-28 sm:w-28 sm:h-28 md:h-36 md:w-36 lg:w-48 lg:h-48 sm:mt-44"
              src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/344/external-diwali-festivals-and-holidays-flaticons-lineal-color-flat-icons-3.png"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default memo(Home);
