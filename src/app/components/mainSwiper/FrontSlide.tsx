function FrontSlide() {
    return (
        <div className="h-screen w-screen flex justify-center items-center">
            <video
                src={"/PV.mp4"}
                autoPlay
                muted
                loop
                className="w-screen h-full object-cover"
            />
        </div>
    );
}

export default FrontSlide;
