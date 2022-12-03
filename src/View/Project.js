import React from "react";

function Project() {
  return (
    <div  data-aos="zoom-out">
        <p className="text-[25px] font-black text-center mt-10 ">Project</p>
      <div className="flex justify-center  mt-10">
        <div className="flex gap-5 bg-slate-800 text-white pr-10">
          <img
            className="w-80"
            src="https://img.wattpad.com/c3e8b11f52bac39f40fc9a18b15e2ac8438b5025/68747470733a2f2f73332e616d617a6f6e6177732e636f6d2f776174747061642d6d656469612d736572766963652f53746f7279496d6167652f6b2d696230467a4a72306f7334673d3d2d3931353333323231322e313633323133613532383065303739613733303533343938343231362e6a7067"
            alt=""
          />
          <div className="block mt-20">
            <p className="text-[25px] font-black text-orange-500">
              Tugas Yang Saya Pernah Kerjakan Yaitu 
            </p>
            <hr/>
            <br/>
            <li>HTML</li>
            <li>Java Script</li>
            <li>Java</li>
            <li>Vue Js</li>
            <li>React</li>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Project;
