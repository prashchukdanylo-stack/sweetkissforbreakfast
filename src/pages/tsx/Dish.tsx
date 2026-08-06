import "../css/Dish.css";

interface Dish {
    id: number;
    name: string;
    photo: string;
    description: string;
    rating: number;
}


export function Dish(data: {data: Dish[] | null}) {

    const id = Number(window.location.pathname.split("/").pop());
    const dish = data?.data?.find((item) => item.id === id);

    return (
        <div>
            <h1>{dish?.name}</h1>
            <img src={dish?.photo} alt={dish?.name} className = "dish-image" />
            <p> {dish?.description} </p>
            <p>Rating: {dish?.rating}/5</p>
        </div>
    )
}