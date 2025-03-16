import { withAuth } from 'next-auth/middleware'

export default withAuth({
  pages: {
    signIn: '/login',
  },
})

export const config = {
  matcher: [
    // 需要保护的路由
    '/dashboard/:path*',
    '/profile/:path*',
    '/mri-principles/:path*',
    '/content/:path*',
    '/mri-diagnosis/:path*',
    '/mri-techs/:path*',
    '/projects/:path*',
    '/mri-bookshelf/:path*',
    '/history/:path*',
    '/mri-dictionary/:path*',
    '/mri-quiz/:path*',
    '/showcases/:path*',
  ],
}