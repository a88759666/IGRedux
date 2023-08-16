import { useAppDispatch } from "hooks";
import { follow, unFollow } from "slice/friendSlice";
import { memo } from 'react'

type IGUserProps = {
  size?: "medium" | "small";
  showFollow?: boolean;
  isFollowing?: boolean;
  account?: string;
  location?: string;
  avatar?: string;
  id?: number;
};

const IGUser: React.FC<IGUserProps> = 
  memo(({
    size = "small",
    showFollow = false,
    isFollowing = false,
    account,
    location,
    avatar,
    id,
  }) => {
    const dispatch = useAppDispatch()

    function fllowClickHandler() {
      if(id === undefined) return;
      if(isFollowing){
        dispatch(unFollow(id))
      } else {
        dispatch(follow(id))
      }
    }

    return (
      <div className="flex flex-row h-[70px] items-center box-border px-4">
        <div
          className={`${
            size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
          } overflow-hidden rounded-full`}
          style={{
            backgroundImage: `url(${avatar})`,
            backgroundPosition: "center",
            backgroundSize: "cover",
          }}
        ></div>
        <div className="ml-4 flex flex-col">
          <p className="font-bold text-sm">{account}</p>
          <p className="text-gray-400 text-xs">{location}</p>
        </div>
        {showFollow && (
          <p
            className={`${
              isFollowing ? "text-gray-700" : "text-blue-400"
            } ml-auto text-xs font-bold cursor-pointer`}
            onClick={fllowClickHandler}
          >
            {isFollowing ? "FOLLOWING" : "FOLLOW"}
          </p>
        )}
      </div>
    );
  })


export default IGUser;
