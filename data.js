/* ============================================================
   Luxe Dentistry — site content data
   Edit the business NAP block below to match the Google
   Business Profile EXACTLY before publishing (see PLACEHOLDER).
   ============================================================ */

const business = {
  name: "Luxe Dentistry by Dr. Jose Manuel Jimenez",
  shortName: "Luxe Dentistry",
  doctor: "Dr. Jose Manuel Jimenez, DDS",
  category: "Cosmetic & Implant Dentist",
  city: "Los Algodones",
  region: "Baja California",
  regionCode: "B.C.",
  country: "Mexico",
  // ---- NAP confirmed from the Google Business Profile ----
  street: "Calle Álamo & Francisco I. Madero",
  postal: "21970",
  phone: "+1 (928) 304-7799",                   // US line published by the clinic
  phoneHref: "+19283047799",
  whatsapp: "+1 (928) 304-7799",                // CONFIRM this is the WhatsApp line
  whatsappHref: "19283047799",
  email: "dentistryluxe@gmail.com",
  domain: "dentalimplantsdrjimenez.com",         // CONFIRM final domain for the clinic site
  hours: [
    ["Monday – Saturday", "8:00 AM – 4:00 PM"],
    ["Sunday", "Closed"]
  ],
  rating: "4.9",
  reviewWord: "hundreds of",
  facebook: "https://www.facebook.com/dentaltlc",
  facebookProfile: "https://www.facebook.com/profile.php?id=100064027268791",
  gbp: "https://www.google.com/search?q=Luxe+Dentistry+by+Dr.+Jose+Manuel+Jimenez",
  reels: [
    "https://www.facebook.com/reel/1633579904371173/",
    "https://www.facebook.com/reel/821641847381658/"
  ],
  clinicReel: "https://www.facebook.com/reel/1541095920998392/", // "#Ourbuilding" clinic video for the homepage
  mapEmbed: "https://www.google.com/maps?q=Luxe+Dentistry+Calle+Álamo+Los+Algodones+21970+Baja+California&output=embed"
};

/* ---------- SERVICES (one page each) ---------- */
const services = [
  {
    slug: "dental-implants",
    name: "Dental Implants",
    nav: "Dental Implants",
    icon: "🦷",
    kw: "Dental Implants",
    lead: "Permanent, natural-looking tooth replacement using titanium implants placed by an expert implantologist with 25 years of experience.",
    intro: [
      "A dental implant is a small titanium post that is surgically placed into the jawbone to replace the root of a missing tooth. Once it fuses with the bone, it supports a custom crown, bridge, or denture that looks, feels, and functions like a natural tooth. At Luxe Dentistry in Los Algodones, Dr. Jose Manuel Jimenez has placed implants for hundreds of patients from across the United States, Canada, and Mexico.",
      "Because Dr. Jimenez holds an implant certificate from the Autonomous University of Baja California and a Harvard School of Dental Medicine diploma in Evidence-Based Implant Dentistry, every case is planned around long-term success — not a quick fix. The result is a tooth replacement that can last for decades with normal care."
    ],
    sections: [
      { h2: "Why choose dental implants over a bridge or denture?", paras: [
        "Unlike a traditional bridge, an implant does not require grinding down the healthy teeth on either side of the gap. Unlike a removable denture, it does not slip, click, or need adhesive. And because the implant stimulates the jawbone the way a natural root does, it helps prevent the bone loss and \"sunken\" facial appearance that follows tooth loss.",
        "For most patients an implant is the closest thing modern dentistry offers to getting your natural tooth back. You can eat what you love, speak clearly, and smile with full confidence."
      ]},
      { h2: "What the implant process looks like at Luxe Dentistry", paras: [
        "Your treatment begins with a full evaluation and digital imaging so Dr. Jimenez can assess bone volume and plan the exact position of each implant. If you have adequate bone, the titanium post is placed under local anesthesia in a comfortable, unhurried appointment. Over the following weeks the implant integrates with the bone (osseointegration), and a custom-shaded crown is then attached to complete your new tooth.",
        "Patients travelling to Los Algodones for dental work are scheduled efficiently so that surgical and restorative steps fit your trip. Many single-implant patients complete the surgical phase in one visit and return for the final crown once healing is complete."
      ]}
    ],
    faqs: [
      ["How much do dental implants cost in Los Algodones?", "Dental implants in Los Algodones typically cost a fraction of US prices, which is why so many patients cross the border for treatment. Your exact fee depends on how many implants you need and whether a bone graft is required. Contact Luxe Dentistry for a personalized quote."],
      ["Are dental implants painful?", "The procedure is done under local anesthesia and most patients report far less discomfort than they expected — comparable to a routine extraction. Any soreness afterward is usually managed with over-the-counter pain relief."],
      ["How long do dental implants last?", "With good oral hygiene and regular check-ups, dental implants can last 20+ years and often a lifetime. The crown on top may eventually need replacement due to normal wear."]
    ],
    related: ["all-on-4-dental-implants", "full-mouth-restoration", "dental-crowns-bridges", "tooth-extraction"]
  },
  {
    slug: "all-on-4-dental-implants",
    name: "All-on-4 Dental Implants",
    nav: "All-on-4 Implants",
    icon: "😁",
    kw: "All-on-4 Dental Implants",
    lead: "A full arch of fixed, permanent teeth supported by just four implants — a life-changing solution for patients missing most or all of their teeth.",
    intro: [
      "All-on-4 is an advanced implant technique that replaces an entire upper or lower arch of teeth using only four strategically placed implants. Instead of a loose, removable denture, you receive a full set of fixed teeth that stay firmly in place. It is one of the most requested treatments at Luxe Dentistry in Los Algodones.",
      "Dr. Jose Manuel Jimenez combines implantology and complete restorative rehabilitation to deliver All-on-4 cases with predictable, beautiful results. For patients who have struggled with failing teeth or ill-fitting dentures for years, it is often the treatment that gives them their smile — and their confidence — back."
    ],
    sections: [
      { h2: "Who is a good candidate for All-on-4?", paras: [
        "All-on-4 is ideal for patients who are missing all of their teeth in an arch, have several failing teeth that need to be removed, or wear a denture they can no longer tolerate. Because the four implants are angled to make the most of available bone, many patients who were told they needed bone grafting can still qualify.",
        "During your consultation Dr. Jimenez reviews your imaging and medical history to confirm you are a candidate and to plan implant positions for maximum stability."
      ]},
      { h2: "Fixed teeth that feel like your own", paras: [
        "The finished All-on-4 restoration is secured to the implants — it does not come out at night and never needs adhesive. You care for it much like natural teeth, and it restores a strong, natural bite so you can enjoy the foods you have been avoiding.",
        "Because Los Algodones prices are dramatically lower than in the United States, All-on-4 becomes attainable for patients who were quoted tens of thousands of dollars back home, without compromising on the quality of materials or workmanship."
      ]}
    ],
    faqs: [
      ["How many implants do I need for a full arch?", "The All-on-4 protocol uses four implants per arch. Some cases benefit from additional implants (All-on-6) for extra support; Dr. Jimenez will recommend the right approach after evaluating your bone."],
      ["Will I leave with teeth the same day?", "In many cases a temporary fixed bridge can be placed so you are never without teeth. The final, custom restoration is fitted after the implants have integrated."],
      ["Is All-on-4 cheaper in Mexico?", "Yes — full-arch implant treatment in Los Algodones costs a fraction of the US equivalent, which is why patients travel here from across Arizona, California, and beyond."]
    ],
    related: ["dental-implants", "full-mouth-restoration", "dentures", "cosmetic-dentistry"]
  },
  {
    slug: "full-mouth-restoration",
    name: "Full Mouth Restoration",
    nav: "Full Mouth Restoration",
    icon: "✨",
    kw: "Full Mouth Restoration & Reconstruction",
    lead: "A complete, personalized plan that rebuilds worn, damaged, or missing teeth to restore health, function, and a beautiful smile.",
    intro: [
      "Full mouth restoration (also called full mouth reconstruction) combines several treatments — implants, crowns, bridges, veneers, and more — into one coordinated plan to rebuild your entire smile. It is the area where Dr. Jose Manuel Jimenez's training in complete restorative rehabilitation truly shines.",
      "Whether your teeth have been worn down over the years, damaged by decay, or lost to gum disease, a full mouth restoration at Luxe Dentistry in Los Algodones addresses both how your smile looks and how your bite works — so you can chew comfortably and smile proudly again."
    ],
    sections: [
      { h2: "A treatment plan built around you", paras: [
        "No two full-mouth cases are the same. Dr. Jimenez begins with a comprehensive evaluation of your teeth, gums, bite, and jaw joints, then designs a step-by-step plan that sequences each procedure for the best result. Because he handles cosmetic, surgical, and restorative work himself, your care stays coordinated from start to finish.",
        "For patients travelling to Los Algodones, the plan is also organized around your schedule, grouping procedures to make the most of each visit."
      ]},
      { h2: "Health and beauty, together", paras: [
        "A full mouth restoration is not only cosmetic. Rebuilding a collapsed or uneven bite relieves strain on the jaw muscles and joints, protects remaining teeth from further damage, and makes eating comfortable again. The cosmetic result — even, bright, natural-looking teeth — is the finishing touch.",
        "Patients who have lived with pain, sensitivity, or embarrassment for years often describe the outcome as life-changing."
      ]}
    ],
    faqs: [
      ["How long does a full mouth restoration take?", "It depends on the procedures involved. Some plans are completed over a few visits; cases involving implants require healing time between stages. Dr. Jimenez will map out a realistic timeline for you."],
      ["Is it worth travelling to Los Algodones for full mouth work?", "For many patients, yes. The savings on comprehensive treatment are substantial, and Dr. Jimenez's 25 years of experience mean your case is in expert hands."],
      ["Will my new smile look natural?", "Absolutely. Shade, shape, and proportion are all customized to your face so the result looks like healthy, natural teeth — not obvious dental work."]
    ],
    related: ["dental-implants", "all-on-4-dental-implants", "porcelain-veneers", "smile-makeover"]
  },
  {
    slug: "smile-makeover",
    name: "Smile Makeover",
    nav: "Smile Makeover",
    icon: "💫",
    kw: "Smile Makeover",
    lead: "Dr. Jimenez's passion. A customized cosmetic plan combining veneers, whitening, crowns, and more to design the smile you have always wanted.",
    intro: [
      "A smile makeover is a personalized combination of cosmetic treatments designed to transform the appearance of your teeth. It may include porcelain veneers, teeth whitening, crowns, bonding, or gum contouring — whatever it takes to give you a balanced, bright, natural-looking smile.",
      "Cosmetic dentistry is Dr. Jose Manuel Jimenez's true passion. Recognized as one of the best dentists for smile makeovers in Los Algodones, he has performed makeovers for hundreds of patients, carefully designing each smile to suit the person's face, personality, and goals."
    ],
    sections: [
      { h2: "Designed for your face, not a template", paras: [
        "Great cosmetic dentistry is as much art as science. Dr. Jimenez studies the shape of your face, your lips, your gum line, and your natural tooth color to design proportions that look right for you. The goal is never a fake, uniform \"Hollywood\" look unless that is what you want — it is a smile that looks like the best version of your own.",
        "You will be involved in the design so that you know what to expect before treatment begins."
      ]},
      { h2: "What a smile makeover can correct", paras: [
        "Makeovers can address stained or discolored teeth, chips and cracks, gaps and uneven spacing, worn or short teeth, crowding, and old, mismatched dental work. By combining the right treatments, Dr. Jimenez can dramatically change the look of your smile — often in far less time than orthodontics.",
        "Because Los Algodones offers world-class cosmetic dentistry at a fraction of US prices, a complete makeover here is within reach for many patients who thought it was out of budget."
      ]}
    ],
    faqs: [
      ["How much does a smile makeover cost?", "It depends entirely on which treatments you choose and how many teeth are involved. Los Algodones pricing makes even comprehensive makeovers very affordable compared with the US. Ask for a personalized quote."],
      ["Will people know I have had work done?", "Only if you tell them. Dr. Jimenez's cosmetic work is designed to look completely natural, with custom shading and shaping for each tooth."],
      ["How long does a smile makeover take?", "Many makeovers are completed in just a couple of visits, which is ideal for patients travelling to Los Algodones. Your plan will be tailored to your treatment and your schedule."]
    ],
    related: ["porcelain-veneers", "teeth-whitening", "cosmetic-dentistry", "full-mouth-restoration"]
  },
  {
    slug: "porcelain-veneers",
    name: "Porcelain Veneers",
    nav: "Porcelain Veneers",
    icon: "🤍",
    kw: "Porcelain Veneers",
    lead: "Custom porcelain or affordable composite veneers that instantly correct the color, shape and alignment of your front teeth.",
    intro: [
      "Porcelain veneers are thin, custom-made shells bonded to the front of your teeth to transform their appearance. They are one of the fastest ways to correct stains, chips, small gaps, and uneven teeth, and they are a cornerstone of the smile makeovers Dr. Jose Manuel Jimenez is known for.",
      "At Luxe Dentistry in Los Algodones, Dr. Jimenez offers both premium porcelain veneers, crafted to mimic the way natural enamel reflects light, and more affordable composite (direct) veneers shaped onto the tooth in a single visit. In your consultation he will recommend which option best suits your goals and budget, so your new smile looks bright and completely natural, never bulky or artificial."
    ],
    sections: [
      { h2: "Why patients love porcelain veneers", paras: [
        "Veneers are stain-resistant, durable, and remarkably lifelike. Because a very thin layer of porcelain covers the front of the tooth, Dr. Jimenez can change the color, close small gaps, and reshape teeth all at once — giving you a dramatic result with a conservative, comfortable procedure.",
        "For patients who want a brighter, more even smile without years of orthodontics, veneers are often the perfect answer."
      ]},
      { h2: "Custom-designed in Los Algodones", paras: [
        "Your veneers are designed around your facial features and the shade you want. Dr. Jimenez prepares the teeth conservatively, takes precise impressions, and fits veneers that blend seamlessly with your smile. Because treatment can often be completed in a short series of visits, veneers are popular with patients travelling to Los Algodones for cosmetic work.",
        "The savings compared with US cosmetic dentistry mean you can transform your full smile line for a fraction of what you would pay at home."
      ]}
    ],
    faqs: [
      ["How many veneers will I need?", "It depends on how many teeth show when you smile. Some patients only need a few front teeth; others choose a full set for a complete transformation. Dr. Jimenez will advise during your consultation."],
      ["Do veneers ruin your teeth?", "No. Only a small amount of enamel is prepared to fit the veneer. Done well, veneers protect and beautify the teeth for many years."],
      ["How long do porcelain veneers last?", "With good care, porcelain veneers commonly last 10–15 years or more before needing replacement."]
    ],
    related: ["smile-makeover", "teeth-whitening", "cosmetic-dentistry", "dental-crowns-bridges"]
  },
  {
    slug: "dental-crowns-bridges",
    name: "Dental Crowns & Bridges",
    nav: "Crowns & Bridges",
    icon: "👑",
    kw: "Dental Crowns & Bridges",
    lead: "Strong, natural-looking crowns to restore damaged teeth and fixed bridges to replace missing ones.",
    intro: [
      "A dental crown is a custom cap that covers and protects a damaged or heavily filled tooth, restoring its strength and appearance. A bridge uses crowns to \"bridge\" the gap left by one or more missing teeth. Both are everyday workhorses of restorative dentistry at Luxe Dentistry in Los Algodones.",
      "Dr. Jose Manuel Jimenez crafts crowns and bridges that match the color and contour of your natural teeth, so they blend in seamlessly while giving you back full chewing function."
    ],
    sections: [
      { h2: "When you might need a crown", paras: [
        "Crowns are recommended for teeth that are cracked, badly decayed, worn down, or weakened after a root canal. They are also used to complete a dental implant. Because a crown surrounds the whole tooth, it protects what remains and prevents further damage.",
        "Dr. Jimenez offers tooth-colored porcelain and zirconia crowns for a strong, lifelike result — see our dedicated zirconia crowns page for the most durable option."
      ]},
      { h2: "Replacing missing teeth with a bridge", paras: [
        "A fixed bridge fills the gap left by a missing tooth by anchoring a replacement tooth to the neighboring teeth. It restores your smile, keeps surrounding teeth from shifting, and lets you chew and speak normally. For patients who prefer not to have surgery, a bridge is a reliable, cost-effective option — though an implant is often the longer-lasting choice.",
        "In Los Algodones, both crowns and bridges cost far less than in the US, making it easy to restore several teeth in one trip."
      ]}
    ],
    faqs: [
      ["How long do crowns and bridges last?", "With good oral hygiene, crowns and bridges commonly last 10–15 years or longer. Regular check-ups help them last as long as possible."],
      ["Crown or implant — which is better?", "It depends on your situation. A crown restores a damaged natural tooth; an implant replaces a missing one. Dr. Jimenez will recommend the best option for your case."],
      ["Can crowns be done quickly for travelers?", "Yes. Treatment is scheduled efficiently so travelling patients can complete their crown or bridge within their visit whenever possible."]
    ],
    related: ["zirconia-crowns", "dental-implants", "root-canal", "full-mouth-restoration"]
  },
  {
    slug: "zirconia-crowns",
    name: "Zirconia Crowns",
    nav: "Zirconia Crowns",
    icon: "💎",
    kw: "Zirconia Crowns",
    lead: "The strongest, most lifelike crown material available — metal-free, biocompatible, and beautifully translucent.",
    intro: [
      "Zirconia crowns are made from a premium ceramic that is exceptionally strong and completely metal-free. They resist chipping and wear better than most other crown materials while offering a natural translucency that blends beautifully with your smile — which is why they are a favorite at Luxe Dentistry in Los Algodones.",
      "Dr. Jose Manuel Jimenez recommends zirconia crowns for patients who want maximum durability without sacrificing aesthetics, whether for a single back tooth under heavy chewing pressure or a full set of front teeth."
    ],
    sections: [
      { h2: "Why zirconia?", paras: [
        "Zirconia's strength makes it ideal for molars and for patients who grind or clench. Because it contains no metal, there is no dark line at the gum and no risk of a metallic taste or sensitivity. It is also highly biocompatible, so it is gentle on the gum tissue.",
        "Modern zirconia is layered and shaded to look remarkably lifelike, giving you the best of both worlds: strength and beauty."
      ]},
      { h2: "A popular choice for full-mouth and implant work", paras: [
        "Because of their durability, zirconia crowns are often chosen for implant restorations, full-mouth reconstructions, and All-on-4 bridges. Dr. Jimenez uses zirconia where its strength and appearance make the biggest difference to the final result.",
        "As with all treatment at Luxe Dentistry, Los Algodones pricing means you can choose this premium material for far less than it would cost in the United States."
      ]}
    ],
    faqs: [
      ["Are zirconia crowns better than porcelain?", "Zirconia is stronger and metal-free, making it excellent for back teeth and heavy bites. Layered porcelain can offer slightly more translucency for front teeth. Dr. Jimenez will help you choose."],
      ["Do zirconia crowns look natural?", "Yes. Modern zirconia is shaded and layered to mimic natural enamel, including its translucency, so the result looks like a real tooth."],
      ["How long do zirconia crowns last?", "Thanks to their strength, zirconia crowns often last 15 years or more with proper care."]
    ],
    related: ["dental-crowns-bridges", "dental-implants", "all-on-4-dental-implants", "smile-makeover"]
  },
  {
    slug: "dentures",
    name: "Dentures & Partials",
    nav: "Dentures & Partials",
    icon: "🦷",
    kw: "Dentures & Partial Dentures",
    lead: "Comfortable, natural-looking full and partial dentures — plus implant-supported options that never slip.",
    intro: [
      "Dentures replace missing teeth with a custom, removable appliance that restores your smile and your ability to eat and speak. A full denture replaces an entire arch, while a partial denture fills in where several teeth are missing. At Luxe Dentistry in Los Algodones, dentures are crafted for comfort, fit, and a natural appearance.",
      "For patients who want the security of teeth that never move, Dr. Jose Manuel Jimenez also offers implant-supported dentures and fixed All-on-4 solutions — a permanent alternative to the traditional removable denture."
    ],
    sections: [
      { h2: "Full, partial, and implant-supported dentures", paras: [
        "A well-made denture should look natural and fit comfortably without constant adjustment. Dr. Jimenez takes precise measurements to create dentures that suit your mouth and your facial features. Partial dentures clasp neatly around your remaining teeth, while full dentures are shaped for a stable, comfortable fit.",
        "If you are tired of adhesive and slipping, implant-supported dentures snap securely onto a few implants — combining the affordability of a denture with the stability of implants."
      ]},
      { h2: "A fresh start for your smile", paras: [
        "New dentures can take a short time to get used to, but they make an enormous difference to daily life — from enjoying meals to smiling in photos with confidence. Dr. Jimenez ensures your bite is comfortable and your smile looks natural before you leave.",
        "Los Algodones is one of the most popular destinations in the world for affordable, quality dentures, drawing patients from across the US and Canada."
      ]}
    ],
    faqs: [
      ["How long does it take to get dentures?", "Traditional dentures require a few appointments for measurements, fitting, and adjustments. Travelling patients are scheduled efficiently; Dr. Jimenez will outline the timeline for your case."],
      ["Are implant-supported dentures worth it?", "For many patients, yes. They eliminate slipping and adhesive and restore far more chewing power than a conventional denture, while costing less in Los Algodones than in the US."],
      ["Will my dentures look natural?", "Yes. Tooth shape, shade, and gum color are all customized so your dentures look like healthy natural teeth."]
    ],
    related: ["all-on-4-dental-implants", "dental-implants", "full-mouth-restoration", "tooth-extraction"]
  },
  {
    slug: "teeth-whitening",
    name: "Teeth Whitening",
    nav: "Teeth Whitening",
    icon: "☀️",
    kw: "Professional Teeth Whitening",
    lead: "Professional whitening that safely lifts years of stains for a brighter, more youthful smile in a single visit.",
    intro: [
      "Professional teeth whitening is one of the simplest, most affordable ways to refresh your smile. Using professional-grade whitening agents, Dr. Jose Manuel Jimenez can lift stains from coffee, tea, wine, tobacco, and time — safely and far more effectively than over-the-counter strips.",
      "It is a popular add-on for patients visiting Luxe Dentistry in Los Algodones for a check-up or as the finishing touch to a smile makeover."
    ],
    sections: [
      { h2: "Faster and safer than store-bought kits", paras: [
        "In-office whitening uses stronger, professional products applied under controlled conditions, so you see a bigger change in a fraction of the time — often in a single visit. Because a dentist protects your gums and monitors the process, it is also safer and more comfortable than DIY kits, with less risk of sensitivity.",
        "Dr. Jimenez will check that your teeth and gums are healthy first, so your whitening is even and long-lasting."
      ]},
      { h2: "The perfect finishing touch", paras: [
        "Whitening is often the final step in a smile makeover, or a quick refresh before a wedding, reunion, or vacation. Combined with a professional cleaning, it can take years off your smile in one appointment.",
        "At Los Algodones prices, professional whitening is an easy, affordable upgrade to add to your visit."
      ]}
    ],
    faqs: [
      ["How white will my teeth get?", "Results vary by the type of staining, but most patients see several shades of improvement. Dr. Jimenez will set realistic expectations after examining your teeth."],
      ["Does whitening work on crowns or veneers?", "Whitening only lightens natural teeth, not existing dental work. If you plan veneers or crowns, whiten first so your new restorations match your desired shade."],
      ["Is professional whitening safe?", "Yes. Performed by a dentist, whitening is safe for tooth enamel. Any temporary sensitivity usually resolves within a day or two."]
    ],
    related: ["smile-makeover", "porcelain-veneers", "dental-cleaning", "cosmetic-dentistry"]
  },
  {
    slug: "root-canal",
    name: "Root Canal Treatment",
    nav: "Root Canal",
    icon: "🩺",
    kw: "Root Canal Treatment (Endodontics)",
    lead: "Comfortable, modern root canal therapy that saves a painful or infected tooth instead of removing it.",
    intro: [
      "A root canal treats infection or damage deep inside a tooth, in the soft pulp that contains the nerve. By carefully removing the infected tissue, cleaning the canal, and sealing it, Dr. Jose Manuel Jimenez can relieve pain and save a tooth that might otherwise need to be extracted.",
      "Modern root canal therapy at Luxe Dentistry in Los Algodones is far more comfortable than its reputation suggests — most patients are surprised by how routine and painless the visit is."
    ],
    sections: [
      { h2: "Saving your natural tooth", paras: [
        "Whenever possible, keeping your natural tooth is the best outcome. A root canal removes the source of infection and pain while preserving the tooth's root and structure. Afterward, the tooth is usually protected with a crown so it can function normally for years to come.",
        "Dr. Jimenez's restorative expertise means your treated tooth is not only saved but properly rebuilt for long-term strength."
      ]},
      { h2: "Relief from tooth pain", paras: [
        "A severe toothache, sensitivity to hot and cold, or swelling can signal an infected pulp. Left untreated, the infection can spread. A timely root canal relieves the pain and stops the problem at its source, under gentle local anesthesia.",
        "For patients travelling to Los Algodones, root canal and crown treatment can often be coordinated so the tooth is fully restored during the trip."
      ]}
    ],
    faqs: [
      ["Does a root canal hurt?", "With modern anesthesia, the procedure itself is comfortable — comparable to having a filling. It relieves the pain caused by the infection rather than creating it."],
      ["Do I need a crown after a root canal?", "Usually yes, especially for back teeth. A crown protects the treated tooth from fracture and restores full chewing strength."],
      ["Can a root canal be done in one visit?", "Many can. Dr. Jimenez will let you know whether your case can be completed in a single appointment, which is convenient for travelling patients."]
    ],
    related: ["dental-crowns-bridges", "zirconia-crowns", "tooth-extraction", "dental-cleaning"]
  },
  {
    slug: "cosmetic-dentistry",
    name: "Cosmetic Dentistry",
    nav: "Cosmetic Dentistry",
    icon: "✨",
    kw: "Cosmetic Dentistry",
    lead: "The art of a beautiful smile — Dr. Jimenez's specialty and lifelong passion, from subtle refinements to complete transformations.",
    intro: [
      "Cosmetic dentistry focuses on improving the appearance of your teeth and smile — their color, shape, alignment, and overall harmony. It ranges from a simple whitening or bonding to veneers and complete smile makeovers. This is the field Dr. Jose Manuel Jimenez is most passionate about and best known for in Los Algodones.",
      "With 25 years of experience and advanced training in cosmetic and restorative dentistry, Dr. Jimenez blends technical precision with an artist's eye to create smiles that look naturally beautiful."
    ],
    sections: [
      { h2: "Treatments that make up a cosmetic plan", paras: [
        "Depending on your goals, cosmetic care may include porcelain veneers, professional whitening, tooth-colored crowns, cosmetic bonding to repair chips and gaps, and gum contouring to balance your smile line. Often the most striking results come from combining a few treatments in a coordinated plan — a smile makeover.",
        "Dr. Jimenez listens closely to what you want to change and designs a plan that fits your face, your budget, and your timeline."
      ]},
      { h2: "Why patients choose Los Algodones for cosmetic dentistry", paras: [
        "Los Algodones has become a world-renowned destination for cosmetic dental work, offering the same high-quality materials and techniques found in the US at dramatically lower prices. That means a full cosmetic transformation is within reach for many patients who assumed it was unaffordable.",
        "At Luxe Dentistry, hundreds of patients have trusted Dr. Jimenez to redesign their smiles — and the results speak for themselves in his reviews and testimonials."
      ]}
    ],
    faqs: [
      ["Which cosmetic treatment is right for me?", "It depends on what you want to change. Dr. Jimenez will examine your smile and recommend the most effective, conservative options during your consultation."],
      ["Is cosmetic dentistry only about looks?", "Improving your smile often improves function too — repairing worn or chipped teeth and balancing your bite. The best cosmetic dentistry is healthy dentistry as well."],
      ["How affordable is cosmetic dentistry in Los Algodones?", "Significantly more affordable than in the US, which is why patients travel here from across North America. Ask for a personalized quote for your plan."]
    ],
    related: ["smile-makeover", "porcelain-veneers", "teeth-whitening", "full-mouth-restoration"]
  },
  {
    slug: "dental-cleaning",
    name: "Dental Cleaning & Checkups",
    nav: "Cleaning & Checkups",
    icon: "🪥",
    kw: "Dental Cleaning, Exams & Checkups",
    lead: "Thorough professional cleanings and exams to keep your smile healthy — the foundation of every great result.",
    intro: [
      "A professional cleaning and exam is the foundation of good oral health. It removes the plaque and tartar that brushing can't, and lets Dr. Jose Manuel Jimenez catch small problems before they become big ones. It is also the ideal first visit for patients new to Luxe Dentistry in Los Algodones.",
      "Whether you are due for a routine check-up or planning cosmetic or implant treatment, a clean, healthy mouth is where every successful case begins."
    ],
    sections: [
      { h2: "What a check-up visit includes", paras: [
        "Your visit typically includes a professional cleaning to remove plaque and tartar, a polish, and a thorough examination of your teeth and gums. Dr. Jimenez checks for decay, gum health, and any early signs of trouble, and discusses any treatment you may want or need.",
        "It is a relaxed, unhurried appointment — and an easy, affordable way to protect your smile while you are in Los Algodones."
      ]},
      { h2: "Preventive care saves money and teeth", paras: [
        "Regular cleanings and exams prevent the small issues — a bit of decay, early gum inflammation — that turn into expensive problems if ignored. Many US and Canadian patients combine a check-up and cleaning with their trip to Los Algodones because the cost is so reasonable.",
        "If Dr. Jimenez finds something that needs attention, he can often begin treatment during the same visit, saving you a second trip."
      ]}
    ],
    faqs: [
      ["How often should I get a cleaning?", "Most people benefit from a professional cleaning and exam every six months. Dr. Jimenez may suggest a different interval based on your gum health."],
      ["Can I get a cleaning and other treatment in one trip?", "Yes. Many patients start with a cleaning and exam, then proceed with any needed treatment during the same visit to Los Algodones."],
      ["Does a cleaning hurt?", "No. A routine cleaning is comfortable. If your gums are sensitive, let the team know and they will keep you comfortable throughout."]
    ],
    related: ["teeth-whitening", "root-canal", "cosmetic-dentistry", "tooth-extraction"]
  },
  {
    slug: "tooth-extraction",
    name: "Tooth Extraction & Oral Surgery",
    nav: "Extractions & Oral Surgery",
    icon: "🔧",
    kw: "Tooth Extraction & Oral Surgery",
    lead: "Gentle extractions and oral surgery — including wisdom teeth — performed by an experienced surgical dentist.",
    intro: [
      "Sometimes a tooth is too damaged or decayed to save, or a wisdom tooth is causing problems, and removal is the healthiest option. Dr. Jose Manuel Jimenez performs extractions and oral surgery with a focus on comfort and careful planning — especially when the site will later receive an implant.",
      "At Luxe Dentistry in Los Algodones, extractions are done gently under local anesthesia, and Dr. Jimenez's surgical experience means even more complex cases are handled smoothly."
    ],
    sections: [
      { h2: "When a tooth needs to come out", paras: [
        "Extraction may be recommended for teeth with severe decay or infection, advanced gum disease, fractures below the gum line, or impacted wisdom teeth. When possible, Dr. Jimenez always looks for ways to save a tooth first — but when removal is the right choice, doing it well protects your remaining teeth and sets up a successful restoration.",
        "If you plan to replace the tooth with an implant, careful extraction preserves the bone for the best long-term result."
      ]},
      { h2: "Comfortable surgery and smooth healing", paras: [
        "Dr. Jimenez takes time to keep you comfortable during and after the procedure, with clear aftercare instructions to help you heal quickly. His background in oral surgery and implantology means the extraction is planned with your next step — whether that is an implant, bridge, or denture — already in mind.",
        "For travelling patients, extractions are scheduled thoughtfully so healing fits around your plans."
      ]}
    ],
    faqs: [
      ["Does an extraction hurt?", "The procedure is done under local anesthesia so you should not feel pain during it. Mild soreness afterward is normal and usually eased with over-the-counter pain relief."],
      ["Can I get an implant where a tooth was removed?", "Often yes. In some cases an implant can be placed at the same time; in others the site heals first. Dr. Jimenez will plan the best approach for you."],
      ["Do you remove wisdom teeth?", "Yes. Dr. Jimenez removes problematic and impacted wisdom teeth, drawing on his oral surgery experience for a smooth procedure."]
    ],
    related: ["dental-implants", "dentures", "root-canal", "all-on-4-dental-implants"]
  }
];

/* ---------- AREAS (one page each) ---------- */
const areas = [
  {
    slug: "los-algodones",
    name: "Los Algodones",
    nav: "Los Algodones",
    place: "Los Algodones, Baja California",
    from: "right here in",
    lead: "Luxe Dentistry is located in the heart of Los Algodones — the famous \"Molar City\" — offering world-class cosmetic and implant dentistry to locals and visitors alike.",
    body: [
      "Los Algodones, Baja California, is known around the world as \"Molar City\" — a small border town with one of the highest concentrations of dental clinics anywhere. Patients travel here from across the United States and Canada for quality dental care at a fraction of home prices, and Luxe Dentistry by Dr. Jose Manuel Jimenez is proud to call it home.",
      "With 25 years of experience — 15 of them right here in Los Algodones — Dr. Jimenez knows exactly what visiting patients need: efficient scheduling, honest advice, high-quality work, and a comfortable experience from start to finish. Whether you live locally or are crossing the border for the day, you will find a warm welcome and expert care."
    ],
    travel: "Los Algodones sits just steps from the Andrade border crossing, a short drive from Yuma, Arizona. Most visiting patients park on the US side and walk across the border directly into town."
  },
  {
    slug: "yuma-az",
    name: "Yuma, Arizona",
    nav: "Yuma, AZ",
    place: "Yuma, Arizona",
    from: "patients from",
    lead: "Just a short drive from the border, Yuma residents choose Dr. Jimenez at Luxe Dentistry for affordable implants, veneers, and full-mouth care.",
    body: [
      "Yuma, Arizona is the closest major US city to Los Algodones, making Luxe Dentistry an easy choice for Yuma residents and winter visitors. Many of our patients drive from Yuma, park near the Andrade crossing, and walk across the border to reach our clinic in minutes.",
      "For Yuma snowbirds and locals alike, the savings are substantial: the same implants, crowns, veneers, and dentures that cost thousands in Arizona are available here at a fraction of the price, performed by a Harvard-trained implantologist with 25 years of experience."
    ],
    travel: "From Yuma, take Interstate 8 west to the Andrade Port of Entry (about a 20–25 minute drive). Park on the US side and walk across into Los Algodones, where our clinic is a short stroll away."
  },
  {
    slug: "phoenix-az",
    name: "Phoenix, Arizona",
    nav: "Phoenix, AZ",
    place: "Phoenix, Arizona",
    from: "patients from",
    lead: "Phoenix and Valley residents make the scenic drive to Los Algodones for premium cosmetic and implant dentistry that saves thousands.",
    body: [
      "Phoenix and the greater Valley area are within an easy day's drive of Los Algodones, and thousands of Arizonans make the trip each year for affordable, high-quality dental care. At Luxe Dentistry, Phoenix patients find the same advanced treatments offered at home — dental implants, All-on-4, veneers, and full-mouth restoration — for dramatically less.",
      "Dr. Jose Manuel Jimenez schedules travelling patients efficiently, so a Phoenix resident can often complete significant treatment in a single, well-planned trip. For larger cases like implants or a smile makeover, the savings easily cover the cost of the journey."
    ],
    travel: "From Phoenix, it is roughly a 3-hour drive southwest to Yuma and the Andrade border crossing. Many patients make a comfortable day trip or an overnight visit to complete their treatment."
  },
  {
    slug: "tucson-az",
    name: "Tucson, Arizona",
    nav: "Tucson, AZ",
    place: "Tucson, Arizona",
    from: "patients from",
    lead: "Tucson patients trust Luxe Dentistry for expert implants, crowns, and cosmetic work at a fraction of Arizona prices.",
    body: [
      "Tucson residents have long looked to Los Algodones for affordable dental care, and Luxe Dentistry by Dr. Jose Manuel Jimenez is a trusted name for those seeking quality cosmetic and implant treatment. The drive is straightforward, and the savings on major work make it well worth the trip.",
      "From single implants to complete smile makeovers, Tucson patients receive care from a dentist with 25 years of experience and advanced training from Harvard School of Dental Medicine — all in a friendly, welcoming clinic just across the border."
    ],
    travel: "From Tucson, take Interstate 8 west toward Yuma and the Andrade Port of Entry — about a 3.5-hour drive. An overnight stay in Yuma is a popular option for patients with larger treatment plans."
  },
  {
    slug: "san-diego-ca",
    name: "San Diego, California",
    nav: "San Diego, CA",
    place: "San Diego, California",
    from: "patients from",
    lead: "San Diego residents visit Dr. Jimenez in Los Algodones for premium veneers, implants, and smile makeovers that cost far less than in California.",
    body: [
      "San Diego and Southern California patients are no strangers to dental tourism, and Los Algodones is a favorite destination for its quality and value. At Luxe Dentistry, San Diego visitors find a cosmetic dentist whose passion and expertise rival any clinic back home — at California-beating prices.",
      "Whether you want a set of porcelain veneers, a full-mouth restoration, or All-on-4 implants, Dr. Jose Manuel Jimenez delivers results worth travelling for. Many San Diego patients combine treatment with a short getaway, making the most of the trip."
    ],
    travel: "From San Diego, Los Algodones is roughly a 2.5–3 hour drive east via Interstate 8 to the Andrade border crossing near Winterhaven. It is an easy day trip or overnight visit."
  },
  {
    slug: "el-centro-ca",
    name: "El Centro & Imperial Valley",
    nav: "El Centro, CA",
    place: "El Centro, California",
    from: "patients from",
    lead: "Imperial Valley residents enjoy quick, affordable access to Dr. Jimenez's cosmetic and implant dentistry just across the border.",
    body: [
      "El Centro and the wider Imperial Valley are among the closest California communities to Los Algodones, making Luxe Dentistry a convenient choice for quality dental care. Many local patients make the short drive regularly for cleanings, cosmetic work, and larger treatments alike.",
      "With Dr. Jose Manuel Jimenez's 25 years of experience and a full range of services under one roof, Imperial Valley patients can handle everything from a routine check-up to a complete smile makeover close to home — and save significantly in the process."
    ],
    travel: "From El Centro, it is a short drive east on Interstate 8 to the Andrade Port of Entry near Winterhaven — well under an hour. Park on the US side and walk across into Los Algodones."
  },
  {
    slug: "palm-springs-ca",
    name: "Palm Springs & Coachella Valley",
    nav: "Palm Springs, CA",
    place: "Palm Springs, California",
    from: "patients from",
    lead: "Coachella Valley residents and snowbirds choose Luxe Dentistry for luxury-level cosmetic dentistry without the luxury price tag.",
    body: [
      "Palm Springs and the Coachella Valley are home to many patients who appreciate quality — and value. Los Algodones offers both, and Luxe Dentistry by Dr. Jose Manuel Jimenez is a favorite for cosmetic dentistry, implants, and full-mouth work. Seasonal residents in particular find it easy to fit treatment into their time in the desert.",
      "Dr. Jimenez's reputation for beautiful, natural-looking smile makeovers draws patients from across the valley who want a standout smile at a sensible price."
    ],
    travel: "From Palm Springs, Los Algodones is about a 2.5-hour drive southeast via Interstate 10 and Highway 78/Interstate 8 to the Andrade crossing. A day trip is very doable, and overnight stays in the area are easy to arrange."
  },
  {
    slug: "mexicali",
    name: "Mexicali, Baja California",
    nav: "Mexicali, B.C.",
    place: "Mexicali, Baja California",
    from: "patients from",
    lead: "Mexicali residents choose Luxe Dentistry in nearby Los Algodones for specialist cosmetic and implant care from Dr. Jimenez.",
    body: [
      "As the capital of Baja California, Mexicali is close to Los Algodones and its renowned dental clinics. Local patients come to Luxe Dentistry for the specialist cosmetic and implant expertise of Dr. Jose Manuel Jimenez, whose training and 25 years of experience set his work apart.",
      "From dental implants and All-on-4 to veneers and full-mouth restoration, Mexicali patients receive world-class care close to home, in Spanish and English, with a focus on comfort and lasting results."
    ],
    travel: "Los Algodones is a short drive from Mexicali along the border. Our clinic is easy to reach and centrally located in the town's dental district."
  },
  {
    slug: "san-luis-rio-colorado",
    name: "San Luis Río Colorado, Sonora",
    nav: "San Luis R.C.",
    place: "San Luis Río Colorado, Sonora",
    from: "patients from",
    lead: "Just across the state line, San Luis Río Colorado patients rely on Dr. Jimenez for expert implants, crowns, and cosmetic dentistry.",
    body: [
      "San Luis Río Colorado in Sonora is close to Los Algodones, and many of its residents choose Luxe Dentistry for advanced dental care. Dr. Jose Manuel Jimenez offers a full range of treatments — from implants and crowns to smile makeovers — with the skill that comes from 25 years of experience.",
      "Patients appreciate the combination of quality, value, and personalized care, delivered in a comfortable, modern clinic just a short trip away."
    ],
    travel: "From San Luis Río Colorado, Los Algodones is a convenient drive along the border region. Our clinic is centrally located and easy to find."
  },
  {
    slug: "calexico-ca",
    name: "Calexico, California",
    nav: "Calexico, CA",
    place: "Calexico, California",
    from: "patients from",
    lead: "Calexico residents make the easy trip to Los Algodones for affordable, high-quality dentistry with Dr. Jimenez.",
    body: [
      "Calexico sits right on the California–Baja border and is well positioned for a trip to Los Algodones. Residents choose Luxe Dentistry for the quality of Dr. Jose Manuel Jimenez's cosmetic and implant work and for the significant savings compared with dental care in the US.",
      "From a simple cleaning to a full smile makeover, Calexico patients find everything they need under one roof, delivered by a dentist trusted by hundreds of patients from both sides of the border."
    ],
    travel: "From Calexico, take Interstate 8 east toward the Andrade Port of Entry near Winterhaven — a short, easy drive. Park on the US side and walk across into Los Algodones."
  },
  {
    slug: "blythe-ca",
    name: "Blythe, California",
    nav: "Blythe, CA",
    place: "Blythe, California",
    from: "patients from",
    lead: "Blythe and Palo Verde Valley residents travel to Luxe Dentistry for premium implants and cosmetic work at unbeatable value.",
    body: [
      "Blythe, on the Colorado River, is within comfortable driving distance of Los Algodones, and its residents — including many seasonal visitors — turn to Luxe Dentistry for quality dental care. Dr. Jose Manuel Jimenez's expertise in implants and cosmetic dentistry makes the trip well worth it, especially for larger treatment plans.",
      "Blythe patients enjoy the same advanced care available in bigger cities, at Los Algodones prices, from a dentist with 25 years of experience and world-class training."
    ],
    travel: "From Blythe, head south toward Yuma and the Andrade border crossing — roughly a 1.5-hour drive. Many patients make a relaxed day trip or overnight visit."
  },
  {
    slug: "las-vegas-nv",
    name: "Las Vegas, Nevada",
    nav: "Las Vegas, NV",
    place: "Las Vegas, Nevada",
    from: "patients from",
    lead: "Las Vegas patients combine a getaway with major dental savings at Luxe Dentistry in Los Algodones.",
    body: [
      "Las Vegas residents increasingly look beyond Nevada for affordable, high-quality dental care — and Los Algodones is a top choice. At Luxe Dentistry, Vegas patients find advanced implant and cosmetic treatment from Dr. Jose Manuel Jimenez for a fraction of the cost back home, making even large cases like All-on-4 or a full-mouth restoration attainable.",
      "For treatment worth planning a trip around, the combination of expert care and dramatic savings brings patients from Las Vegas to Dr. Jimenez's chair again and again."
    ],
    travel: "From Las Vegas, Los Algodones is roughly a 4.5–5 hour drive south. Many patients plan an overnight stay near Yuma to complete larger treatment comfortably."
  },
  {
    slug: "brawley-ca",
    name: "Brawley, California",
    nav: "Brawley, CA",
    place: "Brawley, California",
    from: "patients from",
    lead: "Brawley and North Imperial Valley residents choose Dr. Jimenez for trusted, affordable cosmetic and implant dentistry.",
    body: [
      "Brawley, in the north of the Imperial Valley, is an easy drive from Los Algodones, and local residents value the quality and affordability of care at Luxe Dentistry. Dr. Jose Manuel Jimenez offers everything from routine cleanings to advanced implant and cosmetic work, all close to home.",
      "With 25 years of experience and a reputation built on hundreds of happy patients, Dr. Jimenez is a trusted choice for Brawley families seeking a healthier, more beautiful smile."
    ],
    travel: "From Brawley, drive south through the Imperial Valley to the Andrade Port of Entry near Winterhaven — under an hour. Park on the US side and walk across into Los Algodones."
  }
];

/* ---------- SERVICE CATEGORIES (systematic grouping) ---------- */
const serviceCategories = [
  {
    key: "cosmetic",
    name: "Cosmetic Dentistry",
    tagline: "Design the smile you have always wanted.",
    blurb: "Dr. Jimenez's specialty. Veneers, whitening and complete smile makeovers, crafted to look natural and suit your face.",
    slugs: ["smile-makeover", "porcelain-veneers", "cosmetic-dentistry", "teeth-whitening"],
  },
  {
    key: "implants",
    name: "Dental Implants & Restorative",
    tagline: "Replace missing teeth and rebuild your bite.",
    blurb: "From a single implant to full-arch All-on-4 and complete restorations, using premium, long-lasting materials.",
    slugs: ["dental-implants", "all-on-4-dental-implants", "full-mouth-restoration", "dental-crowns-bridges", "zirconia-crowns", "dentures"],
  },
  {
    key: "general",
    name: "General & Preventive",
    tagline: "Keep your smile healthy and pain-free.",
    blurb: "Cleanings, exams, root canals and gentle oral surgery to protect your teeth and stop small problems growing.",
    slugs: ["dental-cleaning", "root-canal", "tooth-extraction"],
  },
];

/* ---------- THE TEAM ---------- */
const team = [
  {
    name: "Dr. Jose Manuel Jimenez, DDS",
    role: "Founder, Lead Cosmetic & Implant Dentist",
    photo: "dr-jimenez.jpg",
    langs: "English, Spanish",
    bio: [
      "Dr. Jimenez founded Luxe Dentistry to bring world-class cosmetic and implant care to Los Algodones. With 25 years of experience and 15 years serving international patients here, cosmetic dentistry is his lifelong passion, and he has designed hundreds of smile makeovers.",
      "He holds a diploma from the Harvard School of Dental Medicine in Evidence-Based Implant Dentistry and an implant certificate from the Autonomous University of Baja California, and he is a member of the Mexican Dental Association (ADM).",
    ],
  },
];

// supporting roles described honestly (no invented names)
const supportTeam = [
  ["Dental Assistants", "Chairside assistants who keep every appointment calm, gentle and efficient."],
  ["Dental Laboratory Technicians", "Skilled ceramists who hand-craft your crowns, veneers and restorations for a natural fit and finish."],
  ["Patient Care & Translation Team", "Bilingual coordinators who handle scheduling, translation, border pickup and travel support."],
];

/* ---------- THE CLINIC (researched facts) ---------- */
const clinic = {
  intro: "Luxe Dentistry is a family-owned and operated clinic offering the full range of dental services in the heart of Los Algodones. Our building is a modern, spacious and comfortable space, purpose-designed so that treatment, imaging and recovery each have their own dedicated area.",
  facilities: [
    "Modern, purpose-built clinic with digital dental technology",
    "On-site pharmacy",
    "Free private, secure on-site parking",
    "Wheelchair-accessible, with accessible restrooms",
    "Comfortable, welcoming patient lounge",
    "English and Spanish spoken throughout",
  ],
  travel: [
    "Complimentary border pickup with personalized signage",
    "Airport pickup from Yuma International Airport",
    "Hotel pickup and shuttle around Los Algodones",
    "Help arranging local accommodation",
  ],
  payments: [
    "Free initial consultation",
    "Credit cards accepted",
    "Flexible payment plans",
    "US PPO dental insurance accepted",
    "Patient discounts available",
  ],
  memberships: ["Member, Mexican Dental Association (ADM)"],
  awards: ["WhatClinic Customer Service Award 2025"],
  emergency: "+1 (928) 328-1866",
  emergencyHref: "+19283281866",
};

/* ---------- VIDEO REVIEWS (real patient reels) ---------- */
// Two reels are confirmed from the clinic's Facebook. Names are left for the
// clinic to confirm; add more reel URLs to grow the wall.
const videoReviews = [
  { url: "https://www.facebook.com/reel/1633579904371173/", name: "Verified Patient", treatment: "Cosmetic & Implant Treatment", confirmName: true },
  { url: "https://www.facebook.com/reel/821641847381658/", name: "Verified Patient", treatment: "Smile Makeover", confirmName: true },
];

/* ---------- WRITTEN REVIEWS (real, sourced & attributed) ---------- */
const reviews = [
  { name: "Irene", place: "United States", stars: 5, treatment: "All-on-4 Implants, Zirconia Crowns & Bridges", text: "Jose Manuel Jimenez changed my life. He gave me back my smile." },
  { name: "Maritza", place: "United States", stars: 5, treatment: "Cosmetic & Restorative", text: "Dr. Jose Manuel Jimenez is very meticulous and a perfectionist. You will be 100% happy with the results." },
  { name: "Joyce", place: "United States", stars: 5, treatment: "Extensive Restorative Work", text: "Dr. Jose Manuel Jimenez has performed extensive dental work on me. He is very meticulous and a perfectionist." },
];

/* ---------- BEFORE & AFTER CASES (from the clinic's own Facebook) ---------- */
// Images download to assets/img with these filenames; if a file is missing the
// build renders a labelled placeholder instead of a broken image.
const beforeAfter = [
  { img: "ba-full-mouth-bruxer.webp", cat: "Full Mouth Reconstruction", title: "Full Mouth Reconstruction", tag: "Before &amp; After" },
  { img: "ba-implants.webp", cat: "Dental Implants", title: "Dental Implants", tag: "Before &amp; After" },
  { img: "ba-smile-makeover.webp", cat: "Smile Makeover", title: "Smile Makeover", tag: "Before &amp; After" },
  // Real case photos from the clinic's Facebook
  { img: "ba-fb-before.jpg", cat: "Full Mouth Rehabilitation", title: "Severely Worn Teeth", tag: "Before" },
  { img: "ba-fb-fullmouth.jpg", cat: "Full Mouth Restoration", title: "Full Mouth Restoration", tag: "After" },
  { img: "ba-fb-allon5.jpg", cat: "All-on-5 Implants", title: "Upper &amp; Lower All-on-5", tag: "After" },
];

/* ---------- Dr. Jimenez's verified credentials (real certificates) ---------- */
const credentials = [
  { img: "cred-harvard-certificate.jpg", label: "Harvard School of Dental Medicine, Evidence-Based Implant Dentistry" },
  { img: "cred-uabc-implantology.jpg", label: "Implantology Certificate, Autonomous University of Baja California" },
  { img: "cred-umsnh-degree.jpg", label: "Doctor of Dental Surgery, University of Michoacana" },
  { img: "cred-nobel-biocare.jpg", label: "Nobel Biocare Implant Training" },
];

module.exports = {
  business, services, areas,
  serviceCategories, team, supportTeam, clinic, videoReviews, reviews, beforeAfter, credentials,
};
