import Spinner from "@/components/Spinner";

export default function Loading() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[200px] w-full gap-4">
            <Spinner />
            <div className="flex flex-col items-center animate-pulse">
                <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                    Solterra
                </span>
                <span className="text-[10px] text-teal-600/60 font-medium">
                    Loading Sanctuary...
                </span>
            </div>
        </div>
    );
}
