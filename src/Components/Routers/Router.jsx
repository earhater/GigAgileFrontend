import {useRoutes} from "react-router-dom";
import Notfoundpage from "../404.jsx";

export default function Router() {
    return useRoutes([
        {
            path: '/404',
            element: <Notfoundpage/>,
        },
    ]);
}

// НЕ ТРОГАЙ РОУТЕР. ЭТИМ ЗАНИМАЕТСЯ АДМИН