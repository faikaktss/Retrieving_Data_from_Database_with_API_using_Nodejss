# Basic Node.js & Express API Template

## 📌 Proje Hakkında

Bu proje, **Node.js** ve **Express.js** kullanılarak geliştirilmiş basit bir web API örneğidir. PostgreSQL veritabanına `.env` dosyasıyla bağlantı kurmayı ve basit bir GET rotası (`/users`) tanımlamayı gösterir.

Bu örnek, doğrudan veritabanına sorgu göndermese de temel yapılandırma ve bağlantı testleri için başlangıç noktası sunar.

## 🚀 Kullanılan Teknolojiler

- Node.js
- Express.js
- PostgreSQL
- dotenv

## 📁 Proje Yapısı

```bash
project-root/
├── node_modules/
├── .env.exp              # Ortam değişkenleri örneği
├── .gitattributes
├── express.js            # Uygulama ana dosyası
├── package.json
├── package-lock.json
```

## ⚙️ Kurulum ve Çalıştırma

### 1. Bağımlılıkları Kurun
```bash
npm install
```

### 2. .env Dosyasını Ayarlayın
`.env` dosyasına aşağıdaki gibi veritabanı bilgilerini girin:

```
PORT=3000
DATABASE_USER=postgres
DATABASE_PASSWORD=yourpassword
DATABASE_HOST=localhost
DATABASE_PORT=5432
DATABASE_NAME=mydb
```

### 3. Uygulamayı Başlatın
```bash
node express.js
```

## 🔁 API Rotaları

### GET /users

Veri tabanı sorgusu yapmadan sadece örnek mesaj döner.

Yanıt:
```json
{
  "message": "Data geldi"
}
```

## 📌 Not

Bu proje, Express.js ile temel bir yapı kurmak ve veritabanına bağlanma adımlarını test etmek için hazırlanmıştır.
