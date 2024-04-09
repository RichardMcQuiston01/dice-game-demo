onmessage = function(d) {
  if (d.data.type !== undefined && d.data.type !== true) {
    switch (d.data.type) {
      case 'GAME_MESSAGE':
        notify.addNotificationToElement(d.data.value);
        break;
      default: break;
    }
  }
}

function pMessage(t,v) { postMessage({type: t, value: v }); }
function gMessage(v) { pMessage('GAME_MESSAGE', v); }