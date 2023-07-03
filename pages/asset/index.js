import Footer from "@/components/Footer";
import Link from "next/link";
import Logo from "./../../public/Cine.svg"

export default function index() {
    return (
        <>
            <Navbar />
            <Asset />
            <Footer />
        </>
    )
}
function Asset() {
    return (
        <>
             <main className=" w-screen min-h-screen bg-[#1B1B1B] pt-10 kanit">
                <div className="w-[90%] md:w-[80%] mx-auto pt-20 ">
                    <h1 className="text-[2rem] md:text-[4rem] text-[#00FEF9] bound">Opportunities</h1>
                    <h1 className="text-[1rem] md:text-[3rem] text-[#bbb]">Buy the selled NFT</h1>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-5 py-10">
                        <AssetCard />
                        <AssetCard />
                        <AssetCard />
                        <AssetCard />
                    </div>
                </div>

            </main>
        </>
    )
}
function AssetCard({imgUrl,title,investment}) {
    return (
        <>
            <div className=" p-5 bg-[#111111] rounded-xl transition-transform ease-in-out">
                <img className="rounded-xl h-[150px] md:h-[250px] w-full object-cover" src="./b.webp" />
                <div className="py-3">
                    <Link href={"/asset/1"}>
                        <p className="text-md md:text-lg text-white ">Upcoming Opportunity</p>
                        <p className="text-[20px] md:text-2xl text-white font-bold">OTT Rights This Movie</p>
                    </Link>
                </div>
                <div className="grid grid-cols-3 bg-[#dddddd] rounded-md p-1">
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="font-bold text-blue-600 text-[16px] md:text-[18px] text-center">19% </h1>
                        <p className="text-[14px] md:text-[16px] break-normal text-center">Tax returns</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="font-bold text-blue-600 text-[16px] md:text-[18px] text-center">5000 </h1>
                        <p className="text-[14px] md:text-[16px] break-normal text-center">8 to 3 Months</p>
                    </div>
                    <div className="flex justify-center items-center flex-col">
                        <h1 className="font-bold text-blue-600 text-[16px] md:text-[18px] text-center">10000 ADA </h1>
                        <p className="text-[14px] md:text-[16px] break-normal text-center">Investment</p>
                    </div>
                </div>
                <Link className="py-2 text-center text-[20px] md:text-[24px] kanit bg-blue-400 nav-ripple hover:bg-blue-500 block rounded-lg mt-4 text-white transition-all ease-in-out hover:scale-105" href="/asset/1">Get Early Access</Link>
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