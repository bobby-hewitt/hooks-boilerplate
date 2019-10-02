import React from 'react'
import {useRoutes} from 'hookrouter';
import { Home, NotFound } from 'Containers'
const routes = {
    '/': () => <Home />,
    '/about': () => <Home />,
    '/products': () => <Home />,
    '/products/:id': ({id}) => <Home id={id} />
};
  
const MyApp = () => {
    const routeResult = useRoutes(routes);
    return routeResult || <NotFound />;
}

export default MyApp