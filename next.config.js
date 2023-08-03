/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["i.scdn.co", "cdn.discordapp.com", "openweathermap.org", "flagcdn.com", "firebasestorage.googleapis.com"],
  }
}

module.exports = nextConfig
