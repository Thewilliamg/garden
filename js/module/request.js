export const getAllStatus = async () => {
    let res = await fetch("http://172.16.101.146:5448/requests");
    let data = await res.json();
    let dataUpdate =[];
    data.forEach(i => {
            if (!(dataUpdate.includes(i.status))) {
                dataUpdate.push(i.status)
            };
        })
    return dataUpdate;
}