import { Barbershop } from "@prisma/client"
import { Card, CardContent } from "./ui/card"
import Image from "next/image"
import { Button } from "./ui/button"
import { Badge } from "./ui/badge"
import { StarIcon } from "lucide-react"
import Link from "next/link"

interface BarbershopItemsProps {
  barbershop: Barbershop
}


const BarbershopItem = ({ barbershop }: BarbershopItemsProps) => {
  return (
    <Card className="min-w-[167px] rounded-2xl">
      <CardContent className="p-0">
        <div className="relative h-[159px] w-[159px]">
          <Image fill className="object-cover rounded-2xl" src={barbershop.imageUrl} alt="Image de Servicos"/>
          <Badge className="absolute left-2 top-2" variant="secondary">
            <StarIcon size={12} className="fill-primary text-primary"/>
            <p>6,0</p>
          </Badge>
        </div>
      </CardContent>

      <div className="px-2 py-3">
        <h3 className="font-semibold truncate">{barbershop.name}</h3>
        <p className="text-sm tex-gray-400 truncate">{barbershop.address}</p>
        <Button variant="secondary" className="mt-3 w-full">
          <Link href={`/barbershops/${barbershop.id}`}>Reservar</Link>
        </Button>
      </div>
    </Card>
  )
}

export default BarbershopItem