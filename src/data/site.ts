/** Single source of truth for company contact details and site metadata. */

export const site = {
  domain: "bbawas.com.np",
  url: "https://bbawas.com.np",

  nameNp: "बुढा भूमि आवास सेवा",
  legalNameNp: "बुद्धभूमिसेवा प्राइभेट लिमिटेड",
  shortLegalNameNp: "बुद्धभूमिसेवा प्रा.लि.",
  nameEn: "Budha Bhumi Aawash Sewa",
  legalNameEn: "Buddhabhumisewa Private Limited",

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
