function toggleDetails(category) {
  // 모든 카테고리 내용을 감춥니다
  var categoryContents = document.querySelectorAll("#category-contents > div");
  categoryContents.forEach(function (content) {
    content.style.display = "none";
  });

  // 선택한 카테고리에 해당하는 내용을 보여줍니다
  var selectedContent = document.getElementById(category);
  selectedContent.style.display = "block";

  // 모든 카테고리 요소의 스타일을 초기화합니다
  var categories = document.querySelectorAll("#category-box > .category");
  categories.forEach(function (category) {
    category.style.background = "#eeeeee";
  });

  var categories = document.querySelectorAll(
    "#category-box > .category > .category-text"
  );
  categories.forEach(function (category) {
    category.style.color = "#000000";
  });

  // 선택한 카테고리 요소의 스타일을 변경합니다
  var selectedCategory = document.querySelector(
    "#category-box > .category[data-category='" + category + "']"
  );
  selectedCategory.style.background = "#2c98f0";

  // 선택한 카테고리 내부의 category-text 스타일을 변경합니다
  var selectedText = selectedCategory.querySelector(".category-text");
  selectedText.style.color = "#ffffff";
}
