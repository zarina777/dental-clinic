import { LiaStarSolid } from "react-icons/lia";
import { ImStarHalf } from "react-icons/im";
import Dropdown from "../Dropdown";

const PerComment = ({ commentary, name, img, time }) => {
  return (
    <div className="flex gap-3 border-b border-b-gray-300 py-8">
      <div className={" h-14 aspect-square rounded-[50%] overflow-hidden "}>
        <img className="bg-cover w-[100%] h-[100%]" src={img} alt="" />
      </div>
      <div className="flex-1 ">
        <div className="flex flex-col gap-1">
          {/* User Info */}
          <div className="flex items-start justify-between">
            <div className="info h-14 flex flex-col justify-center gap-[3px] mb-2">
              {/* info */}
              <h3 className="font-bold ">{name}</h3>
              <div className="flex flex-col sm:flex-row gap-1 sm:gap-3">
                <ul className="flex gap-1 items-center">
                  <li className="text-yellow-700 ">
                    <LiaStarSolid className="text-xl" />
                  </li>
                  <li className="text-yellow-700 ">
                    <LiaStarSolid className="text-xl" />
                  </li>
                  <li className="text-yellow-700 ">
                    <LiaStarSolid className="text-xl" />
                  </li>
                  <li className="text-yellow-700 ">
                    <LiaStarSolid className="text-xl" />
                  </li>
                  <li className="text-yellow-700 ">
                    <ImStarHalf className="text-xl" />
                  </li>
                </ul>
                <span className="text-gray-500 text-sm">{time}</span>
              </div>
            </div>
            {/* <!-- Dropdown menu --> */}
            <Dropdown />
          </div>
          {/* commentary */}
          <p className="text-sm sm:text-base ">{commentary}</p>
        </div>
      </div>
    </div>
  );
};

export default PerComment;
