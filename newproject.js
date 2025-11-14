function init(){
  const canvas = document.getElementById('canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  ctx.fillStyle="#E34C26";
  ctx.beginPath();
  ctx.moveTo(39,250);
  ctx.lineTo(17,0);
  ctx.lineTo(262,0);
  ctx.lineTo(239,250);
  ctx.lineTo(139,278);
  ctx.closePath();
  ctx.fill();
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}