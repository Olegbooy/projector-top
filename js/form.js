const botToken = '8169154167:AAEnl9E9Li9EPCyJkpLsQ9wSivLIshIFBtk';
const chatId = '-1002251219859';  


const forms = document.querySelectorAll('.telegramForm');
  forms.forEach(form => {
    form.addEventListener('submit', async function (e) {
      e.preventDefault();

      const formData = new FormData(e.target);
      const name = formData.get('name');
      const email = formData.get('phone');

      const text = `Нова заявка з форми:\n\nІм'я: ${name}\n Номер: ${email}`;

      try {
        const response = await axios.post(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          chat_id: chatId,
          text: text,
          parse_mode: 'HTML'
        });

        if (response.status === 200) {
          document.getElementById('responseMessage').innerText = 'Заявку успішно надіслано до Telegram';
          alert('Заявка успішно відправленна!')
        } else {
          throw new Error('Заявка успішно відправленна!');
        }
      } catch (error) {
        alert('Заявка успішно відправленна!')
      }
    });
  });
