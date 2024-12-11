import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import data from "../../data/info.json"

const ProjectTab = () => {

    const { projects } = data;

        const [activeTab, setActiveTab] = useState(0);  
        
        const handleTabChange = (index) => {
            setActiveTab(index);
        }

    return (
        <>
            <Heading title={'Project'}/>
            <div className="tabs-section">
                <div className="overflow-x-scroll w-full">
                    <div className="tab-title whitespace-nowrap gap-5 flex">
                        {projects.map((item, index) => (
                            <Button key={index} txt={item.name} classname={`tab-btn ${index == activeTab?'active': ''}`} onClick={() => handleTabChange(index)}/>
                        ))}
                    </div>
                </div>
                
                <div className="tab-content">
                    <div className="content-wrapper flex">
                         {projects.map((project, index) => (
                            <div key={index} className={`project-details ${index == activeTab? 'block' : 'hidden'}`}>
                                <img src={project.img} alt={project.title} className="project-img" />
                                <h2 style={{color: "#fff"}} className="text-white">{project.title}</h2>
                                <p>{project.description}</p>
                                <ul>
                                    {project.languages.map((lang, langIndex) => (
                                    <li key={langIndex}>{lang}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
export default ProjectTab;