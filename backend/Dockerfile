# Gunakan image resmi Node.js
FROM node:18

# Set direktori kerja dalam container
WORKDIR /app

# Salin file konfigurasi (agar cache instalasi efektif)
COPY package*.json ./

# Install dependensi
RUN npm install

# Salin semua file backend ke container
COPY . .

# Jalankan server di port 5000
EXPOSE 5000

# Perintah default saat container dijalankan
CMD ["npm", "start"]
