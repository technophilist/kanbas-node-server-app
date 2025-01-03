const modules = [
    {
        "_id": "M101",
        "name": "Introduction to Rocket Propulsion",
        "description": "Basic principles of rocket propulsion and rocket engines.",
        "course": "RS101",
        "lessons": [
            {
                "_id": "L101",
                "name": "History of Rocketry",
                "description": "A brief history of rocketry and space exploration.",
                "module": "M101"
            },
            {
                "_id": "L102",
                "name": "Rocket Propulsion Fundamentals",
                "description": "Basic principles of rocket propulsion.",
                "module": "M101"
            },
            {
                "_id": "L103",
                "name": "Rocket Engine Types",
                "description": "Overview of different types of rocket engines.",
                "module": "M101"
            }
        ]
    },
    {
        "_id": "M102",
        "name": "Fuel and Combustion",
        "description": "Understanding rocket fuel, combustion processes, and efficiency.",
        "course": "RS101",
        "lessons": [
            {
                "_id": "L201",
                "name": "Rocket Fuel",
                "description": "Overview of different types of rocket fuels.",
                "module": "M102"
            },
            {
                "_id": "L202",
                "name": "Combustion Processes",
                "description": "Understanding combustion processes and efficiency.",
                "module": "M102"
            },
            {
                "_id": "L203",
                "name": "Combustion Instability",
                "description": "Understanding combustion instability and mitigation.",
                "module": "M102"
            }
        ]
    },
    {
        "_id": "M103",
        "name": "Nozzle Design",
        "description": "Principles of rocket nozzle design and performance optimization.",
        "course": "RS101",
        "lessons": [
            {
                "_id": "L301",
                "name": "Nozzle Design",
                "description": "Overview of different types of rocket nozzles.",
                "module": "M103"
            },
            {
                "_id": "L302",
                "name": "Nozzle Performance",
                "description": "Understanding nozzle performance and efficiency.",
                "module": "M103"
            },
            {
                "_id": "L303",
                "name": "Nozzle Optimization",
                "description": "Optimizing nozzle design for specific applications.",
                "module": "M103"
            }
        ]
    },
    {
        "_id": "M301",
        "name": "Spacecraft Structural Design",
        "description": "Fundamentals of designing spacecraft structures and materials selection.",
        "course": "RS103",
        "lessons": [
            {
                "_id": "L401",
                "name": "Structural Design Principles",
                "description": "Basic principles of spacecraft structural design.",
                "module": "M301"
            },
            {
                "_id": "L402",
                "name": "Materials Selection",
                "description": "Selecting materials for spacecraft structures.",
                "module": "M301"
            },
            {
                "_id": "L403",
                "name": "Structural Analysis",
                "description": "Analyzing spacecraft structures for strength and stability.",
                "module": "M301"
            }
        ]
    },
    {
        "_id": "M302",
        "name": "Orbital Mechanics",
        "description": "Understanding orbital dynamics and mission planning.",
        "course": "RS103",
        "lessons": [
            {
                "_id": "L404",
                "name": "Kepler's Laws",
                "description": "Overview of Kepler's laws of planetary motion.",
                "module": "M302"
            },
            {
                "_id": "L405",
                "name": "Orbital Elements",
                "description": "Understanding orbital elements and their significance.",
                "module": "M302"
            },
            {
                "_id": "L406",
                "name": "Mission Planning",
                "description": "Planning orbital missions and trajectories.",
                "module": "M302"
            }
        ]
    },
    {
        "_id": "M303",
        "name": "Spacecraft Systems Engineering",
        "description": "Overview of spacecraft systems and subsystems engineering.",
        "course": "RS103",
        "lessons": [
            {
                "_id": "L407",
                "name": "Systems Engineering Process",
                "description": "Overview of the systems engineering process for spacecraft.",
                "module": "M303"
            },
            {
                "_id": "L408",
                "name": "Spacecraft Subsystems",
                "description": "Study of different subsystems in spacecraft design.",
                "module": "M303"
            },
            {
                "_id": "L409",
                "name": "Integration and Testing",
                "description": "Integration and testing of spacecraft systems.",
                "module": "M303"
            }
        ]
    },
    {
        "_id": "M201",
        "name": "Fundamentals of Aerodynamics",
        "description": "Basic aerodynamic concepts and fluid dynamics principles.",
        "course": "RS102",
        "lessons": [
            {
                "_id": "L401",
                "name": "Introduction to Aerodynamics",
                "description": "Overview of aerodynamic principles and their applications.",
                "module": "M201"
            },
            {
                "_id": "L402",
                "name": "Fluid Dynamics",
                "description": "Understanding the behavior of fluids and their impact on aerodynamics.",
                "module": "M201"
            },
            {
                "_id": "L403",
                "name": "Airfoil Theory",
                "description": "Study of airfoil shapes and their aerodynamic properties.",
                "module": "M201"
            }
        ]
    },
    {
        "_id": "M202",
        "name": "Subsonic and Supersonic Flow",
        "description": "Understanding subsonic and supersonic aerodynamic behaviors.",
        "course": "RS102",
        "lessons": [
            {
                "_id": "L404",
                "name": "Subsonic Flow",
                "description": "Characteristics and analysis of subsonic flow.",
                "module": "M202"
            },
            {
                "_id": "L405",
                "name": "Supersonic Flow",
                "description": "Characteristics and analysis of supersonic flow.",
                "module": "M202"
            },
            {
                "_id": "L406",
                "name": "Shock Waves",
                "description": "Formation and effects of shock waves in supersonic flow.",
                "module": "M202"
            }
        ]
    },
    {
        "_id": "M203",
        "name": "Aerodynamic Heating",
        "description": "Study of aerodynamic heating and thermal protection systems.",
        "course": "RS102",
        "lessons": [
            {
                "_id": "L407",
                "name": "Heat Transfer",
                "description": "Fundamentals of heat transfer in aerodynamic contexts.",
                "module": "M203"
            },
            {
                "_id": "L408",
                "name": "Thermal Protection Systems",
                "description": "Design and analysis of thermal protection systems for aerospace vehicles.",
                "module": "M203"
            },
            {
                "_id": "L409",
                "name": "Material Properties",
                "description": "Study of materials used in thermal protection systems.",
                "module": "M203"
            }
        ]
    },
    {
        "_id": "M401",
        "name": "Introduction to Organic Chemistry",
        "description": "Fundamentals of organic chemistry, including structure, bonding, and functional groups.",
        "course": "RS104",
        "lessons": [
            {
                "_id": "L501",
                "name": "Structure and Bonding",
                "description": "Introduction to the structure and bonding in organic molecules.",
                "module": "M401"
            },
            {
                "_id": "L502",
                "name": "Functional Groups",
                "description": "Overview of different functional groups in organic chemistry.",
                "module": "M401"
            },
            {
                "_id": "L503",
                "name": "Nomenclature",
                "description": "Rules and conventions for naming organic compounds.",
                "module": "M401"
            }
        ]
    },
    {
        "_id": "M402",
        "name": "Organic Reactions and Mechanisms",
        "description": "Study of organic reactions, mechanisms, and their applications.",
        "course": "RS104",
        "lessons": [
            {
                "_id": "L504",
                "name": "Reaction Types",
                "description": "Overview of different types of organic reactions.",
                "module": "M402"
            },
            {
                "_id": "L505",
                "name": "Reaction Mechanisms",
                "description": "Detailed study of reaction mechanisms in organic chemistry.",
                "module": "M402"
            },
            {
                "_id": "L506",
                "name": "Stereochemistry",
                "description": "Introduction to stereochemistry and its importance in organic reactions.",
                "module": "M402"
            }
        ]
    },
    {
        "_id": "M403",
        "name": "Spectroscopy and Structure Determination",
        "description": "Techniques for determining the structure of organic compounds using spectroscopy.",
        "course": "RS104",
        "lessons": [
            {
                "_id": "L507",
                "name": "Mass Spectrometry",
                "description": "Principles and applications of mass spectrometry in organic chemistry.",
                "module": "M403"
            },
            {
                "_id": "L508",
                "name": "NMR Spectroscopy",
                "description": "Introduction to nuclear magnetic resonance (NMR) spectroscopy.",
                "module": "M403"
            },
            {
                "_id": "L509",
                "name": "IR Spectroscopy",
                "description": "Basics of infrared (IR) spectroscopy and its use in structure determination.",
                "module": "M403"
            }
        ]
    },
    {
        "_id": "M501",
        "name": "Introduction to Inorganic Chemistry",
        "description": "Fundamentals of inorganic chemistry, including bonding theories and coordination chemistry.",
        "course": "RS105",
        "lessons": [
            {
                "_id": "L601",
                "name": "Bonding Theories",
                "description": "Introduction to bonding theories in inorganic chemistry.",
                "module": "M501"
            },
            {
                "_id": "L602",
                "name": "Coordination Chemistry",
                "description": "Study of coordination compounds and their properties.",
                "module": "M501"
            },
            {
                "_id": "L603",
                "name": "Crystal Field Theory",
                "description": "Understanding crystal field theory and its applications.",
                "module": "M501"
            }
        ]
    },
    {
        "_id": "M502",
        "name": "Advanced Coordination Chemistry",
        "description": "In-depth study of coordination chemistry, including ligand field theory and electronic spectra.",
        "course": "RS105",
        "lessons": [
            {
                "_id": "L604",
                "name": "Ligand Field Theory",
                "description": "Advanced concepts in ligand field theory.",
                "module": "M502"
            },
            {
                "_id": "L605",
                "name": "Electronic Spectra",
                "description": "Study of electronic spectra of coordination compounds.",
                "module": "M502"
            },
            {
                "_id": "L606",
                "name": "Magnetism",
                "description": "Magnetic properties of coordination compounds.",
                "module": "M502"
            }
        ]
    },
    {
        "_id": "M503",
        "name": "Bioinorganic Chemistry",
        "description": "Role of inorganic elements in biological systems.",
        "course": "RS105",
        "lessons": [
            {
                "_id": "L607",
                "name": "Metalloenzymes",
                "description": "Study of enzymes containing metal ions.",
                "module": "M503"
            },
            {
                "_id": "L608",
                "name": "Metal Ion Transport",
                "description": "Mechanisms of metal ion transport in biological systems.",
                "module": "M503"
            },
            {
                "_id": "L609",
                "name": "Metal-Based Drugs",
                "description": "Development and use of metal-based drugs.",
                "module": "M503"
            }
        ]
    },
    {
        "_id": "M601",
        "name": "Introduction to Physical Chemistry",
        "description": "Fundamentals of physical chemistry, including thermodynamics, kinetics, and quantum mechanics.",
        "course": "RS106",
        "lessons": [
            {
                "_id": "L701",
                "name": "Thermodynamics",
                "description": "Introduction to the principles of thermodynamics.",
                "module": "M601"
            },
            {
                "_id": "L702",
                "name": "Chemical Kinetics",
                "description": "Study of reaction rates and mechanisms.",
                "module": "M601"
            },
            {
                "_id": "L703",
                "name": "Quantum Mechanics",
                "description": "Basic principles of quantum mechanics and their applications in chemistry.",
                "module": "M601"
            }
        ]
    },
    {
        "_id": "M602",
        "name": "Advanced Physical Chemistry",
        "description": "In-depth study of physical chemistry topics, including spectroscopy and statistical mechanics.",
        "course": "RS106",
        "lessons": [
            {
                "_id": "L704",
                "name": "Spectroscopy",
                "description": "Techniques and applications of spectroscopy in physical chemistry.",
                "module": "M602"
            },
            {
                "_id": "L705",
                "name": "Statistical Mechanics",
                "description": "Principles of statistical mechanics and their applications.",
                "module": "M602"
            },
            {
                "_id": "L706",
                "name": "Surface Chemistry",
                "description": "Study of surface phenomena and their importance in physical chemistry.",
                "module": "M602"
            }
        ]
    },
    {
        "_id": "M603",
        "name": "Computational Physical Chemistry",
        "description": "Introduction to computational methods in physical chemistry, including molecular dynamics and quantum chemistry calculations.",
        "course": "RS106",
        "lessons": [
            {
                "_id": "L707",
                "name": "Molecular Dynamics",
                "description": "Basics of molecular dynamics simulations and their applications.",
                "module": "M603"
            },
            {
                "_id": "L708",
                "name": "Quantum Chemistry Calculations",
                "description": "Introduction to quantum chemistry calculations and software.",
                "module": "M603"
            },
            {
                "_id": "L709",
                "name": "Computational Spectroscopy",
                "description": "Using computational methods to study spectroscopic properties.",
                "module": "M603"
            }
        ]
    },
    {
        "_id": "M701",
        "name": "Introduction to Elvish",
        "description": "Fundamentals of Elvish languages, including Sindarin and Quenya.",
        "course": "RS107",
        "lessons": [
            {
                "_id": "L801",
                "name": "Sindarin Basics",
                "description": "Introduction to the basics of Sindarin language.",
                "module": "M701"
            },
            {
                "_id": "L802",
                "name": "Quenya Basics",
                "description": "Introduction to the basics of Quenya language.",
                "module": "M701"
            },
            {
                "_id": "L803",
                "name": "Elvish Writing Systems",
                "description": "Overview of Elvish writing systems and scripts.",
                "module": "M701"
            }
        ]
    },
    {
        "_id": "M702",
        "name": "Dwarvish Language",
        "description": "Study of the Dwarvish language, Khuzdul.",
        "course": "RS107",
        "lessons": [
            {
                "_id": "L804",
                "name": "Khuzdul Basics",
                "description": "Introduction to the basics of Khuzdul language.",
                "module": "M702"
            },
            {
                "_id": "L805",
                "name": "Dwarvish Runes",
                "description": "Study of Dwarvish runes and their usage.",
                "module": "M702"
            }
        ]
    },
    {
        "_id": "M703",
        "name": "The Black Speech of Mordor",
        "description": "Study of the Black Speech of Mordor.",
        "course": "RS107",
        "lessons": [
            {
                "_id": "L806",
                "name": "Black Speech Basics",
                "description": "Introduction to the basics of the Black Speech.",
                "module": "M703"
            },
            {
                "_id": "L807",
                "name": "Usage in Inscriptions",
                "description": "Study of the usage of the Black Speech in inscriptions.",
                "module": "M703"
            }
        ]
    },
    {
        "_id": "M801",
        "name": "Introduction to Middle-earth Diplomacy",
        "description": "Fundamentals of diplomacy among the races of Middle-earth.",
        "course": "RS108",
        "lessons": [
            {
                "_id": "L901",
                "name": "Historical Alliances",
                "description": "Study of historical alliances among Elves, Men, Dwarves, and Wizards.",
                "module": "M801"
            },
            {
                "_id": "L902",
                "name": "Conflict Resolution",
                "description": "Principles of conflict resolution in a multi-species context.",
                "module": "M801"
            },
            {
                "_id": "L903",
                "name": "Leadership and Wisdom",
                "description": "Role of leadership and wisdom in maintaining peace.",
                "module": "M801"
            }
        ]
    },
    {
        "_id": "M802",
        "name": "Diplomatic Strategies",
        "description": "Advanced strategies for diplomacy among Middle-earth races.",
        "course": "RS108",
        "lessons": [
            {
                "_id": "L904",
                "name": "Negotiation Tactics",
                "description": "Effective negotiation tactics used by Elves, Men, and Wizards.",
                "module": "M802"
            },
            {
                "_id": "L905",
                "name": "Alliance Building",
                "description": "Building and maintaining alliances in Middle-earth.",
                "module": "M802"
            },
            {
                "_id": "L906",
                "name": "Cultural Sensitivity",
                "description": "Understanding cultural differences to enhance diplomatic relations.",
                "module": "M802"
            }
        ]
    },
    {
        "_id": "M803",
        "name": "Case Studies in Diplomacy",
        "description": "In-depth analysis of key diplomatic events in Middle-earth.",
        "course": "RS108",
        "lessons": [
            {
                "_id": "L907",
                "name": "Council of Elrond",
                "description": "Detailed study of the Council of Elrond and its diplomatic significance.",
                "module": "M803"
            },
            {
                "_id": "L908",
                "name": "War of the Ring",
                "description": "Diplomatic maneuvers during the War of the Ring.",
                "module": "M803"
            },
            {
                "_id": "L909",
                "name": "Treaty of the Last Alliance",
                "description": "Examination of the Treaty of the Last Alliance and its impact.",
                "module": "M803"
            }
        ]
    }
]
export default modules