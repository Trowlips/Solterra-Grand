function Spinner() {
    return (
        <div className="relative">
            {/* Outer Ring */}
            <div className="h-16 w-16 rounded-full border-4 border-slate-100 border-t-teal-600 animate-spin" />

            {/* Inner Pulsing Circle */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                <div className="h-8 w-8 rounded-full bg-teal-600/20 animate-ping" />
            </div>
        </div>
    );
}

export default Spinner;
