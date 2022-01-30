import Admin from "./pages/Admin";
import {
    ADMIN_ROUTE,
    COLLECTIONS_ROUTE,
    ITEM_ROUTE,
    LOGIN_ROUTE,
    PERSONAL_COLLECTIONS_ROUTE,
    REGISTRATION_ROUTE
} from "./utils/consts";
import PersonalCollections from "./pages/PersonalCollections";
import Collections from "./pages/Collections";
import Auth from "./pages/Auth";
import Item from "./pages/Item";
import Collection from "./pages/Collection";

export const authRoutes = [
    {
        path: ADMIN_ROUTE,
        Component: Admin
    },
    {
        path: PERSONAL_COLLECTIONS_ROUTE,
        Component: PersonalCollections
    },
]

export const publicRoutes =[
    {
        path: COLLECTIONS_ROUTE,
        Component: Collections
    },
    {
        path: COLLECTIONS_ROUTE + '/:id',
        Component: Collection
    },
    {
        path: LOGIN_ROUTE,
        Component: Auth
    },
    {
        path: REGISTRATION_ROUTE,
        Component: Auth
    },
    {
        path: ITEM_ROUTE + '/:id',
        Component: Item
    },

]