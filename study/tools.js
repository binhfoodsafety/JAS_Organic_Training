// Logic cho trang Công cụ thực hành JAS Organic
(function () {
  // Tabs switching
  var tabs = document.querySelectorAll('.tabs .tab');
  var panes = document.querySelectorAll('.tab-pane');

  tabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      tabs.forEach(function (t) { t.classList.remove('active'); });
      panes.forEach(function (p) { p.classList.remove('active'); });
      tab.classList.add('active');
      var targetId = 'pane-' + tab.getAttribute('data-tab');
      var targetPane = document.getElementById(targetId);
      if (targetPane) targetPane.classList.add('active');
    });
  });

  // ==========================================
  // 1. CHECKLIST DATA & LOGIC
  // ==========================================
  var farmChecklist = [
    { cat: "1. Đất đai & Chuyển đổi", items: [
      "Thời gian chuyển đổi đạt tối thiểu 2 năm (cây hàng năm) hoặc 3 năm (cây lâu năm).",
      "Có hồ sơ lịch sử sử dụng đất chứng minh không dùng hoá chất cấm trong các năm trước.",
      "Vùng đệm cách ly đủ rộng hoặc có hàng rào cây xanh ngăn trôi dạt thuốc trừ sâu.",
      "Nông sản thu hoạch trên dải đất vùng đệm được cách ly bán thành hàng thông thường."
    ]},
    { cat: "2. Hạt giống & Cây giống", items: [
      "Ưu tiên sử dụng hạt giống từ nguồn cây mẹ đạt chứng nhận hữu cơ.",
      "Nếu dùng giống thường: Có chứng thư cam kết Non-GMO và chưa qua xử lý hoá chất."
    ]},
    { cat: "3. Phân bón & Đất trồng (Bảng 1)", items: [
      "Phân chuồng gia súc được ủ hoai mục hiếu khí triệt để trước khi bón.",
      "Tuyệt đối không sử dụng bùn thải cống rãnh hoặc phân người tươi.",
      "Chỉ dùng các khoáng chất tự nhiên (bột đá vôi, lân tự nhiên) chưa qua xử lý hoá chất."
    ]},
    { cat: "4. Kiểm soát sâu bệnh & cỏ dại (Bảng 2)", items: [
      "Tuyệt đối không sử dụng bất kỳ loại thuốc diệt cỏ hoá học nào trên ruộng.",
      "Chỉ dùng các chế phẩm sinh học (Bt, Trichoderma) và thảo mộc (dầu Neem) trong Bảng 2.",
      "Hợp chất đồng (Booc-đô) được giám sát hàm lượng nguyên chất tránh tích lũy kim loại nặng."
    ]},
    { cat: "5. Thu hoạch & Nhật ký nông hộ", items: [
      "Dụng cụ thu hoạch và sọt chứa sạch sẽ, dán nhãn mã số lô thửa rõ ràng.",
      "Nhật ký canh tác ghi chép theo thời gian thực (ngày làm, vật tư, liều lượng, sản lượng).",
      "Lưu trữ toàn bộ hoá đơn mua vật tư và chứng từ bán hàng tối thiểu 3 năm."
    ]}
  ];

  var factoryChecklist = [
    { cat: "1. Công thức & Tỷ lệ thành phần", items: [
      "Tỷ lệ thành phần nông nghiệp hữu cơ đạt tối thiểu 95% (sau khi trừ nước và muối).",
      "Nguyên liệu phi hữu cơ (dưới 5%) nằm trong danh mục được chấp thuận.",
      "Tất cả nguyên liệu hữu cơ có Giấy chứng nhận (Certificate) còn hiệu lực."
    ]},
    { cat: "2. Công nghệ chế biến & Phụ gia", items: [
      "Tuyệt đối không áp dụng chiếu xạ ion hoá và công nghệ biến đổi gen (Non-GMO).",
      "Chỉ sử dụng phụ gia thực phẩm trong Bảng 1 (Axit citric tự nhiên, Lecithin, Khí Nitơ...).",
      "Chất hỗ trợ chế biến Bảng 2 (than hoạt tính, đất sét) được lọc tách sạch hoàn toàn."
    ]},
    { cat: "3. Dây chuyền & Vệ sinh CIP", items: [
      "Có quy trình làm sạch thiết bị và kiểm tra pH nước tráng về trung tính (pH ≈ 7).",
      "Bắt buộc chạy mẻ xả đầu (Purge batch) và hạ cấp bán hàng thường khi dùng chung máy.",
      "Kiểm soát côn trùng bằng bẫy cơ học/vật lý, tuyệt đối không xịt hoá chất trong xưởng."
    ]},
    { cat: "4. Cơ cấu nhân sự & Phân hạng", items: [
      "Có Người quản lý quy trình sản xuất (PPM) được đào tạo chuyên môn JAS.",
      "Grading Manager độc lập với phòng kinh doanh, có quyền phủ quyết không cấp tem.",
      "Phôi tem nhãn JAS cất giữ trong tủ có khoá, ghi chép sổ cấp phát nghiêm ngặt."
    ]},
    { cat: "5. Cân đối khối lượng & Khẩn cấp", items: [
      "Bảng cân đối Mass Balance khớp tuyệt đối giữa nguyên liệu nhập và sản phẩm xuất.",
      "Có quy trình và đã diễn tập thu hồi sản phẩm (Mock Recall) tối thiểu 1 lần/năm.",
      "Lưu trữ toàn bộ hồ sơ sản xuất, phân hạng và chứng từ thương mại tối thiểu 3 năm."
    ]}
  ];

  var container = document.getElementById('checklist-items');
  var scoreVal = document.getElementById('score-val');
  var scoreStatus = document.getElementById('score-status');
  var scoreAdvice = document.getElementById('score-advice');

  var currentType = 'farm';
  var storageKey = 'jas_checklist_state';

  function loadChecklistState() {
    try { return JSON.parse(localStorage.getItem(storageKey)) || {}; } catch (e) { return {}; }
  }

  function saveChecklistState(state) {
    try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch (e) {}
  }

  function renderChecklist() {
    var list = (currentType === 'farm') ? farmChecklist : factoryChecklist;
    var state = loadChecklistState()[currentType] || {};
    var html = '';

    list.forEach(function (grp, gIdx) {
      html += '<div class="check-cat"><h3>' + grp.cat + '</h3><div class="check-list">';
      grp.items.forEach(function (item, iIdx) {
        var key = 'item_' + gIdx + '_' + iIdx;
        var checked = state[key] ? ' checked' : '';
        html += '<label class="check-item"><input type="checkbox" data-key="' + key + '"' + checked + '> <span>' + item + '</span></label>';
      });
      html += '</div></div>';
    });

    container.innerHTML = html;

    // Attach listeners
    var inputs = container.querySelectorAll('input[type="checkbox"]');
    inputs.forEach(function (inp) {
      inp.addEventListener('change', function () {
        var st = loadChecklistState();
        if (!st[currentType]) st[currentType] = {};
        st[currentType][inp.getAttribute('data-key')] = inp.checked;
        saveChecklistState(st);
        updateScore();
      });
    });

    updateScore();
  }

  function updateScore() {
    var inputs = container.querySelectorAll('input[type="checkbox"]');
    var total = inputs.length;
    var checked = 0;
    inputs.forEach(function (inp) { if (inp.checked) checked++; });

    var pct = total > 0 ? Math.round((checked / total) * 100) : 0;
    scoreVal.textContent = pct + '%';

    if (pct === 100) {
      scoreStatus.textContent = '🎉 Tuyệt Vời: Sẵn Sàng 100% Đón Đoàn Thanh Tra!';
      scoreAdvice.textContent = 'Cơ sở của bạn đã đáp ứng toàn diện các tiêu chí cốt lõi của JAS. Hãy tự tin tiến hành đánh giá!';
      scoreVal.style.color = '#10b981';
    } else if (pct >= 80) {
      scoreStatus.textContent = '👍 Khá Tốt: Đạt Mức Sẵn Sàng Cao (' + checked + '/' + total + ' tiêu chí)';
      scoreAdvice.textContent = 'Chỉ còn một vài điểm nhỏ cần hoàn tất. Hãy rà soát lại các mục chưa tích để đạt chuẩn tuyệt đối.';
      scoreVal.style.color = '#3b82f6';
    } else if (pct >= 50) {
      scoreStatus.textContent = '⚠️ Cần Cải Thiện: Có Rủi Ro Khi Thanh Tra (' + checked + '/' + total + ' tiêu chí)';
      scoreAdvice.textContent = 'Còn nhiều lỗ hổng trong hệ thống tài liệu hoặc hiện trường. Cần tập trung khắc phục ngay các điểm thiếu sót.';
      scoreVal.style.color = '#f59e0b';
    } else {
      scoreStatus.textContent = '❌ Chưa Đạt: Nguy Cơ Không Đạt Chứng Nhận Rất Cao';
      scoreAdvice.textContent = 'Hệ thống chưa hoàn thiện các quy chuẩn bắt buộc của JAS. Hãy đào tạo lại nhân sự và rà soát từng SOP.';
      scoreVal.style.color = '#ef4444';
    }
  }

  // Radio listener
  var radios = document.querySelectorAll('input[name="facility_type"]');
  radios.forEach(function (r) {
    r.addEventListener('change', function () {
      currentType = r.value;
      renderChecklist();
    });
  });

  renderChecklist();

  // ==========================================
  // 2. CALCULATOR LOGIC
  // ==========================================
  var inpOrg = document.getElementById('inp-org');
  var inpNon = document.getElementById('inp-non');
  var inpWater = document.getElementById('inp-water');
  var inpSalt = document.getElementById('inp-salt');
  var resOrg = document.getElementById('res-organic');

  function calcOrganicPct() {
    var org = parseFloat(inpOrg.value) || 0;
    var non = parseFloat(inpNon.value) || 0;
    var water = parseFloat(inpWater.value) || 0;
    var salt = parseFloat(inpSalt.value) || 0;

    var denom = org + non; // nước và muối bị loại trừ khỏi phép tính
    var pct = denom > 0 ? (org / denom) * 100 : 0;
    var pctFixed = pct.toFixed(2);

    var html = '<div class="calc-box">';
    html += '<div class="calc-row"><span>Khối lượng nguyên liệu tính % (đã trừ nước & muối):</span> <b>' + denom.toFixed(2) + ' kg/g</b></div>';
    html += '<div class="calc-row"><span>Tỷ lệ thành phần hữu cơ:</span> <b class="big-val">' + pctFixed + '%</b></div>';

    if (pct >= 95) {
      html += '<div class="badge-status success">✅ ĐỦ ĐIỀU KIỆN DÁN TEM ORGANIC JAS (≥ 95%)</div>';
      html += '<p class="advice">Sản phẩm được mang danh hiệu "Thực phẩm Chế biến Hữu cơ" và được in/dán biểu trưng Dấu JAS Hữu cơ kèm tên Tổ chức CB.</p>';
    } else if (pct >= 70) {
      html += '<div class="badge-status warn">⚠️ KHÔNG ĐƯỢC DÁN TEM JAS — CHỈ ĐƯỢC GHI TỶ LỆ (70% - 94,9%)</div>';
      html += '<p class="advice">Tuyệt đối KHÔNG in dấu JAS lên mặt trước. Chỉ được ghi tỷ lệ thành phần cụ thể ở mặt sau (VD: "Sản phẩm chứa ' + Math.floor(pct) + '% nguyên liệu hữu cơ").</p>';
    } else {
      html += '<div class="badge-status danger">❌ DƯỚI 70% HỮU CƠ — CẤM GỌI LÀ SẢN PHẨM HỮU CƠ</div>';
      html += '<p class="advice">Cấm dán tem JAS và cấm dùng từ hữu cơ trong tên sản phẩm. Chỉ được ghi chữ hữu cơ trong ngoặc đơn cạnh đúng tên thành phần đó.</p>';
    }
    html += '</div>';

    resOrg.innerHTML = html;
  }

  [inpOrg, inpNon, inpWater, inpSalt].forEach(function (inp) {
    inp.addEventListener('input', calcOrganicPct);
  });
  calcOrganicPct();

  // Mass Balance Calculator
  var mbInput = document.getElementById('mb-input');
  var mbRatio = document.getElementById('mb-ratio');
  var mbLoss = document.getElementById('mb-loss');
  var mbPack = document.getElementById('mb-pack');
  var mbActual = document.getElementById('mb-actual');
  var resMass = document.getElementById('res-massbalance');

  function calcMassBalance() {
    var raw = parseFloat(mbInput.value) || 0;
    var ratio = parseFloat(mbRatio.value) || 1;
    var lossPct = parseFloat(mbLoss.value) || 0;
    var packG = parseFloat(mbPack.value) || 1;
    var actualPacks = parseFloat(mbActual.value) || 0;

    // Tính sản lượng lý thuyết sau sấy/chế biến
    var afterProcess = ratio > 0 ? (raw / ratio) : 0;
    // Sau hao hụt đóng gói
    var finalNetKg = afterProcess * (1 - (lossPct / 100));
    // Số gói tối đa
    var packKg = packG / 1000;
    var maxPacks = packKg > 0 ? Math.floor(finalNetKg / packKg) : 0;

    var diff = actualPacks - maxPacks;

    var html = '<div class="calc-box">';
    html += '<div class="calc-row"><span>Bán thành phẩm sau chế biến (tỷ lệ ' + ratio + ':1):</span> <b>' + afterProcess.toFixed(1) + ' kg</b></div>';
    html += '<div class="calc-row"><span>Khối lượng thành phẩm (sau hao hụt ' + lossPct + '%):</span> <b>' + finalNetKg.toFixed(1) + ' kg</b></div>';
    html += '<div class="calc-row"><span>Số hộp tối đa được phép xuất xưởng:</span> <b class="big-val">' + maxPacks.toLocaleString('vi-VN') + ' hộp</b></div>';
    html += '<div class="calc-row"><span>Số hộp thực tế khai báo xuất xưởng:</span> <b>' + actualPacks.toLocaleString('vi-VN') + ' hộp</b></div>';

    if (diff > 0) {
      html += '<div class="badge-status danger">🚨 CẢNH BÁO: XUẤT THỪA BẤT THƯỜNG ' + diff.toLocaleString('vi-VN') + ' HỘP (LỖI MAJOR/CRITICAL)</div>';
      html += '<p class="advice">Số hộp thực tế vượt quá lượng nguyên liệu nhập kho. Thanh tra viên sẽ nghi ngờ có hành vi gian lận mua hàng thông thường ngoài thị trường vào trà trộn dán tem JAS!</p>';
    } else if (diff === 0) {
      html += '<div class="badge-status success">✅ CÂN ĐỐI HOÀN HẢO (100% Khớp định mức)</div>';
      html += '<p class="advice">Số liệu mẻ sản xuất hoàn toàn khớp với định mức BOM kỹ thuật đã phê duyệt.</p>';
    } else {
      var under = Math.abs(diff);
      html += '<div class="badge-status success">✅ HỢP LỆ: Tồn kho hoặc hao hụt thực tế cao hơn (Hụt ' + under.toLocaleString('vi-VN') + ' hộp)</div>';
      html += '<p class="advice">Số hộp xuất xưởng nhỏ hơn mức tối đa cho phép. Hãy ghi nhận số chênh lệch này vào báo cáo tồn kho hoặc tăng tỷ lệ hao hụt thực tế.</p>';
    }
    html += '</div>';

    resMass.innerHTML = html;
  }

  [mbInput, mbRatio, mbLoss, mbPack, mbActual].forEach(function (inp) {
    inp.addEventListener('input', calcMassBalance);
  });
  calcMassBalance();

})();
