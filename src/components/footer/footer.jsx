import { FaGithub, FaLinkedin } from 'react-icons/fa';


const socials = [
    {
        id: 1,
        name: "LinkedIn",
        href: "https://www.linkedin.com/in/gokul-v-155927134/",
        icon: FaLinkedin,
    },
    {
        id: 2,
        name: "Github",
        href: "https://github.com/Gokul-VR",
        icon: FaGithub,
    },
];

export default function Footer() {
    return (
        <footer>
            <div className="mx-auto max-w-7xl px-6 py-12 md:flex md:items-center md:justify-between lg:px-8">
                <div className="flex justify-center space-x-6 md:order-2">
                    {socials.map((item) => (
                        <a key={item.name} href={item.href} >
                            <span className="sr-only">{item.name}</span>
                            <item.icon className="h-8 w-8" aria-hidden="true" />
                        </a>
                    ))}
                </div>
                <div className="mt-8 md:order-1 md:mt-0">
                    <p className="text-center text-xs leading-5 ">
                        &copy; 2024 Gokul VR, All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}