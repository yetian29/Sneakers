"use client"

import Link from "next/link";

const products = [
    { image: "/img/sneakers/1.jpg",brand: "Nike", price: "990.000đ"},
    { image: "/img/sneakers/2.jpg",brand: "Gucci", price: "5.000.000đ"},
    { image: "/img/sneakers/3.jpg",brand: "Adidas", price: "800.000đ"},
    { image: "/img/sneakers/4.jpg",brand: "Channel", price: "10.000.000đ"},
    { image: "/img/sneakers/4.jpg",brand: "Channel", price: "10.000.000đ"},
]

const BestSellingProducts = () => {


    return(
        <div className="mt-20 px-4">
            <div className="flex justify-between">
                <h1 className="text-3xl font-dancing">Best Selling Products</h1>
                <form className="w-[35%]">
                      <div className="relative hidden md1:flex items-center">
                        <input
                          id="search"
                          name="search"
                          required
                          className="block w-full bg-white border-orange-button border-2 rounded-3xl py-2 pl-4 pr-3 text-sm placeholder-gray-400 focus:outline-none focus:text-gray-900 focus:placeholder-gray-300 sm:text-sm"
                          placeholder="What are you looking for..."
                          type="search"
                        />
                        <button type='submit' className="absolute inset-y-0 right-0 pl-3 flex items-center bg-orange-button w-14 rounded-r-3xl cursor-pointer">
                            <i className='bx bx-search text-xl text-white flex pl-1'></i>
                        </button>
                      </div>
                </form>                

            </div>
            <div className="grid grid-cols-1 md1:grid-cols-3 md2:grid-cols-4 lg:grid-cols-5 gap-6">
                {
                    products.map((item, index) => (

                    <div key={index} className="mt-10 border border-gray-200 w-[230px] h-[280px] p-[20px] rounded-3xl 
                    transition ease-in-out delay-200 hover:shadow-xl hover:translate-y-4"
                    onMouseEnter={() => {
                        const band = document.getElementById(index);
                        band.classList.add("text-orange-button")
    
                    }}
    
                    onMouseLeave={() => {
                        const band = document.getElementById(index);
                        band.classList.remove("text-orange-button")
    
                    }} 
                    >
                        <Link href="#">
                            <img src={item.image} alt="" className="hover:scale-[1.1] transition ease-in-out duration-700 delay-100"/>

                            <h1 id={index} className="mt-2 text-center text-2xl font-dancing">Brand: {item.brand}</h1>
                            <div className="mt-5 px-2">
                                <div className="flex">
                                    <p className="text-xl font-dancing">Price:</p>
                                    <b className="ml-2 text-xl font-dancing">{item.price}</b>

                                </div>

                            </div>
                    
                        </Link>
                    </div>
                ))
            }
            
            </div>
        </div>
    )
}
export default BestSellingProducts;
