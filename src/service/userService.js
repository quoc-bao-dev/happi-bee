export const getListUser = async () => {
    const url = `https://baogamejs.mr-quynh.com/?mod=request&act=get_all_user`;
    const res = await fetch(url);
    const data = await res.json();
    return await data;
};

export const postUser = ({ name, score }) => {
    const data = {
        name,
        score,
    };
    const url =
        "https://baogamejs.mr-quynh.com/?mod=request&act=create_or_update";
    const option = {
        method: "POST",
        body: JSON.stringify(data),
    };
    fetch(url, option);
};
