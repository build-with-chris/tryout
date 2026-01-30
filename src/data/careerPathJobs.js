// Job-Daten für Karrierepfad-Komponente
// Strukturiert nach Bereich (Vertrieb/Logistik/Verwaltung) und Kategorie (Ausbildung/Professionals)

export const careerPathJobs = {
  markt: {
    ausbildung: [
      {
        id: 'markt-ausbildung-1',
        title: 'Verkäufer (m/w/d)',
        shortDescription: 'Kundenberatung und Verkauf stehen im Mittelpunkt. Du führst Beratungs- und Verkaufsgespräche, präsentierst Waren ansprechend und bedienst digitale Kassen- und Marktsysteme.',
        tasks: [
          'Führen von Beratungs- und Verkaufsgesprächen',
          'Ansprechende Warenpräsentation',
          'Warenannahme und -lagerung',
          'Umsetzung von Verkaufsförderungsmaßnahmen',
          'Bedienung digitaler Kassen- und Marktsysteme'
        ],
        profile: [
          'Spaß am Umgang mit Menschen und am Verkauf',
          'Zuverlässig und teamfähig',
          'Gepflegtes Auftreten'
        ],
        benefits: [
          'Strukturierte Ausbildung mit Praxis und Berufsschule',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-2',
        title: 'Kaufmann im Einzelhandel (m/w/d)',
        shortDescription: 'Drei-jährige Ausbildung mit erweiterten Aufgaben im Markt. Du organisierst Waren und den gesamten Markt, setzt Verkaufsförderungsaktionen um und arbeitest mit digitalen Systemen.',
        tasks: [
          'Kunden beraten und Verkaufsgespräche führen',
          'Organisation der Waren und des gesamten Marktes (Bestandsaufnahme, Warenbeschaffung, Personaleinsatzplanung)',
          'Werbe- und Verkaufsförderungsaktionen passend zu Trends umsetzen',
          'Digitale Kassensysteme anwenden',
          'Verkaufsstatistiken ermitteln und auswerten'
        ],
        profile: [
          'Interesse am Einzelhandel und an kaufmännischen Aufgaben',
          'Organisatorisches Geschick',
          'Teamfähig und kommunikationsstark',
          'Guter Hauptschulabschluss oder Mittlere Reife'
        ],
        benefits: [
          'Drei-jährige strukturierte Ausbildung',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Weiterbildungsmöglichkeiten und Karriereperspektiven'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-4',
        title: 'Ausbildung im Abiturientenprogramm zur Führungskraft im Einzelhandel (m/w/d)',
        shortDescription: 'Kombinierte Aus- und Fortbildung (Handelsfachwirt). In drei Jahren werden Verkäufer/Kaufmann-Abschluss und Führungsqualifikation erworben.',
        tasks: [
          'Kunden beraten und Verkaufsgespräche führen',
          'Mit digitalen Marktsystemen arbeiten',
          'Waren beschaffen, lagern und kontrollieren',
          'Organisation des gesamten Marktes (Personalplanung, Mitarbeiterführung)',
          'Projekte z.B. zur Kundenbindung oder Qualitätssicherung umsetzen',
          'Verkaufsstatistiken auswerten sowie Wirtschaftlichkeit prüfen (z.B. Bestandskontrollen)'
        ],
        profile: [
          'Abitur oder Fachabitur',
          'Interesse an Führungsaufgaben',
          'Organisatorisches Geschick und Verantwortungsbewusstsein',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombinierte Aus- und Fortbildung zum Handelsfachwirt',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-5',
        title: 'Duales Bachelor Studium BWL – Studienrichtung Handel',
        shortDescription: 'Kombination aus Hochschulstudium und Praxis im Markt. Während der Praxisphasen stehen die Vorbereitung auf Führungsaufgaben und bereichsübergreifende Einsätze im Fokus.',
        tasks: [
          'Mitarbeit in verschiedenen Unternehmensbereichen (Markt, Logistik, Verwaltung)',
          'Vertretungs-Einsätze zur Vorbereitung auf Führungsposition',
          'Begleitung von Außendienst-Einsätzen (z.B. mit Vertriebsleitung, bei Umbauten/Neueröffnungen)',
          'Kennenlernen der Schnittstellen zwischen Markt, Verwaltung und Logistik',
          'Teilnahme an Seminaren (z.B. Systemschulungen, Arbeitsrecht)'
        ],
        profile: [
          'Abitur oder Fachabitur',
          'Interesse an Betriebswirtschaftslehre und Handel',
          'Bereitschaft zu bereichsübergreifenden Einsätzen',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombination aus Studium und Praxis',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme nach erfolgreichem Abschluss',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Duales Studium',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'markt-professionals-1',
        title: 'Aushilfe/Minijob (mit Kassiertätigkeit)',
        shortDescription: 'Unterstützt stundenweise den Markt, vor allem an der Kasse und im Verkauf. Die Aufgaben entsprechen im Kern denen eines Kassierers/Verkäufers.',
        tasks: [
          'Kassieren und korrekte Abrechnung sicherstellen',
          'Sauberkeit und Ordnung im Kassenbereich gewährleisten',
          'Waren verräumen und auf Vollständigkeit sowie Qualität prüfen',
          'Kunden freundlich bedienen und beraten'
        ],
        profile: [
          'Spaß am Umgang mit Menschen',
          'Zuverlässig und gewissenhaft',
          'Flexibel einsetzbar',
          'Gepflegtes Auftreten'
        ],
        benefits: [
          'Flexible Arbeitszeiten',
          'Meist auf 450€-Basis (Minijob)',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung'
        ],
        workModel: 'Minijob / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-2',
        title: 'Marktmanager/Filialleitung (mit Perspektive zur Selbstständigkeit)',
        shortDescription: 'Als Filialleitung trägst du die Gesamtverantwortung für einen Supermarkt. Diese Position bietet auch die Perspektive zur Selbstständigkeit.',
        tasks: [
          'Umsetzung des REWE-Vertriebskonzepts und Durchführung von Werbe- und Verkaufsaktionen',
          'Steuerung von Umsatz-, Kosten- und Inventurentwicklung',
          'Mitarbeiterführung als Vorbild mit wertschätzender Kultur',
          'Verantwortung für Sortimentsgestaltung und Qualitätsmanagement',
          'Sicherstellung effizienter Warensteuerung und Einhaltung aller gesetzlichen sowie internen Vorgaben'
        ],
        profile: [
          'Abgeschlossene Ausbildung im Einzelhandel oder vergleichbare Qualifikation',
          'Erste Führungserfahrung wünschenswert',
          'Starkes Verantwortungsbewusstsein und Entscheidungsfähigkeit',
          'Teamfähig und kommunikationsstark',
          'Kundenorientiert und ergebnisorientiert'
        ],
        benefits: [
          'Perspektive zur Selbstständigkeit: Möglichkeit, einen eigenen REWE-Markt als Kaufmann/frau zu führen',
          'Attraktive Vergütung und Sonderzahlungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Unbefristetes Arbeitsverhältnis'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-3',
        title: 'Verkäufer (mit Kassiertätigkeit)',
        shortDescription: 'Verkaufskraft im Markt mit Schwerpunkt Kasse. Die Aufgaben überschneiden sich mit denen einer Aushilfe an der Kasse.',
        tasks: [
          'Kassiervorgänge durchführen und korrekt abrechnen',
          'Kassenbereich sauber halten',
          'Waren einräumen und Qualität kontrollieren',
          'Kunden durch freundliches Auftreten und kompetente Beratung begeistern'
        ],
        profile: [
          'Spaß am Umgang mit Menschen',
          'Zuverlässig und gewissenhaft',
          'Gepflegtes Auftreten',
          'Teamfähig'
        ],
        benefits: [
          'Teilzeit- oder Vollzeitstellen im Verkauf mit Kassenverantwortung',
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung',
          'Entwicklungsmöglichkeiten'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-5',
        title: 'Marktmanager Assistent / Stellvertretende Filialleitung',
        shortDescription: 'Unterstützt den Marktmanager bei allen laufenden Aufgaben und vertritt ihn bei Abwesenheit. Diese Position ist häufig der Schritt zur eigenen Marktleitung.',
        tasks: [
          'Mitverantwortung für Umsetzung des Vertriebskonzepts und entsprechender Werbe-/Verkaufsmaßnahmen',
          'Mitsteuerung von Umsatz-, Kosten- und Inventurentwicklungen sowie Qualitätsmanagement',
          'Überwachung der Einhaltung gesetzlicher und betrieblicher Vorgaben im Markt',
          'Aktive Mitarbeit im Team und Dienstplanerstellung',
          'Führung des Teams auf Augenhöhe und als erste Ansprechperson',
          'Sicherstellung einer exzellenten Kundenbetreuung im Markt'
        ],
        profile: [
          'Abgeschlossene Ausbildung im Einzelhandel',
          'Erste Erfahrung in Führungsaufgaben wünschenswert',
          'Organisatorisches Geschick',
          'Teamfähig und kommunikationsstark',
          'Verantwortungsbewusst'
        ],
        benefits: [
          'Häufig der Schritt zur eigenen Marktleitung',
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Unbefristetes Arbeitsverhältnis'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-6',
        title: 'Mitarbeitende in den Bereichen Getränkemarkt, Convenience, MoPro, Backshop, Imbiss warme Speisen',
        shortDescription: 'In größeren Märkten gibt es spezialisierte Verkaufsmitarbeiter für verschiedene Fachbereiche.',
        tasks: [
          'Getränkemarkt: Warenverräumung und -präsentation, Lagerbestände prüfen, Leergut',
          'Convenience: Zubereitung verzehrfertiger Speisen (Salate, Snacks, warme Speisen) nach Rezepturen, Qualitätsstandards und Frische sicherstellen',
          'Mopro (Molkereiprodukte): Fokus auf Frische, Sauberkeit und lückenlose Warenpräsenz in der Kühlwarenabteilung, Kühlkette und Haltbarkeiten prüfen',
          'Backshop: Präsentation von Brot und Backwaren, Aufbereitung (z.B. Teiglinge aufbacken), Wareneingang kontrollieren',
          'Imbiss warme Speisen: Zubereitung von Snacks oder warmen Mahlzeiten, Hygienevorgaben einhalten, Kunden direkt bedienen'
        ],
        profile: [
          'Interesse an spezialisierten Bereichen',
          'Sorgfältig und qualitätsbewusst',
          'Teamfähig',
          'Hygienebewusstsein (bei Convenience/Imbiss)'
        ],
        benefits: [
          'Spezialisierung in interessanten Bereichen',
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung',
          'Vollzeit- oder Teilzeitstellen möglich'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      }
    ]
  },
  logistik: {
    ausbildung: [
      {
        id: 'logistik-ausbildung-1',
        title: 'Ausbildung zum Berufskraftfahrer (m/w/d)',
        shortDescription: 'Dreijährige Ausbildung zum Lkw-Fahrer im REWE-Lieferverkehr. Du lernst alle Aufgaben rund um Warentransport kennen.',
        tasks: [
          'Übernahme von Warenlieferungen',
          'Prüfung der Ladung und Ladungssicherung',
          'Beladen und Entladen des Lkw sowie Wartung und Pflege des Fahrzeugs',
          'Kontrolle der Fahrzeug- und Transportpapiere',
          'Sichere Auslieferung der Waren an Märkte (Nahverkehr) unter Nutzung von Navigationssystemen',
          'Wirtschaftliche Routen- und Terminplanung im Nahverkehr'
        ],
        profile: [
          'Interesse am Fahren und an Logistik',
          'Verantwortungsbewusst und zuverlässig',
          'Gute körperliche Konstitution',
          'Mindestens Hauptschulabschluss'
        ],
        benefits: [
          'Im Rahmen der Ausbildung kann der Lkw-Führerschein Klasse CE erworben werden',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Ausbildung mit Praxis und Berufsschule'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-2',
        title: 'Ausbildung zum Fachlageristen (m/w/d)',
        shortDescription: 'Zweijährige Ausbildung im Lager (mit Option, ein drittes Jahr zur Fachkraft für Lagerlogistik anzuhängen).',
        tasks: [
          'Wareneingang prüfen und Waren per EDV-System einlagern',
          'Waren kommissionieren (Bestellungen zusammenstellen) und den Warenausgang koordinieren',
          'Einsatz verschiedener digitaler Lagerverwaltungssysteme kennenlernen',
          'Umgang mit Arbeitsmitteln wie Messgeräten und das Führen von Flurförderfahrzeugen (z.B. Gabelstapler)',
          'Lagerorganisation betreiben und Qualitätskontrollen durchführen'
        ],
        profile: [
          'Interesse an Logistik und Lagerarbeit',
          'Sorgfältig und zuverlässig',
          'Teamfähig',
          'Guter Hauptschulabschluss oder Mittlere Reife'
        ],
        benefits: [
          'Zweijährige Ausbildung mit Option auf drittes Jahr zur Fachkraft für Lagerlogistik',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Ausbildung mit Praxis und Berufsschule'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-3',
        title: 'Ausbildung zur Fachkraft für Lagerlogistik',
        shortDescription: 'Dreijährige Ausbildung (vertieft gegenüber Fachlagerist). Die Aufgaben ähneln denen des Fachlageristen, erweitert um planerische Tätigkeiten.',
        tasks: [
          'Wareneingang prüfen und per System einlagern',
          'Kommissionierung und Warenausgang koordinieren',
          'Tourenplanung für Auslieferungen und Optimierung logistischer Abläufe',
          'Ermitteln und Auswerten von Lagerkennzahlen (Statistiken über Warenfluss)',
          'Bedienung von Lagergeräten inkl. Flurförderfahrzeugen',
          'Logistische Prozesse analysieren und verbessern'
        ],
        profile: [
          'Interesse an Logistik und planerischen Aufgaben',
          'Analytisches Denken',
          'Sorgfältig und zuverlässig',
          'Teamfähig',
          'Guter Hauptschulabschluss oder Mittlere Reife'
        ],
        benefits: [
          'Dreijährige vertiefte Ausbildung',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Ausbildung mit Praxis und Berufsschule',
          'Gute Karriereperspektiven'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-4',
        title: 'Duales Bachelor Studium BWL – Studienrichtung Logistik',
        shortDescription: 'Verzahnt Theorie an der Hochschule mit Praxis in REWE-Lägern. Im Praxisanteil übernimmst du verantwortungsvolle Aufgaben, um dich auf Führungsrollen in der Logistik vorzubereiten.',
        tasks: [
          'Qualitätskontrollen im Wareneingang durchführen',
          'Kommissionierabläufe eigenständig steuern',
          'Transportketten koordinieren und überwachen (inkl. Tourenplanungssysteme bedienen)',
          'Mitarbeit in Projekten der Lager-/Betriebsleitung',
          'Analyse der logistischen Prozesse am Standort'
        ],
        profile: [
          'Abitur oder Fachabitur',
          'Interesse an Betriebswirtschaftslehre und Logistik',
          'Analytisches Denken',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombination aus Studium und Praxis',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme nach erfolgreichem Abschluss',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Duales Studium',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-5',
        title: 'Duales Studium Wirtschaftsingenieurwesen – Studienrichtung Automatisierungstechnik',
        shortDescription: 'Kombination aus Ingenieurwissenschaften mit Praxis in der REWE-Logistik, insbesondere in hochautomatisierten Lägern.',
        tasks: [
          'Technische und wirtschaftliche Problemstellungen fachübergreifend lösen',
          'Ingenieurwissenschaftliche Fachkompetenzen aufbauen',
          'Technische Prozesse im Lager/Automatisierung selbstständig erschließen',
          'In laufenden Automatisierungs-Projekten mitarbeiten',
          'Grundlagen in Projekt-, Personal- und Unternehmensmanagement vertiefen',
          'Praxisphasen an modernen Logistikstandorten mit automatisierter Kommissionierung'
        ],
        profile: [
          'Abitur mit guten Noten in Mathematik und Naturwissenschaften',
          'Interesse an Technik und Ingenieurwissenschaften',
          'Analytisches Denken',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombination aus Studium und Praxis',
          'Praxisphasen an modernen Logistikstandorten',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme nach erfolgreichem Abschluss',
          '5% Mitarbeitendenrabatt bei REWE und PENNY'
        ],
        workModel: 'Duales Studium',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'logistik-professionals-1',
        title: 'Kommissionierer / Lagermitarbeiter',
        shortDescription: 'Lagerpersonal, das Kundenaufträge (Marktbestellungen) im Verteilzentrum zusammenstellt. Diese Mitarbeiter sind das Rückgrat der Logistik.',
        tasks: [
          'Auftragslisten (Picklisten) erhalten und mittels Flurförderfahrzeug die angeforderten Waren aus dem Lager entnehmen',
          'Kommissionieren per Sprachsteuerung (Pick-by-Voice) oder Touchscreen-Gerät (Pick-by-Touch)',
          'Waren auf Paletten sorgfältig und transportsicher packen',
          'Auf Ordnung im Lager achten und Transportsicherheit gewährleisten (z.B. Ladung sichern)',
          'Sorgen dafür, dass die REWE-Märkte vollständig und pünktlich beliefert werden'
        ],
        profile: [
          'Körperliche Belastbarkeit',
          'Sorgfältig und zuverlässig',
          'Teamfähig',
          'Bereitschaft zu Schichtarbeit'
        ],
        benefits: [
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung',
          'Vollzeit- oder Teilzeitstellen möglich',
          'Feste Schichtstruktur'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-2',
        title: 'Lagerassistenten',
        shortDescription: 'Unterstützt die Lagerleitung oder bestimmte Lagerprozesse administrativ. Typische Aufgaben umfassen Kommissionierung unterstützen, Bestandsdaten verwalten und Inventuren mit vorbereiten.',
        tasks: [
          'Kommissionierung unterstützen',
          'Bestandsdaten verwalten',
          'Inventuren mit vorbereiten',
          'Als Schichtkoordinator fungieren',
          'Administrative Unterstützung der Lagerleitung'
        ],
        profile: [
          'Organisatorisches Geschick',
          'Sorgfältig und zuverlässig',
          'Teamfähig',
          'Gute EDV-Kenntnisse'
        ],
        benefits: [
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung',
          'Vollzeit- oder Teilzeitstellen möglich',
          'Entwicklungsmöglichkeiten'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-3',
        title: 'Teamleiter',
        shortDescription: 'Führungsposition im Lager: Du verantwortest einen Lagerbereich oder eine Schicht (z.B. Nachtschicht).',
        tasks: [
          'Operative Prozesse im Lagerabschnitt koordinieren und optimieren (z.B. im Kommissionierbereich)',
          'Abstimmung mit anderen Fachabteilungen (etwa Wareneingang, Transport)',
          'Das eigene Team fachlich und disziplinarisch führen (inkl. Einsatzplanung)',
          'Als Vorbild vorangehen und für eine vertrauensvolle, auf Augenhöhe basierende Führungskultur sorgen',
          'Einhalten von Zielvorgaben (Planzahlen) sicherstellen',
          'Gewährleisten, dass betriebliche sowie gesetzliche Vorschriften (Arbeitssicherheit, Hygiene etc.) im Lager eingehalten werden'
        ],
        profile: [
          'Abgeschlossene Ausbildung im Lagerbereich oder vergleichbare Qualifikation',
          'Erste Führungserfahrung wünschenswert',
          'Starkes Verantwortungsbewusstsein',
          'Teamfähig und kommunikationsstark',
          'Bereitschaft zu Schichtarbeit'
        ],
        benefits: [
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Unbefristetes Arbeitsverhältnis',
          'Führungsposition mit Entwicklungspotenzial'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-4',
        title: 'Mitarbeiter Wareneingang / Warenausgang',
        shortDescription: 'Das Logistikpersonal im Wareneingang prüft und verbucht eingehende Warenlieferungen. Im Warenausgang stellen Mitarbeiter sicher, dass ausgehende Lieferungen vollständig und korrekt zusammengestellt sind.',
        tasks: [
          'Wareneingang: Prüfung und Verbuchung eingehender Warenlieferungen',
          'Ware annehmen, Menge und Qualität kontrollieren (z.B. MHD, Unversehrtheit der Paletten)',
          'Waren am richtigen Platz einlagern',
          'Warenausgang: Sicherstellen, dass ausgehende Lieferungen vollständig und korrekt zusammengestellt sind',
          'Kommissionierte Paletten auf Lkw verladen',
          'Begleitpapiere prüfen und auf ordnungsgemäße Ladungssicherung achten'
        ],
        profile: [
          'Sorgfältig und zuverlässig',
          'Körperliche Belastbarkeit',
          'Teamfähig',
          'Bereitschaft zu Schichtarbeit'
        ],
        benefits: [
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Strukturierte Einarbeitung',
          'Vollzeit- oder Teilzeitstellen möglich',
          'Feste Schichtstruktur'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-5',
        title: 'Berufskraftfahrer',
        shortDescription: 'Festangestellte LKW-Fahrer im REWE-Fuhrpark übernehmen die Belieferung der Supermärkte. Diese Fahrer sind regional unterwegs und wichtiger Bestandteil der gekühlten und trockenen Warenversorgung der Filialen.',
        tasks: [
          'Pünktliche Anlieferung der REWE-Märkte im Nahverkehr',
          'Sicheres Be- und Entladen des Lkw verantworten',
          'Retourwaren aus den Märkten wieder mit zurücknehmen',
          'Transportierte Waren per Handscanner erfassen',
          'Alle gesetzlichen Vorschriften (Lenkzeiten, Verkehrssicherheit etc.) strikt einhalten'
        ],
        profile: [
          'Lkw-Führerschein Klasse CE',
          'Verantwortungsbewusst und zuverlässig',
          'Gute körperliche Konstitution',
          'Bereitschaft zu frühen Arbeitszeiten'
        ],
        benefits: [
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Unbefristetes Arbeitsverhältnis',
          'Regionale Einsätze im Nahverkehr',
          'Strukturierte Einarbeitung'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      }
    ]
  },
  verwaltung: {
    ausbildung: [
      {
        id: 'verwaltung-ausbildung-1',
        title: 'Ausbildung (kaufmännisch: Büro/Marketing/Groß- & Außenhandel)',
        shortDescription: 'Kaufmännische Ausbildung in verschiedenen Bereichen der Zentrale. Du durchläufst verschiedene Abteilungen und erlangst breites organisatorisches Know-how.',
        tasks: [
          'Mitarbeit in unterschiedlichen Unternehmensbereichen wie Personal, Rechnungswesen, Einkauf, Vertrieb, Marketing',
          'Kommunikation mit internen und externen Ansprechpartnern (z.B. andere Abteilungen, Lieferanten) und Teilnahme an Besprechungen',
          'Umgang mit digitalen Büro- und Informationssystemen',
          'Aufbereitung und Verarbeitung von Daten und Informationen (z.B. Statistiken, Berichte)',
          'Planung, Organisation und Durchführung kleiner Projekte und Büroabläufe',
          'Marketingkampagnen konzipieren und umsetzen (bei Marketing-Ausbildung)',
          'Media- und Werbemittel planen sowie Marktforschungsergebnisse auswerten'
        ],
        profile: [
          'Interesse an kaufmännischen Aufgaben',
          'Organisatorisches Geschick',
          'Teamfähig und kommunikationsstark',
          'Guter Hauptschulabschluss oder Mittlere Reife'
        ],
        benefits: [
          'Strukturierte Ausbildung mit Praxis und Berufsschule',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Einblick in verschiedene Unternehmensbereiche'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-2',
        title: 'Ausbildung (Immobilien)',
        shortDescription: 'Ausbildung im Immobilienwesen, speziell bei REWE, wo es um Märkte und Logistikimmobilien geht.',
        tasks: [
          'Verschiedene relevante Abteilungen kennenlernen: kaufmännisches Immobilienmanagement, Expansion (Standortentwicklung), Bauabteilung und Vertrieb',
          'Verwaltung und Vermietung von Immobilien, z.B. Mieterbetreuung, Bearbeitung von Betriebskostenabrechnungen und Wirtschaftsplänen',
          'Mitwirkung beim An- und Verkauf von Grundstücken und Gebäuden',
          'Teilnahme an Vertrags- und Verhandlungsgesprächen (z.B. Vergabe von Aufträgen an externe Dienstleister)',
          'Erste Erfahrungen in der Projektentwicklung von neuen Einzelhandelsstandorten sammeln',
          'Ansprechpartner für Mieter bei Fragen rund um die Immobilie sein'
        ],
        profile: [
          'Interesse an Immobilienwesen',
          'Zahlen- und Sprachverständnis',
          'Teamgeist',
          'Dienstleistungsorientiert',
          'Mindestens (Fach-)Abitur'
        ],
        benefits: [
          'Strukturierte Ausbildung mit Praxis und Berufsschule',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Einblick in verschiedene Immobilienbereiche'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-3',
        title: 'Ausbildung (Einzelhandel: Verkäufer / Kaufmann im Einzelhandel)',
        shortDescription: 'Klassische Einzelhandelsausbildung mit Fokus auf Verwaltungs- und Organisationsaufgaben in der Zentrale.',
        tasks: [
          'Organisation und Verwaltung von Waren- und Sortimentsdaten',
          'Unterstützung bei der Planung und Steuerung von Verkaufsprozessen',
          'Mitarbeit in verschiedenen Verwaltungsbereichen wie Einkauf, Vertrieb und Controlling',
          'Umgang mit Warenwirtschaftssystemen und digitalen Verwaltungstools',
          'Vorbereitung auf Führungsaufgaben im Einzelhandel',
          'Kombination aus praktischer Erfahrung und theoretischem Wissen'
        ],
        profile: [
          'Interesse am Einzelhandel und an Verwaltungsaufgaben',
          'Organisatorisches Geschick',
          'Teamfähig und kommunikationsstark',
          'Guter Hauptschulabschluss oder Mittlere Reife'
        ],
        benefits: [
          'Strukturierte Ausbildung mit Praxis und Berufsschule',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten',
          'Vorbereitung auf Führungsaufgaben'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-4',
        title: 'Abiturientenprogramm (Groß- & Außenhandel)',
        shortDescription: 'Kombinierte Aus- und Fortbildung für Abiturienten im Groß- und Außenhandel. In drei Jahren werden Verkäufer/Kaufmann-Abschluss und Führungsqualifikation erworben.',
        tasks: [
          'Ausbildung zum Kaufmann im Groß- und Außenhandel',
          'Erwerb der Handelsfachwirt-Qualifikation',
          'Mitarbeit in verschiedenen Bereichen wie Einkauf, Vertrieb und Logistik',
          'Vorbereitung auf Führungsaufgaben im Großhandel',
          'Projektarbeit und eigenverantwortliche Aufgaben',
          'Kombination aus Ausbildung und Fortbildung in einem Programm'
        ],
        profile: [
          'Abitur oder Fachabitur',
          'Interesse an Führungsaufgaben',
          'Organisatorisches Geschick',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombinierte Aus- und Fortbildung zum Handelsfachwirt',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme bei guten Leistungen',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-5',
        title: 'Duales Studium (Handel)',
        shortDescription: 'Kombination aus Hochschulstudium und Praxis in der Zentrale. Während der Praxisphasen stehen die Vorbereitung auf Führungsaufgaben und bereichsübergreifende Einsätze im Fokus.',
        tasks: [
          'Mitarbeit in verschiedenen Unternehmensbereichen (Markt, Logistik, Verwaltung)',
          'Vertretungs-Einsätze zur Vorbereitung auf Führungsposition',
          'Begleitung von Außendienst-Einsätzen (z.B. mit Vertriebsleitung, bei Umbauten/Neueröffnungen)',
          'Kennenlernen der Schnittstellen zwischen Markt, Verwaltung und Logistik',
          'Teilnahme an Seminaren (z.B. Systemschulungen, Arbeitsrecht)',
          'Theoretisches Wissen aus dem Studium praktisch anwenden'
        ],
        profile: [
          'Abitur oder Fachabitur',
          'Interesse an Betriebswirtschaftslehre und Handel',
          'Bereitschaft zu bereichsübergreifenden Einsätzen',
          'Teamfähig und kommunikationsstark'
        ],
        benefits: [
          'Kombination aus Studium und Praxis',
          'Schneller Einstieg in Führungspositionen',
          'Übernahme nach erfolgreichem Abschluss',
          '5% Mitarbeitendenrabatt bei REWE und PENNY',
          'Umfassende Weiterbildungsmöglichkeiten'
        ],
        workModel: 'Duales Studium',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'verwaltung-professionals-1',
        title: 'Referent / Assistenz (Geschäftsleitung)',
        shortDescription: 'Unterstützung der Geschäftsleitung in strategischen und operativen Aufgaben. Du organisierst Termine, Meetings und Reisen und unterstützt Führungskräfte in administrativen und organisatorischen Belangen.',
        tasks: [
          'Termine, Meetings und Reisen organisieren',
          'Protokoll führen und Präsentationen vorbereiten',
          'Führungskräfte in administrativen und organisatorischen Belangen unterstützen',
          'Kalender koordinieren und Kommunikation filtern',
          'Strategische Projekte begleiten und dokumentieren',
          'Entlastung des Managements durch eigenverantwortliche Aufgaben',
          'Schnittstelle zwischen Geschäftsleitung und verschiedenen Abteilungen'
        ],
        profile: [
          'Kaufmännische Ausbildung oder vergleichbare Qualifikation',
          'Erfahrung im LEH oder wirtschaftswissenschaftliches Studium',
          'Kommunikationsstark, organisiert, kooperativ',
          'MS Office 365',
          'Reise-/Eventbereitschaft'
        ],
        benefits: [
          'Strukturierte Einarbeitung, interne Entwicklung',
          '5% Mitarbeitendenrabatt',
          'Altersvorsorge',
          'Tarifvergütung',
          'Dienstwagen privat nutzbar'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-2',
        title: 'Ladenlayout / Store Planning',
        shortDescription: 'Planung und Optimierung von Ladenlayouts und Verkaufsflächen. Du entwickelst Konzepte für die optimale Warenpräsentation und Raumgestaltung.',
        tasks: [
          'Entwicklung von Ladenlayout-Konzepten für neue und bestehende Märkte',
          'Planung der optimalen Warenplatzierung und Raumaufteilung',
          'Zusammenarbeit mit Architekten, Bauplanern und Vertrieb',
          'Analyse von Verkaufsdaten zur Optimierung der Flächennutzung',
          'Umsetzung von Markenkonzepten im Ladenlayout',
          'Projektmanagement bei Umbauten und Neueröffnungen'
        ],
        profile: [
          'Kaufmännische Ausbildung',
          'Ideal 1–3 Jahre Erfahrung',
          'Kenntnisse Service-Thekenbau/Fachwaren wünschenswert',
          'Reisebereitschaft Bayern',
          'MS Office',
          'Führerschein B'
        ],
        benefits: [
          'Vergütung + Dienstwagen',
          'Altersvorsorge/JobRad/Kantinenzuschuss',
          'Weiterbildung',
          '5% Rabatt (REWE/PENNY) u.a.'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-3',
        title: 'Revision / Audit',
        shortDescription: 'Interne Prüfung und Kontrolle von Geschäftsprozessen, Finanzen und Compliance. Du sorgst für Transparenz und Einhaltung von Vorgaben.',
        tasks: [
          'Durchführung interner Revisionen und Audits',
          'Prüfung von Geschäftsprozessen und Finanzdaten',
          'Compliance-Prüfungen und Risikobewertungen',
          'Erstellung von Prüfberichten und Handlungsempfehlungen',
          'Zusammenarbeit mit externen Prüfern und Behörden',
          'Entwicklung von Verbesserungsvorschlägen für interne Prozesse'
        ],
        profile: [
          'Ausbildung (vorzugsweise LEH) oder vergleichbar',
          'Erfahrung Revision/prüfungsnahe Beratung',
          'MS Office',
          'Verständnis für Datenbanken/Datenanalysen',
          'Reisebereitschaft Bayern'
        ],
        benefits: [
          'Einarbeitung',
          'Entwicklungsprogramme',
          '5% Rabatt',
          'Altersvorsorge',
          'Firmenwagen privat nutzbar'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-4',
        title: 'Gebietsmanagement / Vertrieb',
        shortDescription: 'Steuerung und Betreuung von Vertriebsgebieten. Du koordinierst die Zusammenarbeit zwischen Zentrale und Märkten und sorgst für optimale Vertriebsprozesse.',
        tasks: [
          'Betreuung von Vertriebsgebieten und Filialen',
          'Koordination zwischen Zentrale und Märkten',
          'Umsetzung von Vertriebsstrategien und Verkaufsförderungsmaßnahmen',
          'Analyse von Verkaufsdaten und Entwicklung von Optimierungsmaßnahmen',
          'Unterstützung bei Neueröffnungen und Standortentwicklung',
          'Führung von Vertriebsteams und Außendienstmitarbeitern'
        ],
        profile: [
          'Kaufmännische Ausbildung (LEH), ideal Handelsfachwirt/Studium',
          'Vertriebserfahrung',
          'Warenkenntnisse',
          'Führung/Motivation',
          'Führerschein B + Reisebereitschaft'
        ],
        benefits: [
          'Vergütung + 30 Tage Urlaub',
          'Mobiles Arbeiten',
          'Dienstwagen',
          'Weiterbildung',
          'Rabatte',
          'Gesundheitsangebote & Netzwerke'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-5',
        title: 'Fuhrparkmanagement',
        shortDescription: 'Verwaltung und Optimierung des Firmenfuhrparks. Du sorgst für effiziente Fahrzeugnutzung, Wartung und Compliance.',
        tasks: [
          'Verwaltung und Disposition des Firmenfuhrparks',
          'Planung von Fahrzeugwartung und Reparaturen',
          'Optimierung der Fahrzeugauslastung und Routenplanung',
          'Einhaltung von gesetzlichen Vorschriften (TÜV, Versicherung, Steuern)',
          'Verhandlung mit Fahrzeuglieferanten und Werkstätten',
          'Analyse von Fuhrparkkosten und Entwicklung von Einsparpotenzialen'
        ],
        profile: [
          'Kaufmännische Ausbildung (Auto/Versicherung vorteilhaft)',
          'Administration + ideal Rechnungsbearbeitung',
          'MS Office, ideal SAP',
          'Organisiert, teamfähig',
          'Führerschein B'
        ],
        benefits: [
          'Einarbeitung',
          'Entwicklungsprogramme',
          '5% Rabatt',
          'Altersvorsorge',
          'Tarif + Sonderzahlungen (Urlaub/Weihnachten)'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-6',
        title: 'Immobilienmanagement (kaufmännisch/technisch)',
        shortDescription: 'Verwaltung und Entwicklung von Immobilienportfolios. Du kümmerst dich um kaufmännische oder technische Aspekte von Immobilienprojekten.',
        tasks: [
          'Verwaltung und Vermietung von Immobilien (kaufmännisch)',
          'Mieterbetreuung und Bearbeitung von Betriebskostenabrechnungen',
          'Mitwirkung beim An- und Verkauf von Grundstücken und Gebäuden',
          'Technische Betreuung von Immobilien (Wartung, Instandhaltung)',
          'Projektentwicklung von neuen Einzelhandelsstandorten',
          'Vertragsverhandlungen und Koordination mit externen Dienstleistern'
        ],
        profile: [
          'Ausbildung Immobilienkaufmann/-frau oder vergleichbar',
          'MS Office, ideal SAP-RE',
          'Organisiert und teamfähig',
          'Dienstleistungsorientiert'
        ],
        benefits: [
          'REWE-typische Benefits (Einarbeitung/Entwicklung/Rabatte etc.)',
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt',
          'Altersvorsorge'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-7',
        title: 'Recruiting / HR (Praktikum/Werkstudent)',
        shortDescription: 'Personalgewinnung und -betreuung. Du unterstützt bei der Rekrutierung von Mitarbeitern und betreust Praktikanten und Werkstudenten.',
        tasks: [
          'Ausschreibung von Stellen und Bewerberbetreuung',
          'Durchführung von Vorstellungsgesprächen und Auswahlprozessen',
          'Betreuung von Praktikanten und Werkstudenten',
          'Onboarding neuer Mitarbeiter',
          'Zusammenarbeit mit Hochschulen und Bildungseinrichtungen',
          'Entwicklung von Recruiting-Strategien und Employer-Branding-Maßnahmen'
        ],
        profile: [
          'Studium oder Ausbildung im HR-Bereich',
          'Kommunikationsstark',
          'Organisiert und teamfähig',
          'Interesse an Personalwesen'
        ],
        benefits: [
          'Praktikum oder Werkstudententätigkeit',
          'Einblick in HR-Prozesse',
          '5% Mitarbeitendenrabatt',
          'Entwicklungsmöglichkeiten'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-8',
        title: 'Projektleitung (Immobilien/Technik)',
        shortDescription: 'Leitung von Projekten im Bereich Immobilien oder Technik. Du koordinierst komplexe Projekte von der Planung bis zur Umsetzung.',
        tasks: [
          'Projektplanung und -steuerung für Immobilien- oder Technikprojekte',
          'Koordination von internen Teams und externen Dienstleistern',
          'Budgetverwaltung und Kostenkontrolle',
          'Risikomanagement und Qualitätssicherung',
          'Kommunikation mit Stakeholdern und Projektbeteiligten',
          'Dokumentation und Reporting von Projektergebnissen'
        ],
        profile: [
          'Studium Bauingenieurwesen/Versorgung/Elektro oder Techniker:in + mind. 5 Jahre Erfahrung',
          'VOB/HOAI-Kenntnisse',
          'Verhandlungsgeschick',
          'Reisebereitschaft bundesweit',
          'MS Office, ideal SAP'
        ],
        benefits: [
          'Vergütung + Sonderleistungen',
          'Kantine/Deutschlandticket/JobRad',
          'Rabatte',
          'Flexible Zeiten/Homeoffice',
          'Weiterbildung & Gesundheitsangebote',
          'Netzwerke'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-9',
        title: 'Arbeitssicherheit (Leitung/Fachkraft)',
        shortDescription: 'Sicherstellung von Arbeitssicherheit und Gesundheitsschutz. Du entwickelst Maßnahmen zur Unfallverhütung und sorgst für Compliance.',
        tasks: [
          'Entwicklung und Umsetzung von Arbeitsschutzmaßnahmen',
          'Durchführung von Sicherheitsbegehungen und Gefährdungsbeurteilungen',
          'Schulung von Mitarbeitern zu Arbeitssicherheitsthemen',
          'Koordination mit Behörden und Versicherungen',
          'Unfallanalyse und Entwicklung von Präventionsmaßnahmen',
          'Führung eines Arbeitsschutz-Teams (bei Leitungsposition)'
        ],
        profile: [
          'Ausbildung/Studium + Qualifikation Fachkraft für Arbeitssicherheit',
          'Mehrjährige Erfahrung (idealerweise Handel/dezentrale Organisation)',
          'Führung & Moderation',
          'Reisebereitschaft',
          'MS Office'
        ],
        benefits: [
          'REWE-typische Benefits (Entwicklung, Vereinbarkeit etc.)',
          'Attraktive Vergütung',
          '5% Mitarbeitendenrabatt',
          'Altersvorsorge'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
    ]
  },
  frischetheke: {
    ausbildung: [
      {
        id: 'frischetheke-ausbildung-1',
        title: 'Kaufmann im Einzelhandel, Feinkost (m/w/d)',
        shortDescription: 'Spezialisierung auf Frischetheke (Fleisch, Wurst, Käse, Feinkost). Du präsentierst Waren attraktiv, berätst fachkundig und stellst eigene Spezialitäten nach Rezept her.',
        tasks: [
          'Ansprechende Präsentation und Auszeichnung unserer Feinkost- und Frischewaren in den Verkaufstheken',
          'Führen von Beratungs- und Verkaufsgesprächen',
          'Selbständige Herstellung von Spezialitäten nach hauseigenen Rezepten',
          'Umgang mit digitalen Markt- und Kassensystemen sowie Kennenlernen und Auswerten von Verkaufsstatistiken'
        ],
        profile: [
          'Du interessierst dich für Lebensmittel und die Prozesse hinter den Kulissen eines Supermarkts',
          'Du bist verlässlich und arbeitest gut im Team',
          'Du magst den Kontakt mit Menschen',
          'Du hast einen guten Hauptschulabschluss oder die Mittlere Reife'
        ],
        benefits: [
          'Für deine Zukunft: Bei guten Leistungen übernehmen wir dich garantiert – in Voll- oder Teilzeit',
          'Für deine Ziele: Wir fördern dich mit einer flexiblen Einsatzplanung, spannenden Azubiprojekten sowie interessanten Seminaren und E-Learnings',
          'Unser Teamspirit: Du startest in einem Team, das dich vom ersten Tag an unterstützt und fördert',
          'Smart sparen: Du bekommst 5 % Einkaufsrabatt bei REWE und PENNY sowie weitere Rabatte beim toom Baumarkt und bei der DERTOUR Group'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'frischetheke-professionals-1',
        title: 'Verkäufer in der Frischetheke (Metzgerei) (m/w/d)',
        shortDescription: 'Mit deiner Leidenschaft rund um die Themen Fleisch, Wurst, Käse und Feinkost berätst du unsere Kund:innen mit deinem Fachwissen und schaffst ausgefallene Kreationen von feinster Qualität.',
        tasks: [
          'Du überzeugst unsere Kund:innen mit einer ansprechenden Warenpräsentation, kompetenter Beratung und zuvorkommendem Service.',
          'Du zeigst Fingerspitzengefühl bei der Veredelung und Portionierung unserer Waren.',
          'Du sorgst mit deinem Blick für Details für eine ausgezeichnete Warenpräsenz, Frische und die Einhaltung der Hygienevorschriften.'
        ],
        profile: [
          'Idealerweise deine abgeschlossene Berufsausbildung oder deine Berufserfahrung im Lebensmitteleinzelhandel oder in der (System-)Gastronomie.',
          'Dein Interesse an der Bearbeitung und Veredelung von Fleisch- und Frischewaren.',
          'Deine ausgeprägte Kund:innenorientierung und Kommunikationsstärke, dein Teamgeist und dein Verantwortungsbewusstsein.'
        ],
        benefits: [
          'REWE ist dein sicherer und nachhaltiger Arbeitgeber – deutschlandweit und bei dir um die Ecke.',
          'Mehr vom Gehalt – eine attraktive Vergütung und 5 % bei REWE, PENNY und weitere Rabatte beim toom Baumarkt und bei der DERTOUR Group.',
          'Darf es noch etwas dazu sein? – freu dich auf Sonderzahlungen wie Urlaubs- und Weihnachtsgeld.',
          'Gönn dir eine Pause – mit 6 Wochen Urlaub im Jahr.'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'frischetheke-professionals-2',
        title: 'Bereichsleiter Frischetheke (Metzgerei) (m/w/d)',
        shortDescription: 'Leitung der Bedienabteilung. Du führst das Theken-Team kompetent auf Augenhöhe, gehst als Vorbild voran und setzt das nationale Vertriebskonzept gekonnt um.',
        tasks: [
          'Du führst dein Team kompetent auf Augenhöhe, gehst als Vorbild voran und setzt das nationale Vertriebskonzept gekonnt um',
          'Du sorgst mit deinem Blick für Details für eine ausgezeichnete Warenpräsenz, Frische und die Einhaltung der Hygienevorschriften',
          'Du setzt deine Ideen für verkaufsfördernde Maßnahmen selbständig um'
        ],
        profile: [
          'Deine abgeschlossene Ausbildung, vorzugsweise im Lebensmitteleinzelhandel – aber auch als Quereinsteiger:in mit erster Fach- und Führungserfahrung im Bereich Backwaren oder SB-Frischetheke bist du bei uns herzlich willkommen',
          'Deine lösungs- und ergebnisorientierte Arbeitsweise sowie dein Engagement für deine Aufgaben, die du strukturiert und gewissenhaft angehst',
          'Dein Teamgeist, deine ausgeprägte Kund:innenorientierung und deine Kommunikationsstärke'
        ],
        benefits: [
          'REWE ist dein sicherer und nachhaltiger Arbeitgeber – deutschlandweit und bei dir um die Ecke',
          'Gestalte deine Zukunft – wir übernehmen die Kosten für tätigkeitsbezogene Weiterbildungen wie z. B. deine Meisterschule, stellen dich dafür frei und fördern dich mit unseren umfassenden Angeboten an Seminaren, Coachings und E-Learnings',
          'Mehr vom Gehalt – eine attraktive Vergütung und 5 % Einkaufsrabatt bei REWE und PENNY sowie weitere Rabatte beim toom Baumarkt und bei der DERTOUR Group',
          'Darf es noch etwas dazu sein? – Freu dich auf Sonderzahlungen wie Urlaubs- und Weihnachtsgeld'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'frischetheke-professionals-3',
        title: 'Aushilfe / Minijob Frischetheke Metzgerei (m/w/d)',
        shortDescription: 'Unterstützung im Frischetheken-Bereich mit direktem Kund:innenkontakt. Du bedienst und berätst unsere Kund:innen freundlich und sorgst für ansprechende Warenpräsenz.',
        tasks: [
          'Kund:innen freundlich bedienen, beraten und Service bieten',
          'Verkauf & Bearbeitung von Fleisch, Wurst, Käse, Backwaren, Feinkost',
          'Auf Frische, Sauberkeit und ansprechende Warenpräsenz achten'
        ],
        profile: [
          'Spaß am Einzelhandel und am Umgang mit Menschen',
          'Zuverlässig, gewissenhaft, gepflegtes Auftreten',
          'Selbstständig, engagiert, packt gern mit an'
        ],
        benefits: [
          'Strukturierte Einarbeitung + eingespieltes Team, gegenseitige Unterstützung',
          'Abwechslungsreiche Aufgabe mit direktem Kund:innenkontakt',
          'Attraktive Vergütung',
          'Entwicklungsmöglichkeiten (REWE Akademie)',
          '5% Mitarbeitendenrabatt bei REWE/PENNY + weitere Rabatte (toom, DER Touristik)'
        ],
        workModel: 'Minijob / Teilzeit',
        entryLevel: 'Professionals'
      }
    ]
  }
}
