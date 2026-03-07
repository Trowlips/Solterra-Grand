export default function Loading() {
  return (
      <div className="flex flex-col w-full gap-8 py-5">
          {/* Top Loading Indicator */}
          <div className="flex flex-col items-center animate-pulse pt-4">
              <span className="text-xs font-bold tracking-[0.3em] text-slate-400 uppercase">
                  Solterra
              </span>
              <span className="text-[10px] text-teal-600/60 font-medium">
                  Loading Profile...
              </span>
          </div>

          {/* Account Page Skeleton Layout */}
          <div className="h-full w-full px-10 space-y-8 overflow-y-auto animate-pulse">
              
              {/* ReservationBox Skeleton */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  {/* Header */}
                  <div className="flex justify-between items-center mb-6">
                      <div className="h-6 w-48 bg-slate-200 rounded"></div>
                      <div className="h-4 w-24 bg-slate-200 rounded"></div>
                  </div>
                  
                  {/* Reservation Items Skeleton */}
                  <div className="space-y-4">
                      {[1, 2].map((i) => (
                          <div key={i} className="flex flex-col sm:flex-row gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200 items-center">
                              {/* Thumbnail */}
                              <div className="h-16 w-16 bg-slate-200 rounded-lg shrink-0"></div>
                              {/* Details */}
                              <div className="flex-1 space-y-2 w-full">
                                  <div className="h-4 w-1/3 bg-slate-300 rounded"></div>
                                  <div className="h-3 w-1/2 bg-slate-200 rounded"></div>
                              </div>
                              {/* Cancel Button Area */}
                              <div className="h-3 w-12 bg-slate-200 rounded mt-2 sm:mt-0"></div>
                          </div>
                      ))}
                  </div>
              </div>

              {/* MemberTierCard Skeleton */}
              <div className="bg-white rounded-2xl p-8 border border-slate-100 shadow-sm">
                  {/* Avatar & Info */}
                  <div className="flex flex-col justify-center items-center mb-6">
                      <div className="h-20 w-20 bg-slate-200 rounded-full mb-3"></div>
                      <div className="h-5 w-32 bg-slate-300 rounded mb-2"></div>
                      <div className="h-3 w-48 bg-slate-200 rounded"></div>
                  </div>

                  {/* Stats Rows */}
                  <div className="space-y-2">
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <div className="h-4 w-24 bg-slate-200 rounded"></div>
                          <div className="h-4 w-20 bg-slate-300 rounded"></div>
                      </div>
                      <div className="flex justify-between items-center p-3 bg-slate-50 rounded-lg">
                          <div className="h-4 w-24 bg-slate-200 rounded"></div>
                          <div className="h-4 w-16 bg-slate-300 rounded"></div>
                      </div>
                  </div>
              </div>

          </div>
      </div>
  );
}