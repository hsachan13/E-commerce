import  Skeleton  from "react-loading-skeleton";
const Loading = () => {
    return (
        <>
        <div className="col-6">
             <Skeleton height={500}/>
        </div>
        <div className="col-md-3">
             <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
             <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
             <Skeleton height={350}/>
        </div>
        <div className="col-md-3">
             <Skeleton height={350}/>
        </div>
        </>
    )
  };
export default Loading;