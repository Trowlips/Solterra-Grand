type NavLinkPropsType = {
    index: number;
    activeIndex: number | undefined;
    label: string;
    handleNavLinkClick: (index: number) => void;
};

function NavLink(props: NavLinkPropsType) {
    const { index, activeIndex, label, handleNavLinkClick } = props;
    return (
        <button
            onClick={() => handleNavLinkClick(index)}
            className={`text-sm sm:text-lg text-left font-semibold tracking-widest uppercase transition-colors hover:text-teal-600 border-b border-slate-100 w-full py-3
        ${activeIndex === index ? "text-teal-600" : "text-slate-600"}
      `}
        >
            {label}
        </button>
    );
}

export default NavLink;
