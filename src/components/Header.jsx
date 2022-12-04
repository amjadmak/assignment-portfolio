import { useState, useEffect } from "react";
import { Disclosure } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

export function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
}
export default function Header() {
    const navigation = [
        { name: `Projects`, href: "#project", current: false },
        { name: `Education`, href: "#education", current: false },
        { name: `Skills`, href: "#skills", current: false },
    ];
    const [animateHeader, setAnimateHeader] = useState(false);

    useEffect(() => {
        const listener = () =>
            window.scrollY > 140
                ? setAnimateHeader(true)
                : setAnimateHeader(false);
        window.addEventListener("scroll", listener);
        return () => {
            window.removeEventListener("scroll", listener);
        };
    }, []);

    return (
        <div className='relative bg-[#1d6e94] flex justify-center font-primary'>

            <Disclosure
                as='nav'
                className='bg-transperent mx-3 w-full md:mx-6 lg:mx-14'
            >
                {({ open }) => (
                    <>
                        <div
                            className={`max-w-auto  opacity-1 top-0 z-30 mb-2 transition duration-1000   ease-in-out ${
                                animateHeader && "bg-[#ddd] opacity-0"
                            }`}
                        >
                            <div className=' flex items-center justify-end'>
                                <div className='absolute flex  items-center md:hidden'>
                                    {/* Mobile menu button*/}
                                    <Disclosure.Button className=' hover:text-slate-900 focus:ring-white inline-flex items-center justify-center rounded-md p-2  hover:bg-[#105d81] focus:outline-none focus:ring-2 focus:ring-inset'>

                                        {open ? (
                                            <XIcon
                                                className='w-5 block h-5'
                                                aria-hidden='true'
                                                stroke='#1e1e1e'
                                            />
                                        ) : (
                                            <MenuIcon
                                                className='block h-6 w-5'
                                                aria-hidden='true'
                                                stroke='#1e1e1e'
                                            />
                                        )}
                                    </Disclosure.Button>
                                    <div className='hidden sm:ml-6 md:block '>
                                        <div className='flex space-x-4 '>
                                            {navigation.map((item) => (

                                             
                                                    <a
                                                    key={item.name}
                                                    href={item.href}

                                                        className={classNames(
                                                            item.current
                                                                ? "  text-[white]"
                                                                : " hover:bg-[gray-700] hover:text-white text-[white]",
                                                            "rounded-md px-3 py-2 font-medium "
                                                        )}
                                                        aria-current={
                                                            item.current
                                                                ? "page"
                                                                : undefined
                                                        }
                                                    >
                                                        {item.name}
                                                    </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                                <a href='/'>
                                   <img className="rounded-full" src="https://amjadmak.github.io/Potfolio-site/assets/img/profileFace.jpg" alt="null" width={50} height={50}/>
                                </a>
                                <div className='flex flex-1 items-center justify-center sm:items-stretch sm:justify-end'>
                                    <div className='flex flex-shrink-0 items-center'>
                                        <div className='hidden sm:ml-6 md:block '>
                                            <div className='mr-0 flex space-x-0 lg:mr-5 lg:space-x-4 '>
                                                {navigation.map((item) => (

                                                        <a
                                                                                                                key={item.name}
                                                                                                                href={item.href}
                                                            className='hover:text-white mx-1 rounded-md px-3
                                                        py-2 text-fontColor hover:opacity-70 lg:text-lg'
                                                            aria-current={
                                                                item.current
                                                                    ? "page"
                                                                    : undefined
                                                            }
                                                        >
                                                            {item.name}
                                                        </a>
                                                ))}
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <Disclosure.Panel className='md:hidden'>
                            <div className='mx-10 rounded-lg bg-[transparent] px-2 shadow-lg   '>

                                {navigation.map((item) => (
                                    <Disclosure.Button
                                        key={item.name}
                                        as='a'
                                        href={item.href}
                                        className='-z-20 mt-0  block border-t border-[rgba(179,178,187,0.4)] px-3 py-2 text-center font-medium text-fontColor hover:bg-[#105d81]'
                                        aria-current={
                                            item.current ? "page" : undefined
                                        }
                                    >
                                        {item.name}
                                    </Disclosure.Button>
                                ))}
                            </div>
                        </Disclosure.Panel>
                    </>
                )}
            </Disclosure>
        </div>
    );
}