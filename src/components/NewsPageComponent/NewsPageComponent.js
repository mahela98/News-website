import "./NewsPage.css";

const NewsPageComponent = () => {
    return (  <>


        <div class="container mx-auto my-5 px-5 sm:px-0">
            <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl h-50 md:h-72 mx-2">
                <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                        style={{
                            backgroundImage: "url(" + "https://www.publicdomainpictures.net/pictures/320000/velka/background-image.png" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundBlendMode: "multiply"
                        }}
                    >
                    </div>
                    <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex
                     flex-col-reverse justify-start items-start bg-gradient-to-b 
                     from-transparent via-transparent to-gray-900">
                        <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">HOTEL AMANEE</h3>
                        <h4 class="w-full text-xl text-gray-100 leading-tight">Bienvenido a</h4>
                    </div>
                    <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>

                <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                    <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                        <h4 class="hidden md:block text-xl text-gray-400">Bienvenido a</h4>
                        <h3 class="hidden md:block font-bold text-2xl text-gray-700">HOTEL AMANEE</h3>
                        <p class="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque perspiciatis quod sapiente quidem, vero consectetur quae iure error tempore reprehenderit unde veritatis fugit iusto nemo amet. Assumenda, quam facilis.</p>
                        <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                            <span>Conocer más de Amanee</span>
                            <span class="text-xs ml-1">&#x279c;</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>



        <div class="container mx-auto my-5 px-5 sm:px-0">
            <div class="relative rounded-lg flex flex-col md:flex-row items-center md:shadow-xl md:h-72 mx-2">
                <div class="z-0 order-1 md:order-2 relative w-full md:w-2/5 h-80 md:h-full overflow-hidden rounded-lg md:rounded-none md:rounded-r-lg">
                    <div class="absolute inset-0 w-full h-full object-fill object-center bg-blue-400 bg-opacity-30 bg-cover bg-bottom"
                        style={{
                            backgroundImage: "url(" + "https://images.unsplash.com/photo-1525302220185-c387a117886e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80" + ")",
                            backgroundPosition: 'center',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundBlendMode: "multiply"
                        }}
                    >
                    </div>
                    <div class="md:hidden absolute inset-0 h-full p-6 pb-6 flex
                     flex-col-reverse justify-start items-start bg-gradient-to-b 
                     from-transparent via-transparent to-gray-900">
                        <h3 class="w-full font-bold text-2xl text-white leading-tight mb-2">HOTEL AMANEE</h3>
                        <h4 class="w-full text-xl text-gray-100 leading-tight">Bienvenido a</h4>
                    </div>
                    <svg class="hidden md:block absolute inset-y-0 h-full w-24 fill-current text-white -ml-12" viewBox="0 0 100 100" preserveAspectRatio="none">
                        <polygon points="50,0 100,0 50,100 0,100" />
                    </svg>
                </div>

                <div class="z-10 order-2 md:order-1 w-full h-full md:w-3/5 flex items-center -mt-6 md:mt-0">
                    <div class="p-8 md:pr-18 md:pl-14 md:py-12 mx-2 md:mx-0 h-full bg-white rounded-lg md:rounded-none md:rounded-l-lg shadow-xl md:shadow-none">
                        <h4 class="hidden md:block text-xl text-gray-400">Bienvenido a</h4>
                        <h3 class="hidden md:block font-bold text-2xl text-gray-700">HOTEL AMANEE</h3>
                        <p class="text-gray-600 text-justify">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione itaque perspiciatis quod sapiente quidem, vero consectetur quae iure error tempore reprehenderit unde veritatis fugit iusto nemo amet. Assumenda, quam facilis.</p>
                        <a class="flex items-baseline mt-3 text-blue-600 hover:text-blue-900 focus:text-blue-900" href="">
                            <span>Conocer más de Amanee</span>
                            <span class="text-xs ml-1">&#x279c;</span>
                        </a>
                    </div>
                </div>

            </div>
        </div>














<div>
<div class="p-10">
    
    <div class=" w-full lg:max-w-full lg:flex">
      <div class="my-image h-48 lg:h-auto lg:w-48 flex-none bg-cover rounded-t lg:rounded-t-none lg:rounded-l text-center overflow-hidden"
    //    style="background-image: url('/mountain.jpg')"
    
        title="Mountain">
      </div>
      <div class="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
        <div class="mb-8">
          <p class="text-sm text-gray-600 flex items-center">
            <svg class="fill-current text-gray-500 w-3 h-3 mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M4 8V6a6 6 0 1 1 12 0v2h1a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2v-8c0-1.1.9-2 2-2h1zm5 6.73V17h2v-2.27a2 2 0 1 0-2 0zM7 6v2h6V6a3 3 0 0 0-6 0z" />
            </svg>
            Members only
          </p>
          <div class="text-gray-900 font-bold text-xl mb-2">Best Mountain Trails 2020</div>
          <p class="text-gray-700 text-base">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.</p>
        </div>
        <div class="flex items-center">
          <img class="w-10 h-10 rounded-full mr-4" src="/ben.png" alt="Avatar of Writer"/>
          <div class="text-sm">
            <p class="text-gray-900 leading-none">John Smith</p>
            <p class="text-gray-600">Aug 18</p>
          </div>
        </div>
      </div>
    </div>
  </div>

</div>



    </>);
}
 
export default NewsPageComponent;