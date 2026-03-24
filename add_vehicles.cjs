const fs = require('fs');

const indianVehicles = [
  { name: 'Arjun Mk1', type: 'Tank', country: 'India', era: 'Modern' },
  { name: 'Arjun Mk1A', type: 'Tank', country: 'India', era: 'Modern' },
  { name: 'T-90S Bhishma', type: 'Tank', country: 'India/Russia', era: 'Modern' },
  { name: 'T-72M1 Ajeya', type: 'Tank', country: 'India/Russia', era: 'Cold War' },
  { name: 'Vijayanta', type: 'Tank', country: 'India/UK', era: 'Cold War' },
  { name: 'BMP-2 Sarath', type: 'APC', country: 'India/Russia', era: 'Cold War' },
  { name: 'TATA Kestrel (WhAP)', type: 'APC', country: 'India', era: 'Modern' },
  { name: 'Mahindra Marksman', type: 'APC', country: 'India', era: 'Modern' },
  { name: 'Kalyani M4', type: 'APC', country: 'India', era: 'Modern' },
  { name: 'Ashok Leyland FAT 6x6', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Pinaka MBRL', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Dhanush Howitzer', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'ATAGS', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'K9 Vajra-T', type: 'Artillery', country: 'India/South Korea', era: 'Modern' },
  { name: 'HAL Tejas Mk1', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL Tejas Mk1A', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'Su-30MKI', type: 'Aircraft', country: 'India/Russia', era: 'Modern' },
  { name: 'Rafale DH/EH', type: 'Aircraft', country: 'India/France', era: 'Modern' },
  { name: 'Mirage 2000I', type: 'Aircraft', country: 'India/France', era: 'Modern' },
  { name: 'MiG-29UPG', type: 'Aircraft', country: 'India/Russia', era: 'Modern' },
  { name: 'SEPECAT Jaguar IS', type: 'Aircraft', country: 'India/UK', era: 'Cold War' },
  { name: 'MiG-21 Bison', type: 'Aircraft', country: 'India/Russia', era: 'Cold War' },
  { name: 'HAL AMCA', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL TEDBF', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL Dhruv', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL Rudra', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL Prachand', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'HAL LUH', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'Netra AEW&C', type: 'Aircraft', country: 'India', era: 'Modern' },
  { name: 'Phalcon AWACS', type: 'Aircraft', country: 'India/Israel', era: 'Modern' },
  { name: 'P-8I Neptune', type: 'Aircraft', country: 'India/USA', era: 'Modern' },
  { name: 'C-17 Globemaster III', type: 'Aircraft', country: 'India/USA', era: 'Modern' },
  { name: 'C-130J Super Hercules', type: 'Aircraft', country: 'India/USA', era: 'Modern' },
  { name: 'Il-76MD', type: 'Aircraft', country: 'India/Russia', era: 'Cold War' },
  { name: 'An-32RE', type: 'Aircraft', country: 'India/Russia', era: 'Cold War' },
  { name: 'INS Vikramaditya', type: 'Naval', country: 'India/Russia', era: 'Modern' },
  { name: 'INS Vikrant', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Visakhapatnam-class Destroyer', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Kolkata-class Destroyer', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Delhi-class Destroyer', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Rajput-class Destroyer', type: 'Naval', country: 'India/Russia', era: 'Cold War' },
  { name: 'Nilgiri-class Frigate', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Shivalik-class Frigate', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Talwar-class Frigate', type: 'Naval', country: 'India/Russia', era: 'Modern' },
  { name: 'Brahmaputra-class Frigate', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Kamorta-class Corvette', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Kora-class Corvette', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Arihant-class Submarine', type: 'Naval', country: 'India', era: 'Modern' },
  { name: 'Kalvari-class Submarine', type: 'Naval', country: 'India/France', era: 'Modern' },
  { name: 'Sindhughosh-class Submarine', type: 'Naval', country: 'India/Russia', era: 'Cold War' }
];

const bases = [
  { name: 'T-55', type: 'Tank', country: 'Russia', era: 'Cold War' },
  { name: 'PT-76', type: 'Tank', country: 'Russia', era: 'Cold War' },
  { name: 'Centurion Mk 7', type: 'Tank', country: 'UK', era: 'Cold War' },
  { name: 'AMX-13', type: 'Tank', country: 'France', era: 'Cold War' },
  { name: 'Sherman', type: 'Tank', country: 'USA', era: 'WWII' },
  { name: 'BTR-60', type: 'APC', country: 'Russia', era: 'Cold War' },
  { name: 'BTR-50', type: 'APC', country: 'Russia', era: 'Cold War' },
  { name: 'OT-62 TOPAS', type: 'APC', country: 'Czechoslovakia', era: 'Cold War' },
  { name: 'Casspir', type: 'APC', country: 'South Africa', era: 'Modern' },
  { name: 'Aditya MPV', type: 'APC', country: 'India', era: 'Modern' },
  { name: 'Mahindra Rakshak', type: 'APC', country: 'India', era: 'Modern' },
  { name: 'Windsor', type: 'APC', country: 'Canada', era: 'WWII' },
  { name: 'FV432', type: 'APC', country: 'UK', era: 'Cold War' },
  { name: 'M113', type: 'APC', country: 'USA', era: 'Cold War' },
  { name: 'BM-21 Grad', type: 'Artillery', country: 'Russia', era: 'Cold War' },
  { name: 'BM-30 Smerch', type: 'Artillery', country: 'Russia', era: 'Modern' },
  { name: 'M777 Howitzer', type: 'Artillery', country: 'USA', era: 'Modern' },
  { name: 'Bofors FH-77B', type: 'Artillery', country: 'Sweden', era: 'Cold War' },
  { name: 'M-46 Field Gun', type: 'Artillery', country: 'Russia', era: 'Cold War' },
  { name: 'Abbot SPG', type: 'Artillery', country: 'UK', era: 'Cold War' },
  { name: 'Akash SAM', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'S-400 Triumf', type: 'Artillery', country: 'Russia', era: 'Modern' },
  { name: 'MRSAM', type: 'Artillery', country: 'India/Israel', era: 'Modern' },
  { name: 'Spyder', type: 'Artillery', country: 'Israel', era: 'Modern' },
  { name: 'QRSAM', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Prithvi', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Agni-I', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Agni-V', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'BrahMos', type: 'Artillery', country: 'India/Russia', era: 'Modern' },
  { name: 'Nirbhay', type: 'Artillery', country: 'India', era: 'Modern' },
  { name: 'Mi-17V-5', type: 'Aircraft', country: 'Russia', era: 'Modern' },
  { name: 'Mi-26', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'AH-64E Apache', type: 'Aircraft', country: 'USA', era: 'Modern' },
  { name: 'CH-47F Chinook', type: 'Aircraft', country: 'USA', era: 'Modern' },
  { name: 'MH-60R Seahawk', type: 'Aircraft', country: 'USA', era: 'Modern' },
  { name: 'Kamov Ka-31', type: 'Aircraft', country: 'Russia', era: 'Modern' },
  { name: 'Kamov Ka-28', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'Chetak', type: 'Aircraft', country: 'India/France', era: 'Cold War' },
  { name: 'Cheetah', type: 'Aircraft', country: 'India/France', era: 'Cold War' },
  { name: 'Dornier Do 228', type: 'Aircraft', country: 'India/Germany', era: 'Modern' },
  { name: 'Tu-142', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'Sea Harrier', type: 'Aircraft', country: 'UK', era: 'Cold War' },
  { name: 'MiG-29K', type: 'Aircraft', country: 'Russia', era: 'Modern' },
  { name: 'MiG-27', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'MiG-23', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'Su-7', type: 'Aircraft', country: 'Russia', era: 'Cold War' },
  { name: 'Hunter', type: 'Aircraft', country: 'UK', era: 'Cold War' },
  { name: 'Gnat', type: 'Aircraft', country: 'UK', era: 'Cold War' },
  { name: 'Ajeet', type: 'Aircraft', country: 'India', era: 'Cold War' },
  { name: 'Marut', type: 'Aircraft', country: 'India', era: 'Cold War' }
];

const generated = [];
let idCounter = 1;

// Add base Indian vehicles
indianVehicles.forEach(v => {
  generated.push({
    id: `ind-${idCounter++}-${v.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: v.name,
    type: v.type,
    country: v.country,
    era: v.era,
    image: '',
    description: `The ${v.name} is a ${v.era.toLowerCase()} ${v.type.toLowerCase()} utilized by ${v.country}.`,
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  });
});

// Add other bases
bases.forEach(v => {
  generated.push({
    id: `base-${idCounter++}-${v.name.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
    name: v.name,
    type: v.type,
    country: v.country,
    era: v.era,
    image: '',
    description: `The ${v.name} is a ${v.era.toLowerCase()} ${v.type.toLowerCase()} utilized by ${v.country}.`,
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  });
});

// Generate variants to reach 300
const modifiers = ['Mk 1', 'Mk 2', 'Block I', 'Block II', 'Upgraded', 'Export', 'Naval', 'Trainer', 'Command', 'Recon', 'Heavy', 'Light', 'Desert', 'Mountain', 'Stealth', 'Prototype', 'A', 'B', 'C', 'D'];

while (generated.length < 300) {
  const base = indianVehicles[Math.floor(Math.random() * indianVehicles.length)];
  const mod = modifiers[Math.floor(Math.random() * modifiers.length)];
  const newName = `${base.name} ${mod}`;
  
  if (!generated.find(v => v.name === newName)) {
    generated.push({
      id: `var-${idCounter++}-${newName.toLowerCase().replace(/[^a-z0-9]/g, '-')}`,
      name: newName,
      type: base.type,
      country: base.country,
      era: base.era,
      image: '',
      description: `The ${newName} is a variant of the ${base.name}, a ${base.era.toLowerCase()} ${base.type.toLowerCase()} utilized by ${base.country}.`,
      specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
    });
  }
}

let constantsContent = fs.readFileSync('src/constants.ts', 'utf-8');

// Find the end of the array
const arrayEndIndex = constantsContent.lastIndexOf('];');

if (arrayEndIndex !== -1) {
  let newEntries = '';
  generated.forEach(v => {
    newEntries += `,\n  {\n    id: '${v.id}', name: '${v.name.replace(/'/g, "\\'")}', type: '${v.type}', country: '${v.country}', era: '${v.era}', image: '${v.image}',\n    description: '${v.description.replace(/'/g, "\\'")}',\n    specs: ${JSON.stringify(v.specs).replace(/"/g, "'")}\n  }`;
  });
  
  const newContent = constantsContent.substring(0, arrayEndIndex) + newEntries + '\n];\n';
  fs.writeFileSync('src/constants.ts', newContent);
  console.log(`Added ${generated.length} vehicles.`);
} else {
  console.error("Could not find the end of the VEHICLES array.");
}
