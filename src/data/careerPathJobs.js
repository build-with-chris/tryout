// Job-Daten für Karrierepfad-Komponente
// Strukturiert nach Bereich (Markt/Logistik) und Phase (Einstieg/Entwicklung/Verantwortung)

export const careerPathJobs = {
  markt: {
    einstieg: [
      {
        id: 'markt-einstieg-1',
        title: 'Verkäufer/in (m/w/d)',
        shortDescription: 'Du bist das Gesicht von REWE und sorgst für zufriedene Kunden. Jeden Tag erlebst du neue Begegnungen und lernst dabei kontinuierlich dazu.',
        bullets: [
          'Kundenberatung und freundlicher Service',
          'Teamarbeit in einem motivierten Umfeld',
          'Klare Strukturen und geregelte Arbeitszeiten'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Einstieg'
      },
      {
        id: 'markt-einstieg-2',
        title: 'Kassierer/in (m/w/d)',
        shortDescription: 'An der Kasse bist du der erste und letzte Kontaktpunkt für unsere Kunden. Du sorgst für einen reibungslosen Einkauf und lernst dabei jeden Tag Neues.',
        bullets: [
          'Kassentätigkeit und Kundenbetreuung',
          'Einarbeitung durch erfahrene Kolleg:innen',
          'Flexible Schichtmodelle möglich'
        ],
        workModel: 'Vollzeit / Teilzeit / Minijob',
        entryLevel: 'Einstieg'
      },
      {
        id: 'markt-einstieg-3',
        title: 'Warenverräumer/in (m/w/d)',
        shortDescription: 'Du sorgst dafür, dass unsere Regale immer gut gefüllt sind. Eine abwechslungsreiche Tätigkeit mit klaren Aufgaben und guter Teamatmosphäre.',
        bullets: [
          'Warenpräsentation und Regalpflege',
          'Arbeit im Team mit festen Routinen',
          'Körperliche Aktivität im Alltag'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Einstieg'
      },
      {
        id: 'markt-einstieg-4',
        title: 'Kaufmann/-frau im Einzelhandel – Ausbildung',
        shortDescription: 'Eine solide Ausbildung, die dir alle Türen öffnet. Du lernst den Einzelhandel von Grund auf kennen und entwickelst dich kontinuierlich weiter.',
        bullets: [
          '3-jährige duale Ausbildung',
          'Abwechslung zwischen Theorie und Praxis',
          'Gute Übernahmechancen nach der Ausbildung'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Einstieg'
      }
    ],
    entwicklung: [
      {
        id: 'markt-entwicklung-1',
        title: 'Teamleiter/in Verkauf (m/w/d)',
        shortDescription: 'Du übernimmst Verantwortung für ein Team und sorgst dafür, dass alles reibungslos läuft. Eine spannende Herausforderung mit viel Gestaltungsspielraum.',
        bullets: [
          'Führung eines motivierten Teams',
          'Personaleinsatzplanung und -entwicklung',
          'Enge Zusammenarbeit mit der Marktleitung'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Entwicklung'
      },
      {
        id: 'markt-entwicklung-2',
        title: 'Abteilungsleiter/in (m/w/d)',
        shortDescription: 'Du verantwortest eine komplette Abteilung und gestaltest das Sortiment aktiv mit. Hier kannst du zeigen, was in dir steckt.',
        bullets: [
          'Sortimentsgestaltung und -optimierung',
          'Verantwortung für Umsatz und Qualität',
          'Weiterbildungsmöglichkeiten inklusive'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Entwicklung'
      },
      {
        id: 'markt-entwicklung-3',
        title: 'Fachverkäufer/in im Lebensmittelhandel (m/w/d)',
        shortDescription: 'Du bist Spezialist:in für deinen Bereich – ob Frischetheke, Backwaren oder Obst & Gemüse. Expertise, die geschätzt wird.',
        bullets: [
          'Spezialisierung in einem Fachbereich',
          'Kundenberatung auf höchstem Niveau',
          'Weiterbildungen und Zertifikate möglich'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Entwicklung'
      }
    ],
    verantwortung: [
      {
        id: 'markt-verantwortung-1',
        title: 'Marktleiter/in (m/w/d)',
        shortDescription: 'Du trägst die Gesamtverantwortung für einen Markt und führst ein großes Team. Eine herausfordernde Position mit viel Gestaltungsspielraum.',
        bullets: [
          'Strategische Marktführung und -entwicklung',
          'Führung eines großen Teams',
          'Verantwortung für Umsatz und Kundenzufriedenheit'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Verantwortung'
      },
      {
        id: 'markt-verantwortung-2',
        title: 'Bereichsleiter/in (m/w/d)',
        shortDescription: 'Du verantwortest mehrere Märkte und entwickelst die Region weiter. Eine Position mit strategischer Ausrichtung und viel Verantwortung.',
        bullets: [
          'Verantwortung für mehrere Standorte',
          'Strategische Planung und Umsetzung',
          'Entwicklung von Teams und Märkten'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Verantwortung'
      }
    ]
  },
  logistik: {
    einstieg: [
      {
        id: 'logistik-einstieg-1',
        title: 'Lagerist/in (m/w/d)',
        shortDescription: 'Du sorgst dafür, dass die Waren genau da sind, wo sie gebraucht werden. Eine abwechslungsreiche Tätigkeit mit klaren Strukturen.',
        bullets: [
          'Warenannahme und -kontrolle',
          'Kommissionierung und Versand',
          'Arbeit im Team mit festen Routinen'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Einstieg'
      },
      {
        id: 'logistik-einstieg-2',
        title: 'Kommissionierer/in (m/w/d)',
        shortDescription: 'Du sorgst für präzise und schnelle Kommissionierung. Eine Tätigkeit, die Konzentration und Teamgeist erfordert.',
        bullets: [
          'Kommissionierung nach Auftrag',
          'Qualitätskontrolle und Dokumentation',
          'Moderne Technik und klare Prozesse'
        ],
        workModel: 'Vollzeit / Teilzeit',
        entryLevel: 'Einstieg'
      },
      {
        id: 'logistik-einstieg-3',
        title: 'Fachkraft für Lagerlogistik – Ausbildung',
        shortDescription: 'Eine solide Ausbildung in der Logistik, die dir alle Türen öffnet. Du lernst die Logistik von Grund auf kennen.',
        bullets: [
          '3-jährige duale Ausbildung',
          'Abwechslung zwischen Theorie und Praxis',
          'Gute Übernahmechancen nach der Ausbildung'
        ],
        workModel: 'Ausbildung',
        entryLevel: 'Einstieg'
      }
    ],
    entwicklung: [
      {
        id: 'logistik-entwicklung-1',
        title: 'Fachkraft Logistik (m/w/d)',
        shortDescription: 'Du übernimmst spezialisierte Aufgaben und sorgst für reibungslose Abläufe. Expertise, die geschätzt wird.',
        bullets: [
          'Spezialisierung in einem Fachbereich',
          'Koordination von Prozessen',
          'Weiterbildungsmöglichkeiten inklusive'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Entwicklung'
      },
      {
        id: 'logistik-entwicklung-2',
        title: 'Disponent/in (m/w/d)',
        shortDescription: 'Du planst und koordinierst die Logistikprozesse. Eine spannende Herausforderung mit viel Gestaltungsspielraum.',
        bullets: [
          'Planung und Steuerung von Transporten',
          'Optimierung von Logistikprozessen',
          'Enge Zusammenarbeit mit verschiedenen Bereichen'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Entwicklung'
      },
      {
        id: 'logistik-entwicklung-3',
        title: 'Schichtleiter/in (m/w/d)',
        shortDescription: 'Du übernimmst Verantwortung für eine Schicht und führst ein Team. Eine spannende Herausforderung mit viel Gestaltungsspielraum.',
        bullets: [
          'Führung eines motivierten Teams',
          'Verantwortung für Schichtabläufe',
          'Weiterbildungsmöglichkeiten inklusive'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Entwicklung'
      }
    ],
    verantwortung: [
      {
        id: 'logistik-verantwortung-1',
        title: 'Teamleiter/in Logistik (m/w/d)',
        shortDescription: 'Du trägst die Verantwortung für einen Logistikbereich und führst ein großes Team. Eine herausfordernde Position mit viel Gestaltungsspielraum.',
        bullets: [
          'Führung eines großen Teams',
          'Verantwortung für Logistikprozesse',
          'Strategische Planung und Umsetzung'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Verantwortung'
      },
      {
        id: 'logistik-verantwortung-2',
        title: 'Leiter/in Fuhrpark (m/w/d)',
        shortDescription: 'Du verantwortest den gesamten Fuhrpark und entwickelst die Transportlogistik weiter. Eine Position mit strategischer Ausrichtung.',
        bullets: [
          'Verantwortung für Fuhrpark und Transport',
          'Strategische Planung und Optimierung',
          'Entwicklung von Teams und Prozessen'
        ],
        workModel: 'Vollzeit',
        entryLevel: 'Verantwortung'
      }
    ]
  }
}

