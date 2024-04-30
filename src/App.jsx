
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Router from "./components/Router";
import about from "../src/assets/basah1.jpg"
import kueBasah from "../src/assets/kue-basah.jpg"
import kueihir from "../src/assets/basah4.jpg"
import cihuy from "../src/assets/kue-basah-removebg.png"
export default function App() {
  

    return (
        <>
            <Navbar></Navbar>
            <main className="min-h-screen overflow-x-hidden overflow-y-hidden ">
              <section id="home" className="bg-[#fdfdfd]">
                <div className="grid grid-cols-2">
                  <div className="sm:mx-36 sm:my-36 mx-6 my-7 space-y-3">
                    <h1 className="sm:text-9xl text-4xl ">
                      Toko Kue 
                    </h1>
                    <p className="sm:w-[32rem] ml-2 text-xs sm:text-base w-72">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto animi, aliquam nulla iure culpa eum. Adipisci repellendus est, animi delectus vel harum illum excepturi, itaque unde neque porro autem soluta.
                    </p>
                    <button className="flex text-xl font-semibold border bg-green-600 px-8 rounded-2xl pb-1 text-white items-center">lets go</button>  
                  </div>
                  <div className="mx-auto bg-[#fdfdfd]">
                    <img src={cihuy} alt="" className="scale-100 bg-[#fdfdfd]"/>
                  </div>
                </div>
              </section>
              <section id="about" className="relative">
              <div className="absolute w-40 h-20 rounded-3xl bg-green-600 left-[100rem] top-96 -z-10">                   
               <div className="bg-white w-20 h-10 "></div>
              </div>
              <div className="absolute w-40 h-20 rounded-full bg-green-600 left-[40rem] -z-10">                   
                  </div>
                <div className="sm:flex sm:mx-28 mx-10 my-7 block">
                  <img src={about} alt="" className="rounded-3xl sm:scale-75   scale-75" />
                  <div className="block space-y-6  -mt-10 sm:mt-0">
                  <h1 className="mt-6 sm:text-4xl font-semibold">About</h1>
                  <p className="sm:w-[36rem] text-md">Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta, necessitatibus voluptatibus aut itaque, similique deserunt dolorum dolor ea facere cumque velit ab. Quae maiores dolore, praesentium iste explicabo porro expedita eveniet voluptatem voluptatibus voluptas omnis excepturi. Excepturi blanditiis iste debitis?</p>
                  <button className="flex text-lg font-semibold border bg-green-600 px-4 rounded-2xl pb-1 text-white items-center">
                    Lihat Produk
                  </button>
                  </div>
                </div>
              </section>
              <section id="produk" className="my-5 relative">
                <div className="bg-green-600 rounded-3xl px-72 py-16 ">
                  <div className="absolute w-20 h-20 rounded-full bg-white">                   
                  </div>
                  <div className="absolute w-96 h-96 rounded-full bg-white -left-28">
                    
                  </div>
                  <div className="my-14 flex">
                    <input type="search" className="mx-auto w-[36rem] rounded-2xl px-12 h-10 outline-none"/>
                  </div> 
                  <div className="grid grid-cols-4 mt-20">
                    <div className="block w-80 bg-white rounded-2xl overflow-hidden py-2">
                      <img src={kueihir} alt="" className="scale-90 rounded-3xl" />
                      <h1 className="ml-5 text-xl font-semibold">Kue Peler Bedebu</h1>
                      <p className="ml-5 text-sm font-semibold">kategori : </p>
                      <p className="ml-5 text-xl font-semibold">Rp. 6000</p>
                      <button className="flex mx-auto text-xl font-semibold border border-green-600 px-28 rounded-2xl mt-5 hover:bg-green-600 hover:text-white">Detail</button>
                    </div>
                    <div className="block w-80 bg-white rounded-2xl overflow-hidden py-2">
                      <img src={kueihir} alt="" className="scale-90 rounded-3xl" />
                      <h1 className="ml-5 text-xl font-semibold">Kue Peler Bedebu</h1>
                      <p className="ml-5 text-sm font-semibold">kategori : </p>
                      <p className="ml-5 text-xl font-semibold">Rp. 6000</p>
                      <button className="flex mx-auto text-xl font-semibold border border-green-600 px-28 rounded-2xl mt-5 hover:bg-green-600 hover:text-white">Detail</button>
                    </div>
                    <div className="block w-80 bg-white rounded-2xl overflow-hidden py-2">
                      <img src={kueihir} alt="" className="scale-90 rounded-3xl" />
                      <h1 className="ml-5 text-xl font-semibold">Kue Peler Bedebu</h1>
                      <p className="ml-5 text-sm font-semibold">kategori : </p>
                      <p className="ml-5 text-xl font-semibold">Rp. 6000</p>
                      <button className="flex mx-auto text-xl font-semibold border border-green-600 px-28 rounded-2xl mt-5 hover:bg-green-600 hover:text-white">Detail</button>
                    </div>
                    <div className="block w-80 bg-white rounded-2xl overflow-hidden py-2">
                      <img src={kueihir} alt="" className="scale-90 rounded-3xl" />
                      <h1 className="ml-5 text-xl font-semibold">Kue Peler Bedebu</h1>
                      <p className="ml-5 text-sm font-semibold">kategori : </p>
                      <p className="ml-5 text-xl font-semibold">Rp. 6000</p>
                      <button className="flex mx-auto text-xl font-semibold border border-green-600 px-28 rounded-2xl mt-5 hover:bg-green-600 hover:text-white">Detail</button>
                    </div>
                  </div>
                </div>
              </section>
              <section id="feedback" className="my-40 px-56 relative">
              <div className="absolute w-96 h-96 rounded-full bg-green-600 left-[100rem] -top-56 border-[16px] border-white ">
                    
                    </div>
                <div className="grid grid-cols-2">
                  <div className=""> <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.521260322283!2d106.8195613507864!3d-6.194741395493371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f5390917b759%3A0x6b45e67356080477!2sPT%20Kulkul%20Teknologi%20Internasional!5e0!3m2!1sen!2sid!4v1601138221085!5m2!1sen!2sid"
              width="600"
              height="450"
              frameBorder="0"
              className="rounded-3xl border-2 border-black outline-none"
              
              allowFullScreen=""
              aria-hidden="false"
              tabIndex="0"
            /></div>
                  <div className="block space-y-10 w-80">
                    <h1 className="text-3xl font-semibold">FeedBack</h1>
                    <input type="text" className="w-72 p-2 border-2 border-black rounded-xl" placeholder="Nama"/>
                    <textarea type="text" className="w-72 h-40 align-text-top p-2 border-2 border-black rounded-xl" placeholder="Message"/>
                    <button className="border border-green-600 rounded-xl px-4 hover:bg-green-600 hover:text-white">Submit</button>
                  </div>
                </div>
              </section>


            </main>
            <Footer/>
        </>
    );
}