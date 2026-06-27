document.addEventListener("DOMContentLoaded", function () {
  const gnav = document.querySelector(".gnav");
  const hamburger = document.querySelector(".hamburger");
  const links = document.querySelectorAll(".gnav__link");
  const mask = document.querySelector(".header__mask");

  // （メニューが非表示・開く操作
  const openMenu = () => {
    hamburger.setAttribute("aria-expanded", "true");
    hamburger.setAttribute("aria-label", "メニューを閉じる");
    gnav.setAttribute("aria-hidden", "false");
    mask.setAttribute("aria-hidden", "false");
  };

  // （メニューが展開済・閉じる操作）
  const closeMenu = () => {
    hamburger.setAttribute("aria-expanded", "false");
    hamburger.setAttribute("aria-label", "メニューを開く");
    gnav.setAttribute("aria-hidden", "true");
    mask.setAttribute("aria-hidden", "true");
  };

  hamburger.addEventListener("click", () => {
    const expanded = hamburger.getAttribute("aria-expanded");
    if (expanded === "false") {
      openMenu();
    } else {
      closeMenu();
    }
  });

  // リンク
  links.forEach((link) => {
    link.addEventListener("click", () => {
      if (window.innerWidth < 768) {
        closeMenu();
      }
    });
  });

  // マスク
  mask.addEventListener("click", closeMenu);

  //ブレイクポイントをまたいだときの挙動
  const mediaQuery = window.matchMedia("(min-width: 768px)");

  function handleBreakpointChange(event) {
    if (event.matches) {
      // PC用の初期表示
      gnav.setAttribute("aria-hidden", "false");
    } else {
      // SP用の初期表示
      closeMenu();
    }
  }

  // 初期状態の表示を設定
  handleBreakpointChange(mediaQuery);

  // メディアクエリの変更を監視
  mediaQuery.addEventListener("change", handleBreakpointChange);
});
