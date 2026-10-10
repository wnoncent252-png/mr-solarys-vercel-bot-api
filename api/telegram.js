if (lower.startsWith('/menu') || lower.startsWith('/help')) {
    if (lower.startsWith('/pair')) {
    const OWNER = process.env.TELEGRAM_OWNER_ID;
    if (!OWNER || String(chatId) !== String(OWNER)) {
      await reply('⛔ Non autorisé.');
      return res.status(200).send('OK');
    }
    const phone = text.split(' ')[1];
    if (!phone) {
      await reply('Usage : /pair <numero> (ex : /pair 509XXXXXXXX)');
      return res.status(200).send('OK');
    }
    if (!WA_API_URL || !WA_API_KEY) {
      await reply("⚠️ Le bot WhatsApp n'est pas configuré.");
      return res.status(200).send('OK');
    }
    try {
      const r = await axios.post(
        `${WA_API_URL}/pair`,
        { phone },
        { headers: { 'x-api-key': WA_API_KEY }, timeout: 20000 }
      );
      await reply('🔑 Code de liaison : ' + r.data.code);
    } catch (e) {
      await reply('❌ Échec : ' + (e.response?.data?.error || e.message));
    }
    return res.status(200).send('OK');
                        }
