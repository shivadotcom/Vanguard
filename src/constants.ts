import { Vehicle } from './types';

export const VEHICLES: Vehicle[] = [
  {
    id: 'm1a2-abrams',
    name: 'M1A2 Abrams',
    type: 'Tank',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=2000&auto=format&fit=crop',
    description: 'The M1 Abrams is a third-generation American main battle tank. It is highly mobile, designed for modern armored ground warfare.',
    specs: {
      weight: '62 metric tons',
      speed: '67 km/h',
      armament: ['120 mm M256 smoothbore gun', '1 x .50 caliber M2HB machine gun', '2 x 7.62 mm M240 machine guns'],
      armor: 'Chobham, RH armor, Depleted Uranium mesh',
      crew: 4,
      range: '426 km'
    },
    variants: [
      { name: 'M1A1', description: 'Upgraded with 120mm smoothbore gun and improved armor.' },
      { name: 'M1A2 SEPv3', description: 'Latest modernization with improved power distribution and communications.' },
      { name: 'M1 TTB', description: 'Tank Test Bed with unmanned turret and crew in hull.' }
    ],
    timeline: [
      { year: '1972', event: 'Chrysler Defense and General Motors submit designs for XM1.' },
      { year: '1976', event: 'Chrysler design selected for production.' },
      { year: '1980', event: 'Initial production M1 enters service.' },
      { year: '1985', event: 'M1A1 upgrade with 120mm gun introduced.' },
      { year: '1992', event: 'M1A2 variant enters service with digital systems.' },
      { year: '2017', event: 'M1A2 SEPv3 modernization begins delivery.' }
    ],
    gallery: [
      'https://picsum.photos/seed/abrams1/800/600',
      'https://picsum.photos/seed/abrams2/800/600',
      'https://picsum.photos/seed/abrams3/800/600',
      'https://picsum.photos/seed/abrams4/800/600'
    ]
  },
  {
    id: 'leopard-2a7',
    name: 'Leopard 2A7',
    type: 'Tank',
    country: 'Germany',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1621682372775-533449e550ed?q=80&w=2070&auto=format&fit=crop',
    description: 'The Leopard 2 is a main battle tank developed by Krauss-Maffei in the 1970s for the West German Army.',
    specs: {
      weight: '62.3 metric tons',
      speed: '68 km/h',
      armament: ['120 mm Rheinmetall L/55 smoothbore gun', '2 x 7.62 mm MG3A1'],
      armor: 'Modular composite armor',
      crew: 4,
      range: '450 km'
    },
    variants: [
      { name: 'Leopard 2A4', description: 'Most widespread version with vertical turret armor.' },
      { name: 'Leopard 2A6', description: 'Features the longer L/55 gun for increased penetration.' },
      { name: 'Strv 122', description: 'Swedish variant with reinforced top armor and command systems.' }
    ],
    timeline: [
      { year: '1970', event: 'Development of Leopard 2 begins.' },
      { year: '1979', event: 'Leopard 2 enters service with the Bundeswehr.' },
      { year: '1985', event: 'Leopard 2A4 (most common variant) introduced.' },
      { year: '1995', event: 'Leopard 2A5 upgrade with wedge-shaped armor.' },
      { year: '2001', event: 'Leopard 2A6 with longer L/55 gun enters service.' },
      { year: '2014', event: 'Leopard 2A7 modernization delivered to Germany.' }
    ],
    gallery: [
      'https://picsum.photos/seed/leopard1/800/600',
      'https://picsum.photos/seed/leopard2/800/600',
      'https://picsum.photos/seed/leopard3/800/600',
      'https://picsum.photos/seed/leopard4/800/600'
    ]
  },
  {
    id: 'f22-raptor',
    name: 'F-22 Raptor',
    type: 'Aircraft',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1567259565705-05249f3d9701?q=80&w=2070&auto=format&fit=crop',
    description: 'The Lockheed Martin F-22 Raptor is an American single-seat, twin-engine, all-weather stealth tactical fighter aircraft.',
    specs: {
      weight: '19,700 kg (empty)',
      speed: 'Mach 2.25 (2,410 km/h)',
      armament: ['20 mm M61A2 Vulcan cannon', 'AIM-120 AMRAAM', 'AIM-9 Sidewinder'],
      crew: 1,
      range: '3,000 km'
    },
    variants: [
      { name: 'F-22A', description: 'The primary production version for the USAF.' },
      { name: 'FB-22', description: 'Proposed regional bomber version with larger delta wing (Cancelled).' }
    ],
    timeline: [
      { year: '1981', event: 'Advanced Tactical Fighter (ATF) program initiated.' },
      { year: '1990', event: 'YF-22 prototype first flight.' },
      { year: '1991', event: 'Lockheed Martin design selected over YF-23.' },
      { year: '1997', event: 'First production F-22 Raptor flight.' },
      { year: '2005', event: 'Full operational capability achieved.' },
      { year: '2011', event: 'Final production F-22 delivered to USAF.' }
    ],
    gallery: [
      'https://picsum.photos/seed/raptor1/800/600',
      'https://picsum.photos/seed/raptor2/800/600',
      'https://picsum.photos/seed/raptor3/800/600',
      'https://picsum.photos/seed/raptor4/800/600'
    ]
  },
  {
    id: 't-14-armata',
    name: 'T-14 Armata',
    type: 'Tank',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1590424753858-394a1278090d?q=80&w=1974&auto=format&fit=crop',
    description: 'The T-14 Armata is a next-generation Russian main battle tank based on the Armata Universal Combat Platform.',
    specs: {
      weight: '48 metric tons',
      speed: '80–90 km/h',
      armament: ['125 mm 2A82-1M smoothbore gun', '12.7 mm Kord machine gun', '7.62 mm PKTM machine gun'],
      armor: '44S-sv-Sh, Afghanit active protection system',
      crew: 3,
      range: '500 km'
    }
  },
  {
    id: 'nimitz-class',
    name: 'Nimitz-class Aircraft Carrier',
    type: 'Naval',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop',
    description: 'The Nimitz-class aircraft carriers are a class of ten nuclear-powered aircraft carriers in service with the United States Navy.',
    specs: {
      weight: '100,000 long tons',
      speed: '30+ knots (56+ km/h)',
      armament: ['Sea Sparrow missiles', 'Phalanx CIWS', 'RIM-116 Rolling Airframe Missile'],
      crew: 6000,
      range: 'Unlimited (Nuclear powered)'
    }
  },
  {
    id: 'su-57',
    name: 'Sukhoi Su-57',
    type: 'Aircraft',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1614332284882-331c326582a3?q=80&w=2070&auto=format&fit=crop',
    description: 'The Sukhoi Su-57 is a twin-engine stealth multirole fighter aircraft developed by Sukhoi.',
    specs: {
      weight: '18,000 kg (empty)',
      speed: 'Mach 2.0 (2,120 km/h)',
      armament: ['30 mm Gryazev-Shipunov GSh-30-1 cannon', 'Kh-38M', 'R-77M'],
      crew: 1,
      range: '3,500 km'
    }
  },
  {
    id: 'a10-warthog',
    name: 'A-10 Thunderbolt II',
    type: 'Aircraft',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1583623025817-d180a2221d0a?q=80&w=2070&auto=format&fit=crop',
    description: 'The Fairchild Republic A-10 Thunderbolt II is a single-seat, twin-turbofan, straight-wing, subsonic attack aircraft.',
    specs: {
      weight: '11,321 kg (empty)',
      speed: '706 km/h',
      armament: ['30 mm GAU-8/A Avenger rotary cannon', 'Hydra 70 rockets', 'AGM-65 Maverick'],
      crew: 1,
      range: '4,150 km'
    }
  },
  {
    id: 'ah64-apache',
    name: 'AH-64 Apache',
    type: 'Aircraft',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1534260164206-2a3a4976001b?q=80&w=1974&auto=format&fit=crop',
    description: 'The Boeing AH-64 Apache is an American advanced attack helicopter with a nose-mounted sensor suite for target acquisition and night vision systems.',
    specs: {
      weight: '5,165 kg (empty)',
      speed: '293 km/h',
      armament: ['30 mm M230 chain gun', 'AGM-114 Hellfire', 'Hydra 70 rockets'],
      crew: 2,
      range: '476 km'
    }
  },
  {
    id: 'challenger-2',
    name: 'Challenger 2',
    type: 'Tank',
    country: 'UK',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The FV4034 Challenger 2 is a British main battle tank (MBT) in service with the armies of the United Kingdom and Oman.',
    specs: {
      weight: '62.5 metric tons',
      speed: '59 km/h',
      armament: ['120 mm L30A1 rifled gun', '2 x 7.62 mm L94A1 chain gun'],
      armor: 'Chobham / Dorchester Level 2',
      crew: 4,
      range: '550 km'
    },
    gallery: [
      'https://picsum.photos/seed/challenger1/800/600',
      'https://picsum.photos/seed/challenger2/800/600'
    ]
  },
  {
    id: 'k2-black-panther',
    name: 'K2 Black Panther',
    type: 'Tank',
    country: 'South Korea',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1576400883215-7083980b1297?q=80&w=2012&auto=format&fit=crop',
    description: 'The K2 Black Panther is a next-generation South Korean main battle tank designed by the Agency for Defense Development.',
    specs: {
      weight: '55 metric tons',
      speed: '70 km/h',
      armament: ['120 mm L/55 smoothbore gun', '12.7 mm K6 heavy machine gun'],
      armor: 'Composite armor with ERA',
      crew: 3,
      range: '450 km'
    }
  },
  {
    id: 'merkava-iv',
    name: 'Merkava Mark IV',
    type: 'Tank',
    country: 'Israel',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1580136608260-42d1c49e6a70?q=80&w=2018&auto=format&fit=crop',
    description: 'The Merkava is a series of main battle tanks used by the Israel Defense Forces and the backbone of the IDF\'s armored corps.',
    specs: {
      weight: '65 metric tons',
      speed: '64 km/h',
      armament: ['120 mm MG253 smoothbore gun', '1 x 12.7 mm MG', '2 x 7.62 mm MG'],
      armor: 'Classified composite/sloped armor',
      crew: 4,
      range: '500 km'
    }
  },
  {
    id: 'm2-bradley',
    name: 'M2 Bradley',
    type: 'APC',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The M2 Bradley Infantry Fighting Vehicle is an American infantry fighting vehicle that is part of the Bradley Fighting Vehicle family.',
    specs: {
      weight: '27.6 metric tons',
      speed: '64 km/h',
      armament: ['25 mm M242 Bushmaster chain gun', 'TOW anti-tank missiles'],
      crew: 3,
      range: '480 km'
    }
  },
  {
    id: 'bmp-3',
    name: 'BMP-3',
    type: 'APC',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1590424753858-394a1278090d?q=80&w=1974&auto=format&fit=crop',
    description: 'The BMP-3 is a Soviet and Russian infantry fighting vehicle, successor to the BMP-1 and BMP-2.',
    specs: {
      weight: '18.7 metric tons',
      speed: '72 km/h',
      armament: ['100 mm 2A70 rifled gun', '30 mm 2A72 autocannon'],
      crew: 3,
      range: '600 km'
    }
  },
  {
    id: 'eurofighter',
    name: 'Eurofighter Typhoon',
    type: 'Aircraft',
    country: 'EU',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop',
    description: 'The Eurofighter Typhoon is a European multinational twin-engine, canard delta wing, multirole fighter.',
    specs: {
      weight: '11,000 kg (empty)',
      speed: 'Mach 2.0+',
      armament: ['27 mm Mauser BK-27 revolver cannon', 'Meteor BVRAAM'],
      crew: 1,
      range: '2,900 km'
    }
  },
  {
    id: 'j-20',
    name: 'Chengdu J-20',
    type: 'Aircraft',
    country: 'China',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1567259565705-05249f3d9701?q=80&w=2070&auto=format&fit=crop',
    description: 'The Chengdu J-20, also known as Mighty Dragon, is a twin-engine all-weather stealth fifth-generation fighter aircraft.',
    specs: {
      weight: '19,000 kg (empty)',
      speed: 'Mach 2.0+',
      armament: ['Internal weapons bay', 'PL-15 BVRAAM', 'PL-10 SRAAM'],
      crew: 1,
      range: '6,000 km'
    }
  },
  {
    id: 'type-055',
    name: 'Type 055 Destroyer',
    type: 'Naval',
    country: 'China',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop',
    description: 'The Type 055 destroyer is a class of stealth guided-missile destroyers being constructed for the Chinese People\'s Liberation Army Navy.',
    specs: {
      weight: '12,000–13,000 tons',
      speed: '30 knots',
      armament: ['112 VLS cells', 'HHQ-9 SAM', 'YJ-18 Anti-ship missiles'],
      crew: 300,
      range: '9,300 km'
    }
  },
  {
    id: 'astute-class',
    name: 'Astute-class Submarine',
    type: 'Naval',
    country: 'UK',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop',
    description: 'The Astute class is the latest class of nuclear-powered fleet submarines (SSNs) in service with the Royal Navy.',
    specs: {
      weight: '7,400 tons (submerged)',
      speed: '30 knots',
      armament: ['6 x 21-inch torpedo tubes', 'Spearfish torpedoes', 'Tomahawk missiles'],
      crew: 98,
      range: 'Unlimited (Nuclear)'
    }
  },
  {
    id: 'pzh-2000',
    name: 'PzH 2000',
    type: 'Artillery',
    country: 'Germany',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The Panzerhaubitze 2000 is a German 155 mm self-propelled howitzer developed by Krauss-Maffei Wegmann.',
    specs: {
      weight: '55.3 metric tons',
      speed: '67 km/h',
      armament: ['155 mm Rheinmetall L52 JBM', '7.62 mm MG3 machine gun'],
      crew: 5,
      range: '420 km'
    }
  },
  {
    id: 'm109-paladin',
    name: 'M109A7 Paladin',
    type: 'Artillery',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The M109 is an American 155 mm turreted self-propelled howitzer, first introduced in the early 1960s.',
    specs: {
      weight: '35 metric tons',
      speed: '61 km/h',
      armament: ['155 mm M126 Howitzer', '.50 caliber M2 machine gun'],
      crew: 4,
      range: '322 km'
    }
  },
  {
    id: 'tos-1a',
    name: 'TOS-1A Solntsepyok',
    type: 'Artillery',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1590424753858-394a1278090d?q=80&w=1974&auto=format&fit=crop',
    description: 'The TOS-1 is a Soviet 220 mm 24-barrel multiple rocket launcher and thermobaric weapon mounted on a T-72 tank chassis.',
    specs: {
      weight: '46.5 metric tons',
      speed: '60 km/h',
      armament: ['24-barrel rocket launcher', 'Thermobaric rockets'],
      crew: 3,
      range: '550 km'
    }
  },
  {
    id: 't-90m',
    name: 'T-90M Proryv',
    type: 'Tank',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1590424753858-394a1278090d?q=80&w=1974&auto=format&fit=crop',
    description: 'The T-90M is the latest modernization of the T-90 main battle tank, featuring improved armor, a new turret, and updated fire control systems.',
    specs: {
      weight: '48 metric tons',
      speed: '60 km/h',
      armament: ['125 mm 2A46M-5 smoothbore gun', '12.7 mm NSVT machine gun'],
      armor: 'Relikt ERA, composite armor',
      crew: 3,
      range: '550 km'
    }
  },
  {
    id: 'leclerc',
    name: 'Leclerc',
    type: 'Tank',
    country: 'France',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1566633806327-68e152aaf26d?q=80&w=2000&auto=format&fit=crop',
    description: 'The Leclerc is a main battle tank built by Nexter Systems of France. It was named in honor of General Philippe Leclerc de Hauteclocque.',
    specs: {
      weight: '56 metric tons',
      speed: '72 km/h',
      armament: ['120 mm F1 smoothbore gun', '12.7 mm coaxial machine gun'],
      armor: 'Modular composite armor',
      crew: 3,
      range: '550 km'
    }
  },
  {
    id: 'type-10',
    name: 'Type 10',
    type: 'Tank',
    country: 'Japan',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1576400883215-7083980b1297?q=80&w=2012&auto=format&fit=crop',
    description: 'The Type 10 is a next-generation main battle tank of the Japan Ground Self-Defense Force, designed to be smaller and lighter than its predecessor.',
    specs: {
      weight: '44 metric tons',
      speed: '70 km/h',
      armament: ['120 mm smoothbore gun', '12.7 mm M2HB machine gun'],
      armor: 'Nano-crystal steel, ceramic composite',
      crew: 3,
      range: '480 km'
    }
  },
  {
    id: 'cv90',
    name: 'CV90',
    type: 'APC',
    country: 'Sweden',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The Combat Vehicle 90 (CV90) is a family of Swedish tracked armored combat vehicles designed by FMV, Hägglunds and Bofors.',
    specs: {
      weight: '23–35 metric tons',
      speed: '70 km/h',
      armament: ['40 mm Bofors autocannon', '7.62 mm machine gun'],
      crew: 3,
      range: '320 km'
    }
  },
  {
    id: 'boxer',
    name: 'Boxer MIV',
    type: 'APC',
    country: 'Germany',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The Boxer is a multirole armored fighting vehicle designed by an international consortium to accomplish a number of operations through the use of installable mission modules.',
    specs: {
      weight: '36.5 metric tons',
      speed: '103 km/h',
      armament: ['40 mm automatic grenade launcher', '12.7 mm machine gun'],
      crew: 3,
      range: '1050 km'
    }
  },
  {
    id: 'f35-lightning',
    name: 'F-35 Lightning II',
    type: 'Aircraft',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1567259565705-05249f3d9701?q=80&w=2070&auto=format&fit=crop',
    description: 'The Lockheed Martin F-35 Lightning II is an American family of single-seat, single-engine, all-weather stealth multirole combat aircraft.',
    specs: {
      weight: '13,290 kg (empty)',
      speed: 'Mach 1.6',
      armament: ['25 mm GAU-22/A cannon', 'Internal weapons bay'],
      crew: 1,
      range: '2,800 km'
    }
  },
  {
    id: 'rafale',
    name: 'Dassault Rafale',
    type: 'Aircraft',
    country: 'France',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop',
    description: 'The Dassault Rafale is a French twin-engine, canard delta wing, multirole fighter aircraft designed and built by Dassault Aviation.',
    specs: {
      weight: '10,300 kg (empty)',
      speed: 'Mach 1.8',
      armament: ['30 mm GIAT 30/M791 cannon', 'MICA air-to-air missiles'],
      crew: 1,
      range: '3,700 km'
    }
  },
  {
    id: 'zumwalt-class',
    name: 'Zumwalt-class Destroyer',
    type: 'Naval',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop',
    description: 'The Zumwalt-class destroyer is a class of three United States Navy guided-missile destroyers designed as multi-mission stealth ships.',
    specs: {
      weight: '15,907 long tons',
      speed: '30 knots',
      armament: ['80 VLS cells', '2 x 155 mm Advanced Gun System'],
      crew: 147,
      range: 'Unlimited (Nuclear)'
    }
  },
  {
    id: 'type-45',
    name: 'Type 45 Destroyer',
    type: 'Naval',
    country: 'UK',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1516939884455-1445c8652f83?q=80&w=1974&auto=format&fit=crop',
    description: 'The Type 45 destroyer, also known as the D or Daring class, is a class of six guided-missile destroyers built for the United Kingdom\'s Royal Navy.',
    specs: {
      weight: '8,000–8,500 tons',
      speed: '30+ knots',
      armament: ['48-cell Sea Viper VLS', '114 mm Mk 8 naval gun'],
      crew: 191,
      range: '13,000 km'
    }
  },
  {
    id: 'm270-mlrs',
    name: 'M270 MLRS',
    type: 'Artillery',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The M270 Multiple Launch Rocket System is an American armored, self-propelled, multiple rocket launcher.',
    specs: {
      weight: '25 metric tons',
      speed: '64 km/h',
      armament: ['12-tube rocket launcher', 'GMLRS rockets', 'ATACMS missiles'],
      crew: 3,
      range: '480 km'
    }
  },
  {
    id: 'archer-artillery',
    name: 'Archer Artillery System',
    type: 'Artillery',
    country: 'Sweden',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The Archer Artillery System is a Swedish self-propelled guns system developed by Bofors (now BAE Systems Bofors).',
    specs: {
      weight: '30 metric tons',
      speed: '70 km/h',
      armament: ['155 mm FH 77 BW L52 howitzer', 'Remote weapon station'],
      crew: 3,
      range: '500 km'
    }
  },
  {
    id: 'b2-spirit',
    name: 'B-2 Spirit',
    type: 'Aircraft',
    country: 'USA',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1567259565705-05249f3d9701?q=80&w=2070&auto=format&fit=crop',
    description: 'The Northrop B-2 Spirit, also known as the Stealth Bomber, is an American heavy strategic bomber, featuring low-observable stealth technology.',
    specs: {
      weight: '71,700 kg (empty)',
      speed: 'Mach 0.95',
      armament: ['18,000 kg of ordnance', 'Nuclear/Conventional bombs'],
      crew: 2,
      range: '11,100 km'
    }
  },
  {
    id: 't-72b3',
    name: 'T-72B3',
    type: 'Tank',
    country: 'Russia',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1590424753858-394a1278090d?q=80&w=1974&auto=format&fit=crop',
    description: 'The T-72B3 is a Russian main battle tank, a modernization of the T-72B, featuring improved fire control and mobility.',
    specs: {
      weight: '46 metric tons',
      speed: '60 km/h',
      armament: ['125 mm 2A46M-5 smoothbore gun', '12.7 mm NSVT machine gun'],
      armor: 'Kontakt-5 ERA',
      crew: 3,
      range: '500 km'
    }
  },
  {
    id: 'marder',
    name: 'Marder IFV',
    type: 'APC',
    country: 'Germany',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1599059813005-11265ba4b4ce?q=80&w=2070&auto=format&fit=crop',
    description: 'The Marder is a German infantry fighting vehicle operated by the German Army as the main weapon of the Panzergrenadiere.',
    specs: {
      weight: '28.5 metric tons',
      speed: '75 km/h',
      armament: ['20 mm Rheinmetall MK 20 Rh 202', 'MILAN anti-tank missiles'],
      crew: 3,
      range: '520 km'
    }
  },
  {
    id: 'panavia-tornado',
    name: 'Panavia Tornado',
    type: 'Aircraft',
    country: 'EU',
    era: 'Modern',
    image: 'https://images.unsplash.com/photo-1517976487492-5750f3195933?q=80&w=2070&auto=format&fit=crop',
    description: 'The Panavia Tornado is a family of twin-engine, variable-sweep wing multirole combat aircraft, jointly developed by the UK, Germany and Italy.',
    specs: {
      weight: '13,890 kg (empty)',
      speed: 'Mach 2.2',
      armament: ['27 mm Mauser BK-27 cannon', 'Storm Shadow missiles'],
      crew: 2,
      range: '1,390 km'
    }
  }
];
