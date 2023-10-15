import React from 'react';

function ThreeSections() {
    return (
        <div className="h-screen w-full flex flex-col md:flex-row">
            {/* Section 1 */}
            <div className="flex-1 bg-blue-200 md:border-r md:border-blue-500">
                <div className="h-full flex items-center justify-center">
                    Content for Section 1
                </div>
            </div>

            {/* Section 2 */}
            <div className="flex-1 bg-green-200 md:border-r md:border-green-500">
                <div className="h-full flex items-center justify-center">
                    Content for Section 2
                </div>
            </div>

            {/* Section 3 */}
            <div className="flex-1 bg-red-200">
                <div className="h-full flex items-center justify-center">
                    Content for Section 3
                </div>
            </div>
        </div>
    );
}

export default ThreeSections;
