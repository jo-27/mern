import {Suspense,lazy} from "react"
const LazyComp=lazy(()=>import("../Signup"))
const LazyLoadingAndSuspense=()=> {
  return (
    <div>
        <Suspense>
        <h1>
        LazyLoadingAndSuspense
        </h1>
        <LazyComp></LazyComp>
        </Suspense>
        
    </div>
  )
}

export default LazyLoadingAndSuspense