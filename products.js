const ALL_PRODUCTS = [
  // --- PET FOOD ---
  // BAIRO BRAND
  { id: 'pf1', name: 'Adult EC Chicken & Rice', price: 599, oldPrice: 768, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult EC-Chicken and rice.png', desc: 'Premium adult nutrition with chicken and rice for holistic health.', features: 'Muscle Strength | Shiny Coat | Immune Support', unit: 'KG', weightOptions: [
    { w: '3kg', p: 599, o: 768, d: '22% OFF' },
    { w: '10kg', p: 1899, o: 2435, d: '22% OFF' },
    { w: '20kg', p: 3200, o: 4103, d: '22% OFF' }
  ]},
  { id: 'pf2', name: 'Adult EC Meat & Rice', price: 3800, oldPrice: 4872, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult EC-Meat and rice.png', desc: 'Protein-rich meat and rice formula for active adult dogs.', features: 'Energy Boost | Easy Digest | Strong Joints', unit: 'KG', weightOptions: [
    { w: '20kg', p: 3800, o: 4872, d: '22% OFF' }
  ]},
  { id: 'pf3', name: 'Adult Balanced Chicken & Veg', price: 20, oldPrice: 26, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult chcken and veg.png', desc: 'Nutritious blend of chicken and fresh vegetables for daily wellness.', features: 'Fiber Rich | Holistic Care | Digestive Health', unit: 'KG', weightOptions: [
    { w: '100gm', p: 20, o: 26, d: '22% OFF' },
    { w: '1.1kg', p: 269, o: 345, d: '22% OFF' },
    { w: '3kg', p: 679, o: 871, d: '22% OFF' },
    { w: '10kg', p: 2100, o: 2693, d: '22% OFF' }
  ]},
  { id: 'pf4', name: 'Adult Meat & Rice', price: 20, oldPrice: 26, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Adult meat and rice.png', desc: 'Traditional meat and rice recipe balanced for home-grown dogs.', features: 'Daily Stamina | Strong Bones | Healthy Heart', unit: 'KG', weightOptions: [
    { w: '100gm', p: 20, o: 26, d: '22% OFF' },
    { w: '1.1kg', p: 269, o: 345, d: '22% OFF' },
    { w: '3kg', p: 679, o: 871, d: '22% OFF' }
  ]},
  { id: 'pf5', name: 'Puppy EC Chicken & Rice', price: 649, oldPrice: 833, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy EC-Chicken Rice.png', desc: 'High-energy puppy formula to support rapid growth and exploration.', features: 'DHA Support | Immunity Plus | Small Kibbles', unit: 'KG', weightOptions: [
    { w: '3kg', p: 649, o: 833, d: '22% OFF' },
    { w: '10kg', p: 1999, o: 2563, d: '22% OFF' },
    { w: '20kg', p: 3400, o: 4359, d: '22% OFF' }
  ]},
  { id: 'pf6', name: 'Puppy EC Meat & Rice', price: 3900, oldPrice: 5000, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy EC-Meat & Rice.png', desc: 'Classic meat and rice blend optimized for developing puppy bodies.', features: 'Growth Support | Muscle Tone | High Palatability', unit: 'KG', weightOptions: [
    { w: '20kg', p: 3900, o: 5000, d: '22% OFF' }
  ]},
  { id: 'pf7', name: 'Puppy Chicken & Milk', price: 20, oldPrice: 26, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Food', category: 'Pet Food', image: 'images/Barioo/Bario-Puppy chicken and Milk.png', desc: 'Gentle and nourishing for puppies with real chicken and calcium-rich milk.', features: 'Brain Development | Strong Teeth | Healthy Growth', unit: 'KG', weightOptions: [
    { w: '100gm', p: 20, o: 26, d: '22% OFF' },
    { w: '1.1kg', p: 279, o: 358, d: '22% OFF' },
    { w: '3kg', p: 699, o: 897, d: '22% OFF' },
    { w: '10kg', p: 2200, o: 2821, d: '22% OFF' }
  ]},
  { id: 'pf8', name: 'Denta Bites (Fish & Potato)', price: 150, oldPrice: 193, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dental Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Denta Bites - Fish & Potato.png', desc: 'Unique fish and potato flavor for dental-safe snacking.', features: 'Hypoallergenic | Tartar Removal | Omega Rich', unit: 'Qty' },
  { id: 'pf9', name: 'Denta Bites (Liver)', price: 150, oldPrice: 193, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dental Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Denta Bites - Liver.png', desc: 'Liver-flavored dental bites that dogs absolutely love.', features: 'High Reward | Oral Hygiene | Iron Rich', unit: 'Qty' },
  { id: 'pf10', name: 'Dog Biscuits (Premium)', price: 200, oldPrice: 257, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Dog Biscuits • 500g', category: 'Pet Food', image: 'images/Barioo/Bario-Dog biscuits.png', desc: 'Classic oven-baked biscuits with the goodness of real chicken.', features: 'Cruchy Texture | Training Treat | Natural Flavor', unit: 'Qty' },
  { id: 'pf11', name: 'Energy Treat (Calcium & Milk)', price: 200, oldPrice: 257, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat - Calcium & Milk.png', desc: 'Small, soft treats designed for quick energy rewards.', features: 'Soft Chew | Calcium Plus | Small Breeds', unit: 'Qty' },
  { id: 'pf12', name: 'Energy Treat (Spinach)', price: 200, oldPrice: 257, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat - Spinach.png', desc: 'Veggie-infused treats for a fiber and vitamin boost.', features: 'Antioxidants | Spinach Power | Healthy Digestion', unit: 'Qty' },
  { id: 'pf13', name: 'Energy Treat (Chicken Liver)', price: 200, oldPrice: 257, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat Chicken and liver.png', desc: 'Savory chicken liver bites for ultimate performance.', features: 'Focus Support | High Protein | Low Calorie', unit: 'Qty' },
  { id: 'pf14', name: 'Energy Treat (Mix Flavor)', price: 200, oldPrice: 257, discount: '22% OFF', brand: 'Bairo', badge: 'BA', cat: 'Energy Treat • 125g', category: 'Pet Food', image: 'images/Barioo/Bario-Enery Treat Mix.png', desc: 'A flavorful mix of all our energy treat varieties.', features: 'Variety Pack | Interactive Play | Fun Shapes', unit: 'Qty' },

  // MIOW BRAND
  { id: 'pf15', name: 'Ocean Fish - Adult', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-ocean-fish-now.png', desc: 'Delicious ocean fish for active adult cats.', features: 'Shiny Coat | Vitality | Easy Digest', unit: 'KG', weightOptions: [
    { w: '50g', p: 10, o: 13, d: '22% OFF' },
    { w: '1kg', p: 199, o: 256, d: '22% OFF' },
    { w: '2.8kg', p: 459, o: 589, d: '22% OFF' },
    { w: '6kg', p: 999, o: 1281, d: '22% OFF' }
  ]},
  { id: 'pf16', name: 'Ocean Fish - Kitten', price: 269, oldPrice: 345, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-oceanfish-kitten-now.png', desc: 'Nutrient-rich formula for growing kittens.', features: 'Growth Support | DHA | Immune Boost', unit: 'KG', weightOptions: [
    { w: '50g', p: 10, o: 13, d: '22% OFF' },
    { w: '1kg', p: 269, o: 345, d: '22% OFF' },
    { w: '2.8kg', p: 579, o: 743, d: '22% OFF' }
  ]},
  { id: 'pf17', name: 'Chicken Jerky Treats', price: 120, oldPrice: 154, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat • 35g', category: 'Pet Food', image: 'images/MIOW/miow-chicken-jerky.png', desc: 'Real chicken jerky for rewarding behavior.', features: 'High Protein | Grain Free | Tasty', unit: 'Qty' },
  { id: 'pf18', name: 'First Milk Formula', price: 500, oldPrice: 642, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Supplement', category: 'Pet Food', image: 'images/MIOW/miow-first-milk-now.png', desc: 'Colostrum-rich formula for newborn kittens.', features: 'Antibody Rich | Nutritious | Easy Mix', unit: 'Qty', weightOptions: [
    { w: '250g', p: 500, o: 642, d: '22% OFF' },
    { w: '500g', p: 775, o: 994, d: '22% OFF' }
  ]},
  { id: 'pf19', name: 'Tuna Fish - Adult', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Food', category: 'Pet Food', image: 'images/MIOW/miow-tuna-fish-now.png', desc: 'Gourmet tuna fish for active adult cats.', features: 'Hydration | Real Tuna | No Preservatives', unit: 'KG', weightOptions: [
    { w: '50g', p: 10, o: 13, d: '22% OFF' },
    { w: '1kg', p: 199, o: 256, d: '22% OFF' },
    { w: '2.8kg', p: 459, o: 589, d: '22% OFF' },
    { w: '6kg', p: 999, o: 1281, d: '22% OFF' }
  ]},
  { id: 'pf20', name: 'Maxim Grow', price: 350, oldPrice: 449, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Supplement • 300g', category: 'Pet Food', image: 'images/MIOW/miow-maxim-grow.png', desc: 'Advanced nutrient blend for peak growth.', features: 'Superfood Mix | Muscle Tone | Fast Absorbtion', unit: 'KG' },
  { id: 'pf21', name: 'Tuna Bites', price: 120, oldPrice: 154, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat • 35g', category: 'Pet Food', image: 'images/MIOW/miow-tuna-bites.png', desc: 'Small, savory tuna bites for training.', features: 'Low Calorie | High Flavor | Omega 3', unit: 'Qty' },
  { id: 'pf22', name: 'Chicken Cubes', price: 120, oldPrice: 154, discount: '22% OFF', brand: 'MIOW', badge: 'MW', cat: 'Cat Treat • 35g', category: 'Pet Food', image: 'images/MIOW/miow-chicken-cubes.png', desc: 'Delicious chicken cubes for quick rewards.', features: 'Soft Texture | Real Chicken | Easy Digestion', unit: 'Qty' },

  // BILL BRAND
  // BILL BRAND
  { id: 'bl1', name: 'Adult Cat Food (7kg)', price: 2360, oldPrice: 3026, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/Bill-Cat-food-7kg-2360.png', desc: 'Complete adult cat food for daily nutrition.', features: 'Balanced Diet | Shiny Coat | Everyday Health', unit: 'KG' },
  { id: 'bl2', name: 'Billi Cat Food (Basic)', price: 2080, oldPrice: 2667, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/Bill-cat-2080.png', desc: 'Essential nutrition for adult cats.', features: 'Vitality | Immunity | Easy Digest', unit: 'KG' },
  { id: 'bl3', name: 'Adult Tuna Special', price: 925, oldPrice: 1186, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-cat-tuna.png', desc: 'Delicious adult tuna flavor for your cat.', features: 'Tuna Flavour | High Protein | Active Life', unit: 'KG', weightOptions: [
    { w: '500g', p: 179, o: 230, d: '22% OFF' },
    { w: '1.5kg', p: 499, o: 640, d: '22% OFF' },
    { w: '3kg', p: 925, o: 1186, d: '22% OFF' }
  ]},
  { id: 'bl4', name: 'Classic Cat Food', price: 925, oldPrice: 1186, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-cat.png', desc: 'Everyday cat food to keep your pet strong.', features: 'Crunchy | Flavorful | Nutritious', unit: 'KG', weightOptions: [
    { w: '500g', p: 179, o: 230, d: '22% OFF' },
    { w: '1.5kg', p: 499, o: 640, d: '22% OFF' },
    { w: '3kg', p: 925, o: 1186, d: '22% OFF' }
  ]},
  { id: 'bl5', name: 'Premium Cat Litter', price: 410, oldPrice: 526, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Hygiene', category: 'Pet Food', image: 'images/Bill/bill-catlitter-2.png', desc: 'Ultra-absorbent clumping cat litter.', features: 'Odor Control | Dust Free | Low Tracking', unit: 'Qty', weightOptions: [
    { w: '5L', p: 410, o: 526, d: '22% OFF' },
    { w: '10L', p: 820, o: 1052, d: '22% OFF' },
    { w: '20kg', p: 1900, o: 2436, d: '22% OFF' }
  ]},
  { id: 'bl6', name: 'Adult Chicken Flavor', price: 925, oldPrice: 1186, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-chicken-2.png', desc: 'Rich chicken flavored food for adult cats.', features: 'Real Chicken | Satisfying | Lean Muscle', unit: 'KG', weightOptions: [
    { w: '500g', p: 179, o: 230, d: '22% OFF' },
    { w: '1.5kg', p: 499, o: 640, d: '22% OFF' },
    { w: '3kg', p: 925, o: 1186, d: '22% OFF' }
  ]},
  { id: 'bl7', name: 'Chicken Special Edition (7kg)', price: 2080, oldPrice: 2667, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-chicken-7kg-2080.png', desc: 'Limited edition high-meat content chicken food.', features: 'Protein Boost | Natural Ingredients | Grain Free', unit: 'KG' },
  { id: 'bl8', name: 'Adult Chicken (7kg)', price: 2360, oldPrice: 3026, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-chicken-7kg-2360.png', desc: 'Standard chicken flavor for a balanced feline diet.', features: 'Energy Plus | Digestive Health | Strong Teeth', unit: 'KG' },
  { id: 'bl9', name: 'Tuna Flavor (7kg)', price: 2360, oldPrice: 3026, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill-tuns-7kg-2360.png', desc: 'Savory tuna meal for active cats.', features: 'Omega 3 | Heart Health | Muscle Support', unit: 'KG' },
  { id: 'bl10', name: 'Tuna Cat Food (Bulk)', price: 2360, oldPrice: 3026, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/bill7kg-tuna-2360rs.png', desc: 'Premium bulk tuna food.', features: 'Great Value | Healthy Digestion | Strong Vision', unit: 'KG' },
  { id: 'bl11', name: 'Pro Adult Tuna', price: 925, oldPrice: 1186, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/billcat- adulttuna-2.png', desc: 'Professional adult tuna for a balanced lifestyle.', features: 'Probiotics | Tuna Plus | Omega 3', unit: 'KG', weightOptions: [
    { w: '500g', p: 179, o: 230, d: '22% OFF' },
    { w: '1.5kg', p: 499, o: 640, d: '22% OFF' },
    { w: '3kg', p: 925, o: 1186, d: '22% OFF' }
  ]},
  { id: 'bl12', name: 'Pro Adult Chicken', price: 925, oldPrice: 1186, discount: '22% OFF', brand: 'Bill', badge: 'BL', cat: 'Cat Food', category: 'Pet Food', image: 'images/Bill/billcat-adult-chicken-2.png', desc: 'Professional adult chicken with extra vitamins.', features: 'Vitamins | Immunity | Great Taste', unit: 'KG', weightOptions: [
    { w: '500g', p: 179, o: 230, d: '22% OFF' },
    { w: '1.5kg', p: 499, o: 640, d: '22% OFF' },
    { w: '3kg', p: 925, o: 1186, d: '22% OFF' }
  ]},

  // DEFENDER BRAND
  { id: 'pf30', name: 'Starter - Mother and Pup', price: 1450, oldPrice: 1859, discount: '22% OFF', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-Starter Mother and Pup.png', desc: 'Crucial nutrition for weaning pups and nursing mothers.', features: 'Immunity Guard | Easy Swallow | High Lipid', unit: 'KG' },
  { id: 'pf31', name: 'Adult - Chicken & Liver', price: 1250, oldPrice: 1603, discount: '22% OFF', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-Adult Chicken and liver.png', desc: 'Savory chicken and iron-rich liver for active dogs.', features: 'Strength Plus | Heart Health | Vitality', unit: 'KG' },
  { id: 'pf32', name: 'Adult - Chicken & Veg', price: 1150, oldPrice: 1475, discount: '22% OFF', brand: 'Defender', badge: 'DF', cat: 'Dog Food', category: 'Pet Food', image: 'images/Defenderr/Defender-adultchicken and veg.png', desc: 'Balanced greens and protein for a clean digestive tract.', features: 'Weight Control | Fiber Rich | Holistic Care', unit: 'KG' },

  // MAXIMOM BRAND
  { id: 'pf33', name: 'Max-20kg Cat Food', price: 4500, oldPrice: 5770, discount: '22% OFF', brand: 'Maximom!', badge: 'MX', cat: 'Cat Food', category: 'Pet Food', image: 'images/MAXIMOM/maximum-20kg-catfood.png', desc: 'Bulk nutritional supply for multiple cat households.', features: 'Wholesale Value | Balanced pH | Skin & Coat', unit: 'KG' },
  { id: 'pf34', name: 'Adult Dog Food (Premium)', price: 1800, oldPrice: 2308, discount: '22% OFF', brand: 'Maximom!', badge: 'MX', cat: 'Dog Food', category: 'Pet Food', image: 'images/maximom_dog_food.png', desc: 'Premium kibbles with high biological value proteins.', features: 'High Absorption | Joint Care | Natural Defense', unit: 'KG' },

  // COUNTRYSIDE BRAND
  { id: 'pf35', name: 'Adult Fish & Rice', price: 1100, oldPrice: 1411, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Adult Fish And Rice.png', desc: 'Protein-rich fish and rice formula for healthy skin and coat.', features: 'Omega 3 & 6 | Joint Health | High Digestibility', unit: 'KG', weightOptions: [
    { w: '200g', p: 300, o: 385, d: '22% OFF' },
    { w: '2kg', p: 1100, o: 1411, d: '22% OFF' }
  ]},
  { id: 'pf36', name: 'Adult Grain Free', price: 1100, oldPrice: 1411, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Adult Grain Free.png', desc: 'Grain-free nutrition suitable for dogs with food sensitivities.', features: 'Hypoallergenic | Sweet Potato | Lean Muscle', unit: 'KG', weightOptions: [
    { w: '200g', p: 300, o: 385, d: '22% OFF' },
    { w: '2kg', p: 1100, o: 1411, d: '22% OFF' }
  ]},
  { id: 'pf37', name: 'Puppy Fish & Rice', price: 1350, oldPrice: 1731, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Puppy Fish And Rice.png', desc: 'Gentle on puppy tummies with rich fish protein for development.', features: 'DHA for Brain | Bone Growth | Immune Defense', unit: 'KG', weightOptions: [
    { w: '200g', p: 350, o: 449, d: '22% OFF' },
    { w: '2kg', p: 1350, o: 1731, d: '22% OFF' }
  ]},
  { id: 'pf38', name: 'Puppy Grain Free', price: 1350, oldPrice: 1731, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/Countryside-Puppy Grain Free.png', desc: 'Premium grain-free start for your puppy\'s foundation life stage.', features: 'No Corn or Wheat | Active Energy | Small Kibble', unit: 'KG', weightOptions: [
    { w: '200g', p: 350, o: 449, d: '22% OFF' },
    { w: '2kg', p: 1350, o: 1731, d: '22% OFF' }
  ]},
  // ROYAL CANIN BRAND — DOG RANGE
  { id: 'rc1',  name: 'Puppy (Mini Range)',              price: 980,   oldPrice: 1257,   discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-800g-980.png',      desc: 'Starter dry food for Mini breed puppies up to 10 months.',           features: 'Easy Chew Kibble | DHA | Antioxidants | Digestive Health', unit: 'KG', weightOptions: [
    { w: '220g', p: 250, o: 321, d: '22% OFF' },
    { w: '800g', p: 980, o: 1257, d: '22% OFF' },
    { w: '2kg', p: 2360, o: 3026, d: '22% OFF' },
    { w: '4kg', p: 4310, o: 5526, d: '22% OFF' },
    { w: '8kg', p: 7750, o: 9936, d: '22% OFF' }
  ]},
  { id: 'rc6',  name: 'Puppy (Medium Range)',            price: 1080,  oldPrice: 1385,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-mediumrange-1700.png',       desc: 'Medium breed puppy starter formula for dogs 11–25kg adult weight.',  features: 'Optimal Growth | Immune Boost | DHA | Easy Digest', unit: 'KG', weightOptions: [
    { w: '220g', p: 250, o: 321, d: '22% OFF' },
    { w: '1kg', p: 1080, o: 1385, d: '22% OFF' },
    { w: '2kg', p: 2120, o: 2718, d: '22% OFF' },
    { w: '4kg', p: 4090, o: 5244, d: '22% OFF' },
    { w: '10kg', p: 8630, o: 11065, d: '22% OFF' },
    { w: '15kg', p: 13570, o: 17398, d: '22% OFF' }
  ]},
  { id: 'rc9',  name: 'Puppy (Maxi Range)',              price: 4040,  oldPrice: 5180,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-maxirange.png',               desc: 'Large breed puppy formula for dogs with adult weight 26–44kg.',       features: 'Joint Prep | Optimal Stool | High Energy | Cartilage Support', unit: 'KG', weightOptions: [
    { w: '4kg', p: 4040, o: 5180, d: '22% OFF' },
    { w: '10kg', p: 8850, o: 11347, d: '22% OFF' },
    { w: '15kg', p: 12240, o: 15693, d: '22% OFF' }
  ]},
  { id: 'rc10', name: 'Puppy (Giant Range)',             price: 3800,  oldPrice: 4872, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-GaintRange.png',              desc: 'Giant breed puppy food for dogs with adult weight over 45kg.',        features: 'Skeletal Support | Slow Growth | Joint Care | High Digestibility', unit: 'KG' },
  { id: 'rc11', name: 'Adult (Mini Range)',              price: 880,   oldPrice: 1129,   discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1308.png',          desc: 'Adult small breed formula under 10kg for daily health maintenance.',  features: 'Dental Care | Skin Barrier | Weight Control | Stool Odor', unit: 'KG', weightOptions: [
    { w: '220g', p: 250, o: 321, d: '22% OFF' },
    { w: '800g', p: 880, o: 1129, d: '22% OFF' },
    { w: '2kg', p: 2140, o: 2744, d: '22% OFF' },
    { w: '4kg', p: 3850, o: 4936, d: '22% OFF' },
    { w: '8kg', p: 6660, o: 8539, d: '22% OFF' }
  ]},
  { id: 'rc15', name: 'Adult (Medium Range)',            price: 1110,  oldPrice: 1424,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-mediumrange-1700.png',       desc: 'For medium adult dogs 11–25kg. Maintains ideal body condition.',      features: 'Muscle Maintenance | Healthy Skin | Oral Hygiene | Vitality', unit: 'KG', weightOptions: [
    { w: '1kg', p: 1110, o: 1424, d: '22% OFF' },
    { w: '4kg', p: 3730, o: 4783, d: '22% OFF' },
    { w: '10kg', p: 8650, o: 11090, d: '22% OFF' },
    { w: '15kg', p: 13560, o: 17385, d: '22% OFF' }
  ]},
  { id: 'rc16', name: 'Adult (Giant Range)',             price: 3610,  oldPrice: 4629, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-GaintRange.png',              desc: 'For giant breed adult dogs over 45kg. Supports joints and cardiac.', features: 'Joint Support | Cardiac Care | Balanced Minerals | High Energy', unit: 'KG' },
  { id: 'rc17', name: 'Adult Rottweiler',                price: 3180,  oldPrice: 4077, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-rottweeler.png',              desc: 'Breed-specific nutrition for Rottweilers. Muscle mass and heart support.', features: 'Muscle Strength | L-Carnitine | Joint Care | Cardiac Support', unit: 'KG', weightOptions: [
    { w: '3kg', p: 3180, o: 4077, d: '22% OFF' },
    { w: '12kg', p: 11640, o: 14924, d: '22% OFF' }
  ]},
  { id: 'rc18', name: 'Labrador Retriever Adult',       price: 3190,  oldPrice: 4090, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-labradorretriver.png',             desc: 'Specially formulated for adult Labrador Retrievers. Controls weight.', features: 'Weight Control | Stool Odor | Bone & Joint | Satiety', unit: 'KG', weightOptions: [
    { w: '1.2kg', p: 1290, o: 1654, d: '22% OFF' },
    { w: '3kg', p: 3190, o: 4090, d: '22% OFF' },
    { w: '12kg', p: 11570, o: 14834, d: '22% OFF' }
  ]},
  { id: 'rc19', name: 'Golden Retriever Adult',         price: 3210,  oldPrice: 4116, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-retriver.png',                      desc: 'Breed-specific food for Golden Retrievers. Supports coat and joints.',features: 'Long Coat Care | Joint Support | Omega 3 & 6 | Cardiac Health', unit: 'KG', weightOptions: [
    { w: '1kg', p: 1190, o: 1526, d: '22% OFF' },
    { w: '3kg', p: 3210, o: 4116, d: '22% OFF' },
    { w: '12kg', p: 12020, o: 15411, d: '22% OFF' }
  ]},
  { id: 'rc20', name: 'Starter (Mini Range)',            price: 250,   oldPrice: 321,   discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-starter-minirange-220g-250.png',    desc: 'Starter food for nursing mothers and newborn mini breed puppies.',    features: 'Trial Pack | Colostrum | High Energy | Soft Kibble', unit: 'KG', weightOptions: [
    { w: '220g', p: 250, o: 321, d: '22% OFF' },
    { w: '1kg', p: 1170, o: 1500, d: '22% OFF' },
    { w: '4kg', p: 4550, o: 5834, d: '22% OFF' },
    { w: '8kg', p: 7500, o: 9616, d: '22% OFF' }
  ]},
  { id: 'rc22', name: 'Starter (Medium Range)',          price: 1120,  oldPrice: 1436,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-starter-mediumrange-15kg-14700.png', desc: 'Starter formula for medium breed mothers and puppies.',          features: 'Mother & Baby | Nutrient Dense | Easy Digest | Natural Defenses', unit: 'KG', weightOptions: [
    { w: '1kg', p: 1120, o: 1436, d: '22% OFF' },
    { w: '4kg', p: 4200, o: 5385, d: '22% OFF' },
    { w: '15kg', p: 14700, o: 18847, d: '22% OFF' }
  ]},
  { id: 'rc23', name: 'Lightweight Care (Standard)',    price: 3620,  oldPrice: 4642, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-lightweightcare.png',               desc: 'Low-calorie formula for overweight adult dogs. Maintains satiety.',   features: 'Calorie Control | High Fiber | Lean Body | Satiety Formula', unit: 'KG' },
  { id: 'rc24', name: 'Lightweight Care Maxi',          price: 3620,  oldPrice: 4642, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-lightweightcaremaxi.png',           desc: 'Low-calorie formula for large breed overweight dogs.',                features: 'Maxi Breed | Calorie Reduced | Joint Support | Lean Muscle', unit: 'KG' },
  { id: 'rc25', name: 'Joint Care (Maxi)',               price: 3670,  oldPrice: 4706, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-JointCare-maxi.png',                desc: 'Supports cartilage and joint health in large adult dogs.',             features: 'Glucosamine | Chondroitin | EPA & DHA | Cartilage Support', unit: 'KG' },
  { id: 'rc26', name: 'Derma Comfort (Maxi)',            price: 3540,  oldPrice: 4539, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-maxi.png',             desc: 'Soothes skin reactions in large breed dogs with sensitive skin.',     features: 'Skin Barrier | Omega 6 | EPA & DHA | Anti-Itch', unit: 'KG' },
  { id: 'rc27', name: 'Derma Comfort (Medium)',          price: 3480,  oldPrice: 4462, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-medium.png',           desc: 'Skin comfort formula for medium breed dogs with skin sensitivities.', features: 'Reduced Itch | Healthy Coat | EPA & DHA | Zinc Enriched', unit: 'KG' },
  { id: 'rc28', name: 'Derma Comfort (Mini)',            price: 1230,  oldPrice: 1577, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-dermacomfort-mini.png',             desc: 'Dermatology comfort for small breed dogs with sensitive skin.',       features: 'Small Breed | Skin Soothe | Omega Blend | Coat Shine', unit: 'KG' },
  { id: 'rc29', name: 'Digestive Care (Maxi)',           price: 3670,  oldPrice: 4706, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-figestive care-maxi.png',           desc: 'Supports optimal digestion and stool quality in large breed dogs.',   features: 'Prebiotic | Easy Digest | Stool Quality | Gut Balance', unit: 'KG' },
  { id: 'rc30', name: 'Fit & Active (Adult)',            price: 2200,  oldPrice: 2821, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-fit- adultbread.png',               desc: 'Complete formula for moderately active adult dogs.',                  features: 'Lean Body | Muscle Tone | Digestive Health | Immunity', unit: 'KG' },
  { id: 'rc41', name: 'Adult 8+ (Mini Range)',           price: 1840,  oldPrice: 2359, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1308.png',          desc: 'Supports vitality in small breed dogs from 8 years of age.',          features: 'Vitality Support | Palatability | Ideal Weight | Dental Health', unit: 'KG', weightOptions: [
    { w: '2kg', p: 1840, o: 2359, d: '22% OFF' },
    { w: '4kg', p: 3500, o: 4488, d: '22% OFF' }
  ]},
  { id: 'rc42', name: 'Adult Pug',                       price: 1950,  oldPrice: 2500, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1500.png',          desc: 'Breed-specific food for Pugs. Supports skin and muscle tone.',        features: 'Skin Health | Muscle Tone | Fold Care | Clover-Leaf Kibble', unit: 'KG', weightOptions: [
    { w: '1.5kg', p: 1950, o: 2500, d: '22% OFF' },
    { w: '3kg', p: 3550, o: 4552, d: '22% OFF' },
    { w: '7.5kg', p: 8020, o: 10283, d: '22% OFF' }
  ]},
  { id: 'rc43', name: 'Puppy Pug',                       price: 750,   oldPrice: 962,   discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-2080.png',          desc: 'Specially for Pug puppies. Supports immunity and skin health.',       features: 'Immune Support | Skin Barrier | Healthy Growth', unit: 'KG', weightOptions: [
    { w: '500g', p: 750, o: 962, d: '22% OFF' },
    { w: '1.5kg', p: 2090, o: 2680, d: '22% OFF' }
  ]},
  { id: 'rc44', name: 'Adult Shih Tzu',                  price: 2020,  oldPrice: 2590, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-3kg-3690.png',       desc: 'For adult Shih Tzus. Promotes healthy skin and long coat.',           features: 'Healthy Skin | Coat Care | Dental Health | Stool Odor', unit: 'KG', weightOptions: [
    { w: '1.5kg', p: 2020, o: 2590, d: '22% OFF' },
    { w: '3kg', p: 3690, o: 4731, d: '22% OFF' }
  ]},
  { id: 'rc45', name: 'Puppy Shih Tzu',                  price: 2080,  oldPrice: 2667, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-minirange-2080.png',          desc: 'Immune and digestive support for Shih Tzu puppies.',                  features: 'Immune Support | Digestive Health | Long Coat', unit: 'KG', weightOptions: [
    { w: '1.5kg', p: 2080, o: 2667, d: '22% OFF' }
  ]},
  { id: 'rc46', name: 'Adult Beagle',                    price: 250,   oldPrice: 321,   discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-mediumrange-1700.png',       desc: 'Tailored nutrition for Beagles. Controls weight and food intake.',    features: 'Weight Control | Food Intake Control | Bone & Joint Support', unit: 'KG', weightOptions: [
    { w: '200g', p: 250, o: 321, d: '22% OFF' },
    { w: '1kg', p: 1190, o: 1526, d: '22% OFF' },
    { w: '3kg', p: 3190, o: 4090, d: '22% OFF' },
    { w: '12kg', p: 10740, o: 13770, d: '22% OFF' }
  ]},
  { id: 'rc47', name: 'Adult Poodle',                    price: 1800,  oldPrice: 2308, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1500.png',          desc: 'Specially for Poodles. Supports coat and muscle tone.',               features: 'Coat Health | Muscle Tone | Vision Support | Dental Health', unit: 'KG', weightOptions: [
    { w: '1.5kg', p: 1800, o: 2308, d: '22% OFF' },
    { w: '3kg', p: 3480, o: 4462, d: '22% OFF' }
  ]},
  { id: 'rc48', name: 'Adult Cocker Spaniel',            price: 3230,  oldPrice: 4142, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-mediumrange-1700.png',       desc: 'Supports skin health and ideal weight for Cocker Spaniels.',          features: 'Healthy Skin & Coat | Ideal Weight | Cardiac Tone', unit: 'KG', weightOptions: [
    { w: '3kg', p: 3230, o: 4142, d: '22% OFF' }
  ]},
  { id: 'rc49', name: 'Puppy Cocker Spaniel',            price: 3380,  oldPrice: 4334, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-puppy-mediumrange-1700.png',       desc: 'Developmental support for Cocker Spaniel puppies.',                   features: 'Immune Support | Skin Health | Natural Defenses', unit: 'KG', weightOptions: [
    { w: '3kg', p: 3380, o: 4334, d: '22% OFF' }
  ]},
  { id: 'rc50', name: 'Mini Wet (Adult/Puppy)',           price: 1308,  oldPrice: 1677, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-1308.png',          desc: 'Premium wet food for mini breed dogs.',                              features: 'Soft Texture | High Palatability | Easy Digest', unit: 'Box', weightOptions: [
    { w: 'Adult (12x85g)', p: 1308, o: 1677, d: '22% OFF' },
    { w: 'Puppy (12x85g)', p: 14440, o: 18513, d: '22% OFF' }
  ]},
  { id: 'rc51', name: 'Medium Wet (Adult/Puppy)',         price: 1610,  oldPrice: 2065, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-mediumrange-1700.png',       desc: 'Tender chunks in gravy for medium breed dogs.',                      features: 'Optimal Nutrition | High Energy | Muscle Support', unit: 'Box', weightOptions: [
    { w: 'Adult (10x140g)', p: 1610, o: 2065, d: '22% OFF' },
    { w: 'Puppy (10x140g)', p: 1700, o: 2180, d: '22% OFF' }
  ]},
  { id: 'rc52', name: 'Shih Tzu Wet (Adult)',            price: 1500,  oldPrice: 1924, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/RoyalCanin-adult-minirange-3kg-3690.png',       desc: 'Exquisite wet food tailored for adult Shih Tzus.',                   features: 'Skin Health | Fur Quality | High Palatability', unit: 'Box', weightOptions: [
    { w: '12x85g', p: 1500, o: 1924, d: '22% OFF' }
  ]},
 
  // ROYAL CANIN BRAND — CAT RANGE
  { id: 'rc31', name: 'Persian Adult',                   price: 1390,  oldPrice: 1783, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-persian-adult.png',                 desc: 'Almond-shaped kibble designed for Persian cat facial structure.',     features: 'Coat Shine | Hairball Reduction | Almond Kibble | Omega 3', unit: 'KG', weightOptions: [
    { w: '400g', p: 640, o: 821, d: '22% OFF' },
    { w: '1kg', p: 1390, o: 1783, d: '22% OFF' },
    { w: '2kg', p: 2700, o: 3462, d: '22% OFF' },
    { w: '4kg', p: 5030, o: 6449, d: '22% OFF' },
    { w: '10kg', p: 10500, o: 13462, d: '22% OFF' }
  ]},
  { id: 'rc32', name: 'Persian Kitten',                  price: 1480,  oldPrice: 1898, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/Royalcanin-persian-kitten.png',                desc: 'Specially designed for Persian kittens up to 12 months old.',        features: 'Flat-Face Shape | DHA | Bone Growth | Immune Boost', unit: 'KG', weightOptions: [
    { w: '400g', p: 620, o: 795, d: '22% OFF' },
    { w: '1kg', p: 1480, o: 1898, d: '22% OFF' },
    { w: '2kg', p: 2950, o: 3783, d: '22% OFF' },
    { w: '4kg', p: 5390, o: 6911, d: '22% OFF' }
  ]},
  { id: 'rc33', name: 'Hairball Care',                   price: 540,   oldPrice: 693,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-hairball-care.png',                 desc: 'Specifically formulated to help cats eliminate ingested hair.',       features: 'Hairball Control | Fiber Complex | Digestive Transit | Coat Care', unit: 'KG', weightOptions: [
    { w: '400g', p: 540, o: 693, d: '22% OFF' },
    { w: '2kg', p: 2650, o: 3398, d: '22% OFF' }
  ]},
  { id: 'rc34', name: 'Hair & Skin Care',                price: 520,   oldPrice: 667,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-hairskin.png',                      desc: 'Promotes a healthy coat and strong skin barrier in cats.',            features: 'Omega 3 & 6 | Biotin | EPA & DHA | Shiny Coat', unit: 'KG', weightOptions: [
    { w: '400g', p: 520, o: 667, d: '22% OFF' },
    { w: '2kg', p: 2340, o: 3000, d: '22% OFF' }
  ]},
  { id: 'rc35', name: 'Indoor (Adult)',                  price: 2210,  oldPrice: 2834, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-indore.png',                        desc: 'Tailored for cats that live exclusively indoors.',                    features: 'Hairball Control | Weight Balance | Stool Odor | Vitality', unit: 'KG' },
  { id: 'rc36', name: 'Outdoor (Adult)',                 price: 2740,  oldPrice: 3513, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-outdore.png',                       desc: 'For cats with outdoor access. Supports natural defenses.',            features: 'High Energy | Immunity | Lean Muscle | Digestive Health', unit: 'KG' },
  { id: 'rc37', name: 'Sterilised (Adult)',              price: 450,   oldPrice: 577,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-sterilised.png',                    desc: 'Post-sterilisation formula to balance nutrition and weight.',         features: 'Weight Control | Urinary Care | High Protein | Satiety', unit: 'KG', weightOptions: [
    { w: '400g', p: 450, o: 577, d: '22% OFF' },
    { w: '2kg', p: 2080, o: 2667, d: '22% OFF' }
  ]},
  { id: 'rc38', name: 'Sterilized (Weight Control)',     price: 1350,  oldPrice: 1731, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-sterilized.png',                    desc: 'Adapted formula for sterilized cats with tendency toward obesity.',   features: 'Lean Body | High Fiber | Urinary Balance | Vitality', unit: 'KG' },
  { id: 'rc39', name: 'Urinary Care',                    price: 540,   oldPrice: 693,  discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Cat Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-uniary care.png',                   desc: 'Supports urinary tract health and reduces struvite crystal formation.', features: 'Urinary Health | Dilute Urine | Controlled Minerals | pH Balance', unit: 'KG', weightOptions: [
    { w: '400g', p: 540, o: 693, d: '22% OFF' },
    { w: '2kg', p: 2810, o: 3603, d: '22% OFF' }
  ]},
  { id: 'rc40', name: 'Basic Puppy',                     price: 1110,  oldPrice: 1424, discount: '22% OFF', brand: 'Royal Canin', badge: 'RC', cat: 'Dog Food',           category: 'Pet Food', image: 'images/RoyalCanin/royalcanin-puppy.png',                         desc: 'Essential puppy nutrition for all breeds up to 1 year.',              features: 'DHA | Natural Antioxidants | Digestive Security | Energy', unit: 'KG' },

  { id: 'ext1', name: 'Adult Cat Food - Fish', price: 450, oldPrice: 577, discount: '22% OFF', brand: 'Whiskas', badge: 'WK', cat: 'Cat Food', category: 'Pet Food', image: 'images/product_cat.png', desc: 'Tasty and nutritious food for adult cats, made with real ocean fish.', features: 'Healthy Coat | Vitality | Easy Digest | High Protein', unit: 'KG', weightOptions: [
    { w: '1.2kg', p: 450, o: 577, d: '22% OFF' },
    { w: '3kg', p: 1100, o: 1411, d: '22% OFF' },
    { w: '7kg', p: 2400, o: 3077, d: '22% OFF' }
  ]},
  { id: 'ext2', name: 'Focus Super Premium', price: 1125, oldPrice: 1443, discount: '22% OFF', brand: 'Drools', badge: 'DR', cat: 'Dog Food', category: 'Pet Food', image: 'images/product_chicken.png', desc: 'Super premium dog food with a grain-free formula.', features: 'Grain-Free | High Protein | Omega Rich | Muscle Support', unit: 'KG', weightOptions: [
    { w: '3kg', p: 1125, o: 1443, d: '22% OFF' },
    { w: '10kg', p: 3200, o: 4103, d: '22% OFF' },
    { w: '20kg', p: 5800, o: 7436, d: '22% OFF' }
  ]},
  { id: 'ext3', name: 'Gourmet Wet Cat Food', price: 980, oldPrice: 1257, discount: '22% OFF', brand: 'Sheba', badge: 'SH', cat: 'Cat Food • 12 Pack', category: 'Pet Food', image: 'images/product_salmon.png', desc: 'Fine flakes in jelly, a truly exquisite gourmet experience for your feline companion.', features: 'Premium Quality | Easy Open | 100% Nutritious | Real Chicken', unit: 'KG' },
  { id: 'ext4', name: 'Persian Cat Formula', price: 620, oldPrice: 795, discount: '22% OFF', brand: 'Me-O', badge: 'MO', cat: 'Cat Food', category: 'Pet Food', image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=500&q=80', desc: 'Specially formulated for Persian cats to prevent hairball formation and support skin health.', features: 'Anti-Hairball | Shiny Coat | Eye Health | Healthy Digestion', unit: 'KG' },

  // NEW COUNTRYSIDE PRODUCTS
  { id: 'cs1', name: 'Dental Chews', price: 299, oldPrice: 384, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/countryside-dental-chews-image.png', desc: 'Delicious dental chews for clean teeth and fresh breath.', features: 'Plaque Control | Fresh Breath | Calcium Enriched', unit: 'Qty' },
  { id: 'cs2', name: 'First Milk (Puppy Milk Replacer)', price: 500, oldPrice: 642, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Food', category: 'Pet Food', image: 'images/Country-Side/countryside-first-milk-image.png', desc: 'Mother\'s milk replacer for puppies.', features: 'Immune Support | Easy Digest | Growth', unit: 'KG', weightOptions: [
    { w: '250g', p: 500, o: 642, d: '22% OFF' }, { w: '500g', p: 775, o: 994, d: '22% OFF' }
  ] },
  { id: 'cs3', name: 'Power Muscles', price: 390, oldPrice: 500, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-power-muscles-image.png', desc: 'Strong bones and muscles supplement.', features: 'Muscle Strength | Joint Health | High Protein', unit: 'Qty', weightOptions: [
    { w: '150g', p: 390, o: 500, d: '22% OFF' }, { w: '300g', p: 750, o: 962, d: '22% OFF' }
  ] },
  { id: 'cs4', name: 'Class-E Coat', price: 390, oldPrice: 500, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-clase-e-cote-iamge.png', desc: 'Omega 3 & 6 for skin and fur.', features: 'Healthy Skin | Shiny Coat | Omega Rich', unit: 'Qty', weightOptions: [
    { w: '150g', p: 390, o: 500, d: '22% OFF' }, { w: '300g', p: 750, o: 962, d: '22% OFF' }
  ] },
  { id: 'cs5', name: 'Pro-B Flora', price: 400, oldPrice: 513, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-pro-b-flora.png', desc: 'Probiotic for dogs and cats.', features: 'Digestive Health | Gut Flora | Easy Mix', unit: 'Qty' },
  { id: 'cs6', name: 'Pet Potency', price: 670, oldPrice: 859, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-petpotency-image.png', desc: 'Fertility support for pets.', features: 'Reproductive Health | Vitality | Natural', unit: 'Qty' },
  { id: 'cs7', name: 'Parvo Care', price: 790, oldPrice: 1013, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-parvo-care-image.png', desc: 'Immunity and strength booster.', features: 'Immune Defense | Recovery | Strength', unit: 'Qty' },
  { id: 'cs8', name: 'Preggy Care', price: 640, oldPrice: 821, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-preggycare-image.png', desc: 'Pregnancy and lactation support.', features: 'Maternal Health | Milk Production | Safe', unit: 'Qty' },
  { id: 'cs9', name: 'Duo Stix', price: 169, oldPrice: 217, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/countryside-duo-stick.png', desc: 'Tasty double flavor sticks for dogs.', features: 'Chewy Try | Plaque Control | Delicious', unit: 'Qty' },
  { id: 'cs10', name: 'Milky Bone', price: 299, oldPrice: 384, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/countrysidemilkybone-image.png', desc: 'Calcium rich milky bone.', features: 'Strong Teeth | Bone Health | Lactose Free', unit: 'Qty' },
  { id: 'cs11', name: 'Dehydrated Gizzard', price: 300, oldPrice: 385, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/countryside-gizzaro..png', desc: '100% dehydrated gizzard.', features: 'Real Meat | High Protein | Grain Free', unit: 'Qty' },
  { id: 'cs12', name: 'Dehydrated Liver', price: 300, oldPrice: 385, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/countryside-liver-image.png', desc: '100% dehydrated liver.', features: 'Iron Rich | Natural | Healthy', unit: 'Qty' },
  { id: 'cs13', name: 'Dehydrated Jerky', price: 300, oldPrice: 385, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/Country-Side/ciountryside-jerky-iamge.png', desc: '100% dehydrated jerky.', features: 'Chewy | High Protein | Lean Meat', unit: 'Qty' },
  { id: 'cs14', name: 'Fish Oil', price: 499, oldPrice: 640, discount: '22% OFF', brand: 'Countryside', badge: 'CS', cat: 'Dog Supplement', category: 'Pet Food', image: 'images/Country-Side/countryside-fish-oil-image.png', desc: 'Premium fish oil for healthy coat.', features: 'Omega 3 & 6 | Joint Support | Heart Health', unit: 'Qty' },

  // WAGSUP BRAND
  { id: 'ws1', name: 'Chicken & Carrot Treats', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsup-chicken-carrot-image.png', desc: 'Delicious chicken and carrot training treats.', features: 'Real Chicken | Healthy Veggies | Training Reward', unit: 'Qty' },
  { id: 'ws2', name: 'Diced Chicken Treats', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsup-diced-chicken-image.png', desc: 'Bite-sized diced chicken treats.', features: 'High Protein | Easy Chew | Real Meat', unit: 'Qty' },
  { id: 'ws3', name: 'Chicken & Spinach Treats', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsupchicken-spinach-image.png', desc: 'Nutritious chicken and spinach treats.', features: 'Iron Rich | Real Chicken | Tasty', unit: 'Qty' },
  { id: 'ws4', name: 'Chicken Tender', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsup-chicken-tender-image.png', desc: 'Soft and chewy chicken tenders.', features: 'Lean Protein | Gentle Digestion | Great Taste', unit: 'Qty' },
  { id: 'ws5', name: 'Chicken Twists', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsup-chickentwists-image.png', desc: 'Fun and chewy chicken twists.', features: 'Dental Health | Long Lasting | Real Meat', unit: 'Qty' },
  { id: 'ws6', name: 'Roasted Treats', price: 199, oldPrice: 256, discount: '22% OFF', brand: 'Wagsup', badge: 'WS', cat: 'Dog Treat', category: 'Pet Food', image: 'images/wagsup/wagsup-roasted-image.png', desc: 'Flavorful roasted pet treats.', features: 'Roasted Flavor | Crunchy | High Reward', unit: 'Qty' },

  // CATSUP BRAND
  { id: 'cp1', name: 'Chicken Cat Treats', price: 149, oldPrice: 192, discount: '22% OFF', brand: 'Catsup', badge: 'CP', cat: 'Cat Treat', category: 'Pet Food', image: 'images/catsup/Catsup-chicken-image.png', desc: 'Irresistible chicken treats for cats.', features: 'Real Chicken | High Protein | Crunchy', unit: 'Qty' },
  { id: 'cp2', name: 'Chicken Jerky', price: 149, oldPrice: 192, discount: '22% OFF', brand: 'Catsup', badge: 'CP', cat: 'Cat Treat', category: 'Pet Food', image: 'images/catsup/catsup-chicken-jerry-image.png', desc: 'Chewy chicken jerky specially crafted for cats.', features: 'Lean Meat | Chewy Texture | Great Reward', unit: 'Qty' },
  { id: 'cp3', name: 'Original Cat Treats', price: 149, oldPrice: 192, discount: '22% OFF', brand: 'Catsup', badge: 'CP', cat: 'Cat Treat', category: 'Pet Food', image: 'images/catsup/catsup-image.png', desc: 'Classic flavorful treats your cat will love.', features: 'Balanced Nutrition | Tasty | Everyday Snack', unit: 'Qty' },


  // --- ACCESSORIES ---
  { id: 'ac1', name: 'Retractable Dog Leash', price: 1450, oldPrice: 1859, discount: '22% OFF', brand: 'Flexi', cat: 'Walk Essentials', category: 'Accessories', image: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500&q=80', desc: 'High-quality retractable leash with a secure braking system for safe walkies.', features: '5m Tape Leash | Ergonomic Handle | Quick-Stop | For Large Dogs', unit: 'Qty' },
  { id: 'ac2', name: 'Reflective Pet Collar', price: 480, oldPrice: 616, discount: '22% OFF', brand: 'Rogz', cat: 'Identification', category: 'Accessories', image: 'https://images.unsplash.com/photo-1576201836106-db1758fd1c97?auto=format&fit=crop&w=500&q=80', desc: 'High-visibility reflective collar to keep your pet safe during night walks.', features: 'Night Visibility | Soft Webbing | Fast-Fit | Multiple Sizes', unit: 'Qty' },
  { id: 'ac3', name: 'Stainless Steel Bowl', price: 720, oldPrice: 924, discount: '22% OFF', brand: 'Loving Pets', cat: 'Dining', category: 'Accessories', image: 'https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?auto=format&fit=crop&w=800&q=80', desc: 'Elegant and durable stainless steel feeding bowl with an anti-skid rubber base.', features: 'Bacteria Resistant | Dishwasher Safe | Rubber Rim | Heavy-base', unit: 'Qty' },
  { id: 'ac4', name: 'Orthopedic Pet Bed', price: 2850, oldPrice: 3654, discount: '22% OFF', brand: 'K&H', cat: 'Sleeping Comfort', category: 'Accessories', image: 'https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?auto=format&fit=crop&w=800&q=80', desc: 'Premium memory foam bed providing maximum joint support and comfort for sleeping.', features: 'Memory Foam | Washable Cover | Joint Support | Breathable', unit: 'Qty' },

  // --- GROOMING ---
  { id: 'gr1', name: 'Oatmeal Pet Shampoo', price: 650, oldPrice: 834, discount: '22% OFF', brand: 'Wahl', cat: 'Cleaning', category: 'Grooming', image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80', desc: 'Gentle oatmeal shampoo for pets with sensitive skin.', features: 'PH Balanced | Paraben Free | Oatmeal Infusion | 500ml', unit: 'Qty' },
  { id: 'gr2', name: 'Deshedding Brush', price: 1850, oldPrice: 2372, discount: '22% OFF', brand: 'FURminator', cat: 'Coat Care', category: 'Grooming', image: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80', desc: 'Reduces shedding by up to 90% by safely removing the loose undercoat.', features: 'Steel Blade | Ergonomic Handle | Deshedding Tool | Professional Grade', unit: 'Qty' },
  { id: 'gr3', name: 'Safety Nail Clipper', price: 420, oldPrice: 539, discount: '22% OFF', brand: 'Safari', cat: 'Manicure', category: 'Grooming', image: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80', desc: 'Precision clippers with a safety guard to prevent cutting the quick.', features: 'Stainless Steel | Safety Guard | Non-Slip Grip | For All Sizes', unit: 'Qty' }
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

  const searchContainer = searchInput.closest('.search-container');
  let resultsBox = document.getElementById('searchResultsBox');
  if (!resultsBox) {
    resultsBox = document.createElement('div');
    resultsBox.id = 'searchResultsBox';
    resultsBox.className = 'search-results-dropdown';
    searchInput.parentElement.appendChild(resultsBox);
  }

  // Handle mobile expansion
  searchInput.addEventListener('focus', () => {
    if (window.innerWidth <= 768) {
      searchContainer.classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  });

  // Ensure clicking the icon also focuses the input
  const searchIcon = searchContainer.querySelector('.search-icon');
  if (searchIcon) {
    searchIcon.addEventListener('click', () => {
      searchInput.focus();
    });
  }

  // Handle Close Button
  const closeBtn = document.getElementById('closeSearch');
  if (closeBtn) {
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      searchContainer.classList.remove('active');
      searchInput.value = '';
      resultsBox.style.display = 'none';
      searchInput.blur();
    });
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
    if (!searchContainer.contains(e.target) && !resultsBox.contains(e.target)) {
      resultsBox.style.display = 'none';
      if (window.innerWidth <= 768) {
        searchContainer.classList.remove('active');
      }
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

function initNavHighlight() {
  const currentPath = window.location.pathname.split('/').pop() || 'index.html';
  const navLinks = document.querySelectorAll('.nav-links a');
  
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (!href) return;
    const linkPath = href.split('/').pop();
    
    // Exact match or handle index.html / root case
    if (linkPath === currentPath || (currentPath === 'index.html' && linkPath === '')) {
      link.classList.add('active-nav');
    } else {
      link.classList.remove('active-nav');
    }
  });
}

window.addEventListener('DOMContentLoaded', () => {
  initGlobalSearch();
  initTypingAnimation();
  initNavHighlight();
});
