import ImageSlideshow from "@/components/slidshow";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <header className="flex gap-12 mx-auto   justify-center item-center   my-auto h-[25rem] w-[90%] max-w-7xl ">
        <div className=" w-1/2 h-[24rem] ">
          <ImageSlideshow />
        </div>

        <div className=" text-[#ddd6cb] w-1/2 flex justify-center  flex-col gap-6 text-xl">
          <div className="text-xl text-primary flex flex-col gap-7 ">
            <h1 className="  text-4xl leading-tight font-bold font-montserrat tracking-widest uppercase bg-custom-background bg-clip-text ">
              NextLevel Food for NextLevel Foodies
            </h1>
            <p>Taste & share food from all over the world.</p>
          </div>
          <div className=" text-2xl flex gap-4  mt-4 rounded-xl py-2  text-[#ffffff] bold ">
            <Link
              className="bg-transparent  normal text-[#ff9b05] pr-4 active:bg-transparent color-[#f9b241] hover:bg-transparent color-[#f9b241]"
              href="/community"
            >
              Join the Community
            </Link>
            <Link
              href="/meals"
              className=" bg-custom-background py-1 px-2 rounded-md tracking-wider shadow-md text-slate-300"
            >
              Explore Meals
            </Link>
          </div>
        </div>
      </header>
      <main>
        <section className="flex-col flex  p-4 text-[#ddd6cb] bold max-w-3xl w-[90%] my-2 mx-auto items-center font-montserrat  text-center text-xl ">
          <h2 className="text-4xl my-2 ">How it works</h2>
          <p className=" my-4 ">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>

        <section
          className="flex-col flex   p-4 text-[#ddd6cb] bold max-w-3xl w-[90%]  mx-auto items-center font-montserrat 
         text-center text-xl"
        >
          <h2 className="text-4xl my-2 ">Why NextLevel Food?</h2>
          <p className="my-4">
            NextLevel Food is a platform for foodies to share their favorite
            recipes with the world. It&apos;s a place to discover new dishes,
            and to connect with other food lovers.
          </p>
          <p>
            NextLevel Food is a place to discover new dishes, and to connect
            with other food lovers.
          </p>
        </section>
      </main>
    </>
  );
}
