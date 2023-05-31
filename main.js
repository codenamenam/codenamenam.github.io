function toggleDetails(category) {
  // 모든 카테고리 내용을 감춥니다
  var categoryContents = document.querySelectorAll("#category-contents > div");
  categoryContents.forEach(function (content) {
    content.style.display = "none";
  });

  // 선택한 카테고리에 해당하는 내용을 보여줍니다
  var selectedContent = document.getElementById(category);
  selectedContent.style.display = "block";
}

/*
  var categories = document.getElementById("category-box");
  var categor = categories.getElementById(category);
  categor.style.background = "#2C98F0";
  */
