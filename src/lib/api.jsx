
const getWorkouts = async () => {
    const response = await fetch('https://api.abcz.workers.dev/api/fitlog',{
        // cache:"no-store",
    });
    if(!response.ok){
        throw new Error("Failed To Fetch");
        
    }
    const data = await response.json();
    return data;
};

export default getWorkouts;