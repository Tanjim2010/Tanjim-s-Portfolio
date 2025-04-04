

const Button = ({ children, className, type }) => {
    return (
        <button className={`${className} active:translate-y-[1px] shadow-lg ${type === 'outline' ? 'px-4 py-2 rounded-xl bg-[#fcf6e4] border border-[#FFB433] cursor-pointer hover:text-white transition-colors delay-150  hover:bg-[#FFB433]' : 'px-4 py-2 rounded-xl bg-[#fcf6e4] border border-[#FFB433] cursor-pointer'}`}>
            {children}
        </button>
    );
};

export default Button;