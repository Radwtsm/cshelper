import Image from "next/image";
import SearchAppBar from "./AppBar";
import Link from "next/link";
import OutlinedCard from "./MapCard";
// import { CardMedia } from "@mui/material";

export default function Home() {
  const map_list = [
    {
      name: "Mirage",
      code: "mirage",
      icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fROuh28rQR1R2KQFoprOrFAppwfLPdAJO7c6xkc7exfOhZeOEwjkFsJIn07-Zrdzwjgft_hY6Y2n6LIOWIVJqaVCD-AS2366x0kUGiqtn",
      commento: "se perdiamo anche qui mi sparo",
    },
    {
      name: "Inferno",
      code: "inferno",
      icon: "https://steamcommunity-a.akamaihd.net/economy/image/-9a81dlWLwJ2UUGcVs_nsVtzdOEdtWwKGZZLQHTxDZ7I56KU0Zwwo4NUX4oFJZEHLbXQ9Q1LO5kNoBhSQl-fROuh28rQR1R2KQFoprOrFA5u1fbafzJ9vuO6lZKMkrmtN-6GwGgJ65cn37qZ8dnx2lbl-xdpMDyhctPEJFQ2aArQ8we7xb29m9bi6xzTLb2A",
      commento: "tanto alla fine si pusha banana",
    },
  ];

  return (
    <div className="flex flex-col gap-2 align-center items-around">
      {map_list.map((el) => (
        <Link key={el.code} href={`/${el.code}`}>
          <OutlinedCard
            name={el.name}
            code={el.code}
            icon={el.icon}
            commento={el.commento}
          />
        </Link>
      ))}
    </div>
  );
}
