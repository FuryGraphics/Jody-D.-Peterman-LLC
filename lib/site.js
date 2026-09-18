// -----------------------------------------------------------------------------
// Central site data for Jody D. Peterman, LLC
// Firm facts (address, phone, fax, credentials, bio, honors) are taken from the
// firm's prior website, valdostainjurylawyer.com.
// NOTE: `SITE_URL`, `firm.email` and office hours are still unverified — confirm
// with the client before launch.
// -----------------------------------------------------------------------------

export const SITE_URL = "https://www.petermanlawllc.com";

export const firm = {
  name: "Jody D. Peterman, LLC",
  shortName: "Peterman Law",
  tagline: "Valdosta Personal Injury & Serious Felony Trial Attorney",
  headline: "A Fierce Litigator Securing Outstanding Results For Clients Since 1995",
  yearsExperience: "30+",
  juryTrials: "200+",
  practicingSince: 1995,
  phone: "(229) 588-2608",
  phoneHref: "tel:+12295882608",
  fax: "(229) 469-6735",
  email: "intake@petermanlawllc.com",
  emailHref: "mailto:intake@petermanlawllc.com",
  logoText: "Jody D. Peterman",
  logoSub: "LLC · Trial Attorney",
};

export const offices = [
  {
    id: "valdosta",
    label: "Valdosta Office",
    primary: true,
    street: "304 N. Ashley Street",
    city: "Valdosta",
    state: "Georgia",
    zip: "31601",
    phone: "(229) 588-2608",
    phoneHref: "tel:+12295882608",
    fax: "(229) 469-6735",
    hours: "Mon–Fri 9:00am – 5:00pm",
    // Google Maps embed query
    mapQuery: "304 N Ashley St, Valdosta, GA 31601",
    lat: 30.8336,
    lng: -83.2789,
  },
];

// Cities served, shown in the sub-bar and footer. `slug` present => has own page.
export const servedCities = [
  { name: "Valdosta", slug: "valdosta" },
  { name: "Adel", slug: "adel" },
  { name: "Tifton", slug: "tifton" },
  { name: "Albany", slug: "albany" },
  { name: "Cordele", slug: "cordele" },
  { name: "Douglas", slug: null },
  { name: "Moultrie", slug: null },
  { name: "Thomasville", slug: null },
];

export const trustBadges = [
  "2027 Super Lawyers®",
  "AV-Rated by Martindale-Hubbell®",
  "Top 100 Georgia Trial Lawyers",
  "Multi-Million Dollar Advocates Forum",
  "200+ Jury Trials",
  "Practicing Since 1995",
];

// Super Lawyers® recognition — all three attorneys selected for 2027.
// `badge` points to the official "Rated by Super Lawyers" graphic saved in /public.
export const superLawyers = {
  year: "2027",
  recipients: [
    { name: "Jody D. Peterman", badge: "/sl-2027-peterman.webp" },
    { name: "Stephen D. Delk", badge: "/sl-2027-delk.png" },
    { name: 'Thomas Michael "Mike" Burke Jr.', badge: "/sl-2027-burke.png" },
  ],
};

// Attorney biography — from the firm's prior site.
export const attorneyBio = [
  "Jody Peterman is the owner of Jody D. Peterman, LLC and his practice focuses on representing individuals who have been injured, harmed, or suffered a loss through the wrongdoing or negligence of another.",
  "Unlike many attorneys who handle a few cases each year in the area of personal injury or work for a television advertising mill, Jody is an experienced trial attorney who has practiced in the personal injury field in Georgia for nearly 30 years. He represents catastrophically injured victims and families who have lost a loved one, as well as individuals injured in motor vehicle collisions, tractor-trailer crashes, motorcycle accidents, medical malpractice, defective products, and other injury cases involving the wrongful death of a loved one. Jody only takes on serious accident cases with the intent of reaching the best possible outcome for his clients. Jody has tried more than 200 jury trials in his career, which makes him one of the most experienced trial lawyers in South Georgia.",
  "Jody's practice also encompasses representing individuals charged with serious felony crimes, where the individual is innocent and wrongfully accused by the government.",
  "In 1995, Jody graduated from Mercer University Law School. In law school, Jody received the highest grade in his Tort's II class (Americus Jurisprudence award for studying personal injury law) and also received the Milton Barwick Pleading and Practice award for being the best trial attorney in a trial practice class with Judge J. Taylor Phillips.",
  "Jody has lived in South Georgia his entire life. He has four children. His wife Mary teaches special ed in the Lowndes School System. Jody's hobbies include attending his children's sporting events, cooking, reading, and watching the Atlanta Braves and the New England Patriots.",
];

export const credentials = {
  education: [
    "Mercer University, Walter F. George School of Law, Macon, Georgia — J.D., 1995",
    "Valdosta State College — B.S.C.J., 1990",
  ],
  barAdmissions: [
    "Georgia, 1995",
    "Supreme Court of Georgia",
    "Court of Appeals of the State of Georgia",
    "U.S. District Court, Middle District of Georgia",
    "U.S. District Court, Northern District of Georgia",
    "U.S. District Court, Southern District of Georgia",
    "U.S. Court of Appeals, Eleventh Circuit",
    "Supreme Court of the United States",
  ],
  honors: [
    "Selected to the 2027 Super Lawyers® list",
    "AV-Rated by Martindale-Hubbell®",
    "Top 100 Georgia Trial Lawyers — National Trial Lawyers Association",
    "Multi-Million Dollar Advocates Forum",
    "10/10 Avvo Rating",
    "Named an Elite Lawyer",
  ],
  associations: [
    "State Bar of Georgia",
    "Valdosta Bar Association",
    "Georgia Trial Lawyers Association",
    "Georgia Association of Criminal Defense Lawyers",
  ],
};

// Partner attorneys — bios, credentials and Super Lawyers honors taken from the
// firm's site (valdostainjurylawyer.com). No headshots are available yet, so the
// About page renders an initials monogram until the firm supplies photos.
export const partners = [
  {
    id: "stephen-delk",
    name: "Stephen D. Delk",
    title: "Partner",
    focus: "Trucking & Commercial Vehicle Accidents",
    image: "/delk-headshot.png",
    badge: "/sl-2027-delk.png",
    bio: [
      "For 17 years, Stephen Delk sat on the other side of the table — defending some of the nation's largest trucking carriers and insurance companies against catastrophic injury claims. As a litigator at Hall Booth Smith (the largest insurance defense firm in Georgia) from 2011 to 2025, he built his career inside the trucking industry's legal playbook: how carriers investigate crashes, how insurers evaluate claims, and how their defense teams work to minimize payouts before a victim's attorney ever gets involved.",
      "Today, Stephen brings that insider knowledge to Georgia families and accident victims — this time, working for them. He knows what a trucking company's defense team will argue before they argue it, because he used to be the one making those arguments. That experience shapes every case he builds: from preserving black-box data and driver logs before they disappear, to anticipating the liability defenses carriers rely on most.",
      "Stephen's practice focuses on serious trucking and commercial vehicle accidents throughout South Georgia, along with nursing home neglect, medical malpractice, slip and falls, and other vehicle accident cases. A native of Tifton, he earned his undergraduate degree magna cum laude from Valdosta State University, where he was a student-athlete on the football team, and received his Juris Doctor from Mercer University's Walter F. George School of Law. He has served as both President and Vice-President of the Tifton Judicial Circuit Bar Association.",
    ],
    education: [
      "Mercer University, Walter F. George School of Law — J.D.",
      "Valdosta State University — B.S., magna cum laude",
    ],
    barAdmissions: [
      "Georgia, 2008",
      "Supreme Court of Georgia",
      "Georgia Court of Appeals",
      "U.S. District Court, Middle & Southern Districts of Georgia",
    ],
    honors: [
      "Selected to the 2027 Super Lawyers® list",
      "Super Lawyers® Rising Star, 2023",
      "AV Preeminent Rated — Martindale-Hubbell® (10+ years)",
    ],
    practiceAreas: [
      "Trucking & Auto Negligence",
      "Premises Liability",
      "Medical Malpractice",
      "Nursing Home Negligence",
    ],
  },
  {
    id: "mike-burke",
    name: 'Thomas Michael "Mike" Burke Jr.',
    title: "Partner",
    focus: "Medical Malpractice & Serious Injury",
    image: "/burke-headshot.png",
    badge: "/sl-2027-burke.png",
    bio: [
      "For 25 years, Mike Burke represented the other side. As a partner at Georgia's largest insurance defense law firm, he built his career defending two major South Georgia health systems in medical malpractice matters, along with insurance companies facing automobile and premises liability claims.",
      "That experience now works for the people who need it most. Mike represents individuals and families across South Georgia dealing with serious injuries — including medical malpractice, nursing home neglect, automobile accidents, and premises liability cases — bringing firsthand knowledge of how hospitals, health systems, and insurers build their defense from the inside.",
      "Mike earned his undergraduate degree from Florida State University in 1993 and his Juris Doctor, cum laude, from Thomas M. Cooley Law School in 1998, where he also served on the Law Journal. After law school, he clerked for the Honorable John D. \"Dickey\" Crosby and the Honorable Gary McCorvey of the Tift Judicial Circuit before moving into insurance defense practice. He has lived in the Tifton–Valdosta area his whole adult life and represents clients throughout Tifton, Valdosta, and the surrounding South Georgia communities.",
    ],
    education: [
      "Thomas M. Cooley Law School — J.D., cum laude, 1998",
      "Florida State University — B.S., 1993",
    ],
    barAdmissions: [
      "Georgia, 1998",
      "All state and federal courts in Georgia",
    ],
    honors: ["Selected to the 2027 Super Lawyers® list"],
    practiceAreas: [
      "Medical Malpractice",
      "Automobile & Trucking Negligence",
      "Premises Liability",
      "Nursing Home Negligence",
    ],
  },
];

// Press mentions — headlines carried over from the prior site.
export const pressMentions = [
  "Jody D. Peterman Named an Elite Lawyer",
  "Man sentenced in vehicular homicide case — Valdosta Daily Times",
  "Peterman quoted in The New York Times — “Georgia Students Subjected to Intrusive Searches Will Share $3 Million”",
  "Mistrial in Murder Case",
  "Attorney Jody Peterman Named to Multi-Million Dollar Advocates Forum",
];

export const heroBadges = [
  { label: "2027 Super Lawyers®", icon: "scale" },
  { label: "4.9★ Google Rating", icon: "star" },
  { label: "200+ Jury Trials", icon: "shield" },
  { label: "Free Case Evaluation", icon: "chat" },
];

// Top-level practice areas. Sub-areas (below) inherit their parent's icon and
// image unless they define their own.
const parentAreas = [
  {
    slug: "car-accidents",
    group: "Personal Injury",
    title: "Car Accidents",
    short: "Car Accidents",
    icon: "car",
    blurb:
      "Full-value recovery for medical bills, lost wages, and pain after a South Georgia collision.",
    image:
      "/images/u-1503376780353-1200.jpg",
    intro:
      "A car crash can upend your health, your finances, and your family in an instant. Jody D. Peterman has spent more than three decades helping injured Georgians hold negligent drivers and their insurers accountable — and get the full compensation the law allows.",
    handles: [
      "Rear-end and intersection collisions",
      "Distracted and texting-while-driving crashes",
      "Drunk and impaired driving wrecks",
      "Uninsured and underinsured motorist claims",
      "Hit-and-run investigations",
      "Serious and catastrophic injury cases",
    ],
    faqs: [
      {
        q: "What should I do first after a car accident in Georgia?",
        a: "Get medical care, report the crash to police, photograph the scene, and avoid giving a recorded statement to the other driver's insurer until you have spoken with an attorney.",
      },
      {
        q: "How long do I have to file a car accident claim?",
        a: "Georgia's statute of limitations for most personal injury claims is two years from the date of the crash. Some exceptions shorten that window, so call promptly.",
      },
      {
        q: "What if the other driver had no insurance?",
        a: "You may still recover through your own uninsured/underinsured motorist coverage. We review every available policy to maximize your recovery.",
      },
    ],
  },
  {
    slug: "truck-accidents",
    group: "Personal Injury",
    title: "Truck Accidents",
    short: "Truck Accidents",
    icon: "truck",
    blurb:
      "Commercial trucking cases demand fast evidence preservation — we move immediately.",
    image:
      "/images/u-1601584115197-1200.jpg",
    intro:
      "In the trucking industry, driver negligence and poor vehicle maintenance have the potential for devastating consequences. Because the stakes are so high, the government tightly regulates the industry with extensive state and federal laws. If you or a loved one suffers injuries due to trucking negligence, you may be able to hold the negligent parties responsible for your medical expenses, lost income, rehabilitative equipment, and pain and suffering. We investigate quickly to preserve black-box data, logs, and maintenance records before they disappear.",
    handles: [
      "18-wheeler and tractor-trailer collisions",
      "Commercial and delivery vehicle accidents",
      "Farming equipment accidents",
      "Driver fatigue and hours-of-service violations",
      "Improperly loaded or overweight cargo",
      "Federal (FMCSA) regulation violations",
    ],
    faqs: [
      {
        q: "Why are truck accident claims different?",
        a: "Trucking companies and their insurers begin building a defense within hours. Federal regulations, electronic logs, and multiple liable parties make these cases far more complex than a typical car wreck.",
      },
      {
        q: "Who can be held liable in a truck crash?",
        a: "Potentially the driver, the trucking company, a maintenance contractor, the cargo loader, or a parts manufacturer. We identify every responsible party and every applicable policy.",
      },
    ],
  },
  {
    slug: "motorcycle-accidents",
    group: "Personal Injury",
    title: "Motorcycle Accidents",
    short: "Motorcycle Accidents",
    icon: "motorcycle",
    blurb:
      "We fight the bias riders face and pursue full recovery for serious injuries.",
    image:
      "/images/u-1558981403-1200.jpg",
    intro:
      "Motorcyclists are far more likely to suffer catastrophic injuries in a crash — and far more likely to be unfairly blamed for it. We push back against insurer bias and build cases that reflect the true severity of your injuries.",
    handles: [
      "Left-turn and lane-change collisions",
      "Road-hazard and defective-roadway crashes",
      "Catastrophic and traumatic brain injuries",
      "Helmet-law and comparative-fault disputes",
      "Uninsured motorist motorcycle claims",
    ],
    faqs: [
      {
        q: "Can I recover if I wasn't wearing a helmet?",
        a: "Georgia law requires helmets, but a violation does not automatically bar recovery. We limit the impact of comparative fault arguments and focus on the other driver's negligence.",
      },
      {
        q: "Insurers say the crash was my fault. Now what?",
        a: "Riders are frequently blamed unfairly. We reconstruct the crash with experts and evidence to establish what actually happened.",
      },
    ],
  },
  {
    slug: "wrongful-death",
    group: "Wrongful Death & Criminal Law",
    title: "Wrongful Death",
    short: "Wrongful Death",
    icon: "heart",
    blurb:
      "Compassionate, determined representation for families after a preventable loss.",
    image:
      "/images/u-1518156677180-1200.jpg",
    intro:
      "The unexpected death of a loved one can trigger a full range of trauma and hardship for the grieving family. When someone else's negligent actions are the cause of that grief, Georgia's wrongful death laws provide a way of seeking justice and financial compensation for your losses. You may generally file a wrongful death lawsuit up to two years after the death of your family member, though exceptions can apply — so it is best to speak with us as soon as you are able.",
    handles: [
      "Fatal car, truck, and motorcycle crashes",
      "Workplace and industrial fatalities",
      "Nursing home neglect deaths",
      "Full-value-of-life recovery under Georgia law",
      "Claims on behalf of surviving spouses and children",
    ],
    faqs: [
      {
        q: "Who can file a wrongful death claim in Georgia?",
        a: "Generally the surviving spouse, children, or parents — or the estate's representative. We help families determine the proper claimant and protect their rights.",
      },
      {
        q: "What is the 'full value of the life' in Georgia?",
        a: "Georgia allows recovery for the full value of the deceased's life, measured from the perspective of the deceased, including both economic and intangible worth.",
      },
    ],
  },
  {
    slug: "slip-and-fall",
    group: "Personal Injury",
    title: "Slip & Fall",
    short: "Slip & Fall",
    icon: "warning",
    blurb:
      "Premises liability claims against negligent property owners and businesses.",
    image:
      "/images/u-1590247813693-1200.jpg",
    intro:
      "Property owners must keep their premises reasonably safe. When they fail — a wet floor, a broken stair, poor lighting, an unmarked hazard — and you are hurt, you may have a premises liability claim.",
    handles: [
      "Wet floors and spill hazards",
      "Broken stairs, railings, and walkways",
      "Inadequate lighting and security",
      "Grocery, retail, and restaurant falls",
      "Apartment and rental-property injuries",
    ],
    faqs: [
      {
        q: "Do I have a case if I fell in a store?",
        a: "Possibly. You generally must show the owner knew — or should have known — about the hazard and failed to fix or warn about it. We investigate to establish that knowledge.",
      },
      {
        q: "What if I was partly at fault?",
        a: "Georgia follows modified comparative negligence. You can still recover as long as you were less than 50% at fault, though your recovery is reduced by your share.",
      },
    ],
  },
  {
    slug: "criminal-defense",
    group: "Wrongful Death & Criminal Law",
    title: "Criminal Defense",
    short: "Criminal Defense",
    icon: "scale",
    blurb:
      "Serious felony defense — murder, sex crimes, drug trafficking and overdose-related charges.",
    image:
      "/images/u-1589829545856-1200.jpg",
    intro:
      "At Jody D. Peterman, LLC, we offer assertive, strategic representation for clients contending with serious felony charges, including murder, sex crimes and drug trafficking. A felony conviction will stay on your record and could haunt you for many years to come. The penalties are steep and may include high fines, jail time, asset forfeiture, loss of gun ownership rights and more. A felony conviction can jeopardize your relationships, your professional reputation, and your ability to freely choose where you want to live and work.",
    handles: [
      "Murder and homicide charges",
      "Sex crimes",
      "Drug crimes and drug trafficking charges",
      "Overdose-related charges",
      "Serious felonies and asset forfeiture",
      "Federal and state grand jury investigations",
    ],
    faqs: [
      {
        q: "I'm under investigation but haven't been charged. Should I call a lawyer?",
        a: "Yes. If you are under investigation or facing a felony charge in Georgia, you need an experienced criminal defense attorney on your side before you speak with investigators. Call our Valdosta office right away to schedule a consultation.",
      },
      {
        q: "Do you actually try cases?",
        a: "We do. Jody Peterman has tried more than 200 jury trials and prepares every case for trial — a readiness that has produced the reduction and dismissal of serious felony charges.",
      },
    ],
  },
  {
    slug: "catastrophic-injuries",
    group: "Catastrophic & Medical",
    title: "Catastrophic Injuries",
    short: "Catastrophic Injuries",
    icon: "shield",
    blurb:
      "Traumatic brain injuries, spinal cord damage, burns and other life-altering harm.",
    image:
      "/images/u-1538108149393-1200.jpg",
    intro:
      "Crashes involving large commercial trucks and other acts of serious negligence are often permanently life-changing, and all too often result in traumatic brain injuries, severed spinal cords, crushed bones, burns, and loss of limbs or eyesight. We handle only a select number of these claims, so our clients get the focus and personal attention these complex cases require.",
    handles: [
      "Traumatic brain injuries",
      "Spinal cord injuries and paralysis",
      "Severe burn injuries",
      "Amputation and loss of eyesight",
      "Lifetime medical care and rehabilitative equipment claims",
      "Lost earning capacity and future care planning",
    ],
    faqs: [
      {
        q: "What makes a catastrophic injury case different?",
        a: "The damages extend across a lifetime — future surgeries, in-home care, adaptive equipment, and lost earning capacity. Proving that value takes medical and economic experts, which is why these cases must be built for trial from the start.",
      },
      {
        q: "How many cases do you take at a time?",
        a: "We deliberately handle a limited number of serious injury claims so each client receives direct attention from the attorney handling the case.",
      },
    ],
  },
  {
    slug: "nursing-home-negligence",
    group: "Catastrophic & Medical",
    title: "Nursing Home Negligence",
    short: "Nursing Home Neglect",
    icon: "heart",
    blurb:
      "Bedsores, neglect, and wrongful death in Georgia nursing homes and care facilities.",
    image:
      "/images/u-1576765608535-1200.jpg",
    intro:
      "Families place their most vulnerable loved ones in the care of nursing homes and assisted living facilities and trust that they will be kept safe. When understaffing and neglect lead to pressure sores, infections, falls, or death, we hold the facility and its operators accountable.",
    handles: [
      "Bedsores and pressure ulcers",
      "Neglect, dehydration, and malnutrition",
      "Unexplained falls and fractures",
      "Medication errors and untreated infections",
      "Wrongful death in nursing homes",
      "Understaffing and negligent hiring claims",
    ],
    faqs: [
      {
        q: "Are bedsores really a sign of neglect?",
        a: "Advanced pressure sores are largely preventable with proper repositioning and hygiene. Their presence is frequently the first visible sign that a facility is understaffed or not following its own care plan.",
      },
      {
        q: "Can I bring a claim if my loved one has died?",
        a: "Yes. Georgia's wrongful death laws allow the family to pursue both the full value of the life lost and the estate's claim for medical expenses and pain and suffering before death.",
      },
    ],
  },
  {
    slug: "medical-malpractice",
    group: "Catastrophic & Medical",
    title: "Medical Malpractice",
    short: "Medical Malpractice",
    icon: "medical",
    blurb:
      "Accountability when a healthcare provider's negligence causes serious harm.",
    image:
      "/images/u-1516549655169-1200.jpg",
    intro:
      "When a doctor, nurse, or hospital departs from the accepted standard of care and a patient is harmed, the consequences can be devastating. These cases are complex and expert-driven — exactly the kind of fight we prepare for.",
    handles: [
      "Surgical and anesthesia errors",
      "Misdiagnosis and delayed diagnosis",
      "Medication and prescription errors",
      "Birth injuries",
      "Hospital and nursing negligence",
    ],
    faqs: [
      {
        q: "How do I know if I have a malpractice case?",
        a: "You must generally show the provider breached the standard of care and that breach caused your injury. We consult qualified medical experts to evaluate your case at no upfront cost.",
      },
      {
        q: "Is there a deadline for malpractice claims?",
        a: "Georgia generally requires suit within two years of the injury, with an overall five-year limit. Deadlines are strict — contact us promptly.",
      },
    ],
  },
];

// -----------------------------------------------------------------------------
// Sub-practice areas — every focused page the firm published on its prior site,
// grouped under the top-level area it belongs to.
// -----------------------------------------------------------------------------
const subAreas = [
  // --- Car accidents ---------------------------------------------------------
  {
    parent: "car-accidents",
    slug: "distracted-driving-accidents",
    title: "Distracted Driving Accidents",
    short: "Distracted Driving",
    blurb:
      "Texting, dialing and inattentive drivers cause devastating, entirely preventable crashes.",
    intro:
      "A driver who looks down at a phone for five seconds at highway speed travels the length of a football field blind. Georgia's hands-free law makes that conduct illegal, and it makes the at-fault driver's negligence far easier to prove — if the evidence is preserved quickly.",
    handles: [
      "Texting and phone-use collisions",
      "Hands-free law (O.C.G.A. § 40-6-241) violations",
      "Phone record and app-data investigations",
      "Commercial drivers distracted on the job",
      "In-vehicle infotainment and GPS distraction",
      "Eating, grooming and other inattentive driving",
    ],
    faqs: [
      {
        q: "How do you prove the other driver was on their phone?",
        a: "Through cell phone records, carrier data, vehicle infotainment downloads, witness statements and, when necessary, a court order. These records are only available for a limited time, which is why early legal help matters.",
      },
      {
        q: "Does a hands-free ticket help my claim?",
        a: "It can. A citation for violating Georgia's hands-free law is strong evidence of negligence, though we never rely on it alone.",
      },
    ],
  },

  // --- Truck accidents -------------------------------------------------------
  {
    parent: "truck-accidents",
    slug: "commercial-vehicle-accidents",
    title: "Commercial Vehicle Accidents",
    short: "Commercial Vehicles",
    blurb:
      "Company trucks, vans and fleet vehicles bring corporate insurers and corporate lawyers.",
    intro:
      "Any vehicle operated for business — a work van, a box truck, a company pickup — carries commercial insurance and a company with an interest in limiting what it pays. We identify every policy and every responsible party, including the employer who put an unsafe driver on the road.",
    handles: [
      "Work vans, box trucks and fleet vehicles",
      "Employer liability and negligent hiring",
      "Negligent supervision and training claims",
      "Commercial insurance policy investigations",
      "Vehicle maintenance and inspection failures",
      "Company driving-log and telematics evidence",
    ],
    faqs: [
      {
        q: "Can I sue the company, not just the driver?",
        a: "Usually yes. An employer is generally responsible for the negligence of an employee acting within the scope of employment, and may be independently liable for negligent hiring, training or maintenance.",
      },
      {
        q: "Why do these claims pay more than car wreck claims?",
        a: "Commercial policies carry far higher limits than personal auto policies — which is also why commercial insurers fight harder.",
      },
    ],
  },
  {
    parent: "truck-accidents",
    slug: "delivery-vehicle-accidents",
    title: "Delivery Vehicle Accidents",
    short: "Delivery Vehicles",
    blurb:
      "Route pressure and tight deadlines put rushed delivery drivers on residential streets.",
    intro:
      "The growth of same-day delivery has filled Georgia neighborhoods with drivers working against a clock. Speeding between stops, backing without a spotter, blocking sightlines and double-parking cause serious injuries — and the delivery company, its contractor and its insurer will each try to point at the others.",
    handles: [
      "Package and courier delivery collisions",
      "Pedestrian and cyclist strikes on delivery routes",
      "Backing and blind-spot accidents",
      "Independent contractor vs. employee disputes",
      "Route data, GPS and delivery-app evidence",
      "Food delivery and rideshare-driver crashes",
    ],
    faqs: [
      {
        q: "The driver was an independent contractor. Do I still have a claim?",
        a: "Very often, yes. Contractor status does not automatically shield the company, and many delivery contractors carry their own commercial coverage. We look at the control the company exercised over the driver.",
      },
      {
        q: "How fast does route data disappear?",
        a: "GPS, telematics and delivery-app records are routinely overwritten within weeks. We send preservation demands immediately.",
      },
    ],
  },
  {
    parent: "truck-accidents",
    slug: "farming-equipment-accidents",
    title: "Farming Equipment Accidents",
    short: "Farm Equipment",
    blurb:
      "South Georgia's farm roads put slow, oversized equipment in the path of highway traffic.",
    intro:
      "Agriculture is the backbone of South Georgia, and during planting and harvest seasons combines, tractors and loaded trailers share two-lane highways with traffic moving three times their speed. When lighting, marking, escort or maintenance rules are ignored, the result is often catastrophic.",
    handles: [
      "Tractor, combine and harvester collisions",
      "Missing slow-moving-vehicle placards and lighting",
      "Unsecured or overloaded farm trailers",
      "Grain truck and agricultural hauler crashes",
      "Defective and poorly maintained equipment",
      "On-farm and worker injury claims",
    ],
    faqs: [
      {
        q: "Is farm equipment exempt from safety rules?",
        a: "Agricultural operations receive some exemptions from federal motor carrier rules, but not from the basic duty to operate safely, mark and light equipment properly and keep it maintained.",
      },
      {
        q: "Who is responsible — the driver or the farm?",
        a: "Frequently both, along with an equipment owner, lessee or maintenance provider. We trace ownership and insurance for every piece of equipment involved.",
      },
    ],
  },

  // --- Slip and fall ---------------------------------------------------------
  {
    parent: "slip-and-fall",
    slug: "premises-liability",
    title: "Premises Liability",
    short: "Premises Liability",
    blurb:
      "Owners who invite the public onto their property owe that public a safe property.",
    intro:
      "Georgia law requires owners and occupiers of land to exercise ordinary care to keep their premises safe for invitees. When a hazard is ignored, hidden or left unwarned — and a visitor is hurt — the owner may be liable for the resulting injuries.",
    handles: [
      "Unsafe stairs, railings and walkways",
      "Inadequate lighting and negligent security",
      "Assaults on poorly secured property",
      "Swimming pool and drowning accidents",
      "Falling merchandise and structural failures",
      "Apartment complex and rental property hazards",
    ],
    faqs: [
      {
        q: "What does 'superior knowledge' mean in a Georgia premises case?",
        a: "An owner is generally liable only if their knowledge of the hazard was superior to yours. Proving what the owner knew — through inspection logs, prior complaints and video — is the heart of most premises cases.",
      },
      {
        q: "Can I sue for an assault that happened on someone's property?",
        a: "Possibly. If prior crime made the attack foreseeable and the owner failed to provide reasonable security, a negligent security claim may exist.",
      },
    ],
  },

  // --- Catastrophic injuries -------------------------------------------------
  {
    parent: "catastrophic-injuries",
    slug: "traumatic-brain-injuries",
    title: "Traumatic Brain Injuries",
    short: "Brain Injuries",
    blurb:
      "TBIs change personality, memory and earning power — often invisibly to an insurer.",
    intro:
      "A traumatic brain injury does not have to involve a skull fracture or a coma to permanently alter a life. Memory loss, personality change, headaches, light sensitivity and an inability to return to work are common — and are routinely dismissed by insurers because they do not show up on a standard scan.",
    handles: [
      "Concussion and post-concussive syndrome",
      "Closed-head and diffuse axonal injuries",
      "Skull fractures and brain bleeds",
      "Cognitive, memory and personality changes",
      "Neuropsychological testing and expert proof",
      "Lifetime care and lost earning capacity claims",
    ],
    faqs: [
      {
        q: "My scans came back normal. Do I still have a case?",
        a: "Yes. Many serious brain injuries are invisible on CT and standard MRI. Neuropsychological testing, treating-physician testimony and evidence from family and coworkers establish the injury.",
      },
      {
        q: "How soon should symptoms be documented?",
        a: "Immediately. Gaps between the crash and the first report of cognitive symptoms are the first thing a defense lawyer will attack.",
      },
    ],
  },
  {
    parent: "catastrophic-injuries",
    slug: "spinal-cord-injuries",
    title: "Spinal Cord Injuries",
    short: "Spinal Cord Injuries",
    blurb:
      "Paralysis and chronic spinal damage carry lifetime medical and care costs.",
    intro:
      "Damage to the spinal cord is rarely reversible. Whether the result is complete paralysis or chronic pain and limited mobility, the cost of a lifetime of care, equipment, home modification and lost income runs into the millions — and must be proven with expert precision.",
    handles: [
      "Paraplegia and quadriplegia",
      "Incomplete spinal cord injuries",
      "Herniated discs and vertebral fractures",
      "Spinal fusion and surgical outcomes",
      "Home modification and adaptive equipment costs",
      "Life care planning and future medical expenses",
    ],
    faqs: [
      {
        q: "How is the value of a spinal cord injury case determined?",
        a: "Through a life care plan prepared with physicians and economists, covering future surgeries, attendant care, equipment, home and vehicle modification, and lost earning capacity — plus the human losses the law recognizes.",
      },
      {
        q: "Should I accept an early offer?",
        a: "Almost never. Early offers are made before the permanence of the injury is known, and the release you sign will bar every future claim.",
      },
    ],
  },
  {
    parent: "catastrophic-injuries",
    slug: "burn-injuries",
    title: "Burn Injuries",
    short: "Burn Injuries",
    blurb:
      "Severe burns mean surgeries, scarring and disfigurement that last a lifetime.",
    intro:
      "Serious burn injuries require some of the most painful and prolonged treatment in medicine — repeated debridement, grafting and reconstructive surgery — followed by permanent scarring and, often, lasting psychological trauma. The compensation must reflect all of it.",
    handles: [
      "Vehicle fires and fuel-system failures",
      "Propane, natural gas and chemical explosions",
      "Electrical burns and electrocution",
      "Defective products and appliances",
      "Workplace and industrial burn injuries",
      "Scarring, disfigurement and reconstructive care",
    ],
    faqs: [
      {
        q: "Are scarring and disfigurement compensable?",
        a: "Yes. Georgia juries may award damages for permanent scarring and disfigurement, along with the physical pain, emotional suffering and medical costs of burn treatment.",
      },
      {
        q: "What if a product caused the fire?",
        a: "A defective product claim may lie against the manufacturer, distributor or retailer. Preserving the product itself is critical — do not discard it.",
      },
    ],
  },

  // --- Nursing home negligence ----------------------------------------------
  {
    parent: "nursing-home-negligence",
    slug: "bedsores",
    title: "Bedsores",
    short: "Bedsores",
    blurb:
      "Pressure ulcers are largely preventable — and a warning sign of an understaffed facility.",
    intro:
      "Pressure ulcers develop when a resident is left in one position for too long. With proper repositioning, nutrition and skin care, they are almost entirely preventable. When they appear — and especially when they progress to stage III or IV — they are strong evidence that a facility is not following its own care plan.",
    handles: [
      "Stage III and stage IV pressure ulcers",
      "Infection, sepsis and osteomyelitis",
      "Failure to reposition and monitor skin",
      "Malnutrition and dehydration contributing to sores",
      "Falsified or missing charting",
      "Chronic understaffing claims",
    ],
    faqs: [
      {
        q: "Aren't bedsores just a normal part of aging?",
        a: "No. Federal nursing home regulations treat pressure sores as a marker of care quality, and require facilities to prevent them and to treat any that develop.",
      },
      {
        q: "What records matter most?",
        a: "Turn and repositioning logs, wound care notes, weight and nutrition records, staffing schedules and photographs. We move quickly to preserve them.",
      },
    ],
  },
  {
    parent: "nursing-home-negligence",
    slug: "wrongful-death-in-nursing-homes",
    title: "Wrongful Death in Nursing Homes",
    short: "Nursing Home Death",
    blurb:
      "When neglect ends a life, Georgia law lets the family demand a full accounting.",
    intro:
      "Families are frequently told that a nursing home death was simply the result of age or illness. Records often tell a different story — untreated infection, a fall that was never reported, medication given to the wrong resident, or a facility that had too few staff on duty to notice.",
    handles: [
      "Deaths from untreated infection and sepsis",
      "Fatal falls and unreported injuries",
      "Medication errors and overdoses",
      "Elopement and wandering deaths",
      "Dehydration, malnutrition and neglect",
      "Full value of the life and estate claims",
    ],
    faqs: [
      {
        q: "The facility says it was natural causes. Can that be checked?",
        a: "Yes. Medical records, state inspection reports, staffing data and, where appropriate, expert medical review frequently reveal a preventable cause behind a 'natural causes' explanation.",
      },
      {
        q: "Does an arbitration agreement block our claim?",
        a: "Not always. Admission-packet arbitration clauses can be challenged on several grounds, including who signed them and whether they were properly explained.",
      },
    ],
  },

  // --- Medical malpractice ---------------------------------------------------
  {
    parent: "medical-malpractice",
    slug: "hospital-error",
    title: "Hospital Error",
    short: "Hospital Error",
    blurb:
      "Systemic breakdowns — not just individual mistakes — injure hospital patients.",
    intro:
      "Hospital injuries often trace back to systems rather than to one person: an understaffed floor, a missed handoff between shifts, an ignored alarm, or a lab result nobody followed up on. Georgia law holds the hospital itself accountable for those failures.",
    handles: [
      "Surgical errors and wrong-site surgery",
      "Anesthesia errors",
      "Emergency room misdiagnosis and delayed treatment",
      "Medication and dosage errors",
      "Hospital-acquired infections",
      "Understaffing, monitoring and handoff failures",
    ],
    faqs: [
      {
        q: "Do I have to sue the individual doctor?",
        a: "Not necessarily. The hospital may be liable for its employees and for its own institutional negligence, though whether a physician is an employee or an independent contractor is often disputed.",
      },
      {
        q: "What is an expert affidavit?",
        a: "Georgia requires a professional malpractice complaint to be filed with an affidavit from a qualified expert identifying at least one negligent act. We obtain that review before filing.",
      },
    ],
  },
  {
    parent: "medical-malpractice",
    slug: "birth-injuries",
    title: "Birth Injuries",
    short: "Birth Injuries",
    blurb:
      "A preventable delivery-room error can mean a lifetime of care for your child.",
    intro:
      "Most births are safe. When they are not, the cause is often a failure to read fetal monitoring correctly, a delayed C-section, or improper use of delivery instruments. The consequences — cerebral palsy, brain damage, nerve injury — last a lifetime and cost a fortune to manage.",
    handles: [
      "Cerebral palsy and hypoxic brain injury",
      "Failure to monitor fetal distress",
      "Delayed or improperly performed C-sections",
      "Forceps and vacuum extraction injuries",
      "Brachial plexus and Erb's palsy injuries",
      "Untreated maternal infection and preeclampsia",
    ],
    faqs: [
      {
        q: "How long do we have to bring a birth injury claim?",
        a: "Georgia applies special rules to claims involving minors, but the deadlines remain strict and evidence ages quickly. Contact an attorney as soon as you suspect a problem.",
      },
      {
        q: "What will a claim have to cover?",
        a: "A lifetime of therapy, equipment, special education, in-home or attendant care and lost earning capacity — quantified through a life care plan.",
      },
    ],
  },

  // --- Criminal defense ------------------------------------------------------
  {
    parent: "criminal-defense",
    slug: "murder-charges",
    title: "Murder Charges",
    short: "Murder Charges",
    blurb:
      "The most serious charge Georgia can bring demands a lawyer who tries cases.",
    intro:
      "A murder or homicide charge in Georgia carries the possibility of life imprisonment. These cases turn on forensic evidence, witness credibility and the conduct of the investigation itself — and they are won by lawyers who are genuinely prepared to try them to a jury.",
    handles: [
      "Malice murder and felony murder",
      "Voluntary and involuntary manslaughter",
      "Vehicular homicide",
      "Self-defense and justification defenses",
      "Forensic, ballistic and medical examiner evidence",
      "Bond hearings and pretrial motions",
    ],
    faqs: [
      {
        q: "Can I get a bond on a murder charge?",
        a: "Only a superior court judge may set bond in a murder case, and it is not automatic. A prepared bond hearing — with a release plan, ties to the community and rebuttal of the State's risk arguments — matters enormously.",
      },
      {
        q: "Should I explain my side to investigators?",
        a: "Not without your lawyer present. Statements made to clear things up are the single most common source of evidence against defendants in homicide cases.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "sex-crimes",
    title: "Sex Crimes",
    short: "Sex Crimes",
    blurb:
      "Allegations alone can destroy a reputation — the defense has to start immediately.",
    intro:
      "A sex crime allegation in Georgia carries mandatory minimum sentences, lifetime registration requirements and a stigma that attaches long before any trial. These cases frequently rest on the credibility of a single accuser, on digital evidence, or on forensic interviews whose methodology can be challenged.",
    handles: [
      "Rape and sexual assault charges",
      "Child molestation and aggravated allegations",
      "Statutory rape",
      "Internet and computer-based charges",
      "Sex offender registry consequences",
      "False allegation and cross-examination defenses",
    ],
    faqs: [
      {
        q: "The accusation is false. Isn't that obvious?",
        a: "It is not obvious to a jury without evidence. Motive, inconsistent statements, forensic interview technique and digital records are what establish a false allegation — and they must be gathered early.",
      },
      {
        q: "Will a conviction require registration?",
        a: "Most sex offense convictions in Georgia carry registration requirements, sometimes for life. Registration consequences shape every plea decision in these cases.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "drug-crimes",
    title: "Drug Crimes",
    short: "Drug Crimes",
    blurb:
      "Most drug cases are won on the search — not on the substance found.",
    intro:
      "Georgia drug prosecutions are built on searches and seizures, and those searches are frequently defective. An unlawful traffic stop, an unsupported search warrant, a prolonged detention or a bad canine alert can render the State's entire case inadmissible.",
    handles: [
      "Possession and possession with intent to distribute",
      "Manufacturing and distribution charges",
      "Prescription drug and opioid charges",
      "Overdose-related prosecutions",
      "Illegal search, seizure and traffic stop challenges",
      "Asset forfeiture defense",
    ],
    faqs: [
      {
        q: "The drugs were not mine. Is that a defense?",
        a: "It can be. The State must prove you knowingly possessed the substance. When drugs are found in a shared vehicle or residence, 'equal access' is a recognized defense in Georgia.",
      },
      {
        q: "Can evidence be thrown out?",
        a: "Yes. A successful motion to suppress — challenging the stop, the warrant or the scope of the search — frequently ends a drug prosecution outright.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "drug-trafficking-charges",
    title: "Drug Trafficking Charges",
    short: "Drug Trafficking",
    blurb:
      "Trafficking charges carry mandatory minimum prison time and enormous fines.",
    intro:
      "Georgia's trafficking statutes are triggered by weight alone — not by any proof that you sold anything. Once a threshold quantity is alleged, the charge carries mandatory minimum imprisonment and fines reaching hundreds of thousands of dollars, with limited judicial discretion.",
    handles: [
      "Cocaine, methamphetamine and fentanyl trafficking",
      "Marijuana trafficking",
      "Prescription opioid trafficking",
      "Weight, testing and lab-methodology challenges",
      "Conspiracy and constructive possession defenses",
      "Federal and multi-jurisdiction investigations",
    ],
    faqs: [
      {
        q: "I never sold anything. How is this trafficking?",
        a: "Under Georgia law, trafficking is charged on quantity. Possession of a threshold weight is enough — which is why challenging the weight, the lab testing and the possession itself is central to the defense.",
      },
      {
        q: "Can a mandatory minimum be avoided?",
        a: "Sometimes — through suppression of the evidence, a reduction below the trafficking threshold, or statutory departure provisions. Each requires early, aggressive work on the case.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "serious-felonies",
    title: "Serious Felonies",
    short: "Serious Felonies",
    blurb:
      "A felony conviction follows you for life — through work, housing and family.",
    intro:
      "A felony conviction will stay on your record and could haunt you for many years to come. The penalties are steep and may include high fines, jail time, asset forfeiture, loss of gun ownership rights and more. A conviction can jeopardize your relationships, your professional reputation, and your ability to freely choose where you want to live and work.",
    handles: [
      "Armed robbery and aggravated assault",
      "Kidnapping and false imprisonment",
      "Arson and property crimes",
      "White collar and fraud charges",
      "Georgia's 'seven deadly sins' offenses",
      "Habitual offender and recidivist sentencing",
    ],
    faqs: [
      {
        q: "I'm under investigation but not charged. What now?",
        a: "That is the best time to involve a lawyer. Decisions made before an arrest — whether to speak, whether to consent to a search, whether to surrender — shape everything that follows.",
      },
      {
        q: "Can a felony charge be reduced or dismissed?",
        a: "It happens regularly in our practice, through suppression motions, weaknesses in the State's proof, and negotiation backed by genuine trial readiness.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "assault",
    title: "Assault Charges",
    short: "Assault",
    blurb:
      "Simple assault and aggravated assault sit far apart in Georgia sentencing.",
    intro:
      "Assault charges in Georgia range from a misdemeanor to a violent felony carrying a mandatory prison sentence, and the line between them is often a single disputed fact — whether a weapon was used, or how serious an injury really was. Self-defense is a complete defense, and Georgia law protects it.",
    handles: [
      "Simple assault and simple battery",
      "Aggravated assault and aggravated battery",
      "Family violence battery",
      "Assault with a deadly weapon",
      "Self-defense and stand-your-ground claims",
      "Mutual combat and provocation defenses",
    ],
    faqs: [
      {
        q: "Can the alleged victim drop the charges?",
        a: "No. Once charges are filed, the decision belongs to the prosecutor. A reluctant complaining witness affects the case, but it does not end it.",
      },
      {
        q: "Is self-defense hard to prove?",
        a: "Under Georgia law, once self-defense is raised the State must disprove it beyond a reasonable doubt. Presenting it properly, with the right evidence, is the key.",
      },
    ],
  },
  {
    parent: "criminal-defense",
    slug: "theft",
    title: "Theft Charges",
    short: "Theft",
    blurb:
      "Value and prior record decide whether theft is a misdemeanor or a felony.",
    intro:
      "Georgia theft charges turn on the value of what was allegedly taken and on the accused's history. Because a theft conviction is a crime of dishonesty, it does lasting damage to employment prospects and can be used to attack your credibility in any future case.",
    handles: [
      "Theft by taking and theft by deception",
      "Shoplifting",
      "Theft by receiving stolen property",
      "Financial transaction card fraud",
      "Employee theft and embezzlement",
      "Burglary and entering auto",
    ],
    faqs: [
      {
        q: "Can restitution resolve a theft charge?",
        a: "Restitution frequently plays a role in resolving these cases, and in appropriate matters can support diversion or a reduction — but it should never be paid without legal advice, since it can be treated as an admission.",
      },
      {
        q: "Will this stay on my record forever?",
        a: "Georgia's record restriction and first offender provisions may apply. Whether you qualify depends heavily on how the case is resolved, which is why the resolution has to be structured with your record in mind.",
      },
    ],
  },
];

export const practiceAreas = [
  ...parentAreas.map((p) => ({ ...p, parent: null })),
  ...subAreas.map((s) => {
    const parent = parentAreas.find((p) => p.slug === s.parent);
    return { icon: parent.icon, image: parent.image, ...s };
  }),
];

// Top-level areas only — used for the nav, the practice grid and the sitemap.
export const topLevelAreas = practiceAreas.filter((p) => !p.parent);

// Top-level areas bundled into the three nav columns, in display order.
export const practiceGroups = [
  "Personal Injury",
  "Catastrophic & Medical",
  "Wrongful Death & Criminal Law",
].map((title) => ({
  title,
  areas: topLevelAreas.filter((p) => p.group === title),
}));
export const getSubAreas = (slug) =>
  practiceAreas.filter((p) => p.parent === slug);

// Overall Google rating for the firm.
export const googleRating = { rating: "4.9", count: 153 };

// Real Google reviews for Jody D. Peterman, LLC (transcribed from the firm's
// Google Business Profile). All are 5-star reviews.
export const reviews = [
  {
    name: "Yuri Perez",
    when: "a month ago",
    rating: 5,
    text: "Today is Father's Day and the main reason why I've been able to spend it with my 5 year old daughter, is because my wife and I hired Mr. Peterman on my case last year. His hard work, dedication, experience and expertise simply made the difference. While being detained we hired Jody because he was the only lawyer in town who answered my wife's calls on a Sunday. He continued to be available anytime and all the time during our fight. If you hire Jody you will have an honest and straightforward attorney on your side. Mr Peterman is highly respected in the courtrooms and the system in general. You will not find a better attorney to represent you.",
  },
  {
    name: "Mo Perkins",
    when: "2 years ago",
    rating: 5,
    text: "I cannot express enough gratitude for the outstanding representation I received from Mr. Peterman in my personal injury lawsuit. From the very beginning, he demonstrated an unparalleled level of professionalism, dedication, and expertise. He took the time to understand the specifics of my case, answered all my questions, and provided me with honest and realistic expectations. The communication was exceptional — I was always kept informed about the progress of my case, and I felt genuinely supported throughout the entire process. I highly recommend him to anyone in need of legal representation. Thank you, Mr. Peterman, for helping me achieve justice!",
  },
  {
    name: "Sascha Summers",
    when: "a year ago",
    rating: 5,
    text: "Mr. Peterman assisted my children and I with our personal injury case. He truly has gone above and beyond in ensuring our needs and rights were met. I'm very satisfied with the outcome of our case. I highly recommend.",
  },
  {
    name: "Tommy Rhudy",
    when: "2 months ago",
    rating: 5,
    text: "Mr. Peterman is an amazing trial lawyer. He will fight for your freedom with everything he has. He's the big dog in the fight and losing isn't in his vocabulary. Give him a chance and you will not be disappointed.",
  },
  {
    name: "DeDe Fasho",
    when: "4 months ago",
    rating: 5,
    text: "Jody really cares about his clients. He is a good man and the greatest lawyer ever!",
  },
];

// Client testimonials carried over from the firm's prior website.
export const testimonials = [
  {
    id: "fc",
    name: "F.C.",
    when: "Former client",
    rating: 5,
    text: "Jody Peterman continues to be one of the best defense attorneys in the South GA area. He's someone I would refer to any friends or family in need of an attorney! I've personally used Jody Peterman on two occasions and recommended him to others as well. Jody is honest, trustworthy and will work hard for you. His attention to detail is unparalleled and goes into every case 100% and leaves no stone unturned. If you find yourself in need of an attorney look no further than Jody D. Peterman, LLC.",
  },
  {
    id: "determined",
    name: "Former client",
    when: "Former client",
    rating: 5,
    text: "Mr. Peterman is a very determined and passionate individual to say the least. After reaching out to lawyer after lawyer and having my case pretty much turned down, Mr. Peterman did not only accept the challenge, but ensured me that he'd do his best with the case. He and staff were very professional and responsive throughout my case. Definitely one of the most qualified and proven lawyers in the South Georgia area.",
  },
  {
    id: "licensure",
    name: "Former client",
    when: "Former client",
    rating: 5,
    text: "Mr. Jody Peterman is an excellent lawyer for all types of cases. My case was particularly difficult because it not only dealt with the criminal proceedings but also the professional state licensure board. He did an outstanding job of communication and is definitely a trustworthy and honorable figure in the community.",
  },
  {
    id: "jh",
    name: "J.H.",
    when: "Former client",
    rating: 5,
    text: "Best attorney I have ever used. Very professional!",
  },
  {
    id: "nd",
    name: "N.D.",
    when: "Former client",
    rating: 5,
    text: "Very experienced trial lawyer. Best choice.",
  },
  {
    id: "won-my-case",
    name: "Former client",
    when: "Former client",
    rating: 5,
    text: "I cannot say enough wonderful things about Jody Peterman and his staff. They were professional, knowledgeable, and courteous. And they won my case! Highly recommend!",
  },
];

export const howItWorks = [
  {
    step: 1,
    title: "Free Case Evaluation",
    text: "For a free case evaluation, call us at 229-588-2608 or complete our contact form. We'll listen to your story, answer your questions, and explain your options.",
  },
  {
    step: 2,
    title: "We Investigate",
    text: "We gather evidence, obtain records, consult experts, and identify every party and insurance policy responsible for your injuries.",
  },
  {
    step: 3,
    title: "We Fight for You",
    text: "We build a demand backed by the facts and negotiate aggressively — and we prepare every case as if it will go to trial.",
  },
  {
    step: 4,
    title: "We See It Through",
    text: "We prepare each case for trial because that is the best way to position our clients for favorable results, even if the case is ultimately resolved in the pretrial phase.",
  },
];

export const globalFaqs = [
  {
    q: "How much does it cost to talk to you?",
    a: "Nothing. For a free case evaluation, call us at 229-588-2608 or complete our contact form. Fee arrangements depend on the type of case, and we will explain ours to you in plain terms before you decide anything.",
  },
  {
    q: "How long do I have to file a claim in Georgia?",
    a: "Most personal injury claims must be filed within two years of the injury. Some claims have shorter deadlines, so it's best to call as soon as possible.",
  },
  {
    q: "Will my case go to trial?",
    a: "Most cases settle, but we prepare every case for trial from day one. That readiness is often what drives a fair settlement.",
  },
  {
    q: "How much is my case worth?",
    a: "It depends on your injuries, treatment, lost income, and the impact on your life. We'll give you an honest assessment during your free case evaluation.",
  },
  {
    q: "Do you serve my area?",
    a: "We represent clients from our Valdosta office and throughout the State of Georgia, including Valdosta, Adel, Tifton, Albany, Cordele, Douglas, Moultrie, and Thomasville.",
  },
];

export const locations = [
  {
    slug: "valdosta",
    city: "Valdosta",
    county: "Lowndes County",
    primary: true,
    officeId: "valdosta",
    image:
      "/images/u-1477959858617-1200.jpg",
    intro:
      "Our office at 304 N. Ashley Street in downtown Valdosta has been the base of the firm's practice since 1995. From here we serve clients throughout Lowndes County and the I-75 corridor, where high-speed truck and car crashes are common — and, in serious matters, across the entire State of Georgia.",
    neighborhoods: [
      "Downtown Valdosta",
      "Remerton",
      "North Valdosta",
      "Lowndes County",
      "Hahira",
      "Lake Park",
    ],
  },
  {
    slug: "tifton",
    city: "Tifton",
    county: "Tift County",
    primary: false,
    officeId: "valdosta",
    image:
      "/images/u-1502920917128-1200.jpg",
    intro:
      "Tifton sits at the crossroads of I-75 and US-82, making it one of the busiest — and most dangerous — traffic hubs in South Georgia. We represent Tift County residents injured in crashes, falls, and on-the-job accidents.",
    neighborhoods: [
      "Downtown Tifton",
      "Tift County",
      "Omega",
      "Ty Ty",
      "Chula",
      "Brookfield",
    ],
  },
  {
    slug: "albany",
    city: "Albany",
    county: "Dougherty County",
    primary: false,
    officeId: "valdosta",
    image:
      "/images/u-1486406146926-1200.jpg",
    intro:
      "As the largest city in Southwest Georgia, Albany sees a high volume of serious accidents. We help injured residents of Dougherty County and the surrounding region pursue full and fair compensation.",
    neighborhoods: [
      "Downtown Albany",
      "East Albany",
      "Dougherty County",
      "Radium Springs",
      "Sherwood",
      "Lily Pond",
    ],
  },
  {
    slug: "adel",
    city: "Adel",
    county: "Cook County",
    primary: false,
    officeId: "valdosta",
    image:
      "/images/u-1444723121867-1200.jpg",
    intro:
      "Adel straddles I-75 in Cook County, where interstate crashes and trucking collisions are a constant risk. We represent injured Adel residents and travelers hurt on the highways nearby.",
    neighborhoods: [
      "Downtown Adel",
      "Cook County",
      "Sparks",
      "Cecil",
      "Lenox",
      "Barretts",
    ],
  },
  {
    slug: "cordele",
    city: "Cordele",
    county: "Crisp County",
    primary: false,
    officeId: "valdosta",
    image:
      "/images/u-1449158743715-1200.jpg",
    intro:
      "Known as the 'Watermelon Capital of the World,' Cordele sits along I-75 in Crisp County. We help injured residents and highway travelers recover after serious crashes and workplace accidents.",
    neighborhoods: [
      "Downtown Cordele",
      "Crisp County",
      "Arabi",
      "Lake Blackshear",
      "Pinehurst",
      "Penia",
    ],
  },
];

export const blogPosts = [
  {
    slug: "what-to-do-after-a-car-accident-in-georgia",
    title: "What to Do After a Car Accident in Georgia: A Step-by-Step Guide",
    date: "2026-06-18",
    readTime: "6 min read",
    category: "Car Accidents",
    excerpt:
      "The hours after a crash matter more than most people realize. Here's exactly what to do to protect your health and your right to compensation.",
    image:
      "/images/u-1519003722824-1200.jpg",
    related: ["car-accidents", "truck-accidents"],
    body: [
      {
        h: "1. Get to safety and check for injuries",
        p: "If you can, move to a safe location and check yourself and others for injuries. Call 911 immediately if anyone is hurt. Even if you feel fine, adrenaline can mask serious injuries — always accept medical evaluation.",
      },
      {
        h: "2. Call the police",
        p: "A police report creates an official record of the crash. In Georgia, you're required to report accidents involving injury, death, or significant property damage. Get the reporting officer's name and the report number.",
      },
      {
        h: "3. Document everything",
        p: "Photograph the vehicles, the scene, road conditions, and any visible injuries. Collect the other driver's insurance and contact information, and get names and numbers for any witnesses.",
      },
      {
        h: "4. Be careful what you say",
        p: "Do not admit fault, and avoid giving a recorded statement to the other driver's insurance company. Even an innocent apology can be used to reduce your claim.",
      },
      {
        h: "5. See a doctor — and keep going",
        p: "Prompt medical care protects both your health and your claim. Follow your treatment plan and keep every record. Gaps in treatment are one of the first things insurers use to devalue a case.",
      },
      {
        h: "6. Call a personal injury attorney",
        p: "Before you accept any settlement, talk to a lawyer. An early offer is almost never the full value of your claim. Our case evaluations are free — call 229-588-2608 or complete our contact form.",
      },
    ],
  },
  {
    slug: "how-long-do-i-have-to-file-a-personal-injury-claim-in-georgia",
    title: "How Long Do I Have to File a Personal Injury Claim in Georgia?",
    date: "2026-05-02",
    readTime: "5 min read",
    category: "Legal Guide",
    excerpt:
      "Georgia's statute of limitations sets a strict deadline on injury claims — and missing it can bar your case forever. Here's what you need to know.",
    image:
      "/images/u-1589391886645-1200.jpg",
    related: ["wrongful-death", "medical-malpractice"],
    body: [
      {
        h: "The general rule: two years",
        p: "For most personal injury claims in Georgia — car accidents, truck accidents, slip and falls — you have two years from the date of the injury to file a lawsuit. Miss that deadline and the court will almost certainly dismiss your case.",
      },
      {
        h: "Wrongful death claims",
        p: "Wrongful death claims also generally carry a two-year deadline, but the clock and the proper claimant can be affected by an ongoing estate or criminal case. Early legal advice is essential.",
      },
      {
        h: "Medical malpractice",
        p: "Malpractice claims must generally be filed within two years of the injury, with an overall five-year statute of repose. Special rules apply to foreign objects and to claims involving minors.",
      },
      {
        h: "Claims against a government entity",
        p: "If a city, county, or state entity is involved, you may have to file a formal ante litem notice within as little as six months. These deadlines are far shorter and easy to miss.",
      },
      {
        h: "Why you shouldn't wait",
        p: "Evidence disappears, witnesses' memories fade, and deadlines pass quickly. The sooner you involve an attorney, the stronger your case will be. Contact us today for a free case evaluation.",
      },
    ],
  },
];

// Convenience lookups
export const getPracticeArea = (slug) =>
  practiceAreas.find((p) => p.slug === slug);
export const getLocation = (slug) => locations.find((l) => l.slug === slug);
export const getOffice = (id) => offices.find((o) => o.id === id);
export const getBlogPost = (slug) => blogPosts.find((b) => b.slug === slug);
