import acupuncture from "../assets/acupuncture.jpg"
import acupressure from "../assets/acupressure.jpg"
import PanchagavyaChikitsa from "../assets/PanchagavyaChikitsa.jpg"
import SujokTherapy from "../assets/sujok therapy.jpg"
import cuppingTherapy from "../assets/cupping therapy.jpg"
import auricularTherapy from "../assets/auricular therapy.jpg"
import haircare from "../assets/haircare.jpeg"
import physiotherapy from "../assets/physiotherapy.jpeg";
import hydra from "../assets/hydra.jpeg";
import cosmetic from "../assets/ayrvedic_cosmetics.jpeg"

export const services = [
  {
    id: 'acupuncture',
    name: 'Acupuncture',
    shortDescription: 'Ancient Chinese therapy using fine needles to stimulate specific points on the body for healing and pain relief.',
    fullDescription: 'Acupuncture is a time-tested healing practice from Traditional Chinese Medicine that has been used for over 2,500 years. By inserting ultra-fine, sterile needles at specific points along the body\'s energy pathways (meridians), acupuncture helps restore balance and promote natural healing. This therapy is particularly effective for managing chronic pain, reducing stress and anxiety, improving sleep quality, and enhancing overall wellness. The treatment works by stimulating the nervous system, releasing endorphins, and improving blood circulation. Our certified acupuncturists create personalized treatment plans tailored to your specific health concerns and goals.',
    image: acupuncture ,
    benefits: [
      'Relieves chronic and acute pain',
      'Reduces stress and anxiety',
      'Improves sleep quality',
      'Boosts immune system function',
      'Enhances energy and vitality'
    ]
  },
  {
    id: 'acupressure',
    name: 'Acupressure',
    shortDescription: 'Non-invasive healing technique using finger pressure on specific body points to restore energy flow and promote wellness.',
    fullDescription: 'Acupressure is a gentle yet powerful healing modality that shares the same principles as acupuncture but uses firm finger pressure instead of needles. This makes it ideal for those who prefer a non-invasive approach to healing. By applying pressure to specific points along the body\'s meridian system, acupressure helps release blocked energy, reduce muscle tension, and stimulate the body\'s natural self-healing abilities. This therapy is excellent for managing headaches, digestive issues, menstrual discomfort, and stress-related conditions. Sessions are deeply relaxing and can be learned for self-care practice at home.',
    image: acupressure,
    benefits: [
      'Relieves tension and muscle stiffness',
      'Reduces headaches and migraines',
      'Improves digestion and circulation',
      'Promotes deep relaxation',
      'Can be practiced for self-care'
    ]
  },
  {
    id: 'panchagavya-chikitsa',
    name: 'Panchagavya Chikitsa',
    shortDescription: 'Traditional Ayurvedic therapy using five sacred cow products for detoxification and rejuvenation.',
    fullDescription: 'Panchagavya Chikitsa is an ancient Ayurvedic healing system that harnesses the therapeutic properties of five sacred products derived from the cow: milk, ghee, curd, urine, and dung. This holistic therapy is deeply rooted in Indian traditional medicine and is renowned for its detoxifying, rejuvenating, and immune-boosting properties. The treatment involves carefully prepared formulations used internally and externally to cleanse the body of toxins, balance the doshas (Vata, Pitta, Kapha), and restore optimal health. Panchagavya therapy is particularly beneficial for chronic conditions, digestive disorders, skin issues, and overall vitality enhancement. Our practitioners follow authentic Ayurvedic protocols to ensure safe and effective treatment.',
    image: PanchagavyaChikitsa,
    benefits: [
      'Detoxifies the body naturally',
      'Boosts immunity and vitality',
      'Balances digestive system',
      'Improves skin health',
      'Supports chronic disease management'
    ]
  },
  {
    id: 'sujok-therapy',
    name: 'Sujok Therapy',
    shortDescription: 'Korean hand therapy using pressure points on hands and feet to treat various ailments without medication.',
    fullDescription: 'Sujok Therapy is an innovative Korean healing system that recognizes the hands and feet as microsystems representing the entire body. "Su" means hand and "Jok" means foot in Korean. This remarkable therapy uses various tools including seeds, magnets, moxas, and colored lights to stimulate corresponding points on the hands and feet, providing relief for a wide range of health conditions. The beauty of Sujok lies in its simplicity, safety, and effectiveness - it can provide immediate relief for acute conditions while also addressing chronic health issues. No medications or invasive procedures are required, making it suitable for all ages. Our therapists will teach you simple techniques for self-treatment at home.',
    image: SujokTherapy,
    benefits: [
      'Quick relief from acute pain',
      'No side effects or medications',
      'Treats multiple conditions simultaneously',
      'Easy self-treatment techniques',
      'Suitable for all age groups'
    ]
  },
  {
    id: 'cupping-therapy',
    name: 'Cupping Therapy',
    shortDescription: 'Ancient healing practice using suction cups to improve circulation, reduce pain, and release muscle tension.',
    fullDescription: 'Cupping Therapy is an ancient healing technique used across various cultures for thousands of years. The practice involves placing special cups on the skin to create suction, which helps increase blood flow, reduce inflammation, and release deep muscle tension. Modern cupping uses either heat or mechanical pumps to create the vacuum effect. This therapy is highly effective for treating muscle pain, sports injuries, respiratory conditions, and promoting detoxification. The suction draws stagnant blood and toxins to the surface, where they can be processed and eliminated by the body. While temporary circular marks may appear, they are painless and indicate the release of stagnation. Athletes and celebrities worldwide have embraced cupping for its remarkable benefits in recovery and pain management.',
    image: cuppingTherapy,
    benefits: [
      'Relieves muscle pain and stiffness',
      'Improves blood circulation',
      'Reduces inflammation',
      'Aids in detoxification',
      'Accelerates injury recovery'
    ]
  },
  {
    id: 'auricular-acupuncture',
    name: 'Auricular (Ear) Acupuncture',
    shortDescription: 'Specialized acupuncture focusing on ear points that correspond to different body organs and systems.',
    fullDescription: 'Auricular Acupuncture, also known as ear acupuncture, is a specialized form of acupuncture based on the principle that the ear is a microsystem reflecting the entire body. The outer ear contains over 200 acupuncture points that correspond to specific organs, body parts, and functions. By stimulating these points with fine needles or ear seeds (small adhesive pellets), practitioners can effectively treat a wide range of conditions including addiction, anxiety, insomnia, weight management, and pain disorders. This therapy gained recognition through its successful use in addiction treatment programs and is now widely used for stress management and smoking cessation. The treatment is relatively painless, and ear seeds can be left in place for continued stimulation between sessions.',
    image: auricularTherapy,
    benefits: [
      'Effective for addiction treatment',
      'Manages anxiety and stress',
      'Supports weight loss efforts',
      'Improves sleep quality',
      'Helps with smoking cessation'
    ]
  },
  {
    id: 'reflexology',
    name: 'Reflexology',
    shortDescription: 'Therapeutic foot massage technique targeting reflex points that correspond to organs and body systems.',
    fullDescription: 'Reflexology is a deeply relaxing therapeutic practice that works on the principle that specific points on the feet, hands, and ears correspond to different organs and systems throughout the body. By applying precise pressure to these reflex points, reflexologists can help reduce stress, improve circulation, stimulate nerve function, and promote the body\'s natural healing processes. The feet contain over 7,000 nerve endings, making them highly sensitive to touch therapy. A reflexology session not only addresses specific health concerns but also provides profound relaxation and stress relief. Regular treatments can help maintain overall wellness, boost immunity, and prevent illness. This gentle yet effective therapy is suitable for people of all ages and can complement other medical treatments.',
    image: "https://tinyurl.com/mr2587df",
    benefits: [
      'Reduces stress and tension',
      'Improves circulation and nerve function',
      'Promotes better sleep',
      'Supports detoxification',
      'Enhances overall well-being'
    ]
  },
  {
    id: 'color-numerology',
    name: 'Color & Numerology Therapy',
    shortDescription: 'Holistic healing using the vibrational power of colors and numbers to balance energy and enhance life.',
    fullDescription: 'Color and Numerology Therapy combines two powerful vibrational healing modalities to create balance and harmony in your life. Color therapy (chromotherapy) uses the energy of different colors to influence mood, health, and well-being. Each color vibrates at a specific frequency that can affect our physical, emotional, and spiritual states. Numerology reveals the hidden meanings and influences of numbers in your life, including your birth date and name, to provide insights into your personality, life path, and potential. Together, these therapies help identify imbalances and provide personalized recommendations for colors to wear, surround yourself with, and numbers to focus on for optimal health and success. Our practitioners create individualized healing plans incorporating color meditation, visualization, and numerological guidance.',
    image: 'https://tinyurl.com/5ykk59z2',
    benefits: [
      'Balances emotional and mental states',
      'Enhances personal awareness',
      'Improves decision-making',
      'Promotes spiritual growth',
      'Attracts positive energy and opportunities'
    ]
  },
  {
    id: 'face-yoga',
    name: 'Face Yoga',
    shortDescription: 'Natural facial exercise program to tone muscles, reduce wrinkles, and achieve a youthful, radiant appearance.',
    fullDescription: 'Face Yoga is a natural, non-invasive alternative to cosmetic procedures that uses targeted facial exercises and massage techniques to tone and lift facial muscles, reduce the appearance of wrinkles, and promote a healthy, youthful glow. Just as yoga tones and strengthens the body, face yoga works on the 57 muscles in the face and neck to improve circulation, boost collagen production, and enhance skin elasticity. Regular practice can reduce puffiness, minimize fine lines, sculpt facial contours, and create a natural lifting effect. Our certified face yoga instructors teach you specific exercises, acupressure points, and relaxation techniques that you can practice daily at home. This holistic approach not only improves your appearance but also reduces facial tension and promotes overall well-being.',
    image: 'https://tinyurl.com/56dsw76a',
    benefits: [
      'Reduces wrinkles and fine lines',
      'Tones and lifts facial muscles',
      'Improves skin elasticity and glow',
      'Reduces puffiness and dark circles',
      'Natural alternative to cosmetic procedures'
    ]
  },
  {
    id: 'hair-care',
    name: 'Hair Care',
    shortDescription: 'Holistic hair treatment programs combining traditional therapies and natural remedies for healthy, vibrant hair.',
    fullDescription: 'Our comprehensive Hair Care program takes a holistic approach to addressing hair and scalp concerns, combining traditional Ayurvedic wisdom with modern understanding of hair health. We recognize that healthy hair reflects overall body wellness, so our treatments address both internal and external factors. Our program includes therapeutic head massages with herbal oils, customized herbal hair packs, scalp treatments, and dietary guidance to nourish hair from within. We treat various conditions including hair fall, premature graying, dandruff, dry and damaged hair, and scalp disorders. Using natural ingredients like amla, bhringraj, neem, and coconut oil, along with therapeutic techniques, we help restore your hair\'s natural strength, shine, and vitality. Regular treatments not only improve hair health but also provide deep relaxation and stress relief.',
    image: haircare,
    benefits: [
      'Reduces hair fall and promotes growth',
      'Treats scalp conditions naturally',
      'Restores shine and strength',
      'Prevents premature graying',
      'Deeply relaxing and stress-relieving'
    ]
  },
  {
    id: 'pain-management',
    name: 'Pain Management',
    shortDescription: 'Integrated approach combining multiple therapies to effectively manage acute and chronic pain without medication.',
    fullDescription: 'Our Pain Management program offers a comprehensive, drug-free approach to treating both acute and chronic pain conditions. We understand that pain affects every aspect of life, and our goal is to provide lasting relief while addressing the root causes. Our integrated approach combines acupuncture, acupressure, cupping therapy, massage, and other proven modalities tailored to your specific condition. We successfully treat various pain conditions including back pain, neck pain, arthritis, sciatica, fibromyalgia, sports injuries, headaches, and post-surgical pain. Each treatment plan is personalized based on a thorough assessment of your pain type, location, and underlying factors. Our practitioners work with you to not only relieve pain but also improve mobility, function, and quality of life. Many patients find significant relief without the side effects associated with pain medications.',
    image: 'https://tinyurl.com/y9knt46d',
    benefits: [
      'Drug-free pain relief',
      'Treats root causes, not just symptoms',
      'Improves mobility and function',
      'No side effects',
      'Personalized treatment approach'
    ]
  },
  {
    id: 'weight-loss-management',
    name: 'Weight Loss Management',
    shortDescription: 'Holistic weight management program combining traditional therapies, nutrition guidance, and lifestyle coaching.',
    fullDescription: 'Our Weight Loss Management program takes a holistic approach to achieving and maintaining healthy weight, addressing the physical, emotional, and lifestyle factors that influence body composition. Unlike crash diets or quick fixes, our program focuses on sustainable, long-term results through a combination of acupuncture for metabolism boosting and appetite regulation, auricular therapy for craving control, personalized nutrition guidance based on your body type and lifestyle, stress management techniques, and exercise recommendations. We use Ayurvedic principles to identify your unique constitution (dosha) and create a customized plan that works with your body\'s natural tendencies. Our approach also addresses emotional eating, hormonal imbalances, and digestive issues that may be hindering weight loss. Regular support and monitoring ensure you stay motivated and make steady progress toward your goals while improving overall health and vitality.',
    image: 'https://tinyurl.com/2ku5nrzm',
    benefits: [
      'Sustainable, long-term weight loss',
      'Boosts metabolism naturally',
      'Reduces cravings and emotional eating',
      'Personalized to your body type',
      'Improves overall health and energy'
    ]
  },
  {
    id: 'physiotherapy',
    name: 'Physiotherapy',
    shortDescription: 'Physiotherapy is a healthcare service that focuses on restoring movement, reducing pain, and improving physical strength and flexibility',
    fullDescription: 'Physiotherapy is a science-driven healthcare practice dedicated to improving movement, physical function, and overall well-being. It focuses on restoring mobility, strength, flexibility, and coordination through evidence-based techniques. Treatment may include manual therapy, therapeutic exercises, electrotherapy, dry needling, and rehabilitation modalities depending on the patient’s needs. Physiotherapists thoroughly assess posture, muscle imbalance, pain points, and movement patterns before creating a personalized recovery plan. It helps individuals recover from injuries, surgeries, neurological conditions, sports strain, and chronic pain disorders. Physiotherapy also plays a preventive role by improving body mechanics and reducing the risk of future injuries. Beyond pain relief, it supports long-term physical health, independence, confidence, and enhanced quality of life',
    image: physiotherapy,
    benefits: [
      'Pain Relief',
      'Improved Mobility',
      'Faster Recovery',
      'Avoids or Delays Surgery',
      'Helps Manage Chronic Conditions'
    ]
  },
  {
    id: 'hydra-facial',
    name: 'Hydra Facial',
    shortDescription: 'HydraFacial is a gentle yet highly effective treatment that deeply cleanses, exfoliates, removes impurities, and hydrates the skin in one session. With its advanced vortex technology, it delivers glowing, refreshed skin without irritation—making it suitable even for sensitive skin',
    fullDescription: 'HydraFacial is one of the most advanced and popular skincare treatments because it offers a complete solution for almost every skin concern in a single session. It works through a unique technology that simultaneously cleanses the skin, exfoliates dead cells, removes impurities, and deeply hydrates the layers beneath the surface. Unlike traditional facials, which depend on manual extraction and can sometimes cause irritation, HydraFacial uses a controlled vortex suction that is gentle yet highly effective in clearing clogged pores, removing blackheads, and purifying the skin. The treatment feels soothing, cooling, and relaxing, making it suitable even for sensitive or easily irritated skin.',
    image: hydra,
    benefits: [
      'Deep Cleansing of Skin',
      'Exfoliates Dead Skin',
      'Instant Hydration',
      'Reduces Acne & Breakouts',
      'Improves overall health and energy',
      'Anti-Aging Benefits'
    ]
  },
  {
    id: 'ayurvedic-cosmetics',
    name: 'Ayurvedic Cosmetics',
    shortDescription: 'Ayurvedic cosmetics are nature-derived skincare solutions that work holistically to enhance beauty from within',
    fullDescription: 'Ayurvedic cosmetics are natural skincare formulations rooted in the ancient science of Ayurveda, designed to nurture beauty from within through the balance of mind, body, and spirit. Derived from nature’s purest resources—herbs, flowers, fruits, minerals, and essential oils—these products harness the therapeutic power of botanicals to restore and maintain the skin’s natural vitality. Each formulation is carefully crafted based on traditional Ayurvedic principles, which emphasize harmony among the three doshas (Vata, Pitta, and Kapha) to achieve holistic wellness and radiant beauty',
    image: cosmetic,
    benefits: [
      'Deep herbal nourishment for skin',
      'Natural exfoliation & glow enhancement',
      'Boosts hydration and moisture retention',
      'Supports anti-aging and skin renewal',
      'Reduces acne, blemishes, and pigmentation',
      'Chemical-free & suitable for sensitive skin'
    ]
  }
];
