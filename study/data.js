// Dữ liệu ôn tập: Flashcard và Quiz cho 8 module JAS Organic Training
var STUDY = [
  // ==========================================
  // MODULE 1: Tổng quan Hệ thống Chứng nhận JAS Hữu cơ
  // ==========================================
  {
    cards: [
      { q: "Cơ quan chính phủ nào quản lý hệ thống Tiêu chuẩn Nông nghiệp Nhật Bản (JAS)?", a: "Bộ Nông Lâm Thủy sản Nhật Bản (MAFF - Ministry of Agriculture, Forestry and Fisheries)." },
      { q: "Tại Nhật Bản, điều kiện bắt buộc để sản phẩm được dán nhãn 'Hữu cơ' (Organic / 有機) là gì?", a: "Bắt buộc phải đạt chứng nhận Organic JAS và dán tem con dấu JAS hợp lệ." },
      { q: "Ba nguyên tắc cốt lõi trong triết lý nông nghiệp hữu cơ của JAS là gì?", a: "Bảo tồn độ phì tự nhiên của đất, giảm thiểu ô nhiễm môi trường, và cấm hoàn toàn GMO." },
      { q: "Tiêu chuẩn JAS 1605 quy định cho nhóm sản phẩm nào?", a: "Nông sản có nguồn gốc thực vật (rau củ, ngũ cốc, chè, cà phê, nấm ăn...)." },
      { q: "Tiêu chuẩn JAS 1606 quy định cho nhóm sản phẩm nào?", a: "Thực phẩm chế biến hữu cơ (đồ uống, đồ hộp, bánh kẹo, gia vị...)." },
      { q: "Bốn chủ thể được cấp chứng nhận trong hệ thống JAS là những ai?", a: "Nông trại (Sản xuất sơ cấp), Nhà chế biến (PPM), Đơn vị tái đóng gói (Re-packer), và Nhà nhập khẩu (Importer)." },
      { q: "'Grading' (Phân hạng) trong hệ thống chứng nhận JAS có nghĩa là gì?", a: "Hành động kiểm tra hồ sơ, đối chiếu tiêu chuẩn để xác nhận lô hàng tuân thủ trước khi cho phép dán tem JAS." },
      { q: "Grading Manager (Người quản lý phân hạng) có quyền hạn độc lập như thế nào?", a: "Có quyền từ chối ký duyệt phân hạng và không cấp tem JAS nếu phát hiện mẻ hàng không đạt chuẩn, bất chấp áp lực giao hàng." },
      { q: "Dấu chứng nhận JAS Hữu cơ bao gồm những thành tố bắt buộc nào?", a: "Khung tròn kép, biểu tượng chiếc lá mầm + chữ JAS, và tên của Tổ chức Chứng nhận (CB) in bên dưới." },
      { q: "Nông sản hữu cơ từ Việt Nam muốn dán tem JAS xuất sang Nhật thì phải làm gì?", a: "Bắt buộc phải được Tổ chức Chứng nhận được MAFF uỷ quyền đánh giá trực tiếp tại hiện trường ở Việt Nam." },
      { q: "Hậu quả pháp lý khi một cơ sở cố tình dán tem JAS khống hoặc dùng hoá chất cấm là gì?", a: "Bị thu hồi chứng chỉ ngay lập tức, thu hồi tiêu hủy hàng hoá, công khai danh tính trên cổng MAFF và bị phạt nặng." },
      { q: "Ai là người trực tiếp dán tem chứng nhận JAS lên sản phẩm tại doanh nghiệp?", a: "Chính doanh nghiệp tự dán tem cho từng lô hàng sau khi Người quản lý phân hạng ký duyệt biên bản phân hạng." }
    ],
    quiz: [
      {
        q: "Cơ quan nào của chính phủ Nhật Bản ban hành và giám sát hệ thống tiêu chuẩn Organic JAS?",
        c: "Bộ Nông Lâm Thủy sản Nhật Bản (MAFF)",
        w: ["Bộ Y tế, Lao động và Phúc lợi Nhật Bản (MHLW)", "Cơ quan Tiêu chuẩn Công nghiệp Nhật Bản (JIS)", "Tổ chức Xúc tiến Thương mại Nhật Bản (JETRO)"],
        why: "MAFF (Ministry of Agriculture, Forestry and Fisheries) là cơ quan trực tiếp ban hành và quản lý đạo luật JAS.",
        s: 2
      },
      {
        q: "Một nhà nhập khẩu tại Tokyo mua sản phẩm hữu cơ từ Việt Nam. Sản phẩm đó có bắt buộc phải có chứng nhận JAS để được dán nhãn 'Organic' không?",
        c: "Bắt buộc, không có ngoại lệ bán lẻ hay quy mô nhỏ nếu muốn ghi chữ hữu cơ tại Nhật",
        w: ["Không bắt buộc nếu đã có chứng nhận hữu cơ Việt Nam (TCVN)", "Không bắt buộc nếu sản lượng xuất khẩu dưới 1 tấn", "Chỉ cần cam kết chất lượng của nhà xuất khẩu bằng văn bản"],
        why: "Luật pháp Nhật Bản quy định nghiêm ngặt: Mọi sản phẩm ghi nhãn hữu cơ lưu thông tại Nhật đều bắt buộc phải có chứng nhận JAS.",
        s: 2
      },
      {
        q: "Tiêu chuẩn nào sau đây của JAS áp dụng cho nhóm thực phẩm chế biến hữu cơ?",
        c: "JAS 1606",
        w: ["JAS 1605", "JAS 1607", "JAS 1608"],
        why: "JAS 1605 áp dụng cho thực vật, JAS 1606 áp dụng cho thực phẩm chế biến, 1607 cho thức ăn chăn nuôi, 1608 cho động vật.",
        s: 4
      },
      {
        q: "Điểm độc đáo nhất trong cơ chế vận hành chứng nhận của hệ thống JAS là gì?",
        c: "Doanh nghiệp tự phân hạng từng lô hàng và tự dán tem JAS thông qua Grading Manager",
        w: ["Mỗi lô hàng đều phải do chuyên gia của MAFF bay sang tận nơi dán tem", "Tổ chức chứng nhận cử người túc trực 24/7 tại nhà máy để dán tem", "Chỉ hải quan tại cảng Nhật Bản mới được phép dán tem JAS"],
        why: "JAS trao quyền tự chủ cho doanh nghiệp: Sau khi được chứng nhận, chính Grading Manager của doanh nghiệp sẽ tự kiểm tra và cho phép dán tem.",
        s: 5
      },
      {
        q: "Người quản lý phân hạng (Grading Manager) trong một doanh nghiệp JAS có vai trò nào sau đây?",
        c: "Kiểm tra sự tuân thủ của hồ sơ lô hàng và ký duyệt trước khi dán tem JAS",
        w: ["Trực tiếp lái máy trộn và vận hành dây chuyền sản xuất tại xưởng", "Phụ trách đàm phán hợp đồng thương mại và tìm kiếm khách hàng mua hàng", "Trực tiếp sửa chữa bảo dưỡng các thiết bị máy móc cơ điện trong nhà máy"],
        why: "Grading Manager là cổng gác kiểm soát chất lượng độc lập, chịu trách nhiệm phê duyệt phân hạng cho từng lô sản phẩm.",
        s: 6
      },
      {
        q: "Thông tin nào sau đây BẮT BUỘC phải in kèm ngay bên dưới biểu trưng logo JAS Hữu cơ?",
        c: "Tên của Tổ chức Chứng nhận (CB) đã đánh giá cơ sở",
        w: ["Số chứng minh nhân dân của người đại diện pháp luật", "Hạn sử dụng chi tiết của sản phẩm", "Địa chỉ email chăm sóc khách hàng của nhà máy"],
        why: "Theo quy định, con dấu JAS chuẩn bắt buộc phải có tên của Tổ chức Chứng nhận in bên dưới hoặc bên cạnh biểu trưng.",
        s: 8
      },
      {
        q: "Doanh nghiệp Việt Nam xuất khẩu trà hữu cơ sang Nhật Bản cần chứng nhận JAS theo hình thức nào?",
        c: "Được Tổ chức Chứng nhận được MAFF uỷ quyền đánh giá trực tiếp tại cơ sở Việt Nam",
        w: ["Chỉ cần xin xác nhận tương đương từ Bộ Nông nghiệp Việt Nam", "Dùng chứng nhận VietGAP để tự động quy đổi sang JAS", "Gửi mẫu trà sang Nhật Bản kiểm nghiệm đạt là được tự in tem"],
        why: "Việt Nam chưa có hiệp định công nhận tương đương hữu cơ với Nhật, nên doanh nghiệp phải được tổ chức CB được MAFF công nhận đánh giá trực tiếp.",
        s: 10
      },
      {
        q: "Trụ cột nào sau đây KHÔNG PHẢI là yêu cầu bắt buộc để một cơ sở đạt chứng nhận JAS?",
        c: "Doanh nghiệp phải có vốn điều lệ tối thiểu 10 triệu USD",
        w: ["Hạ tầng cơ sở vật chất ngăn ngừa nguy cơ ô nhiễm chéo", "Hệ thống quy trình chuẩn (SOP) bằng văn bản", "Hồ sơ truy xuất nguồn gốc và cân đối khối lượng minh bạch"],
        why: "JAS đánh giá năng lực kiểm soát kỹ thuật, hệ thống SOP và tính toàn vẹn hữu cơ chứ không quy định vốn điều lệ.",
        s: 9
      },
      {
        q: "Nếu ban giám đốc yêu cầu dán tem JAS để kịp tiến độ giao hàng dù mẻ chè chưa có kết quả kiểm tra vệ sinh, Grading Manager nên làm gì?",
        c: "Kiên quyết từ chối ký duyệt phân hạng và không cấp tem JAS cho lô hàng đó",
        w: ["Đồng ý dán tem trước rồi bổ sung hồ sơ kiểm tra vệ sinh sau", "Ký duyệt tạm thời và giao trách nhiệm cho phòng kinh doanh tự chịu", "Cho phép xuất xưởng nhưng không dán tem phụ tiếng Nhật"],
        why: "Grading Manager có quyền phủ quyết độc lập nhằm bảo đảm tính toàn vẹn của tiêu chuẩn pháp lý JAS.",
        s: 6
      },
      {
        q: "Hệ thống JAS phân loại các đơn vị được chứng nhận thành mấy nhóm đối tượng chính?",
        c: "4 nhóm (Nông trại, Nhà chế biến, Đơn vị tái đóng gói, Nhà nhập khẩu)",
        w: ["2 nhóm (Nông dân và Siêu thị bán lẻ)", "3 nhóm (Trồng trọt, Chăn nuôi, Thủy sản)", "6 nhóm (Nhà máy, Hợp tác xã, Vận tải, Cảng biển, Kho bãi, Bán buôn)"],
        why: "JAS phân thành 4 nhóm đơn vị vận hành: Nông trại sơ cấp, Cơ sở chế biến (PPM), Đơn vị tái đóng gói (Re-packer) và Nhà nhập khẩu (Importer).",
        s: 7
      },
      {
        q: "Một lô hàng xuất khẩu sang Nhật bị cơ quan thẩm quyền phát hiện có tồn dư thuốc trừ sâu cấm. Biện pháp xử lý nào sẽ xảy ra?",
        c: "Buộc thu hồi tiêu hủy toàn bộ lô hàng và có thể bị đình chỉ chứng chỉ JAS",
        w: ["Chỉ bị phạt cảnh cáo bằng miệng và cho phép bán hạ giá", "Được phép pha loãng với các lô hàng khác để giảm nồng độ thuốc", "Được chuyển sang bán dưới dạng hàng thực phẩm chức năng cao cấp"],
        why: "Tồn dư thuốc cấm là vi phạm pháp luật nghiêm trọng, dẫn đến thu hồi hàng hoá và tước bỏ chứng chỉ hữu cơ.",
        s: 12
      },
      {
        q: "Thời hạn lưu trữ hồ sơ chứng nhận JAS bắt buộc tối thiểu là bao nhiêu năm?",
        c: "Tối thiểu 3 năm",
        w: ["Tối thiểu 6 tháng", "Tối thiểu 1 năm", "Tối thiểu 10 năm"],
        why: "JAS quy định toàn bộ hồ sơ truy xuất, nhật ký và chứng từ liên quan phải được lưu trữ ít nhất 3 năm.",
        s: 9
      }
    ]
  },

  // ==========================================
  // MODULE 2: Canh tác Nông sản Thực vật Hữu cơ (JAS 1605)
  // ==========================================
  {
    cards: [
      { q: "Thời gian chuyển đổi bắt buộc đối với cây trồng hàng năm (Annual crops) theo JAS 1605 là bao lâu?", a: "Tối thiểu 2 năm trước khi gieo hạt hoặc trồng cây giống vụ hữu cơ đầu tiên." },
      { q: "Thời gian chuyển đổi bắt buộc đối với cây trồng lâu năm (Perennial crops) theo JAS 1605 là bao lâu?", a: "Tối thiểu 3 năm trước khi bắt đầu thu hoạch lứa nông sản hữu cơ đầu tiên." },
      { q: "Vùng đệm (Buffer zone) trong trang trại hữu cơ có chức năng gì?", a: "Cách ly và bảo vệ ruộng hữu cơ khỏi nguy cơ trôi dạt thuốc BVTV và phân bón hoá học từ các ruộng xung quanh." },
      { q: "Nông sản thu hoạch trên dải đất vùng đệm có được dán nhãn JAS Hữu cơ không?", a: "Không được phép dán nhãn hữu cơ; bắt buộc phải thu hoạch riêng và bán dưới dạng nông sản thông thường." },
      { q: "Yêu cầu ưu tiên hàng đầu đối với hạt giống và cây con trong JAS 1605 là gì?", a: "Phải thu hoạch từ cây mẹ đã được chứng nhận hữu cơ và tuyệt đối không biến đổi gen (Non-GMO)." },
      { q: "Khi không có sẵn giống hữu cơ, trang trại được dùng giống quy ước với điều kiện gì?", a: "Hạt giống thông thường chưa qua xử lý bằng thuốc trừ sâu/hoá chất và cam kết Non-GMO." },
      { q: "Các phương pháp kiểm soát cỏ dại nào được phép áp dụng trong canh tác hữu cơ?", a: "Làm cỏ bằng tay, máy xới cơ học, che phủ rơm rạ/màng phủ hữu cơ và điều tiết mực nước ruộng." },
      { q: "Hoạt chất nào sau đây bị CẤM TUYỆT ĐỐI trong kiểm soát cỏ dại theo JAS?", a: "Tất cả các loại thuốc diệt cỏ hoá học tổng hợp (Herbicides)." },
      { q: "Nguyên tắc phòng trừ sâu bệnh tự nhiên theo JAS tuân theo thứ tự nào?", a: "Ưu tiên canh tác và bảo vệ thiên địch, kế đến dùng bẫy bả vật lý, cuối cùng mới dùng chất trong Bảng 2." },
      { q: "Giá thể trồng nấm ăn hữu cơ theo JAS 1605 phải đáp ứng điều kiện gì?", a: "Mùn cưa/khúc gỗ tự nhiên không dính hoá chất keo dán; cám bổ sung phải có chứng chỉ hữu cơ." },
      { q: "Phương pháp khử trùng giá thể trồng nấm nào được phép sử dụng?", a: "Thanh trùng bằng nhiệt hơi nước lò hấp áp suất cao; cấm hoá chất xông trùng." },
      { q: "Nguyên tắc quản lý dụng cụ thu hoạch và thùng chứa nông sản tại nông trại là gì?", a: "Dụng cụ chuyên dụng, vệ sinh sạch sẽ, dán nhãn mã số lô thửa và không tái sử dụng bao đựng phân bón cũ." }
    ],
    quiz: [
      {
        q: "Một trang trại trồng ngô (cây hàng năm) bắt đầu ngừng dùng hoá chất từ ngày 01/01/2024. Vụ ngô hữu cơ đầu tiên được phép gieo hạt sớm nhất vào thời điểm nào?",
        c: "Sau ngày 01/01/2026 (đủ ít nhất 2 năm chuyển đổi)",
        w: ["Sau ngày 01/07/2024 (sau 6 tháng)", "Sau ngày 01/01/2025 (sau 1 năm)", "Sau ngày 01/01/2027 (sau 3 năm)"],
        why: "Theo JAS 1605, cây hàng năm yêu cầu thời gian chuyển đổi tối thiểu 2 năm trước khi gieo trồng vụ đầu.",
        s: 4
      },
      {
        q: "Đối với vườn cam hoặc chè (cây lâu năm), thời gian chuyển đổi tối thiểu trước đợt thu hoạch đầu tiên là bao lâu?",
        c: "3 năm kể từ ngày ngừng dùng hoá chất cấm",
        w: ["1 năm kể từ ngày ngừng dùng hoá chất cấm", "2 năm kể từ ngày ngừng dùng hoá chất cấm", "5 năm kể từ ngày ngừng dùng hoá chất cấm"],
        why: "Cây lâu năm yêu cầu thời gian chuyển đổi tối thiểu 3 năm trước khi bắt đầu thu hoạch lứa hữu cơ đầu tiên.",
        s: 4
      },
      {
        q: "Sản phẩm thu hoạch trong giai đoạn chuyển đổi (Conversion period) được phép dán nhãn như thế nào?",
        c: "Chưa được dán dấu Organic JAS mà chỉ được coi là sản phẩm đang chuyển đổi",
        w: ["Được dán dấu Organic JAS như bình thường nếu đất kiểm nghiệm không có thuốc sâu", "Được dán dấu Organic JAS loại 2 màu vàng", "Được bán giá cao hơn sản phẩm hữu cơ chính thức"],
        why: "Giai đoạn chuyển đổi chưa đạt chuẩn hữu cơ hoàn toàn nên tuyệt đối không được dán biểu trưng Organic JAS.",
        s: 4
      },
      {
        q: "Biện pháp nào sau đây là giải pháp hợp lệ để thiết lập vùng đệm cách ly trang trại hữu cơ?",
        c: "Trồng hàng rào cây xanh chắn gió hoặc tạo dải phân cách đất đủ rộng",
        w: ["Phun thuốc diệt cỏ thật đậm xung quanh bờ ranh để diệt sạch mầm bệnh", "Đào hào rác thải hoá chất bao quanh toàn bộ khu đất", "Chỉ cần cắm một biển báo nhỏ bằng gỗ ở góc ruộng"],
        why: "Vùng đệm cần có hàng rào cây xanh hoặc khoảng cách đủ rộng để ngăn chặn bụi thuốc trừ sâu trôi dạt cơ học.",
        s: 5
      },
      {
        q: "Trang trại thu hoạch 500 kg rau từ dải đất thuộc vùng đệm. Số rau này được xử lý như thế nào?",
        c: "Thu hoạch riêng và bán dưới dạng nông sản thông thường, không dán nhãn JAS",
        w: ["Được trộn chung với rau hữu cơ trong ruộng để đóng gói xuất khẩu", "Được dán tem Organic JAS nếu đem rửa qua nước ozon", "Được dán tem hữu cơ kèm chữ 'sản phẩm vùng đệm'"],
        why: "Nông sản vùng đệm có nguy cơ nhiễm thuốc trừ sâu từ ngoài trôi vào nên bắt buộc phải bán dưới dạng nông sản thường.",
        s: 5
      },
      {
        q: "Trường hợp nào sau đây được phép sử dụng hạt giống cây trồng quy ước (thông thường)?",
        c: "Khi chứng minh giống hữu cơ không sẵn có và giống thường chưa xử lý hoá chất",
        w: ["Bất cứ khi nào vì giống thông thường có giá thành rẻ hơn giống hữu cơ", "Khi giống đó là giống biến đổi gen cho năng suất gấp đôi giống cũ", "Khi giống đã được tẩm sẵn thuốc trừ nấm màu đỏ để chống mọt"],
        why: "JAS cho phép dùng giống thường khi thiếu nguồn giống hữu cơ, nhưng bắt buộc giống đó chưa xử lý hoá chất và là Non-GMO.",
        s: 6
      },
      {
        q: "Phương pháp kiểm soát cỏ dại nào sau đây BỊ CẤM TUYỆT ĐỐI trong tiêu chuẩn JAS 1605?",
        c: "Phun thuốc trừ cỏ sinh học tổng hợp hoặc thuốc diệt cỏ hoá học",
        w: ["Cắt cỏ bằng máy xới cỏ cơ học đẩy tay", "Dùng màng phủ nông nghiệp màu đen để che nắng", "Nhổ cỏ thủ công bằng tay kết hợp cuốc xới"],
        why: "Thuốc diệt cỏ hoá học là ranh giới cấm tuyệt đối trong toàn bộ hệ thống tiêu chuẩn nông nghiệp hữu cơ JAS.",
        s: 8
      },
      {
        q: "Cách thức nào sau đây giúp duy trì và nâng cao độ phì nhiêu của đất tự nhiên theo JAS?",
        c: "Luân canh cây họ đậu và cày vùi tàn dư thực vật ủ hoai mục",
        w: ["Bón bổ sung phân đạm Urê và NPK tổng hợp tan nhanh định kỳ", "Tưới bổ sung chất kích thích sinh trưởng hoá học liều thấp", "Đốt sạch toàn bộ rơm rạ trên mặt ruộng sau mỗi vụ gieo trồng"],
        why: "Độ phì nhiêu được nuôi dưỡng tự nhiên thông qua luân canh họ đậu, phân xanh và phân ủ hữu cơ.",
        s: 7
      },
      {
        q: "Trong sản xuất nấm ăn hữu cơ, mùn cưa làm giá thể phải đáp ứng tiêu chí nào?",
        c: "Từ gỗ tự nhiên sạch, không chứa keo dán công nghiệp, sơn hoặc hoá chất bảo quản",
        w: ["Lấy từ các xưởng mộc làm ván ép dăm gỗ dán keo công nghiệp", "Phải được xông trùng bằng khí hoá chất diệt mọt trước khi đóng bịch", "Được lấy từ gỗ ngâm tẩm tà vẹt đường ray xe lửa cũ"],
        why: "Nấm hấp thụ trực tiếp dinh dưỡng từ gỗ, do đó mùn cưa phải tuyệt đối sạch, không dính keo dán công nghiệp.",
        s: 10
      },
      {
        q: "Bao bì nào sau đây ĐƯỢC PHÉP dùng để chứa đựng nông sản hữu cơ sau khi thu hoạch tại ruộng?",
        c: "Thùng nhựa chuyên dụng sạch sẽ có dán nhãn nhận diện mã số lô thu hoạch",
        w: ["Bao bì cũ từng dùng để đựng phân bón hoá học NPK được giặt sơ", "Vỏ bao thuốc bảo vệ thực vật đã súc rửa sạch bằng xà phòng", "Túi nilon rác màu đen không rõ nguồn gốc xuất xứ tái chế"],
        why: "Chỉ được dùng thùng hộp sạch chuyên dụng; cấm tái sử dụng bao bì phân bón thuốc sâu cũ vì nguy cơ nhiễm tồn dư.",
        s: 12
      },
      {
        q: "Một nông hộ không ghi chép nhật ký bón phân trong 3 tháng với lý do 'nhớ trong đầu'. Thanh tra viên JAS sẽ xử lý như thế nào?",
        c: "Xem đây là điểm không phù hợp nặng vì không có bằng chứng chứng minh tuân thủ",
        w: ["Bỏ qua vì nông dân nhớ rõ ngày bón và kể lại vanh vách", "Chỉ cần nông dân ký cam kết bằng miệng là được chấp nhận", "Cho phép nông dân tự viết lại toàn bộ sổ nhật ký hồi tố ngay tại chỗ"],
        why: "Nguyên tắc cốt lõi của đánh giá chứng nhận là 'không có hồ sơ ghi chép đồng nghĩa với việc không thực hiện'.",
        s: 13
      },
      {
        q: "Chất nào sau đây được phép dùng để khử trùng giá thể nuôi cấy nấm hữu cơ?",
        c: "Hơi nước nóng áp suất cao từ lò hơi",
        w: ["Khí độc xông trùng Methyl Bromide", "Dung dịch formol (Formaldehyde) công nghiệp", "Thuốc trừ nấm hoá học gốc carbendazim"],
        why: "JAS chỉ cho phép khử trùng giá thể nấm bằng phương pháp vật lý dùng nhiệt và hơi nước nóng.",
        s: 12
      }
    ]
  },

  // ==========================================
  // MODULE 3: Phân bón, Hoá chất Cho Phép & Quy Định Nấm Hữu Cơ
  // ==========================================
  {
    cards: [
      { q: "Nguyên tắc quản lý vật tư trong JAS theo cơ chế nào?", a: "Cơ chế danh mục dương (Positive list): Chỉ được dùng những chất được ghi tên rõ ràng trong Bảng 1 và Bảng 2." },
      { q: "Nguồn phân hữu cơ nào bị CẤM TUYỆT ĐỐI trong Bảng 1 của JAS 1605?", a: "Phân bùn cống rãnh đô thị, phân người tươi chưa xử lý và chất thải từ trại chăn nuôi công nghiệp lạm dụng kháng sinh." },
      { q: "Điều kiện bắt buộc trước khi bón phân chuồng gia súc vào ruộng hữu cơ là gì?", a: "Phải trải qua quá trình ủ nhiệt hiếu khí (composting) hoai mục triệt để để diệt mầm bệnh và hạt cỏ." },
      { q: "Khoáng chất tự nhiên nào trong Bảng 1 thường dùng để cải tạo đất chua?", a: "Vôi nông nghiệp tự nhiên (Calcium carbonate) và Dolomite nghiền cơ học từ mỏ khoáng." },
      { q: "Thuốc trừ sâu sinh học vi khuẩn nào trong Bảng 2 chuyên trị sâu tơ, sâu ăn lá?", a: "Bacillus thuringiensis (vi khuẩn Bt) chủng tự nhiên không biến đổi gen." },
      { q: "Nấm đối kháng tự nhiên nào được dùng để kiểm soát nấm bệnh vùng rễ cây trồng?", a: "Nấm Trichoderma tự nhiên." },
      { q: "Phân biệt Pyrethrin tự nhiên và Pyrethroid tổng hợp trong kiểm soát dịch hại?", a: "Pyrethrin tự nhiên chiết xuất từ hoa cúc được phép dùng; Pyrethroid nhân tạo tổng hợp bị CẤM." },
      { q: "Hai hợp chất vô cơ truyền thống nào được phép dùng trong Bảng 2 của JAS 1605?", a: "Hợp chất Đồng (Booc-đô, Đồng sunfat) và Hợp chất Lưu huỳnh (Sulfur, vôi lưu huỳnh)." },
      { q: "Lưu ý quan trọng nhất khi sử dụng thuốc gốc Đồng (Copper) trong canh tác hữu cơ là gì?", a: "Phải giám sát và giới hạn tổng lượng đồng nguyên chất đưa vào đất để tránh ngộ độc tích lũy kim loại nặng." },
      { q: "Bẫy Pheromone được phép sử dụng trong điều kiện nào theo Bảng 2?", a: "Chỉ được đặt trong dụng cụ bẫy kín để dẫn dụ côn trùng; tuyệt đối không phun xịt trực tiếp lên cây." },
      { q: "Yêu cầu đối với cám gạo, bột ngô bổ sung dinh dưỡng vào bịch phôi nấm ăn là gì?", a: "Bắt buộc phải có giấy chứng nhận hữu cơ (Organic certified) hoặc cam kết Non-GMO sạch hoá chất." },
      { q: "Khi muốn đưa một loại phân bón thương mại mới vào trang trại, bước an toàn nhất là gì?", a: "Gửi hồ sơ thành phần và phiếu an toàn (SDS) xin ý kiến chấp thuận bằng văn bản của Tổ chức Chứng nhận (CB) trước khi mua." }
    ],
    quiz: [
      {
        q: "Theo Bảng 1 của tiêu chuẩn JAS 1605, loại phân bón nào sau đây BỊ CẤM sử dụng?",
        c: "Phân bùn cống rãnh nạo vét từ đô thị (Sewage sludge)",
        w: ["Phân bò ủ hoai mục có bổ sung rơm rạ", "Bột đá vôi nghiền mịn từ mỏ khoáng tự nhiên", "Cây điền thanh và bèo hoa dâu cày vùi làm phân xanh"],
        why: "Bùn cống rãnh đô thị có nguy cơ tích tụ kim loại nặng độc hại và hoá chất công nghiệp nên bị cấm triệt để.",
        s: 4
      },
      {
        q: "Khoáng chất tự nhiên nào sau đây được phép dùng để bổ sung Lân tự nhiên cho đất trong Bảng 1?",
        c: "Bột đá photphat tự nhiên nghiền mịn (Rock phosphate)",
        w: ["Phân bón Lân nung chảy hoá học qua xử lý axit đậm đặc", "Phân đạm Urê tổng hợp", "Axit photphoric công nghiệp tinh khiết"],
        why: "Bột đá photphat tự nhiên chỉ qua nghiền cơ học là nguồn cung cấp lân khoáng hợp lệ trong Bảng 1.",
        s: 5
      },
      {
        q: "Chế phẩm sinh học nào sau đây trong Bảng 2 chuyên dùng để diệt trừ ấu trùng sâu tơ, sâu khoang?",
        c: "Chế phẩm vi khuẩn Bacillus thuringiensis (Bt)",
        w: ["Thuốc trừ sâu hoá học nhóm lân hữu cơ", "Thuốc bảo vệ thực vật gốc clo hữu cơ", "Thuốc diệt cỏ chứa hoạt chất Glyphosate"],
        why: "Bacillus thuringiensis (Bt) là chế phẩm sinh học tự nhiên diệt sâu ăn lá được cho phép trong Bảng 2.",
        s: 6
      },
      {
        q: "Chất chiết xuất từ thực vật nào sau đây ĐƯỢC PHÉP dùng để xua đuổi côn trùng chích hút trong Bảng 2?",
        c: "Dầu Neem tự nhiên (Neem oil)",
        w: ["Thuốc diệt muỗi tổng hợp Cypermethrin", "Thuốc lưu dẫn hoá học Imidacloprid", "Dầu nhờn động cơ xe máy thải"],
        why: "Dầu hạt Neem tự nhiên là hoạt chất thảo mộc an toàn nằm trong danh mục Bảng 2 của JAS 1605.",
        s: 7
      },
      {
        q: "Khi sử dụng thuốc trừ bệnh gốc Đồng (Booc-đô / Copper) trong vườn cây hữu cơ, người quản lý cần lưu ý điều gì?",
        c: "Kiểm soát tổng lượng đồng nguyên chất đưa vào đất để tránh tích tụ kim loại nặng",
        w: ["Càng phun nhiều nồng độ càng đậm đặc thì cây càng mau lớn", "Có thể trộn chung thoải mái với thuốc trừ cỏ hoá học", "Phun hàng ngày vào buổi trưa nắng gắt nhất"],
        why: "Đồng là kim loại nặng không phân hủy sinh học, do đó phải kiểm soát liều lượng nghiêm ngặt để không làm ngộ độc đất.",
        s: 8
      },
      {
        q: "Hợp chất Lưu huỳnh (Sulfur) trong Bảng 2 KHÔNG NÊN phun vào thời điểm nào để tránh gây cháy lá non?",
        c: "Khi nhiệt độ môi trường ngoài trời vượt quá 32°C",
        w: ["Vào buổi sáng sớm trời mát mẻ", "Vào mùa xuân khi cây đâm chồi", "Vào buổi chiều khi tắt nắng"],
        why: "Phun lưu huỳnh ở nhiệt độ cao trên 32°C rất dễ gây hiện tượng cháy lá non và rụng hoa non.",
        s: 8
      },
      {
        q: "Bẫy dẫn dụ sinh học Pheromone được phép sử dụng theo hình thức nào sau đây?",
        c: "Chỉ đặt trong lồng bẫy kín để bắt côn trùng trưởng thành, không phun lên cây",
        w: ["Hoà tan vào nước rồi phun xịt ướt đẫm toàn bộ tán lá cây trồng", "Pha vào nước tưới nhỏ giọt ngấm trực tiếp vào rễ cây", "Trộn lẫn với phân bón rải đều trên mặt luống đất"],
        why: "Pheromone chỉ được đặt trong bẫy để dụ bắt côn trùng, tuyệt đối không phun xịt trực tiếp lên bề mặt nông sản.",
        s: 9
      },
      {
        q: "Trong sản xuất nấm ăn hữu cơ, nguồn cám bổ sung dinh dưỡng vào mùn cưa bắt buộc phải đạt tiêu chuẩn nào?",
        c: "Phải có chứng nhận hữu cơ hoặc có chứng từ cam kết Non-GMO sạch hoá chất",
        w: ["Cám công nghiệp chứa chất kích thích tăng trọng gia súc", "Cám đã mốc hỏng được tẩm hoá chất chống thối", "Có thể dùng bất kỳ loại cám nào không cần quan tâm nguồn gốc"],
        why: "Dinh dưỡng từ cám chuyển hoá trực tiếp vào nấm, nên cám bổ sung phải có chứng chỉ hữu cơ đạt chuẩn.",
        s: 11
      },
      {
        q: "Cồn thực phẩm (Ethanol sinh học) được phép sử dụng vào mục đích nào trong vườn cây hữu cơ?",
        c: "Sát khuẩn dao kéo cắt cành, dụng cụ chiết ghép và khay ươm cây giống",
        w: ["Tưới đẫm gốc cây để kích thích rễ phát triển nhanh hơn", "Phun sương lên toàn bộ vườn để diệt sạch mọi loại sâu bọ", "Pha loãng bón thay thế phân đạm"],
        why: "Cồn sinh học dùng để tiệt trùng bề mặt dụng cụ thao tác cắt tỉa, ngăn ngừa lây lan nấm bệnh giữa các cây.",
        s: 9
      },
      {
        q: "Một nhân viên kỹ thuật muốn mua phân bón hữu cơ thương mại đóng bao ngoài thị trường về dùng. Bước đầu tiên cần làm là gì?",
        c: "Kiểm tra kỹ bảng thành phần, SDS và trình Tổ chức CB phê duyệt trước khi mua",
        w: ["Cứ mua về bón thử nghiệm, nếu thấy cây xanh tốt thì tiếp tục dùng", "Chỉ cần bao bì có in chữ 'Hữu cơ 100%' bằng tiếng Việt là đủ", "Hỏi ý kiến của người bán hàng tại tiệm thuốc bảo vệ thực vật"],
        why: "Phân bón thương mại có thể bị pha lén đạm hoá học; luôn cần kiểm tra SDS và xin văn bản chấp thuận của CB trước.",
        s: 13
      },
      {
        q: "Biên bản theo dõi sử dụng vật tư nông nghiệp bắt buộc phải có thông tin nào sau đây?",
        c: "Ngày dùng, mã số thửa ruộng, tên hoạt chất, liều lượng và lý do áp dụng",
        w: ["Giá tiền mua vật tư và mức chiết khấu của đại lý bán thuốc", "Tên tài xế xe tải chở hàng và biển số xe", "Màu sắc của thùng đựng phân bón"],
        why: "Hồ sơ sử dụng vật tư phục vụ việc kiểm tra chéo kỹ thuật: ngày dùng, vị trí lô, tên hoạt chất, liều lượng và mục đích.",
        s: 14
      },
      {
        q: "Trường hợp nào sau đây được coi là vi phạm nghiêm trọng về vật tư trong canh tác JAS?",
        c: "Sử dụng phân chuồng tươi bón trực tiếp và cất giấu thuốc diệt cỏ trong kho",
        w: ["Ủ phân chuồng với rơm rạ trong 60 ngày đạt nhiệt độ 65°C", "Sử dụng bột đá vôi tự nhiên để bón khử chua đất", "Sử dụng chế phẩm nấm Trichoderma ủ gốc cây"],
        why: "Phân tươi chứa vi khuẩn gây bệnh và thuốc diệt cỏ là chất cấm tuyệt đối, cấu thành vi phạm nghiêm trọng.",
        s: 4
      }
    ]
  },

  // ==========================================
  // MODULE 4: Chế biến Thực phẩm Hữu cơ (JAS 1606)
  // ==========================================
  {
    cards: [
      { q: "Tỷ lệ thành phần nguyên liệu hữu cơ tối thiểu để đạt chuẩn JAS 1606 là bao nhiêu?", a: "Tối thiểu 95% tổng khối lượng nguyên liệu (sau khi đã loại trừ nước bổ sung và muối ăn)." },
      { q: "Trong phép tính tỷ lệ phần trăm hữu cơ, hai thành phần nào được loại trừ hoàn toàn?", a: "Nước bổ sung (added water) và muối ăn (salt) được trừ ra khỏi cả tử số và mẫu số." },
      { q: "Thành phần nông nghiệp phi hữu cơ chiếm tối đa 5% được dùng trong điều kiện nào?", a: "Chỉ khi nguyên liệu hữu cơ tương đương không sẵn có trên thị trường và nằm trong danh mục chấp thuận." },
      { q: "Hai công nghệ bị CẤM TUYỆT ĐỐI trong chế biến thực phẩm hữu cơ theo JAS 1606 là gì?", a: "Chiếu xạ bức xạ ion hoá (Ionizing radiation) và công nghệ biến đổi gen (GMO)." },
      { q: "Các phương pháp chế biến nào được khuyến khích sử dụng trong JAS 1606?", a: "Phương pháp cơ học, vật lý (nghiền, ép lạnh, sấy nhiệt, đông lạnh) và sinh học tự nhiên (lên men)." },
      { q: "Dung môi nào sau đây bị CẤM dùng để trích ly dầu ăn hữu cơ?", a: "Các dung môi nguồn gốc hoá dầu như Hexane; chỉ được dùng phương pháp ép cơ học hoặc trích ly bằng CO2 siêu tới hạn." },
      { q: "Phụ gia thực phẩm Bảng 1 của JAS 1606 bao gồm những chất tiêu biểu nào?", a: "Axit citric tự nhiên, axit lactic, lecithin Non-GMO, pectin vỏ cam quýt, khí trơ nitơ (N2), carbon dioxide (CO2)." },
      { q: "Chất hỗ trợ chế biến (Processing aids) ở Bảng 2 khác phụ gia thực phẩm ở điểm nào?", a: "Chất hỗ trợ chế biến (như than hoạt tính, đất sét bentonite) phải được tách lọc hoàn toàn khỏi thành phẩm cuối cùng." },
      { q: "Khi dùng chung dây chuyền sản xuất cho cả hàng thường và hàng hữu cơ, biện pháp ngăn ngừa ô nhiễm chéo là gì?", a: "Tổng vệ sinh CIP, cách ly ca sản xuất và bắt buộc chạy mẻ xả đầu (Purge batch) hạ cấp thành hàng thường." },
      { q: "Nguyên tắc vệ sinh thiết bị bằng hoá chất tẩy rửa trong xưởng chế biến hữu cơ là gì?", a: "Sau khi dùng hoá chất tẩy rửa, bắt buộc phải tráng lại bằng nước sạch tinh khiết cho đến khi độ pH về trung tính." },
      { q: "Biện pháp kiểm soát côn trùng dịch hại chính trong nhà xưởng chế biến hữu cơ là gì?", a: "Hàng rào vật lý (lưới chống côn trùng, rèm nhựa, quạt cắt gió) và bẫy dính cơ học; cấm phun xịt hoá chất trong xưởng." },
      { q: "Yêu cầu lưu kho đối với nguyên liệu hữu cơ trong kho chung của nhà máy là gì?", a: "Quy hoạch phân khu riêng, có vạch kẻ sàn nhận diện rõ ràng, thẻ kho ghi mã lô và không để lẫn lộn trên cùng pallet." }
    ],
    quiz: [
      {
        q: "Công thức mẻ sản xuất trà đóng gói gồm: 92 kg trà hữu cơ, 5 kg hoa nhài hữu cơ, 3 kg đường quy ước (non-organic), không có nước và muối. Tỷ lệ hữu cơ của mẻ này là bao nhiêu?",
        c: "97% (Đạt chuẩn ≥ 95% để dán tem JAS)",
        w: ["92% (Chưa đạt chuẩn vì hoa nhài không được tính)", "95% (Vừa vặn đạt chuẩn tối thiểu)", "100% (Vì đường chỉ là phụ gia tạo ngọt)"],
        why: "Tỷ lệ hữu cơ = (92 + 5) / (92 + 5 + 3) = 97 / 100 = 97%, lớn hơn ngưỡng 95% nên đạt chuẩn.",
        s: 4
      },
      {
        q: "Một mẻ nước sốt gồm: 80 kg cà chua hữu cơ, 15 kg giấm hữu cơ, 50 kg nước sạch bổ sung, 5 kg muối ăn. Tỷ lệ thành phần hữu cơ được tính như thế nào?",
        c: "100% (vì nước 50kg và muối 5kg được loại trừ hoàn toàn khỏi phép tính)",
        w: ["63,3% (tính trên tổng 150 kg cả nước và muối)", "95% (tính trừ nước nhưng giữ lại muối)", "53,3% (chỉ tính riêng thành phần cà chua hữu cơ)"],
        why: "Nước bổ sung (50kg) và muối (5kg) được trừ ra: Tỷ lệ = (80 + 15) / (80 + 15) = 95 / 95 = 100%.",
        s: 4
      },
      {
        q: "Công nghệ nào sau đây bị CẤM TUYỆT ĐỐI trong toàn bộ quá trình chế biến thực phẩm JAS 1606?",
        c: "Chiếu xạ bằng tia Gamma để tiệt trùng vi sinh vật",
        w: ["Gia nhiệt thanh trùng Pasteurization ở nhiệt độ 85°C", "Nghiền ép cơ học trục vít ở nhiệt độ thường", "Lọc trong nước ép bằng màng lọc cơ học siêu mịn"],
        why: "Chiếu xạ ion hoá là một trong hai đại kỵ bị cấm tuyệt đối trong chế biến thực phẩm hữu cơ JAS.",
        s: 6
      },
      {
        q: "Dung môi nào sau đây được phép sử dụng để trích ly các hợp chất hương tự nhiên trong JAS 1606?",
        c: "Nước sạch tinh khiết hoặc cồn Etylic sinh học (Ethanol)",
        w: ["Dung môi Hexane công nghiệp hoá dầu", "Dung môi Benzen công nghiệp", "Dung môi Cloroform đậm đặc"],
        why: "JAS chỉ cho phép dung môi tự nhiên như nước, cồn sinh học hoặc carbon dioxide siêu tới hạn.",
        s: 5
      },
      {
        q: "Phụ gia thực phẩm nào sau đây nằm trong danh mục Bảng 1 của tiêu chuẩn JAS 1606?",
        c: "Axit Citric tự nhiên (INS 330) và Khí Nitơ (N2)",
        w: ["Chất tạo ngọt nhân tạo Aspartame", "Chất bảo quản hoá học Natri Benzoat (Sodium Benzoate)", "Phẩm màu tổng hợp Tartrazine màu vàng"],
        why: "Axit citric tự nhiên và khí nitơ đóng gói là phụ gia cho phép trong Bảng 1 của JAS 1606.",
        s: 7
      },
      {
        q: "Chất hỗ trợ chế biến than hoạt tính (Activated carbon) được phép dùng trong sản xuất dầu ăn hữu cơ với điều kiện gì?",
        c: "Phải được lọc tách sạch hoàn toàn, không còn tồn dư trong dầu thành phẩm",
        w: ["Được để lại trong sản phẩm với tỷ lệ không quá 5%", "Được để lại thoải mái để tạo màu đen tự nhiên cho dầu", "Chỉ được dùng than bùn công nghiệp chưa qua hoạt hoá"],
        why: "Chất hỗ trợ chế biến bắt buộc phải được tách lọc triệt để ra khỏi sản phẩm trước khi đóng gói thành phẩm.",
        s: 8
      },
      {
        q: "Quy trình 'Mẻ xả đầu' (Purge batch / Flushing batch) trên dây chuyền dùng chung có mục đích gì?",
        c: "Cuốn trôi các vết tàn dư của mẻ hàng thông thường trước đó khỏi đường ống",
        w: ["Để thử nghiệm xem máy móc có chạy đủ công suất thiết kế hay không", "Để dán tem JAS xuất khẩu với giá cao hơn bình thường", "Để tạo ra sản phẩm mẫu gửi tặng khách hàng dùng thử"],
        why: "Mẻ xả đầu dùng chính nguyên liệu hữu cơ chạy tráng máy cuốn trôi tàn dư hàng thường, và mẻ này bị hạ cấp.",
        s: 9
      },
      {
        q: "Số sản phẩm tạo ra từ mẻ xả đầu (Purge batch) phải được xử lý như thế nào?",
        c: "Bắt buộc phải hạ cấp và bán dưới dạng hàng thông thường, không được dán tem JAS",
        w: ["Được dán tem Organic JAS nếu đem lọc lại qua lưới siêu mịn", "Được đóng gói dán tem hữu cơ loại 2", "Được dán nhãn hữu cơ xuất khẩu sang các nước khác"],
        why: "Mẻ xả đầu có nguy cơ cuốn theo tàn dư hàng thường nên không bao giờ được phép mang nhãn hữu cơ.",
        s: 9
      },
      {
        q: "Sau khi vệ sinh đường ống bằng xút ăn da (NaOH), chỉ tiêu nào bắt buộc phải kiểm tra trước khi cấp liệu hữu cơ?",
        c: "Độ pH của nước tráng cuối cùng phải trở về trung tính (pH ≈ 7)",
        w: ["Nhiệt độ nước tráng phải đạt trên 100°C", "Màu sắc của nước tráng phải chuyển sang màu xanh lục", "Mùi của nước tráng phải có mùi thơm clo nồng nặc"],
        why: "Độ pH trung tính chứng minh hoá chất tẩy rửa kiềm đã được rửa tráng sạch hoàn toàn khỏi đường ống.",
        s: 10
      },
      {
        q: "Hành động nào sau đây BỊ CẤM trong việc kiểm soát côn trùng dịch hại tại xưởng chế biến hữu cơ?",
        c: "Phun xịt thuốc diệt muỗi hoá học dạng sương mù trực tiếp vào xưởng đang sản xuất",
        w: ["Lắp đặt đèn bắt muỗi bằng ánh sáng xanh ngoài cửa ra vào", "Treo rèm nhựa PVC ngăn gió và bụi tại các cửa xuất nhập hàng", "Đặt hộp bẫy bả dính cơ học dọc chân tường nhà xưởng"],
        why: "Phun hoá chất diệt muỗi trong khu vực chế biến hữu cơ gây nguy cơ nhiễm độc thực phẩm cực cao và bị cấm.",
        s: 11
      },
      {
        q: "Pallet gỗ dùng để kê xếp thùng thành phẩm thực phẩm hữu cơ trong kho phải bảo đảm điều kiện gì?",
        c: "Khô ráo, sạch sẽ và tuyệt đối không xông trùng bằng thuốc cấm Methyl Bromide",
        w: ["Phải được phun đẫm thuốc trừ sâu chống mọt trước khi xếp hàng", "Phải được ngâm dầu hoả để chống ẩm mốc mối mọt", "Phải được sơn kín màu đỏ tươi để dễ nhận diện"],
        why: "Gỗ kê hàng không được hun trùng hoá chất cấm vì hơi độc có thể thẩm thấu qua thùng carton vào thực phẩm.",
        s: 13
      },
      {
        q: "Ai là người có thẩm quyền ký duyệt biên bản phân hạng trước khi lô hàng chế biến được dán tem JAS?",
        c: "Người quản lý phân hạng (Grading Manager)",
        w: ["Tổ trưởng tổ đóng gói tại xưởng", "Nhân viên phòng kinh doanh xuất khẩu", "Bác bảo vệ trực cổng nhà máy"],
        why: "Grading Manager là nhân sự duy nhất được uỷ quyền hợp pháp ký biên bản phân hạng cho lô sản phẩm.",
        s: 15
      }
    ]
  },

  // ==========================================
  // MODULE 5: Quy định Ghi nhãn & Sử dụng Dấu JAS Hữu cơ
  // ==========================================
  {
    cards: [
      { q: "Văn bản pháp lý nào của MAFF quy định chi tiết về ghi nhãn và sử dụng dấu JAS?", a: "Thông báo số 24 (ban hành 2022, sửa đổi bổ sung cập nhật tháng 7 năm 2024)." },
      { q: "Ba thành tố bắt buộc cấu thành con dấu JAS Hữu cơ chuẩn là gì?", a: "Khung tròn kép, biểu trưng chiếc lá mầm + chữ JAS, và tên Tổ chức Chứng nhận (CB) in bên dưới." },
      { q: "Đường kính tối thiểu của con dấu JAS trên bao bì bán lẻ nhỏ là bao nhiêu?", a: "Tối thiểu 5 mm." },
      { q: "Đường kính tối thiểu của con dấu JAS trên thùng carton vận chuyển lớn là bao nhiêu?", a: "Tối thiểu 20 mm." },
      { q: "Các cụm từ tiếng Nhật nào được phép dùng để đặt tên cho sản phẩm hữu cơ?", a: "有機農産物 (Nông sản hữu cơ), 有機栽培 (Canh tác hữu cơ), 有機加工食品 (Thực phẩm chế biến hữu cơ), オーガニック (Organic)." },
      { q: "Các từ ngữ tiếp thị nào bị CẤM dùng tại Nhật nếu sản phẩm không có chứng nhận JAS?", a: "Tự ý xưng 'Tự nhiên' (Natural), 'Không hoá chất' (Chemical-free), 'Sinh thái' (Eco) nhằm ám chỉ hữu cơ." },
      { q: "Quy cách bắt buộc khi thể hiện thành phần hữu cơ trong bảng thành phần là gì?", a: "Ghi chữ 'Hữu cơ' (hoặc 有機) ngay phía trước tên thành phần nông sản đó (VD: 有機緑茶 - Trà xanh hữu cơ)." },
      { q: "Thành phần có nguồn gốc động vật (như sữa, trứng) muốn ghi nhãn hữu cơ cần điều kiện gì?", a: "Phải xuất phát từ trang trại chăn nuôi đạt chứng nhận JAS 1608 (Động vật hữu cơ) hoặc tương đương." },
      { q: "Sản phẩm có tỷ lệ thành phần hữu cơ từ 70% đến dưới 95% có được dán dấu JAS không?", a: "TUYỆT ĐỐI KHÔNG được dán dấu JAS Hữu cơ lên mặt trước bao bì; chỉ được ghi tỷ lệ % ở mặt sau." },
      { q: "Sản phẩm có tỷ lệ thành phần hữu cơ dưới 70% được thể hiện chữ hữu cơ như thế nào?", a: "Chỉ được ghi chữ hữu cơ trong ngoặc đơn bên cạnh đúng thành phần đó trong bảng thành phần; cấm đưa lên tên gọi chính." },
      { q: "Trước khi in ấn hàng loạt bao bì có dấu JAS, doanh nghiệp bắt buộc phải làm gì?", a: "Gửi ma-két thiết kế nhãn (.PDF/.AI) xin văn bản phê duyệt chính thức từ Tổ chức Chứng nhận (CB)." },
      { q: "Biện pháp xử lý ngay lập tức khi phát hiện một lô hàng bị in nhãn sai quy cách là gì?", a: "Phong toả lô hàng tại kho, dán đè decal che mờ logo JAS hoặc dán lại nhãn đúng và báo cáo cho CB." }
    ],
    quiz: [
      {
        q: "Theo Thông báo số 24 của MAFF, con dấu Organic JAS in trên bao bì bán lẻ bắt buộc phải có thông tin nào đi kèm?",
        c: "Tên của Tổ chức Chứng nhận (Accredited CB) in ngay dưới hoặc cạnh logo",
        w: ["Số điện thoại đường dây nóng của Bộ Nông Lâm Thủy sản Nhật Bản", "Chữ ký tay trực tiếp của Giám đốc điều hành công ty sản xuất", "Hình ảnh lá quốc kỳ của đất nước nơi sản xuất sản phẩm"],
        why: "Thông báo 24 quy định bắt buộc phải in tên Tổ chức CB ngay dưới hoặc bên cạnh biểu trưng JAS.",
        s: 3
      },
      {
        q: "Kích thước đường kính tối thiểu của con dấu JAS Hữu cơ trên bao bì gói nhỏ tiêu dùng là bao nhiêu?",
        c: "5 mm",
        w: ["1 mm", "15 mm", "30 mm"],
        why: "Đường kính tối thiểu trên gói nhỏ là 5 mm để đảm bảo người tiêu dùng có thể đọc rõ biểu tượng.",
        s: 4
      },
      {
        q: "Một nhà sản xuất tại Việt Nam xuất khẩu xoài sấy sang Nhật. Doanh nghiệp tự ý in dòng chữ 'Pure Natural - 100% Chemical-free' lên bao bì dù chưa có chứng nhận JAS. Hành vi này vi phạm điều gì?",
        c: "Vi phạm quy định chống gây hiểu lầm của Luật Tiêu chuẩn Nông nghiệp Nhật Bản",
        w: ["Được phép vì từ tiếng Anh không chịu sự điều chỉnh của luật pháp Nhật", "Chỉ vi phạm nếu xuất bán vào các siêu thị ở thủ đô Tokyo", "Không vi phạm vì sản phẩm thực tế không dùng hoá chất"],
        why: "Luật Nhật nghiêm cấm dùng các từ ngữ mập mờ như 'tự nhiên' hay 'không hoá chất' để đánh lừa người tiêu dùng nếu chưa có JAS.",
        s: 5
      },
      {
        q: "Trong bảng thành phần của bánh quy, nguyên liệu bột mì đạt chuẩn hữu cơ phải được ghi như thế nào?",
        c: "Bột mì hữu cơ (hoặc 有機小麦粉)",
        w: ["Bột mì cao cấp không chất bảo quản", "Bột mì thiên nhiên 100%", "Bột mì sinh thái sạch"],
        why: "Phải ghi rõ ràng từ 'hữu cơ' (有機) ngay trước tên gọi của nguyên liệu nông sản đó.",
        s: 6
      },
      {
        q: "Sản phẩm sô-cô-la có tỷ lệ nguyên liệu hữu cơ đạt 85% (thuộc nhóm từ 70% đến dưới 95%). Bao bì sản phẩm được phép thể hiện như thế nào?",
        c: "Không được dán dấu JAS, chỉ được ghi tỷ lệ phần trăm hữu cơ cụ thể ở mặt sau",
        w: ["Được dán dấu JAS Hữu cơ lên mặt trước nếu thu nhỏ kích thước xuống 3 mm", "Được dán dấu JAS Hữu cơ màu xám nhạt", "Được đặt tên sản phẩm là 'Sô-cô-la Hữu cơ JAS Toàn phần'"],
        why: "Dưới 95% tuyệt đối không được dán logo JAS lên mặt trước; chỉ được công bố tỷ lệ % hữu cơ ở mặt sau.",
        s: 8
      },
      {
        q: "Một loại nước ép trái cây hỗn hợp chỉ có 40% nước ép cam hữu cơ, còn lại là nước ép thông thường. Nhãn sản phẩm được ghi như thế nào?",
        c: "Tên sản phẩm là 'Nước cam hỗn hợp', bảng thành phần ghi: Nước cam hữu cơ (40%),...",
        w: ["Được đặt tên chính thức là 'Nước cam hữu cơ nguyên chất'", "Được in biểu trưng Dấu JAS Hữu cơ ở góc dưới bên phải", "Bắt buộc phải xoá bỏ chữ hữu cơ kể cả trong bảng thành phần"],
        why: "Dưới 70% thì chữ hữu cơ chỉ được phép xuất hiện trong danh sách thành phần, không được đưa lên tên chính.",
        s: 9
      },
      {
        q: "Quy cách in con dấu JAS trên thùng carton lớn vận chuyển đường biển yêu cầu đường kính tối thiểu là bao nhiêu?",
        c: "20 mm",
        w: ["5 mm", "10 mm", "50 mm"],
        why: "Trên thùng carton lớn, con dấu JAS phải có đường kính tối thiểu 20 mm để nhận diện từ xa khi bốc xếp.",
        s: 10
      },
      {
        q: "Thời điểm nào là thời điểm chuẩn xác nhất để doanh nghiệp tiến hành in ấn bao bì có logo JAS số lượng lớn?",
        c: "Sau khi nhận được thư phê duyệt ma-két nhãn chính thức bằng văn bản từ Tổ chức CB",
        w: ["Ngay sau khi phòng thiết kế vẽ xong bản thảo trên máy tính", "Khi lô hàng đầu tiên đã hoàn thành xong công đoạn thu hoạch", "Khi tìm được xưởng in ấn có giá thành rẻ nhất"],
        why: "Bắt buộc phải có văn bản chấp thuận ma-két của Tổ chức CB trước khi in ấn đại trà để tránh tổn thất hàng vạn vỏ hộp in sai.",
        s: 12
      },
      {
        q: "Lỗi ghi nhãn nào sau đây là lỗi phổ biến nhất khiến hàng hoá bị cơ quan thẩm quyền Nhật Bản từ chối thông quan?",
        c: "In biểu trưng JAS nhưng quên in tên Tổ chức Chứng nhận (CB) bên dưới",
        w: ["In bao bì bằng chất liệu giấy tái chế tự phân hủy", "In mã vạch sản phẩm ở mặt sau của hộp", "In bảng hướng dẫn sử dụng bằng cả tiếng Anh và tiếng Nhật"],
        why: "Quên in tên Tổ chức CB là lỗi kỹ thuật kinh điển làm mất giá trị pháp lý của con dấu JAS.",
        s: 13
      },
      {
        q: "Theo Thông báo sửa đổi bổ sung năm 2024, thành phần trứng gà hữu cơ trong thực phẩm chế biến phải được truy xuất từ đâu?",
        c: "Trang trại chăn nuôi đạt chứng nhận JAS 1608 (Chăn nuôi hữu cơ)",
        w: ["Bất kỳ trang trại nuôi gà thả vườn nào tại thôn quê", "Trang trại gà nuôi lồng công nghiệp đạt tiêu chuẩn an toàn sinh học", "Mua trứng từ các chợ đầu mối nông sản không cần hoá đơn"],
        why: "Thành phần động vật hữu cơ phải xuất phát từ cơ sở được chứng nhận theo chuẩn chăn nuôi JAS 1608.",
        s: 7
      },
      {
        q: "Màu sắc nào sau đây ĐƯỢC CHẤP NHẬN khi in con dấu JAS Hữu cơ đơn sắc?",
        c: "Màu đen, xanh lá cây hoặc nâu sẫm tương phản rõ nét với nền bao bì",
        w: ["Màu mực tàng hình chỉ phát sáng dưới ánh đèn cực tím", "Màu bóng mờ tiệp màu hoàn toàn với nền bao bì không nhìn thấy", "Màu huỳnh quang phản quang loá mắt"],
        why: "Con dấu phải in màu đơn sắc rõ ràng như đen, xanh lá cây đậm hoặc nâu để tương phản đọc được.",
        s: 4
      },
      {
        q: "Một lô hàng 5.000 hộp trà bị in nhầm tên Tổ chức CB cũ đã hết hạn hợp đồng. Biện pháp khắc phục hợp lệ là gì?",
        c: "In decal nhãn phụ chính xác dán đè lên khu vực in sai dưới sự giám sát của QA",
        w: ["Cứ xuất xưởng bán bình thường vì khách hàng không để ý tên CB", "Tẩy xoá bằng cồn làm rách bao bì rồi xuất bán hạ giá", "Ký phụ lục hợp đồng lùi ngày với Tổ chức CB cũ"],
        why: "Dán nhãn đè decal đã được CB phê duyệt là phương án khắc phục hợp lệ, vừa tiết kiệm bao bì vừa đúng luật.",
        s: 14
      }
    ]
  },

  // ==========================================
  // MODULE 6: Tiêu chuẩn Kỹ thuật Đơn vị Vận hành
  // ==========================================
  {
    cards: [
      { q: "Tiêu chuẩn Kỹ thuật (Technical Criteria) trong hệ thống JAS đánh giá điều gì?", a: "Đánh giá toàn diện năng lực cơ sở vật chất, hệ thống tài liệu SOP và nhân sự của tổ chức vận hành." },
      { q: "Hai chức danh nhân sự bắt buộc phải được đào tạo và phê duyệt tại cơ sở JAS là ai?", a: "Người quản lý quy trình sản xuất (PPM) và Người quản lý phân hạng (Grading Manager)." },
      { q: "Nhiệm vụ chính của Người quản lý quy trình sản xuất (PPM) là gì?", a: "Thiết lập SOP, vận hành dây chuyền, kiểm soát mẻ trộn, vệ sinh thiết bị và phòng chống ô nhiễm chéo." },
      { q: "Nhiệm vụ chính của Người quản lý phân hạng (Grading Manager) là gì?", a: "Kiểm tra sự tuân thủ của hồ sơ mẻ, ký duyệt phân hạng và trực tiếp quản lý việc cấp phát tem JAS." },
      { q: "Tại sao Grading Manager phải có tính độc lập cao trong tổ chức?", a: "Để bảo đảm quyền phủ quyết khách quan, không bị áp lực doanh số bán hàng hay tiến độ giao hàng chi phối." },
      { q: "Đơn vị tái đóng gói (Re-packer) được phép làm những gì?", a: "Chia nhỏ và đóng gói lại các sản phẩm hữu cơ đã có chứng nhận JAS gốc mà không làm biến đổi bản chất sản phẩm." },
      { q: "Con dấu JAS trên gói nhỏ của Đơn vị tái đóng gói sẽ in tên của ai?", a: "In tên của chính Tổ chức Chứng nhận đã đánh giá cấp phép cho Đơn vị tái đóng gói đó." },
      { q: "Nhiệm vụ cốt lõi của Nhà nhập khẩu (Importer) đạt chuẩn JAS là gì?", a: "Thẩm tra tính hợp lệ của chứng thư hữu cơ nước xuất xứ và thực hiện phân hạng dán tem JAS nhập khẩu." },
      { q: "Hệ thống tài liệu SOP bắt buộc của một cơ sở chế biến JAS gồm những quy trình nào?", a: "SOP Tiếp nhận nguyên liệu, SOP Vận hành sản xuất, SOP Vệ sinh CIP, SOP Phân hạng, SOP Quản lý tem, SOP Thu hồi." },
      { q: "Tần suất đánh giá nội bộ (Internal Audit) bắt buộc tối thiểu tại cơ sở là bao lâu?", a: "Thực hiện định kỳ tối thiểu 1 lần mỗi năm trên toàn bộ các phòng ban liên quan." },
      { q: "Cơ sở có nghĩa vụ báo cáo gì định kỳ cho Tổ chức Chứng nhận (CB)?", a: "Báo cáo sản lượng sản phẩm đã phân hạng, số lượng tem JAS đã sử dụng và các thay đổi nhân sự chủ chốt." },
      { q: "Hành vi kiêm nhiệm nào bị CẤM TUYỆT ĐỐI vì gây xung đột lợi ích đối với Grading Manager?", a: "Bổ nhiệm Trưởng phòng Bán hàng hoặc Thủ kho kiêm nhiệm Người quản lý phân hạng." }
    ],
    quiz: [
      {
        q: "Theo Tiêu chuẩn Kỹ thuật của JAS, vị trí nhân sự nào là người duy nhất có thẩm quyền phê duyệt dán tem JAS?",
        c: "Người quản lý phân hạng (Grading Manager)",
        w: ["Giám đốc Bán hàng và Tiếp thị (Sales Director)", "Trưởng ca vận hành máy đóng gói", "Trưởng phòng Mua hàng nguyên liệu"],
        why: "Grading Manager là nhân sự có chứng chỉ chuyên môn và được trao quyền độc lập quyết định phân hạng lô hàng.",
        s: 3
      },
      {
        q: "Để bảo đảm tính độc lập khách quan, cơ chế tổ chức nào sau đây BỊ CẤM trong cơ sở JAS?",
        c: "Grading Manager chịu sự chỉ đạo trực tiếp và đánh giá KPI bởi Trưởng phòng Kinh doanh",
        w: ["Grading Manager báo cáo chuyên môn độc lập lên Ban Giám đốc", "Grading Manager tham gia các khoá đào tạo cập nhật kiến thức của CB", "Grading Manager phối hợp với bộ phận QA kiểm tra chất lượng"],
        why: "Nếu chịu sự chỉ đạo của bộ phận bán hàng, Grading Manager sẽ bị áp lực doanh số làm sai lệch quyết định kiểm định.",
        s: 4
      },
      {
        q: "Đơn vị tái đóng gói (Re-packer) được chứng nhận JAS có quyền hạn nào sau đây?",
        c: "Chia nhỏ bao xá lớn đã đạt chuẩn JAS thành các túi nhỏ bán lẻ và dán lại tem JAS mới",
        w: ["Mua nông sản thông thường về phối trộn thêm hương liệu rồi dán tem JAS", "Thay đổi hoàn toàn công thức chế biến của sản phẩm gốc", "Tự ý cấp giấy chứng nhận canh tác hữu cơ cho các nông trại vệ tinh"],
        why: "Re-packer chỉ làm nhiệm vụ chia nhỏ bao bì mà không làm biến đổi bản chất của sản phẩm hữu cơ gốc.",
        s: 7
      },
      {
        q: "Khi một Đơn vị tái đóng gói dán tem JAS lên gói trà nhỏ mới, dòng chữ tên CB bên dưới logo là tên của ai?",
        c: "Tên Tổ chức CB đã cấp chứng nhận cho chính Đơn vị tái đóng gói đó",
        w: ["Tên Tổ chức CB của trang trại trồng chè ban đầu", "Tên của siêu thị bán lẻ tại Nhật Bản", "Tên cơ quan hải quan tại cảng hàng không"],
        why: "Đơn vị nào thực hiện phân hạng và dán tem thì phải ghi tên Tổ chức CB đã chứng nhận cho đơn vị đó.",
        s: 8
      },
      {
        q: "Nhà nhập khẩu (Importer) tại Nhật Bản muốn phân hạng lô hàng hạt điều từ nước ngoài cần kiểm tra chứng từ nào đầu tiên?",
        c: "Giấy chứng nhận kiểm tra hữu cơ (Certificate of Inspection) do cơ quan hợp lệ cấp",
        w: ["Tờ rơi quảng cáo tiếp thị của công ty xuất khẩu", "Bản tin dự báo thời tiết của nước xuất xứ", "Danh sách các giải thưởng kinh doanh của giám đốc"],
        why: "Certificate of Inspection (chứng thư lô hàng) là bằng chứng pháp lý chứng minh lô hàng xuất khẩu đạt chuẩn hữu cơ.",
        s: 9
      },
      {
        q: "Quy trình nào sau đây BẮT BUỘC phải có trong bộ tài liệu SOP của Nhà sản xuất chế biến hữu cơ (PPM)?",
        c: "Quy trình tiếp nhận, vận hành chế biến, làm sạch CIP, phân hạng và thu hồi sản phẩm",
        w: ["Quy trình đàm phán giá cả và chiết khấu hoa hồng đại lý", "Quy trình tổ chức tiệc liên hoan cuối năm cho nhân viên", "Quy trình thiết kế đồng phục cho công nhân may mặc"],
        why: "Technical Criteria quy định cụ thể các SOP kỹ thuật vận hành, vệ sinh, phân hạng và quản lý khủng hoảng thu hồi.",
        s: 6
      },
      {
        q: "Tần suất bắt buộc để một cơ sở JAS tiến hành Đánh giá nội bộ (Internal Audit) là bao lâu?",
        c: "Tối thiểu 1 lần mỗi năm",
        w: ["5 năm một lần", "Chỉ làm khi có đoàn thanh tra của MAFF thông báo sang", "Không bắt buộc nếu công ty chưa có khách hàng phàn nàn"],
        why: "Đánh giá nội bộ là yêu cầu bắt buộc tối thiểu mỗi năm một lần để rà soát việc duy trì hệ thống.",
        s: 12
      },
      {
        q: "Khi có sự thay đổi nhân sự Người quản lý phân hạng (Grading Manager), cơ sở có nghĩa vụ gì?",
        c: "Bắt buộc phải gửi văn bản thông báo ngay cho Tổ chức Chứng nhận (CB) kèm hồ sơ năng lực nhân sự mới",
        w: ["Không cần thông báo, chỉ cần tự thay đổi hợp đồng lao động nội bộ", "Chờ đến kỳ thanh tra thường niên năm sau mới báo cáo miệng", "Chỉ cần đăng thông báo tuyển dụng lên mạng xã hội"],
        why: "Grading Manager là nhân sự chủ chốt được CB phê duyệt; bất kỳ sự thay đổi nào cũng phải báo cáo ngay.",
        s: 13
      },
      {
        q: "Hồ sơ đào tạo công nhân trực tiếp sản xuất hàng hữu cơ bắt buộc phải lưu trữ nội dung gì?",
        c: "Nội dung bài giảng, ngày đào tạo, danh sách điểm danh và kết quả kiểm tra năng lực",
        w: ["Ảnh chụp công nhân đang ăn trưa tại nhà ăn", "Mức lương chi tiết của từng công nhân", "Sở thích cá nhân của người đứng máy"],
        why: "Hồ sơ đào tạo phải chứng minh được công nhân đã hiểu rõ quy trình chống ô nhiễm chéo và nhận diện nhãn mác.",
        s: 11
      },
      {
        q: "Trong kho của cơ sở tái đóng gói, tem nhãn JAS phải được cất giữ và bảo quản như thế nào?",
        c: "Cất trong tủ có khoá an toàn, do Grading Manager quản lý sổ theo dõi cấp phát",
        w: ["Để tự do trên bàn làm việc của xưởng in để công nhân tiện lấy", "Giao cho bác bảo vệ cổng cơ quan giữ hộ", "Để lẫn trong thùng rác tái chế"],
        why: "Tem nhãn JAS có giá trị pháp lý cao nên phải được quản lý bảo mật nghiêm ngặt tránh thất thoát gian lận.",
        s: 14
      },
      {
        q: "Điều kiện cơ sở vật chất nào sau đây là bắt buộc đối với xưởng của Re-packer?",
        c: "Phòng đóng gói sạch sẽ, kiểm soát nhiệt ẩm và cách ly hoàn toàn với hàng phi hữu cơ",
        w: ["Phải có diện tích mặt bằng tối thiểu 10.000 mét vuông", "Phải đặt tại các khu kinh tế cửa khẩu biên giới", "Phải trang bị máy bay trực thăng vận chuyển hàng hoá"],
        why: "Phòng đóng gói phải sạch sẽ và cách ly chống ô nhiễm chéo nhằm bảo toàn tuyệt đối tính hữu cơ của sản phẩm.",
        s: 7
      },
      {
        q: "Một nhân viên thủ kho tự ý lấy 1.000 tem JAS dán lên các thùng hàng thường để xuất cho khách vì 'hết hàng hữu cơ'. Hành vi này bị xử lý thế nào?",
        c: "Hành vi gian lận pháp lý nghiêm trọng, cơ sở sẽ bị tước chứng chỉ JAS ngay lập tức",
        w: ["Chỉ bị trừ 10% lương tháng của nhân viên thủ kho", "Được bỏ qua nếu khách hàng đồng ý nhận hàng", "Chỉ cần viết bản kiểm điểm rút kinh nghiệm nội bộ"],
        why: "Dán tem JAS khống là vi phạm đạo luật nghiêm trọng nhất, dẫn đến huỷ bỏ toàn bộ chứng nhận của cơ sở.",
        s: 14
      }
    ]
  },

  // ==========================================
  // MODULE 7: Phương pháp Thanh tra Hiện trường
  // ==========================================
  {
    cards: [
      { q: "Văn bản nào quy định Phương pháp Thanh tra quy trình sản xuất của JAS?", a: "Thông báo liên tịch số 28 của Bộ Tài chính và Bộ Nông Lâm Thủy sản Nhật Bản (ban hành 2022)." },
      { q: "Tần suất thanh tra giám sát định kỳ đối với một cơ sở JAS là bao lâu?", a: "Tối thiểu 1 lần mỗi năm." },
      { q: "Khi nào Tổ chức Chứng nhận kích hoạt cuộc thanh tra đột xuất (Unannounced inspection)?", a: "Khi nhận được khiếu nại, cảnh báo rủi ro tồn dư hoá chất hoặc có nghi vấn gian lận nhãn mác." },
      { q: "Quy trình 5 bước trong một cuộc thanh tra JAS diễn ra như thế nào?", a: "Họp mở đầu → Kiểm tra hiện trường → Thẩm tra hồ sơ → Phỏng vấn nhân sự → Họp kết thúc." },
      { q: "Kỹ thuật thẩm tra hồ sơ tam giác đối chiếu chéo những nguồn dữ liệu nào?", a: "Dữ liệu mua nguyên liệu đầu vào — Nhật ký mẻ sản xuất — Hoá đơn xuất bán và sổ theo dõi tem JAS." },
      { q: "Những điểm thanh tra viên sẽ soi kỹ nhất tại kho chứa vật tư nông trại là gì?", a: "Kiểm tra từng chai lọ, bao bì xem có cất giấu phân bón vô cơ, thuốc trừ cỏ hay thuốc BVTV cấm hay không." },
      { q: "Khi phỏng vấn Grading Manager, thanh tra viên chú trọng đánh giá điều gì?", a: "Kiến thức chuyên môn về tiêu chuẩn và mức độ độc lập khi ra quyết định từ chối lô hàng không đạt." },
      { q: "Mẫu thử nghiệm lấy tại hiện trường được xử lý niêm phong như thế nào?", a: "Chia làm 2 phần tương đương, cho vào túi niêm phong có chữ ký hai bên (1 phần gửi lab, 1 phần cơ sở lưu)." },
      { q: "Ba mức độ phân loại điểm không phù hợp (Non-conformity) là gì?", a: "Lỗi nhẹ (Minor), Lỗi nặng (Major), và Lỗi nghiêm trọng (Critical)." },
      { q: "Thời hạn tiêu chuẩn để cơ sở nộp Báo cáo hành động khắc phục (CAPA) cho CB là bao lâu?", a: "Trong vòng 30 ngày kể từ ngày kết thúc cuộc thanh tra." },
      { q: "Phương pháp tìm nguyên nhân gốc rễ phổ biến nhất khi lập CAPA là gì?", a: "Phương pháp 5 Tại sao (5 Whys) hoặc sơ đồ xương cá Ishikawa." },
      { q: "Phòng QA cần chuẩn bị gì trước ngày thanh tra chính thức 1 tuần?", a: "Rà soát nhật ký sản xuất 12 tháng, cập nhật bảng Mass Balance, kiểm kê tem JAS và dọn dẹp hiện trường." }
    ],
    quiz: [
      {
        q: "Theo Thông báo số 28 của MAFF, tần suất thanh tra giám sát định kỳ đối với một cơ sở JAS là bao lâu?",
        c: "Ít nhất 1 lần mỗi năm",
        w: ["3 năm một lần", "6 tháng một lần", "Chỉ thanh tra 1 lần duy nhất khi cấp chứng chỉ"],
        why: "Thanh tra giám sát định kỳ bắt buộc thực hiện tối thiểu 1 lần mỗi năm để duy trì hiệu lực chứng chỉ.",
        s: 2
      },
      {
        q: "Mục đích chính của bước 'Họp mở đầu' (Opening meeting) trong cuộc thanh tra là gì?",
        c: "Thống nhất lịch trình làm việc, phạm vi chứng nhận và nhân sự đối ứng của hai bên",
        w: ["Ký kết hợp đồng mua bán nông sản giữa thanh tra viên và nhà máy", "Uống trà đàm đạo chuyện riêng của các thành viên trong đoàn", "Công bố ngay quyết định đình chỉ chứng chỉ của doanh nghiệp"],
        why: "Họp mở đầu là bước khởi động chuyên nghiệp nhằm thống nhất phạm vi, phương pháp và lịch làm việc trong ngày.",
        s: 3
      },
      {
        q: "Thanh tra viên kiểm tra chéo: Hóa đơn mua 5.000 kg xoài hữu cơ, nhưng sổ xuất kho lại bán ra 8.000 kg xoài sấy hữu cơ. Thanh tra viên sẽ kết luận gì?",
        c: "Phát hiện sự chênh lệch bất thường nghiêm trọng nghi ngờ gian lận nguồn gốc (Lỗi Major/Critical)",
        w: ["Khen ngợi nhà máy vì đã ứng dụng công nghệ làm nở khối lượng xoài", "Cho rằng 3.000 kg dôi dư là do trời cho không cần giải trình", "Bỏ qua vì tổng sản lượng vẫn dưới 10.000 kg"],
        why: "Xoài sấy phải hao hụt so với xoài tươi; xuất bán nhiều hơn nguyên liệu nhập là bằng chứng trà trộn hàng gian lận.",
        s: 6
      },
      {
        q: "Khi lấy mẫu nông sản tại hiện trường gửi đi phân tích dư lượng, quy tắc bắt buộc là gì?",
        c: "Chia mẫu đại diện làm 2 phần, niêm phong có chữ ký xác nhận của cả thanh tra viên và cơ sở",
        w: ["Thanh tra viên tự ý bỏ mẫu vào túi nilon cá nhân mang về không cần niêm phong", "Cơ sở tự gửi một mẫu bưu điện sang Nhật sau 1 tháng", "Chỉ lấy mẫu bằng mắt thường chụp ảnh không cần lấy mẫu vật lý"],
        why: "Niêm phong mẫu có chữ ký hai bên bảo đảm tính pháp lý khách quan và quyền lưu mẫu đối chứng của cơ sở.",
        s: 9
      },
      {
        q: "Phát hiện nào sau đây được xếp vào loại 'Điểm không phù hợp nghiêm trọng' (Critical Non-Conformity)?",
        c: "Phát hiện vỏ chai thuốc diệt cỏ hoá học vừa sử dụng trên bờ ruộng hữu cơ",
        w: ["Một mục ký tên trong sổ vệ sinh ngày hôm qua bị nhân viên quên ký", "Biển báo khu vực kho hữu cơ bị bong tróc một góc nhỏ", "Bút viết nhật ký bị đổi từ mực xanh sang mực đen"],
        why: "Sử dụng thuốc diệt cỏ là hành vi vi phạm điều cấm tuyệt đối, cấu thành lỗi nghiêm trọng dẫn đến đình chỉ chứng chỉ.",
        s: 10
      },
      {
        q: "Sau khi nhận biên bản thanh tra có điểm không phù hợp (NC), doanh nghiệp có thời hạn bao lâu để nộp hồ sơ CAPA?",
        c: "Trong vòng 30 ngày kể từ ngày thanh tra",
        w: ["Trong vòng 24 giờ", "Trong vòng 6 tháng", "Chờ đến kỳ thanh tra năm sau mới nộp"],
        why: "Thời hạn tiêu chuẩn quốc tế của các Tổ chức CB là 30 ngày để cơ sở hoàn thành bằng chứng khắc phục.",
        s: 11
      },
      {
        q: "Trong quá trình thanh tra, nếu thanh tra viên hỏi một câu mà QA chưa nhớ chính xác số liệu, thái độ ứng xử đúng đắn là gì?",
        c: "Thành thật xin phép tra cứu lại sổ sách lưu trữ để cung cấp số liệu chính xác",
        w: ["Tự bịa ra một con số ngẫu nhiên để trả lời thật nhanh cho xong chuyện", "Tranh cãi gay gắt và từ chối trả lời câu hỏi của thanh tra viên", "Nháy mắt xin thanh tra viên bỏ qua câu hỏi đó"],
        why: "Sự trung thực và cẩn trọng tra cứu tài liệu luôn được đánh giá cao hơn việc trả lời phỏng đoán thiếu căn cứ.",
        s: 13
      },
      {
        q: "Khi phỏng vấn ngẫu nhiên một công nhân vận hành máy trộn, thanh tra viên sẽ muốn biết điều gì?",
        c: "Công nhân có nắm được quy trình chạy mẻ xả đầu (Purge batch) và vệ sinh máy trước mẻ hữu cơ không",
        w: ["Công nhân có nhớ tên của Thủ tướng Nhật Bản hay không", "Công nhân đã làm việc tại công ty bao nhiêu năm", "Công nhân có biết hát quốc ca Nhật Bản không"],
        why: "Phỏng vấn công nhân nhằm xác nhận việc đào tạo nội bộ có thực chất và công nhân có tuân thủ đúng SOP hay không.",
        s: 7
      },
      {
        q: "Mẫu lưu đối chứng (Retention sample) do doanh nghiệp giữ lại sau khi thanh tra viên lấy mẫu có tác dụng gì?",
        c: "Dùng để phân tích đối chất độc lập nếu kết quả thử nghiệm của phòng lab có tranh chấp",
        w: ["Để đem chia cho nhân viên trong công ty mang về nhà ăn thử", "Để trưng bày trong tủ kính lưu niệm cho đẹp mắt", "Để đem bán thanh lý lấy tiền bổ sung quỹ công đoàn"],
        why: "Mẫu lưu đối chứng là căn cứ bảo vệ quyền lợi của doanh nghiệp khi có sự sai lệch hoặc nghi ngờ về kết quả thử nghiệm.",
        s: 9
      },
      {
        q: "Chỉ tiêu phân tích trong phòng thí nghiệm nào sau đây thường được áp dụng cho mẫu nông sản JAS?",
        c: "Phân tích đa dư lượng thuốc BVTV (Multi-residue pesticide screen) và kiểm tra GMO",
        w: ["Đo độ cản quang của bao bì đóng gói", "Kiểm tra độ đàn hồi của vỏ hộp carton", "Đo nhiệt độ sôi của dầu nhớt bôi trơn máy móc"],
        why: "Dư lượng thuốc trừ sâu và sinh vật biến đổi gen là hai chỉ tiêu an toàn cốt lõi trong tiêu chuẩn hữu cơ.",
        s: 8
      },
      {
        q: "Bước nào sau đây KHÔNG THỂ THIẾU trong quy trình lập kế hoạch hành động khắc phục (CAPA)?",
        c: "Xác định nguyên nhân gốc rễ (Root Cause Analysis) và đề ra biện pháp phòng ngừa tái diễn",
        w: ["Ký quyết định đuổi việc ngay lập tức nhân viên phụ trách", "Tăng giá bán sản phẩm thêm 20% để bù đắp chi phí", "Đổi tên công ty sang một tên thương mại hoàn toàn mới"],
        why: "Bản chất của CAPA là tìm căn nguyên gốc rễ để đưa ra giải pháp phòng ngừa hệ thống không cho lỗi tái diễn.",
        s: 11
      },
      {
        q: "Một cuộc thanh tra đột xuất (Unannounced audit) khác cuộc thanh tra thường niên ở điểm nào?",
        c: "Không thông báo trước hoặc chỉ thông báo trước một thời gian rất ngắn (vài giờ)",
        w: ["Chỉ diễn ra vào ban đêm khi nhà máy tắt đèn đi ngủ", "Thanh tra viên được quyền mang theo lực lượng cảnh sát trang bị vũ trang", "Doanh nghiệp không cần phải xuất trình bất kỳ sổ sách chứng từ nào"],
        why: "Thanh tra đột xuất không báo trước nhằm ghi nhận hiện trạng vận hành thực tế trung thực nhất của cơ sở.",
        s: 2
      }
    ]
  },

  // ==========================================
  // MODULE 8: Cân đối Khối lượng & Truy xuất Nguồn gốc
  // ==========================================
  {
    cards: [
      { q: "Mục đích cốt lõi của việc kiểm toán Cân đối khối lượng (Mass Balance Audit) là gì?", a: "Chứng minh sản lượng sản phẩm hữu cơ xuất bán khớp chính xác với lượng nguyên liệu hữu cơ nhập kho sau khi trừ hao hụt." },
      { q: "Phương trình cân đối khối lượng cơ bản trong chế biến hữu cơ là gì?", a: "Nguyên liệu nhập = Thành phẩm tạo ra + Tổng hao hụt kỹ thuật + Chênh lệch tồn kho thực tế." },
      { q: "Định mức hao hụt kỹ thuật (BOM) phải được thiết lập dựa trên cơ sở nào?", a: "Dựa trên thực nghiệm sản xuất thực tế có biên bản phê duyệt; không được tự ý phỏng đoán." },
      { q: "Ba nguồn hao hụt hợp lý thường gặp trong chế biến nông sản là gì?", a: "Hao hụt phân loại nhặt bỏ tạp chất, hao hụt bốc hơi nước khi sấy, và hao hụt cơ học trên máy đóng gói." },
      { q: "Truy xuất ngược (Trace back) có lộ trình tìm kiếm thông tin như thế nào?", a: "Từ gói thành phẩm trên kệ → Lô sản xuất → Ngày đóng gói → Dây chuyền chế biến → Nông dân và thửa ruộng thu hoạch." },
      { q: "Truy xuất xuôi (Trace forward) có ứng dụng quan trọng nhất trong tình huống nào?", a: "Khi phát hiện một lô nguyên liệu bị nhiễm hoá chất, cần khoanh vùng toàn bộ các mẻ thành phẩm liên quan để thu hồi." },
      { q: "Thời hạn lưu trữ hồ sơ chứng nhận JAS bắt buộc tối thiểu là bao lâu?", a: "Tối thiểu 3 năm, hoặc bằng hạn sử dụng sản phẩm cộng thêm 1 năm." },
      { q: "Khi phát hiện sản phẩm mang dấu JAS bị nhiễm chéo hoá chất, thời hạn thông báo cho CB là bao lâu?", a: "Bắt buộc phải gửi văn bản thông báo khẩn cấp cho Tổ chức CB trong vòng 24 giờ." },
      { q: "Diễn tập thu hồi giả định (Mock Recall) bắt buộc thực hiện với tần suất bao lâu?", a: "Thực hiện định kỳ tối thiểu 1 lần mỗi năm để chứng minh năng lực phản ứng của hệ thống." },
      { q: "Thời gian tiêu chuẩn để hoàn thành một đợt diễn tập truy xuất thu hồi lô hàng là bao lâu?", a: "Trong vòng không quá 2 đến 4 giờ làm việc." },
      { q: "Một cơ sở xuất bán số hộp chè hữu cơ nhiều hơn sản lượng tính toán từ nguyên liệu nhập sẽ bị xử lý sao?", a: "Bị xếp vào lỗi nặng/nghiêm trọng do nghi vấn gian lận trà trộn hàng thông thường và bị đình chỉ chứng chỉ." },
      { q: "Đạo đức nghề nghiệp cốt lõi của người làm QA/QC trong ngành hữu cơ là gì?", a: "Trung thực và không thoả hiệp; sẵn sàng hạ cấp mẻ hàng không đạt để bảo vệ niềm tin của người tiêu dùng." }
    ],
    quiz: [
      {
        q: "Bài toán Mass Balance: Thu mua 20.000 kg búp chè tươi hữu cơ. Tỷ lệ sấy chè khô là 4:1 (hao hụt ẩm 75%). Hao hụt đóng gói là 2%. Sản lượng chè khô thành phẩm tối đa thu được là bao nhiêu?",
        c: "4.900 kg chè khô",
        w: ["5.000 kg chè khô", "15.000 kg chè khô", "4.000 kg chè khô"],
        why: "Khối lượng sau sấy = 20.000 / 4 = 5.000 kg. Sau hao hụt đóng gói 2%: 5.000 x (1 - 0,02) = 4.900 kg.",
        s: 5
      },
      {
        q: "Nếu một cơ sở nhập 4.900 kg chè khô thành phẩm nhưng lại đóng gói và dán tem JAS xuất xưởng tới 5.500 kg chè hộp. Thanh tra viên sẽ đánh giá tình huống này như thế nào?",
        c: "Phát hiện gian lận sản lượng nghiêm trọng vì xuất bán vượt quá 600 kg nguyên liệu đầu vào",
        w: ["Đánh giá cao năng suất vượt trội của công nhân đóng gói", "Chấp nhận bình thường vì sai số dưới 1.000 kg là được phép", "Yêu cầu nộp thêm lệ phí chứng nhận cho số hàng dôi dư"],
        why: "Xuất bán nhiều hơn nguyên liệu thực tế là bằng chứng rõ ràng của việc trộn hàng thường bên ngoài vào dán mác hữu cơ.",
        s: 5
      },
      {
        q: "Hệ thống truy xuất nguồn gốc (Traceability) của một nhà máy JAS phải có khả năng truy vết theo những chiều nào?",
        c: "Truy xuất hai chiều: Truy ngược về nguồn gốc nông trại và truy xuôi đến các kênh phân phối",
        w: ["Chỉ cần truy xuất ngược về trang trại trồng trọt", "Chỉ cần truy xuất xuôi ra siêu thị bán lẻ", "Chỉ cần lưu tên của tài xế xe tải chở hàng"],
        why: "Truy xuất hữu cơ bắt buộc phải liên kết hai chiều hoàn chỉnh: từ nông trại đến bàn ăn và ngược lại.",
        s: 6
      },
      {
        q: "Hồ sơ nhật ký sản xuất và hoá đơn thương mại của sản phẩm JAS bắt buộc phải lưu trữ tối thiểu bao lâu?",
        c: "Tối thiểu 3 năm",
        w: ["Tối thiểu 6 tháng", "Tối thiểu 1 năm", "Tối thiểu 10 năm"],
        why: "Tiêu chuẩn kỹ thuật JAS quy định thời hạn lưu trữ hồ sơ tối thiểu là 3 năm.",
        s: 7
      },
      {
        q: "Khi nhận được tin báo một lô nước ép hữu cơ xuất sang Nhật bị nhiễm hoá chất tẩy rửa, hành động đầu tiên của QA là gì?",
        c: "Kích hoạt đội phản ứng khẩn cấp, phong toả lô hàng tồn và thông báo cho CB trong 24 giờ",
        w: ["Im lặng giấu kín thông tin chờ xem đối tác Nhật có phát hiện ra hay không", "Nhanh chóng tiêu hủy toàn bộ máy tính và sổ sách trong nhà máy", "Đổ lỗi hoàn toàn cho công ty vận tải đường biển"],
        why: "Quy trình xử lý khủng hoảng yêu cầu phản ứng nhanh: phong tỏa hàng hoá và thông báo minh bạch cho CB trong 24 giờ.",
        s: 8
      },
      {
        q: "Mục đích của việc tổ chức 'Diễn tập thu hồi giả định' (Mock Recall) hàng năm là gì?",
        c: "Kiểm tra và chứng minh hệ thống có khả năng định vị 100% sản phẩm trong thời gian quy định",
        w: ["Để làm quen với việc tiêu hủy hàng hoá khi bị ế ẩm", "Để nhân viên thực hành kỹ năng xin lỗi khách hàng", "Để quay video quảng cáo tiếp thị sản phẩm"],
        why: "Diễn tập thu hồi nhằm kiểm tra tính sẵn sàng và đo lường thời gian truy vết sản phẩm của toàn hệ thống.",
        s: 9
      },
      {
        q: "Thời gian tiêu chuẩn để hoàn thành việc truy xuất và định vị toàn bộ một lô sản phẩm trong cuộc diễn tập là bao lâu?",
        c: "Trong vòng 2 đến 4 giờ làm việc",
        w: ["Trong vòng 24 đến 48 giờ", "Trong vòng 7 ngày làm việc", "Trong vòng 30 ngày"],
        why: "Hệ thống dữ liệu chuẩn mực phải cho phép truy xuất và định vị sản phẩm nhanh chóng trong vòng 2–4 tiếng.",
        s: 9
      },
      {
        q: "Thành phần hao hụt nào sau đây được coi là hao hụt kỹ thuật hợp lý trong chế biến nông sản?",
        c: "Lượng nước bay hơi khi sấy khô và phần cuống rễ tạp chất nhặt bỏ khi sơ chế",
        w: ["Lượng hàng bị công nhân trộm cắp mang về nhà", "Lượng hàng bị chuột cắn nát do không vệ sinh kho bãi", "Lượng hàng bị thất thoát do ghi chép sai số liệu sổ sách"],
        why: "Chỉ các hao hụt vật lý sinh học tự nhiên (nước bay hơi, tạp chất loại bỏ) mới được tính vào định mức BOM kỹ thuật.",
        s: 4
      },
      {
        q: "Khi một lô hàng hữu cơ bị phát hiện không đạt chuẩn, biện pháp xử lý tem nhãn JAS hợp lệ là gì?",
        c: "Bóc bỏ hoặc tiêu hủy con dấu JAS, hạ cấp bán dưới dạng sản phẩm thông thường",
        w: ["Cứ để nguyên con dấu JAS và dán thêm chữ 'giảm giá 50%'", "Chuyển sang dán con dấu hữu cơ của nước khác", "Đem tặng từ thiện nhưng vẫn giữ nguyên con dấu JAS"],
        why: "Khi sản phẩm mất tính toàn vẹn hữu cơ, con dấu JAS phải bị huỷ bỏ và sản phẩm phải bị hạ cấp thành hàng thông thường.",
        s: 8
      },
      {
        q: "Trong 10 điểm vàng sẵn sàng thanh tra, yêu cầu quan trọng nhất đối với nhật ký sản xuất là gì?",
        c: "Ghi chép theo thời gian thực (Real-time), không ghi hồi tố hay chép lại sau nhiều tuần",
        w: ["Chữ viết phải thật nắn nót như chữ in", "Sổ nhật ký phải được bọc bìa da mạ vàng", "Phải dùng bút máy bơm mực tím truyền thống"],
        why: "Nhật ký ghi theo thời gian thực bảo đảm tính trung thực; ghi hồi tố rất dễ để lộ sai sót chắp vá số liệu.",
        s: 11
      },
      {
        q: "Điều gì quyết định giá trị cao và niềm tin của người tiêu dùng đối với sản phẩm mang nhãn JAS?",
        c: "Sự trung thực, tính kỷ luật và sự tuân thủ nghiêm ngặt tiêu chuẩn của toàn chuỗi cung ứng",
        w: ["Bao bì hộp giấy được thiết kế rực rỡ và đắt tiền", "Các chiến dịch quảng cáo rầm rộ trên truyền hình và mạng xã hội", "Mức giá bán đắt gấp mười lần sản phẩm thông thường"],
        why: "Uy tín của nông sản hữu cơ nằm ở sự trung thực và tính toàn vẹn được bảo chứng bởi hệ thống tiêu chuẩn nghiêm ngặt.",
        s: 12
      },
      {
        q: "Sau khi hoàn thành khoá học này, vai trò của bạn với tư cách là nhân viên QA/QC hữu cơ là gì?",
        c: "Người gác cổng chất lượng, duy trì kỷ luật hệ thống và bảo vệ tính toàn vẹn của sản phẩm JAS",
        w: ["Tìm cách lách luật để giảm chi phí sản xuất cho công ty bằng mọi giá", "Chỉ ký giấy tờ khi được ban giám đốc chi trả thêm tiền thưởng", "Bỏ qua các vi phạm nhỏ để giữ quan hệ tốt với đồng nghiệp"],
        why: "QA/QC là người bảo vệ sự trung thực và tính toàn vẹn pháp lý của sản phẩm hữu cơ xuất khẩu.",
        s: 13
      }
    ]
  }
];

// Khai báo mảng MODS thông tin hiển thị các module
var MODS = [
  { file: '01-tong-quan', title: 'Module 1: Tổng quan Hệ thống Chứng nhận JAS Hữu cơ', color: '#059669' },
  { file: '02-canh-tac', title: 'Module 2: Canh tác Nông sản Thực vật Hữu cơ (JAS 1605)', color: '#15803d' },
  { file: '03-vat-tu-nam', title: 'Module 3: Phân bón, Hoá chất Cho Phép & Quy Định Nấm Hữu Cơ', color: '#d97706' },
  { file: '04-che-bien', title: 'Module 4: Chế biến Thực phẩm Hữu cơ (JAS 1606)', color: '#2563eb' },
  { file: '05-ghi-nhan', title: 'Module 5: Quy định Ghi nhãn & Sử dụng Dấu JAS Hữu cơ', color: '#dc2626' },
  { file: '06-tieu-chuan-ky-thuat', title: 'Module 6: Tiêu chuẩn Kỹ thuật Cơ sở Chế biến, Đóng gói & Nhập khẩu', color: '#7c3aed' },
  { file: '07-thanh-tra', title: 'Module 7: Phương pháp Thanh tra & Thẩm tra Chứng nhận JAS', color: '#0891b2' },
  { file: '08-can-doi-khoi-luong', title: 'Module 8: Cân đối Khối lượng, Truy xuất Nguồn gốc & Quản lý Tuân thủ', color: '#ea580c' }
];
