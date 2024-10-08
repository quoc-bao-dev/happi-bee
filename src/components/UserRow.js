const UserRow = ({ id, name, score, rank }) => `

    <div class="p-3 mb-4 bg-gray-100 border-round h-fit">
                        <div class="grid grid-custom">
                            <div class="col-2">
                                <div
                                    class="py-3 px-2 text-2xl text-gray-800 font-bold text-center bg-yellow-100 border-round">
                                    ${rank}
                                </div>
                            </div>
                            <div class="col-5 flex align-items-center text-gray-700">
                                <div
                                    class="text-xl font-semibold flex align-items-center w-full h-full pl-3 bg-gray-300 border-round">
                                    ${name}
                                    </div>
                            </div>
                            <div class="col flex align-items-center text-gray-700">
                                <div
                                    class="text-xl font-bold w-full h-full flex align-items-center pl-3 border-round  bg-gray-300">
                                    ${score}
                                    </div>
                            </div>
                        </div>
                    </div>
`;

export default UserRow;
