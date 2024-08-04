import home from './../icons/home.svg'
import post from './../icons/post.svg'
import settings from './../icons/settings.svg'
import account from './../icons/profile.svg'



interface IRoute {
    title: string,
    icon: string,
    path: string
}


export const routes: IRoute[] = [
    {
        title: 'Home',
        path: '/',
        icon: home
    },
    {
        title: 'Posts',
        path: '/posts',
        icon: post
    },
    {
        title: 'Account',
        path: '/account',
        icon: account
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: settings
    }
]