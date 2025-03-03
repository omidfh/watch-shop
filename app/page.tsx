import Discover from "./_components/home/Discover";
import HomeProductList from "./_components/home/HomeProductList";
import LogoSlider from "./_components/home/LogoSlider";
import Specifics from "./_components/home/Specifics";
import Watch from "./_components/home/Watch";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-24 ">
      <div className="flex flex-col gap-40">
        {/* //*  PART 1 */}
        <div className="flex justify-center">
          <div className="flex flex-col items-center w-full max-w-[65%] ">
            <div className="flex justify-between w-full">
              {" "}
              <Discover />
              <Watch />
            </div>
          </div>
        </div>

        {/* //* PART 2 */}
        <div className="flex justify-center bg-gray-100 bg-opacity-15  ">
          <div className="max-w-[65%] ">
            <Specifics />
          </div>
        </div>

        {/* //* PART 3 */}
        <div className="flex justify-center">
          <div className="max-w-[65%] ">
            <HomeProductList />
          </div>
        </div>

        {/* //* PART 4 */}
        <div>
          <hr className="border-stone-400 border-opacity-30" />
          <div className="flex justify-center py-6 ">
            <div className="max-w-[65%] ">
              <div className="flex justify-center">
                <LogoSlider />
              </div>
            </div>
          </div>
          <hr className="border-stone-400 border-opacity-30" />
        </div>
      </div>
    </div>
  );
}
