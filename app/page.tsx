import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/BarbershopItem";
import BokingItem from "./_components/BokingItem";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({});

  return (
    <div>
      <Header />
      <div className="p-5">
        <h2 className="font-bold text-xl">Olá, Mauro Lucas</h2>
        <p>Segunda Feira, 05 de Agosto.</p>

        <div className="flex items-center gap-2 mt-6">
            <Input placeholder="Faça sua Busca" />
            <Button>
              <SearchIcon />
            </Button>
        </div>

        <div className="flex gap-3 mt-6">
          <Button className="gap-2" variant="secondary">
            <Image src="/cabelo.svg" alt="Imagem Cabelo" width={16} height={16}/>
            Cabelo
          </Button>
          
          <Button className="gap-2" variant="secondary">
            <Image src="/barba.svg" alt="Imagem Barba" width={16} height={16}/>
            Barba
          </Button>

          <Button className="gap-2" variant="secondary">
            <Image src="/acabamento.svg" alt="Imagem Acabamento" width={16} height={16}/>
            Cabelo
          </Button>
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
