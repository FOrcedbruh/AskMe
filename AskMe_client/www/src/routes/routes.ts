interface IRoute {
    title: string,
    icon: string,
    path: string
}


export const routes: IRoute[] = [
    {
        title: 'Home',
        path: '/',
        icon: ''
    },
    {
        title: 'Posts',
        path: '/posts',
        icon: ''
    },
    {
        title: 'Account',
        path: '/account',
        icon: ''
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: ''
    }
]