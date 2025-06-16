export const sendUserDataToWebhook = async (userData: any) => {
  try {
    const response = await fetch('https://api.botuniversity.ru/webhook/45691026-e79c-4408-94fd-f3a25e40b4de', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userData),
    });
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    return await response.json();
  } catch (error) {
    console.error('Error sending user data to webhook:', error);
  }
};