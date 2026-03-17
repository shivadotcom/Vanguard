import express from 'express';
import { createServer as createViteServer } from 'vite';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json({ limit: '50mb' }));

  // API to save generated images permanently to the public folder
  app.post('/api/save-image', (req, res) => {
    try {
      const { vehicleId, base64Data, sceneData } = req.body;
      if (!vehicleId || !base64Data) {
        return res.status(400).json({ error: 'Missing data' });
      }

      const publicDir = path.join(__dirname, 'public', 'generated');
      if (!fs.existsSync(publicDir)) {
        fs.mkdirSync(publicDir, { recursive: true });
      }

      // Save image file
      const filePath = path.join(publicDir, `${vehicleId}.png`);
      const base64Image = base64Data.replace(/^data:image\/\w+;base64,/, "");
      fs.writeFileSync(filePath, base64Image, 'base64');

      const imageUrl = `/generated/${vehicleId}.png`;

      // Update metadata.json
      const metadataPath = path.join(publicDir, 'metadata.json');
      let metadata: any = {};
      if (fs.existsSync(metadataPath)) {
        metadata = JSON.parse(fs.readFileSync(metadataPath, 'utf-8'));
      }

      metadata[vehicleId] = {
        image: imageUrl,
        scene: sceneData
      };

      fs.writeFileSync(metadataPath, JSON.stringify(metadata, null, 2));

      res.json({ success: true, url: imageUrl, metadata: metadata[vehicleId] });
    } catch (error) {
      console.error('Error saving image:', error);
      res.status(500).json({ error: 'Failed to save image' });
    }
  });

  if (process.env.NODE_ENV !== 'production') {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
