import React from 'react'
import egypt1 from '../assets/egypt1.png'
import egypt2 from '../assets/egypt2.png'
import egypt3 from '../assets/egypt3.jpg'
import egypt4 from '../assets/egypt4.jpg'
import egypt5 from '../assets/egypt5.jpg'
import egypt6 from '../assets/egypt6.jpg'
import egypt7 from '../assets/egypt7.jpg'
import egypt8 from '../assets/egypt8.jpg'
import Modal from './Modal'

const Egypt = () => {
  return (
    <div className="m-8">
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Ancient Egypt</p>
          <p className="mt-4">
            Ancient Egypt was a civilization of ancient Northeast Africa. It was
            concentrated along the lower reaches of the Nile River, situated in
            the place that is now the country Egypt. Ancient Egyptian
            civilization followed prehistoric Egypt and coalesced around 3100 BC
            (according to conventional Egyptian chronology) with the political
            unification of Upper and Lower Egypt under Menes (often identified
            with Narmer). The history of ancient Egypt unfolded as a series of
            stable kingdoms interspersed by periods of relative instability
            known as "Intermediate Periods". The various kingdoms fall into one
            of three categories: the Old Kingdom of the Early Bronze Age, the
            Middle Kingdom of the Middle Bronze Age, or the New Kingdom of the
            Late Bronze Age.
          </p>
          <p className="mt-4">
            Ancient Egypt reached the pinnacle of its power during the New
            Kingdom, ruling much of Nubia and a sizable portion of the Levant.
            After this period, it entered an era of slow decline. During the
            course of its history, ancient Egypt was invaded or conquered by a
            number of foreign powers, including the Hyksos, the Nubians, the
            Assyrians, the Achaemenid Persians, and the Macedonians under
            Alexander the Great. The Greek Ptolemaic Kingdom, formed in the
            aftermath of Alexander's death, ruled until 30 BC, when, under
            Cleopatra, it fell to the Roman Empire and became a Roman province.
            Egypt remained under Roman control until the 640s AD, when it was
            conquered by the Rashidun Caliphate.
          </p>
          <div className="hidden lg:flex justify-center items-center mt-4">
            <p className="mt-auto inline justify-center items-center bg-[var(--primary-yellow)] p-5 rounded-md border-2 border-[var(--primary-red)]">
              <span className="text-[var(--primary-red)] font-bold m-1">
                Kemet
              </span>
              was the name used by the ancient egyptians to call their country.
            </p>
          </div>
        </div>
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt1}
            title={'Map of Ancient Egypt'}
            description={
              'Map of Ancient Egypt, showing the Nile up to the fifth cataract, and major cities and sites of the Dynastic period (c. 3150 BC to 30 BC). Cairo and Jerusalem are shown as reference cities.'
            }
            height1={'500px'}
            height2={'300px'}
          />
        </div>
      </div>
      <div className="flex justify-center items-center lg:hidden mt-4">
        <p className="mt-auto inline justify-center items-center bg-[var(--primary-yellow)] p-5 rounded-md border-2 border-[var(--primary-red)]">
          <span className="text-[var(--primary-red)] font-bold m-1">Kemet</span>
          was the name used by the ancient egyptians to call their country.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt2}
            title={'The Pharaoh'}
            description={
              'Pharaoh, the king of ancient Egypt, is often depicted wearing the nemes headdress and an ornate shendyt. Based on New Kingdom tomb paintings.'
            }
            height1={'500px'}
            height2={'300px'}
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Government and economy</p>
          <p className="mt-4">
            The pharaoh was the absolute monarch of the country and, at least in
            theory, wielded complete control of the land and its resources. The
            king was the supreme military commander and head of the government,
            who relied on a bureaucracy of officials to manage his affairs. In
            charge of the administration was his second in command, the vizier,
            who acted as the king's representative and coordinated land surveys,
            the treasury, building projects, the legal system, and the archives.
            At a regional level, the country was divided into as many as 42
            administrative regions called nomes each governed by a nomarch, who
            was accountable to the vizier for his jurisdiction. The temples
            formed the backbone of the economy. Not only were they places of
            worship, but were also responsible for collecting and storing the
            kingdom's wealth in a system of granaries and treasuries
            administered by overseers, who redistributed grain and goods.
          </p>
          <p className="mt-4">
            Much of the economy was centrally organized and strictly controlled.
            Although the ancient Egyptians did not use coinage until the Late
            period, they did use a type of money-barter system, with standard
            sacks of grain and the deben, a weight of roughly 91 grams (3 oz) of
            copper or silver, forming a common denominator. Workers were paid in
            grain; a simple laborer might earn 5+1⁄2 sacks (200 kg or 400 lb) of
            grain per month, while a foreman might earn 7+1⁄2 sacks (250 kg or
            550 lb). Prices were fixed across the country and recorded in lists
            to facilitate trading; for example a shirt cost five copper deben,
            while a cow cost 140 deben. Grain could be traded for other goods,
            according to the fixed price list. During the fifth century BC
            coined money was introduced into Egypt from abroad. At first the
            coins were used as standardized pieces of precious metal rather than
            true money, but in the following centuries international traders
            came to rely on coinage.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Social status</p>
          <p className="mt-4">
            Egyptian society was highly stratified, and social status was
            expressly displayed. Farmers made up the bulk of the population, but
            agricultural produce was owned directly by the state, temple, or
            noble family that owned the land. Farmers were also subject to a
            labor tax and were required to work on irrigation or construction
            projects in a corvée system. Artists and craftsmen were of higher
            status than farmers, but they were also under state control, working
            in the shops attached to the temples and paid directly from the
            state treasury. Scribes and officials formed the upper class in
            ancient Egypt, known as the "white kilt class" in reference to the
            bleached linen garments that served as a mark of their rank. The
            upper class prominently displayed their social status in art and
            literature. Below the nobility were the priests, physicians, and
            engineers with specialized training in their field. It is unclear
            whether slavery as understood today existed in ancient Egypt; there
            is difference of opinions among authors.
          </p>
          <p className="mt-4">
            The ancient Egyptians viewed men and women, including people from
            all social classes, as essentially equal under the law, and even the
            lowliest peasant was entitled to petition the vizier and his court
            for redress. Although slaves were mostly used as indentured
            servants, they were able to buy and sell their servitude, work their
            way to freedom or nobility, and were usually treated by doctors in
            the workplace. Both men and women had the right to own and sell
            property, make contracts, marry and divorce, receive inheritance,
            and pursue legal disputes in court. Married couples could own
            property jointly and protect themselves from divorce by agreeing to
            marriage contracts, which stipulated the financial obligations of
            the husband to his wife and children should the marriage end.
            Compared with their counterparts in ancient Greece, Rome, and even
            more modern places around the world, ancient Egyptian women had a
            greater range of personal choices, legal rights, and opportunities
            for achievement. Women such as Hatshepsut and Cleopatra VII even
            became pharaohs, while others wielded power as Divine Wives of Amun.
            Despite these freedoms, ancient Egyptian women did not often take
            part in official roles in the administration, aside from the royal
            high priestesses, apparently served only secondary roles in the
            temples (not much data for many dynasties), and were not so probably
            to be as educated as men.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex justify-center items-center">
          <Modal
            image={egypt3}
            title={'Noble in the New Kingdom'}
            description={
              'Painted limestone relief of a noble member of Ancient Egyptian society during the New Kingdom. Relief of a Nobleman, ca. 1295-1070 B.C.E. Limestone, painted, 20 3/16 x 17 1/4 in. (51.3 x 43.8 cm). Brooklyn Museum, Charles Edwin Wilbour Fund, 36.261.'
            }
            height1={'450px'}
            height2={'250px'}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8">
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt4}
            title={'Ebers Papyrus'}
            description={
              'Reproduction of the Ebers Papyrus General Collections. Is an Egyptian medical papyrus of herbal knowledge dating to c. 1550 BC (the late Second Intermediate Period or early New Kingdom).'
            }
            height1={'450px'}
            height2={'250px'}
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Language</p>
          <p className="mt-4">
            The Egyptian language is a northern Afro-Asiatic language closely
            related to the Berber and Semitic languages. It has the longest
            known history of any language having been written from c. 3200 BC to
            the Middle Ages and remaining as a spoken language for longer. The
            phases of ancient Egyptian are Old Egyptian, Middle Egyptian
            (Classical Egyptian), Late Egyptian, Demotic and Coptic. Egyptian
            writings do not show dialect differences before Coptic, but it was
            probably spoken in regional dialects around Memphis and later
            Thebes.
          </p>
          <p className="mt-4">
            Ancient Egyptian was a synthetic language, but it became more
            analytic later on. Late Egyptian developed prefixal definite and
            indefinite articles, which replaced the older inflectional suffixes.
            There was a change from the older verb–subject–object word order to
            subject–verb–object. The Egyptian hieroglyphic, hieratic, and
            demotic scripts were eventually replaced by the more phonetic Coptic
            alphabet. Coptic is still used in the liturgy of the Egyptian
            Orthodox Church, and traces of it are found in modern Egyptian
            Arabic.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Architecture</p>
          <p className="mt-4">
            The architecture of ancient Egypt includes some of the most famous
            structures in the world: the Great Pyramids of Giza and the temples
            at Thebes. Building projects were organized and funded by the state
            for religious and commemorative purposes, but also to reinforce the
            wide-ranging power of the pharaoh. The ancient Egyptians were
            skilled builders; using only simple but effective tools and sighting
            instruments, architects could build large stone structures with
            great accuracy and precision that is still envied today.
          </p>
          <p className="mt-4">
            The earliest preserved ancient Egyptian temples, such as those at
            Giza, consist of single, enclosed halls with roof slabs supported by
            columns. In the New Kingdom, architects added the pylon, the open
            courtyard, and the enclosed hypostyle hall to the front of the
            temple's sanctuary, a style that was standard until the Greco-Roman
            period. The earliest and most popular tomb architecture in the Old
            Kingdom was the mastaba, a flat-roofed rectangular structure of
            mudbrick or stone built over an underground burial chamber. The step
            pyramid of Djoser is a series of stone mastabas stacked on top of
            each other. Pyramids were built during the Old and Middle Kingdoms,
            but most later rulers abandoned them in favor of less conspicuous
            rock-cut tombs. The use of the pyramid form continued in private
            tomb chapels of the New Kingdom and in the royal pyramids of Nubia.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 mt-20 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt5}
            title={'Temple of Isis'}
            description={
              'The well preserved Temple of Isis from Philae is an example of Egyptian architecture and architectural sculpture.'
            }
            height1={'300px'}
            height2={'180px'}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt6}
            title={'Osiris, Anubis, and Horus'}
            description={
              'The gods Osiris, Anubis, and Horus in the tomb of Horemheb (KV57) in the Valley of the Kings. Detail of the frieze of the wells in the tomb of Pharaoh Horemheb.'
            }
            height1={'500px'}
            height2={'300px'}
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Religious Beliefs</p>
          <p className="mt-4">
            Beliefs in the divine and in the afterlife were ingrained in ancient
            Egyptian civilization from its inception; pharaonic rule was based
            on the divine right of kings. The Egyptian pantheon was populated by
            gods who had supernatural powers and were called on for help or
            protection. However, the gods were not always viewed as benevolent,
            and Egyptians believed they had to be appeased with offerings and
            prayers. The structure of this pantheon changed continually as new
            deities were promoted in the hierarchy, but priests made no effort
            to organize the diverse and sometimes conflicting myths and stories
            into a coherent system. These various conceptions of divinity were
            not considered contradictory but rather layers in the multiple
            facets of reality.
          </p>
          <p className="mt-4">
            Gods were worshiped in cult temples administered by priests acting
            on the king's behalf. At the center of the temple was the cult
            statue in a shrine. Temples were not places of public worship or
            congregation, and only on select feast days and celebrations was a
            shrine carrying the statue of the god brought out for public
            worship. Normally, the god's domain was sealed off from the outside
            world and was only accessible to temple officials. Common citizens
            could worship private statues in their homes, and amulets offered
            protection against the forces of chaos. After the New Kingdom, the
            pharaoh's role as a spiritual intermediary was de-emphasized as
            religious customs shifted to direct worship of the gods. As a
            result, priests developed a system of oracles to communicate the
            will of the gods directly to the people.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12">
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Military</p>
          <p className="mt-4">
            The ancient Egyptian military was responsible for defending Egypt
            against foreign invasion, and for maintaining Egypt's domination in
            the ancient Near East. The military protected mining expeditions to
            the Sinai during the Old Kingdom and fought civil wars during the
            First and Second Intermediate Periods. The military was responsible
            for maintaining fortifications along important trade routes, such as
            those found at the city of Buhen on the way to Nubia. Forts also
            were constructed to serve as military bases, such as the fortress at
            Sile, which was a base of operations for expeditions to the Levant.
            In the New Kingdom, a series of pharaohs used the standing Egyptian
            army to attack and conquer Kush and parts of the Levant.
          </p>
          <p className="mt-4">
            Typical military equipment included bows and arrows, spears, and
            round-topped shields made by stretching animal skin over a wooden
            frame. In the New Kingdom, the military began using chariots that
            had earlier been introduced by the Hyksos invaders. Weapons and
            armor continued to improve after the adoption of bronze: shields
            were now made from solid wood with a bronze buckle, spears were
            tipped with a bronze point, and the khopesh was adopted from Asiatic
            soldiers. The pharaoh was usually depicted in art and literature
            riding at the head of the army; it has been suggested that at least
            a few pharaohs, such as Seqenenre Tao II and his sons, did do so.
            However, it has also been argued that "kings of this period did not
            personally act as frontline war leaders, fighting alongside their
            troops". Soldiers were recruited from the general population, but
            during, and especially after, the New Kingdom, mercenaries from
            Nubia, Kush, and Libya were hired to fight for Egypt.
          </p>
        </div>
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex justify-center items-center">
          <Modal
            image={egypt7}
            title={'The Hyksos of Ancient Egypt drove chariots'}
            description={
              'Modern loose interpretation at the The Pharaonic Village in Cairo of a Battle scene from the Great Kadesh reliefs of Ramses II on the Walls of the Ramesseum.'
            }
            height1={'300px'}
            height2={'180px'}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-12 mt-8">
        <div className="col-span-1 md:col-span-5 mt-20 lg:mt-0 lg:col-span-4 flex items-center justify-center">
          <Modal
            image={egypt8}
            title={"Frontispiece of Description de l'Égypte"}
            description={
              'Frontispiece to The Description of Egypt, a book in the public domain for some time and published by the French government from 1809-1823.'
            }
            height1={'500px'}
            height2={'300px'}
          />
        </div>
        <div className="col-span-1 md:col-span-7 lg:col-span-8">
          <p className="mt-8 font-bold text-4xl">Legacy</p>
          <p className="mt-4">
            The culture and monuments of ancient Egypt have left a lasting
            legacy on the world. Egyptian civilization significantly influenced
            the Kingdom of Kush and Meroë with both adopting Egyptian religious
            and architectural norms (hundreds of pyramids (6–30 meters high)
            were built in Egypt/Sudan), as well as using Egyptian writing as the
            basis of the Meroitic script. Meroitic is the oldest written
            language in Africa, other than Egyptian, and was used from the 2nd
            century BC until the early 5th century AD. The cult of the goddess
            Isis, for example, became popular in the Roman Empire, as obelisks
            and other relics were transported back to Rome. The Romans also
            imported building materials from Egypt to erect Egyptian-style
            structures. Early historians such as Herodotus, Strabo, and Diodorus
            Siculus studied and wrote about the land, which Romans came to view
            as a place of mystery.
          </p>
          <p className="mt-4">
            During the Middle Ages and the Renaissance, Egyptian pagan culture
            was in decline after the rise of Christianity and later Islam, but
            interest in Egyptian antiquity continued in the writings of medieval
            scholars such as Dhul-Nun al-Misri and al-Maqrizi. In the
            seventeenth and eighteenth centuries, European travelers and
            tourists brought back antiquities and wrote stories of their
            journeys, leading to a wave of Egyptomania across Europe, as evident
            in symbolism such as the Eye of Providence and the Great Seal of the
            United States. This renewed interest sent collectors to Egypt, who
            took, purchased, or were given many important antiquities. Napoleon
            arranged the first studies in Egyptology when he brought some 150
            scientists and artists to study and document Egypt's natural
            history, which was published in the Description de l'Égypte.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Egypt
