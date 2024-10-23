import Image from "next/image";

import mealIcon from "@/assets/icons/meal.png";
import communityIcon from "@/assets/icons/community.png";
import eventsIcon from "@/assets/icons/events.png";

export default function CommunityPage() {
  const header =
    "header gap-12 my-12 mx-auto mb-20 w-[90%] max-w-[75rem] text-[#ddd6cb] text-xl text-center";

  const highlight = "bg-gradient-to-right bg-clip-text text-transparent";

  const main = "w-[90%] max-w-[40rem] mx-auto text-center";
  const perk = "perks list-none my-12 p-0";
  const perk_li = "flex flex-col items-center gap-8";
  const perks_image = "w-32 h-32 object-contain";

  const perks_p = "font-montserrat text-xl font-bold text-[#ddd6cb] m-0";

  return (
    <>
      <header className={header}>
        <h1 className="font-montserrat">
          One shared passion: <span className={highlight}>Food</span>
        </h1>
        <p>Join our community and share your favorite recipes!</p>
      </header>
      <main className={main}>
        <h2 className="font-montserrat text-2xl mb-12 text-[#ddd6cb]">
          Community Perks
        </h2>

        <ul className={perk}>
          <li className={perk_li}>
            <Image
              className={perks_image}
              src={mealIcon}
              alt="A delicious meal"
            />
            <p className={perks_p}>Share & discover recipes</p>
          </li>
          <li className={perk_li}>
            <Image
              className={perks_image}
              src={communityIcon}
              alt="A crowd of people, cooking"
            />
            <p className={perks_p}>Find new friends & like-minded people</p>
          </li>
          <li className={perk_li}>
            <Image
              className={perks_image}
              src={eventsIcon}
              alt="A crowd of people at a cooking event"
            />
            <p className={perks_p}>Participate in exclusive events</p>
          </li>
        </ul>
      </main>
    </>
  );
}
