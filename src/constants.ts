import { Vehicle } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'm1a2-abrams',
    name: 'M1A2 Abrams',
    type: 'Tank',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The M1A2 Abrams is a third-generation American main battle tank designed by Chrysler Defense.',
    specs: {
      weight: '66.8 tons',
      speed: '67 km/h',
      armament: ['120mm L/44 M256A1 smoothbore gun', '1 × 0.50 cal (12.7 mm) M2HB heavy machine gun', '2 × 7.62 mm M240 machine guns'],
      armor: 'Chobham, depleted uranium mesh-reinforced composite armor',
      crew: 4,
      range: '426 km',
      engine: 'Honeywell AGT1500C multi-fuel turbine engine'
    },
    variants: [
      { name: 'M1A2 SEP', description: 'System Enhancement Package with upgraded armor and electronics.' }
    ],
    timeline: [
      { year: '1992', event: 'M1A2 variant introduced.' }
    ]
  },
  {
    id: 't-14-armata',
    name: 'T-14 Armata',
    type: 'Tank',
    country: 'Russia',
    era: 'Modern',
    image: '',
    description: 'The T-14 Armata is a next-generation Russian main battle tank based on the Armata Universal Combat Platform.',
    specs: {
      weight: '55 tons',
      speed: '80 km/h',
      armament: ['125 mm 2A82-1M smoothbore gun', '12.7 mm Kord machine gun', '7.62 mm PKTM machine gun'],
      armor: 'Malachit dual-reactive armor',
      crew: 3,
      range: '500 km',
      engine: 'ChTZ 12N360 (A-85-3A) diesel engine'
    }
  },
  {
    id: 'f-22-raptor',
    name: 'F-22 Raptor',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Lockheed Martin F-22 Raptor is an American single-seat, twin-engine, all-weather stealth tactical fighter aircraft.',
    specs: {
      weight: '19,700 kg (empty)',
      speed: 'Mach 2.25',
      armament: ['1× 20 mm M61A2 Vulcan rotary cannon', '6× AIM-120 AMRAAM', '2× AIM-9 Sidewinder'],
      crew: 1,
      range: '2,960 km',
      engine: '2 × Pratt & Whitney F119-PW-100 turbofans'
    }
  },
  {
    id: 'm2-bradley',
    name: 'M2 Bradley',
    type: 'APC',
    country: 'United States',
    era: 'Cold War',
    image: '',
    description: 'The M2 Bradley is an American infantry fighting vehicle that is a member of the Bradley Fighting Vehicle family.',
    specs: {
      weight: '27.6 tons',
      speed: '66 km/h',
      armament: ['25 mm M242 chain gun', 'TOW anti-tank missiles', '7.62 mm M240C machine gun'],
      armor: 'Spaced laminate armor',
      crew: 3,
      range: '483 km',
      engine: 'Cummins VTA-903T diesel'
    }
  },
  {
    id: 'nimitz-class',
    name: 'Nimitz-class Aircraft Carrier',
    type: 'Naval',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Nimitz class is a class of ten nuclear-powered aircraft carriers in service with the United States Navy.',
    specs: {
      weight: '100,000 long tons',
      speed: '30+ knots',
      armament: ['2 × Sea Sparrow', '2 × RIM-116 Rolling Airframe Missile', '2 × PHALANX CIWS'],
      crew: 6012,
      range: 'Unlimited',
      engine: '2 × Westinghouse A4W nuclear reactors'
    }
  },
  {
    id: 'm142-himars',
    name: 'M142 HIMARS',
    type: 'Artillery',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The M142 High Mobility Artillery Rocket System (HIMARS) is a light multiple rocket launcher developed in the late 1990s.',
    specs: {
      weight: '16.25 tons',
      speed: '85 km/h',
      armament: ['6 × 227 mm M270 series rockets or 1 MGM-140 ATACMS missile'],
      armor: 'Protection against small arms and shell splinters',
      crew: 3,
      range: '480 km',
      engine: 'Caterpillar 3115 ATAAC 6.6-liter diesel'
    }
  },
  {
    id: 'challenger-2',
    name: 'Challenger 2',
    type: 'Tank',
    country: 'United Kingdom',
    era: 'Modern',
    image: '',
    description: 'The FV4034 Challenger 2 is a British main battle tank (MBT) in service with the armies of the United Kingdom and Oman.',
    specs: {
      weight: '62.5 tons',
      speed: '59 km/h',
      armament: ['120 mm L30A1 rifled gun', '7.62 mm L94A1 chain gun', '7.62 mm L37A2 machine gun'],
      armor: 'Chobham / Dorchester Level 2',
      crew: 4,
      range: '550 km',
      engine: 'Perkins CV12-6A V12 diesel 1,200 hp'
    }
  },
  {
    id: 'leopard-2a7',
    name: 'Leopard 2A7',
    type: 'Tank',
    country: 'Germany',
    era: 'Modern',
    image: '',
    description: 'The Leopard 2 is a 3rd generation main battle tank originally developed by Krauss-Maffei in the 1970s for the West German army.',
    specs: {
      weight: '66.5 tons',
      speed: '68 km/h',
      armament: ['120 mm Rheinmetall L/55 smoothbore gun', '2 × 7.62 mm MG3A1 machine guns'],
      armor: '3rd generation composite; including high-hardness steel, tungsten and plastic filler with ceramic component',
      crew: 4,
      range: '450 km',
      engine: 'MTU MB 873 Ka-501 liquid-cooled V12 twin-turbo diesel'
    }
  },
  {
    id: 'dassault-rafale',
    name: 'Dassault Rafale',
    type: 'Aircraft',
    country: 'France',
    era: 'Modern',
    image: '',
    description: 'The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation.',
    specs: {
      weight: '10,300 kg (empty)',
      speed: 'Mach 1.8',
      armament: ['1× 30 mm GIAT 30/M791 autocannon', 'Air-to-air missiles: Magic II, MICA, Meteor', 'Air-to-ground missiles: SCALP EG, AASM'],
      crew: 1,
      range: '3,700 km',
      engine: '2 × Snecma M88-4e turbofans'
    }
  },
  {
    id: 'type-99',
    name: 'Type 99',
    type: 'Tank',
    country: 'China',
    era: 'Modern',
    image: '',
    description: 'The Type 99 is a Chinese third generation main battle tank (MBT). It is the current most advanced main battle tank fielded by the People\'s Liberation Army Ground Force.',
    specs: {
      weight: '54 tons',
      speed: '80 km/h',
      armament: ['125 mm ZPT-98 smoothbore gun', '12.7 mm QJC-88 heavy machine gun', '7.62 mm Type 86 coaxial machine gun'],
      armor: 'Composite armor with explosive reactive armor (ERA)',
      crew: 3,
      range: '500 km',
      engine: '150HB 1,500 hp diesel engine'
    }
  },
  {
    id: 'merkava-mk4',
    name: 'Merkava Mk.4',
    type: 'Tank',
    country: 'Israel',
    era: 'Modern',
    image: '',
    description: 'The Merkava is a series of main battle tanks used by the Israel Defense Forces. The Mk.4 is the most recent variant.',
    specs: {
      weight: '65 tons',
      speed: '64 km/h',
      armament: ['120 mm MG253 smoothbore gun', '1 × 12.7 mm heavy machine gun', '2 × 7.62 mm machine guns', '1 × 60 mm internal mortar'],
      armor: 'Modular composite armor, Trophy active protection system',
      crew: 4,
      range: '500 km',
      engine: 'General Dynamics GD883 V12 water-cooled diesel'
    }
  },
  {
    id: 'k2-black-panther',
    name: 'K2 Black Panther',
    type: 'Tank',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The K2 Black Panther is a next-generation South Korean main battle tank designed by the Agency for Defense Development.',
    specs: {
      weight: '55 tons',
      speed: '70 km/h',
      armament: ['120 mm L/55 smoothbore gun', '12.7 mm K6 heavy machine gun', '7.62 mm coaxial machine gun'],
      armor: 'Classified composite armor with ERA and NERA',
      crew: 3,
      range: '450 km',
      engine: 'MTU MT883 / Doosan Infracore DV27K 1,500 hp diesel'
    }
  },
  {
    id: 'type-10',
    name: 'Type 10',
    type: 'Tank',
    country: 'Japan',
    era: 'Modern',
    image: '',
    description: 'The Type 10 is a next-generation main battle tank of JSDF produced by Mitsubishi Heavy Industries for the Japanese Ground Self Defense Force.',
    specs: {
      weight: '44 tons',
      speed: '70 km/h',
      armament: ['Japan Steel Works 120 mm smoothbore cannon', '12.7 mm M2HB machine gun', '7.62 mm Type 74 machine gun'],
      armor: 'Nano-crystal steel, modular ceramic composite armor',
      crew: 3,
      range: '500 km',
      engine: 'Mitsubishi 8VA34WTK 8-cylinder diesel 1,200 hp'
    }
  },
  {
    id: 'c1-ariete',
    name: 'C1 Ariete',
    type: 'Tank',
    country: 'Italy',
    era: 'Modern',
    image: '',
    description: 'The C1 Ariete is the main battle tank of the Italian Army, developed by a consortium formed by Iveco-Fiat and Oto Melara.',
    specs: {
      weight: '54 tons',
      speed: '65 km/h',
      armament: ['120 mm Oto Melara smoothbore gun', '2 × 7.62 mm MG 42/59 machine guns'],
      armor: 'Steel and composite blend',
      crew: 4,
      range: '550 km',
      engine: 'Iveco V-12 MTCA twin-turbo diesel 1,250 hp'
    }
  },
  {
    id: 'arjun-mbt',
    name: 'Arjun MBT',
    type: 'Tank',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The Arjun is a third-generation main battle tank developed by India\'s Defence Research and Development Organisation (DRDO).',
    specs: {
      weight: '68 tons',
      speed: '58 km/h',
      armament: ['120 mm rifled gun', '12.7 mm NSVT heavy machine gun', '7.62 mm TK714 coaxial machine gun'],
      armor: 'Kanchan composite armor',
      crew: 4,
      range: '450 km',
      engine: 'MTU MB 838 Ka-501 V10 diesel 1,400 hp'
    }
  },
  {
    id: 'strv-122',
    name: 'Stridsvagn 122',
    type: 'Tank',
    country: 'Sweden',
    era: 'Modern',
    image: '',
    description: 'The Stridsvagn 122 is a Swedish main battle tank based on the German Leopard 2 Improved variant.',
    specs: {
      weight: '62.5 tons',
      speed: '68 km/h',
      armament: ['120 mm Rheinmetall L/44 smoothbore gun', '2 × 7.62 mm ksp m/94 machine guns'],
      armor: '3rd generation composite armor with reinforced roof',
      crew: 4,
      range: '470 km',
      engine: 'MTU MB 873 Ka-501 liquid-cooled V12 twin-turbo diesel'
    }
  },
  {
    id: 'k9-thunder',
    name: 'K9 Thunder',
    type: 'Artillery',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The K9 Thunder is a South Korean 155 mm self-propelled howitzer designed and developed by the Agency for Defense Development and Samsung Aerospace Industries.',
    specs: {
      weight: '47 tons',
      speed: '67 km/h',
      armament: ['155 mm / 52 caliber howitzer', '12.7 mm K6 heavy machine gun'],
      armor: 'Welded MIL-12560H armor steel',
      crew: 5,
      range: '360 km',
      engine: 'MTU MT 881 Ka-500 8-cylinder water-cooled diesel'
    }
  },
  {
    id: 'mitsubishi-f2',
    name: 'Mitsubishi F-2',
    type: 'Aircraft',
    country: 'Japan',
    era: 'Modern',
    image: '',
    description: 'The Mitsubishi F-2 is a multirole fighter derived from the General Dynamics F-16 Fighting Falcon, and manufactured by Mitsubishi Heavy Industries.',
    specs: {
      weight: '9,527 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['20 mm JM61A1 Vulcan cannon', 'AAM-3, AAM-4, AAM-5 air-to-air missiles', 'ASM-1, ASM-2 anti-ship missiles'],
      crew: 1,
      range: '834 km (combat radius)',
      engine: '1 × General Electric F110-IHI-129 turbofan'
    }
  },
  {
    id: 'centauro-ii',
    name: 'Centauro II',
    type: 'APC',
    country: 'Italy',
    era: 'Modern',
    image: '',
    description: 'The Centauro II is a modernized 8x8 wheeled tank destroyer developed by the CIO consortium (Iveco and Oto Melara) for the Italian Army.',
    specs: {
      weight: '30 tons',
      speed: '105 km/h',
      armament: ['120 mm / 45 caliber smoothbore gun', '1 × 7.62 mm coaxial machine gun', '1 × 12.7 mm remote weapon station'],
      armor: 'Ballistic steel with add-on composite armor',
      crew: 3,
      range: '800 km',
      engine: 'Iveco Vector 8V Euro III diesel 720 hp'
    }
  },
  {
    id: 'hal-tejas',
    name: 'HAL Tejas',
    type: 'Aircraft',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The HAL Tejas is an Indian, single engine, delta wing, light multirole fighter designed by the Aeronautical Development Agency.',
    specs: {
      weight: '6,560 kg (empty)',
      speed: 'Mach 1.8',
      armament: ['23 mm GSh-23 twin-barrel cannon', 'Astra, Derby, Python-5 air-to-air missiles', 'BrahMos-NG anti-ship missile'],
      crew: 1,
      range: '1,850 km',
      engine: '1 × General Electric F404-GE-IN20 turbofan'
    }
  },
  {
    id: 'cv90',
    name: 'Combat Vehicle 90',
    type: 'APC',
    country: 'Sweden',
    era: 'Modern',
    image: '',
    description: 'The Combat Vehicle 90 (CV90) is a family of Swedish tracked combat vehicles designed by Sweden\'s Defence Materiel Administration.',
    specs: {
      weight: '23-35 tons',
      speed: '70 km/h',
      armament: ['40 mm Bofors autocannon', '7.62 mm Ksp m/39 machine gun'],
      armor: 'Steel armor, capable of withstanding 30mm APFSDS',
      crew: 3,
      range: '320 km',
      engine: 'Scania DS14 or DC16 diesel'
    }
  },
  {
    id: 'k21-ifv',
    name: 'K21 IFV',
    type: 'APC',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The K21 is a South Korean infantry fighting vehicle designed to effectively defeat other IFVs as heavily armed and armored as the BMP-3.',
    specs: {
      weight: '25.6 tons',
      speed: '70 km/h',
      armament: ['40 mm Bofors XK40 cannon', '7.62 mm coaxial machine gun', '2 × ATGM launchers'],
      armor: 'Aluminum alloy with ceramic tiles and fiberglass',
      crew: 3,
      range: '500 km',
      engine: 'Doosan D2840LXE V-10 turbocharged diesel 750 hp'
    }
  },
  {
    id: 'type-89-ifv',
    name: 'Type 89 IFV',
    type: 'APC',
    country: 'Japan',
    era: 'Modern',
    image: '',
    description: 'The Type 89 is a Japanese infantry fighting vehicle that entered service with the Japan Ground Self-Defense Force in 1989.',
    specs: {
      weight: '26.5 tons',
      speed: '70 km/h',
      armament: ['35 mm KDE cannon', 'Type 79 Jyu-MAT anti-tank missiles', '7.62 mm Type 74 machine gun'],
      armor: 'Steel armor',
      crew: 3,
      range: '400 km',
      engine: 'Mitsubishi 6SY31WA water-cooled 6-cylinder diesel 600 hp'
    }
  },
  {
    id: 'dardo-ifv',
    name: 'Dardo IFV',
    type: 'APC',
    country: 'Italy',
    era: 'Modern',
    image: '',
    description: 'The Dardo is an infantry fighting vehicle designed for the Italian Army as a replacement for the M113 APC.',
    specs: {
      weight: '23.4 tons',
      speed: '70 km/h',
      armament: ['25 mm Oerlikon KBA cannon', '2 × TOW anti-tank missiles', '7.62 mm MG 42/59 machine gun'],
      armor: 'Aluminum alloy hull with add-on steel armor',
      crew: 3,
      range: '600 km',
      engine: 'Iveco-Fiat 6V MTCA turbodiesel 512 hp'
    }
  },
  {
    id: 'bmp-2-sarath',
    name: 'BMP-2 Sarath',
    type: 'APC',
    country: 'India',
    era: 'Cold War',
    image: '',
    description: 'The BMP-2 Sarath is an Indian license-produced variant of the Soviet BMP-2 amphibious infantry fighting vehicle.',
    specs: {
      weight: '14.3 tons',
      speed: '65 km/h',
      armament: ['30 mm 2A42 autocannon', '9M113 Konkurs ATGM', '7.62 mm PKT machine gun'],
      armor: 'Welded steel',
      crew: 3,
      range: '600 km',
      engine: 'UTD-20/3 6-cylinder diesel 300 hp'
    }
  },
  {
    id: 'jas-39-gripen',
    name: 'JAS 39 Gripen',
    type: 'Aircraft',
    country: 'Sweden',
    era: 'Modern',
    image: '',
    description: 'The Saab JAS 39 Gripen is a light single-engine multirole fighter aircraft manufactured by the Swedish aerospace company Saab AB.',
    specs: {
      weight: '6,800 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['1 × 27 mm Mauser BK-27 revolver cannon', 'Meteor, AMRAAM, IRIS-T air-to-air missiles', 'RBS-15 anti-ship missile'],
      crew: 1,
      range: '3,200 km',
      engine: '1 × Volvo RM12 turbofan'
    }
  },
  {
    id: 'sejong-great',
    name: 'Sejong the Great-class',
    type: 'Naval',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The Sejong the Great-class destroyers are guided missile destroyers of the Republic of Korea Navy.',
    specs: {
      weight: '10,600 tons (full load)',
      speed: '30+ knots',
      armament: ['1 × 5 inch Mk 45 Mod 4 gun', '128-cell VLS (SM-2, Hyunmoo III)', '1 × Goalkeeper CIWS'],
      crew: 300,
      range: '10,200 km',
      engine: '4 × General Electric LM2500 gas turbines'
    }
  },
  {
    id: 'izumo-class',
    name: 'Izumo-class',
    type: 'Naval',
    country: 'Japan',
    era: 'Modern',
    image: '',
    description: 'The Izumo-class multi-purpose destroyers are helicopter carriers in service with the Japan Maritime Self-Defense Force.',
    specs: {
      weight: '27,000 tons (full load)',
      speed: '30 knots',
      armament: ['2 × Phalanx CIWS', '2 × SeaRAM CIWS'],
      crew: 970,
      range: 'Classified',
      engine: '4 × GE/IHI LM2500IEC gas turbines'
    }
  },
  {
    id: 'ins-vikramaditya',
    name: 'INS Vikramaditya',
    type: 'Naval',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'INS Vikramaditya is a modified Kiev-class aircraft carrier and the flagship of the Indian Navy.',
    specs: {
      weight: '45,400 tons (loaded)',
      speed: '30 knots',
      armament: ['4 × AK-630 CIWS', 'Barak 1 and Barak 8 SAM systems'],
      crew: 1600,
      range: '13,000 km',
      engine: '8 × turbo-pressurized boilers, 4 shafts, 4 geared steam turbines'
    }
  },
  {
    id: 'visby-class',
    name: 'Visby-class Corvette',
    type: 'Naval',
    country: 'Sweden',
    era: 'Modern',
    image: '',
    description: 'The Visby class is a stealth corvette of the Swedish Navy, designed by Swedish Defence Materiel Administration and built by Kockums.',
    specs: {
      weight: '640 tons',
      speed: '35+ knots',
      armament: ['1 × Bofors 57 mm Mk3 stealth gun', '8 × RBS15 Mk2 anti-ship missiles', '4 × 400 mm torpedo tubes'],
      crew: 43,
      range: '4,600 km',
      engine: 'CODAG (4 × gas turbines, 2 × diesel engines)'
    }
  },
  {
    id: 'k1a1-tank',
    name: 'K1A1 Tank',
    type: 'Tank',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The K1A1 is an upgraded version of the K1 main battle tank, featuring a 120mm smoothbore gun and improved electronics.',
    specs: {
      weight: '54.5 tons',
      speed: '65 km/h',
      armament: ['120 mm KM256 smoothbore gun', '12.7 mm K6 heavy machine gun', '2 × 7.62 mm M60E2 machine guns'],
      armor: 'Korean Special Armor Plate (KSAP)',
      crew: 4,
      range: '500 km',
      engine: 'MTU MB 871 Ka-501 diesel 1,200 hp'
    }
  },
  {
    id: 'eurofighter-typhoon',
    name: 'Eurofighter Typhoon',
    type: 'Aircraft',
    country: 'United Kingdom',
    era: 'Modern',
    image: '',
    description: 'The Eurofighter Typhoon is a multinational twin-engine, canard delta wing, multirole fighter.',
    specs: {
      weight: '11,000 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['1 × 27 mm Mauser BK-27 revolver cannon', 'Meteor, AMRAAM, IRIS-T air-to-air missiles', 'Storm Shadow cruise missiles'],
      crew: 1,
      range: '2,900 km',
      engine: '2 × Eurojet EJ200 afterburning turbofan'
    }
  },
  {
    id: 'su-57-felon',
    name: 'Sukhoi Su-57',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Modern',
    image: '',
    description: 'The Sukhoi Su-57 is a twin-engine stealth multirole fighter aircraft developed by Sukhoi for the Russian Aerospace Forces.',
    specs: {
      weight: '18,000 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['1 × 30 mm Gryazev-Shipunov GSh-30-1 autocannon', 'R-77M, R-74M2 air-to-air missiles', 'Kh-69 cruise missiles'],
      crew: 1,
      range: '3,500 km',
      engine: '2 × Saturn AL-41F1 afterburning turbofans'
    }
  },
  {
    id: 'chengdu-j-20',
    name: 'Chengdu J-20',
    type: 'Aircraft',
    country: 'China',
    era: 'Modern',
    image: '',
    description: 'The Chengdu J-20, also known as Mighty Dragon, is a twinjet all-weather stealth fighter aircraft developed by China\'s Chengdu Aerospace Corporation.',
    specs: {
      weight: '19,391 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['PL-15, PL-10 air-to-air missiles', 'LS-6 precision-guided bombs'],
      crew: 1,
      range: '5,500 km',
      engine: '2 × Shenyang WS-10C or WS-15 afterburning turbofans'
    }
  },
  {
    id: 'f-35-lightning-ii',
    name: 'F-35 Lightning II',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft.',
    specs: {
      weight: '13,290 kg (empty)',
      speed: 'Mach 1.6',
      armament: ['1 × 25 mm GAU-22/A 4-barrel rotary cannon', 'AIM-120 AMRAAM, AIM-9X Sidewinder', 'JDAM, AGM-158 JASSM'],
      crew: 1,
      range: '2,220 km',
      engine: '1 × Pratt & Whitney F135-PW-100 afterburning turbofan'
    }
  },
  {
    id: 'kf-21-boramae',
    name: 'KF-21 Boramae',
    type: 'Aircraft',
    country: 'South Korea',
    era: 'Modern',
    image: '',
    description: 'The KAI KF-21 Boramae is a South Korean fighter aircraft development program, with Indonesian involvement, with the goal of producing an advanced multirole fighter.',
    specs: {
      weight: '11,800 kg (empty)',
      speed: 'Mach 1.81',
      armament: ['1 × 20 mm M61A2 Vulcan rotary cannon', 'Meteor, IRIS-T, AIM-120 AMRAAM', 'KEPD 350 Taurus'],
      crew: 1,
      range: '2,900 km',
      engine: '2 × General Electric F414-GE-400K afterburning turbofans'
    }
  },
  {
    id: 'su-30mki',
    name: 'Sukhoi Su-30MKI',
    type: 'Aircraft',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The Sukhoi Su-30MKI is a twinjet multirole air superiority fighter developed by Russia\'s Sukhoi and built under licence by India\'s Hindustan Aeronautics Limited (HAL) for the Indian Air Force.',
    specs: {
      weight: '18,400 kg (empty)',
      speed: 'Mach 2.0',
      armament: ['1 × 30 mm GSh-30-1 autocannon', 'BrahMos ALCM', 'Astra, R-77, R-73 air-to-air missiles'],
      crew: 2,
      range: '3,000 km',
      engine: '2 × Lyulka AL-31FP afterburning turbofans with thrust vectoring'
    }
  },
  {
    id: 'hal-amca',
    name: 'HAL AMCA',
    type: 'Aircraft',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The Advanced Medium Combat Aircraft (AMCA) is an Indian program to develop a fifth-generation stealth, multirole combat aircraft for the Indian Air Force and Indian Navy.',
    specs: {
      weight: '12,000 kg (empty, estimated)',
      speed: 'Mach 2.15 (estimated)',
      armament: ['23 mm GSh-23 cannon', 'Astra IR, Astra Mark 1/2/3', 'BrahMos-NG'],
      crew: 1,
      range: '3,240 km',
      engine: '2 × GE F414-INS6 (initial) / Custom 110kN engines (future)'
    }
  },
  {
    id: 'mirage-2000i',
    name: 'Mirage 2000I Vajra',
    type: 'Aircraft',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The Dassault Mirage 2000 is a French multirole, single-engine fourth-generation jet fighter. The Indian Air Force operates heavily upgraded Mirage 2000I/TI variants named Vajra.',
    specs: {
      weight: '7,500 kg (empty)',
      speed: 'Mach 2.2',
      armament: ['2 × 30 mm DEFA 554 revolver cannons', 'MICA air-to-air missiles', 'Spice 2000 precision-guided bombs'],
      crew: 1,
      range: '1,550 km',
      engine: '1 × SNECMA M53-P2 afterburning turbofan'
    }
  }
];
