/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_ERXES_API_URL: "https://urangan.app.erxes.io/gateway/graphql",
    NEXT_PUBLIC_ERXES_APP_TOKEN:
      "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhcHAiOnsibmFtZSI6InVnLWdyb3VwIiwiY3JlYXRlZEF0IjoiMjAyNS0wNi0wM1QxODo0MDo0MC45NzZaIiwidXNlckdyb3VwSWQiOiI0RUh5ZFREQWlzMkxkUW5abiIsImV4cGlyZURhdGUiOiIyMDI1LTA3LTA0VDA3OjI3OjU1LjU2M1oiLCJub0V4cGlyZSI6dHJ1ZSwiYWxsb3dBbGxQZXJtaXNzaW9uIjp0cnVlLCJfaWQiOiI2eDVmX1IyakVmRVNTZ0F3amRiRlgiLCJfX3YiOjB9LCJpYXQiOjE3NDkwMjIwODh9.PBhNgIcNXwsCjs-DiFDqt7FEtkYhye5vpz7aF798hYE",
  },
  images: {
    domains: [
      "images-na.ssl-images-amazon.com",
      "utfs.io",
      "cdn.discordapp.com",
      "media.discordapp.net",
      "t4.ftcdn.net",
      "urangan.app.erxes.io",
      "img.freepik.com",
    ],
  },
};

export default nextConfig;