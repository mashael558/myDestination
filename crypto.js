// AES-GCM utilities for client-side encryption of sensitive fields stored in localStorage
// Key management: a persistent random 256-bit key is generated once and stored in localStorage (base64)
// Payload format (JSON string): { iv: base64, ct: base64 }

(function () {
  const KEY_STORAGE_KEY = "app_aes_key";
  let cachedCryptoKey = null;

  function getRandomBytes(length) {
    const bytes = new Uint8Array(length);
    crypto.getRandomValues(bytes);
    return bytes;
  }

  function abToBase64(buffer) {
    const bytes = new Uint8Array(buffer);
    let binary = "";
    for (let i = 0; i < bytes.byteLength; i++) {
      binary += String.fromCharCode(bytes[i]);
    }
    return btoa(binary);
  }

  function base64ToAb(base64) {
    const binary = atob(base64);
    const bytes = new Uint8Array(binary.length);
    for (let i = 0; i < binary.length; i++) {
      bytes[i] = binary.charCodeAt(i);
    }
    return bytes.buffer;
  }

  function ensureAppKeyBase64() {
    let b64 = localStorage.getItem(KEY_STORAGE_KEY);
    if (!b64) {
      const rawKey = getRandomBytes(32); // 256-bit
      b64 = abToBase64(rawKey.buffer);
      localStorage.setItem(KEY_STORAGE_KEY, b64);
    }
    return b64;
  }

  async function getAppCryptoKey() {
    if (cachedCryptoKey) return cachedCryptoKey;
    const keyB64 = ensureAppKeyBase64();
    const keyRaw = base64ToAb(keyB64);
    cachedCryptoKey = await crypto.subtle.importKey(
      "raw",
      keyRaw,
      { name: "AES-GCM" },
      false,
      ["encrypt", "decrypt"]
    );
    return cachedCryptoKey;
  }

  async function encryptString(plainText) {
    const enc = new TextEncoder();
    const iv = getRandomBytes(12); // recommended 96-bit IV for GCM
    const key = await getAppCryptoKey();
    const cipherBuffer = await crypto.subtle.encrypt(
      { name: "AES-GCM", iv },
      key,
      enc.encode(plainText)
    );
    const payload = {
      iv: abToBase64(iv.buffer),
      ct: abToBase64(cipherBuffer),
    };
    return JSON.stringify(payload);
  }

  async function decryptString(payloadJson) {
    try {
      const payload = JSON.parse(payloadJson);
      const iv = new Uint8Array(base64ToAb(payload.iv));
      const ctBuffer = base64ToAb(payload.ct);
      const key = await getAppCryptoKey();
      const plainBuffer = await crypto.subtle.decrypt(
        { name: "AES-GCM", iv },
        key,
        ctBuffer
      );
      const dec = new TextDecoder();
      return dec.decode(plainBuffer);
    } catch (e) {
      return null;
    }
  }

  // Expose helpers
  window.AESGCM = {
    encryptString,
    decryptString,
  };
})();


