const ALL_PRODUCTS = [
  // --- PET FOOD ---
  // BAIRO BRAND
  { id: 'pf1', name: 'Adult EC Chicken & Rice', price: 1120, oldPrice: 1400, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult EC-Chicken and rice.png', desc: 'Premium adult nutrition with chicken and rice for holistic health.', features: 'Muscle Strength | Shiny Coat | Immune Support', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1120, o: 1400, d: '20%' },
    { w: '10kg', p: 4800, o: 5600, d: '14%' },
    { w: '20kg', p: 8900, o: 11200, d: '20%' }
  ]},
  { id: 'pf2', name: 'Adult EC Meat & Rice', price: 1080, oldPrice: 1350, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult EC-Meat and rice.png', desc: 'Protein-rich meat and rice formula for active adult dogs.', features: 'Energy Boost | Easy Digest | Strong Joints', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1080, o: 1350, d: '20%' },
    { w: '5kg', p: 2450, o: 3000, d: '18%' },
    { w: '10kg', p: 4600, o: 5400, d: '15%' }
  ]},
  { id: 'pf3', name: 'Adult Balanced Chicken & Veg', price: 1150, oldPrice: 1350, discount: '15%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult chcken and veg.png', desc: 'Nutritious blend of chicken and fresh vegetables for daily wellness.', features: 'Fiber Rich | Holistic Care | Digestive Health', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1150, o: 1350, d: '15%' },
    { w: '7kg', p: 3600, o: 4200, d: '14%' },
    { w: '15kg', p: 7200, o: 8500, d: '15%' }
  ]},
  { id: 'pf4', name: 'Adult Meat & Rice', price: 1050, oldPrice: 1240, discount: '15%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult meat and rice.png', desc: 'Traditional meat and rice recipe balanced for home-grown dogs.', features: 'Daily Stamina | Strong Bones | Healthy Heart', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1050, o: 1240, d: '15%' },
    { w: '10kg', p: 4400, o: 5200, d: '15%' }
  ]},
  { id: 'pf5', name: 'Puppy EC Chicken & Rice', price: 1120, oldPrice: 1400, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy EC-Chicken Rice.png', desc: 'High-energy puppy formula to support rapid growth and exploration.', features: 'DHA Support | Immunity Plus | Small Kibbles', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1120, o: 1400, d: '20%' },
    { w: '10kg', p: 4800, o: 6000, d: '20%' }
  ]},
  { id: 'pf6', name: 'Puppy EC Meat & Rice', price: 1080, oldPrice: 1350, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy EC-Meat & Rice.png', desc: 'Classic meat and rice blend optimized for developing puppy bodies.', features: 'Growth Support | Muscle Tone | High Palatability', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1080, o: 1350, d: '20%' },
    { w: '20kg', p: 8600, o: 10800, d: '20%' }
  ]},
  { id: 'pf7', name: 'Puppy Chicken & Milk', price: 1150, oldPrice: 1640, discount: '30%', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy chicken and Milk.png', desc: 'Gentle and nourishing for puppies with real chicken and calcium-rich milk.', features: 'Brain Development | Strong Teeth | Healthy Growth', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1150, o: 1640, d: '30%' },
    { w: '5kg', p: 2650, o: 3800, d: '30%' },
    { w: '10kg', p: 5100, o: 7200, d: '29%' }
  ]},
  { id: 'pf8', name: 'Denta Bites (Fish & Potato)', price: 220, oldPrice: 275, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dental Treat • 100g', category: 'Pet Food', image: 'images/Barioo/Bario-Denta Bites - Fish & Potato.png', desc: 'Unique fish and potato flavor for dental-safe snacking.', features: 'Hypoallergenic | Tartar Removal | Omega Rich', unit: 'Qty' },
  { id: 'pf9', name: 'Denta Bites (Liver)', price: 220, oldPrice: 275, discount: '20%', brand: 'Bairo', badge: 'BA', cat: 'Dental Treat • 100g', category: 'Pet Food', image: 'images/Barioo/Bario-Denta Bites - Liver.png', desc: 'Liver-flavored dental bites that dogs absolutely love.', features: 'High Reward | Oral Hygiene | Iron Rich', unit: 'Qty' },
  { id: 'pf10', name: 'Dog Biscuits (Premium)', price: 350, oldPrice: 450, discount: '22%', brand: 'Bairo', badge: 'BA', cat: 'Dog Biscuits • 500g', category: 'Pet Food', image: 'images/Barioo/Bario-Dog biscuits.png', desc: 'Classic oven-baked biscuits with the goodness of real chicken.', features: 'Cruchy Texture | Training Treat | Natural Flavor', unit: 'Qty' },
  { id: 'pf11', name: 'Energy Treat (Calcium & Milk)', price: 150, oldPrice: 199, discount: '25%', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 70g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat - Calcium & Milk.png', desc: 'Small, soft treats designed for quick energy rewards.', features: 'Soft Chew | Calcium Plus | Small Breeds', unit: 'Qty' },
  { id: 'pf12', name: 'Energy Treat (Spinach)', price: 150, oldPrice: 199, discount: '25%', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 70g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat - Spinach.png', desc: 'Veggie-infused treats for a fiber and vitamin boost.', features: 'Antioxidants | Spinach Power | Healthy Digestion', unit: 'Qty' },
  { id: 'pf13', name: 'Energy Treat (Chicken Liver)', price: 150, oldPrice: 199, discount: '25%', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 70g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat Chicken and liver.png', desc: 'Savory chicken liver bites for ultimate performance.', features: 'Focus Support | High Protein | Low Calorie', unit: 'Qty' },
  { id: 'pf14', name: 'Energy Treat (Mix Flavor)', price: 150, oldPrice: 199, discount: '25%', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 70g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat Mix.png', desc: 'A flavorful mix of all our energy treat varieties.', features: 'Variety Pack | Interactive Play | Fun Shapes', unit: 'Qty' },

  // MIOW BRAND
  { id: 'pf15', name: 'Ocean Fish - Adult', price: 899, oldPrice: 1200, discount: '25%', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-ocean-fish-adult.png', desc: 'Delicious ocean fish for active adult cats.', features: 'Shiny Coat | Vitality | Easy Digest', unit: 'KG', weightOptions: [
    { w: '1kg', p: 899, o: 1200, d: '25%' },
    { w: '3kg', p: 2400, o: 3000, d: '20%' },
    { w: '7kg', p: 5200, o: 6500, d: '20%' }
  ]},
  { id: 'pf16', name: 'Ocean Fish - Kitten', price: 750, oldPrice: 999, discount: '25%', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-oceanfish-kitten.png', desc: 'Nutrient-rich formula for growing kittens.', features: 'Growth Support | DHA | Immune Boost', unit: 'KG' },
  { id: 'pf17', name: 'Chicken Jerky Treats', price: 350, oldPrice: 499, discount: '30%', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat • 100g', category: 'Pet Food', image: 'images/MIOW/miow-chicken-jerky.png', desc: 'Real chicken jerky for rewarding behavior.', features: 'High Protein | Grain Free | Tasty', unit: 'Qty' },
  { id: 'pf18', name: 'First Milk Formula', price: 1200, oldPrice: 1500, discount: '20%', brand: 'MIOW', badge: 'MW', cat: 'Cat Supplement', category: 'Pet Food', image: 'images/MIOW/miow-firstmilk.png', desc: 'Colostrum-rich formula for newborn kittens.', features: 'Antibody Rich | Nutritious | Easy Mix', unit: 'Qty' },
  { id: 'pf19', name: 'Tuna Fish Delight', price: 450, oldPrice: 599, discount: '25%', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-tunafish.png', desc: 'Gourmet tuna bites in savory sauce.', features: 'Hydration | Real Tuna | No Preservatives', unit: 'Qty' },
  { id: 'pf20', name: 'Maxim Grow', price: 1500, oldPrice: 1800, discount: '16%', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-maxim-grow.png', desc: 'Advanced nutrient blend for peak growth.', features: 'Superfood Mix | Muscle Tone | Fast Absorbtion', unit: 'KG' },
  { id: 'pf21', name: 'Tuna Bites', price: 350, oldPrice: 499, discount: '30%', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat', category: 'Pet Food', image: 'images/MIOW/miow-tuna-bites.png', desc: 'Small, savory tuna bites for training.', features: 'Low Calorie | High Flavor | Omega 3', unit: 'Qty' },
  { id: 'pf22', name: 'Chicken Cubes', price: 350, oldPrice: 499, discount: '30%', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat', category: 'Pet Food', image: 'images/MIOW/miow-chicken-cubes.png', desc: 'Delicious chicken cubes for quick rewards.', features: 'Soft Texture | Real Chicken | Easy Digestion', unit: 'Qty' },

  // BILL BRAND
  { id: 'pf23', name: 'Tuna Cat Food (7kg)', price: 2360, oldPrice: 2800, discount: '15%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill7kg-tuna-2360rs.png', desc: 'Premium dry cat food with rich tuna flavor.', features: 'Large Pack | Muscle Support | Healthy Heart', unit: 'KG' },
  { id: 'pf24', name: 'Tuna Cat Food (1.2kg)', price: 1050, oldPrice: 1250, discount: '16%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-tuna-1050.png', desc: 'Compact pack for small feline households.', features: 'Daily Nutrition | Multi-Vitamin | Great Value', unit: 'KG' },
  { id: 'pf25', name: 'Chicken Cat Food (7kg)', price: 2360, oldPrice: 2800, discount: '15%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-chicken-7kg-2360.png', desc: 'Traditional chicken flavor for balanced feline diet.', features: 'Energy Plus | Digestive Health | Strong Teeth', unit: 'KG' },
  { id: 'pf26', name: 'Chicken Cat Food (3kg)', price: 925, oldPrice: 1100, discount: '15%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/Bill-chicken3kg-925rs.png', desc: 'Ideal for medium-term nutrition needs.', features: 'Resealable Pack | Fresh Aroma | Nutritious', unit: 'KG' },
  { id: 'pf27', name: 'Premium Cat Litter', price: 450, oldPrice: 550, discount: '18%', brand: 'Bill', badge: 'BL', cat: 'Hygiene', category: 'Pet Food', image: 'images/Bill/bill-cat-liter.png', desc: 'Ultra-absorbent clumping cat litter.', features: 'Odor Control | Dust Free | Low Tracking', unit: 'Qty' },
  { id: 'pf28', name: 'Tuna Delight (Dry)', price: 925, oldPrice: 1100, discount: '15%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-tuna-925.png', desc: 'Small-kibble dry food with intense tuna flavor.', features: 'Easy Chew | Anti-Hairball | Shiny Coat', unit: 'KG' },
  { id: 'pf29', name: 'Chicken Special Edition', price: 2080, oldPrice: 2500, discount: '16%', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-chicken-7kg-2080.png', desc: 'Limited edition high-meat content chicken food.', features: 'Protein Boost | Natural Ingredients | Grain Free', unit: 'KG' },

  // DEFENDER BRAND
  { id: 'pf30', name: 'Starter - Mother and Pup', price: 1450, oldPrice: 1800, discount: '19%', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-Starter Mother and Pup.png', desc: 'Crucial nutrition for weaning pups and nursing mothers.', features: 'Immunity Guard | Easy Swallow | High Lipid', unit: 'KG' },
  { id: 'pf31', name: 'Adult - Chicken & Liver', price: 1250, oldPrice: 1550, discount: '19%', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-Adult Chicken and liver.png', desc: 'Savory chicken and iron-rich liver for active dogs.', features: 'Strength Plus | Heart Health | Vitality', unit: 'KG' },
  { id: 'pf32', name: 'Adult - Chicken & Veg', price: 1150, oldPrice: 1450, discount: '20%', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-adultchicken and veg.png', desc: 'Balanced greens and protein for a clean digestive tract.', features: 'Weight Control | Fiber Rich | Holistic Care', unit: 'KG' },

  // MAXIMOM BRAND
  { id: 'pf33', name: 'Max-20kg Cat Food', price: 4500, oldPrice: 5200, discount: '13%', brand: 'Maximom!', badge: 'MX', cat: 'Cat Food', category: 'Pet Food', image: 'images/MAXIMOM/maximum-20kg-catfood.png', desc: 'Bulk nutritional supply for multiple cat households.', features: 'Wholesale Value | Balanced pH | Skin & Coat', unit: 'KG' },
  { id: 'pf34', name: 'Adult Dog Food (Premium)', price: 1800, oldPrice: 2200, discount: '18%', brand: 'Maximom!', badge: 'MX', cat: 'Dog Food', category: 'Pet Food', image: 'images/maximom_dog_food.png', desc: 'Premium kibbles with high biological value proteins.', features: 'High Absorption | Joint Care | Natural Defense', unit: 'KG' },

  // COUNTRYSIDE BRAND
  { id: 'pf35', name: 'Adult Fish & Rice', price: 1350, oldPrice: 1600, discount: '15%', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Adult Fish And Rice.png', desc: 'Protein-rich fish and rice formula for healthy skin and coat.', features: 'Omega 3 & 6 | Joint Health | High Digestibility', unit: 'KG' },
  { id: 'pf36', name: 'Adult Grain Free', price: 1450, oldPrice: 1750, discount: '17%', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Adult Grain Free.png', desc: 'Grain-free nutrition suitable for dogs with food sensitivities.', features: 'Hypoallergenic | Sweet Potato | Lean Muscle', unit: 'KG' },
  { id: 'pf37', name: 'Puppy Fish & Rice', price: 1400, oldPrice: 1650, discount: '15%', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Puppy Fish And Rice.png', desc: 'Gentle on puppy tummies with rich fish protein for development.', features: 'DHA for Brain | Bone Growth | Immune Defense', unit: 'KG' },
  { id: 'pf38', name: 'Puppy Grain Free', price: 1550, oldPrice: 1850, discount: '16%', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Puppy Grain Free.png', desc: 'Premium grain-free start for your puppy\'s foundation life stage.', features: 'No Corn or Wheat | Active Energy | Small Kibble', unit: 'KG' },
  // ROYAL CANIN BRAND — DOG RANGE
  { id: 'rc1',  name: 'Puppy (Mini Range) 800g',        price: 980,   oldPrice: 1150, discount: '14%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 800g',    category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-800g-980.png',      desc: 'Starter dry food for Mini breed puppies up to 10 months.',           features: 'Easy Chew Kibble | DHA | Antioxidants | Digestive Health', unit: 'KG' },
  { id: 'rc2',  name: 'Puppy (Mini Range) 1.5kg',       price: 2090,  oldPrice: 2400, discount: '13%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 1.5kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-1.5kg-2090.png',    desc: 'Premium small breed puppy food for strong bones and immunity.',       features: 'Immune Support | Small Kibble | Bone Growth | Omega 3', unit: 'KG' },
  { id: 'rc3',  name: 'Puppy (Mini Range) 8kg',         price: 7750,  oldPrice: 9000, discount: '13%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 8kg',     category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-8-kg-7750.png',      desc: 'Economy large pack for small breed puppies.',                         features: 'Value Pack | High Palatability | Lean Growth | Natural Defense', unit: 'KG' },
  { id: 'rc4',  name: 'Puppy (Mini Range) 14.4kg',      price: 14440, oldPrice: 16500,discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 14.4kg',  category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-14440.png',         desc: 'Bulk pack for kennels and large families with small breed puppies.',  features: 'Bulk Value | Premium Nutrition | Coat Care | Muscle Support', unit: 'KG' },
  { id: 'rc5',  name: 'Puppy (Mini Range) 2080g',       price: 2080,  oldPrice: 2400, discount: '13%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-2080.png',          desc: 'Tailored small kibble for mini puppies sensitive digestion.',         features: 'Sensitive Stomach | Prebiotic | Omega Rich | Growth Support', unit: 'KG' },
  { id: 'rc6',  name: 'Puppy (Medium Range) 1.7kg',     price: 1700,  oldPrice: 2000, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 1.7kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-mediumrange-1700.png',       desc: 'Medium breed puppy starter formula for dogs 11–25kg adult weight.',  features: 'Optimal Growth | Immune Boost | DHA | Easy Digest', unit: 'KG' },
  { id: 'rc7',  name: 'Puppy (Medium Range) 4kg',       price: 3800,  oldPrice: 4400, discount: '13%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 4kg',     category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-mediumrange-4kg.png',          desc: 'Medium breed puppy 4kg pack for balanced growth.',                   features: 'Lean Muscle | Bone Development | EPA & DHA | High Energy', unit: 'KG' },
  { id: 'rc8',  name: 'Puppy (Medium Range)',            price: 3500,  oldPrice: 4000, discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-mediumrang.png',              desc: 'Premium medium breed puppy nutrition up to 12 months.',              features: 'Digestive Security | Natural Defenses | Optimal Stool | Chondroitin', unit: 'KG' },
  { id: 'rc9',  name: 'Puppy (Maxi Range)',              price: 3200,  oldPrice: 3800, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-maxirange.png',               desc: 'Large breed puppy formula for dogs with adult weight 26–44kg.',       features: 'Joint Prep | Optimal Stool | High Energy | Cartilage Support', unit: 'KG' },
  { id: 'rc10', name: 'Puppy (Giant Range)',             price: 3800,  oldPrice: 4500, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-GaintRange.png',              desc: 'Giant breed puppy food for dogs with adult weight over 45kg.',        features: 'Skeletal Support | Slow Growth | Joint Care | High Digestibility', unit: 'KG' },
  { id: 'rc11', name: 'Adult (Mini Range) 1.3kg',       price: 1308,  oldPrice: 1550, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 1.3kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1308.png',          desc: 'Adult small breed formula under 10kg for daily health maintenance.',  features: 'Dental Care | Skin Barrier | Weight Control | Stool Odor', unit: 'KG' },
  { id: 'rc12', name: 'Adult (Mini Range) 1.5kg',       price: 1500,  oldPrice: 1750, discount: '14%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 1.5kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1500.png',          desc: 'Adult small breed 1.5kg for dogs up to 10kg body weight.',           features: 'Compact Kibble | Oral Health | Coat Shine | Muscle Tone', unit: 'KG' },
  { id: 'rc13', name: 'Adult (Mini Range) 3kg',         price: 3690,  oldPrice: 4200, discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 3kg',     category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-3kg-3690.png',       desc: 'Premium adult 3kg formula for small breeds.',                         features: 'Long Life | Natural Antioxidants | Lean Body | Palatability', unit: 'KG' },
  { id: 'rc14', name: 'Adult (Mini Range) 7.5kg',       price: 8020,  oldPrice: 9200, discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 7.5kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-7.5kg-8020.png',    desc: 'Economy large pack for adult small breed dogs.',                      features: 'Value for Money | Complete Nutrition | Dental Care | Vitality', unit: 'KG' },
  { id: 'rc15', name: 'Adult (Medium Range) 1.7kg',     price: 1700,  oldPrice: 1980, discount: '14%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 1.7kg',   category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-mediumrange-1700.png',       desc: 'For medium adult dogs 11–25kg. Maintains ideal body condition.',      features: 'Muscle Maintenance | Healthy Skin | Oral Hygiene | Vitality', unit: 'KG' },
  { id: 'rc16', name: 'Adult (Giant Range)',             price: 4500,  oldPrice: 5200, discount: '13%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-GaintRange.png',              desc: 'For giant breed adult dogs over 45kg. Supports joints and cardiac.', features: 'Joint Support | Cardiac Care | Balanced Minerals | High Energy', unit: 'KG' },
  { id: 'rc17', name: 'Adult Rottweiler',                price: 3200,  oldPrice: 3800, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-rottweeler.png',              desc: 'Breed-specific nutrition for Rottweilers. Muscle mass and heart support.', features: 'Muscle Strength | L-Carnitine | Joint Care | Cardiac Support', unit: 'KG' },
  { id: 'rc18', name: 'Labrador Retriever Adult',       price: 3200,  oldPrice: 3800, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-labradorretriver.png',             desc: 'Specially formulated for adult Labrador Retrievers. Controls weight.', features: 'Weight Control | Stool Odor | Bone & Joint | Satiety', unit: 'KG' },
  { id: 'rc19', name: 'Golden Retriever Adult',         price: 3400,  oldPrice: 4000, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-retriver.png',                      desc: 'Breed-specific food for Golden Retrievers. Supports coat and joints.',features: 'Long Coat Care | Joint Support | Omega 3 & 6 | Cardiac Health', unit: 'KG' },
  { id: 'rc20', name: 'Starter (Mini Range) 220g',      price: 250,   oldPrice: 300,  discount: '16%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 220g',    category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-starter-minirange-220g-250.png',    desc: 'Trial pack for nursing mothers and newborn mini breed puppies.',      features: 'Trial Pack | Colostrum | High Energy | Soft Kibble', unit: 'Qty' },
  { id: 'rc21', name: 'Starter (Mini Range) 4–8kg',     price: 4550,  oldPrice: 5200, discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-starter-minirange-4-8-4550rs.png',  desc: 'Weaning starter food for Mini breed mothers and puppies.',            features: 'Mother & Baby | High Calorie | Soft Texture | Immune Boost', unit: 'KG' },
  { id: 'rc22', name: 'Starter (Medium) 15kg',          price: 14700, oldPrice: 16500,discount: '10%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food • 15kg',    category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-starter-mediumrange-15kg-14700.png', desc: 'Bulk starter formula for medium breed mothers and puppies.',          features: 'Bulk Economy | Nutrient Dense | Easy Digest | Natural Defenses', unit: 'KG' },
  { id: 'rc23', name: 'Lightweight Care (Standard)',    price: 2200,  oldPrice: 2600, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-lightweightcare.png',               desc: 'Low-calorie formula for overweight adult dogs. Maintains satiety.',   features: 'Calorie Control | High Fiber | Lean Body | Satiety Formula', unit: 'KG' },
  { id: 'rc24', name: 'Lightweight Care Maxi',          price: 2800,  oldPrice: 3200, discount: '12%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-lightweightcaremaxi.png',           desc: 'Low-calorie formula for large breed overweight dogs.',                features: 'Maxi Breed | Calorie Reduced | Joint Support | Lean Muscle', unit: 'KG' },
  { id: 'rc25', name: 'Joint Care (Maxi)',               price: 3200,  oldPrice: 3800, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-JointCare-maxi.png',                desc: 'Supports cartilage and joint health in large adult dogs.',             features: 'Glucosamine | Chondroitin | EPA & DHA | Cartilage Support', unit: 'KG' },
  { id: 'rc26', name: 'Derma Comfort (Maxi)',            price: 3400,  oldPrice: 4000, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-maxi.png',             desc: 'Soothes skin reactions in large breed dogs with sensitive skin.',     features: 'Skin Barrier | Omega 6 | EPA & DHA | Anti-Itch', unit: 'KG' },
  { id: 'rc27', name: 'Derma Comfort (Medium)',          price: 2800,  oldPrice: 3300, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-medium.png',           desc: 'Skin comfort formula for medium breed dogs with skin sensitivities.', features: 'Reduced Itch | Healthy Coat | EPA & DHA | Zinc Enriched', unit: 'KG' },
  { id: 'rc28', name: 'Derma Comfort (Mini)',            price: 2200,  oldPrice: 2600, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-mini.png',             desc: 'Dermatology comfort for small breed dogs with sensitive skin.',       features: 'Small Breed | Skin Soothe | Omega Blend | Coat Shine', unit: 'KG' },
  { id: 'rc29', name: 'Digestive Care (Maxi)',           price: 3200,  oldPrice: 3800, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-figestive care-maxi.png',           desc: 'Supports optimal digestion and stool quality in large breed dogs.',   features: 'Prebiotic | Easy Digest | Stool Quality | Gut Balance', unit: 'KG' },
  { id: 'rc30', name: 'Fit & Active (Adult)',            price: 2200,  oldPrice: 2600, discount: '15%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-fit- adultbread.png',               desc: 'Complete formula for moderately active adult dogs.',                  features: 'Lean Body | Muscle Tone | Digestive Health | Immunity', unit: 'KG' },

  // ROYAL CANIN BRAND — CAT RANGE
  { id: 'rc31', name: 'Persian Adult',                   price: 1600,  oldPrice: 1950, discount: '17%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-persian-adult.png',                 desc: 'Almond-shaped kibble designed for Persian cat facial structure.',     features: 'Coat Shine | Hairball Reduction | Almond Kibble | Omega 3', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1600, o: 1950, d: '17%' },
    { w: '4kg', p: 2900, o: 3500, d: '17%' }
  ]},
  { id: 'rc32', name: 'Persian Kitten',                  price: 1450,  oldPrice: 1750, discount: '17%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-persian-kitten.png',                desc: 'Specially designed for Persian kittens up to 12 months old.',        features: 'Flat-Face Shape | DHA | Bone Growth | Immune Boost', unit: 'KG' },
  { id: 'rc33', name: 'Hairball Care',                   price: 1200,  oldPrice: 1450, discount: '17%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-hairball-care.png',                 desc: 'Specifically formulated to help cats eliminate ingested hair.',       features: 'Hairball Control | Fiber Complex | Digestive Transit | Coat Care', unit: 'KG' },
  { id: 'rc34', name: 'Hair & Skin Care',                price: 1400,  oldPrice: 1700, discount: '17%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-hairskin.png',                      desc: 'Promotes a healthy coat and strong skin barrier in cats.',            features: 'Omega 3 & 6 | Biotin | EPA & DHA | Shiny Coat', unit: 'KG' },
  { id: 'rc35', name: 'Indoor (Adult)',                  price: 1350,  oldPrice: 1650, discount: '18%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-indore.png',                        desc: 'Tailored for cats that live exclusively indoors.',                    features: 'Hairball Control | Weight Balance | Stool Odor | Vitality', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1350, o: 1650, d: '18%' },
    { w: '4kg', p: 2500, o: 3000, d: '16%' }
  ]},
  { id: 'rc36', name: 'Outdoor (Adult)',                 price: 1350,  oldPrice: 1650, discount: '18%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-outdore.png',                       desc: 'For cats with outdoor access. Supports natural defenses.',            features: 'High Energy | Immunity | Lean Muscle | Digestive Health', unit: 'KG' },
  { id: 'rc37', name: 'Sterilised (Adult)',              price: 1300,  oldPrice: 1600, discount: '18%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-sterilised.png',                    desc: 'Post-sterilisation formula to balance nutrition and weight.',         features: 'Weight Control | Urinary Care | High Protein | Satiety', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1300, o: 1600, d: '18%' },
    { w: '4kg', p: 2400, o: 2900, d: '17%' }
  ]},
  { id: 'rc38', name: 'Sterilized (Weight Control)',     price: 1350,  oldPrice: 1650, discount: '18%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-sterilized.png',                    desc: 'Adapted formula for sterilized cats with tendency toward obesity.',   features: 'Lean Body | High Fiber | Urinary Balance | Vitality', unit: 'KG' },
  { id: 'rc39', name: 'Urinary Care',                    price: 1800,  oldPrice: 2100, discount: '14%', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-uniary care.png',                   desc: 'Supports urinary tract health and reduces struvite crystal formation.', features: 'Urinary Health | Dilute Urine | Controlled Minerals | pH Balance', unit: 'KG' },
  { id: 'rc40', name: 'Basic Puppy',                     price: 1240,  oldPrice: 1500, discount: '17%', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-puppy.png',                         desc: 'Essential puppy nutrition for all breeds up to 1 year.',              features: 'DHA | Natural Antioxidants | Digestive Security | Energy', unit: 'KG' },

  { id: 'pf23', name: 'Adult Cat Food - Fish', price: 450, oldPrice: 703, discount: '36%', brand: 'Whiskas', badge: 'WK', cat: 'Cat Food', category: 'Pet Food', image: 'images/product_cat.png', desc: 'Tasty and nutritious food for adult cats, made with real ocean fish.', features: 'Healthy Coat | Vitality | Easy Digest | High Protein', unit: 'KG', weightOptions: [
    { w: '1.2kg', p: 450, o: 703, d: '36%' },
    { w: '3kg', p: 1100, o: 1450, d: '24%' },
    { w: '7kg', p: 2400, o: 2800, d: '14%' }
  ]},
  { id: 'pf24', name: 'Focus Super Premium', price: 1125, oldPrice: 1500, discount: '25%', brand: 'Drools', badge: 'DR', cat: 'Dog Food', category: 'Pet Food', image: 'images/product_chicken.png', desc: 'Super premium dog food with a grain-free formula.', features: 'Grain-Free | High Protein | Omega Rich | Muscle Support', unit: 'KG', weightOptions: [
    { w: '3kg', p: 1125, o: 1500, d: '25%' },
    { w: '10kg', p: 3200, o: 4000, d: '20%' },
    { w: '20kg', p: 5800, o: 7500, d: '22%' }
  ]},
  { id: 'pf25', name: 'Gourmet Wet Cat Food', price: 980, oldPrice: 1195, discount: '18%', brand: 'Sheba', badge: 'SH', cat: 'Cat Food • 12 Pack', category: 'Pet Food', image: 'images/product_salmon.png', desc: 'Fine flakes in jelly, a truly exquisite gourmet experience for your feline companion.', features: 'Premium Quality | Easy Open | 100% Nutritious | Real Chicken', unit: 'KG' },
  { id: 'pf26', name: 'Persian Cat Formula', price: 620, oldPrice: 795, discount: '22%', brand: 'Me-O', badge: 'MO', cat: 'Cat Food', category: 'Pet Food', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80', desc: 'Specially formulated for Persian cats to prevent hairball formation and support skin health.', features: 'Anti-Hairball | Shiny Coat | Eye Health | Healthy Digestion', unit: 'KG' },

  // --- PHARMACY ---
  { id: 'ph1', name: 'Multivitamins Plus', price: 850, oldPrice: 999, discount: '15%', brand: 'Virbac', cat: 'Nutritional Supplements', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=500&q=80', desc: 'Essential vitamins for daily peak energy.', features: 'Vitamins A-Z | Fast Absorption | 60 Tabs', unit: 'Qty' },
  { id: 'ph2', name: 'Immunity Boost', price: 420, oldPrice: 560, discount: '25%', brand: 'Himalaya', cat: 'Nutritional Supplements', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80', desc: 'Natural booster for seasonal protection.', features: 'Natural Herbs | All Ages | 200ml', unit: 'Qty' },
  { id: 'ph3', name: 'Omega Fish Oil', price: 950, oldPrice: 1100, discount: '14%', brand: 'GNC', cat: 'Nutritional Supplements', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1631549916768-4119b295f789?auto=format&fit=crop&w=500&q=80', desc: 'Rich in EPA/DHA for shiny coats.', features: 'Wild Caught | Pure Quality | 100 Capsules', unit: 'Qty' },
  { id: 'ph4', name: 'Joint Support Plus', price: 1850, oldPrice: 2100, discount: '12%', brand: 'GlycoFlex', cat: 'Wellness Supplements', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1631549916760-70570b55502c?auto=format&fit=crop&w=500&q=80', desc: 'Advanced support for senior joint health.', features: 'Glucosamine | Chondroitin | 120 Tabs', unit: 'Qty' },
  { id: 'ph5', name: 'Probiotic Powder', price: 750, oldPrice: 890, discount: '16%', brand: 'Purina', cat: 'Wellness Supplements', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80', desc: 'Restores healthy gut flora instantly.', features: '5 Billion CFU | Flavorless | 30 Sachets', unit: 'Qty' },
  { id: 'ph6', name: 'Liv.52 Pet Syrup', price: 420, oldPrice: 500, discount: '16%', brand: 'Himalaya', cat: 'Ayurveda Wonders', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1512069772995-ec65ed45afd6?auto=format&fit=crop&w=500&q=80', desc: 'Clinically proven ayurvedic liver tonic.', features: 'Caper Bush | Chicory | Toxin Removal', unit: 'Qty' },
  { id: 'ph7', name: 'Bravecto Chewable', price: 1150, oldPrice: 1440, discount: '20%', brand: 'MSD', cat: 'Fleas & Tick Treatment', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80', desc: '12 weeks of continuous protection.', features: 'Rapid Action | One Dose | Vet Preferred', unit: 'Qty' },
  { id: 'ph8', name: 'Drontal Plus', price: 320, oldPrice: 355, discount: '10%', brand: 'Bayer', cat: 'Endoparasiticides', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1631549916768-4119b295f789?auto=format&fit=crop&w=500&q=80', desc: 'Broad spectrum worm protection.', features: 'Single Dose | All Breeds | 4 Tablets', unit: 'Qty' },
  { id: 'ph9', name: 'Oatmeal Shampoo', price: 650, oldPrice: 720, discount: '10%', brand: 'Wahl', cat: 'Grooming Range', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80', desc: 'Gentle cleaning for sensitive skin.', features: 'pH Balanced | Lavender Scent | 500ml', unit: 'Qty' },
  { id: 'ph10', name: 'Dental Kit', price: 350, oldPrice: 450, discount: '22%', brand: 'PetSmile', cat: 'Pet Oral Care', category: 'Pharmacy', image: 'https://images.unsplash.com/photo-1444212477490-ca407925329e?auto=format&fit=crop&w=500&q=80', desc: 'Complete toothbrush & paste set.', features: 'Beef Flavor | Dual-Head Brush', unit: 'Qty' },

  // --- ACCESSORIES ---
  { id: 'ac1', name: 'Retractable Dog Leash', price: 1450, oldPrice: 1610, discount: '10%', brand: 'Flexi', cat: 'Walk Essentials', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500&q=80', desc: 'High-quality retractable leash with a secure braking system for safe walkies.', features: '5m Tape Leash | Ergonomic Handle | Quick-Stop | For Large Dogs', unit: 'Qty' },
  { id: 'ac2', name: 'Reflective Pet Collar', price: 480, oldPrice: 565, discount: '15%', brand: 'Rogz', cat: 'Identification', category: 'Accessories', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=80', desc: 'High-visibility reflective collar to keep your pet safe during night walks.', features: 'Night Visibility | Soft Webbing | Fast-Fit | Multiple Sizes', unit: 'Qty' },
  { id: 'ac3', name: 'Stainless Steel Bowl', price: 720, oldPrice: 900, discount: '20%', brand: 'Loving Pets', cat: 'Dining', category: 'Accessories', image: 'https://images.unsplash.com/photo-1591768793355-74d7c80b0e9c?auto=format&fit=crop&w=500&q=80', desc: 'Elegant and durable stainless steel feeding bowl with an anti-skid rubber base.', features: 'Bacteria Resistant | Dishwasher Safe | Rubber Rim | Heavy-base', unit: 'Qty' },
  { id: 'ac4', name: 'Orthopedic Pet Bed', price: 2850, oldPrice: 3800, discount: '25%', brand: 'K&H', cat: 'Sleeping Comfort', category: 'Accessories', image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eca3?auto=format&fit=crop&w=500&q=80', desc: 'Premium memory foam bed providing maximum joint support and comfort for sleeping.', features: 'Memory Foam | Washable Cover | Joint Support | Breathable', unit: 'Qty' },

  // --- GROOMING ---
  { id: 'gr1', name: 'Oatmeal Pet Shampoo', price: 650, oldPrice: 720, discount: '10%', brand: 'Wahl', cat: 'Cleaning', category: 'Grooming', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80', desc: 'Gentle oatmeal shampoo for pets with sensitive skin.', features: 'PH Balanced | Paraben Free | Oatmeal Infusion | 500ml', unit: 'Qty' },
  { id: 'gr2', name: 'Deshedding Brush', price: 1850, oldPrice: 2460, discount: '25%', brand: 'FURminator', cat: 'Coat Care', category: 'Grooming', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80', desc: 'Reduces shedding by up to 90% by safely removing the loose undercoat.', features: 'Steel Blade | Ergonomic Handle | Deshedding Tool | Professional Grade', unit: 'Qty' },
  { id: 'gr3', name: 'Safety Nail Clipper', price: 420, oldPrice: 495, discount: '15%', brand: 'Safari', cat: 'Manicure', category: 'Grooming', image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80', desc: 'Precision clippers with a safety guard to prevent cutting the quick.', features: 'Stainless Steel | Safety Guard | Non-Slip Grip | For All Sizes', unit: 'Qty' }
];

// Helper to get local products
function getStoredProducts() {
  const stored = localStorage.getItem('mayaPetsExtraProducts');
  const extra = stored ? JSON.parse(stored) : [];
  return [...ALL_PRODUCTS, ...extra];
}

// Review Persistence Logic
function getProductReviews(productId) {
  const stored = localStorage.getItem(`reviews_${productId}`);
  const initialReviews = [
    { user: 'Amit K.', rating: 5, date: '2 days ago', body: 'My pet loved it! Highly recommend.', avatar: 'https://i.pravatar.cc/100?img=11' },
    { user: 'Sita R.', rating: 4, date: '1 week ago', body: 'Good quality but shipping was a bit slow.', avatar: 'https://i.pravatar.cc/100?img=22' },
    { user: 'John D.', rating: 5, date: '3 weeks ago', body: 'Best price I found for this brand.', avatar: 'https://i.pravatar.cc/100?img=33' }
  ];
  return stored ? JSON.parse(stored) : initialReviews;
}

function saveProductReview(productId, review) {
  const current = getProductReviews(productId);
  current.unshift(review); // Add new review at top
  localStorage.setItem(`reviews_${productId}`, JSON.stringify(current));
}

// Navigation logic for PDP
function showProductDetail(productId) {
  window.location.href = `product-detail.html?id=${productId}`;
}

// Global modal logic (Legacy proxy to cart.js)
function openProductModal(productId) {
  // Use the refined cart.js logic
  if(typeof window.openProductModal === 'function') {
    window.openProductModal(productId);
  }
}

function closeProductModal() {
  if(typeof window.closeProductModal === 'function') {
    window.closeProductModal();
  }
}

// Global Search Logic
function initGlobalSearch() {
  const searchInput = document.getElementById('typingSearchBar');
  if (!searchInput) return;

  let resultsBox = document.getElementById('searchResultsBox');
  if (!resultsBox) {
    resultsBox = document.createElement('div');
    resultsBox.id = 'searchResultsBox';
    resultsBox.className = 'search-results-dropdown';
    searchInput.parentElement.appendChild(resultsBox);
  }

  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (query.length < 2) {
      resultsBox.style.display = 'none';
      return;
    }

    const products = getStoredProducts();
    const filtered = products.filter(p => 
      p.name.toLowerCase().includes(query) || 
      p.brand.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query)
    ).slice(0, 8);

    if (filtered.length > 0) {
      resultsBox.innerHTML = filtered.map(p => `
        <div class="search-item" onclick="showProductDetail('${p.id}')">
          <img src="${p.image}" alt="${p.name}">
          <div class="search-item-info">
            <span class="search-item-name">${p.name}</span>
            <span class="search-item-brand">${p.brand} • ${p.category}</span>
          </div>
          <span class="search-item-price">₹${p.price.toLocaleString()}</span>
        </div>
      `).join('');
      resultsBox.style.display = 'block';
    } else {
      resultsBox.innerHTML = '<div class="search-no-results">No products found</div>';
      resultsBox.style.display = 'block';
    }
  });

  document.addEventListener('click', (e) => {
    if (!searchInput.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.style.display = 'none';
    }
  });
}

// ─── SEARCH TYPING ANIMATION ────────────────────────────
function initTypingAnimation() {
  const searchInput = document.getElementById('typingSearchBar');
  if (!searchInput) return;

  const placeholders = [
    "Search for Royal Canin",
    "Search for Drools",
    "Search for Whiskas",
    "Search for Dog Food",
    "Search for Cat Food",
    "Search for Grooming Essentials",
    "Search for Pet Accessories",
    "Search for Puppy Food"
  ];

  let pIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function type() {
    const current = placeholders[pIndex];
    if (isDeleting) {
      searchInput.placeholder = current.substring(0, charIndex--);
      typeSpeed = 50;
    } else {
      searchInput.placeholder = current.substring(0, charIndex++);
      typeSpeed = 100;
    }
    if (!isDeleting && charIndex === current.length + 1) {
      isDeleting = true;
      typeSpeed = 2000;
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      pIndex = (pIndex + 1) % placeholders.length;
      typeSpeed = 500;
    }
    setTimeout(type, typeSpeed);
  }
  type();
}

window.addEventListener('DOMContentLoaded', () => {
  initGlobalSearch();
  initTypingAnimation();
});
