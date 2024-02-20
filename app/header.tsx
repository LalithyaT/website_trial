import Link from "next/link"
export default function Header() {
    return (
        <header>
    
        <div className="h-30 bg-gradient-to-r from-yellow-600 to-red-500"><h1 className="py-5 text-7xl font-serif text-center font-medium leading-tight text-primary shadow-md">Shri Venkateswara Swamy Devasthanam</h1>
        </div>
        <div className="h-30 bg-gray flex mb-5 flex-wrap justify-between items-center mx-auto">
            {/* <a href="https://flowbite.com" className="flex items-center">
                <img src="https://flowbite.com/docs/images/logo.svg" className="mr-3 h-6 sm:h-9" alt="Flowbite Logo" />
                <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Flowbite</span>
            </a> */}
            <div className="flex text-2xl items-center lg:order-1">
                <a href="./about" className="text-gray-800 hover:text-blue-600 dark:text-white font-medium rounded-lg px-4 lg:px-5 py-2 lg:py-2.5 mr-2 dark:hover:bg-gray-700 ">Home</a>
                
            </div>
            
            <div className="hidden text-2xl justify-between items-center w-full lg:flex lg:w-auto lg:order-2 px-4 " id="mobile-menu-2">
                <ul className="flex flex-col mt-4 font-medium lg:flex-row lg:space-x-8 lg:mt-0">
                    <li>
                        <a href="./about" className="block py-2 pr-4 pl-3 hover:text-blue-600 text-gray rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">About Us</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-600 text-gray rounded bg-primary-700 lg:bg-transparent lg:text-primary-700 lg:p-0 dark:text-white" aria-current="page">Puja Timings</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-600 text-gray border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Photo Gallery</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-600 text-gray border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Contact Us</a>
                    </li>
                    <li>
                        <a href="#" className="block py-2 pr-4 pl-3 hover:text-blue-600 text-gray border-b border-gray-100 hover:bg-gray-50 lg:hover:bg-transparent lg:border-0 lg:hover:text-primary-700 lg:p-0 dark:text-gray-400 lg:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white lg:dark:hover:bg-transparent dark:border-gray-700">Login/Singup</a>
                    </li>
                </ul>
            </div>
        </div>

    
</header>


    )}


