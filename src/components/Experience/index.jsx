import ExperienceComponent from "./Exp";
import data from "../../data/info.json";
import Heading from "../ui/Heading";

const ExperienceSection = () => {

  const { Experience } = data;

  return (
    <>
        <Heading txt={'Experience'} align={'right'}/>
        <ExperienceComponent data={data}/>
    </>
  );
};

export default ExperienceSection;


