import Image from 'next/image';
import data from '../../data/info.json';
import profileImg from '../../../public/assets/profile-1.png';

const About = ({theme}) => {

    const {about} = data;
    return (
        <div className='flex flex-col justify-center items-center'>
            <Image alt='profile' className='rounded-3xl bg-slate-950' src={profileImg} width={180} height={180} />
            <h1 className={`font-bold text-txt-dark text-xl`}>{about.title}</h1>
            <p className={`font-light text-xs text-center leading-4 text-txt-dark`}>{about.description}</p>
        </div>
    )
}

export default About;