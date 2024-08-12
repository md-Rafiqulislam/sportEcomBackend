
// all the imports here
import { Router } from "express"; // the router for application
import { TModuleRoute } from "./router.interface"; // single product type
import { productRoutes } from "../modules/product/product.route"; // all routes for products
import { checkoutRoutes } from "../modules/checkout/checkout.route"; // all routes for checkout

// creating the router object
const router: Router = Router();

// all the module router
const moduleRoutes: TModuleRoute[] = [
    {
        path: '/products',
        route: productRoutes,
    },
    {
        path: '/checkout',
        route: checkoutRoutes,
    }
];

// go through each route
moduleRoutes.forEach((route) => router.use(route.path, route.route));

// export the main router object
export default router;