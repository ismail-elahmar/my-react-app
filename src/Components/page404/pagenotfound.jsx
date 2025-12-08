

export default function PageNotFound() {
  return(
<div class="w-screen h-screen bg-white flex flex-col justify-center items-center space-y-5">

  <h1 class="text-6xl text-amber-500 font-bold">404</h1>

  <h3 class="text-3xl">Page not found</h3>
  <p>The URL of the page was not found. Please try again.</p>

  <div class="flex space-x-2">

    
    <button class="px-4 py-2 rounded-md text-white font-medium 
                   bg-[#08D7DE] 
                   transition-transform duration-300 hover:scale-105 hover:bg-[#06b7bd]">
      Go Home
    </button>

   
    <button class="px-4 py-2 rounded-md text-white font-medium 
                   bg-[#01112A] 
                   transition-transform duration-300 hover:scale-105 hover:bg-[#021b3f]">
      Contact Us
    </button>

  </div>
</div>)

}
