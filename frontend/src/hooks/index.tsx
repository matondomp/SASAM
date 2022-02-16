import React from "react";

import { SearchContext  } from './search/index'
import { Auth } from './auth'
//import { Toast } from './toast'

export const AppProvider: React.FC=({children})=>(
//<Toast>
    <SearchContext>
         <Auth>
            { children }
         </Auth>
    </SearchContext>
// </Toast>
)