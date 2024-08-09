import Header from "./_components/Header";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/BarbershopItem";
import BokingItem from "./_components/BokingItem";
import Search from "./_components/Search";
import { quickSearchOptions } from "./_constants/search";
import Link from "next/link";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="font-bold text-xl">Olá, Mauro Lucas</h2>
        <p>Segunda Feira, 05 de Agosto.</p>

        <div  className="mt-6">
          <Search />
        </div>

        <div className="mt-6 flex gap-3 overflow-x-scroll [&::-webkit-scrollbar]:hidden">
          {quickSearchOptions.map((option) => (
            <Button
              className="gap-2"
              variant="secondary"
              key={option.title}
              asChild
            >
              <Link href={`/barbershops?service=${option.title}`}>
                <Image
                  src={option.imageUrl}
                  width={16}
                  height={16}
                  alt={option.title}
                />
                {option.title}
              </Link>
            </Button>
          ))}
        </div>

        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" alt="Imagem Banner" fill className="object-cover rounded-xl" />
        </div>

        <BokingItem />

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

    </div>
  );
}
