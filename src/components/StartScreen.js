export const StarScreen = () => {
    const local = localStorage.getItem("name");
    const name = local ? local : "Player";
    return `
<div class='p-8 bg-yellow-500 border-round-3xl'>
<div class="intro bg-white border-round-xl start-screen p-6 shadow-8">
                    <h1 class="text-center font-display">Happy Bee</h1>
                    <div class="flex justify-content-center mt-6">
                        <input type="text"
                            class="px-3 py-2 border-2 border-gray-300 outline-none border-round w-8 font-semibold text-xl"
                            value="${name}" placeholder="Nick Name" id='user-name-input'>
                    </div>
                    <div class="flex justify-content-center gap-2 flex-column mt-4 w-8 mx-auto " >
                        <div class="btn text-center " id="btn-start">Start</div>
                        <div class="btn text-center" id="btn-show-top-user">Top Player</div>
                    </div>
                </div>
</div>
`;
};
