export const GameScreen = () => `
<div class="border-game-screen shadow-3 ">

<div class="game-screen absolute z-3 relative overflow-hidden" id="screen">
    <div class=" overflow-hidden absolute top-0 left-0 right-0 bottom-0" id="slider"></div>
    <div class="group-right">
        <div class='flex gap-4'>
            <div class=" socer-show py-2 px-3 border-round text-white font-bold" id="score">999</div>
            <div class="flex gap-1 align-items-center" id="hearts"></div>
        </div>
        <div class="relative pt-8">
            <div class="circle p-2 flex justify-content-center align-items-center bg-yellow-500 absolute z-2 avatar-wrap">
                <div class="p-4 bg-white text-4xl font-bold circle avatar flex justify-content-center align-items-center overflow-hidden uppercase" id="avatar">
                    <img scr="./public/asset/img/avatar/avatar.png" />
                </div>
            </div>
            <div class="circle avatar-name bg-gray-200 text-gray-700 font-semibold absolute">
                <div class="text-overflow-clip w-full" id="user-name">user name</div>
            </div>
        </div>
    </div>
    <div class="group-left">
        <div class="btn btn-sm" id="btn-pause">
            <i class="fa-solid fa-pause"></i>
        </div>
    </div>
</div>
</div>
    `;
