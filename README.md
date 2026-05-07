# 🐱 Mèo Vô Tri Khấn Phật - Cat-zen-meme

> *Tâm bất biến giữa dòng đời vạn biến* ✨

Ứng dụng tích công đức online cùng mèo vô tri. Tịnh tâm và thư giãn với những lời khấn phật tế nhân.

![HTML5](https://img.shields.io/badge/HTML5-E34C26?style=flat-square&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=flat-square&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=flat-square&logo=javascript&logoColor=black)

---

## 📖 Mô Tả Dự Án

**Mèo Vô Tri Khấn Phật** là một ứng dụng web tương tác theo chủ đề Phật giáo, kết hợp thiền định và hài hước. Người dùng có thể gõ mõ (wooden fish) để tích công đức, nghe tiếng cốc quen thuộc, và đọc những lời khấn phật đầy tính nhân văn và hài hước.

Đây là một bài học thú vị về sự "vô tri là hạnh phúc" - khi chúng ta buông bỏ những lo lắng, chỉ cần gõ mõ, nghe tiếng cốc, và tìm thấy sự yên bình trong các khoảnh khắc đơn giản.

---

## ✨ Các Tính Năng Chính

### 🎯 Tính Năng Tương Tác
- **Gõ Mõ Tích Công Đức**: Click vào icon mõ để tích công đức
- **Bộ Đếm Công Đức**: Theo dõi số lần gõ mõ và công đức tích lũy
- **Lời Khấn Phật Động**: 10 lời khấn phật khác nhau hiển thị ngẫu nhiên (mỗi 5 lần gõ)
- **Hiệu Ứng Âm Thanh**: Web Audio API tạo tiếng cốc gõ mõ thực tế
- **Tương Tác với Mèo**: Hover vào mèo để xem hiệu ứng 3D xoay

### 🎨 Giao Diện & Hiệu Ứng
- **Thiết Kế Tối Giản**: Dark mode với accent màu vàng vàng (gold)
- **Glassmorphism**: Nền kính trong suốt với blur effect
- **Hoạt Hình Lá Sen**: Lá sen rơi động ra từ background
- **Pulse Aura**: Halo xung quanh mèo phát sáng nhẫn ngoại
- **Floating Text**: Chữ "+1 Công Đức" nổi lên khi gõ mõ
- **Responsive Design**: Compatible với desktop và mobile

### 🔤 Nội Dung Đa Dạng
10 lời khấn phật với hỗn hợp tôn giáo và hài hước:
```
Nam mô A Di Đà Phật...
Tâm bất biến giữa dòng đời vạn biến...
Hết tiền rồi, khấn thôi...
Ăn no ngủ kỹ là chân lý...
Cầu cho deadline biến mất...
Vô tri là hạnh phúc...
Tịnh tâm, tịnh tâm...
Khổ tận cam lai, mèo mai có cá...
Tất cả chỉ là phù du...
Thiên linh linh, địa linh linh...
```

---

## 🚀 Cài Đặt & Sử Dụng

### Yêu Cầu
- Trình duyệt web hiện đại (Chrome, Firefox, Safari, Edge)
- Không cần cài đặt thêm dependencies

### Bước 1: Clone Repository
```bash
git clone https://github.com/PHAMTANPHUC-DESIGNER/Cat-zen-meme.git
cd Cat-zen-meme
```

### Bước 2: Mở Ứng Dụng
**Phương án 1: File trực tiếp**
- Double-click vào file `index.html` hoặc drag vào trình duyệt

**Phương án 2: Local Server (Recommended)**
```bash
# Sử dụng Python 3
python -m http.server 8000

# Hoặc sử dụng Node.js (npx)
npx http-server

# Hoặc sử dụng Live Server (nếu cài đặt)
live-server
```

Sau đó truy cập: `http://localhost:8000`

---

## 📁 Cấu Trúc Dự Án

```
Cat-zen-meme/
├── index.html          # HTML chính - Cấu trúc giao diện
├── app.js              # JavaScript - Logic tương tác
├── style.css           # CSS - Styling và animations
├── cat.png             # Ảnh mèo (asset chính)
└── README.md           # Tài liệu này
```

### Chi Tiết Các File

**index.html**
- Cấu trúc HTML5 semantic
- Meta tags tối ưu SEO
- Các thành phần UI chính: header, cat-section, stats-section, footer

**app.js**
- Event listeners cho interaction
- Audio API cho tạo tiếng cốc
- Logic tính công đức  
- Hiệu ứng animation (scale, shake, floating)
- Tương tác hover 3D với mèo

**style.css**
- CSS variables cho màu sắc
- Glassmorphism design
- Keyframe animations (fall, pulse, shake, floatUp)
- Responsive layout
- Google Fonts integration (Outfit, Playfair Display)

---

## 🎮 Cách Sử Dụng

1. **Mở ứng dụng** trong trình duyệt
2. **Gõ Mõ**: Click vào icon mõ ở dưới cùng
3. **Nghe Tiếng**: Web Audio API phát tiếng cốc
4. **Tích Công Đức**: Số công đức tăng lên 1
5. **Xem Lời Khấn**: Mỗi 5 lần gõ, lời khấn mới sẽ hiển thị
6. **Tương Tác Mèo**: Hover vào mèo để thấy hiệu ứng 3D

---

## 🛠️ Công Nghệ Sử Dụng

| Công Nghệ | Mục Đích |
|-----------|---------|
| **HTML5** | Cấu trúc semantic |
| **CSS3** | Styling, animations, responsive design |
| **JavaScript (ES6)** | Interactivity, Audio API |
| **SVG** | Icon mõ vector |
| **Web Audio API** | Tạo tiếng cốc dinamically |
| **CSS Animations** | Keyframe animations |
| **CSS Backdrop Filter** | Glassmorphism effect |
| **Google Fonts** | Typography |

---

## 🎨 Bảng Màu

| Tên | Hex | Sử Dụng |
|-----|-----|---------|
| Primary Gold | `#D4AF37` | Accent chính, text chính |
| Secondary Gold | `#FFD700` | Counter value |
| Deep Red | `#8B0000` | (Dự phòng) |
| Dark Background | `#0F0F1A` | Nền chính |
| Glass Background | `rgba(255, 255, 255, 0.05)` | Container |
| Text Main | `#F5F5F5` | Text chính |
| Text Dim | `#A0A0A0` | Text phụ |

---

## 📱 Responsive Design

- **Desktop (1024px+)**: Full experience với hover effects
- **Tablet (768px-1023px)**: Optimized layout, touch-friendly
- **Mobile (< 768px)**: Compact layout, hoàn toàn functional

---

## 🤝 Đóng Góp

Mọi đóng góp đều được hoan nghênh! Nếu bạn muốn:

1. **Thêm lời khấn mới**: Edit mảng `mantras` trong `app.js`
2. **Thay đổi màu sắc**: Sửa CSS variables trong `style.css`
3. **Thêm tính năng**: Fork repo, tạo feature branch, submit PR
4. **Báo lỗi**: Mở issue với chi tiết rõ ràng

---

## 📝 Hướng Dẫn Đóng Góp

```bash
# 1. Fork repository
# 2. Clone fork của bạn
git clone https://github.com/YOUR_USERNAME/Cat-zen-meme.git

# 3. Tạo feature branch
git checkout -b feature/your-feature-name

# 4. Commit changes
git commit -m "Add: mô tả tính năng"

# 5. Push to branch
git push origin feature/your-feature-name

# 6. Mở Pull Request
```

---

## 📄 Giấy Phép

MIT License - Tự do sử dụng, sửa đổi, và phân phối.

```
Copyright (c) 2026 PHAMTANPHUC-DESIGNER

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction...
```

---

## 🙏 Lời Cảm Ơn

- Cảm ơn mèo vô tri đã truyền cảm hứng 🐱
- Cảm ơn Phật giáo đã dạy chúng ta biết thư giãn 🙏
- Cảm ơn những ai gõ mõ cùng chúng tôi ✨

---

## 💬 Liên Hệ & Hỗ Trợ

- **GitHub Issues**: [Report bugs here](https://github.com/PHAMTANPHUC-DESIGNER/Cat-zen-meme/issues)
- **Discussions**: [Share ideas here](https://github.com/PHAMTANPHUC-DESIGNER/Cat-zen-meme/discussions)

---

## 🎯 Roadmap

- [ ] Thêm local storage để lưu công đức
- [ ] Thêm animations cho floating text
- [ ] Thêm background music
- [ ] Thêm difficulty levels
- [ ] Tạo version mobile app
- [ ] Thêm multiplayer mode
- [ ] Internationalization (i18n support)

---

<div align="center">

**Nắm chân lý, gõ mõ, tịnh tâm** ✨

*"Vô tri là hạnh phúc"* 🐱

---

⭐ Nếu yêu thích dự án này, hãy cho chúng tôi một ngôi sao! ⭐

</div>