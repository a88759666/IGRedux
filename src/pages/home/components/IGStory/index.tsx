import Loading from "components/Loading";
import { useGetIgStoriesQuery } from "service/homeService";
import Item from "./Item";


const IGStory: React.FC = () => {
  const { data, isLoading } = useGetIgStoriesQuery("all")
  

  return (
    <div className="w-full h-[110px] box-border flex items-center overflow-x-auto overflow-y-hidden shadow-md no-scrollbar lg:my-8">
      {isLoading && (
        <div className="flex justify-center w-full">
          <Loading />
        </div>
      )}
      {
        data?.map((item) => {
          const { id, name, avatar } = item;
          return (
            <div key={id}>
              <Item  name={name} avatar={avatar} />
            </div>
          )
        })
      }
    </div>
  );
};

export default IGStory;
