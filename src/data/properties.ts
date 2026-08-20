import type { Property } from "../types/property";
import plot1 from "../assets/properties/1.jpg";

/**
 * Mock listings. Most images are https://picsum.photos placeholders with a
 * fixed seed; only the first listing uses a real photo. To swap in real
 * photography, drop files into src/assets/properties/, import them here, and
 * replace the `image` / `gallery` values.
 */
export const properties: Property[] = [
  {
    id: "ghorahi-residential-plot-1",
    title: "उत्कृष्ट आवासीय जग्गा",
    type: "land",
    status: "available",
    location: "घोराही–५, दाङ",
    price: "रु. ४५,००,०००",
    priceValue: 4500000,
    area: "४ आना",
    description:
      "शान्त आवासीय क्षेत्रमा रहेको समथर, सडक छेउको जग्गा, विद्यालय र सहर केन्द्रबाट हिँडेरै पुग्न सकिने दूरीमा।",
    longDescription:
      "घोराही–५ को शान्त र सुरक्षित आवासीय क्षेत्रमा अवस्थित यो जग्गा पूर्ण रूपमा समथर छ र तुरुन्तै घर निर्माण सुरु गर्न मिल्ने अवस्थामा छ। जग्गासम्म पिच सडकको पहुँच छ, बिजुली र खानेपानीको लाइन नजिकै उपलब्ध छ। विद्यालय, स्वास्थ्य चौकी र बजार क्षेत्र हिँडेरै पुग्न सकिने दूरीमा रहेकाले परिवारसहित बसोबास गर्नका लागि निकै उपयुक्त छ। लालपुर्जा स्पष्ट छ र नामसारी प्रक्रिया तुरुन्तै अघि बढाउन सकिन्छ।",
    image: plot1,
    gallery: [
      "https://picsum.photos/seed/bbas-plot-1b/1200/800",
      "https://picsum.photos/seed/bbas-plot-1c/1200/800",
    ],
    specs: [
      { label: "क्षेत्रफल", value: "४ आना" },
      { label: "मोहडा", value: "पूर्व" },
      { label: "बाटो", value: "१२ फिट पिच" },
      { label: "प्रकार", value: "आवासीय जग्गा" },
    ],
    highlights: [
      "पूर्ण समथर, तुरुन्तै निर्माण गर्न मिल्ने",
      "पिच सडकसँग सिधा जोडिएको",
      "बिजुली र खानेपानी नजिकै उपलब्ध",
      "स्पष्ट लालपुर्जा, तुरुन्तै नामसारी",
    ],
    featured: true,
  },
  {
    id: "tulsipur-family-house-1",
    title: "बगैंचा सहितको पारिवारिक घर",
    type: "house",
    status: "available",
    location: "तुलसीपुर–१०, दाङ",
    price: "रु. १,२०,००,०००",
    priceValue: 12000000,
    area: "६ आना | २५०० वर्ग फिट",
    description:
      "निजी बगैंचा, पर्याप्त पार्किङ र राजमार्ग नजिकैको शान्त वातावरणमा रहेको ४ बेडरूमको फराकिलो घर।",
    longDescription:
      "तुलसीपुर–१० मा अवस्थित यो दुई तले घर परिवारका लागि आवश्यक सबै सुविधासहित निर्माण गरिएको हो। भुइँ तलामा फराकिलो बैठक कोठा, भान्सा र भोजन कक्ष छ भने माथिल्लो तलामा ४ वटा बेडरूम र संलग्न बाथरूमहरू छन्। घर वरिपरि राम्रोसँग मिलाइएको निजी बगैंचा र दुई वटा गाडी अटाउने पार्किङ ठाउँ छ। राजमार्गबाट नजिकै भए पनि भित्री भागमा पर्ने भएकाले वातावरण शान्त छ।",
    image: "https://picsum.photos/seed/bbas-house-1/1200/800",
    gallery: [
      "https://picsum.photos/seed/bbas-house-1b/1200/800",
      "https://picsum.photos/seed/bbas-house-1c/1200/800",
    ],
    specs: [
      { label: "बेडरूम", value: "४" },
      { label: "बाथरूम", value: "३" },
      { label: "तला", value: "२" },
      { label: "पार्किङ", value: "२ गाडी" },
    ],
    highlights: [
      "निजी बगैंचा र फराकिलो आँगन",
      "२ गाडी अटाउने पार्किङ",
      "राजमार्ग नजिकै तर शान्त वातावरण",
      "सबै बेडरूममा संलग्न बाथरूम",
    ],
    featured: true,
  },
  {
    id: "lamahi-commercial-land-1",
    title: "चोक नजिकैको व्यावसायिक जग्गा",
    type: "land",
    status: "available",
    location: "लमही, दाङ",
    price: "रु. ८५,००,०००",
    priceValue: 8500000,
    area: "८ आना",
    description:
      "मुख्य राजमार्गमा अवस्थित, पसल वा कार्यालय निर्माणका लागि उपयुक्त उच्च दृश्यता भएको कुनाको जग्गा।",
    longDescription:
      "लमही बजारको मुख्य चोकबाट केही मिनेटको दूरीमा रहेको यो कुनाको जग्गा व्यावसायिक प्रयोजनका लागि निकै उपयुक्त छ। दुई तर्फबाट बाटो जोडिएको हुनाले पसल, कार्यालय वा व्यापारिक भवन निर्माण गर्न सजिलो हुन्छ। राजमार्गमा सिधा मोहडा पर्ने भएकाले ग्राहकको आवागमन उच्च छ।",
    image: "https://picsum.photos/seed/bbas-plot-2/1200/800",
    gallery: ["https://picsum.photos/seed/bbas-plot-2b/1200/800"],
    specs: [
      { label: "क्षेत्रफल", value: "८ आना" },
      { label: "मोहडा", value: "दक्षिण" },
      { label: "बाटो", value: "२० फिट, दुई तर्फ" },
      { label: "प्रकार", value: "व्यावसायिक जग्गा" },
    ],
    highlights: [
      "मुख्य राजमार्गमा सिधा मोहडा",
      "कुनाको जग्गा, दुई तर्फ बाटो",
      "व्यापारिक भवनका लागि उपयुक्त",
      "उच्च ग्राहक आवागमन क्षेत्र",
    ],
  },
  {
    id: "tulsipur-modern-house-1",
    title: "आधुनिक ३ कोठे घर",
    type: "house",
    status: "pending",
    location: "तुलसीपुर–४, दाङ",
    price: "रु. ९५,००,०००",
    priceValue: 9500000,
    area: "३.५ आना | १८०० वर्ग फिट",
    description:
      "मोड्युलर भान्सा, संलग्न शौचालय र छतमा टेरेसयुक्त भर्खरै निर्मित आधुनिक घर।",
    longDescription:
      "भर्खरै निर्माण सम्पन्न भएको यो आधुनिक घरमा मोड्युलर भान्सा, तीन वटा बेडरूम र प्रत्येकमा संलग्न शौचालय छ। छतमा राम्रोसँग मिलाइएको टेरेस छ जहाँबाट वरपरको दृश्य हेर्न सकिन्छ। आधुनिक डिजाइन र गुणस्तरीय निर्माण सामग्री प्रयोग गरिएको छ।",
    image: "https://picsum.photos/seed/bbas-house-2/1200/800",
    gallery: ["https://picsum.photos/seed/bbas-house-2b/1200/800"],
    specs: [
      { label: "बेडरूम", value: "३" },
      { label: "बाथरूम", value: "३" },
      { label: "तला", value: "२" },
      { label: "पार्किङ", value: "१ गाडी" },
    ],
    highlights: [
      "भर्खरै निर्माण सम्पन्न",
      "मोड्युलर भान्सा",
      "छतमा फराकिलो टेरेस",
      "गुणस्तरीय निर्माण सामग्री",
    ],
  },
  {
    id: "rapti-highway-plot-1",
    title: "राप्ती राजमार्ग नजिकैको नदी किनारको जग्गा",
    type: "land",
    status: "available",
    location: "राप्ती राजमार्ग, दाङ",
    price: "रु. ३०,००,०००",
    priceValue: 3000000,
    area: "५ आना",
    description:
      "सजिलो राजमार्ग पहुँच र मनमोहक दृश्यसहितको किफायती जग्गा, विकेन्ड घर वा लगानीका लागि उपयुक्त।",
    longDescription:
      "राप्ती राजमार्गबाट केही मिनेटको दूरीमा रहेको यो जग्गाबाट नदी र वरपरका पहाडको मनमोहक दृश्य देखिन्छ। किफायती मूल्यमा उपलब्ध यो जग्गा विकेन्ड घर निर्माण गर्न वा दीर्घकालीन लगानीका लागि राम्रो विकल्प हो। क्षेत्रमा तीव्र विकास भइरहेकाले भविष्यमा मूल्य वृद्धिको सम्भावना उच्च छ।",
    image: "https://picsum.photos/seed/bbas-plot-3/1200/800",
    gallery: ["https://picsum.photos/seed/bbas-plot-3b/1200/800"],
    specs: [
      { label: "क्षेत्रफल", value: "५ आना" },
      { label: "मोहडा", value: "पश्चिम" },
      { label: "बाटो", value: "१० फिट ग्राभेल" },
      { label: "प्रकार", value: "आवासीय जग्गा" },
    ],
    highlights: [
      "नदी र पहाडको मनमोहक दृश्य",
      "किफायती मूल्य",
      "लगानीका लागि उत्कृष्ट",
      "राजमार्गबाट सजिलो पहुँच",
    ],
  },
  {
    id: "ghorahi-bungalow-1",
    title: "आरामदायी बंगला",
    type: "house",
    status: "available",
    location: "घोराही–२, दाङ",
    price: "रु. ६८,००,०००",
    priceValue: 6800000,
    area: "४ आना | १६०० वर्ग फिट",
    description:
      "आँगनसहितको एक तले बंगला, कम मर्मत आवश्यक पर्ने घर खोज्ने सानो परिवारका लागि उपयुक्त।",
    longDescription:
      "घोराही–२ मा रहेको यो एक तले बंगला सानो परिवारका लागि निकै उपयुक्त छ। फराकिलो आँगन र वरिपरि पर्खालले घेरिएको सुरक्षित परिसर छ। एक तले मात्र भएकाले मर्मत सम्भार सजिलो हुन्छ र वृद्ध सदस्य भएको परिवारका लागि पनि सुविधाजनक छ।",
    image: "https://picsum.photos/seed/bbas-house-3/1200/800",
    gallery: ["https://picsum.photos/seed/bbas-house-3b/1200/800"],
    specs: [
      { label: "बेडरूम", value: "३" },
      { label: "बाथरूम", value: "२" },
      { label: "तला", value: "१" },
      { label: "पार्किङ", value: "१ गाडी" },
    ],
    highlights: [
      "फराकिलो आँगन",
      "पर्खालले घेरिएको सुरक्षित परिसर",
      "कम मर्मत सम्भार",
      "वृद्ध सदस्यका लागि सुविधाजनक",
    ],
  },
];

export const getPropertyById = (id: string) =>
  properties.find((property) => property.id === id);

export const galleryImages = (property: Property) => [
  property.image,
  ...(property.gallery ?? []),
];
