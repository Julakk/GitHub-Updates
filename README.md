# 📡 GitHub-Updates

> Notifikasi otomatis GitHub ke Discord — setiap push, langsung masuk channel.

## Cara Kerja

Setiap kali ada perubahan di repository, bot otomatis kirim notifikasi ke Discord dengan info:
- Nama repository
- Branch yang di-push
- List commit terbaru

## Setup

1. Buka **Settings** repo → **Webhooks** → **Add webhook**
2. Masukkan Discord Webhook URL
3. Content type: `application/json`
4. Pilih event: **Just the push event**
5. Klik **Add webhook**

## Channel

Semua update dari repo **Julakk** masuk ke channel `#github-updates`

---
*Maintained by Julakk · Ahmad Amrullah*
