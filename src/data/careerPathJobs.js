// Job-Daten für Karrierepfad-Komponente
// Strukturiert nach Bereich (Vertrieb/Logistik/Verwaltung) und Kategorie (Ausbildung/Professionals)

export const careerPathJobs = {
  markt: {
    ausbildung: [
      {
        id: 'markt-ausbildung-1',
        title: 'Verkäufer (m/w/d)',
        shortDescription: 'Kundenberatung und Verkauf stehen im Mittelpunkt. Du führst Beratungs- und Verkaufsgespräche, präsentierst Waren ansprechend und bedienst digitale Kassen- und Marktsysteme.',
        bullets: [
          'Führen von Beratungs- und Verkaufsgesprächen',
          'Ansprechende Warenpräsentation',
          'Warenannahme und -lagerung',
          'Umsetzung von Verkaufsförderungsmaßnahmen',
          'Bedienung digitaler Kassen- und Marktsysteme'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-2',
        title: 'Kaufmann im Einzelhandel (m/w/d)',
        shortDescription: 'Drei-jährige Ausbildung mit erweiterten Aufgaben im Markt. Du organisierst Waren und den gesamten Markt, setzt Verkaufsförderungsaktionen um und arbeitest mit digitalen Systemen.',
        bullets: [
          'Kunden beraten und Verkaufsgespräche führen',
          'Organisation der Waren und des gesamten Marktes (Bestandsaufnahme, Warenbeschaffung, Personaleinsatzplanung)',
          'Werbe- und Verkaufsförderungsaktionen passend zu Trends umsetzen',
          'Digitale Kassensysteme anwenden',
          'Verkaufsstatistiken ermitteln und auswerten'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-4',
        title: 'Ausbildung im Abiturientenprogramm zur Führungskraft im Einzelhandel (m/w/d)',
        shortDescription: 'Kombinierte Aus- und Fortbildung (Handelsfachwirt). In drei Jahren werden Verkäufer/Kaufmann-Abschluss und Führungsqualifikation erworben.',
        bullets: [
          'Kunden beraten und Verkaufsgespräche führen',
          'Mit digitalen Marktsystemen arbeiten',
          'Waren beschaffen, lagern und kontrollieren',
          'Organisation des gesamten Marktes (Personalplanung, Mitarbeiterführung)',
          'Projekte z.B. zur Kundenbindung oder Qualitätssicherung umsetzen',
          'Verkaufsstatistiken auswerten sowie Wirtschaftlichkeit prüfen (z.B. Bestandskontrollen)'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'markt-ausbildung-5',
        title: 'Duales Bachelor Studium BWL – Studienrichtung Handel',
        shortDescription: 'Kombination aus Hochschulstudium und Praxis im Markt. Während der Praxisphasen stehen die Vorbereitung auf Führungsaufgaben und bereichsübergreifende Einsätze im Fokus.',
        bullets: [
          'Mitarbeit in verschiedenen Unternehmensbereichen (Markt, Logistik, Verwaltung)',
          'Vertretungs-Einsätze zur Vorbereitung auf Führungsposition',
          'Begleitung von Außendienst-Einsätzen (z.B. mit Vertriebsleitung, bei Umbauten/Neueröffnungen)',
          'Kennenlernen der Schnittstellen zwischen Markt, Verwaltung und Logistik',
          'Teilnahme an Seminaren (z.B. Systemschulungen, Arbeitsrecht)'
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
        bullets: [
          'Kassieren und korrekte Abrechnung sicherstellen',
          'Sauberkeit und Ordnung im Kassenbereich gewährleisten',
          'Waren verräumen und auf Vollständigkeit sowie Qualität prüfen',
          'Kunden freundlich bedienen und beraten',
          'Meist flexibel auf 450€-Basis (Minijob)'
        ],
        workModel: 'Minijob / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-2',
        title: 'Marktmanager/Filialleitung (mit Perspektive zur Selbstständigkeit)',
        shortDescription: 'Als Filialleitung trägst du die Gesamtverantwortung für einen Supermarkt. Diese Position bietet auch die Perspektive zur Selbstständigkeit.',
        bullets: [
          'Umsetzung des REWE-Vertriebskonzepts und Durchführung von Werbe- und Verkaufsaktionen',
          'Steuerung von Umsatz-, Kosten- und Inventurentwicklung',
          'Mitarbeiterführung als Vorbild mit wertschätzender Kultur',
          'Verantwortung für Sortimentsgestaltung und Qualitätsmanagement',
          'Sicherstellung effizienter Warensteuerung und Einhaltung aller gesetzlichen sowie internen Vorgaben',
          'Perspektive zur Selbstständigkeit: Möglichkeit, einen eigenen REWE-Markt als Kaufmann/frau zu führen'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-3',
        title: 'Verkäufer (mit Kassiertätigkeit)',
        shortDescription: 'Verkaufskraft im Markt mit Schwerpunkt Kasse. Die Aufgaben überschneiden sich mit denen einer Aushilfe an der Kasse.',
        bullets: [
          'Kassiervorgänge durchführen und korrekt abrechnen',
          'Kassenbereich sauber halten',
          'Waren einräumen und Qualität kontrollieren',
          'Kunden durch freundliches Auftreten und kompetente Beratung begeistern',
          'Oft Teilzeit- oder Vollzeitstellen im Verkauf mit Kassenverantwortung'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-5',
        title: 'Marktmanager Assistent / Stellvertretende Filialleitung',
        shortDescription: 'Unterstützt den Marktmanager bei allen laufenden Aufgaben und vertritt ihn bei Abwesenheit. Diese Position ist häufig der Schritt zur eigenen Marktleitung.',
        bullets: [
          'Mitverantwortung für Umsetzung des Vertriebskonzepts und entsprechender Werbe-/Verkaufsmaßnahmen',
          'Mitsteuerung von Umsatz-, Kosten- und Inventurentwicklungen sowie Qualitätsmanagement',
          'Überwachung der Einhaltung gesetzlicher und betrieblicher Vorgaben im Markt',
          'Aktive Mitarbeit im Team und Dienstplanerstellung',
          'Führung des Teams auf Augenhöhe und als erste Ansprechperson',
          'Sicherstellung einer exzellenten Kundenbetreuung im Markt'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'markt-professionals-6',
        title: 'Mitarbeitende in den Bereichen Getränkemarkt, Convenience, MoPro, Backshop, Imbiss warme Speisen',
        shortDescription: 'In größeren Märkten gibt es spezialisierte Verkaufsmitarbeiter für verschiedene Fachbereiche.',
        bullets: [
          'Getränkemarkt: Warenverräumung und -präsentation, Lagerbestände prüfen, Leergut',
          'Convenience: Zubereitung verzehrfertiger Speisen (Salate, Snacks, warme Speisen) nach Rezepturen, Qualitätsstandards und Frische sicherstellen',
          'Mopro (Molkereiprodukte): Fokus auf Frische, Sauberkeit und lückenlose Warenpräsenz in der Kühlwarenabteilung, Kühlkette und Haltbarkeiten prüfen',
          'Backshop: Präsentation von Brot und Backwaren, Aufbereitung (z.B. Teiglinge aufbacken), Wareneingang kontrollieren',
          'Imbiss warme Speisen: Zubereitung von Snacks oder warmen Mahlzeiten, Hygienevorgaben einhalten, Kunden direkt bedienen'
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
        bullets: [
          'Übernahme von Warenlieferungen',
          'Prüfung der Ladung und Ladungssicherung',
          'Beladen und Entladen des Lkw sowie Wartung und Pflege des Fahrzeugs',
          'Kontrolle der Fahrzeug- und Transportpapiere',
          'Sichere Auslieferung der Waren an Märkte (Nahverkehr) unter Nutzung von Navigationssystemen',
          'Wirtschaftliche Routen- und Terminplanung im Nahverkehr',
          'Im Rahmen der Ausbildung kann der Lkw-Führerschein Klasse CE erworben werden'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-2',
        title: 'Ausbildung zum Fachlageristen (m/w/d)',
        shortDescription: 'Zweijährige Ausbildung im Lager (mit Option, ein drittes Jahr zur Fachkraft für Lagerlogistik anzuhängen).',
        bullets: [
          'Wareneingang prüfen und Waren per EDV-System einlagern',
          'Waren kommissionieren (Bestellungen zusammenstellen) und den Warenausgang koordinieren',
          'Einsatz verschiedener digitaler Lagerverwaltungssysteme kennenlernen',
          'Umgang mit Arbeitsmitteln wie Messgeräten und das Führen von Flurförderfahrzeugen (z.B. Gabelstapler)',
          'Lagerorganisation betreiben und Qualitätskontrollen durchführen'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-3',
        title: 'Ausbildung zur Fachkraft für Lagerlogistik',
        shortDescription: 'Dreijährige Ausbildung (vertieft gegenüber Fachlagerist). Die Aufgaben ähneln denen des Fachlageristen, erweitert um planerische Tätigkeiten.',
        bullets: [
          'Wareneingang prüfen und per System einlagern',
          'Kommissionierung und Warenausgang koordinieren',
          'Tourenplanung für Auslieferungen und Optimierung logistischer Abläufe',
          'Ermitteln und Auswerten von Lagerkennzahlen (Statistiken über Warenfluss)',
          'Bedienung von Lagergeräten inkl. Flurförderfahrzeugen',
          'Logistische Prozesse analysieren und verbessern'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-4',
        title: 'Duales Bachelor Studium BWL – Studienrichtung Logistik',
        shortDescription: 'Verzahnt Theorie an der Hochschule mit Praxis in REWE-Lägern. Im Praxisanteil übernimmst du verantwortungsvolle Aufgaben, um dich auf Führungsrollen in der Logistik vorzubereiten.',
        bullets: [
          'Qualitätskontrollen im Wareneingang durchführen',
          'Kommissionierabläufe eigenständig steuern',
          'Transportketten koordinieren und überwachen (inkl. Tourenplanungssysteme bedienen)',
          'Mitarbeit in Projekten der Lager-/Betriebsleitung',
          'Analyse der logistischen Prozesse am Standort'
        ],
        workModel: 'Duales Studium',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'logistik-ausbildung-5',
        title: 'Duales Studium Wirtschaftsingenieurwesen – Studienrichtung Automatisierungstechnik',
        shortDescription: 'Kombination aus Ingenieurwissenschaften mit Praxis in der REWE-Logistik, insbesondere in hochautomatisierten Lägern.',
        bullets: [
          'Technische und wirtschaftliche Problemstellungen fachübergreifend lösen',
          'Ingenieurwissenschaftliche Fachkompetenzen aufbauen',
          'Technische Prozesse im Lager/Automatisierung selbstständig erschließen',
          'In laufenden Automatisierungs-Projekten mitarbeiten',
          'Grundlagen in Projekt-, Personal- und Unternehmensmanagement vertiefen',
          'Praxisphasen an modernen Logistikstandorten mit automatisierter Kommissionierung'
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
        bullets: [
          'Auftragslisten (Picklisten) erhalten und mittels Flurförderfahrzeug die angeforderten Waren aus dem Lager entnehmen',
          'Kommissionieren per Sprachsteuerung (Pick-by-Voice) oder Touchscreen-Gerät (Pick-by-Touch)',
          'Waren auf Paletten sorgfältig und transportsicher packen',
          'Auf Ordnung im Lager achten und Transportsicherheit gewährleisten (z.B. Ladung sichern)',
          'Sorgen dafür, dass die REWE-Märkte vollständig und pünktlich beliefert werden'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-2',
        title: 'Lagerassistenten',
        shortDescription: 'Unterstützt die Lagerleitung oder bestimmte Lagerprozesse administrativ. Typische Aufgaben umfassen Kommissionierung unterstützen, Bestandsdaten verwalten und Inventuren mit vorbereiten.',
        bullets: [
          'Kommissionierung unterstützen',
          'Bestandsdaten verwalten',
          'Inventuren mit vorbereiten',
          'Als Schichtkoordinator fungieren',
          'Administrative Unterstützung der Lagerleitung'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-3',
        title: 'Teamleiter',
        shortDescription: 'Führungsposition im Lager: Du verantwortest einen Lagerbereich oder eine Schicht (z.B. Nachtschicht).',
        bullets: [
          'Operative Prozesse im Lagerabschnitt koordinieren und optimieren (z.B. im Kommissionierbereich)',
          'Abstimmung mit anderen Fachabteilungen (etwa Wareneingang, Transport)',
          'Das eigene Team fachlich und disziplinarisch führen (inkl. Einsatzplanung)',
          'Als Vorbild vorangehen und für eine vertrauensvolle, auf Augenhöhe basierende Führungskultur sorgen',
          'Einhalten von Zielvorgaben (Planzahlen) sicherstellen',
          'Gewährleisten, dass betriebliche sowie gesetzliche Vorschriften (Arbeitssicherheit, Hygiene etc.) im Lager eingehalten werden'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-4',
        title: 'Mitarbeiter Wareneingang / Warenausgang',
        shortDescription: 'Das Logistikpersonal im Wareneingang prüft und verbucht eingehende Warenlieferungen. Im Warenausgang stellen Mitarbeiter sicher, dass ausgehende Lieferungen vollständig und korrekt zusammengestellt sind.',
        bullets: [
          'Wareneingang: Prüfung und Verbuchung eingehender Warenlieferungen',
          'Ware annehmen, Menge und Qualität kontrollieren (z.B. MHD, Unversehrtheit der Paletten)',
          'Waren am richtigen Platz einlagern',
          'Warenausgang: Sicherstellen, dass ausgehende Lieferungen vollständig und korrekt zusammengestellt sind',
          'Kommissionierte Paletten auf Lkw verladen',
          'Begleitpapiere prüfen und auf ordnungsgemäße Ladungssicherung achten'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-5',
        title: 'Berufskraftfahrer',
        shortDescription: 'Festangestellte LKW-Fahrer im REWE-Fuhrpark übernehmen die Belieferung der Supermärkte. Diese Fahrer sind regional unterwegs und wichtiger Bestandteil der gekühlten und trockenen Warenversorgung der Filialen.',
        bullets: [
          'Pünktliche Anlieferung der REWE-Märkte im Nahverkehr',
          'Sicheres Be- und Entladen des Lkw verantworten',
          'Retourwaren aus den Märkten wieder mit zurücknehmen',
          'Transportierte Waren per Handscanner erfassen',
          'Alle gesetzlichen Vorschriften (Lenkzeiten, Verkehrssicherheit etc.) strikt einhalten'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'logistik-professionals-6',
        title: 'Werkstudenten Kommissionierung / Lagermitarbeiter',
        shortDescription: 'Studierende, die neben dem Studium im REWE-Lager jobben, unterstützen in Teilzeit die Lagerprozesse.',
        bullets: [
          'Waren per Scanner picken',
          'Packen und allgemeine Lagerarbeiten',
          'Geringere Wochenstundenzahl',
          'Befristung während des Studiums',
          'Tätigkeiten entsprechen meist denen der regulären Kommissionierer bzw. Lagermitarbeiter'
        ],
        workModel: 'Werkstudent',
        entryLevel: 'Professionals'
      }
    ]
  },
  verwaltung: {
    ausbildung: [
      {
        id: 'verwaltung-ausbildung-1',
        title: 'Kaufmann für Büromanagement (m/w/d)',
        shortDescription: 'Klassische Verwaltungsausbildung (3 Jahre) in einer Regions- oder Konzernzentrale. Die Auszubildenden durchlaufen verschiedene administrative Abteilungen.',
        bullets: [
          'Mitarbeit in unterschiedlichen Unternehmensbereichen wie Personal, Rechnungswesen, Einkauf, Vertrieb, Marketing',
          'Kommunikation mit internen und externen Ansprechpartnern (z.B. andere Abteilungen, Lieferanten) und Teilnahme an Besprechungen',
          'Umgang mit digitalen Büro- und Informationssystemen',
          'Aufbereitung und Verarbeitung von Daten und Informationen (z.B. Statistiken, Berichte)',
          'Planung, Organisation und Durchführung kleiner Projekte und Büroabläufe',
          'Breites organisatorisches Know-how erlangen'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-2',
        title: 'Kaufmann für Immobilienmanagement (m/w/d)',
        shortDescription: 'Diese Ausbildung vermittelt Kenntnisse im Immobilienwesen, speziell bei REWE, wo es um Märkte und Logistikimmobilien geht.',
        bullets: [
          'Verschiedene relevante Abteilungen kennenlernen: kaufmännisches Immobilienmanagement, Expansion (Standortentwicklung), Bauabteilung und Vertrieb',
          'Verwaltung und Vermietung von Immobilien, z.B. Mieterbetreuung, Bearbeitung von Betriebskostenabrechnungen und Wirtschaftsplänen',
          'Mitwirkung beim An- und Verkauf von Grundstücken und Gebäuden',
          'Teilnahme an Vertrags- und Verhandlungsgesprächen (z.B. Vergabe von Aufträgen an externe Dienstleister)',
          'Erste Erfahrungen in der Projektentwicklung von neuen Einzelhandelsstandorten sammeln',
          'Ansprechpartner für Mieter bei Fragen rund um die Immobilie sein',
          'Dauer i.d.R. 2–3 Jahre, oft Abitur/Fachabitur erforderlich'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      },
      {
        id: 'verwaltung-ausbildung-3',
        title: 'Kaufmann für Marketingkommunikation (m/w/d)',
        shortDescription: 'Ausbildung im Marketing, die es bei REWE (ggf. in Zentralen) gibt. Du lernst Marketingkampagnen zu konzipieren und umzusetzen.',
        bullets: [
          'Marketingkampagnen konzipieren und umsetzen',
          'Media- und Werbemittel planen',
          'Marktforschungsergebnisse auswerten',
          'Mit Agenturen sowie internen Abteilungen (z.B. Category Management, Vertrieb) zusammenarbeiten',
          'Einsatzbereiche könnten in der Werbung, Online-Marketing oder Öffentlichkeitsarbeit der REWE Group liegen'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'verwaltung-professionals-1',
        title: 'Sachbearbeiter',
        shortDescription: 'Kaufmännische Angestellte in bestimmten Fachbereichen (z.B. Category Management, Controlling, Personalverwaltung etc.).',
        bullets: [
          'Unterstützung durch Büro- und Verwaltungsarbeiten, z.B. im Category Management oder Controlling',
          'Kommunikationsschnittstelle zwischen den Märkten und dem Außendienst',
          'Daten aufbereiten, Formulare und Berichte erstellen',
          'Ablage und Korrespondenz erledigen',
          'Anfragen aus Märkten aufnehmen und an die zuständigen Fachbetreuer weitergeben',
          'Reibungslosen administrativen Ablauf im Hintergrund sicherstellen'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-2',
        title: 'Assistenzen',
        shortDescription: 'Team- oder Geschäftsführungsassistenten in den Zentralen. Sie organisieren Termine, Meetings und Reisen und unterstützen die Führungskräfte in administrativen und organisatorischen Belangen.',
        bullets: [
          'Termine, Meetings und Reisen organisieren',
          'Protokoll führen',
          'Führungskräfte in administrativen und organisatorischen Belangen unterstützen',
          'Kalender koordinieren',
          'Präsentationen vorbereiten',
          'Kommunikation filtern',
          'Entlastung des Managements'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-3',
        title: 'Referenten',
        shortDescription: 'Spezialisierte Fachkräfte in Stabsstellen (z.B. Marketing-Referent, Personalreferent, Rechtsreferent). Sie nehmen Expertenrollen ein.',
        bullets: [
          'Personalreferent: Betreuung und Beratung von Führungskräften in Personalthemen',
          'Marketingreferent: Planung von Marketingaktionen',
          'Rechtsreferent: Prüfung von Verträgen und Compliance',
          'Expertenrolle in der jeweiligen Fachabteilung',
          'Meist einschlägige Berufserfahrung erforderlich',
          'Aufgaben variieren je nach Abteilung'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'verwaltung-professionals-4',
        title: 'Teamleiter',
        shortDescription: 'In der Verwaltung übernehmen Teamleiter die Führung kleinerer Teams in Fachabteilungen (etwa im Einkauf, in der IT, im Controlling etc.).',
        bullets: [
          'Operative Aufgaben des Teams koordinieren und die Zielerreichung sicherstellen',
          'Mitarbeiter fachlich und disziplinarisch führen',
          'Arbeitsabläufe optimieren',
          'Als Bindeglied zur Abteilungsleitung dienen',
          'Konkrete Aufgaben hängen vom Bereich ab (z.B. Teamleiter Controlling: Finanzplanung, Teamleiter IT: Steuerung von Entwickler-Teams)',
          'Führung und Organisation stehen immer im Vordergrund'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      }
    ]
  },
  frischetheke: {
    ausbildung: [
      {
        id: 'frischetheke-ausbildung-1',
        title: 'Kaufmann im Einzelhandel, Feinkost (m/w/d)',
        shortDescription: 'Spezialisierung auf Frischetheke (Fleisch, Wurst, Käse, Feinkost). Du präsentierst Waren attraktiv, berätst fachkundig und stellst eigene Spezialitäten nach Rezept her.',
        bullets: [
          'Waren attraktiv in den Frischetheken präsentieren und auszeichnen',
          'Kunden fachkundig beraten',
          'Eigene Spezialitäten nach Rezept herstellen',
          'Mit digitalen Kassen- und Warenwirtschaftssystemen arbeiten (inkl. Statistiken)',
          'Bestellung, Kontrolle und Lagerung von Feinkostwaren übernehmen'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Ausbildung'
      }
    ],
    professionals: [
      {
        id: 'frischetheke-professionals-1',
        title: 'Verkäufer in der Frischetheke (Metzgerei) (m/w/d)',
        shortDescription: 'Fachverkäufer an der Bedientheke für Fleisch/Wurst/Käse. Hier ist Fachwissen über Lebensmittel gefragt.',
        bullets: [
          'Ansprechende Warenpräsentation und kompetente Beratung an der Theke',
          'Zubereitung und Veredelung von Fleisch- und Feinkostwaren (Portionieren, Rezepturen umsetzen)',
          'Herstellung von Spezialitäten nach Rezept',
          'Umsetzung eigener Ideen zur Verkaufsförderung',
          'Ständige Kontrolle von Warenpräsenz, Frische und Hygienevorschriften'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Professionals'
      },
      {
        id: 'frischetheke-professionals-2',
        title: 'Bereichsleiter Frischetheke (Metzgerei) (m/w/d)',
        shortDescription: 'Leitung der Bedienabteilung. Du führst das Theken-Team und trägst Verantwortung für Qualität der Produkte und Abläufe an der Theke.',
        bullets: [
          'Führung des Theken-Teams und Verantwortung für Qualität der Produkte und Abläufe an der Theke',
          'Umsetzung der nationalen Vertriebskonzepte',
          'Kosten- und Umsatzkennzahlen sowie Inventuren und Warenfluss im Griff',
          'Entwicklung von Maßnahmen, um Kunden für das Sortiment zu begeistern',
          'Schulung von Mitarbeitern und Vorbild in wertschätzender Führung',
          'Gewährleistung korrekter Preisauszeichnung und Sortimentspflege',
          'Strenge Einhaltung von Hygienevorschriften',
          'Serviceorientierte Kundenberatung'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Professionals'
      }
    ]
  }
}
