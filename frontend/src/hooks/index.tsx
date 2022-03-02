import React from "react";

import { SearchContext  } from './search/index'
import { Auth } from './auth'


export const AppProvider: React.FC=({children})=>(
    <SearchContext>
         <Auth>
            { children }
         </Auth>
    </SearchContext>

)