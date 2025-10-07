export default function Industries() {
  const items = [
    {
      title: "SOLAR ENERGY",
      color: "#f9f0cd",
    },
    {
      title: "LEGAL SERVICES",
      color: "#ebe5d7",
    },
    {
      title: "ENTERTAINMENT",
      color: "#f9dacd",
    },
    {
      title: "MARKETING SERVICES",
      color: "#cadcfd",
    },
  ];

  return (
    <div id="industries" className="relative  mx-auto text-center py-16 overflow-hidden">

      <div className="absolute inset-0 flex flex-col items-start justify-between pointer-events-none select-none gap-[100px]">
        <span className="xl:text-[230px] lg:text-[170px] md:text-[130px] text-[100px] font-extrabold text-white leading-none">
          OUR
        </span>
        <span className="xl:text-[230px] lg:text-[170px] md:text-[130px] text-[100px] font-extrabold text-white leading-none -mt-8">
          INDUSTRIES
        </span>
      </div>

      <div className="relative z-10 container p-[15px] flex flex-col gap-[50px]">
        <h3 className="text-4xl font-bold text-[50px] mb-8 text-black">Our Industries</h3>
        <div className="flex flex-wrap lg:gap-x-10  gap-y-10 gap-x-0 justify-items-center">
          {items.map((it, i) => (
            <div key={i} className="lg:w-[45%] md:w-[50%] w-full  text-black font-medium">
              <div className=" min-h-[50px] flex items-center justify-center">
                <div className="relative group min-w-[390px] min-h-[100px] flex items-center justify-start pl-[70px]">
                  <div
                    className={`absolute top-0 left-[30px] w-[100px] h-[100px] rounded-full transition-all duration-500 ease-in-out group-hover:w-full`}
                    style={{ backgroundColor: it.color }}
                  ></div>
                  <span className="relative z-10 text-[30px]">{it.title}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
