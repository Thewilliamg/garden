export const getAllStatus = async () => {
    let res = await fetch("http://localhost:5448/requests");
    let data = await res.json();
    let dataUpdate =[];
    data.forEach(i => {
            if (!(dataUpdate.includes(i.status))) {
                dataUpdate.push(i.status)
            };
        })
    return dataUpdate;
}