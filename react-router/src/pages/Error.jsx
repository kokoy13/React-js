import { useRouteError } from "react-router-dom";
import lost from "../assets/lost.png";

function Error() {
    const error = useRouteError();

    return (
        <div style={{backgroundImage: `url(${lost})`}} className="min-h-dvh flex justify-center items-center text-black font-bold text-4xl">
            <p>Error : Page {error?.statusText || error?.message || "Something went wrong!"}</p>
        </div>
    );
}

export default Error;
