window.addEventListener("load", function(){

  //プラグインを定義
  gsap.registerPlugin(ScrollTrigger);

  const area  = document.querySelector(".js-area");
  const items = document.querySelectorAll(".js-item");
  const num   = items.length;

  //位置とscaleを指定
  items.forEach((item, i) => {
    gsap.set(item, {
      zIndex : num - i,
    });
  });
  gsap.set(".js-waku01", {
    scale: 0.9,
  });
  // gsap.set(".js-waku02", {
  //   scale: 0.9,
  // });
  gsap.set(".js-item04", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item05", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item07", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item08", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item09", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item10", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item11", {
    scale: 0, width: "75%", height: "50%", left: "12.5%", top: "25%",
  });
  gsap.set(".js-item06", {
    scale: 0, width: "100%", height: "100%", left: 0, top: 0,
  });

  //タイムライン
  const tl = gsap.timeline({
    scrollTrigger: {
      trigger: area, //トリガー
      start: "top top", //開始位置
      end: "+=4000", //終了位置
      scrub: true, //ピン留め
      pin: true, //スクロール量に応じて動かす
    }
  });

  //要素を順に拡大する
  tl.to(".js-waku01", { scale: 1.2, duration: 0.5},"-=0.5")
    .to(".js-waku01", { opacity: 0, duration: 0.2 }, "-=0.1")
    .to(".js-waku02", { scale: 1.2, duration: 0.5}, "<" )
    .to(".js-item04", { scale: 1, left: "-37.5%", top: "5%", duration: 1 },"-=0.5")
    .to(".js-item04", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item05", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
    .to(".js-item05", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item07", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
    .to(".js-item07", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item08", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
    .to(".js-item08", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item09", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
    .to(".js-item09", { opacity: 0, duratin: 0.2 }, "-=0.2")
    .to(".js-item10", { scale: 1, left: "62.5%", top: "55%", duration: 1 }, "-=0.5")
    .to(".js-item10", { opacity: 0, duration: 0.2 }, "-=0.2")
    .to(".js-item11", { scale: 1, left: "-37.5%", top: "5%", duration: 1 }, "-=0.5")
    .to(".js-item11", { opacity: 0, duratin: 0.2 }, "-=0.2")
    .to(".js-item06", { scale: 1, duration: 1 }, "-=0.5")
});