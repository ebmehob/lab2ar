// vite.config.js
import basicSsl from '@vitejs/plugin-basic-ssl'

export default {
  plugins: [
    basicSsl({
      /** name of certification */
      name: 'test',
      /** custom trust domains */
      domains: ['lab2.custom.com'],
      /** custom certification directory */
      certDir: '/Users/.../.devServer/cert',
    }),
  ],
}