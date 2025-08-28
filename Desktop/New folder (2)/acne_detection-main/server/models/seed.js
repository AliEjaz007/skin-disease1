// const mongoose = require('mongoose');
// const Disease = require('./Disease');

// const diseaseInfoMap = {
//   'BA-Cellulitis': {
//     description: 'Cellulitis is a bacterial skin infection caused by Streptococcus or Staphylococcus bacteria, leading to redness, swelling, warmth, and pain in the affected area. It often occurs when bacteria enter through a cut, scrape, or insect bite, and may spread to deeper tissues if untreated.',
//     remedies: [
//       'Consult a healthcare provider for oral or intravenous antibiotics (e.g., penicillin, cephalexin).',
//       'Keep the affected area clean and elevated to reduce swelling.',
//       'Apply warm compresses to soothe discomfort and promote circulation.',
//       'Use over-the-counter pain relievers (e.g., ibuprofen) for pain and inflammation.'
//     ],
//     dietPlan: [
//       'Consume vitamin C-rich foods (e.g., oranges, strawberries, bell peppers) to boost immunity.',
//       'Include zinc-rich foods (e.g., nuts, seeds, legumes) to support wound healing.',
//       'Eat probiotic-rich foods (e.g., yogurt, kefir) to promote gut health and immunity.',
//       'Stay hydrated with water and avoid sugary drinks to support recovery.'
//     ]
//   },
//   'BA-Impetigo': {
//     description: 'Impetigo is a highly contagious bacterial skin infection, primarily caused by Staphylococcus aureus or Streptococcus pyogenes. It is common in children and presents as red sores or blisters that rupture, ooze, and form a honey-colored crust, often around the mouth or nose.',
//     remedies: [
//       'Apply prescribed topical antibiotics (e.g., mupirocin ointment) to affected areas.',
//       'Take oral antibiotics (e.g., amoxicillin) for severe or widespread cases, as prescribed.',
//       'Keep the affected area clean with mild soap and water, and cover with sterile gauze.',
//       'Avoid scratching or touching sores to prevent spreading the infection.'
//     ],
//     dietPlan: [
//       'Eat protein-rich foods (e.g., lean meats, eggs, beans) to support tissue repair.',
//       'Incorporate vitamin A-rich foods (e.g., carrots, sweet potatoes) for skin health.',
//       'Include foods with antimicrobial properties (e.g., garlic, turmeric) to aid recovery.',
//       'Avoid sharing utensils or food to prevent spreading the infection.'
//     ]
//   },
//   'FU-Athlete-Foot': {
//     description: 'Athlete’s Foot, or Tinea Pedis, is a fungal infection caused by dermatophytes, typically affecting the skin between the toes. It causes itching, burning, scaling, and sometimes painful cracks, often triggered by warm, moist environments like sweaty shoes.',
//     remedies: [
//       'Apply over-the-counter antifungal creams or sprays (e.g., clotrimazole, terbinafine).',
//       'Keep feet clean and dry, especially between the toes, and change socks frequently.',
//       'Use antifungal powder in shoes to reduce moisture and fungal growth.',
//       'Avoid tight, non-breathable footwear and wear sandals in public showers or pools.'
//     ],
//     dietPlan: [
//       'Consume probiotic-rich foods (e.g., yogurt, kimchi) to support a healthy microbiome.',
//       'Include foods with antifungal properties (e.g., coconut oil, garlic).',
//       'Reduce sugar and refined carbohydrate intake, as they can promote fungal growth.',
//       'Stay hydrated to support overall skin health.'
//     ]
//   },
//   'FU-Nail-Fungus': {
//     description: 'Nail Fungus, or Onychomycosis, is a fungal infection affecting the toenails or fingernails, caused by dermatophytes, yeasts, or molds. It leads to thickened, discolored, brittle, or crumbling nails, often accompanied by mild discomfort.',
//     remedies: [
//       'Use prescribed antifungal nail lacquers (e.g., ciclopirox) or oral antifungals (e.g., terbinafine).',
//       'Keep nails trimmed, clean, and dry to prevent fungal spread.',
//       'Apply over-the-counter antifungal creams to surrounding skin if affected.',
//       'Avoid sharing nail clippers and wear breathable footwear to reduce moisture.'
//     ],
//     dietPlan: [
//       'Eat foods with antifungal properties (e.g., garlic, oregano, coconut oil).',
//       'Include zinc-rich foods (e.g., pumpkin seeds, chickpeas) to support nail health.',
//       'Reduce sugar and processed foods to limit fungal growth.',
//       'Stay hydrated and consume a balanced diet to strengthen immunity.'
//     ]
//   },
//   'FU-Ringworm': {
//     description: 'Ringworm, or Tinea Corporis, is a fungal infection caused by dermatophytes, presenting as a circular, red, scaly rash with a clear center, resembling a ring. It is contagious and can spread through skin contact or contaminated objects.',
//     remedies: [
//       'Apply over-the-counter antifungal creams (e.g., clotrimazole, miconazole) to the affected area.',
//       'Keep the area clean and dry, and avoid sharing towels or clothing.',
//       'Wash bedding and clothing regularly to prevent reinfection.',
//       'Consult a doctor for oral antifungals if the infection is severe or persistent.'
//     ],
//     dietPlan: [
//       'Incorporate foods with antifungal properties (e.g., ginger, garlic, turmeric).',
//       'Consume probiotic-rich foods (e.g., kefir, sauerkraut) to support skin health.',
//       'Limit sugar and refined carbohydrates to reduce fungal growth.',
//       'Stay hydrated to maintain healthy skin.'
//     ]
//   },
//   'PA-Cutaneous-Larva-Migrans': {
//     description: 'Cutaneous Larva Migrans is a parasitic skin infection caused by hookworm larvae, typically acquired from walking barefoot on contaminated soil or sand. It presents as intensely itchy, winding, red tracks on the skin as the larvae migrate.',
//     remedies: [
//       'Consult a healthcare provider for antiparasitic medications (e.g., albendazole, ivermectin).',
//       'Avoid scratching to prevent secondary bacterial infections.',
//       'Apply topical corticosteroids to reduce itching and inflammation.',
//       'Keep the affected area clean and covered to avoid further irritation.'
//     ],
//     dietPlan: [
//       'Eat a balanced diet rich in vitamins A and C (e.g., leafy greens, citrus fruits) to support skin healing.',
//       'Include zinc-rich foods (e.g., lentils, seeds) to boost immunity.',
//       'Stay hydrated to aid skin recovery and overall health.',
//       'Avoid raw or undercooked foods to prevent additional parasitic exposure.'
//     ]
//   },
//   'VI-Chickenpox': {
//     description: 'Chickenpox is a highly contagious viral infection caused by the Varicella-Zoster virus, characterized by an itchy, blister-like rash that scabs over, accompanied by fever and fatigue. It primarily affects children but can occur in adults.',
//     remedies: [
//       'Apply calamine lotion or use antihistamines to relieve itching.',
//       'Keep nails short and clean to prevent scratching and secondary infections.',
//       'Consult a doctor for antiviral medications (e.g., acyclovir) in severe cases or for high-risk individuals.',
//       'Bathe in lukewarm water with oatmeal or baking soda to soothe the skin.'
//     ],
//     dietPlan: [
//       'Consume soft, cool foods (e.g., yogurt, smoothies) if mouth sores are present.',
//       'Eat lysine-rich foods (e.g., fish, chicken, dairy) to support viral suppression.',
//       'Stay hydrated with water and electrolyte-rich drinks.',
//       'Avoid acidic or spicy foods that may irritate sores.'
//     ]
//   },
//   'VI-Shingles': {
//     description: 'Shingles is a viral infection caused by the reactivation of the Varicella-Zoster virus, presenting as a painful, unilateral rash with blisters along a nerve path, often accompanied by burning or tingling sensations. It typically affects older adults or those with weakened immunity.',
//     remedies: [
//       'Start antiviral medications (e.g., acyclovir, valacyclovir) within 72 hours, as prescribed.',
//       'Use over-the-counter pain relievers (e.g., ibuprofen) or prescribed medications for nerve pain.',
//       'Apply cool compresses or calamine lotion to soothe the rash.',
//       'Keep the rash clean and covered to prevent bacterial infections.'
//     ],
//     dietPlan: [
//       'Eat lysine-rich foods (e.g., dairy, eggs, soybeans) and limit arginine-rich foods (e.g., nuts, chocolate).',
//       'Include anti-inflammatory foods (e.g., fatty fish, berries) to reduce pain and inflammation.',
//       'Consume vitamin B12-rich foods (e.g., salmon, eggs) to support nerve health.',
//       'Stay hydrated to aid recovery and skin health.'
//     ]
//   }
// };

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/skin_disease_db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('✅ Connected to MongoDB');

//     // Clear existing data
//     await Disease.deleteMany({});

//     // Insert diseases
//     const diseases = Object.entries(diseaseInfoMap).map(([name, info]) => ({
//       name,
//       description: info.description,
//       remedies: info.remedies,
//       dietPlan: info.dietPlan
//     }));

//     await Disease.insertMany(diseases);
//     console.log('✅ Database seeded successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     process.exit(1);
//   }
// };

// seedDatabase();




// const mongoose = require('mongoose');
// const Disease = require('./Disease');

// const diseaseInfoMap = {
//   'BA-Cellulitis': {
//     description: 'Cellulitis is a bacterial skin infection caused by Streptococcus or Staphylococcus bacteria, leading to redness, swelling, warmth, and pain in the affected area. It often occurs when bacteria enter through a cut, scrape, or insect bite, and may spread to deeper tissues if untreated.',
//     remedies: [
//       'Consult a healthcare provider for oral or intravenous antibiotics (e.g., penicillin, cephalexin).',
//       'Keep the affected area clean and elevated to reduce swelling.',
//       'Apply warm compresses to soothe discomfort and promote circulation.',
//       'Use over-the-counter pain relievers (e.g., ibuprofen) for pain and inflammation.'
//     ],
//     dietPlan: [
//       'Consume vitamin C-rich foods (e.g., oranges, strawberries, bell peppers) to boost immunity.',
//       'Include zinc-rich foods (e.g., nuts, seeds, legumes) to support wound healing.',
//       'Eat probiotic-rich foods (e.g., yogurt, kefir) to promote gut health and immunity.',
//       'Stay hydrated with water and avoid sugary drinks to support recovery.'
//     ]
//   },
//   'BA-Impetigo': {
//     description: 'Impetigo is a highly contagious bacterial skin infection, primarily caused by Staphylococcus aureus or Streptococcus pyogenes. It is common in children and presents as red sores or blisters that rupture, ooze, and form a honey-colored crust, often around the mouth or nose.',
//     remedies: [
//       'Apply prescribed topical antibiotics (e.g., mupirocin ointment) to affected areas.',
//       'Take oral antibiotics (e.g., amoxicillin) for severe or widespread cases, as prescribed.',
//       'Keep the affected area clean with mild soap and water, and cover with sterile gauze.',
//       'Avoid scratching or touching sores to prevent spreading the infection.'
//     ],
//     dietPlan: [
//       'Eat protein-rich foods (e.g., lean meats, eggs, beans) to support tissue repair.',
//       'Incorporate vitamin A-rich foods (e.g., carrots, sweet potatoes) for skin health.',
//       'Include foods with antimicrobial properties (e.g., garlic, turmeric) to aid recovery.',
//       'Avoid sharing utensils or food to prevent spreading the infection.'
//     ]
//   },
//   'FU-Athlete-Foot': {
//     description: 'Athlete’s Foot, or Tinea Pedis, is a fungal infection caused by dermatophytes, typically affecting the skin between the toes. It causes itching, burning, scaling, and sometimes painful cracks, often triggered by warm, moist environments like sweaty shoes.',
//     remedies: [
//       'Apply over-the-counter antifungal creams or sprays (e.g., clotrimazole, terbinafine).',
//       'Keep feet clean and dry, especially between the toes, and change socks frequently.',
//       'Use antifungal powder in shoes to reduce moisture and fungal growth.',
//       'Avoid tight, non-breathable footwear and wear sandals in public showers or pools.'
//     ],
//     dietPlan: [
//       'Consume probiotic-rich foods (e.g., yogurt, kimchi) to support a healthy microbiome.',
//       'Include foods with antifungal properties (e.g., coconut oil, garlic).',
//       'Reduce sugar and refined carbohydrate intake, as they can promote fungal growth.',
//       'Stay hydrated to support overall skin health.'
//     ]
//   },
//   'FU-Nail-Fungus': {
//     description: 'Nail Fungus, or Onychomycosis, is a fungal infection affecting the toenails or fingernails, caused by dermatophytes, yeasts, or molds. It leads to thickened, discolored, brittle, or crumbling nails, often accompanied by mild discomfort.',
//     remedies: [
//       'Use prescribed antifungal nail lacquers (e.g., ciclopirox) or oral antifungals (e.g., terbinafine).',
//       'Keep nails trimmed, clean, and dry to prevent fungal spread.',
//       'Apply over-the-counter antifungal creams to surrounding skin if affected.',
//       'Avoid sharing nail clippers and wear breathable footwear to reduce moisture.'
//     ],
//     dietPlan: [
//       'Eat foods with antifungal properties (e.g., garlic, oregano, coconut oil).',
//       'Include zinc-rich foods (e.g., pumpkin seeds, chickpeas) to support nail health.',
//       'Reduce sugar and processed foods to limit fungal growth.',
//       'Stay hydrated and consume a balanced diet to strengthen immunity.'
//     ]
//   },
//   'FU-Ringworm': {
//     description: 'Ringworm, or Tinea Corporis, is a fungal infection caused by dermatophytes, presenting as a circular, red, scaly rash with a clear center, resembling a ring. It is contagious and can spread through skin contact or contaminated objects.',
//     remedies: [
//       'Apply over-the-counter antifungal creams (e.g., clotrimazole, miconazole) to the affected area.',
//       'Keep the area clean and dry, and avoid sharing towels or clothing.',
//       'Wash bedding and clothing regularly to prevent reinfection.',
//       'Consult a doctor for oral antifungals if the infection is severe or persistent.'
//     ],
//     dietPlan: [
//       'Incorporate foods with antifungal properties (e.g., ginger, garlic, turmeric).',
//       'Consume probiotic-rich foods (e.g., kefir, sauerkraut) to support skin health.',
//       'Limit sugar and refined carbohydrates to reduce fungal growth.',
//       'Stay hydrated to maintain healthy skin.'
//     ]
//   },
//   'PA-Cutaneous-Larva-Migrans': {
//     description: 'Cutaneous Larva Migrans is a parasitic skin infection caused by hookworm larvae, typically acquired from walking barefoot on contaminated soil or sand. It presents as intensely itchy, winding, red tracks on the skin as the larvae migrate.',
//     remedies: [
//       'Consult a healthcare provider for antiparasitic medications (e.g., albendazole, ivermectin).',
//       'Avoid scratching to prevent secondary bacterial infections.',
//       'Apply topical corticosteroids to reduce itching and inflammation.',
//       'Keep the affected area clean and covered to avoid further irritation.'
//     ],
//     dietPlan: [
//       'Eat a balanced diet rich in vitamins A and C (e.g., leafy greens, citrus fruits) to support skin healing.',
//       'Include zinc-rich foods (e.g., lentils, seeds) to boost immunity.',
//       'Stay hydrated to aid skin recovery and overall health.',
//       'Avoid raw or undercooked foods to prevent additional parasitic exposure.'
//     ]
//   },
//   'VI-Chickenpox': {
//     description: 'Chickenpox is a highly contagious viral infection caused by the Varicella-Zoster virus, characterized by an itchy, blister-like rash that scabs over, accompanied by fever and fatigue. It primarily affects children but can occur in adults.',
//     remedies: [
//       'Apply calamine lotion or use antihistamines to relieve itching.',
//       'Keep nails short and clean to prevent scratching and secondary infections.',
//       'Consult a doctor for antiviral medications (e.g., acyclovir) in severe cases or for high-risk individuals.',
//       'Bathe in lukewarm water with oatmeal or baking soda to soothe the skin.'
//     ],
//     dietPlan: [
//       'Consume soft, cool foods (e.g., yogurt, smoothies) if mouth sores are present.',
//       'Eat lysine-rich foods (e.g., fish, chicken, dairy) to support viral suppression.',
//       'Stay hydrated with water and electrolyte-rich drinks.',
//       'Avoid acidic or spicy foods that may irritate sores.'
//     ]
//   },
//   'VI-Shingles': {
//     description: 'Shingles is a viral infection caused by the reactivation of the Varicella-Zoster virus, presenting as a painful, unilateral rash with blisters along a nerve path, often accompanied by burning or tingling sensations. It typically affects older adults or those with weakened immunity.',
//     remedies: [
//       'Start antiviral medications (e.g., acyclovir, valacyclovir) within 72 hours, as prescribed.',
//       'Use over-the-counter pain relievers (e.g., ibuprofen) or prescribed medications for nerve pain.',
//       'Apply cool compresses or calamine lotion to soothe the rash.',
//       'Keep the rash clean and covered to prevent bacterial infections.'
//     ],
//     dietPlan: [
//       'Eat lysine-rich foods (e.g., dairy, eggs, soybeans) and limit arginine-rich foods (e.g., nuts, chocolate).',
//       'Include anti-inflammatory foods (e.g., fatty fish, berries) to reduce pain and inflammation.',
//       'Consume vitamin B12-rich foods (e.g., salmon, eggs) to support nerve health.',
//       'Stay hydrated to aid recovery and skin health.'
//     ]
//   },
//   'No-disease': {
//     description: "The skin appears normal without any signs of infection or disease.",
//     remedies: [
//       "none"
//     ],
//     dietPlan: [
//       "none"
//     ]
//   }
// };

// const seedDatabase = async () => {
//   try {
//     await mongoose.connect('mongodb://127.0.0.1:27017/skin_disease_db', {
//       useNewUrlParser: true,
//       useUnifiedTopology: true
//     });
//     console.log('✅ Connected to MongoDB');

//     await Disease.deleteMany({});

//     const diseases = Object.entries(diseaseInfoMap).map(([name, info]) => ({
//       name,
//       description: info.description,
//       remedies: info.remedies,
//       dietPlan: info.dietPlan
//     }));

//     await Disease.insertMany(diseases);
//     console.log('✅ Database seeded successfully');
//     process.exit(0);
//   } catch (error) {
//     console.error('❌ Error seeding database:', error);
//     process.exit(1);
//   }
// };

// seedDatabase();
