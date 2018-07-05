//暂时废弃,直接写入app.module
import { currentPageReducer } from './currentPage.redux';
import { DisplayIndexMenuReducer } from './indexMenu.redux';
export default [
    currentPageReducer,
    DisplayIndexMenuReducer
]
