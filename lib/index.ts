window.exports = {
  repeater: {
    mode: 'none',
    args: {
      enter: async () => {
        utools.hideMainWindow();
        const isWindows = utools.isWindows();
        const isMac = utools.isMacOs();
        if (!isMac && !isWindows) {
          utools.showNotification('暂不支持此平台');
          return;
        }
        if (isMac) {
          utools.simulateKeyboardTap('tab');
          utools.simulateKeyboardTap('v', 'command');
          utools.simulateKeyboardTap('enter');
        }
        if (isWindows) {
          utools.simulateKeyboardTap('tab');
          utools.simulateKeyboardTap('tab');
          utools.simulateKeyboardTap('v', 'ctrl');
          utools.simulateKeyboardTap('enter');
        }
      },
    },
  },
};
