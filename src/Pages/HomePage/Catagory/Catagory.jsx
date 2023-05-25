import { useEffect, useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import CatagoryCard from "./CatagoryCard";
import { RotateLoader } from "react-spinners";
const Catagory = () => {
  const [catagorys, setCatagorys] = useState([]);
  const [cardLoad, setCardLoad] = useState(false);
  const fetchCatagory = (text) => {
    setCardLoad(true);
    fetch(`https://toytopia-shop-server.vercel.app/toy?catagory=${text}`)
      .then((res) => res.json())
      .then((data) => {
        setCardLoad(false);
        setCatagorys(data);
      });
  };

  useEffect(() => {
    fetchCatagory("Unicorn");
  }, []);

  const showCatagory = (text) => {
    fetchCatagory(text);
  };

  return (
    <div className="p-9">
      <Tabs>
        <TabList className="flex justify-center p-6 bg-red-200 rounded-t-lg">
          <Tab onClick={() => showCatagory("Unicorn")}>Unicorn</Tab>
          <Tab onClick={() => showCatagory("Plush_Animals")}>Plush Animals</Tab>
          <Tab onClick={() => showCatagory("Glitter_eyes_Plush")}>
            Glitter eyes Plush
          </Tab>
        </TabList>

        <TabPanel className=" mt-11">
          {cardLoad ? (
            <div className="text-center">
              <RotateLoader color="#d63672" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 md:w-3/4 mx-auto gap-6">
              {catagorys.map((catagory) => (
                <CatagoryCard key={catagory._id} catagory={catagory} />
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel className=" mt-11">
          {cardLoad ? (
            <div className="text-center">
              <RotateLoader color="#d63672" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 md:w-3/4 mx-auto gap-6">
              {catagorys.map((catagory) => (
                <CatagoryCard key={catagory._id} catagory={catagory} />
              ))}
            </div>
          )}
        </TabPanel>
        <TabPanel className=" mt-11">
          {cardLoad ? (
            <div className="text-center">
              <RotateLoader color="#d63672" />
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 md:w-3/4 mx-auto gap-6">
              {catagorys.map((catagory) => (
                <CatagoryCard key={catagory._id} catagory={catagory} />
              ))}
            </div>
          )}
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default Catagory;
