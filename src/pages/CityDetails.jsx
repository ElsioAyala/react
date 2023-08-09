import { useParams } from "react-router-dom"
import Hero from "../components/Hero"
import Button from "../components/Button"
export default function CityDetails() {
    
    let { id } = useParams()
    
    const data = [
        { id: "1", city: "Tokio", country: "Japan", image: "/tokio.jpeg" },
        { id: "2", city: "New York", country: "USA", image: "/new-york.jpg" },
        { id: "3", city: "Paris", country: "France", image: "/paris.jpg" },
        { id: "4", city: "Seoul", country: "South Korea", image: "/seoul.jpg" },
        { id: "5", city: "Madrid", country: "Spain", image: "/madrid.jpg" },
        { id: "6", city: "Bangkok", country: "Thailand", image: "/bangkok.jpeg" },
        { id: "7", city: "Buenos Aires", country: "Argentina", image: "/buenos-aires.jpeg" },
        { id: "8", city: "Amsterdam", country: "Netherlands", image: "/amsterdam.jpeg" },
        { id: "9", city: "London", country: "United Kingdom", image: "/londres.png" },
        { id: "10", city: "Dubai", country: "United Arab Emirates", image: "/dubai.jpeg" },
        { id: "11", city: "Rome", country: "Itali", image: "/roma.jpeg" },
        { id: "12", city: "Rio de Janeiro", country: "Brasil", image: "/rio.jpeg" }
    ]

    let city = data.find( data => data.id == id)

    return (
        <main>
            <Hero
                title={city.city}
                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque lobortis ante sapien, non vulputate lorem faucibus vitae. Nunc ac ultrices metus. Nam neque ex, dictum sed velit vitae, vehicula sagittis risus. Aenean volutpat ante ex, et scelerisque dui blandit sed. Morbi pretium lorem nec scelerisque consectetur. Donec odio odio, maximus nec magna sed, congue hendrerit sapien."
                styleTitle="text-white lg:text-5xl"
                styleText="text-gray-100"
                imgBackground={city.image}
                height="h-full"
                isCenter={true}>
                <div>
                    <Button
                        text="View Itineraries ⬇"
                        customStyle="w-52 lg:w-64 lg:font-bold lg:text-2xl flex justify-center"
                        padding="py-[0.6em] px-[1.2em]"
                        link={"cities"}
                    />
                </div>
            </Hero>
        </main>

    )
}