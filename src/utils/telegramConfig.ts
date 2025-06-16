// Configure Telegram WebApp header color
const configureTelegramHeader = () => {
  const webApp = window.Telegram?.WebApp;
  if (!webApp) return;

  const setDarkHeader = () => webApp.setHeaderColor('#000000');

  webApp.onEvent('theme_changed', setDarkHeader);
  setDarkHeader();
};

export default configureTelegramHeader;