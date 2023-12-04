module.exports = {
    async rewrites() {
        return [
            {
                source: '/api-web/:path*',
                destination: 'http://127.0.0.1:8888/:path*',
            },
        ]
    },
}
