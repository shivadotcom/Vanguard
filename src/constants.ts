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
  },
  {
    id: 'uss-zumwalt', name: 'USS Zumwalt', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'A class of guided missile destroyers designed as multi-mission stealth ships.',
    specs: { weight: '15,995 tons', speed: '30 knots', armament: ['2 × 155mm AGS', '80 × Mk 57 VLS cells'], crew: 175, range: 'Unlimited', engine: '2 × Rolls-Royce MT30 gas turbines' }
  },
  {
    id: 'arleigh-burke', name: 'Arleigh Burke-class', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'A class of guided missile destroyers built around the Aegis Combat System.',
    specs: { weight: '9,700 tons', speed: '30+ knots', armament: ['96-cell Mk 41 VLS', '1 × 5-inch gun'], crew: 300, range: '8,100 km', engine: '4 × General Electric LM2500 gas turbines' }
  },
  {
    id: 'virginia-class', name: 'Virginia-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'A class of nuclear-powered cruise missile fast-attack submarines.',
    specs: { weight: '7,900 tons', speed: '25+ knots', armament: ['12 × VLS tubes', '4 × torpedo tubes'], crew: 135, range: 'Unlimited', engine: 'S9G nuclear reactor' }
  },
  {
    id: 'ohio-class', name: 'Ohio-class Submarine', type: 'Naval', country: 'United States', era: 'Cold War', image: '',
    description: 'A class of nuclear-powered ballistic missile submarines (SSBN).',
    specs: { weight: '18,750 tons', speed: '25 knots', armament: ['24 × Trident II D5 SLBMs', '4 × torpedo tubes'], crew: 155, range: 'Unlimited', engine: 'S8G PWR nuclear reactor' }
  },
  {
    id: 'hms-queen-elizabeth', name: 'HMS Queen Elizabeth', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The lead ship of the Queen Elizabeth class of aircraft carriers.',
    specs: { weight: '65,000 tons', speed: '25 knots', armament: ['3 × Phalanx CIWS', '4 × 30mm DS30M'], crew: 1600, range: '19,000 km', engine: '2 × Rolls-Royce MT30 gas turbines' }
  },
  {
    id: 'type-45-destroyer', name: 'Type 45 Destroyer', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'Also known as the Daring class, an advanced air-defence destroyer.',
    specs: { weight: '8,500 tons', speed: '30 knots', armament: ['48-cell Sylver VLS', '1 × 4.5-inch Mark 8 gun'], crew: 191, range: '13,000 km', engine: '2 × Rolls-Royce WR-21 gas turbines' }
  },
  {
    id: 'astute-class', name: 'Astute-class Submarine', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The latest class of nuclear-powered fleet submarines in service with the Royal Navy.',
    specs: { weight: '7,400 tons', speed: '30 knots', armament: ['6 × 21-inch torpedo tubes', 'Tomahawk cruise missiles'], crew: 98, range: 'Unlimited', engine: 'Rolls-Royce PWR2 nuclear reactor' }
  },
  {
    id: 'yasen-class', name: 'Yasen-class Submarine', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'A series of the newest nuclear-powered cruise missile submarines.',
    specs: { weight: '13,800 tons', speed: '35 knots', armament: ['32 × VLS cells', '10 × torpedo tubes'], crew: 90, range: 'Unlimited', engine: 'KTP-6 nuclear reactor' }
  },
  {
    id: 'borei-class', name: 'Borei-class Submarine', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'A class of nuclear-powered ballistic missile submarines produced by Russia.',
    specs: { weight: '24,000 tons', speed: '29 knots', armament: ['16 × RSM-56 Bulava SLBMs', '6 × torpedo tubes'], crew: 107, range: 'Unlimited', engine: 'OK-650 nuclear reactor' }
  },
  {
    id: 'kirov-class', name: 'Kirov-class Battlecruiser', type: 'Naval', country: 'Russia', era: 'Cold War', image: '',
    description: 'The largest and heaviest surface combatant warships in active operation.',
    specs: { weight: '28,000 tons', speed: '32 knots', armament: ['20 × P-700 Granit AShM', '96 × S-300F SAMs'], crew: 710, range: 'Unlimited', engine: '2 × KN-3 nuclear reactors' }
  },
  {
    id: 'admiral-gorshkov', name: 'Admiral Gorshkov-class', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'The newest class of frigates being built for the Russian Navy.',
    specs: { weight: '5,400 tons', speed: '29.5 knots', armament: ['16-cell VLS for Kalibr/Zircon', '32-cell Redut VLS'], crew: 210, range: '8,980 km', engine: 'CODAG (2 × gas turbines, 2 × diesel)' }
  },
  {
    id: 'type-055', name: 'Type 055 Destroyer', type: 'Naval', country: 'China', era: 'Modern', image: '',
    description: 'A class of stealth guided missile destroyers being constructed for the Chinese Navy.',
    specs: { weight: '13,000 tons', speed: '30 knots', armament: ['112-cell VLS', '1 × 130 mm gun'], crew: 300, range: '9,300 km', engine: '4 × QC-280 gas turbines' }
  },
  {
    id: 'type-052d', name: 'Type 052D Destroyer', type: 'Naval', country: 'China', era: 'Modern', image: '',
    description: 'A class of guided missile destroyers in the Chinese People\'s Liberation Army Navy.',
    specs: { weight: '7,500 tons', speed: '30 knots', armament: ['64-cell VLS', '1 × 130 mm gun'], crew: 280, range: '8,300 km', engine: 'CODOG (2 × gas turbines, 2 × diesel)' }
  },
  {
    id: 'type-094', name: 'Type 094 Submarine', type: 'Naval', country: 'China', era: 'Modern', image: '',
    description: 'A class of ballistic missile submarines developed by China.',
    specs: { weight: '11,000 tons', speed: '20+ knots', armament: ['12 × JL-2 SLBMs', '6 × torpedo tubes'], crew: 120, range: 'Unlimited', engine: 'Nuclear reactor' }
  },
  {
    id: 'fujian-carrier', name: 'Fujian Aircraft Carrier', type: 'Naval', country: 'China', era: 'Modern', image: '',
    description: 'China\'s first aircraft carrier with a fully indigenous design, featuring a CATOBAR system.',
    specs: { weight: '80,000+ tons', speed: '30 knots', armament: ['HQ-10 SAM', 'H/PJ-11 CIWS'], crew: 2000, range: 'Classified', engine: 'Conventional steam turbines' }
  },
  {
    id: 'ins-arihant', name: 'INS Arihant', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The lead ship of India\'s Arihant class of nuclear-powered ballistic missile submarines.',
    specs: { weight: '6,000 tons', speed: '24 knots', armament: ['12 × K-15 SLBMs', '6 × torpedo tubes'], crew: 95, range: 'Unlimited', engine: '83 MW pressurized water reactor' }
  },
  {
    id: 'ins-kolkata', name: 'INS Kolkata', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The lead ship of the Kolkata-class stealth guided-missile destroyers of the Indian Navy.',
    specs: { weight: '7,400 tons', speed: '30+ knots', armament: ['32-cell VLS for Barak 8', '16-cell VLS for BrahMos'], crew: 390, range: '15,000 km', engine: '2 × Zorya M36E gas turbines' }
  },
  {
    id: 'ins-vikrant', name: 'INS Vikrant', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The first aircraft carrier built in India for the Indian Navy.',
    specs: { weight: '45,000 tons', speed: '28 knots', armament: ['Barak 8 SAM', 'AK-630 CIWS'], crew: 1645, range: '15,000 km', engine: '4 × General Electric LM2500+ gas turbines' }
  },
  {
    id: 'charles-de-gaulle', name: 'Charles de Gaulle', type: 'Naval', country: 'France', era: 'Modern', image: '',
    description: 'The flagship of the French Navy and the only nuclear-powered carrier completed outside of the US Navy.',
    specs: { weight: '42,500 tons', speed: '27 knots', armament: ['4 × 8-cell Sylver VLS', '2 × Sadral launchers'], crew: 1950, range: 'Unlimited', engine: '2 × K15 pressurized water reactors' }
  },
  {
    id: 'fremm-frigate', name: 'FREMM Multipurpose Frigate', type: 'Naval', country: 'France', era: 'Modern', image: '',
    description: 'A class of multi-purpose frigates designed by Naval Group and Fincantieri.',
    specs: { weight: '6,000 tons', speed: '27 knots', armament: ['16-cell Sylver VLS', 'Exocet or Teseo missiles'], crew: 145, range: '11,000 km', engine: 'CODLOG or CODLAG' }
  },
  {
    id: 'mogami-class', name: 'Mogami-class Frigate', type: 'Naval', country: 'Japan', era: 'Modern', image: '',
    description: 'A stealthy multi-mission frigate in development for the Japan Maritime Self-Defense Force.',
    specs: { weight: '5,500 tons', speed: '30+ knots', armament: ['16-cell Mk 41 VLS', '1 × 5-inch gun'], crew: 90, range: 'Classified', engine: 'CODAG (1 × MT30 gas turbine, 2 × MAN diesels)' }
  },
  {
    id: 'taigei-class', name: 'Taigei-class Submarine', type: 'Naval', country: 'Japan', era: 'Modern', image: '',
    description: 'An advanced attack submarine class for the JMSDF, utilizing lithium-ion batteries.',
    specs: { weight: '3,000 tons', speed: '20 knots', armament: ['6 × 21-inch torpedo tubes', 'Harpoon anti-ship missiles'], crew: 70, range: 'Classified', engine: 'Diesel-electric with lithium-ion batteries' }
  },
  {
    id: 'dokdo-class', name: 'Dokdo-class', type: 'Naval', country: 'South Korea', era: 'Modern', image: '',
    description: 'A class of amphibious assault ships operated by the Republic of Korea Navy.',
    specs: { weight: '18,800 tons', speed: '23 knots', armament: ['2 × Goalkeeper CIWS', '1 × RIM-116 RAM'], crew: 330, range: '19,000 km', engine: '4 × SEMT Pielstick 16 PC2.5 STC diesels' }
  },
  {
    id: 'hobart-class', name: 'Hobart-class Destroyer', type: 'Naval', country: 'Australia', era: 'Modern', image: '',
    description: 'A class of air warfare destroyers built for the Royal Australian Navy.',
    specs: { weight: '7,000 tons', speed: '28+ knots', armament: ['48-cell Mk 41 VLS', '1 × 5-inch gun'], crew: 186, range: '9,300 km', engine: 'CODAG (2 × LM2500 gas turbines, 2 × diesels)' }
  },
  {
    id: 'm109a7-paladin', name: 'M109A7 Paladin', type: 'Artillery', country: 'United States', era: 'Modern', image: '',
    description: 'The latest iteration of the M109 155mm self-propelled howitzer.',
    specs: { weight: '35.3 tons', speed: '61 km/h', armament: ['155 mm M284 howitzer', '12.7 mm M2HB machine gun'], crew: 4, range: '300 km', engine: 'Cummins V903 600 hp diesel' }
  },
  {
    id: 'stryker', name: 'Stryker', type: 'APC', country: 'United States', era: 'Modern', image: '',
    description: 'A family of eight-wheeled armored fighting vehicles derived from the Canadian LAV III.',
    specs: { weight: '18.1 tons', speed: '97 km/h', armament: ['12.7 mm M2 machine gun or 40 mm Mk 19 grenade launcher'], crew: 2, range: '500 km', engine: 'Caterpillar C7 350 hp diesel' }
  },
  {
    id: 't-90m', name: 'T-90M', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The latest modernized version of the Russian T-90 main battle tank.',
    specs: { weight: '48 tons', speed: '60 km/h', armament: ['125 mm 2A46M-5 smoothbore gun', '12.7 mm Kord heavy machine gun'], crew: 3, range: '550 km', engine: 'V-92S2F 1,130 hp diesel' }
  },
  {
    id: 'bmp-3', name: 'BMP-3', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'A Soviet and Russian infantry fighting vehicle, successor to the BMP-1 and BMP-2.',
    specs: { weight: '18.7 tons', speed: '72 km/h', armament: ['100 mm 2A70 gun', '30 mm 2A72 autocannon', '3 × 7.62 mm PKT machine guns'], crew: 3, range: '600 km', engine: 'UTD-29M 500 hp diesel' }
  },
  {
    id: '2s19-msta-s', name: '2S19 Msta-S', type: 'Artillery', country: 'Russia', era: 'Modern', image: '',
    description: 'A 152.4 mm self-propelled howitzer designed by the Soviet Union.',
    specs: { weight: '42 tons', speed: '60 km/h', armament: ['152.4 mm 2A64 howitzer', '12.7 mm NSVT machine gun'], crew: 5, range: '500 km', engine: 'V-84A 840 hp diesel' }
  },
  {
    id: 'tos-1a', name: 'TOS-1A', type: 'Artillery', country: 'Russia', era: 'Modern', image: '',
    description: 'A Soviet 220 mm 24-barrel multiple rocket launcher and thermobaric weapon.',
    specs: { weight: '45.3 tons', speed: '60 km/h', armament: ['24 × 220 mm thermobaric rockets'], crew: 3, range: '550 km', engine: 'V-84 840 hp diesel' }
  },
  {
    id: 'challenger-3', name: 'Challenger 3', type: 'Tank', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'A new main battle tank being developed for the British Army, based on the Challenger 2.',
    specs: { weight: '66 tons', speed: '60 km/h', armament: ['120 mm Rheinmetall L55A1 smoothbore gun', '7.62 mm chain gun'], crew: 4, range: '500+ km', engine: 'Perkins CV12-9A V12 diesel 1,500 hp' }
  },
  {
    id: 'ajax-afv', name: 'Ajax', type: 'APC', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'A family of armoured fighting vehicles being developed for the British Army.',
    specs: { weight: '38 tons', speed: '70 km/h', armament: ['40 mm CT40 cannon', '7.62 mm L94A1 chain gun'], crew: 3, range: '500 km', engine: 'MTU V8 199 TE21 800 hp diesel' }
  },
  {
    id: 'as90', name: 'AS90', type: 'Artillery', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'A lightly armoured self-propelled artillery piece used by the British Army.',
    specs: { weight: '45 tons', speed: '55 km/h', armament: ['155 mm L31 39-calibre gun', '7.62 mm L7 GPMG'], crew: 5, range: '370 km', engine: 'Cummins VTA903T 660 hp diesel' }
  },
  {
    id: 'type-96b', name: 'Type 96B', type: 'Tank', country: 'China', era: 'Modern', image: '',
    description: 'An upgraded variant of the Type 96 main battle tank used by the PLA.',
    specs: { weight: '42.8 tons', speed: '65 km/h', armament: ['125 mm smoothbore gun', '12.7 mm heavy machine gun'], crew: 3, range: '400 km', engine: '1000 hp diesel' }
  },
  {
    id: 'zbd-04', name: 'ZBD-04', type: 'APC', country: 'China', era: 'Modern', image: '',
    description: 'A Chinese infantry fighting vehicle, heavily armed with a 100mm and 30mm gun combination.',
    specs: { weight: '20 tons', speed: '65 km/h', armament: ['100 mm rifled gun', '30 mm autocannon', '7.62 mm machine gun'], crew: 3, range: '500 km', engine: '6-cylinder water-cooled diesel' }
  },
  {
    id: 'plz-05', name: 'PLZ-05', type: 'Artillery', country: 'China', era: 'Modern', image: '',
    description: 'A 155 mm self-propelled howitzer developed by the People\'s Liberation Army.',
    specs: { weight: '35 tons', speed: '56 km/h', armament: ['155 mm L/52 howitzer', '12.7 mm heavy machine gun'], crew: 4, range: '550 km', engine: '8V150 diesel 800 hp' }
  },
  {
    id: 'leclerc', name: 'Leclerc', type: 'Tank', country: 'France', era: 'Modern', image: '',
    description: 'A third-generation French main battle tank built by Nexter.',
    specs: { weight: '54.6 tons', speed: '71 km/h', armament: ['120 mm Modèle F1 smoothbore gun', '12.7 mm coaxial M2HB'], crew: 3, range: '550 km', engine: 'SACM V8X-1500 1,500 hp diesel' }
  },
  {
    id: 'vbci', name: 'VBCI', type: 'APC', country: 'France', era: 'Modern', image: '',
    description: 'A French Infantry fighting vehicle designed to replace the AMX-10P.',
    specs: { weight: '25.6 tons', speed: '100 km/h', armament: ['25 mm M811 autocannon', '7.62 mm NF1 machine gun'], crew: 3, range: '750 km', engine: 'Renault D12 550 hp diesel' }
  },
  {
    id: 'caesar-howitzer', name: 'CAESAR', type: 'Artillery', country: 'France', era: 'Modern', image: '',
    description: 'A French 155 mm, 52-caliber self-propelled howitzer installed on a 6x6 or 8x8 truck chassis.',
    specs: { weight: '17.7 tons', speed: '100 km/h', armament: ['155 mm / 52 caliber howitzer'], crew: 5, range: '600 km', engine: 'Renault dCI 6 240 hp' }
  },
  {
    id: 'pzh-2000', name: 'PzH 2000', type: 'Artillery', country: 'Germany', era: 'Modern', image: '',
    description: 'A German 155 mm self-propelled howitzer developed by Krauss-Maffei Wegmann.',
    specs: { weight: '55.8 tons', speed: '67 km/h', armament: ['155 mm Rheinmetall L52 howitzer', '7.62 mm MG3 machine gun'], crew: 5, range: '420 km', engine: 'MTU 881 Ka-500 1,000 hp diesel' }
  },
  {
    id: 'puma-ifv', name: 'Puma IFV', type: 'APC', country: 'Germany', era: 'Modern', image: '',
    description: 'A German infantry fighting vehicle designed to replace the aging Marder IFVs.',
    specs: { weight: '31.5 tons', speed: '70 km/h', armament: ['30 mm MK30-2/ABM autocannon', '5.56 mm HK MG4 machine gun', 'Spike LR ATGM'], crew: 3, range: '600 km', engine: 'MTU V10 892 1,090 hp diesel' }
  },
  {
    id: 'boxer-afv', name: 'Boxer AFV', type: 'APC', country: 'Germany', era: 'Modern', image: '',
    description: 'A multirole armoured fighting vehicle designed by an international consortium.',
    specs: { weight: '36.5 tons', speed: '103 km/h', armament: ['12.7 mm heavy machine gun or 40 mm automatic grenade launcher'], crew: 3, range: '1,050 km', engine: 'MTU 8V 199 TE20 710 hp diesel' }
  },
  {
    id: 'k808-white-tiger', name: 'K808 White Tiger', type: 'APC', country: 'South Korea', era: 'Modern', image: '',
    description: 'An 8x8 wheeled armored personnel carrier developed by Hyundai Rotem.',
    specs: { weight: '20 tons', speed: '100 km/h', armament: ['12.7 mm K6 heavy machine gun or 40 mm K4 grenade launcher'], crew: 2, range: '800 km', engine: 'Hyundai D6HA 420 hp diesel' }
  },
  {
    id: 'type-16-mcv', name: 'Type 16 MCV', type: 'APC', country: 'Japan', era: 'Modern', image: '',
    description: 'A wheeled tank destroyer of the Japan Ground Self-Defense Force.',
    specs: { weight: '26 tons', speed: '100 km/h', armament: ['105 mm rifled gun', '12.7 mm M2HB machine gun'], crew: 4, range: '400 km', engine: 'Mitsubishi 4VA 570 hp diesel' }
  },
  {
    id: 'type-99-sph', name: 'Type 99 SPH', type: 'Artillery', country: 'Japan', era: 'Modern', image: '',
    description: 'A self-propelled 155 mm howitzer of the Japan Ground Self-Defense Force.',
    specs: { weight: '40 tons', speed: '49.6 km/h', armament: ['155 mm L52 howitzer', '12.7 mm M2HB machine gun'], crew: 4, range: '300 km', engine: 'Mitsubishi 6SY31WA 600 hp diesel' }
  },
  {
    id: 'namer', name: 'Namer', type: 'APC', country: 'Israel', era: 'Modern', image: '',
    description: 'A heavily armored infantry fighting vehicle based on the Merkava Mark IV tank chassis.',
    specs: { weight: '60 tons', speed: '60 km/h', armament: ['12.7 mm M2HB machine gun or 40 mm Mk 19 grenade launcher'], crew: 3, range: '500 km', engine: 'Continental AVDS-1790-9AR 1,200 hp diesel' }
  },
  {
    id: 'eitan-afv', name: 'Eitan AFV', type: 'APC', country: 'Israel', era: 'Modern', image: '',
    description: 'An 8x8 armored personnel carrier developed to replace the aging M113 in the IDF.',
    specs: { weight: '35 tons', speed: '90 km/h', armament: ['30 mm autocannon', '12.7 mm machine gun', 'Spike ATGM'], crew: 3, range: '1000 km', engine: 'MTU 8V199 TE20 750 hp diesel' }
  },
  {
    id: 'bm-21-grad', name: 'BM-21 Grad', type: 'Artillery', country: 'Russia', era: 'Cold War', image: '',
    description: 'A Soviet truck-mounted 122 mm multiple rocket launcher.',
    specs: { weight: '13.7 tons', speed: '75 km/h', armament: ['40 × 122 mm rocket tubes'], crew: 3, range: '405 km', engine: 'ZiL-375 V8 gasoline 180 hp' }
  },
  {
    id: '2s35-koalitsiya-sv', name: '2S35 Koalitsiya-SV', type: 'Artillery', country: 'Russia', era: 'Modern', image: '',
    description: 'A Russian self-propelled gun, successor to the 2S19 Msta-S.',
    specs: { weight: '48 tons', speed: '60 km/h', armament: ['152 mm 2A88 howitzer', '12.7 mm Kord machine gun'], crew: 3, range: '500 km', engine: 'V-92S2 1,000 hp diesel' }
  },
  {
    id: 'f-15-eagle', name: 'F-15 Eagle', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-15 Eagle is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-16-fighting-falcon', name: 'F-16 Fighting Falcon', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-16 Fighting Falcon is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-a-18-hornet', name: 'F/A-18 Hornet', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F/A-18 Hornet is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-14-tomcat', name: 'F-14 Tomcat', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-14 Tomcat is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'a-10-thunderbolt-ii', name: 'A-10 Thunderbolt II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The A-10 Thunderbolt II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'b-2-spirit', name: 'B-2 Spirit', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The B-2 Spirit is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'b-52-stratofortress', name: 'B-52 Stratofortress', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The B-52 Stratofortress is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'b-1-lancer', name: 'B-1 Lancer', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The B-1 Lancer is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'sr-71-blackbird', name: 'SR-71 Blackbird', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The SR-71 Blackbird is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'u-2-dragon-lady', name: 'U-2 Dragon Lady', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The U-2 Dragon Lady is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-117-nighthawk', name: 'F-117 Nighthawk', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-117 Nighthawk is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-4-phantom-ii', name: 'F-4 Phantom II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-4 Phantom II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-5-tiger-ii', name: 'F-5 Tiger II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-5 Tiger II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-86-sabre', name: 'F-86 Sabre', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-86 Sabre is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'p-51-mustang', name: 'P-51 Mustang', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The P-51 Mustang is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'p-38-lightning', name: 'P-38 Lightning', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The P-38 Lightning is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f4u-corsair', name: 'F4U Corsair', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F4U Corsair is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'supermarine-spitfire', name: 'Supermarine Spitfire', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Supermarine Spitfire is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hawker-hurricane', name: 'Hawker Hurricane', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Hawker Hurricane is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'avro-lancaster', name: 'Avro Lancaster', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Avro Lancaster is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'de-havilland-mosquito', name: 'de Havilland Mosquito', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The de Havilland Mosquito is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'avro-vulcan', name: 'Avro Vulcan', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Avro Vulcan is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'panavia-tornado', name: 'Panavia Tornado', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Panavia Tornado is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'harrier-jump-jet', name: 'Harrier Jump Jet', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Harrier Jump Jet is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'eurofighter-typhoon', name: 'Eurofighter Typhoon', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Eurofighter Typhoon is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mirage-iii', name: 'Mirage III', type: 'Aircraft', country: 'France', era: 'Modern', image: '',
    description: 'The Mirage III is a renowned aircraft utilized by France.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mirage-f1', name: 'Mirage F1', type: 'Aircraft', country: 'France', era: 'Modern', image: '',
    description: 'The Mirage F1 is a renowned aircraft utilized by France.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'super-etendard', name: 'Super Etendard', type: 'Aircraft', country: 'France', era: 'Modern', image: '',
    description: 'The Super Etendard is a renowned aircraft utilized by France.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'rafale-m', name: 'Rafale M', type: 'Aircraft', country: 'France', era: 'Modern', image: '',
    description: 'The Rafale M is a renowned aircraft utilized by France.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-15', name: 'MiG-15', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-15 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-17', name: 'MiG-17', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-17 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-19', name: 'MiG-19', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-19 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-21', name: 'MiG-21', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-21 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-23', name: 'MiG-23', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-23 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-25', name: 'MiG-25', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-25 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-29', name: 'MiG-29', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-29 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-31', name: 'MiG-31', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-31 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-35', name: 'MiG-35', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-35 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-27', name: 'Su-27', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-27 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-30', name: 'Su-30', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-30 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-33', name: 'Su-33', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-33 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-34', name: 'Su-34', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-34 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-35', name: 'Su-35', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-35 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-47-berkut', name: 'Su-47 Berkut', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-47 Berkut is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-57', name: 'Su-57', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-57 is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'tu-95-bear', name: 'Tu-95 Bear', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Tu-95 Bear is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'tu-160-blackjack', name: 'Tu-160 Blackjack', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Tu-160 Blackjack is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'chengdu-j-10', name: 'Chengdu J-10', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Chengdu J-10 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'shenyang-j-11', name: 'Shenyang J-11', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Shenyang J-11 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'shenyang-j-15', name: 'Shenyang J-15', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Shenyang J-15 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'shenyang-j-16', name: 'Shenyang J-16', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Shenyang J-16 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'chengdu-j-20', name: 'Chengdu J-20', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Chengdu J-20 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'shenyang-fc-31', name: 'Shenyang FC-31', type: 'Aircraft', country: 'China', era: 'Modern', image: '',
    description: 'The Shenyang FC-31 is a renowned aircraft utilized by China.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hal-tejas-mk2', name: 'HAL Tejas Mk2', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk2 is a renowned aircraft utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hal-amca', name: 'HAL AMCA', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA is a renowned aircraft utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'su-30mki', name: 'Su-30MKI', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Su-30MKI is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'sepecat-jaguar', name: 'SEPECAT Jaguar', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The SEPECAT Jaguar is a renowned aircraft utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mig-27-bahadur', name: 'MiG-27 Bahadur', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-27 Bahadur is a renowned aircraft utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'sea-harrier-frs51', name: 'Sea Harrier FRS51', type: 'Aircraft', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Sea Harrier FRS51 is a renowned aircraft utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'lca-navy', name: 'LCA Navy', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The LCA Navy is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mitsubishi-f-2a', name: 'Mitsubishi F-2A', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The Mitsubishi F-2A is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-15j-eagle', name: 'F-15J Eagle', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-15J Eagle is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'mitsubishi-x-2-shinshin', name: 'Mitsubishi X-2 Shinshin', type: 'Aircraft', country: 'Japan', era: 'Modern', image: '',
    description: 'The Mitsubishi X-2 Shinshin is a renowned aircraft utilized by Japan.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'kai-kf-21-boramae', name: 'KAI KF-21 Boramae', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The KAI KF-21 Boramae is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'fa-50-fighting-eagle', name: 'FA-50 Fighting Eagle', type: 'Aircraft', country: 'South Korea', era: 'Modern', image: '',
    description: 'The FA-50 Fighting Eagle is a renowned aircraft utilized by South Korea.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-35a-lightning-ii', name: 'F-35A Lightning II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-35A Lightning II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-35b-lightning-ii', name: 'F-35B Lightning II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-35B Lightning II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'f-35c-lightning-ii', name: 'F-35C Lightning II', type: 'Aircraft', country: 'United States', era: 'Modern', image: '',
    description: 'The F-35C Lightning II is a renowned aircraft utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'saab-jas-39-gripen-e', name: 'Saab JAS 39 Gripen E', type: 'Aircraft', country: 'Sweden', era: 'Modern', image: '',
    description: 'The Saab JAS 39 Gripen E is a renowned aircraft utilized by Sweden.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'saab-37-viggen', name: 'Saab 37 Viggen', type: 'Aircraft', country: 'Sweden', era: 'Modern', image: '',
    description: 'The Saab 37 Viggen is a renowned aircraft utilized by Sweden.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-enterprise-cvn-65', name: 'USS Enterprise (CVN-65)', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Enterprise (CVN-65) is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-gerald-r-ford', name: 'USS Gerald R. Ford', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Gerald R. Ford is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-iowa', name: 'USS Iowa', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Iowa is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-missouri', name: 'USS Missouri', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Missouri is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-nimitz', name: 'USS Nimitz', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Nimitz is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-ronald-reagan', name: 'USS Ronald Reagan', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Ronald Reagan is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-george-washington', name: 'USS George Washington', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS George Washington is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-theodore-roosevelt', name: 'USS Theodore Roosevelt', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Theodore Roosevelt is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-carl-vinson', name: 'USS Carl Vinson', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Carl Vinson is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-john-c-stennis', name: 'USS John C. Stennis', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS John C. Stennis is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-harry-s-truman', name: 'USS Harry S. Truman', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Harry S. Truman is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-abraham-lincoln', name: 'USS Abraham Lincoln', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS Abraham Lincoln is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'uss-george-h-w-bush', name: 'USS George H.W. Bush', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The USS George H.W. Bush is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'ticonderoga-class-cruiser', name: 'Ticonderoga-class Cruiser', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Ticonderoga-class Cruiser is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'los-angeles-class-submarine', name: 'Los Angeles-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Los Angeles-class Submarine is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'seawolf-class-submarine', name: 'Seawolf-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Seawolf-class Submarine is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-dreadnought', name: 'HMS Dreadnought', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Dreadnought is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-hood', name: 'HMS Hood', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Hood is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-vanguard', name: 'HMS Vanguard', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Vanguard is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-king-george-v', name: 'HMS King George V', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS King George V is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-prince-of-wales', name: 'HMS Prince of Wales', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Prince of Wales is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-invincible', name: 'HMS Invincible', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Invincible is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-illustrious', name: 'HMS Illustrious', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Illustrious is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-ark-royal', name: 'HMS Ark Royal', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Ark Royal is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-ocean', name: 'HMS Ocean', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Ocean is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-albion', name: 'HMS Albion', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Albion is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'hms-bulwark', name: 'HMS Bulwark', type: 'Naval', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The HMS Bulwark is a renowned naval utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'admiral-kuznetsov', name: 'Admiral Kuznetsov', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'The Admiral Kuznetsov is a renowned naval utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'pyotr-velikiy', name: 'Pyotr Velikiy', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'The Pyotr Velikiy is a renowned naval utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'moskva-cruiser', name: 'Moskva Cruiser', type: 'Naval', country: 'Russia', era: 'Modern', image: '',
    description: 'The Moskva Cruiser is a renowned naval utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'slava-class-cruiser', name: 'Slava-class Cruiser', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Slava-class Cruiser is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'udaloy-class-destroyer', name: 'Udaloy-class Destroyer', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Udaloy-class Destroyer is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'sovremenny-class-destroyer', name: 'Sovremenny-class Destroyer', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Sovremenny-class Destroyer is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'oscar-class-submarine', name: 'Oscar-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Oscar-class Submarine is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'akula-class-submarine', name: 'Akula-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Akula-class Submarine is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'typhoon-class-submarine', name: 'Typhoon-class Submarine', type: 'Naval', country: 'United States', era: 'Modern', image: '',
    description: 'The Typhoon-class Submarine is a renowned naval utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'ins-rajput', name: 'INS Rajput', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Rajput is a renowned naval utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'ins-delhi', name: 'INS Delhi', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Delhi is a renowned naval utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'ins-shivalik', name: 'INS Shivalik', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Shivalik is a renowned naval utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'ins-kamorta', name: 'INS Kamorta', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Kamorta is a renowned naval utilized by India.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm60-patton', name: 'M60 Patton', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M60 Patton is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm48-patton', name: 'M48 Patton', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M48 Patton is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm4-sherman', name: 'M4 Sherman', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M4 Sherman is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm26-pershing', name: 'M26 Pershing', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M26 Pershing is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm46-patton', name: 'M46 Patton', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M46 Patton is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm47-patton', name: 'M47 Patton', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M47 Patton is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm103-heavy-tank', name: 'M103 Heavy Tank', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M103 Heavy Tank is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm551-sheridan', name: 'M551 Sheridan', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M551 Sheridan is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm113-apc', name: 'M113 APC', type: 'APC', country: 'United States', era: 'Modern', image: '',
    description: 'The M113 APC is a renowned apc utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm1126-stryker', name: 'M1126 Stryker', type: 'APC', country: 'United States', era: 'Modern', image: '',
    description: 'The M1126 Stryker is a renowned apc utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm2-bradley', name: 'M2 Bradley', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M2 Bradley is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'm3-bradley', name: 'M3 Bradley', type: 'Tank', country: 'United States', era: 'Modern', image: '',
    description: 'The M3 Bradley is a renowned tank utilized by United States.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-34', name: 'T-34', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-34 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-54-55', name: 'T-54/55', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-54/55 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-62', name: 'T-62', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-62 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-64', name: 'T-64', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-64 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-72', name: 'T-72', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-72 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-80', name: 'T-80', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-80 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 't-90', name: 'T-90', type: 'Tank', country: 'Russia', era: 'Modern', image: '',
    description: 'The T-90 is a renowned tank utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'bmp-1', name: 'BMP-1', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'The BMP-1 is a renowned apc utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'bmp-2', name: 'BMP-2', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'The BMP-2 is a renowned apc utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'bmp-3', name: 'BMP-3', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'The BMP-3 is a renowned apc utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'btr-80', name: 'BTR-80', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'The BTR-80 is a renowned apc utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'btr-90', name: 'BTR-90', type: 'APC', country: 'Russia', era: 'Modern', image: '',
    description: 'The BTR-90 is a renowned apc utilized by Russia.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'challenger-1', name: 'Challenger 1', type: 'Tank', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Challenger 1 is a renowned tank utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'chieftain', name: 'Chieftain', type: 'Tank', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Chieftain is a renowned tank utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'centurion', name: 'Centurion', type: 'Tank', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Centurion is a renowned tank utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'conqueror', name: 'Conqueror', type: 'Tank', country: 'United Kingdom', era: 'Modern', image: '',
    description: 'The Conqueror is a renowned tank utilized by United Kingdom.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'leopard-1', name: 'Leopard 1', type: 'Tank', country: 'Germany', era: 'Modern', image: '',
    description: 'The Leopard 1 is a renowned tank utilized by Germany.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  },
  {
    id: 'marder-ifv', name: 'Marder IFV', type: 'APC', country: 'Germany', era: 'Modern', image: '',
    description: 'The Marder IFV is a renowned apc utilized by Germany.',
    specs: { weight: 'Classified', speed: 'Classified', armament: ['Various'], crew: 1, range: 'Classified', engine: 'Classified' }
  }
];
