function initializeSystem() {
  // 啟動音樂
  const audio = document.getElementById('bgm-audio');
  if (audio) {
    audio.play();
    audio.volume = 0.4;
  }

  // 更改狀態
  const status = document.querySelector('.boot-status');
  status.innerText = "> ACCESSING TSUKUYOMI NODE...";
  status.style.color = "#fff";
  
  // 延遲切換
  setTimeout(function() {
    document.getElementById('boot-screen').style.display = 'none';
    document.getElementById('main-ui').classList.remove('hidden');
  }, 1200);
}