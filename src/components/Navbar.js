import React from "react"; 
import { 
  Navbar, 
  Typography, 
  IconButton, 
} from "@material-tailwind/react"; 
 
export function NavbarDefault() { 
  const [openNav, setOpenNav] = React.useState(false); 
 
  React.useEffect(() => { 
    window.addEventListener( 
      "resize", 
      () => window.innerWidth >= 960 && setOpenNav(false), 
    );
  }, []);
  

  const navList = (
    
    <ul className="mb-4 mt-2 flex flex-col gap-2 bg--300 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-black"
        className="p-1 font-bold ">
            <a href="home" className="flex items-center">Home</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-black"
        className="p-1 font-bold ">
            <a href="products" className="flex items-center">Produk</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold">
            <a href="contact" className="flex items-center">Contact</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold "><a href="counter" className="flex items-center">Counter</a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-bold"><a href="/" className="flex items-center">Login</a>
      </Typography>
    </ul>
  ); 

  return (
    
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
      <div class="sm:flex sm:items-center sm:justify-between text-center">
      <img   
        alt=""
        className="h-8 mr-3" 
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e9/AGV_logo.png/800px-AGV_logo.png"/>
        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white"></span>
        </div>
        <div className="hidden lg:block">{navList}</div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round" 
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
    </Navbar>
  );
}

export default NavbarDefault;