    export default function Accordion() {
    return (
    <div className="mt-4 hs-accordion-group">
    <div className=" hs-accordion active" id="hs-basic-heading-one">
        <button
        className="inline-flex items-center w-full px-2 py-3 mb-4 font-semibold text-left text-gray-800 transition rounded-md hs-accordion-toggle hs-accordion-active:text-p-600 group gap-x-3 hover:text-gray-500 dark:hs-accordion-active:text-p-500 dark:text-gray-200 dark:hover:text-gray-400 ring-2 ring-p-400"
        aria-controls="hs-basic-collapse-one"
        >
        <svg
            className="block w-3 h-3 text-gray-600 hs-accordion-active:hidden hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
            <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        <svg
            className="hidden w-3 h-3 text-gray-600 hs-accordion-active:block hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        But like, why? WTF is the point?
        </button>
        <div
        id="hs-basic-collapse-one"
        className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-one"
        >
        <p className="mb-6 ml-4 text-gray-800 dark:text-gray-200">
            Why not! No lie though, I asked myself this very question many times while making it.
        </p>
        </div>
    </div>

    <div className="hs-accordion" id="hs-basic-heading-two">
        <button
        className="inline-flex items-center w-full px-2 py-3 mb-4 font-semibold text-left text-gray-800 transition rounded-md hs-accordion-toggle hs-accordion-active:text-p-600 group gap-x-3 hover:text-gray-500 dark:hs-accordion-active:text-p-500 dark:text-gray-200 dark:hover:text-gray-400 ring-2 ring-p-400"
        aria-controls="hs-basic-collapse-two"
        >
        <svg
            className="block w-3 h-3 text-gray-600 hs-accordion-active:hidden hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
            <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        <svg
            className="hidden w-3 h-3 text-gray-600 hs-accordion-active:block hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        Why the subject matter? Why tech?
        </button>
        <div
        id="hs-basic-collapse-two"
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-two"
        >
        <p className="mb-6 ml-4 text-gray-800 dark:text-gray-200">
        Well I'm a developer, so that's something. But also, is there a more absurd industry than tech? 
        </p>
        </div>
    </div>

    <div className="hs-accordion" id="hs-basic-heading-three">
        <button
        className="inline-flex items-center w-full px-2 py-3 mb-4 font-semibold text-left text-gray-800 transition rounded-md hs-accordion-toggle hs-accordion-active:text-p-600 group gap-x-3 hover:text-gray-500 dark:hs-accordion-active:text-p-500 dark:text-gray-200 dark:hover:text-gray-400 ring-2 ring-p-400"
        aria-controls="hs-basic-collapse-three"
        >
        <svg
            className="block w-3 h-3 text-gray-600 hs-accordion-active:hidden hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
            <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        <svg
            className="hidden w-3 h-3 text-gray-600 hs-accordion-active:block hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        Is there a future for Satirical Silicon?
        </button>
        <div
        id="hs-basic-collapse-three"
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-three"
        >
        <p className="mb-6 ml-4 text-gray-800 dark:text-gray-200">
        Heck yeah! I mean, I hope so. I'm having a lot of fun making it, and I hope you're having fun reading it. Maybe one day I'll even make some money off of it, but I'm not holding my breath.
        </p>
        </div>
    </div>
    <div className="hs-accordion" id="hs-basic-heading-three">
        <button
        className="inline-flex items-center w-full px-2 py-3 mb-4 font-semibold text-left text-gray-800 transition rounded-md hs-accordion-toggle hs-accordion-active:text-p-600 group gap-x-3 hover:text-gray-500 dark:hs-accordion-active:text-p-500 dark:text-gray-200 dark:hover:text-gray-400 ring-2 ring-p-400"
        aria-controls="hs-basic-collapse-three"
        >
        <svg
            className="block w-3 h-3 text-gray-600 hs-accordion-active:hidden hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
            <path
            d="M8.12421 13.36V2.35999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        <svg
            className="hidden w-3 h-3 text-gray-600 hs-accordion-active:block hs-accordion-active:text-p-600 hs-accordion-active:group-hover:text-p-600 group-hover:text-gray-500 dark:text-gray-400"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
            <path
            d="M2.62421 7.86L13.6242 7.85999"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            />
        </svg>
        I wanna help! How can I contribute?
        </button>
        <div
        id="hs-basic-collapse-three"
        className="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
        aria-labelledby="hs-basic-heading-three"
        >
        <p className="mb-6 ml-4 text-gray-800 dark:text-gray-200">
        I'm glad you asked! The code is open sourced on <a className="anc" href="https://github.com/tyfiero/SatiricalSilicon" target="_blank" >Github</a> , feel free to use it however you'd like, or submit a pull request if you want to help out with this site. Hit me up on <a className="anc" href="https://twitter.com/FieroTy" target="_blank" >Twitter</a> if you wanna collaborate and make something together.
        </p>
        </div>
    </div>
    </div>
    );
    }
