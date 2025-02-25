import Discover from "./_components/home/Discover";
import HomeProductList from "./_components/home/HomeProductList";
import LogoSlider from "./_components/home/LogoSlider";
import Specifics from "./_components/home/Specifics";
import Watch from "./_components/home/Watch";

export default function Home() {
  return (
    <div className="flex flex-col justify-between gap-24">
      <div className="flex flex-col gap-40">
        {/* //*  PART 1 */}
        <div className="flex specialPadding ">
          <Discover />
          <Watch />
        </div>

        {/* //* PART 2 */}
        <div className="bg-gray-100 bg-opacity-15 w-[100%] ">
          <Specifics />
        </div>

        {/* //* PART 3 */}
        <div className="flex specialPadding">
          <HomeProductList />
        </div>

        {/* //* PART 4 */}
        <div>
          <hr className="border-stone-400 border-opacity-30" />
          <div className="specialPadding py-6">
            <LogoSlider />
          </div>
          <hr className="border-stone-400 border-opacity-30" />
        </div>
      </div>
    </div>
  );
}
