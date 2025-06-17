FROM node:18

# Buat direktori kerja dalam container
WORKDIR /app

# Salin dan install dependensi dulu (agar cache efisien)
COPY package*.json ./
RUN npm install

# Lalu salin semua file project
COPY . .

# Expose port sesuai yang digunakan di server.js/index.js
EXPOSE 5000

# Jalankan server saat container start
CMD ["node", "index.js"]
