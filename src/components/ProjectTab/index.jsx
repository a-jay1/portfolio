import { useEffect, useState } from "react";
import Heading from "../ui/Heading";
import Button from "../ui/Button";
import data from "../../data/info.json"
import Image from "next/image";

const ProjectTab = () => {

    const { projects } = data;

        const [activeTab, setActiveTab] = useState(0);  
        
        const handleTabChange = (index) => {
            setActiveTab(index);
        }

        const imgLink = 'https://imgs.search.brave.com/YDMx_89kA4Y7f3eKAixY5dttXYmUbZZ6wN6LjyZDcec/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly90My5m/dGNkbi5uZXQvanBn/LzA4Lzc0LzEyLzk2/LzM2MF9GXzg3NDEy/OTY3NV8zTndXbG96/MkJRNlFOcjFyRFBr/a0xFTWY1Wm9GTVRH/eC5qcGc';

    return (
        <>
            <Heading title={'Project'}/>
            <div className="tabs-section">
                <div className="overflow-x-scroll w-full scrollbar-hide">
                    <div className="tab-title whitespace-nowrap gap-5 flex">
                        {projects.map((item, index) => (
                            <Button key={index} txt={item.name} classname={`tab-btn ${index == activeTab?'active': ''}`} onClick={() => handleTabChange(index)}/>
                        ))}
                    </div>
                </div>
                
                {projects.map((project, index) => (
                    <div key={index} className={`${index == activeTab? 'block' : 'hidden'} px-3 overflow-x-hidden`}>
                        <div className={`tab-content`}>
                            <div className="content-wrapper project-card flex">
                                
                                    <div key={index} className={'project-details p-4'}>
                                        
                                        <img src={imgLink} alt={project.title} className="project-img" />
                                        
                                        <h2 className="">{project.title}</h2>
                                        <p>{project.description}</p>
                                        {/* <a className="" onClick={() => handleReadMore(index)}>Read more</a> */}
                                        
                                    </div>
                                
                            </div>
                        </div>
                        <div className="lang overflow-x-scroll scrollbar-hide pt-7 w-full">
                        <ul>
                            {project.languages.map((lang, langIndex) => (
                            <li key={langIndex}>
                                <Image className="cover" src={imgLink} width={50} height={50} alt="ln"/>
                            </li>
                            ))}
                        </ul>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
export default ProjectTab;