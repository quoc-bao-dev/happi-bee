import { getListUser } from "../service/userService.js";
import UserRow from "./UserRow.js";

export const TopGamer = async () => {
    const listUser = [];
    const data = await getListUser();
    listUser.push(...data.data);

    const Users = listUser
        .map((item, i) => UserRow({ ...item, rank: i + 1 }))
        .join("");

    return `
    <div class="p-6 bg-white border-round top-user">
        <h1 class="text-center bg-yellow-500 text-white p-4 mb-4 ">TOP GAMER</h1>
        <div class="max-h-25rem overflow-y-scroll p-4 border-round shadow-1">
            ${Users}
        </div>
        <div class="mt-5 flex justify-content-center" id='btn-back-home'>
            <div class="btn">Back Home</div>
        </div>
    </div>
    `;
};
