import ExperienceComponent from "./Exp";
import data from "../../data/info.json";
import Heading from "../ui/Heading";

const ExperienceSection = () => {

  return (
    <>
        <Heading title={'Experience'} align={'right'}/>
        <ExperienceComponent/>
    </>
  );
};

export default ExperienceSection;


