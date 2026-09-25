//For get 1 id's data

const getWorkoutById = async (id) => {
    const response = await fetch(`https://api.abcz.workers.dev/api/fitlog/${id}`,{
         cache:"no-store",
    });
    if(!response.ok){
        throw new Error("Failed To Fetch a Id");
        
    }
    const data = await response.json();
    return data;
};

export default getWorkoutById;