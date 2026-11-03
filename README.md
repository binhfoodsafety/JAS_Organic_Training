# Tiêu chuẩn JAS Hữu cơ Nhật Bản (JAS Organic Training)

Khoá học trực tuyến chuyên sâu bằng tiếng Việt về **Tiêu chuẩn Nông nghiệp Hữu cơ Nhật Bản (Japanese Agricultural Standards - Organic JAS)**, do Bộ Nông Lâm Thủy sản Nhật Bản (MAFF) ban hành.

🌐 **Trang web học tập**: [https://binhfoodsafety.github.io/JAS_Organic_Training/](https://binhfoodsafety.github.io/JAS_Organic_Training/)

---

## 🎯 Mục tiêu khoá học
Trang bị đầy đủ kiến thức pháp lý và kỹ năng kiểm soát chất lượng thực tế cho đội ngũ:
- Cán bộ QA/QC, chuyên viên đánh giá chứng nhận, kiểm tra viên hữu cơ
- Người quản lý quy trình sản xuất (Production Process Manager - PPM)
- Người quản lý phân hạng (Grading Manager) tại các nông trại, nhà máy chế biến, đơn vị tái đóng gói và xuất nhập khẩu

---

## 📚 Lộ trình 8 Module Bài Giảng

| Module | Tên Module | Số Slide | Chuẩn tham chiếu |
|:---:|:---|:---:|:---|
| **01** | **Tổng quan Hệ thống Chứng nhận JAS Hữu cơ** | 13 | Đạo luật JAS, MAFF |
| **02** | **Canh tác Nông sản Thực vật Hữu cơ** | 15 | JAS 1605 (Plant Origin) |
| **03** | **Phân bón, Hoá chất Cho Phép & Quy Định Nấm Hữu Cơ** | 15 | JAS 1605 (Table 1, Table 2 & Nấm) |
| **04** | **Chế biến Thực phẩm Hữu cơ** | 16 | JAS 1606 (Processed Foods, ≥ 95%) |
| **05** | **Quy định Ghi nhãn & Sử dụng Dấu JAS Hữu cơ** | 15 | Thông báo số 24 (sửa đổi 2024) |
| **06** | **Tiêu chuẩn Kỹ thuật Cơ sở Chế biến, Đóng gói & Nhập khẩu** | 15 | Technical Criteria (PPM, Re-packer, Importer) |
| **07** | **Phương pháp Thanh tra & Thẩm tra Chứng nhận JAS** | 14 | Thông báo liên tịch số 28 (Inspection Methods) |
| **08** | **Cân đối Khối lượng, Truy xuất Nguồn gốc & Quản lý Tuân thủ** | 14 | Mass Balance Audit, Lưu hồ sơ 3 năm |
| **TỔNG** | **8 Module toàn diện** | **117** | **8 Tài liệu PDF quy chuẩn MAFF** |

---

## 🛠️ Tính năng nổi bật của Website Bài giảng

- 🎙️ **Thuyết minh âm thanh tiếng Việt**: Tích hợp công nghệ giọng đọc thông minh (Google Translate TTS), tự động co giãn slide và tự chuyển slide theo thời gian thực.
- 📱 **Hỗ trợ tối ưu trên di động (PWA)**: Có thể cài đặt trực tiếp lên màn hình chính điện thoại (iOS / Android) như một ứng dụng độc lập, học ngoại tuyến không cần kết nối mạng.
- 🧠 **Hệ thống Ôn tập Chuyên sâu**: 96 Flashcard ghi nhớ nhanh và 96 câu hỏi trắc nghiệm trích xuất trực tiếp từ tình huống slide, kèm giải thích vì sao đúng và liên kết mở nhanh về slide tương ứng.
- 🧮 **Công cụ Thực hành Tương tác**:
  - **Checklist Tự Đánh Giá Tuân Thủ**: 20 tiêu chí vàng cho Nông trại (JAS 1605) và Nhà máy chế biến (JAS 1606).
  - **Máy tính Tỷ lệ % Hữu cơ**: Tự động loại trừ nước và muối ăn theo công thức chuẩn của JAS 1606.
  - **Kiểm toán Cân đối Khối lượng (Mass Balance)**: Cảnh báo xuất thừa và phát hiện bất thường sản lượng.
- 🌓 **Chế độ Giao diện Sáng/Tối (Dark Mode)**: Tự động thích ứng môi trường hoặc chuyển đổi linh hoạt.

---

## 📂 Cấu trúc thư mục dự án

```text
JAS_Organic_Training/
├── index.html                  # Trang chủ cổng đào tạo & iframe trình chiếu
├── on-tap.html                 # Hệ thống Flashcard & Trắc nghiệm Quiz
├── cong-cu.html                # Checklist tự đánh giá & Máy tính Mass Balance
├── manifest.webmanifest        # Cấu hình PWA Web App
├── sw.js                       # Service Worker lưu cache ngoại tuyến
├── pwa.js                      # Trình đăng ký Service Worker & nhắc cài đặt
├── README.md                   # Tài liệu giới thiệu khoá học
├── icons/                      # Bộ favicon và icon PWA (32, 48, 180, 192, 512px)
├── slides/
│   ├── deck.css                # Giao diện slide 16:9 responsive
│   ├── deck.js                 # Điều hướng slide, tự co chữ, giọng đọc TTS
│   ├── art/                    # 8 Hình minh hoạ vector SVG độc quyền
│   ├── 01-tong-quan.html       # Module 1 (13 slide)
│   ├── 02-canh-tac.html        # Module 2 (15 slide)
│   ├── 03-vat-tu-nam.html      # Module 3 (15 slide)
│   ├── 04-che-bien.html        # Module 4 (16 slide)
│   ├── 05-ghi-nhan.html        # Module 5 (15 slide)
│   ├── 06-tieu-chuan-ky-thuat.html # Module 6 (15 slide)
│   ├── 07-thanh-tra.html       # Module 7 (14 slide)
│   └── 08-can-doi-khoi-luong.html # Module 8 (14 slide)
└── study/
    ├── data.js                 # 96 thẻ flashcard & 96 câu hỏi trắc nghiệm
    ├── say.js                  # Bảng phát âm từ viết tắt đồng bộ TTS
    ├── study.css               # Giao diện phòng ôn tập
    ├── study.js                # Xử lý lật thẻ, xáo thẻ, chấm điểm quiz
    ├── tools.css               # Giao diện bảng checklist & máy tính
    └── tools.js                # Logic tính điểm sẵn sàng & công thức cân đối
```

---

## 📜 Bản quyền & Tham chiếu
Khoá học được xây dựng dựa trên các tài liệu quy chuẩn công khai của Bộ Nông Lâm Thủy sản Nhật Bản (MAFF):
1. *Japanese Agricultural Standard JAS 1605 (Organic Products of Plant Origin)*
2. *Japanese Agricultural Standard JAS 1606 (Organic Processed Foods)*
3. *Grade Labeling Format and Labeling Methods (Notification No. 24 of MAFF, revised 2024)*
4. *Inspection Methods for Organic Product (Joint Public Notice No. 28 of MOF and MAFF)*
5. *Technical Criteria for Certifying PPM, Re-packer, and Importers of Organic Foods*
