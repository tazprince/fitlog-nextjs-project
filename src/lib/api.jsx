
// For all the data

const getWorkouts = async () => {
    const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}`,
        {
            cache: "no-store",
        }
    );

    if (!response.ok) {
        throw new Error("Failed To Fetch");
    }

    const data = await response.json();
    return data;
};

export default getWorkouts;