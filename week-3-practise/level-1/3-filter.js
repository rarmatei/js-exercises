/*
You are given a list of some London street names.
We would like to know all of the names which contain 'Lane' their name.
*/

var streetNames = [
  "Abchurch Lane",
  "Adam's Court",
  "Addle Hill",
  "Addle Street",
  "Alban Highwalk",
  "Albion Place",
  "Albion Way",
  "Aldermanbury",
  "Alderman's Walk",
  "Aldersgate Court",
  "Aldgate",
  "Allhallows Lane",
  "Amen Corner",
  "America Square",
  "Andrewes Highwalk",
  "Angel Court",
  "Angel Lane",
  "Angel Street",
  "Apothecary Street",
  "Appold Stree",
  "The Arcade",
  "Arthur Street",
  "Artillery Lane",
  "Artizan Street",
  "Ashentree Court",
  "Athene Place",
  "Austin Friars",
  "Ave Maria Lane",
  "The Avenue",
  "Back Alley",
  "Back Passage",
  "Bakers Hall Court",
  "Ball Court",
  "Baltic Street West",
  "Barbon Alley",
  "Barley Mow Passage",
  "Barnard's Inn",
  "Bartholomew Close",
  "Bartholomew Lane",
  "Bartlett Court",
  "Basinghall Avenue",
  "Bassishaw Highwalk",
  "Bastion Highwalk",
  "Bear Alley",
  "Beech Gardens",
  "Beehive Passage",
  "Bengal Court",
  "Bell Court",
  "Bell Inn Yard",
  "Bell Wharf Lane",
  "Ben Jonson Place",
  "Bennet's Hill",
  "Bevis Marks",
  "Billiter Court",
  "Birchin Lane",
  "Bishop's Court",
  "Bishopsgate",
  "Blackfriars Bridge",
  "Blackfriars Court",
  "Blackfriars Lane",
  "Blackfriars Passage",
  "Blomfield Street",
  "Bloomberg Arcade",
  "Bolt Court",
  "Bond Court",
  "Booth Lane",
  "Botolph Alley",
  "Bouverie Street",
  "Bow Churchyard",
  "Brabant Court",
  "Brackley Street",
  "Braidwood Passage",
  "Brandon Mews",
  "Bread Street",
  "Bream's Buildings",
  "Breton Highwalk",
  "Brewer's Hall Gardens",
  "Brick Court",
  "Bride Court",
  "Bridewell Place",
  "Bridgewater Highwalk",
  "Britannic Highwalk",
  "Broadgate",
  "Broad Lane",
  "Broken Wharf",
  "Brown's Buildings",
  "Brushfield Street",
  "Bucklersbury",
  "Budge Row",
  "Bull's Head Passage",
  "Bunyan Court",
  "Burgon Street",
  "Bury Court",
  "Bush Lane",
  "Byward Street",
  "Camomile Street",
  "Canon Alley",
  "Cannon Street",
  "Capel Court",
  "Carlisle Avenue",
  "Carmelite Street",
  "Carter Court",
  "Carthusian Street",
  "Castle Baynard Street",
  "Castle Court",
  "Catherine Wheel Alley",
  "Cavendish Court",
  "Chancery Lane",
  "Change Alley",
  "Charterhouse Square",
  "Cheapside",
  "Cheshire Court",
  "Chiswell Street",
  "Church Cloisters",
  "Church Court",
  "Church Entry",
  "Circus Place",
  "Clements Lane",
  "Clerk's Place",
  "Clifford's Inn Passage",
  "Cloak Lane",
  "Cloth Court",
  "Clothier Street",
  "Cobb's Court",
  "Cock Hill",
  "Cock Lane",
  "Coleman Street",
  "College Hill",
  "Compter Passage",
  "Cooper's Row",
  "Copthall Avenue",
  "Corbet Court",
  "Cornhill",
  "Cousin Lane",
  "Cowper's Court",
  "Crane Court",
  "Creechurch Lane",
  "Creed Court",
  "Crescent",
  "Cripplegate Street",
  "Cromwell Highwalk",
  "Crosby Square",
  "Cross Keys Square",
  "Cross Lane",
  "Crosswall",
  "Crown Court",
  "Crown Office Row",
  "Crutched Friars",
  "Cullum Street",
  "Cunard Place",
  "Cursitor Street",
  "Custom House Walk",
  "Cutler Street",
  "Dark House Walk",
  "Dean's Court",
  "Defoe Place",
  "Devonshire Row",
  "Distaff Lane",
  "Doby Court",
  "Dorset Buildings",
  "Dowgate Hill",
  "Drapers Gardens",
  "Dukes Place",
  "Dunster Court",
  "Dyer's Buildings",
  "Eastcheap",
  "East Harding Street",
  "East Passage",
  "East Poultry Avenue",
  "Eldon Street",
  "Elm Court",
  "Essex Court",
  "Exchange Arcade",
  "Falcon Court",
  "Falcon Highwalk",
  "Fann Street",
  "Farringdon Street",
  "Fen Court",
  "Fetter Lane",
  "Finch Lane",
  "Finsbury Avenue",
  "Fish Street Hill",
  "Fishmongers Hall Wharf",
  "Fleet Place",
  "Fore Street",
  "Fort Street",
  "Foster Lane",
  "Founders' Court",
  "Fountain Court",
  "Frederick's Place",
  "French Ordinary Court",
  "Friar Street",
  "Friday Street",
  "Frobisher Crescent",
  "Fruiterers Passage",
  "Furnival Street",
  "Fye Foot Lane",
  "Garden Court",
  "Gardner's Lane",
  "Garlick Hill",
  "George Yard",
  "Giltspur Street",
  "Gloucester Court",
  "Godliman Street",
  "Golden Lane",
  "Goldsmith Street",
  "Goodman's Court",
  "Gophir Lane",
  "Goring Street",
  "Goswell Road",
  "Gough Square",
  "Gracechurch Street",
  "Grand Avenue",
  "Grant's Quay Wharf",
  "Gravel Lane",
  "Great Bell Alley",
  "Great Eastern Walk",
  "Great New Street",
  "Great St Helen's",
  "Great St Thomas Apostle",
  "Great Swan Alley",
  "Great Tower Street",
  "Great Trinity Lane",
  "Great Winchester Street",
  "Green Arbour Court",
  "The Green Yard",
  "Gresham Street",
  "Greyfriars Passage",
  "Greystoke Place",
  "Grocer's Hall Court",
  "Groveland Court",
  "Guildhall Buildings",
  "Guinness Court",
  "Gunpowder Square",
  "Gutter Lane",
  "Half Moon Court",
  "Hammett Street",
  "Hanging Sword Alley",
  "Hanseatic Walk",
  "Hare Place",
  "Harp Alley",
  "Harp Lane",
  "Harrow Place",
  "Hart Street",
  "Hartshorn Alley",
  "Haydon Street",
  "Hayne Street",
  "Hen",
  "Heneage Lane",
  "High Holborn",
  "High Timber Street",
  "Hind Court",
  "Hogarth Court",
  "Honey Lane",
  "Hood Court",
  "Hope Square",
  "Hosier Lane",
  "Houndsditch",
  "Huggin Court",
  "Hutton Street",
  "Idol Lane",
  "India Street",
  "Inner Temple Lane",
  "Ireland Yard",
  "Ironmonger Lane",
  "Jewry Street",
  "John Carpenter Street",
  "John Milton Passage",
  "John Trundle Highwalk",
  "John Wesley Highwalk",
  "Johnsons Court",
  "Keats Place",
  "Kennett Wharf Lane",
  "Kinghorn Street",
  "Kingscote Street",
  "King Street",
  "King Edward Street",
  "King William Street",
  "King's Arms Yard",
  "King's Bench Walk",
  "Knightrider Court",
  "Lakeside Terrace",
  "Lambert Jones Mews",
  "Lambeth Hill",
  "Langthorn Court",
  "Lauderdale Place",
  "Laurence Pountney Hill",
  "Lawrence Lane",
  "Leadenhall Market",
  "Lime Street",
  "Limeburner Lane",
  "Lindsey Street",
  "Little Britain",
  "Little Somerset Street",
  "Liverpool Street",
  "Lloyd's Avenue",
  "Lombard Court",
  "Lombard Street",
  "London Bridge",
  "London Street",
  "London Wall",
  "Long Lane",
  "Lothbury",
  "Lovat Street",
  "Love Lane",
  "Lower Thames Street",
  "Ludgate Broadway",
  "Mac's Place",
  "Magpie Alley",
  "Mansell Street",
  "Mansion House Place",
  "Mark Lane",
  "Martin Lane",
  "Mason's Avenue",
  "Middle Street",
  "Middlesex Passage",
  "Middlesex Street",
  "Middle Temple Lane",
  "Milk Street",
  "Millennium Bridge",
  "Milton Court",
  "Mincing Lane",
  "Minerva Walk",
  "Miniver Place",
  "Minories",
  "Minster Court",
  "Mitre Square",
  "Modern Court",
  "Monkwell Square",
  "Montague Street",
  "Monument Street",
  "Moorfields",
  "Moorgate",
  "Moor Lane",
  "Muscovy Street",
  "Nettleton Court",
  "Nevill Lane",
  "New Bell Yard",
  "New Bridge Street",
  "Newbury Street",
  "Newcastle Close",
  "Newcastle Court",
  "New Change",
  "New Court",
  "Newgate Street",
  "Newman's Court",
  "New Street",
  "New Union Street",
  "Nicholas Lane",
  "Noble Street",
  "Northumberland Alley",
  "Norton Folgate",
  "Norwich Street",
  "Nun Court",
  "Oat Lane",
  "Octagon Arcade",
  "Old Bailey",
  "Old Billingsgate Walk",
  "Old Jewry",
  "Old Mitre Court",
  "Old Seacole Lane",
  "Old Watermen's Walk",
  "Outwich Street",
  "Oystergate Walk",
  "Oxford Court",
  "Pageantmaster Court",
  "Pancras Lane",
  "Panyer Alley",
  "Paternoster Lane",
  "Paul's Walk",
  "Pemberton Row",
  "Pepys Street",
  "Peterborough Court",
  "Peter's Hill",
  "Petty Wales",
  "Philpot Lane",
  "Pilgrim Street",
  "Pindar Street",
  "Pinner's Passage",
  "Plaisterers Highwalk",
  "Plantation Lane",
  "Playhouse Yard",
  "Pleydell Court",
  "Plough Court",
  "Plough Place",
  "Plumtree Court",
  "Pope's Head Alley",
  "Poppins Court",
  "Portsoken Street",
  "Post Office Court",
  "Poultry",
  "Priest's Court",
  "Primrose Hill",
  "Primrose Street",
  "Prince's Street",
  "Printers Inn Court",
  "Printer Street",
  "Priory Court",
  "Prudent Passage",
  "Pudding Lane",
  "Puddle Dock",
  "Pump Court",
  "Quality Court",
  "Queenhithe",
  "Queen Isabella Way",
  "Queens Head Passage",
  "Queen Street",
  "Queen Victoria Street",
  "Rangoon Street",
  "Red Lion Court",
  "Regent Street",
  "Rising Sun Court",
  "Robin Hood Court",
  "Rolls Buildings",
  "Rood Lane",
  "Ropemaker Street",
  "Rose Alley",
  "Rose",
  "Rose Street",
  "Royal Exchange Avenue",
  "Russia Row",
  "St Alphage Garden",
  "St Andrew Street",
  "St Andrew's Hill",
  "St Benet's Place",
  "St Botolph Row",
  "St Clare Street",
  "St Dunstan's Alley",
  "St Dunstan's Court",
  "St Georges Court",
  "St Giles Terrace",
  "St James's Passage",
  "St Katherine's Row",
  "St Margaret's Close",
  "St Martin's le Grand",
  "St Mary at Hill",
  "St Mary Axe",
  "St Michael's Alley",
  "St Mildred's Court",
  "St Olave's Court",
  "St Paul's Churchyard",
  "St Peter's Alley",
  "St Swithins Lane",
  "Salisbury Court",
  "Salters Court",
  "Salter's Hall Court",
  "Sandy's Row",
  "Saracens Head Yard",
  "Savage Gardens",
  "Scott's Lane",
  "Seething Lane",
  "Serjeants Inn",
  "Sermon Lane",
  "Shafts Court",
  "Sherborne Lane",
  "Ship Tavern Passage",
  "Shoe Lane",
  "Shorter Street",
  "Silk Street",
  "Sise Lane",
  "Skinners Lane",
  "Smithfield Street",
  "Snow Hill",
  "Southampton Buildings",
  "South Place",
  "Southwark Bridge",
  "Speed Highwalk",
  "Staining Lane",
  "Staple Inn",
  "Star Alley",
  "Stationer's Hall Court",
  "Steelyard Passage",
  "Stew Lane",
  "Stonecutter Street",
  "Stone House Court",
  "Stoney Lane",
  "Suffolk Lane",
  "Sugar Bakers Court",
  "Sugar Quay Walk",
  "Sun Court",
  "Sun Street",
  "Swan Lane",
  "Swedeland Court",
  "Talbot Court",
  "Tallis Street",
  "Telegraph Street",
  "Temple Avenue",
  "The Terrace",
  "Thavies Inn",
  "Thomas More Highwalk",
  "Threadneedle Street",
  "Three Barrels Walk",
  "Three Cranes Walk",
  "Three Nun Court",
  "Three Quays Walk",
  "Throgmorton Avenue",
  "Tokenhouse Yard",
  "Took's Court",
  "Tower Hill Terrace",
  "Tower Royal",
  "Trig Lane",
  "Trinity Square",
  "Trump Street",
  "Tudor Street",
  "Turnagain Lane",
  "Undershaft",
  "Union Court",
  "Victoria Avenue",
  "Victoria Embankment",
  "Vine Street",
  "Vintners Court",
  "Viscount Street",
  "Waithman Street",
  "Walbrook",
  "Wardrobe Place",
  "Warwick Lane",
  "Watergate",
  "Water Lane",
  "Watling Court",
  "Well Court",
  "Whalebone Court",
  "Whitecross Place",
  "Whitecross Street",
  "Whitefriars Street",
  "White Hart Court",
  "White Hart Street",
  "White Horse Yard",
  "White Kennett Street",
  "White Lion Court",
  "White Lion Hill",
  "White Lyon Court",
  "Whittington Avenue",
  "Widegate Street",
  "Willoughby Highwalk",
  "Wilson Street",
  "Wine Office Court",
  "Wood Street",
  "Wormwood Street",
  "Wrestler's Court"
];

function streetContainLane(name) {
  return name.includes("Lane");
}
var laneNames = streetNames.filter(streetContainLane); // Complete this line

console.log(laneNames);
console.log(laneNames.length);

/* EXPECTED OUTPUT
----------------------
[ 'Abchurch Lane',
 'Allhallows Lane',
 ... many more ...
 'Water Lane' ]
74
*/
