import "./style.css"

import {printTemplate as Header} from "./components/Header/Header"
import {printTemplate as Footer} from "./components/Footer/Footer"
import {printTemplate as Home} from "./pages/Home/Home"
import {printTemplate as Gallery} from "./pages/Gallery/Gallery"
import {printTemplate as About} from "./pages/About/About"
import {linkpage} from "./utils/linkpage"

Header()
Footer()
//Por defecto entramos desde Home
Home()

linkpage("#homelink", Home)
linkpage("#gallerylink", Gallery)
linkpage("#aboutlink", About)