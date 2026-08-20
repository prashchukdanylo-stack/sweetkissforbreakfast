import "../css/Dish.css";
import type { Dish } from "../../App.tsx";


export function Dish(data: {data: Dish[] | null}) {

    const id = Number(window.location.pathname.split("/").pop());
    const dish = data?.data?.find((item) => item.id === id);

    return (
        <>
        <img src={`${import.meta.env.BASE_URL}arrow.png`} className = "back-button" onClick={() => window.history.back()}></img>
        <div className = "dish-container">
            <div className = "dish-info">
            <h1 className = "dish-name">{dish?.name}</h1>
            <img src={`${import.meta.env.BASE_URL}${dish?.photo.replace(/^\//, '')}`} alt={dish?.name} className = "dish-image" />
            <h2 className = "dish-price">{dish?.price} грн</h2>
            <p className = "dish-description"> {dish?.description} </p>
            <p className = "dish-rating">Rating: {dish?.rating}/5</p>
            </div>
        </div>
        </>
    )
}