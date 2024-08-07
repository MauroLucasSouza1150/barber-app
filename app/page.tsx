import { SearchIcon } from "lucide-react";
import Header from "./_components/Header";
import { Input } from "./_components/ui/input";
import { Button } from "./_components/ui/button";
import Image from "next/image";
import { Card, CardContent } from "./_components/ui/card";
import { Badge } from "./_components/ui/badge";
import { Avatar, AvatarImage } from "./_components/ui/avatar";
import { db } from "./_lib/prisma";
import BarbershopItem from "./_components/BarbershopItem";

export default async function Home() {
  const barbershops = await db.barbershop.findMany({})
  console.log({ barbershops })
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

        <div className="relative w-full h-[150px] mt-6">
          <Image src="/banner-01.png" alt="Imagem Banner" fill className="object-cover rounded-xl" />
        </div>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Agendamentos</h2>

        <Card>
          <CardContent className="flex justify-between p-0">
            <div className="flex flex-col gap-2 py-5 pl-5">
              <Badge className="w-fit">Confirmado</Badge>
              <h3>Corte de Cabelo</h3>

              <div className="flex items-center gap-2">

                <Avatar className="h-6 w-6">
                  <AvatarImage src="https://utfs.io/f/c97a2dc9-cf62-468b-a851-bfd2bdde775f-16p.png"/>
                </Avatar>
                <p className="text-sm">Barbearia Full Stack</p>
              </div>
            </div>

            <div className="flex flex-col items-center justify-center px-5 border-l-2 border-solid">
              <p className="text-sm">Agosto</p>
              <p className="text-2xl">05</p>
              <p className="text-sm">20:00</p>
            </div>
          </CardContent>
        </Card>

        <h2 className="text-xs font-bold uppercase text-gray-400 mt-6 mb-3">Recomendados</h2>
        <div className="flex gap-4 overflow-auto [&::-webkit-scrollbar]:hidden">
          {barbershops.map((barbershop) => (
            <BarbershopItem key={barbershop.id} barbershop={barbershop} />
          ))}
        </div>
      </div>

      <footer>
        <Card>
          <CardContent className="px-4 py-5">
            <p className="text-sm text-gray-400 font-bold">@2024Copyritht-FSW-Barber</p>
          </CardContent>
        </Card>
      </footer>
    </div>
  );
}
