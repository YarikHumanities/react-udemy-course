export async function fetchAvailablePlaces() {
    const responce = await fetch("http://localhost:3000/places");
    const resData = await responce.json();

    if (!responce.ok) {
        const error = new Error("Failed to fetch places");
        throw error;
    }

    return resData.places;
}