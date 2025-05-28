/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['images.unsplash.com'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: '**',
            },
        ],
    },
    experimental: {
        serverActions: {
            allowedOrigins: ['localhost:3000', 'localhost:3001'],
        },
    },
}

module.exports = nextConfig 