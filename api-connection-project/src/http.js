export async function fetchAvailablePlaces() {
    const responce = await fetch("http://localhost:3000/places");
    const resData = await responce.json();

    if (!responce.ok) {
        const error = new Error("Failed to fetch places");
        throw error;
    }

    return resData.places;
}

export async function updateUserPlaces(places) {
    const responce = await fetch('http://localhost:3000/user-places', {
        method: "PUT",
        body: JSON.stringify({ places }),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const resData = await responce.json();
    if (!responce.ok) {
        throw new Error("Failed to update user data.")
    }
    return resData.message;
}