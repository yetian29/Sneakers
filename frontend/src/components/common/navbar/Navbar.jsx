import Link from "next/link";


const products = [
    { image: "/img/sneakers/1.jpg",brand: "Nike", price: "990.000đ"},
    { image: "/img/sneakers/2.jpg",brand: "Gucci", price: "5.000.000đ"},
    { image: "/img/sneakers/3.jpg",brand: "Adidas", price: "800.000đ"},
    { image: "/img/sneakers/4.jpg",brand: "Channel", price: "10.000.000đ"},
    { image: "/img/sneakers/4.jpg",brand: "Channel", price: "10.000.000đ"},
]

const Navbar = () => {
    return(
        <div>

            <div className="absolute w-full h-full  left-0 z-10 overlay">
                <div className="absolute w-[500px] h-full bg-white right-0 shadow-xl">
                    <h2 className="text-3xl font-dancing m-5">Cart</h2>

                        <div className="grid-rows-5 gap-5">
                            {
                                products.map((item, index) => (
                                        <Link href="#">
                                            <div className="flex items-center w-[460px] h-[180px] border border-gray-200 m-5 pb-6 ">

                                            <img src={item.image} className="w-[190px] h-auto pl-5"/>
                                            <div className="flex-col ml-6 mt-5">
                                                <h1 className="text-2xl font-dancing">Brand: {item.brand}</h1>

                                                <p className="mr-2 text-xl font-dancing">Price: {item.price}</p>


                                            </div>
                                            <i className='bx bx-x-circle text-4xl ml-6 mt-3'></i>

                                            </div>
                                    </Link>
                                ))
                            }
                        </div>
                </div>
            </div>
            <div className="flex items-center justify-between px-4 py-6">
                <Link href="">
                    <img src="/img/murkiva.png" alt="logo" width={140} height={140}/>
                </Link>
                <div className="flex gap-5">
                    <i className='bx bx-cart text-3xl'></i>
                    <i className='bx bx-user-circle text-3xl'></i>
                </div>

            </div>
        </div>

    )
}
export default Navbar;
