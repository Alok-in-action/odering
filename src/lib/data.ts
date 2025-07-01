import type { MenuItem, Category, Order, CartItem } from './types';

let categories: Category[] = [
  { id: 'khane-se-pahele-time-pass', name: 'Khane Se Pahele Time Pass' },
  { id: 'chinese-hot-soup', name: 'Chinese Hot Soup' },
  { id: 'milk-shakes-cold-coffee', name: 'Milk Shakes & Cold Coffee' },
  { id: 'hot-time', name: 'Hot Time' },
  { id: 'raita-lassi', name: 'Raita & Lassi' },
  { id: 'starters-pakoda', name: 'Starters & Pakoda' },
  { id: 'chinese-sizzler', name: 'Chinese Sizzler' },
  { id: 'chinese-main-course', name: 'Chinese Main Course' },
  { id: 'chinese-starters', name: 'Chinese Starters' },
  { id: 'tandoor-starters', name: 'Tandoor Starters' },
  { id: 'paneer-ka-kamal', name: 'Paneer ka Kamal' },
  { id: 'kaju-ka-khazana', name: 'Kaju ka Khazana' },
  { id: 'kofta', name: 'Kofta' },
  { id: 'punjab-ka-dhamaka', name: 'Punjab Ka Dhamaka (Veg Specials)' },
  { id: 'mitti-ki-khushbu-roti', name: 'Mitti Ki Khushbu Roti' },
  { id: 'tava-roti', name: 'Tava Roti' },
  { id: 'south-indian-fancy-dosa', name: 'South Indian Fancy Dosa' },
  { id: 'kuch-ke-kuch-saath', name: 'Kuch ke Kuch Saath' },
  { id: 'basmati-ka-swad-rice', name: 'Basmati Ka Swad Rice' },
  { id: 'mozzarella-pizza', name: 'Mozzarella Pizza' },
  { id: 'toast-sandwich', name: 'Toast Sandwich' },
  { id: 'pav-bhaji', name: 'Pav Bhaji' },
  { id: 'pizza', name: 'Pizza' },
  { id: 'grill-sandwich', name: 'Grill Sandwich' },
  { id: 'burger', name: 'Burger' },
  { id: 'sip-in-soda', name: 'Sip-in Soda' },
  { id: 'paper-dosa', name: 'Paper Dosa' },
  { id: 'uttapam', name: 'Uttapam' },
  { id: 'monto-special-thali', name: 'Monto Special Thali' },
];

let menuItems: MenuItem[] = [
  // Khane Se Pahele Time Pass
  { id: '1', name: 'Cheese Masala Papad', description: 'चीज मसाला पापड़', price: 45.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '2', name: 'Roasted Papad', description: 'भुना हुआ पापड़', price: 20.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '3', name: 'Roasted Masala Papad', description: 'भुना मसाला पापड़', price: 30.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '4', name: 'Fry Papad', description: 'तला पापड़', price: 25.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '5', name: 'Fry Masala Papad', description: 'तला मसाला पापड़', price: 35.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '6', name: 'Green Salad', description: 'ग्रीन सलाद', price: 60.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '7', name: 'Tomato Salad', description: 'टमाटर सलाद', price: 50.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '8', name: 'Cucumber Salad', description: 'कुकुम्बर सलाद', price: 55.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '9', name: 'Cucumber Tomato Salad', description: 'कुकुम्बर टमाटर सलाद', price: 55.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '10', name: 'Kachumar Salad', description: 'कचुम्बर सलाद', price: 52.00, categoryId: 'khane-se-pahele-time-pass' },
  { id: '11', name: 'Onion Salad', description: 'प्याज सलाद', price: 0.00, categoryId: 'khane-se-pahele-time-pass' },

  // Chinese Hot Soup
  { id: '12', name: 'Veg Hot & Sour Soup', description: 'वेज हाट सॉर सूप', price: 105.00, categoryId: 'chinese-hot-soup' },
  { id: '13', name: 'Veg Manchow Soup', description: 'वेज मनचाऊ सूप', price: 100.00, categoryId: 'chinese-hot-soup' },
  { id: '14', name: 'Veg Manchurian Soup', description: 'वेज मंचूरियन सूप', price: 103.00, categoryId: 'chinese-hot-soup' },
  { id: '15', name: 'Lemon Coriander Soup', description: 'लेमन कोरिएन्डर सूप', price: 95.00, categoryId: 'chinese-hot-soup' },
  { id: '16', name: 'Noodles Soup', description: 'नूडल्स सूप', price: 95.00, categoryId: 'chinese-hot-soup' },
  { id: '17', name: 'Cheese Corn Tomato Soup', description: 'चीज कार्न टोमेटो सूप', price: 115.00, categoryId: 'chinese-hot-soup' },
  { id: '18', name: 'Minestrone Soup', description: 'माइनस्टोन सूप', price: 92.00, categoryId: 'chinese-hot-soup' },
  { id: '19', name: 'Veg Sweet Corn Soup', description: 'वेज स्वीट कार्न सूप', price: 98.00, categoryId: 'chinese-hot-soup' },
  { id: '20', name: 'Tomato Soup', description: 'टमाटर सूप', price: 95.00, categoryId: 'chinese-hot-soup' },
  { id: '21', name: 'Green Iceland Soup', description: 'ग्रीन आइसलेण्ड सूप', price: 95.00, categoryId: 'chinese-hot-soup' },

  // Milk Shakes & Cold Coffee
  { id: '22', name: 'Vanilla Milk Shake', description: 'वेनिला मिल्क शेक', price: 80.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '23', name: 'Strawberry Milk Shake', description: 'स्ट्रॉबेरी मिल्क शेक', price: 95.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '24', name: 'Mango Milk Shake', description: 'मैंगो मिल्क शेक', price: 92.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '25', name: 'Butter Scotch Milk Shake', description: 'बटर स्कॉच शेक', price: 95.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '26', name: 'Chocolate Milk Shake', description: 'चॉकलेट मिल्क शेक', price: 90.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '27', name: 'Oreo Milk Shake', description: 'ओरियो मिल्क शेक', price: 100.00, categoryId: 'milk-shakes-cold-coffee' },
  { id: '28', name: 'Cold Coffee', description: 'कोल्ड कॉफी', price: 80.00, categoryId: 'milk-shakes-cold-coffee' },

  // Hot Time
  { id: '29', name: 'Minto Mozzata', description: 'मिन्टो मोजाटा', price: 80.00, categoryId: 'hot-time' },
  { id: '30', name: 'Paan Mozzata', description: 'पान मोजाटा', price: 80.00, categoryId: 'hot-time' },
  { id: '31', name: 'Virgan Mozzata', description: 'विरगन मोजाटा', price: 100.00, categoryId: 'hot-time' },

  // Raita & Lassi
  { id: '32', name: 'Fruit Raita', description: 'फ्रुट रायता', price: 85.00, categoryId: 'raita-lassi' },
  { id: '33', name: 'Pineapple Raita', description: 'पाईनापल रायता', price: 85.00, categoryId: 'raita-lassi' },
  { id: '34', name: 'Veg Raita', description: 'वेज रायता', price: 80.00, categoryId: 'raita-lassi' },
  { id: '35', name: 'Boondi Raita', description: 'बुंदी रायता', price: 80.00, categoryId: 'raita-lassi' },
  { id: '36', name: 'S.P. Monto Lassi', description: 'स्पेशल मोन्टो लस्सी', price: 90.00, categoryId: 'raita-lassi' },
  { id: '37', name: 'Sweet Lassi', description: 'मिठी लस्सी', price: 75.00, categoryId: 'raita-lassi' },
  { id: '38', name: 'Salted Lassi', description: 'साल्टेड लस्सी', price: 65.00, categoryId: 'raita-lassi' },
  { id: '39', name: 'Curd', description: 'दही', price: 60.00, categoryId: 'raita-lassi' },
  { id: '40', name: 'Butter Milk', description: 'मखन छाछ', price: 30.00, categoryId: 'raita-lassi' },
  { id: '41', name: 'Milk', description: 'दूध', price: 40.00, categoryId: 'raita-lassi' },
  { id: '42', name: 'M/s Milk', description: 'मोन्टो स्पेशल छाछ', price: 50.00, categoryId: 'raita-lassi' },

  // Starters & Pakoda
  { id: '43', name: 'Crispy Corn', description: 'क्रीप्सी कोर्न', price: 105.00, categoryId: 'starters-pakoda' },
  { id: '44', name: 'Chana Roast', description: 'चना रोस्ट', price: 115.00, categoryId: 'starters-pakoda' },
  { id: '45', name: 'French Finger Fry', description: 'फ्रेंच फिंगर फ्राय', price: 100.00, categoryId: 'starters-pakoda' },
  { id: '46', name: 'Veg Pakoda', description: 'वेज पकोड़ा', price: 120.00, categoryId: 'starters-pakoda' },
  { id: '47', name: 'Paneer Pakoda', description: 'पनीर पकोड़ा', price: 170.00, categoryId: 'starters-pakoda' },
  { id: '48', name: 'Onion Pakoda', description: 'प्याज पकोड़ा', price: 110.00, categoryId: 'starters-pakoda' },
  { id: '49', name: 'Chilly Pakoda', description: 'मिर्ची पकोड़ा', price: 105.00, categoryId: 'starters-pakoda' },
  { id: '50', name: 'Chole Bhature', description: 'छोले भटुरे', price: 150.00, categoryId: 'starters-pakoda' },
  { id: '51', name: 'Extra Bhature', description: 'एक्सट्रा भटुरे', price: 20.00, categoryId: 'starters-pakoda' },

  // Chinese Sizzler
  { id: '52', name: 'Special Monto Sizzler', description: 'स्पेशल मोन्टो सिजलर', price: 500.00, categoryId: 'chinese-sizzler' },
  { id: '53', name: 'Paneer Stick Sizzler', description: 'पनीर स्टीक सिजलर', price: 400.00, categoryId: 'chinese-sizzler' },
  { id: '54', name: 'Veg Sizzler', description: 'वेज सिजलर', price: 350.00, categoryId: 'chinese-sizzler' },
  { id: '55', name: 'Chinese Sizzler', description: 'चाईनिस सिजलर', price: 395.00, categoryId: 'chinese-sizzler' },

  // Chinese Main Course
  { id: '56', name: 'Veg Hakka Noodles', description: 'वेज हक्का नूडल्स', price: 125.00, categoryId: 'chinese-main-course' },
  { id: '57', name: 'Veg Manchurian Noodles', description: 'वेज मंजूरियन नूडल्स', price: 130.00, categoryId: 'chinese-main-course' },
  { id: '58', name: 'Veg Schezwan Noodles', description: 'वेज शेजवान नूडल्स', price: 130.00, categoryId: 'chinese-main-course' },
  { id: '59', name: 'Veg Garlic Noodles', description: 'वेज लहसून नूडल्स', price: 135.00, categoryId: 'chinese-main-course' },
  { id: '60', name: 'Veg Manchurian Rice', description: 'वेज मंचूरियन राईस', price: 135.00, categoryId: 'chinese-main-course' },
  { id: '61', name: 'Veg Schezwan Rice', description: 'वेज शेजवान राईस', price: 130.00, categoryId: 'chinese-main-course' },
  { id: '62', name: 'Chinese Fried Rice', description: 'चायनीज फ्राइड राईस', price: 145.00, categoryId: 'chinese-main-course' },
  { id: '63', name: 'Triple Fried Rice', description: 'त्रिपल फ्राइड राईस', price: 170.00, categoryId: 'chinese-main-course' },
  { id: '64', name: 'Noodles Fried Rice', description: 'नूडल्स फ्राइड राईस', price: 140.00, categoryId: 'chinese-main-course' },
  { id: '65', name: 'Chinese Bhel', description: 'चायनीज भैल', price: 145.00, categoryId: 'chinese-main-course' },

  // Chinese Starters
  { id: '66', name: 'Veg Crispy', description: 'वेज क्रिस्पी', price: 200.00, categoryId: 'chinese-starters' },
  { id: '67', name: 'Paneer Chilly Gravy', description: 'पनीर चिली ग्रेवी', price: 200.00, categoryId: 'chinese-starters' },
  { id: '68', name: 'Paneer Chilly Dry', description: 'पनीर चिली डाय', price: 210.00, categoryId: 'chinese-starters' },
  { id: '69', name: 'Paneer Rocket', description: 'पनीर रॉकेट', price: 225.00, categoryId: 'chinese-starters' },
  { id: '70', name: 'Paneer Crispy', description: 'पनीर क्रिस्पी', price: 225.00, categoryId: 'chinese-starters' },
  { id: '71', name: 'Paneer 65', description: 'पनीर 65', price: 220.00, categoryId: 'chinese-starters' },
  { id: '72', name: 'Veg 65', description: 'वेज 65', price: 180.00, categoryId: 'chinese-starters' },
  { id: '73', name: 'Veg Lolipop', description: 'वेज लोलिपोप', price: 180.00, categoryId: 'chinese-starters' },
  { id: '74', name: 'Veg Manchurian Dry', description: 'वेज मंचूरियन डाय', price: 170.00, categoryId: 'chinese-starters' },
  { id: '75', name: 'Veg Manchurian Gravy', description: 'वेज मंचूरियन ग्रेवी', price: 155.00, categoryId: 'chinese-starters' },
  { id: '76', name: 'Dragon Potato', description: 'डेगन पटेटो', price: 190.00, categoryId: 'chinese-starters' },
  { id: '77', name: 'Baby Corn Chilly Dry', description: 'बेबी कॉर्न चिल्ली डाय', price: 210.00, categoryId: 'chinese-starters' },
  { id: '78', name: 'Mushroom Chilly Dry', description: 'मशरूम चिल्ली डाय', price: 215.00, categoryId: 'chinese-starters' },
  { id: '79', name: 'Veg Spring Roll', description: 'वेज स्प्रिंग रोल', price: 220.00, categoryId: 'chinese-starters' },
  { id: '80', name: 'Veg Chowmein', description: 'वेज चाऊमिन', price: 150.00, categoryId: 'chinese-starters' },
  { id: '81', name: 'American Chopsuey', description: 'अमेरीकन चोप्सी', price: 180.00, categoryId: 'chinese-starters' },

  // Tandoor Starters
  { id: '82', name: 'Paneer Tikka Dry', description: 'पनीर टिक्का डाय', price: 210.00, categoryId: 'tandoor-starters' },
  { id: '83', name: 'Paneer Tikka Gravy', description: 'पनीर टिक्का ग्रेवी', price: 210.00, categoryId: 'tandoor-starters' },
  { id: '84', name: 'Paneer Garlic Dry', description: 'पनीर गार्लिक डाय', price: 215.00, categoryId: 'tandoor-starters' },
  { id: '85', name: 'Paneer Garlic Gravy', description: 'पनीर गार्लिक ग्रेवी', price: 215.00, categoryId: 'tandoor-starters' },
  { id: '86', name: 'Paneer Malai Tikka Dry', description: 'पनीर मलाई टिक्का डाय', price: 225.00, categoryId: 'tandoor-starters' },
  { id: '87', name: 'Achari Tikka Dry', description: 'अचारी टिक्का डाय', price: 220.00, categoryId: 'tandoor-starters' },

  // Paneer ka Kamal
  { id: '88', name: 'Special Paneer Monto', description: 'स्पेशल पनीर मोन्टो', price: 230.00, categoryId: 'paneer-ka-kamal' },
  { id: '89', name: 'Paneer Tawa', description: 'पनीर तवा', price: 190.00, categoryId: 'paneer-ka-kamal' },
  { id: '90', name: 'Paneer Tikka Masala', description: 'पनीर टिक्का मसाला', price: 205.00, categoryId: 'paneer-ka-kamal' },
  { id: '91', name: 'Paneer Angara', description: 'पनीर अंगारा', price: 210.00, categoryId: 'paneer-ka-kamal' },
  { id: '92', name: 'Paneer Butter Masala', description: 'पनीर बटर मसाला', price: 195.00, categoryId: 'paneer-ka-kamal' },
  { id: '93', name: 'Paneer Bhurji', description: 'पनीर भुर्जी', price: 220.00, categoryId: 'paneer-ka-kamal' },
  { id: '94', name: 'Paneer Handi', description: 'पनीर हांडी', price: 185.00, categoryId: 'paneer-ka-kamal' },
  { id: '95', name: 'Paneer Kadai', description: 'पनीर कढ़ाई', price: 185.00, categoryId: 'paneer-ka-kamal' },
  { id: '96', name: 'Paneer Lajawab', description: 'पनीर लाजवाब', price: 190.00, categoryId: 'paneer-ka-kamal' },
  { id: '97', name: 'Paneer Toofani', description: 'पनीर तूफानी', price: 200.00, categoryId: 'paneer-ka-kamal' },
  { id: '98', name: 'Paneer Methi Garlic Masala', description: 'पनीर मैथी लहसुन मसाला', price: 200.00, categoryId: 'paneer-ka-kamal' },
  { id: '99', name: 'Paneer Chatpata', description: 'पनीर चटपटा', price: 195.00, categoryId: 'paneer-ka-kamal' },
  { id: '100', name: 'Palak Paneer', description: 'पालक पनीर', price: 170.00, categoryId: 'paneer-ka-kamal' },
  { id: '101', name: 'Mutter Paneer', description: 'मटर पनीर', price: 165.00, categoryId: 'paneer-ka-kamal' },
  { id: '102', name: 'Mushroom Paneer', description: 'मशरूम पनीर', price: 205.00, categoryId: 'paneer-ka-kamal' },

  // Kaju ka Khazana
  { id: '103', name: 'Fry Kaju Kasturi Methi', description: 'फ्राय काजु कस्तुरी मैथी', price: 225.00, categoryId: 'kaju-ka-khazana' },
  { id: '104', name: 'Fry Kaju Handi', description: 'फ्राय काजु हांडी', price: 210.00, categoryId: 'kaju-ka-khazana' },
  { id: '105', name: 'Kaju Cheese Paneer Masala', description: 'काजु चीज पनीर मसाला', price: 245.00, categoryId: 'kaju-ka-khazana' },
  { id: '106', name: 'Kaju Cheese Masala', description: 'काजु चीज मसाला', price: 230.00, categoryId: 'kaju-ka-khazana' },
  { id: '107', name: 'Kaju Curry', description: 'काजु करी', price: 200.00, categoryId: 'kaju-ka-khazana' },
  { id: '108', name: 'Kaju Butter Masala', description: 'काजु बटर मसाला', price: 205.00, categoryId: 'kaju-ka-khazana' },
  { id: '109', name: 'Kaju Masala', description: 'काजु मसाला', price: 195.00, categoryId: 'kaju-ka-khazana' },
  { id: '110', name: 'Kaju Handi', description: 'काजु हांडी', price: 200.00, categoryId: 'kaju-ka-khazana' },
  { id: '111', name: 'Cheese Paneer Masala', description: 'चीज पनीर मसाला', price: 220.00, categoryId: 'kaju-ka-khazana' },
  { id: '112', name: 'Cheese Butter Masala', description: 'चीज बटर मसाला', price: 220.00, categoryId: 'kaju-ka-khazana' },
  { id: '113', name: 'Khoya Kaju', description: 'खोया काजु', price: 210.00, categoryId: 'kaju-ka-khazana' },

  // Kofta
  { id: '114', name: 'Veg Kofta', description: 'वेज कोफ्ता', price: 175.00, categoryId: 'kofta' },
  { id: '115', name: 'Paneer Kofta', description: 'पनीर कोफ्ता', price: 195.00, categoryId: 'kofta' },
  { id: '116', name: 'Nargish Kofta', description: 'नरसिंग कोफ्ता', price: 180.00, categoryId: 'kofta' },
  { id: '117', name: 'Kaju Kofta', description: 'काजु कोफ्ता', price: 200.00, categoryId: 'kofta' },
  { id: '118', name: 'Tiranga Kofta', description: 'तिरंगा कोफ्ता', price: 215.00, categoryId: 'kofta' },
  { id: '119', name: 'Malai Kofta', description: 'मलाई कोफ्ता', price: 190.00, categoryId: 'kofta' },
  { id: '120', name: 'Kashmiri Kofta (Sweet)', description: 'कश्मीरी कोफ्ता', price: 195.00, categoryId: 'kofta' },

  // Punjab Ka Dhamaka (Veg Specials)
  { id: '121', name: 'Special Veg Monto', description: 'स्पेशल वेज मोन्टो', price: 225.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '122', name: 'Veg Angara', description: 'वेज अंगारा', price: 185.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '123', name: 'Veg Tawa', description: 'वेज तवा', price: 165.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '124', name: 'Veg Lajawab', description: 'वेज लाजवाब', price: 165.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '125', name: 'Veg Kheema', description: 'वेज कीमा', price: 145.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '126', name: 'Veg Handi', description: 'वेज हांडी', price: 140.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '127', name: 'Veg Kadai', description: 'वेज कढ़ाई', price: 140.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '128', name: 'Veg Hyderabadi', description: 'वेज हैदराबादी', price: 150.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '129', name: 'Veg Makhanwala', description: 'वेज मक्खनवाला', price: 135.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '130', name: 'Veg Kolapuri', description: 'वेज कोलापुरी', price: 140.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '131', name: 'Veg Jaipuri', description: 'वेज जयपुरी', price: 130.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '132', name: 'Veg Jawala Mukhi', description: 'वेज ज्वालामुखी', price: 175.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '133', name: 'Veg Shilsila', description: 'वेज सिलसिला', price: 170.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '134', name: 'Aloo Mutter', description: 'आलू मटर', price: 105.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '135', name: 'Aloo Palak', description: 'आलू पालक', price: 100.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '136', name: 'Chana Masala', description: 'चना मसाला', price: 110.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '137', name: 'Mix Veg', description: 'मिक्स वेज', price: 110.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '138', name: 'Plain Palak', description: 'प्लेन पालक', price: 95.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '139', name: 'Lasaniya Aloo', description: 'लसानिया आलू', price: 110.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '140', name: 'Sev Tamatar', description: 'सेव टमाटर', price: 110.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '141', name: 'Navratan Korma (Sweet)', description: 'नवरत्न कुरमा', price: 180.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '142', name: 'Sev Bhaji', description: 'सेव भाजी', price: 115.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '143', name: 'Dum Aloo', description: 'दम आलू', price: 200.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '144', name: 'Dahi Tikhari', description: 'दही टिकारी', price: 160.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '145', name: 'Aloo Do Pyaja', description: 'आलू दो प्याजा', price: 195.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '146', name: 'Save Masala', description: 'सेव मसाला', price: 110.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '147', name: 'Mushroom Masala', description: 'मशरूम मसाला', price: 195.00, categoryId: 'punjab-ka-dhamaka' },
  { id: '148', name: 'Mathi Malai Mutter', description: 'मैथी मलाई मटर', price: 210.00, categoryId: 'punjab-ka-dhamaka' },
  
  // Mitti Ki Khushbu Roti
  { id: '149', name: 'Plain Roti', description: 'सादी रोटी', price: 18.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '150', name: 'Butter Roti', description: 'मक्खन रोटी', price: 20.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '151', name: 'Plain Paratha', description: 'साद पराठा', price: 30.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '152', name: 'Butter Paratha', description: 'मक्खन पराठा', price: 35.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '153', name: 'Plain Naan', description: 'सादा नान', price: 35.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '154', name: 'Butter Naan', description: 'मक्खन नान', price: 45.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '155', name: 'Missi Roti', description: 'मिसी रोटी', price: 38.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '156', name: 'Garlic Naan', description: 'लहसुन नान', price: 70.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '157', name: 'Aloo Paratha', description: 'आलू पराठा', price: 60.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '158', name: 'Paneer Paratha', description: 'पनीर पराठा', price: 75.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '159', name: 'Onion Paratha', description: 'प्याज पराठा', price: 50.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '160', name: 'Plain Kulcha', description: 'सादा कुल्छा', price: 40.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '161', name: 'Butter Kulcha', description: 'मक्खन कुल्छा', price: 47.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '162', name: 'Masala Kulcha', description: 'मसाला कुल्छा', price: 62.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '163', name: 'Cheese Naan', description: 'चीज नान', price: 85.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '164', name: 'Cheese Garlic Naan', description: 'चीज लहसुन नान', price: 95.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '165', name: 'Cheese Paratha', description: 'चीज पराठा', price: 80.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '166', name: 'Lachha Paratha', description: 'लच्छा पराठा', price: 42.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '167', name: 'Chilly Garlic Naan', description: 'चिल्ली लहसुन नान', price: 78.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '168', name: 'Chilly Naan', description: 'चिल्ली नान', price: 50.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '169', name: 'Stuff Naan', description: 'स्टफ नान', price: 88.00, categoryId: 'mitti-ki-khushbu-roti' },
  { id: '170', name: 'Stuff Paratha', description: 'स्टफ पराठा', price: 80.00, categoryId: 'mitti-ki-khushbu-roti' },

  // Tava Roti
  { id: '171', name: 'Plain Tava Roti', description: 'सादी तवा रोटी', price: 15.00, categoryId: 'tava-roti' },
  { id: '172', name: 'Butter Tava Roti', description: 'मक्खन तवा रोटी', price: 20.00, categoryId: 'tava-roti' },
  { id: '173', name: 'Tava Paratha', description: 'तवा पराठा', price: 40.00, categoryId: 'tava-roti' },
  { id: '174', name: 'Makka Roti', description: 'मक्का रोटी', price: 50.00, categoryId: 'tava-roti' },
  { id: '175', name: 'Jawar Roti', description: 'ज्वार रोटी', price: 50.00, categoryId: 'tava-roti' },

  // South Indian Fancy Dosa
  { id: '176', name: 'Masala Dosa', description: 'मसाला डोसा', price: 130.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '177', name: 'Paneer Masala Dosa', description: 'पनीर मसाला डोसा', price: 145.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '178', name: 'Cheese Masala Dosa', description: 'चीज मसाला डोसा', price: 150.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '179', name: 'Aloo Palak Dosa', description: 'आलू पालक डोसा', price: 128.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '180', name: 'Aloo Palak Cheese Masala Dosa', description: 'आलू पालक चीज मसाला डोसा', price: 155.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '181', name: 'Paneer Cheese Masala Dosa', description: 'पनीर चीज मसाला डोसा', price: 165.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '182', name: 'Mix Masala Dosa', description: 'मिक्स मसाला डोसा', price: 150.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '183', name: 'Monto S.P. Masala Dosa', description: 'मोन्टो स्पेशल मसाला डोसा', price: 200.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '184', name: 'Jinirole Dosa', description: 'जीनी रोल डोसा', price: 180.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '185', name: 'Palak Paneer Dosa', description: 'पालक पनीर डोसा', price: 152.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '186', name: 'Palak Cheese Dosa', description: 'पालक चीज डोसा', price: 162.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '187', name: 'Palak Paneer Cheese Dosa', description: 'पालक पनीर चीज डोसा', price: 170.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '188', name: 'Spring Roll Dosa', description: 'स्प्रिंग रोल डोसा', price: 165.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '189', name: 'Chinese Dosa', description: 'चाइनीज डोसा', price: 145.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '190', name: 'Rajarani Dosa', description: 'राजारानी डोसा', price: 160.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '191', name: 'Dilkhus Dosa', description: 'दिलखुश डोसा', price: 155.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '192', name: 'Paneer Chilli Dosa', description: 'पनीर चिली डोसा', price: 147.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '193', name: 'Onion Dosa', description: 'ओनियन डोसा', price: 120.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '194', name: 'Pizza Dosa', description: 'पिज्जा डोसा', price: 180.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '195', name: 'Meggie Dosa', description: 'मेगी डोसा', price: 0.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '196', name: 'Janak Payal Dosa', description: 'जनक पायल डोसा', price: 180.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '197', name: 'Sweet Corn Dosa', description: 'स्वीट्स कोर्न डोसा', price: 175.00, categoryId: 'south-indian-fancy-dosa' },
  { id: '198', name: 'M.K.T. Dosa', description: 'एम.के.टी. डोसा', price: 200.00, categoryId: 'south-indian-fancy-dosa' },
  
  // Kuch ke Kuch Saath
  { id: '199', name: 'Dal Makhani', description: 'दाल मखनी', price: 135.00, categoryId: 'kuch-ke-kuch-saath' },
  { id: '200', name: 'Dal Tadka', description: 'दाल तड़का', price: 122.00, categoryId: 'kuch-ke-kuch-saath' },
  { id: '201', name: 'Dal Fry', description: 'दाल फ्राय', price: 117.00, categoryId: 'kuch-ke-kuch-saath' },
  { id: '202', name: 'Dal Fry Butter', description: 'दाल फ्राय बटर', price: 120.00, categoryId: 'kuch-ke-kuch-saath' },
  { id: '203', name: 'Dal Khatti Mithi', description: 'दाल खट्टी मिठी', price: 118.00, categoryId: 'kuch-ke-kuch-saath' },
  { id: '204', name: 'Dal Tadka Butter', description: 'दाल तड़का बटर', price: 125.00, categoryId: 'kuch-ke-kuch-saath' },
  
  // Basmati Ka Swad Rice
  { id: '205', name: 'S.P. Veg Monto Biriyani', description: 'स्पेशल वेज मोन्टो बिरयानी', price: 190.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '206', name: 'Dum Biriyani', description: 'दम बिरयानी', price: 170.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '207', name: 'Hyderabadi Biriyani', description: 'हैदराबादी बिरयानी', price: 165.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '208', name: 'Veg Biriyani', description: 'वेज बिरयानी', price: 162.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '209', name: 'Veg Pulav', description: 'वेज पुलाव', price: 140.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '210', name: 'Kashmiri Pulav (Sweet)', description: 'कश्मीरी पुलाव (स्वीट)', price: 155.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '211', name: 'Kaju Pulav', description: 'काजु पुलाव', price: 150.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '212', name: 'Mater Pulav', description: 'मटर पुलाव', price: 140.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '213', name: 'Masala Rice', description: 'मसाला राईस', price: 120.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '214', name: 'Jeera Rice', description: 'जीरा राईस', price: 118.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '215', name: 'Plain Rice', description: 'प्लेन राईस', price: 100.00, categoryId: 'basmati-ka-swad-rice' },
  { id: '216', name: 'Steam Rice', description: 'स्टीम राईस', price: 110.00, categoryId: 'basmati-ka-swad-rice' },

  // Mozzarella Pizza
  { id: '217', name: 'S.P. Monto Mozzarella Pizza', description: 'स्पेशल मोन्टो मोजरेला पिज्जा', price: 210.00, categoryId: 'mozzarella-pizza' },
  { id: '218', name: 'Italian Mozzarella Pizza', description: 'इटालियन मोजरेला पिज्जा', price: 170.00, categoryId: 'mozzarella-pizza' },
  { id: '219', name: 'Indian Garden Mozzarella Pizza', description: 'इंडियन गार्डन मोजरेला पिज्जा', price: 180.00, categoryId: 'mozzarella-pizza' },
  { id: '220', name: 'Continental Mozzarella Pizza', description: 'कांटिनेन्टल मोजरेला पिज्जा', price: 160.00, categoryId: 'mozzarella-pizza' },
  { id: '221', name: 'Marghrita Mozzarella Pizza', description: 'मारगरिटा मोजरेला पिज्जा', price: 160.00, categoryId: 'mozzarella-pizza' },
  { id: '222', name: 'Paneer Mozzarella Pizza', description: 'पनीर मोजरेला पिज्जा', price: 185.00, categoryId: 'mozzarella-pizza' },
  { id: '223', name: 'American Mozzarella Pizza', description: 'अमेरिका मोजरेला पिज्जा', price: 170.00, categoryId: 'mozzarella-pizza' },

  // Toast Sandwich
  { id: '224', name: 'Cheese Garlic Toast', description: 'चीज गार्लिक टोस्ट', price: 92.00, categoryId: 'toast-sandwich' },
  { id: '225', name: 'Cheese Chilly Toast', description: 'चीज चिली टोस्ट', price: 82.00, categoryId: 'toast-sandwich' },
  { id: '226', name: 'Bread Butter Toast', description: 'ब्रेड बटर टोस्ट', price: 70.00, categoryId: 'toast-sandwich' },
  { id: '227', name: 'Peppy Paneer Toast', description: 'पेपी पनीर टोस्ट', price: 90.00, categoryId: 'toast-sandwich' },
  { id: '228', name: 'Maxican Burst Toast', description: 'मेक्सिकन ब्रेड टोस्ट', price: 100.00, categoryId: 'toast-sandwich' },
  { id: '229', name: 'Cheese Burst Toast', description: 'चीज ब्रेड टोस्ट', price: 95.00, categoryId: 'toast-sandwich' },
  { id: '230', name: 'Paneer Cheese Toast', description: 'पनीर चीज टोस्ट', price: 102.00, categoryId: 'toast-sandwich' },

  // Pav Bhaji
  { id: '231', name: 'S.P. Pav Bhaji', description: 'स्पेशल पाव भाजी', price: 165.00, categoryId: 'pav-bhaji' },
  { id: '232', name: 'Butter Bhaji', description: 'बटर भाजी', price: 155.00, categoryId: 'pav-bhaji' },
  { id: '233', name: 'Green Bhaji', description: 'ग्रीन भाजी', price: 150.00, categoryId: 'pav-bhaji' },
  { id: '234', name: 'Ex. Pav', description: 'एक्स्ट्रा पाव', price: 15.00, categoryId: 'pav-bhaji' },
  
  // Pizza
  { id: '235', name: 'Special Monto Pizza', description: 'स्पेशल मोन्टो पिज्जा', price: 200.00, categoryId: 'pizza' },
  { id: '236', name: 'Italian Pizza', description: 'इटालियन पिज्जा', price: 150.00, categoryId: 'pizza' },
  { id: '237', name: 'Veg Pizza', description: 'वेज पिज्जा', price: 140.00, categoryId: 'pizza' },
  { id: '238', name: 'American Pizza', description: 'अमेरिका पिज्जा', price: 150.00, categoryId: 'pizza' },
  { id: '239', name: 'Indian Garden Pizza', description: 'इंडियन गार्डन पिज्जा', price: 160.00, categoryId: 'pizza' },
  { id: '240', name: 'Mushroom Pizza', description: 'मशरूम पिज्जा', price: 148.00, categoryId: 'pizza' },
  { id: '241', name: 'Pineapple Pizza', description: 'पाईनापल पिज्जा', price: 146.00, categoryId: 'pizza' },
  { id: '242', name: 'Paneer Pizza', description: 'पनीर पिज्जा', price: 160.00, categoryId: 'pizza' },
  { id: '243', name: 'Onion Capsicum Pizza', description: 'ओनियन कैप्सिकम पिज्जा', price: 145.00, categoryId: 'pizza' },
  { id: '244', name: 'Continental Pizza', description: 'कॉटिनेंटल पिज्जा', price: 140.00, categoryId: 'pizza' },
  { id: '245', name: 'Cheese Pizza', description: 'चीज पिज्जा', price: 135.00, categoryId: 'pizza' },
  { id: '246', name: 'Corn Pizza', description: 'कॉर्न पिज्जा', price: 148.00, categoryId: 'pizza' },
  { id: '247', name: 'Tango Chilly Pizza', description: 'टेंगो चिल्ली पिज्जा', price: 145.00, categoryId: 'pizza' },
  { id: '248', name: 'Onion Pizza', description: 'ओनियन पिज्जा', price: 130.00, categoryId: 'pizza' },
  { id: '249', name: 'Simple Cheese Pizza', description: 'सिंपल पिज्जा', price: 130.00, categoryId: 'pizza' },
  { id: '250', name: 'Double Cheese Pizza', description: 'डबल चीज पिज्जा', price: 160.00, categoryId: 'pizza' },

  // Grill Sandwich
  { id: '251', name: 'Veg Cheese Chocolate Grill', description: 'वेज चीज चॉकलेट सैंडविच', price: 87.00, categoryId: 'grill-sandwich' },
  { id: '252', name: 'Garden Grill', description: 'गार्डन ग्रील सैंडविच', price: 92.00, categoryId: 'grill-sandwich' },
  { id: '253', name: 'S.P. Club Grill', description: 'स्पे. क्लब ग्रील सैंडविच', price: 150.00, categoryId: 'grill-sandwich' },
  { id: '254', name: 'Aloo Mutter Grill', description: 'आलू मटर ग्रील सैंडविच', price: 85.00, categoryId: 'grill-sandwich' },
  { id: '255', name: 'Masala Grill', description: 'मसाला ग्रील सैंडविच', price: 92.00, categoryId: 'grill-sandwich' },
  { id: '256', name: 'Indian Garden Grill', description: 'इंडियन गार्डन ग्रील सैंडविच', price: 102.00, categoryId: 'grill-sandwich' },
  { id: '257', name: 'Veg Cheese Grill', description: 'वेज चीज सैंडविच', price: 88.00, categoryId: 'grill-sandwich' },
  { id: '258', name: 'Maxican Grill', description: 'मेक्सिकन ग्रील सैंडविच', price: 95.00, categoryId: 'grill-sandwich' },
  { id: '259', name: 'Italian Grill', description: 'इटालियन ग्रील सैंडविच', price: 92.00, categoryId: 'grill-sandwich' },
  { id: '260', name: 'Cheese Grill', description: 'चीज ग्रील सैंडविच', price: 90.00, categoryId: 'grill-sandwich' },
  { id: '261', name: 'Cheese Masala Sandwich', description: 'चीज मसाला सैंडविच', price: 105.00, categoryId: 'grill-sandwich' },
  
  // Burger
  { id: '262', name: 'S.P. Monto Burger', description: 'स्पेशल मोन्टो बर्गर', price: 92.00, categoryId: 'burger' },
  { id: '263', name: 'Veg Burger', description: 'वेज बर्गर', price: 77.00, categoryId: 'burger' },
  { id: '264', name: 'Cheese Burger', description: 'चीज बर्गर', price: 80.00, categoryId: 'burger' },
  { id: '265', name: 'Aloo Tikki Burger', description: 'आलू टिक्का बर्गर', price: 72.00, categoryId: 'burger' },
  { id: '266', name: 'Masala Burger', description: 'मसाला बर्गर', price: 70.00, categoryId: 'burger' },

  // Sip-in Soda
  { id: '267', name: 'Fresh Lemon Soda', description: 'फ्रेश लेमन सोडा', price: 40.00, categoryId: 'sip-in-soda' },
  { id: '268', name: 'Kala Khatta Lime', description: 'काला खटटा लाइम', price: 45.00, categoryId: 'sip-in-soda' },
  { id: '269', name: 'Sweet Lime Soda', description: 'मीठा लाइम सोडा', price: 40.00, categoryId: 'sip-in-soda' },
  { id: '270', name: 'Salt Lime Soda', description: 'साल्ट लाइम सोडा', price: 40.00, categoryId: 'sip-in-soda' },
  { id: '271', name: 'Masala Lime Soda', description: 'मसाला लाइम सोडा', price: 0.00, categoryId: 'sip-in-soda' },
  { id: '272', name: 'Jal Jeera Lime Soda', description: 'जल जीरा लाइम सोडा', price: 45.00, categoryId: 'sip-in-soda' },
  
  // Paper Dosa
  { id: '273', name: 'Ginger Paper', description: 'जिंजर पेपर', price: 92.00, categoryId: 'paper-dosa' },
  { id: '274', name: 'Sada Paper', description: 'सादा पेपर', price: 90.00, categoryId: 'paper-dosa' },
  { id: '275', name: 'Baby Paper', description: 'बेबी पेपर', price: 88.00, categoryId: 'paper-dosa' },
  { id: '276', name: 'Jira Paper', description: 'जीरा पेपर', price: 90.00, categoryId: 'paper-dosa' },
  { id: '277', name: 'Garlic Paper', description: 'गार्लिक पेपर', price: 130.00, categoryId: 'paper-dosa' },
  { id: '278', name: 'Masala Paper', description: 'मसाला पेपर', price: 145.00, categoryId: 'paper-dosa' },
  { id: '279', name: 'Naylon Paper', description: 'नायलॉन पेपर', price: 135.00, categoryId: 'paper-dosa' },
  { id: '280', name: 'Chocolate Paper', description: 'चॉकलेट पेपर', price: 150.00, categoryId: 'paper-dosa' },
  { id: '281', name: 'Cheese Paper', description: 'चीज पेपर', price: 162.00, categoryId: 'paper-dosa' },
  { id: '282', name: 'Cheese Garlic Paper', description: 'चीज गार्लिक पेपर', price: 172.00, categoryId: 'paper-dosa' },
  { id: '283', name: 'Paneer Cheese Paper', description: 'पनीर चीज पेपर', price: 175.00, categoryId: 'paper-dosa' },
  { id: '284', name: 'Kashmiri Naylon Paper', description: 'कश्मीरी नायलॉन पेपर', price: 100.00, categoryId: 'paper-dosa' },

  // Uttapam
  { id: '285', name: 'Sada Uttapam', description: 'सादा उत्तपम', price: 115.00, categoryId: 'uttapam' },
  { id: '286', name: 'Masala Uttapam', description: 'मसाला उत्तपम', price: 150.00, categoryId: 'uttapam' },
  { id: '287', name: 'Tomato Uttapam', description: 'टमाटर उत्तपम', price: 128.00, categoryId: 'uttapam' },
  { id: '288', name: 'Onion Uttapam', description: 'प्याज उत्तपम', price: 138.00, categoryId: 'uttapam' },
  { id: '289', name: 'Capsicum Uttapam', description: 'केपसीकम उत्तपम', price: 138.00, categoryId: 'uttapam' },
  { id: '290', name: 'Onion Capsicum Uttapam', description: 'प्याज केपसीकम उत्तपम', price: 148.00, categoryId: 'uttapam' },
  { id: '291', name: 'Mix Uttapam', description: 'मिक्स उत्तपम', price: 160.00, categoryId: 'uttapam' },
  
  // Monto Special Thali
  { id: '292', name: 'Monto Special Thali (₹201/-)', description: 'मोन्टो स्पेशल थाली (₹२०१/-). In Fixed Quantity: Roasted Papad, Salad, Paneer Sabji, Vegetable Dal Tadka, Rice, 4 Chapati, Sweet: Rasgulla (1 piece).', price: 201.00, categoryId: 'monto-special-thali' },
];

let orders: Order[] = [];

// Menu Data Functions
export const getMenuData = async () => {
  return { categories, menuItems };
};

export const getMenuItems = async () => {
  return menuItems;
}

export const getCategories = async () => {
  return categories;
}

export const addMenuItem = async (item: Omit<MenuItem, 'id'>) => {
  const newItem = { ...item, id: Date.now().toString() };
  menuItems.push(newItem);
  return newItem;
};

export const updateMenuItem = async (updatedItem: MenuItem) => {
  menuItems = menuItems.map(item => item.id === updatedItem.id ? updatedItem : item);
  return updatedItem;
};

export const deleteMenuItem = async (id: string) => {
  menuItems = menuItems.filter(item => item.id !== id);
  return { success: true };
};


// Order Data Functions
export const getOrders = async () => {
  return orders.sort((a, b) => b.createdAt.getTime() - a.createdAt.getTime());
};

export const addOrder = async (tableNumber: number, items: CartItem[], total: number) => {
  const newOrder: Order = {
    id: `ord-${Date.now()}`,
    tableNumber,
    items,
    total,
    status: 'pending',
    createdAt: new Date(),
  };
  orders.push(newOrder);
  return newOrder;
};

export const updateOrderStatus = async (id: string, status: 'pending' | 'completed') => {
  const order = orders.find(o => o.id === id);
  if (order) {
    order.status = status;
    return order;
  }
  return null;
};
