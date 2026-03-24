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
  },
  {
    id: 'ah-64-apache',
    name: 'AH-64 Apache',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Boeing AH-64 Apache is an American twin-turboshaft attack helicopter with a tailwheel-type landing gear arrangement and a tandem cockpit for a crew of two.',
    specs: { weight: '5,165 kg', speed: '293 km/h', armament: ['30 mm M230 chain gun', 'AGM-114 Hellfire', 'Hydra 70 rockets'], crew: 2, range: '476 km', engine: '2 × General Electric T700' }
  },
  {
    id: 'uh-60-black-hawk',
    name: 'UH-60 Black Hawk',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Sikorsky UH-60 Black Hawk is a four-blade, twin-engine, medium-lift utility helicopter manufactured by Sikorsky Aircraft.',
    specs: { weight: '4,819 kg', speed: '294 km/h', armament: ['2 × 7.62 mm M240 machine guns'], crew: 2, range: '592 km', engine: '2 × General Electric T700-GE-701C/D' }
  },
  {
    id: 'ch-47-chinook',
    name: 'CH-47 Chinook',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Boeing CH-47 Chinook is an American twin-engined, tandem rotor, heavy-lift helicopter developed by American rotorcraft company Vertol.',
    specs: { weight: '11,148 kg', speed: '315 km/h', armament: ['Up to 3 × 7.62 mm machine guns'], crew: 3, range: '741 km', engine: '2 × Lycoming T55-GA-714A' }
  },
  {
    id: 'mi-24-hind',
    name: 'Mi-24 Hind',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Cold War',
    image: '',
    description: 'The Mil Mi-24 is a large helicopter gunship, attack helicopter and low-capacity troop transport with room for eight passengers.',
    specs: { weight: '8,500 kg', speed: '335 km/h', armament: ['12.7 mm Yak-B Gatling gun', 'AT-2 Swatter ATGMs', '57 mm S-5 rockets'], crew: 3, range: '450 km', engine: '2 × Isotov TV3-117' }
  },
  {
    id: 'ka-52-alligator',
    name: 'Ka-52 Alligator',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Modern',
    image: '',
    description: 'The Kamov Ka-52 Alligator is a highly maneuverable helicopter that can destroy enemy armored and unarmored ground targets, low-speed aerial targets and personnel.',
    specs: { weight: '7,700 kg', speed: '300 km/h', armament: ['30 mm Shipunov 2A42 cannon', 'Vikhr anti-tank missiles', 'Igla-V air-to-air missiles'], crew: 2, range: '460 km', engine: '2 × Klimov VK-2500' }
  },
  {
    id: 'eurocopter-tiger',
    name: 'Eurocopter Tiger',
    type: 'Aircraft',
    country: 'France/Germany',
    era: 'Modern',
    image: '',
    description: 'The Eurocopter Tiger is a four-blade, twin-engine attack helicopter which first entered service in 2003.',
    specs: { weight: '3,060 kg', speed: '290 km/h', armament: ['30 mm GIAT 30 cannon', 'PARS 3 LR missiles', 'Mistral air-to-air missiles'], crew: 2, range: '800 km', engine: '2 × MTR390' }
  },
  {
    id: 'ah-1z-viper',
    name: 'AH-1Z Viper',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Bell AH-1Z Viper is a twin-engine attack helicopter, based on the AH-1W SuperCobra, designed for the United States Marine Corps.',
    specs: { weight: '5,580 kg', speed: '300 km/h', armament: ['20 mm M197 3-barreled Gatling cannon', 'AGM-114 Hellfire', 'AIM-9 Sidewinder'], crew: 2, range: '685 km', engine: '2 × General Electric T700-GE-401C' }
  },
  {
    id: 'nh90',
    name: 'NH90',
    type: 'Aircraft',
    country: 'Europe',
    era: 'Modern',
    image: '',
    description: 'The NHIndustries NH90 is a medium-sized, twin-engine, multi-role military helicopter.',
    specs: { weight: '6,400 kg', speed: '300 km/h', armament: ['Door machine guns', 'Anti-submarine torpedoes (NFH variant)'], crew: 2, range: '800 km', engine: '2 × Rolls-Royce Turbomeca RTM322' }
  },
  {
    id: 'aw159-wildcat',
    name: 'AW159 Wildcat',
    type: 'Aircraft',
    country: 'United Kingdom',
    era: 'Modern',
    image: '',
    description: 'The AgustaWestland AW159 Wildcat is an improved version of the Westland Super Lynx military helicopter designed to serve in the battlefield utility, search and rescue and anti-surface warfare roles.',
    specs: { weight: '3,300 kg', speed: '311 km/h', armament: ['FN MAG machine gun', 'Martlet missiles', 'Sea Venom missiles'], crew: 2, range: '777 km', engine: '2 × LHTEC CTS800-4N' }
  },
  {
    id: 'z-10',
    name: 'Z-10',
    type: 'Aircraft',
    country: 'China',
    era: 'Modern',
    image: '',
    description: 'The CAIC Z-10 is a Chinese medium attack helicopter developed for the People\'s Liberation Army Ground Force.',
    specs: { weight: '5,100 kg', speed: '270 km/h', armament: ['23 mm or 30 mm cannon', 'HJ-10 anti-tank missiles', 'TY-90 air-to-air missiles'], crew: 2, range: '800 km', engine: '2 × WZ-9' }
  },
  {
    id: 'mi-28-havoc',
    name: 'Mi-28 Havoc',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Modern',
    image: '',
    description: 'The Mil Mi-28 is a Russian all-weather, day-night, military tandem, two-seat anti-armor attack helicopter.',
    specs: { weight: '8,590 kg', speed: '320 km/h', armament: ['30 mm Shipunov 2A42 cannon', 'Ataka-V anti-tank missiles', 'S-8 rockets'], crew: 2, range: '435 km', engine: '2 × Klimov TV3-117' }
  },
  {
    id: 'oh-58-kiowa',
    name: 'OH-58 Kiowa',
    type: 'Aircraft',
    country: 'United States',
    era: 'Cold War',
    image: '',
    description: 'The Bell OH-58 Kiowa is a family of single-engine, single-rotor, military helicopters used for observation, utility, and direct fire support.',
    specs: { weight: '1,737 kg', speed: '222 km/h', armament: ['.50 cal M3P machine gun', 'AGM-114 Hellfire', 'Hydra 70 rockets'], crew: 2, range: '556 km', engine: '1 × Rolls-Royce T703-AD-700A' }
  },
  {
    id: 'sh-60-seahawk',
    name: 'SH-60 Seahawk',
    type: 'Aircraft',
    country: 'United States',
    era: 'Modern',
    image: '',
    description: 'The Sikorsky SH-60/MH-60 Seahawk is a twin turboshaft engine, multi-mission United States Navy helicopter based on the United States Army UH-60 Black Hawk.',
    specs: { weight: '6,895 kg', speed: '270 km/h', armament: ['Mk 46 torpedoes', 'AGM-114 Hellfire', 'M240 machine guns'], crew: 3, range: '834 km', engine: '2 × General Electric T700-GE-401C' }
  },
  {
    id: 'aerospatiale-gazelle',
    name: 'Aérospatiale Gazelle',
    type: 'Aircraft',
    country: 'France',
    era: 'Cold War',
    image: '',
    description: 'The Aérospatiale Gazelle is a French five-seat helicopter, commonly used for light transport, scouting and light attack duties.',
    specs: { weight: '908 kg', speed: '310 km/h', armament: ['20 mm GIAT cannon', 'HOT anti-tank missiles'], crew: 2, range: '670 km', engine: '1 × Turbomeca Astazou IIIA' }
  },
  {
    id: 'hal-prachand',
    name: 'HAL Prachand',
    type: 'Aircraft',
    country: 'India',
    era: 'Modern',
    image: '',
    description: 'The HAL Prachand is an Indian multi-role light attack helicopter designed and manufactured by the Hindustan Aeronautics Limited (HAL).',
    specs: { weight: '2,250 kg', speed: '268 km/h', armament: ['20 mm M621 cannon', 'Dhruvastra anti-tank missiles', 'Mistral air-to-air missiles'], crew: 2, range: '550 km', engine: '2 × HAL/Turbomeca Shakti-1H1' }
  },
  {
    id: 'denel-rooivalk',
    name: 'Denel Rooivalk',
    type: 'Aircraft',
    country: 'South Africa',
    era: 'Modern',
    image: '',
    description: 'The Denel Rooivalk is an attack helicopter manufactured by Denel Aviation of South Africa.',
    specs: { weight: '5,730 kg', speed: '309 km/h', armament: ['20 mm F2 cannon', 'Mokopa ZT-6 anti-tank missiles', 'FZ90 70mm rockets'], crew: 2, range: '740 km', engine: '2 × Turbomeca Makila 1K2' }
  },
  {
    id: 'agusta-a129-mangusta',
    name: 'Agusta A129 Mangusta',
    type: 'Aircraft',
    country: 'Italy',
    era: 'Cold War',
    image: '',
    description: 'The Agusta A129 Mangusta is an attack helicopter originally designed and produced by Italian partner Agusta.',
    specs: { weight: '2,530 kg', speed: '278 km/h', armament: ['20 mm TM197B Gatling cannon', 'BGM-71 TOW missiles', 'Hellfire missiles'], crew: 2, range: '510 km', engine: '2 × Rolls-Royce Gem 2-1004D' }
  },
  {
    id: 'ch-53e-super-stallion',
    name: 'CH-53E Super Stallion',
    type: 'Aircraft',
    country: 'United States',
    era: 'Cold War',
    image: '',
    description: 'The Sikorsky CH-53E Super Stallion is a heavy-lift helicopter operated by the United States military.',
    specs: { weight: '15,071 kg', speed: '278 km/h', armament: ['2 × .50 BMG window-mounted GAU-21 machine guns', '1 × .50 BMG ramp-mounted weapon system'], crew: 5, range: '1,000 km', engine: '3 × General Electric T64-GE-416/416A' }
  },
  {
    id: 'uh-1-iroquois',
    name: 'UH-1 Iroquois',
    type: 'Aircraft',
    country: 'United States',
    era: 'Cold War',
    image: '',
    description: 'The Bell UH-1 Iroquois (nicknamed "Huey") is a utility military helicopter powered by a single turboshaft engine, with two-blade main and tail rotors.',
    specs: { weight: '2,365 kg', speed: '217 km/h', armament: ['2 × 7.62 mm M60 machine guns', '2 × 7-tube 2.75" rocket launchers'], crew: 1, range: '507 km', engine: '1 × Lycoming T53-L-11' }
  },
  {
    id: 'ka-27-helix',
    name: 'Ka-27 Helix',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Cold War',
    image: '',
    description: 'The Kamov Ka-27 is a military helicopter developed for the Soviet Navy, and currently in service in various countries.',
    specs: { weight: '6,100 kg', speed: '270 km/h', armament: ['1 × torpedo (AT-1M, VTT-1, UMGT-1 Orlan, APR-2 Yastreb) or 36 RGB-NM & RGB-NM-1 sonobuoys'], crew: 3, range: '980 km', engine: '2 × Isotov TV3-117V' }
  }
,
  {
    id: 'ind-1-arjun-mk1', name: 'Arjun Mk1', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1 is a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-2-arjun-mk1a', name: 'Arjun Mk1A', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1A is a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-3-t-90s-bhishma', name: 'T-90S Bhishma', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma is a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-4-t-72m1-ajeya', name: 'T-72M1 Ajeya', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya is a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-5-vijayanta', name: 'Vijayanta', type: 'Tank', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The Vijayanta is a cold war tank utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-6-bmp-2-sarath', name: 'BMP-2 Sarath', type: 'APC', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The BMP-2 Sarath is a cold war apc utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-7-tata-kestrel--whap-', name: 'TATA Kestrel (WhAP)', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The TATA Kestrel (WhAP) is a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-8-mahindra-marksman', name: 'Mahindra Marksman', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Marksman is a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-9-kalyani-m4', name: 'Kalyani M4', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Kalyani M4 is a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-10-ashok-leyland-fat-6x6', name: 'Ashok Leyland FAT 6x6', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Ashok Leyland FAT 6x6 is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-11-pinaka-mbrl', name: 'Pinaka MBRL', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-12-dhanush-howitzer', name: 'Dhanush Howitzer', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Dhanush Howitzer is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-13-atags', name: 'ATAGS', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-14-k9-vajra-t', name: 'K9 Vajra-T', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T is a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-15-hal-tejas-mk1', name: 'HAL Tejas Mk1', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-16-hal-tejas-mk1a', name: 'HAL Tejas Mk1A', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1A is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-17-su-30mki', name: 'Su-30MKI', type: 'Aircraft', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Su-30MKI is a modern aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-18-rafale-dh-eh', name: 'Rafale DH/EH', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Rafale DH/EH is a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-19-mirage-2000i', name: 'Mirage 2000I', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Mirage 2000I is a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-20-mig-29upg', name: 'MiG-29UPG', type: 'Aircraft', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The MiG-29UPG is a modern aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-21-sepecat-jaguar-is', name: 'SEPECAT Jaguar IS', type: 'Aircraft', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The SEPECAT Jaguar IS is a cold war aircraft utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-22-mig-21-bison', name: 'MiG-21 Bison', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison is a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-23-hal-amca', name: 'HAL AMCA', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-24-hal-tedbf', name: 'HAL TEDBF', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-25-hal-dhruv', name: 'HAL Dhruv', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Dhruv is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-26-hal-rudra', name: 'HAL Rudra', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-27-hal-prachand', name: 'HAL Prachand', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Prachand is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-28-hal-luh', name: 'HAL LUH', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL LUH is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-29-netra-aew-c', name: 'Netra AEW&C', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The Netra AEW&C is a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-30-phalcon-awacs', name: 'Phalcon AWACS', type: 'Aircraft', country: 'India/Israel', era: 'Modern', image: '',
    description: 'The Phalcon AWACS is a modern aircraft utilized by India/Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-31-p-8i-neptune', name: 'P-8I Neptune', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune is a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-32-c-17-globemaster-iii', name: 'C-17 Globemaster III', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III is a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-33-c-130j-super-hercules', name: 'C-130J Super Hercules', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules is a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-34-il-76md', name: 'Il-76MD', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD is a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-35-an-32re', name: 'An-32RE', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE is a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-36-ins-vikramaditya', name: 'INS Vikramaditya', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The INS Vikramaditya is a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-37-ins-vikrant', name: 'INS Vikrant', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Vikrant is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-38-visakhapatnam-class-destroyer', name: 'Visakhapatnam-class Destroyer', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-39-kolkata-class-destroyer', name: 'Kolkata-class Destroyer', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kolkata-class Destroyer is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-40-delhi-class-destroyer', name: 'Delhi-class Destroyer', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-41-rajput-class-destroyer', name: 'Rajput-class Destroyer', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Rajput-class Destroyer is a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-42-nilgiri-class-frigate', name: 'Nilgiri-class Frigate', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-43-shivalik-class-frigate', name: 'Shivalik-class Frigate', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-44-talwar-class-frigate', name: 'Talwar-class Frigate', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate is a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-45-brahmaputra-class-frigate', name: 'Brahmaputra-class Frigate', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Brahmaputra-class Frigate is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-46-kamorta-class-corvette', name: 'Kamorta-class Corvette', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kamorta-class Corvette is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-47-kora-class-corvette', name: 'Kora-class Corvette', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kora-class Corvette is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-48-arihant-class-submarine', name: 'Arihant-class Submarine', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Arihant-class Submarine is a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-49-kalvari-class-submarine', name: 'Kalvari-class Submarine', type: 'Naval', country: 'India/France', era: 'Modern', image: '',
    description: 'The Kalvari-class Submarine is a modern naval utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'ind-50-sindhughosh-class-submarine', name: 'Sindhughosh-class Submarine', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine is a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-51-t-55', name: 'T-55', type: 'Tank', country: 'Russia', era: 'Cold War', image: '',
    description: 'The T-55 is a cold war tank utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-52-pt-76', name: 'PT-76', type: 'Tank', country: 'Russia', era: 'Cold War', image: '',
    description: 'The PT-76 is a cold war tank utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-53-centurion-mk-7', name: 'Centurion Mk 7', type: 'Tank', country: 'UK', era: 'Cold War', image: '',
    description: 'The Centurion Mk 7 is a cold war tank utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-54-amx-13', name: 'AMX-13', type: 'Tank', country: 'France', era: 'Cold War', image: '',
    description: 'The AMX-13 is a cold war tank utilized by France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-55-sherman', name: 'Sherman', type: 'Tank', country: 'USA', era: 'WWII', image: '',
    description: 'The Sherman is a wwii tank utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-56-btr-60', name: 'BTR-60', type: 'APC', country: 'Russia', era: 'Cold War', image: '',
    description: 'The BTR-60 is a cold war apc utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-57-btr-50', name: 'BTR-50', type: 'APC', country: 'Russia', era: 'Cold War', image: '',
    description: 'The BTR-50 is a cold war apc utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-58-ot-62-topas', name: 'OT-62 TOPAS', type: 'APC', country: 'Czechoslovakia', era: 'Cold War', image: '',
    description: 'The OT-62 TOPAS is a cold war apc utilized by Czechoslovakia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-59-casspir', name: 'Casspir', type: 'APC', country: 'South Africa', era: 'Modern', image: '',
    description: 'The Casspir is a modern apc utilized by South Africa.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-60-aditya-mpv', name: 'Aditya MPV', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Aditya MPV is a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-61-mahindra-rakshak', name: 'Mahindra Rakshak', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Rakshak is a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-62-windsor', name: 'Windsor', type: 'APC', country: 'Canada', era: 'WWII', image: '',
    description: 'The Windsor is a wwii apc utilized by Canada.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-63-fv432', name: 'FV432', type: 'APC', country: 'UK', era: 'Cold War', image: '',
    description: 'The FV432 is a cold war apc utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-64-m113', name: 'M113', type: 'APC', country: 'USA', era: 'Cold War', image: '',
    description: 'The M113 is a cold war apc utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-65-bm-21-grad', name: 'BM-21 Grad', type: 'Artillery', country: 'Russia', era: 'Cold War', image: '',
    description: 'The BM-21 Grad is a cold war artillery utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-66-bm-30-smerch', name: 'BM-30 Smerch', type: 'Artillery', country: 'Russia', era: 'Modern', image: '',
    description: 'The BM-30 Smerch is a modern artillery utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-67-m777-howitzer', name: 'M777 Howitzer', type: 'Artillery', country: 'USA', era: 'Modern', image: '',
    description: 'The M777 Howitzer is a modern artillery utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-68-bofors-fh-77b', name: 'Bofors FH-77B', type: 'Artillery', country: 'Sweden', era: 'Cold War', image: '',
    description: 'The Bofors FH-77B is a cold war artillery utilized by Sweden.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-69-m-46-field-gun', name: 'M-46 Field Gun', type: 'Artillery', country: 'Russia', era: 'Cold War', image: '',
    description: 'The M-46 Field Gun is a cold war artillery utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-70-abbot-spg', name: 'Abbot SPG', type: 'Artillery', country: 'UK', era: 'Cold War', image: '',
    description: 'The Abbot SPG is a cold war artillery utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-71-akash-sam', name: 'Akash SAM', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Akash SAM is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-72-s-400-triumf', name: 'S-400 Triumf', type: 'Artillery', country: 'Russia', era: 'Modern', image: '',
    description: 'The S-400 Triumf is a modern artillery utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-73-mrsam', name: 'MRSAM', type: 'Artillery', country: 'India/Israel', era: 'Modern', image: '',
    description: 'The MRSAM is a modern artillery utilized by India/Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-74-spyder', name: 'Spyder', type: 'Artillery', country: 'Israel', era: 'Modern', image: '',
    description: 'The Spyder is a modern artillery utilized by Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-75-qrsam', name: 'QRSAM', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The QRSAM is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-76-prithvi', name: 'Prithvi', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Prithvi is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-77-agni-i', name: 'Agni-I', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Agni-I is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-78-agni-v', name: 'Agni-V', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Agni-V is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-79-brahmos', name: 'BrahMos', type: 'Artillery', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The BrahMos is a modern artillery utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-80-nirbhay', name: 'Nirbhay', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Nirbhay is a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-81-mi-17v-5', name: 'Mi-17V-5', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Mi-17V-5 is a modern aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-82-mi-26', name: 'Mi-26', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The Mi-26 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-83-ah-64e-apache', name: 'AH-64E Apache', type: 'Aircraft', country: 'USA', era: 'Modern', image: '',
    description: 'The AH-64E Apache is a modern aircraft utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-84-ch-47f-chinook', name: 'CH-47F Chinook', type: 'Aircraft', country: 'USA', era: 'Modern', image: '',
    description: 'The CH-47F Chinook is a modern aircraft utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-85-mh-60r-seahawk', name: 'MH-60R Seahawk', type: 'Aircraft', country: 'USA', era: 'Modern', image: '',
    description: 'The MH-60R Seahawk is a modern aircraft utilized by USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-86-kamov-ka-31', name: 'Kamov Ka-31', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The Kamov Ka-31 is a modern aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-87-kamov-ka-28', name: 'Kamov Ka-28', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The Kamov Ka-28 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-88-chetak', name: 'Chetak', type: 'Aircraft', country: 'India/France', era: 'Cold War', image: '',
    description: 'The Chetak is a cold war aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-89-cheetah', name: 'Cheetah', type: 'Aircraft', country: 'India/France', era: 'Cold War', image: '',
    description: 'The Cheetah is a cold war aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-90-dornier-do-228', name: 'Dornier Do 228', type: 'Aircraft', country: 'India/Germany', era: 'Modern', image: '',
    description: 'The Dornier Do 228 is a modern aircraft utilized by India/Germany.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-91-tu-142', name: 'Tu-142', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The Tu-142 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-92-sea-harrier', name: 'Sea Harrier', type: 'Aircraft', country: 'UK', era: 'Cold War', image: '',
    description: 'The Sea Harrier is a cold war aircraft utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-93-mig-29k', name: 'MiG-29K', type: 'Aircraft', country: 'Russia', era: 'Modern', image: '',
    description: 'The MiG-29K is a modern aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-94-mig-27', name: 'MiG-27', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The MiG-27 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-95-mig-23', name: 'MiG-23', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The MiG-23 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-96-su-7', name: 'Su-7', type: 'Aircraft', country: 'Russia', era: 'Cold War', image: '',
    description: 'The Su-7 is a cold war aircraft utilized by Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-97-hunter', name: 'Hunter', type: 'Aircraft', country: 'UK', era: 'Cold War', image: '',
    description: 'The Hunter is a cold war aircraft utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-98-gnat', name: 'Gnat', type: 'Aircraft', country: 'UK', era: 'Cold War', image: '',
    description: 'The Gnat is a cold war aircraft utilized by UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-99-ajeet', name: 'Ajeet', type: 'Aircraft', country: 'India', era: 'Cold War', image: '',
    description: 'The Ajeet is a cold war aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'base-100-marut', name: 'Marut', type: 'Aircraft', country: 'India', era: 'Cold War', image: '',
    description: 'The Marut is a cold war aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-101-sepecat-jaguar-is-d', name: 'SEPECAT Jaguar IS D', type: 'Aircraft', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The SEPECAT Jaguar IS D is a variant of the SEPECAT Jaguar IS, a cold war aircraft utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-102-sindhughosh-class-submarine-mk-1', name: 'Sindhughosh-class Submarine Mk 1', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine Mk 1 is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-103-talwar-class-frigate-d', name: 'Talwar-class Frigate D', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate D is a variant of the Talwar-class Frigate, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-104-rafale-dh-eh-mk-2', name: 'Rafale DH/EH Mk 2', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Rafale DH/EH Mk 2 is a variant of the Rafale DH/EH, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-105-an-32re-light', name: 'An-32RE Light', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE Light is a variant of the An-32RE, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-106-pinaka-mbrl-mk-2', name: 'Pinaka MBRL Mk 2', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL Mk 2 is a variant of the Pinaka MBRL, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-107-phalcon-awacs-c', name: 'Phalcon AWACS C', type: 'Aircraft', country: 'India/Israel', era: 'Modern', image: '',
    description: 'The Phalcon AWACS C is a variant of the Phalcon AWACS, a modern aircraft utilized by India/Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-108-k9-vajra-t-b', name: 'K9 Vajra-T B', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T B is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-109-kamorta-class-corvette-stealth', name: 'Kamorta-class Corvette Stealth', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kamorta-class Corvette Stealth is a variant of the Kamorta-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-110-hal-tejas-mk1a-desert', name: 'HAL Tejas Mk1A Desert', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1A Desert is a variant of the HAL Tejas Mk1A, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-111-tata-kestrel--whap--c', name: 'TATA Kestrel (WhAP) C', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The TATA Kestrel (WhAP) C is a variant of the TATA Kestrel (WhAP), a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-112-nilgiri-class-frigate-mk-1', name: 'Nilgiri-class Frigate Mk 1', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Mk 1 is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-113-arjun-mk1a-light', name: 'Arjun Mk1A Light', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1A Light is a variant of the Arjun Mk1A, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-114-kalvari-class-submarine-c', name: 'Kalvari-class Submarine C', type: 'Naval', country: 'India/France', era: 'Modern', image: '',
    description: 'The Kalvari-class Submarine C is a variant of the Kalvari-class Submarine, a modern naval utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-115-hal-amca-block-ii', name: 'HAL AMCA Block II', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA Block II is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-116-hal-amca-prototype', name: 'HAL AMCA Prototype', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA Prototype is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-117-p-8i-neptune-desert', name: 'P-8I Neptune Desert', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Desert is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-118-phalcon-awacs-heavy', name: 'Phalcon AWACS Heavy', type: 'Aircraft', country: 'India/Israel', era: 'Modern', image: '',
    description: 'The Phalcon AWACS Heavy is a variant of the Phalcon AWACS, a modern aircraft utilized by India/Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-119-talwar-class-frigate-trainer', name: 'Talwar-class Frigate Trainer', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate Trainer is a variant of the Talwar-class Frigate, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-120-sepecat-jaguar-is-block-ii', name: 'SEPECAT Jaguar IS Block II', type: 'Aircraft', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The SEPECAT Jaguar IS Block II is a variant of the SEPECAT Jaguar IS, a cold war aircraft utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-121-p-8i-neptune-upgraded', name: 'P-8I Neptune Upgraded', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Upgraded is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-122-hal-amca-d', name: 'HAL AMCA D', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA D is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-123-kamorta-class-corvette-mk-1', name: 'Kamorta-class Corvette Mk 1', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kamorta-class Corvette Mk 1 is a variant of the Kamorta-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-124-kora-class-corvette-c', name: 'Kora-class Corvette C', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kora-class Corvette C is a variant of the Kora-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-125-c-17-globemaster-iii-block-ii', name: 'C-17 Globemaster III Block II', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III Block II is a variant of the C-17 Globemaster III, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-126-visakhapatnam-class-destroyer-mountain', name: 'Visakhapatnam-class Destroyer Mountain', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer Mountain is a variant of the Visakhapatnam-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-127-shivalik-class-frigate-naval', name: 'Shivalik-class Frigate Naval', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate Naval is a variant of the Shivalik-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-128-il-76md-upgraded', name: 'Il-76MD Upgraded', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Upgraded is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-129-an-32re-block-ii', name: 'An-32RE Block II', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE Block II is a variant of the An-32RE, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-130-kalvari-class-submarine-a', name: 'Kalvari-class Submarine A', type: 'Naval', country: 'India/France', era: 'Modern', image: '',
    description: 'The Kalvari-class Submarine A is a variant of the Kalvari-class Submarine, a modern naval utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-131-hal-rudra-naval', name: 'HAL Rudra Naval', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra Naval is a variant of the HAL Rudra, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-132-t-90s-bhishma-prototype', name: 'T-90S Bhishma Prototype', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma Prototype is a variant of the T-90S Bhishma, a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-133-hal-amca-export', name: 'HAL AMCA Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA Export is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-134-t-90s-bhishma-block-i', name: 'T-90S Bhishma Block I', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma Block I is a variant of the T-90S Bhishma, a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-135-atags-heavy', name: 'ATAGS Heavy', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS Heavy is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-136-c-17-globemaster-iii-c', name: 'C-17 Globemaster III C', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III C is a variant of the C-17 Globemaster III, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-137-ashok-leyland-fat-6x6-block-ii', name: 'Ashok Leyland FAT 6x6 Block II', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Ashok Leyland FAT 6x6 Block II is a variant of the Ashok Leyland FAT 6x6, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-138-rafale-dh-eh-c', name: 'Rafale DH/EH C', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Rafale DH/EH C is a variant of the Rafale DH/EH, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-139-visakhapatnam-class-destroyer-mk-2', name: 'Visakhapatnam-class Destroyer Mk 2', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer Mk 2 is a variant of the Visakhapatnam-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-140-hal-tedbf-desert', name: 'HAL TEDBF Desert', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF Desert is a variant of the HAL TEDBF, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-141-arjun-mk1-export', name: 'Arjun Mk1 Export', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1 Export is a variant of the Arjun Mk1, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-142-t-72m1-ajeya-recon', name: 'T-72M1 Ajeya Recon', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya Recon is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-143-mig-21-bison-mountain', name: 'MiG-21 Bison Mountain', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison Mountain is a variant of the MiG-21 Bison, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-144-mig-21-bison-a', name: 'MiG-21 Bison A', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison A is a variant of the MiG-21 Bison, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-145-sindhughosh-class-submarine-mk-2', name: 'Sindhughosh-class Submarine Mk 2', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine Mk 2 is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-146-hal-tedbf-upgraded', name: 'HAL TEDBF Upgraded', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF Upgraded is a variant of the HAL TEDBF, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-147-shivalik-class-frigate-c', name: 'Shivalik-class Frigate C', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate C is a variant of the Shivalik-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-148-kalyani-m4-desert', name: 'Kalyani M4 Desert', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Kalyani M4 Desert is a variant of the Kalyani M4, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-149-mig-21-bison-light', name: 'MiG-21 Bison Light', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison Light is a variant of the MiG-21 Bison, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-150-phalcon-awacs-trainer', name: 'Phalcon AWACS Trainer', type: 'Aircraft', country: 'India/Israel', era: 'Modern', image: '',
    description: 'The Phalcon AWACS Trainer is a variant of the Phalcon AWACS, a modern aircraft utilized by India/Israel.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-151-ins-vikrant-export', name: 'INS Vikrant Export', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Vikrant Export is a variant of the INS Vikrant, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-152-il-76md-recon', name: 'Il-76MD Recon', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Recon is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-153-vijayanta-upgraded', name: 'Vijayanta Upgraded', type: 'Tank', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The Vijayanta Upgraded is a variant of the Vijayanta, a cold war tank utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-154-hal-tejas-mk1-c', name: 'HAL Tejas Mk1 C', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 C is a variant of the HAL Tejas Mk1, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-155-kora-class-corvette-mountain', name: 'Kora-class Corvette Mountain', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kora-class Corvette Mountain is a variant of the Kora-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-156-netra-aew-c-recon', name: 'Netra AEW&C Recon', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The Netra AEW&C Recon is a variant of the Netra AEW&C, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-157-arjun-mk1-b', name: 'Arjun Mk1 B', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1 B is a variant of the Arjun Mk1, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-158-rajput-class-destroyer-a', name: 'Rajput-class Destroyer A', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Rajput-class Destroyer A is a variant of the Rajput-class Destroyer, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-159-hal-rudra-upgraded', name: 'HAL Rudra Upgraded', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra Upgraded is a variant of the HAL Rudra, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-160-c-130j-super-hercules-mountain', name: 'C-130J Super Hercules Mountain', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules Mountain is a variant of the C-130J Super Hercules, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-161-hal-luh-command', name: 'HAL LUH Command', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL LUH Command is a variant of the HAL LUH, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-162-mirage-2000i-block-i', name: 'Mirage 2000I Block I', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Mirage 2000I Block I is a variant of the Mirage 2000I, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-163-c-17-globemaster-iii-heavy', name: 'C-17 Globemaster III Heavy', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III Heavy is a variant of the C-17 Globemaster III, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-164-hal-prachand-mk-1', name: 'HAL Prachand Mk 1', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Prachand Mk 1 is a variant of the HAL Prachand, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-165-bmp-2-sarath-b', name: 'BMP-2 Sarath B', type: 'APC', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The BMP-2 Sarath B is a variant of the BMP-2 Sarath, a cold war apc utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-166-hal-rudra-stealth', name: 'HAL Rudra Stealth', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra Stealth is a variant of the HAL Rudra, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-167-talwar-class-frigate-block-ii', name: 'Talwar-class Frigate Block II', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate Block II is a variant of the Talwar-class Frigate, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-168-kamorta-class-corvette-a', name: 'Kamorta-class Corvette A', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kamorta-class Corvette A is a variant of the Kamorta-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-169-nilgiri-class-frigate-upgraded', name: 'Nilgiri-class Frigate Upgraded', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Upgraded is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-170-il-76md-mk-2', name: 'Il-76MD Mk 2', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Mk 2 is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-171-sepecat-jaguar-is-recon', name: 'SEPECAT Jaguar IS Recon', type: 'Aircraft', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The SEPECAT Jaguar IS Recon is a variant of the SEPECAT Jaguar IS, a cold war aircraft utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-172-hal-tejas-mk1-export', name: 'HAL Tejas Mk1 Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 Export is a variant of the HAL Tejas Mk1, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-173-brahmaputra-class-frigate-recon', name: 'Brahmaputra-class Frigate Recon', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Brahmaputra-class Frigate Recon is a variant of the Brahmaputra-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-174-il-76md-export', name: 'Il-76MD Export', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Export is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-175-il-76md-block-ii', name: 'Il-76MD Block II', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Block II is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-176-hal-rudra-desert', name: 'HAL Rudra Desert', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra Desert is a variant of the HAL Rudra, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-177-nilgiri-class-frigate-c', name: 'Nilgiri-class Frigate C', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate C is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-178-delhi-class-destroyer-command', name: 'Delhi-class Destroyer Command', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer Command is a variant of the Delhi-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-179-rajput-class-destroyer-recon', name: 'Rajput-class Destroyer Recon', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Rajput-class Destroyer Recon is a variant of the Rajput-class Destroyer, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-180-hal-tejas-mk1-command', name: 'HAL Tejas Mk1 Command', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 Command is a variant of the HAL Tejas Mk1, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-181-nilgiri-class-frigate-desert', name: 'Nilgiri-class Frigate Desert', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Desert is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-182-c-130j-super-hercules-mk-2', name: 'C-130J Super Hercules Mk 2', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules Mk 2 is a variant of the C-130J Super Hercules, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-183-t-90s-bhishma-naval', name: 'T-90S Bhishma Naval', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma Naval is a variant of the T-90S Bhishma, a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-184-an-32re-trainer', name: 'An-32RE Trainer', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE Trainer is a variant of the An-32RE, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-185-dhanush-howitzer-block-i', name: 'Dhanush Howitzer Block I', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Dhanush Howitzer Block I is a variant of the Dhanush Howitzer, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-186-k9-vajra-t-prototype', name: 'K9 Vajra-T Prototype', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T Prototype is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-187-hal-amca-naval', name: 'HAL AMCA Naval', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA Naval is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-188-talwar-class-frigate-command', name: 'Talwar-class Frigate Command', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate Command is a variant of the Talwar-class Frigate, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-189-k9-vajra-t-desert', name: 'K9 Vajra-T Desert', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T Desert is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-190-kalvari-class-submarine-heavy', name: 'Kalvari-class Submarine Heavy', type: 'Naval', country: 'India/France', era: 'Modern', image: '',
    description: 'The Kalvari-class Submarine Heavy is a variant of the Kalvari-class Submarine, a modern naval utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-191-pinaka-mbrl-command', name: 'Pinaka MBRL Command', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL Command is a variant of the Pinaka MBRL, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-192-brahmaputra-class-frigate-c', name: 'Brahmaputra-class Frigate C', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Brahmaputra-class Frigate C is a variant of the Brahmaputra-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-193-kora-class-corvette-block-i', name: 'Kora-class Corvette Block I', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kora-class Corvette Block I is a variant of the Kora-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-194-p-8i-neptune-export', name: 'P-8I Neptune Export', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Export is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-195-sindhughosh-class-submarine-block-ii', name: 'Sindhughosh-class Submarine Block II', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine Block II is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-196-arihant-class-submarine-block-ii', name: 'Arihant-class Submarine Block II', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Arihant-class Submarine Block II is a variant of the Arihant-class Submarine, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-197-t-72m1-ajeya-trainer', name: 'T-72M1 Ajeya Trainer', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya Trainer is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-198-c-130j-super-hercules-trainer', name: 'C-130J Super Hercules Trainer', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules Trainer is a variant of the C-130J Super Hercules, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-199-atags-a', name: 'ATAGS A', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS A is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-200-sindhughosh-class-submarine-light', name: 'Sindhughosh-class Submarine Light', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine Light is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-201-c-17-globemaster-iii-trainer', name: 'C-17 Globemaster III Trainer', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III Trainer is a variant of the C-17 Globemaster III, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-202-kora-class-corvette-heavy', name: 'Kora-class Corvette Heavy', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kora-class Corvette Heavy is a variant of the Kora-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-203-mig-21-bison-block-ii', name: 'MiG-21 Bison Block II', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison Block II is a variant of the MiG-21 Bison, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-204-kalyani-m4-command', name: 'Kalyani M4 Command', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Kalyani M4 Command is a variant of the Kalyani M4, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-205-k9-vajra-t-light', name: 'K9 Vajra-T Light', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T Light is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-206-atags-export', name: 'ATAGS Export', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS Export is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-207-visakhapatnam-class-destroyer-trainer', name: 'Visakhapatnam-class Destroyer Trainer', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer Trainer is a variant of the Visakhapatnam-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-208-c-130j-super-hercules-command', name: 'C-130J Super Hercules Command', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules Command is a variant of the C-130J Super Hercules, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-209-ins-vikrant-trainer', name: 'INS Vikrant Trainer', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Vikrant Trainer is a variant of the INS Vikrant, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-210-t-90s-bhishma-heavy', name: 'T-90S Bhishma Heavy', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma Heavy is a variant of the T-90S Bhishma, a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-211-ins-vikrant-block-i', name: 'INS Vikrant Block I', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Vikrant Block I is a variant of the INS Vikrant, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-212-tata-kestrel--whap--export', name: 'TATA Kestrel (WhAP) Export', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The TATA Kestrel (WhAP) Export is a variant of the TATA Kestrel (WhAP), a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-213-hal-amca-block-i', name: 'HAL AMCA Block I', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL AMCA Block I is a variant of the HAL AMCA, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-214-hal-tejas-mk1-mountain', name: 'HAL Tejas Mk1 Mountain', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 Mountain is a variant of the HAL Tejas Mk1, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-215-arjun-mk1a-upgraded', name: 'Arjun Mk1A Upgraded', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1A Upgraded is a variant of the Arjun Mk1A, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-216-t-72m1-ajeya-naval', name: 'T-72M1 Ajeya Naval', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya Naval is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-217-su-30mki-b', name: 'Su-30MKI B', type: 'Aircraft', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Su-30MKI B is a variant of the Su-30MKI, a modern aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-218-shivalik-class-frigate-command', name: 'Shivalik-class Frigate Command', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate Command is a variant of the Shivalik-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-219-shivalik-class-frigate-block-ii', name: 'Shivalik-class Frigate Block II', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate Block II is a variant of the Shivalik-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-220-mirage-2000i-b', name: 'Mirage 2000I B', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Mirage 2000I B is a variant of the Mirage 2000I, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-221-k9-vajra-t-export', name: 'K9 Vajra-T Export', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T Export is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-222-netra-aew-c-mk-1', name: 'Netra AEW&C Mk 1', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The Netra AEW&C Mk 1 is a variant of the Netra AEW&C, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-223-nilgiri-class-frigate-mountain', name: 'Nilgiri-class Frigate Mountain', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Mountain is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-224-delhi-class-destroyer-naval', name: 'Delhi-class Destroyer Naval', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer Naval is a variant of the Delhi-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-225-arjun-mk1-a', name: 'Arjun Mk1 A', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1 A is a variant of the Arjun Mk1, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-226-sepecat-jaguar-is-c', name: 'SEPECAT Jaguar IS C', type: 'Aircraft', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The SEPECAT Jaguar IS C is a variant of the SEPECAT Jaguar IS, a cold war aircraft utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-227-visakhapatnam-class-destroyer-a', name: 'Visakhapatnam-class Destroyer A', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer A is a variant of the Visakhapatnam-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-228-pinaka-mbrl-block-ii', name: 'Pinaka MBRL Block II', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL Block II is a variant of the Pinaka MBRL, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-229-rajput-class-destroyer-stealth', name: 'Rajput-class Destroyer Stealth', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Rajput-class Destroyer Stealth is a variant of the Rajput-class Destroyer, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-230-hal-tejas-mk1a-a', name: 'HAL Tejas Mk1A A', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1A A is a variant of the HAL Tejas Mk1A, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-231-ashok-leyland-fat-6x6-heavy', name: 'Ashok Leyland FAT 6x6 Heavy', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Ashok Leyland FAT 6x6 Heavy is a variant of the Ashok Leyland FAT 6x6, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-232-il-76md-command', name: 'Il-76MD Command', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Command is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-233-hal-tejas-mk1-heavy', name: 'HAL Tejas Mk1 Heavy', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1 Heavy is a variant of the HAL Tejas Mk1, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-234-mahindra-marksman-a', name: 'Mahindra Marksman A', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Marksman A is a variant of the Mahindra Marksman, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-235-kolkata-class-destroyer-command', name: 'Kolkata-class Destroyer Command', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kolkata-class Destroyer Command is a variant of the Kolkata-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-236-an-32re-command', name: 'An-32RE Command', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE Command is a variant of the An-32RE, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-237-p-8i-neptune-light', name: 'P-8I Neptune Light', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Light is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-238-bmp-2-sarath-upgraded', name: 'BMP-2 Sarath Upgraded', type: 'APC', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The BMP-2 Sarath Upgraded is a variant of the BMP-2 Sarath, a cold war apc utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-239-brahmaputra-class-frigate-block-ii', name: 'Brahmaputra-class Frigate Block II', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Brahmaputra-class Frigate Block II is a variant of the Brahmaputra-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-240-tata-kestrel--whap--upgraded', name: 'TATA Kestrel (WhAP) Upgraded', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The TATA Kestrel (WhAP) Upgraded is a variant of the TATA Kestrel (WhAP), a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-241-p-8i-neptune-mountain', name: 'P-8I Neptune Mountain', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Mountain is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-242-hal-prachand-export', name: 'HAL Prachand Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Prachand Export is a variant of the HAL Prachand, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-243-atags-command', name: 'ATAGS Command', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS Command is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-244-p-8i-neptune-mk-1', name: 'P-8I Neptune Mk 1', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The P-8I Neptune Mk 1 is a variant of the P-8I Neptune, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-245-mahindra-marksman-heavy', name: 'Mahindra Marksman Heavy', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Marksman Heavy is a variant of the Mahindra Marksman, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-246-arjun-mk1-block-i', name: 'Arjun Mk1 Block I', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1 Block I is a variant of the Arjun Mk1, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-247-c-130j-super-hercules-light', name: 'C-130J Super Hercules Light', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-130J Super Hercules Light is a variant of the C-130J Super Hercules, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-248-nilgiri-class-frigate-naval', name: 'Nilgiri-class Frigate Naval', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Naval is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-249-hal-prachand-c', name: 'HAL Prachand C', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Prachand C is a variant of the HAL Prachand, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-250-c-17-globemaster-iii-prototype', name: 'C-17 Globemaster III Prototype', type: 'Aircraft', country: 'India/USA', era: 'Modern', image: '',
    description: 'The C-17 Globemaster III Prototype is a variant of the C-17 Globemaster III, a modern aircraft utilized by India/USA.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-251-hal-tejas-mk1a-block-i', name: 'HAL Tejas Mk1A Block I', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1A Block I is a variant of the HAL Tejas Mk1A, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-252-talwar-class-frigate-mountain', name: 'Talwar-class Frigate Mountain', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The Talwar-class Frigate Mountain is a variant of the Talwar-class Frigate, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-253-pinaka-mbrl-mountain', name: 'Pinaka MBRL Mountain', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL Mountain is a variant of the Pinaka MBRL, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-254-mirage-2000i-export', name: 'Mirage 2000I Export', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Mirage 2000I Export is a variant of the Mirage 2000I, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-255-il-76md-c', name: 'Il-76MD C', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD C is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-256-visakhapatnam-class-destroyer-export', name: 'Visakhapatnam-class Destroyer Export', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Visakhapatnam-class Destroyer Export is a variant of the Visakhapatnam-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-257-ins-vikramaditya-c', name: 'INS Vikramaditya C', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The INS Vikramaditya C is a variant of the INS Vikramaditya, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-258-nilgiri-class-frigate-block-ii', name: 'Nilgiri-class Frigate Block II', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Nilgiri-class Frigate Block II is a variant of the Nilgiri-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-259-hal-tedbf-export', name: 'HAL TEDBF Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF Export is a variant of the HAL TEDBF, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-260-ins-vikrant-c', name: 'INS Vikrant C', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The INS Vikrant C is a variant of the INS Vikrant, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-261-hal-luh-upgraded', name: 'HAL LUH Upgraded', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL LUH Upgraded is a variant of the HAL LUH, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-262-hal-tedbf-block-ii', name: 'HAL TEDBF Block II', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF Block II is a variant of the HAL TEDBF, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-263-netra-aew-c-trainer', name: 'Netra AEW&C Trainer', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The Netra AEW&C Trainer is a variant of the Netra AEW&C, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-264-bmp-2-sarath-mountain', name: 'BMP-2 Sarath Mountain', type: 'APC', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The BMP-2 Sarath Mountain is a variant of the BMP-2 Sarath, a cold war apc utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-265-k9-vajra-t-a', name: 'K9 Vajra-T A', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T A is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-266-delhi-class-destroyer-desert', name: 'Delhi-class Destroyer Desert', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer Desert is a variant of the Delhi-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-267-pinaka-mbrl-a', name: 'Pinaka MBRL A', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Pinaka MBRL A is a variant of the Pinaka MBRL, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-268-atags-recon', name: 'ATAGS Recon', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS Recon is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-269-t-72m1-ajeya-b', name: 'T-72M1 Ajeya B', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya B is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-270-delhi-class-destroyer-upgraded', name: 'Delhi-class Destroyer Upgraded', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer Upgraded is a variant of the Delhi-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-271-k9-vajra-t-block-i', name: 'K9 Vajra-T Block I', type: 'Artillery', country: 'India/South Korea', era: 'Modern', image: '',
    description: 'The K9 Vajra-T Block I is a variant of the K9 Vajra-T, a modern artillery utilized by India/South Korea.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-272-sindhughosh-class-submarine-c', name: 'Sindhughosh-class Submarine C', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine C is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-273-hal-tedbf-c', name: 'HAL TEDBF C', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL TEDBF C is a variant of the HAL TEDBF, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-274-kamorta-class-corvette-prototype', name: 'Kamorta-class Corvette Prototype', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Kamorta-class Corvette Prototype is a variant of the Kamorta-class Corvette, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-275-mig-21-bison-prototype', name: 'MiG-21 Bison Prototype', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The MiG-21 Bison Prototype is a variant of the MiG-21 Bison, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-276-arjun-mk1a-stealth', name: 'Arjun Mk1A Stealth', type: 'Tank', country: 'India', era: 'Modern', image: '',
    description: 'The Arjun Mk1A Stealth is a variant of the Arjun Mk1A, a modern tank utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-277-t-72m1-ajeya-export', name: 'T-72M1 Ajeya Export', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya Export is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-278-kalyani-m4-d', name: 'Kalyani M4 D', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Kalyani M4 D is a variant of the Kalyani M4, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-279-sindhughosh-class-submarine-command', name: 'Sindhughosh-class Submarine Command', type: 'Naval', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Sindhughosh-class Submarine Command is a variant of the Sindhughosh-class Submarine, a cold war naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-280-shivalik-class-frigate-mk-1', name: 'Shivalik-class Frigate Mk 1', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Shivalik-class Frigate Mk 1 is a variant of the Shivalik-class Frigate, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-281-tata-kestrel--whap--stealth', name: 'TATA Kestrel (WhAP) Stealth', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The TATA Kestrel (WhAP) Stealth is a variant of the TATA Kestrel (WhAP), a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-282-hal-prachand-command', name: 'HAL Prachand Command', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Prachand Command is a variant of the HAL Prachand, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-283-hal-tejas-mk1a-export', name: 'HAL Tejas Mk1A Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Tejas Mk1A Export is a variant of the HAL Tejas Mk1A, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-284-t-90s-bhishma-c', name: 'T-90S Bhishma C', type: 'Tank', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The T-90S Bhishma C is a variant of the T-90S Bhishma, a modern tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-285-ins-vikramaditya-d', name: 'INS Vikramaditya D', type: 'Naval', country: 'India/Russia', era: 'Modern', image: '',
    description: 'The INS Vikramaditya D is a variant of the INS Vikramaditya, a modern naval utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-286-atags-mk-1', name: 'ATAGS Mk 1', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The ATAGS Mk 1 is a variant of the ATAGS, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-287-bmp-2-sarath-prototype', name: 'BMP-2 Sarath Prototype', type: 'APC', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The BMP-2 Sarath Prototype is a variant of the BMP-2 Sarath, a cold war apc utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-288-delhi-class-destroyer-stealth', name: 'Delhi-class Destroyer Stealth', type: 'Naval', country: 'India', era: 'Modern', image: '',
    description: 'The Delhi-class Destroyer Stealth is a variant of the Delhi-class Destroyer, a modern naval utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-289-an-32re-desert', name: 'An-32RE Desert', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The An-32RE Desert is a variant of the An-32RE, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-290-netra-aew-c-block-i', name: 'Netra AEW&C Block I', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The Netra AEW&C Block I is a variant of the Netra AEW&C, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-291-rafale-dh-eh-mk-1', name: 'Rafale DH/EH Mk 1', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Rafale DH/EH Mk 1 is a variant of the Rafale DH/EH, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-292-il-76md-stealth', name: 'Il-76MD Stealth', type: 'Aircraft', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The Il-76MD Stealth is a variant of the Il-76MD, a cold war aircraft utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-293-vijayanta-mk-2', name: 'Vijayanta Mk 2', type: 'Tank', country: 'India/UK', era: 'Cold War', image: '',
    description: 'The Vijayanta Mk 2 is a variant of the Vijayanta, a cold war tank utilized by India/UK.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-294-mahindra-marksman-trainer', name: 'Mahindra Marksman Trainer', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Marksman Trainer is a variant of the Mahindra Marksman, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-295-t-72m1-ajeya-prototype', name: 'T-72M1 Ajeya Prototype', type: 'Tank', country: 'India/Russia', era: 'Cold War', image: '',
    description: 'The T-72M1 Ajeya Prototype is a variant of the T-72M1 Ajeya, a cold war tank utilized by India/Russia.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-296-mahindra-marksman-naval', name: 'Mahindra Marksman Naval', type: 'APC', country: 'India', era: 'Modern', image: '',
    description: 'The Mahindra Marksman Naval is a variant of the Mahindra Marksman, a modern apc utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-297-hal-rudra-export', name: 'HAL Rudra Export', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Rudra Export is a variant of the HAL Rudra, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-298-rafale-dh-eh-d', name: 'Rafale DH/EH D', type: 'Aircraft', country: 'India/France', era: 'Modern', image: '',
    description: 'The Rafale DH/EH D is a variant of the Rafale DH/EH, a modern aircraft utilized by India/France.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-299-hal-dhruv-mk-2', name: 'HAL Dhruv Mk 2', type: 'Aircraft', country: 'India', era: 'Modern', image: '',
    description: 'The HAL Dhruv Mk 2 is a variant of the HAL Dhruv, a modern aircraft utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  },
  {
    id: 'var-300-ashok-leyland-fat-6x6-mk-1', name: 'Ashok Leyland FAT 6x6 Mk 1', type: 'Artillery', country: 'India', era: 'Modern', image: '',
    description: 'The Ashok Leyland FAT 6x6 Mk 1 is a variant of the Ashok Leyland FAT 6x6, a modern artillery utilized by India.',
    specs: {'weight':'Classified','speed':'Classified','armament':['Various'],'crew':1,'range':'Classified','engine':'Classified'}
  }
];
