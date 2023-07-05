import Footer from "@/components/Footer";
import Link from "next/link";
import { useRouter } from "next/router";
import { useState } from "react";
import Logo from "./../../public/Cine.svg"

export default function index() {
    const router = useRouter();
    const { slug } = router.query;
    return (
        <>
            <Navbar />
            <Asset />
            <Footer />
        </>
    )
}
function calculatePostTDSValues(amount) {
    let tds = 0.18 * amount;
    let remainingAmount = amount - tds;
    let value1 = remainingAmount;
    let value2 = remainingAmount - 118487;
    let value3 = remainingAmount - 116604;
    return [value1, value2, value3];
}

function Asset() {

    return (
        <>
            <main className=" w-screen min-h-screen bg-[#1B1B1B] pt-10 kanit">
                <div className="w-[90%] md:w-[80%] mx-auto pt-20 flex justify-start items-start">
                    <div className="w-full md:w-1/2 overflow-y-scroll h-screen hide-scrollbar ">
                        <img className="rounded-xl" src="https://iildcirljedzzlqnovio.supabase.co/storage/v1/object/public/web-assets/the-kid-banner.webp" />
                        <div className="my-3">
                            <h1 className="text-[#fff] text-[1.5rem] bound">YNOT Studios Web Series 2   </h1>
                            <h1 className="text-[#fff] text-[1rem]">receive returns directly from leading OTT   </h1>
                        </div>

                        <div className="bg-[#fff] md:hidden block  rounded-xl shadow-md p-2 w-[90vw] my-7">
                            <CalculateCard />
                        </div>

                        <div className="p-5 grid grid-cols-2 border-[2px] border-blue-500 rounded-md mt-4">
                            <div className="text-[18px] md:text-xl text-center">
                                <p className="text-[#fff] font-bold">18 %</p>
                                <p className="text-[#fff]">pre-tax return</p>
                            </div>
                            <div className="text-[18px] md:text-xl text-center">
                                <p className="text-[#fff] font-bold">10 to 13</p>
                                <p className="text-[#fff]">months</p>
                            </div>
                        </div>

                        <div className="py-3 mt-2 md:mt-0">
                            <h1 className="text-[#fff] text-[1.8rem] md:text-[2rem] bound py-2">Highlights</h1>
                            <div className="grid grid-cols-2 gap-2">
                                <div className="h-auto lg:h-[150px] rounded-r-2xl border-l-4 border-blue-500 p-5 bg-[#ffffff] shadow-xl">
                                    <p className="text-[1.4rem] md:text-[1.5rem]">Short-term high returns</p>
                                    <p className="text-[#464646] text-[1rem]">Fixed returns not affected by market</p>
                                </div>
                                <div className="h-auto lg:h-[150px] rounded-r-2xl border-l-4 border-blue-500 p-5 bg-[#ffffff] shadow-xl">
                                    <p className=" text-[1.4rem] md:text-[1.5rem]">Non - Market Linked</p>
                                    <p className="text-[#464646] text-[1rem]">No fluctuations based on market trends</p>
                                </div>
                                <div className="h-auto lg:h-[150px]  rounded-r-2xl border-l-4 border-blue-500 p-5 bg-[#ffffff] shadow-xl">
                                    <p className=" text-[1.3rem] md:text-[1.5rem]">Notable buyer</p>
                                    <p className="text-[#464646] text-[1rem]">Receive returns directly from a leading buyer</p>
                                </div>
                            </div>
                            <div>
                                <ul class="list-disc list-inside py-5 flex flex-col gap-5">
                                    <li className="text-[#fff] border-l-2 border-blue-400 pl-2 text-lg md:text-xl">BetterInvest and its partners have a collective experience of 70+ years in South Indian film industry</li>
                                    <li className="text-[#fff] border-l-2 border-blue-400 pl-2 text-lg md:text-xl">The opportunity is vetted and due diligence is performed by a team of experts</li>
                                    <li className="text-[#fff] border-l-2 border-blue-400 pl-2 text-lg md:text-xl">Opportunity is structured to accommodate an Interest coverage of up to 3 months in case of any delay beyond the initial tenure of 10 months</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="hidden md:block md:w-1/2 bg-[#ffffff] mx-0 md:mx-5 rounded-xl mt-32 shadow-md p-[4px] lg:p-[8px]">
                        <CalculateCard />
                    </div>
                </div>

            </main>
        </>
    )
}
function CalculateCard() {
    const [amt, setAmount] = useState(1);
    let [result1, result2, result3] = calculatePostTDSValues(amt);

    return (
        <>
            <div className="flex justify-evenly items-center">
                <button className="border-2 border-blue-500 rounded-full px-2 text-lg lg:text-2xl font-bold " onClick={() => setAmount(e => e == 1 ? 1 : e - 1)}>-</button>
                <p className="text-[36px] lg:text-[48px]">{"₹"}{amt}{",00,000"}</p>
                <button className="border-2 border-blue-500 rounded-full px-2 text-lg lg:text-2xl font-bold " onClick={() => setAmount(e => e + 1)}>+</button>
            </div>

            <div className="mx-5 flex justify-between items-center">
                <p className="text-lg lg:text-xl text-[#464646]">Gross returns</p>
                <p className="text-lg lg:text-xl font-bold">{"18%"}</p>
            </div>
            <div className="mx-5 flex justify-between items-center">
                <p className="text-lg lg:text-xl text-[#464646]">pre-tax returns</p>
                <p className="text-lg lg:text-xl font-bold">{"₹118487"}</p>
            </div>
            <div className="mx-5 flex justify-between items-center bg-blue-300 tetx-white my-5 p-2  rounded-lg">
                <p className="text-lg lg:text-xl ">Expected returns </p>
                <p className="text-lg lg:text-xl font-bold">{"₹118487"}</p>
            </div>

        </>
    )
}
function AssetCard() {
    return (
        <>
            <div className="p-5 bg-[#444444] rounded-xl">
                <img className="rounded-xl h-[150px] md:h-[250px] w-full object-cover" src="./a.webp" />
                <div className="py-3">
                    <p className="text-lg md:text-2xl">Upcoming Opportunity</p>
                    <p className="text-xl md:text-3xl">OTT Rights This Movie</p>
                </div>
                <div className="grid grid-cols-3 bg-[#646464] mt-2 rounded-md p-1">
                    <div>
                        <h1 className="font-bold text-blue-300">19% </h1>
                        <p>Tax returns</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-blue-300">5000 </h1>
                        <p>8 to 3 Months</p>
                    </div>
                    <div>
                        <h1 className="font-bold text-blue-300">10000 ADA </h1>
                        <p>Investment</p>
                    </div>
                </div>
                <Link className="py-2 text-center text-lg monu bg-blue-400 block rounded-lg mt-4" href="/assest/1">Get Early Access</Link>
            </div>
        </>
    )
}
function Navbar() {
    return (
        <>
             <div className='fixed  top-0 left-0 w-full   text-[#aaa] font-semibold  z-[1200] kanit'>
                <div className='px-6 flex justify-between  mt-5 rounded-xl items-center w-[95%] mx-auto bg-[#18181893]  backdrop-blur-md'>
                    <Link href={"/"}>
                        <div className="w-[50px] md:w-[95px]">
                            {/* <img src="https://d1muf25xaso8hp.cloudfront.net/https%3A%2F%2Fecb1278b46458a7815b3e71c0488b5a6.cdn.bubble.io%2Ff1636184695667x802640047404033800%2Foie_lqQgz0LCLzXi.png?w=128&h=88&auto=compress&fit=crop&dpr=1.25" alt="error" /> */}
                            <Logo/>
                        </div>
                    </Link>
                    <div className="flex gap-3 md:gap-10 text-lg justify-center items-center">
                        <Link href={"/asset"} className='text-[#fff] text-xs md:text-lg'>Asset</Link>
                        <Link href={"/portpolio"} className='text-[#797979] text-xs md:text-lg'>Portpolio</Link>
                    </div>
                </div>
            </div>
        </>
    )
}