import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  build: {
    chunkSizeWarningLimit: 800, // opcional, define el límite de tamaño de los archivos para las advertencias
   /*  rollupOptions: {
      input: './src/main.jsx',
      output: {
        dir: 'dist', // nombre de la carpeta de salida
        format: 'es', // formato de salida, puede ser 'es' o 'cjs'
        manualChunks: {
          vendor: [
            'react',
            'react-dom'
            // Agrega aquí los nombres de tus dependencias
          ],
        },
      },
    }, */
  },
  }
)


/* 

es (o esm) indica que el código generado será en formato ES modules.

cjs indica que el código generado será en formato CommonJS.



Con esta configuración, Vite generará los archivos separados en la carpeta dist. Los archivos CSS y JS generados por Vite se colocarán en la carpeta assets, mientras que los módulos definidos en la opción manualChunks se colocarán en archivos separados en la carpeta dist.


Además, asegúrate de tener las siguientes dependencias instaladas en tu proyecto:



npm install @rollup/plugin-commonjs @rollup/plugin-node-resolve rollup-plugin-terser --save-dev




 build: {
    chunkSizeWarningLimit: 800, // opcional, define el límite de tamaño de los archivos para las advertencias
    rollupOptions: {
      input: './src/main.jsx',
      output: {
        dir: 'dist', // nombre de la carpeta de salida
        format: 'es', // formato de salida, puede ser 'es' o 'cjs'
      
      },
    },
  },



*/



 /* 
build: {
    rollupOptions: {
      input: {
        main: './index.html',
      },
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
      },
    },
  }, */



  /* 
  
  build: {
    rollupOptions: {
      input:'./index.html',         //'main.jsx',
      output: {
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        maxSize: 450000, // 500 KB
         //dir: 'dist', // nombre de la carpeta de salida
        format: 'es', // formato de salida, puede ser 'es' o 'cjs'
      },
    },
  },

  
  
  
  */