function rewind() {
    const el = document.querySelector('[data-purpose="rewind-skip-button"]')
    el.click();
    }
    function forward() {
    const el = document.querySelector('[data-purpose="forward-skip-button"]')
    el.click();
    }
    function playOrPause() {
    const el = document.querySelector('[data-purpose="pause-button"], [data-purpose="play-button"]')
    el.click();
    }
    navigator.mediaSession.setActionHandler('previoustrack', rewind);
    navigator.mediaSession.setActionHandler('nexttrack', forward);
    navigator.mediaSession.setActionHandler('play', playOrPause);
    navigator.mediaSession.setActionHandler('pause', playOrPause);