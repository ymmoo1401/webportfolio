# 🎨 Creative Media Student Portfolio

[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Bootstrap 5](https://img.shields.io/badge/Bootstrap_5-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](https://getbootstrap.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg?style=for-the-badge)](LICENSE)

เว็บไซต์แฟ้มสะสมผลงานส่วนตัว (Portfolio Website) สำหรับนักศึกษาสาขาสื่อนฤมิต (Creative Media) ในรูปแบบ Modern, Creative, Premium, Minimal พร้อมสไตล์ Glassmorphism และ Gradients ในธีมสี **ฟ้า - เหลือง (Creative Blue & Electric Yellow)**

---

## ✨ คุณสมบัติเด่น (Features)

- **🎨 Modern Design & Glassmorphism:** ออกแบบด้วยความประณีต มีมิติความลึกด้วย Backdrop Blur และ Glowing Accent Gradients
- **🌓 Dark / Light Mode Switcher:** สลับโหมดการแสดงผลได้ลื่นไหล พร้อมบันทึกสถานะลงใน `localStorage`
- **📱 100% Fully Responsive:** รองรับการแสดงผลทุกหน้าจอ ไม่ว่าจะเป็นคอมพิวเตอร์ เดสก์ท็อป แท็บเล็ต หรือสมาร์ตโฟน
- **⚡ แยกไฟล์ตามเมนู (Multi-page Architecture):**
  - `index.html` - หน้าแรก (Home) พร้อม Hero Section และ Animated Badges
  - `about.html` - เกี่ยวกับเรา (About Me), ไทม์ไลน์การศึกษา และเป้าหมายการทำงาน
  - `skills.html` - รวมทักษะครบ 10 ด้าน พร้อมแถบวัดระดับความชำนาญ
  - `port.html` - แกลเลอรีผลงาน 6 ชิ้นงาน พร้อม Filter Tabs และ Interactive Detail Modal
  - `contact.html` - ช่องทางติดต่อครบครัน พร้อมฟอร์มส่งข้อความและ Copy Email
- **🚀 Vector SVG Placeholders:** มาพร้อมภาพกราฟิก SVG จำลองผลงานความละเอียดสูง โหลดเร็ว คมชัด ไม่ต้องพึ่งพาเน็ตเวิร์กภายนอก
- **✨ Smooth Scroll & Scroll Reveal:** มี Preloader และการเคลื่อนไหวที่นุ่มนวลด้วย IntersectionObserver API

---

## 📁 โครงสร้างโปรเจกต์ (Project Structure)

```text
├── index.html                 # หน้าแรก (Home)
├── about.html                 # เกี่ยวกับเรา (About Me)
├── skills.html                # ทักษะความเชี่ยวชาญ (Skills)
├── port.html                  # แกลเลอรีผลงาน (Portfolio)
├── contact.html               # ช่องทางติดต่อ (Contact)
├── home.html                  # Auto-redirect to index.html
├── portfolio.html             # Auto-redirect to port.html
├── index.php                  # ไฟล์ PHP รวมโมดูล (สำหรับผู้ใช้ XAMPP)
├── sections/                  # ชิ้นส่วน HTML ย่อยสำหรับ Include
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── skills.html
│   ├── portfolio.html
│   ├── contact.html
│   └── footer.html
└── assets/
    ├── css/                   # Stylesheets แยกตามส่วน
    │   ├── variables.css
    │   ├── main.css
    │   ├── navbar.css
    │   ├── hero.css
    │   ├── about.css
    │   ├── skills.css
    │   ├── portfolio.css
    │   ├── contact.css
    │   ├── footer.css
    │   └── style.css
    ├── js/                    # JavaScript Modules
    │   ├── theme.js
    │   ├── navbar.js
    │   ├── animations.js
    │   ├── portfolio.js
    │   └── main.js
    └── images/                # SVG Graphics & Icons
```

---

## 🌐 วิธีเปิดดูเว็บไซต์ออนไลน์ (GitHub Pages)

เมื่อ Push โค้ดขึ้น GitHub แล้ว คุณสามารถเปิดเป็นเว็บออนไลน์ฟรีผ่าน **GitHub Pages** ได้ทันที:

1. ไปที่คลังเก็บโค้ด (Repository) ของคุณบน GitHub
2. คลิกแถบ **Settings** > เมนูด้านซ้ายเลือก **Pages**
3. ที่หัวข้อ **Build and deployment**:
   - Source: เลือก `Deploy from a branch`
   - Branch: เลือก `main` และโฟลเดอร์ `/ (root)`
4. กด **Save**
5. รอประมาณ 1-2 นาที คุณจะได้รับลิงก์เว็บไซต์ เช่น:  
   `https://<your-username>.github.io/<repository-name>/`

---

## 💻 วิธีการเปิดใช้งานบนเครื่อง (Local Development)

### วิธีที่ 1: ดับเบิลคลิกไฟล์
- เปิดโฟลเดอร์โปรเจกต์ แล้วดับเบิลคลิกไฟล์ `index.html` เพื่อเปิดใช้งานบนบราวเซอร์ได้ทันที

### วิธีที่ 2: รันผ่าน XAMPP
- นำโฟลเดอร์ไว้ที่ `C:\xampp\htdocs\webportfolio`
- เปิดโปรแกรม XAMPP แล้วกด Start โมดูล **Apache**
- เปิดเบราว์เซอร์ไปที่: `http://localhost/webportfolio/`

---

## 📄 ลิขสิทธิ์ (License)

© 2026 My Portfolio | Designed by Nattakarn (Creative Media Student)
