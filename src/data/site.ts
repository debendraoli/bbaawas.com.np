/** Single source of truth for company contact details and site metadata. */

export const site = {
  domain: "bbawas.com.np",
  url: "https://bbawas.com.np",

  /** Brand name, without the entity suffix */
  nameNp: "बुद्धभूमि आवास सेवा",
  /** Full registered name */
  legalNameNp: "बुद्धभूमि आवास सेवा प्राइभेट लिमिटेड",
  /** Abbreviated registered name */
  shortLegalNameNp: "बुद्धभूमि आवास सेवा प्रा.लि.",
  /** Entity suffix on its own — used where the brand name already precedes it */
  entityTypeNp: "प्राइभेट लिमिटेड",
  nameEn: "Buddhabhumi Aawash Sewa",
  legalNameEn: "Buddhabhumi Aawash Sewa Private Limited",

  addressNp: "घोराही–१५, दाङ, नेपाल",
  addressEn: "Ghorahi-15, Dang, Nepal",

  phone: "+9779857846317",
  phoneDisplay: "+९७७ ९८५७८४६३१७",
  email: "buddhabhumiaawashsewa@gmail.com",

  /** wa.me format: country code + number, digits only */
  whatsapp: "9779857846317",
  whatsappMessage: "नमस्ते, म तपाईंका सम्पत्तिहरूको बारेमा जानकारी लिन चाहन्छु।",

  mapQuery: "Ghorahi 15, Dang, Nepal",
} as const;

export const whatsappLink = (message: string = site.whatsappMessage) =>
  `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`;
