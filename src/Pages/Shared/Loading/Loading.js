import React from 'react';

const Loading = () => {
    return (
        <div class="flex justify-center mt-64 space-x-2 animate-bounce">
    <div class="w-4 h-4 bg-blue-400 rounded-full"></div>
    <div class="w-4 h-4 bg-green-400 rounded-full"></div>
    <div class="w-4 h-4 bg-black rounded-full"></div>
</div>

    );
};

export default Loading;