import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import fs from 'fs';
import path from 'path';

// Plugin to automatically copy user uploaded screenshots into public directory
function copyUserUploadsPlugin() {
  return {
    name: 'copy-user-uploads',
    configResolved() {
      const uploadDir = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded';
      const targetDir = path.resolve(process.cwd(), 'public/images/projects');

      if (!fs.existsSync(targetDir)) {
        fs.mkdirSync(targetDir, { recursive: true });
      }

      const fileMap = {
        'media_1790481394480.png': 'bao.png',
        'media_1790481401038.png': 'localgrind.png',
        'media_1790481408074.png': 'tagok.png',
        'media_1790481420040.png': 'weathercrops.png',
        // Profile photo
        'media_1790488414559.jpg': '../profile.jpg',
        // Certificate photos
        'media_1790489198045.png': '../certificates/cert-python.png',
        'media_1790489131375.png': '../certificates/cert-google-analytics.png',
        'media_1790489085858.png': '../certificates/cert-regression.png',
        'media_1790489038021.png': '../certificates/cert-ml.png',
        'media_1790489262263.png': '../certificates/cert-sql.png',
        // Also map initial media hashes if different
        'media_1790479502522.png': 'bao.png',
        'media_1790479502423.png': 'localgrind.png',
        'media_1790479502296.png': 'tagok.png',
        'media_1790479502363.png': 'weathercrops.png',
      };

      try {
        if (fs.existsSync(uploadDir)) {
          const files = fs.readdirSync(uploadDir);
          for (const file of files) {
            if (fileMap[file]) {
              const srcPath = path.join(uploadDir, file);
              const destPath = path.resolve(targetDir, fileMap[file]);
              fs.copyFileSync(srcPath, destPath);
              console.log(`[Vite Plugin] Successfully copied ${file} -> ${fileMap[file]}`);
            }
          }
        }
      } catch (err) {
        console.error('[Vite Plugin] Error copying assets:', err);
      }
    },
    configureServer(server) {
      // Serve direct uploads as well via /user-uploads
      server.middlewares.use('/user-uploads', (req, res, next) => {
        const uploadDir = 'C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded';
        const fileName = path.basename(req.url.split('?')[0]);
        const filePath = path.join(uploadDir, fileName);
        if (fs.existsSync(filePath)) {
          const ext = path.extname(fileName).toLowerCase();
          const mimeTypes = {
            '.png': 'image/png',
            '.jpg': 'image/jpeg',
            '.jpeg': 'image/jpeg',
            '.svg': 'image/svg+xml',
            '.pdf': 'application/pdf',
          };
          res.setHeader('Content-Type', mimeTypes[ext] || 'application/octet-stream');
          fs.createReadStream(filePath).pipe(res);
        } else {
          next();
        }
      });
    }
  };
}

export default defineConfig({
  plugins: [react(), copyUserUploadsPlugin()],
  server: {
    port: 3000,
    open: true,
    fs: {
      allow: ['..', 'C:/Users/ASUS/.gemini/antigravity-ide/brain/071ab5e8-c730-4bd8-bfea-d312806f5209/.user_uploaded']
    }
  }
});
