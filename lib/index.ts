window.exports = {
  repeater: {
    mode: 'none',
    args: {
      enter: async () => {
        utools.hideMainWindow();
        utools.simulateKeyboardTap('tab');
        utools.simulateKeyboardTap('v', 'command');
        utools.simulateKeyboardTap('enter');
      },
    },
  },
};
