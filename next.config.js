const path = require('path')
 
module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.ibb.co',
        port: '',
      },
      
      {
        protocol: 'http',
        hostname: 'books.google.com',
        port: '',
      },
      
      {
        protocol: 'https',
        hostname: 'loremflickr.com',
        port: '',
      },
      
    ],
  },
  
}