import React from 'react';

const ProgressBar = () => {
  return (
  
      <div className="flex flex-col m-4 items">
              <div className="relative pt-1">
                <div className="flex h-1.5 mb-4 overflow-hidden text-xs bg-gray-300 rounded">
                  <div
                    style={{
                      width: "30%",
                    }}
                    className="flex flex-col justify-center bg-blue-400 shadow-none text-white"
                  ></div>
                </div>
              </div>
            </div>
  )
}

export default ProgressBar
