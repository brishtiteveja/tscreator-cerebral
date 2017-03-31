import React from 'react'
import {connect} from 'cerebral-view-react'
import style from'../function.css'
import LineInfo from '../LineInfo'

export default connect({
	datapacks: 'datapacks',
	hideTime: 'hideTimeList',
	whichImage: 'whichImage',
},	
	{},

	function EditList(props) {
		
	var references = {
		  "Period": {
			"timelines": [
			  {
				"name": "TOP",
				"age": 0,
				"type": "solid"
			  },
			  {
				"name": "Quaternary base",
				"age": 2.58,
				"type": "solid"
			  },
			  {
				"name": "Neogene base",
				"age": 23.03,
				"type": "solid"
			  },
			  {
				"name": "Paleogene base",
				"age": 66.04,
				"type": "solid"
			  },
			  {
				"name": "Cretaceous base",
				"age": 145.01,
				"type": "dashed"
			  },
			  {
				"name": "Jurassic base",
				"age": 201.36,
				"type": "solid"
			  },
			  {
				"name": "Triassic base",
				"age": 251.90,
				"type": "solid"
			  },
			  {
				"name": "Permian base",
				"age": 298.88,
				"type": "solid"
			  },
			  {
				"name": "Carboniferous base",
				"age": 358.94,
				"type": "dashed"
			  },
			  {
				"name": "Devonian base",
				"age": 419.2,
				"type": "solid"
			  },
			  {
				"name": "Silurian base",
				"age": 443.83,
				"type": "solid"
			  },
			  {
				"name": "Ordovician base",
				"age": 485.37,
				"type": "solid"
			  },
			  {
				"name": "Cambrian base",
				"age": 541,
				"type": "solid"
			  },
			  {
				"name": "Ediacaran base",
				"age": 635,
				"type": "solid"
			  },
			  {
				"name": "Cryogenian base",
				"age": 720,
				"type": "solid"
			  },
			  {
				"name": "Tonian base",
				"age": 1000,
				"type": "solid"
			  }, 
			  {
				"name": "Stenian base",
				"age": 1200,
				"type": "solid"
			  },
			  {
				"name": "Ectasian base",
				"age": 1400,
				"type": "solid"
			  },
			  {
				"name": "Calymmian base",
				"age": 1600,
				"type": "solid"
			  },
			  {
				"name": "Statherian base",
				"age": 1800,
				"type": "solid"
			  },
			  {
				"name": "Orosirian base",
				"age": 2050,
				"type": "solid"
			  },
			  {
				"name": "Rhyacian base",
				"age": 2300,
				"type": "solid"
			  },
			  {
				"name": "Siderian base",
				"age": 2500,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 2800,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 3200,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 3600,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 4000,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 4600,
				"type": "solid"
			  }
			],
			"zones": [
			  {
				"name": "Quaternary",
				"description": "Major expansion of N.Hemis. glaciation begins near Guss/Matuyama boundary [accepted in 2009 for base of \"Quaternary\", hence base of revised \"Pleistocene\"].  Gelasian stage was transferred to Pleistocene series by IUGS/ICS/INQUA (submitted May 2007; but was not ratified by IUGS until summer 2009 after another round of ICS voting and resubmission).  This enabled formalization of the Quaternary as an official system of the international scale.",
				"top": {
				  "name": "TOP",
				  "age": 0,
				  "type": "solid"
				},
				"base": {
				  "name": "Quaternary base",
				  "age": 2.588,
				  "type": "solid"
				},
				"backgroundColor": "#f9f97f"
			  },
			  {
				"name": "Neogene",
				"description": "Base of Miocene (base of Neogene Period) = base of Chron C6Cn.2n. The GSSP of the Oligocene/Miocene boundary is defined as 35m level of Rigorosa Formation in the Lemme-Carrosio sections of NE Italy, corresponding also to the FAD of Foram Globorotalia kugleri (base of Foram Zone M1) (Berggren et al., 1995; Steininger et al., in press)",
				"top": {
				  "name": "Quaternary base",
				  "age": 2.580,
				  "type": "solid"
				},
				"base": {
				  "name": "Neogene base",
				  "age": 23.03,
				  "type": "solid"
				},
				"backgroundColor": "#ffe619"
			  },
			  {
				"name": "Paleogene",
				"description": "Mesozoic/Cenozoic boundary event is approx. Chron C29r.5 in total C29r span of ca. 710 kyr, according to cycles; Husson et al., 2011; Thibault et al., submitted)",
				"top": {
				  "name": "Neogene base",
				  "age": 23.03,
				  "type": "solid"
				},
				"base": {
				  "name": "Paleogene base",
				  "age": 66.04,
				  "type": "solid"
				},
				"backgroundColor": "#fd9a52"
			  },
			  {
				"name": "Cretaceous",
				"description": "Base of Cretaceous (base of Berriasian) working version is Base of Chron M18r.  This is higher than B. jacobi (Tethyan ammonite zone).",
				"top": {
				  "name": "Paleogene base",
				  "age": 66.04,
				  "type": "solid"
				},
				"base": {
				  "name": "Cretaceous base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"backgroundColor": "#7fc64e"
			  },
			  {
				"name": "Jurassic",
				"description": "Lowest occurrence of the ammonite Psiloceras spelae at Kuhjoch (Austria).",
				"top": {
				  "name": "Cretaceous base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"base": {
				  "name": "Jurassic base",
				  "age": 201.36,
				  "type": "solid"
				},
				"backgroundColor": "#34b2c9"
			  },
			  {
				"name": "Triassic",
				"description": "Base Triassic is coeval with FAD of H. parvus conodont",
				"top": {
				  "name": "Jurassic base",
				  "age": 201.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Triassic base",
				  "age": 251.90,
				  "type": "solid"
				},
				"backgroundColor": "#812b92"
			  },
			  {
				"name": "Permian",
				"description": null,
				"top": {
				  "name": "Triassic base",
				  "age": 251.90,
				  "type": "solid"
				},
				"base": {
				  "name": "Permian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"backgroundColor": "#f04028"
			  },
			  {
				"name": "Carboniferous",
				"description": null,
				"top": {
				  "name": "Permian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"base": {
				  "name": "Carboniferous base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"backgroundColor": "#67a599"
			  },
			  {
				"name": "Devonian",
				"description": "Base of Devonian is immediately below the lowest occurrence of the graptolite species Monograptus uniformis",
				"top": {
				  "name": "Carboniferous base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"base": {
				  "name": "Devonian base",
				  "age": 419.2,
				  "type": "solid"
				},
				"backgroundColor": "#cb8c37"
			  },
			  {
				"name": "Silurian",
				"description": "Base of Silurian coincides with incoming of graptolite Parakidograptus Akidograptus ascensus",
				"top": {
				  "name": "Devonian base",
				  "age": 419.2,
				  "type": "solid"
				},
				"base": {
				  "name": "Silurian base",
				  "age": 443.83,
				  "type": "solid"
				},
				"backgroundColor": "#b3e1b6"
			  },
			  {
				"name": "Ordovician",
				"description": null,
				"top": {
				  "name": "Silurian base",
				  "age": 443.83,
				  "type": "solid"
				},
				"base": {
				  "name": "Ordovician base",
				  "age": 485.37,
				  "type": "solid"
				},
				"backgroundColor": "#009270"
			  },
			  {
				"name": "Cambrian",
				"description": null,
				"top": {
				  "name": "Ordovician base",
				  "age": 485.37,
				  "type": "solid"
				},
				"base": {
				  "name": "Cambrian base",
				  "age": 541,
				  "type": "solid"
				},
				"backgroundColor": "#7fa056"
			  },
			  {
				"name": "Ediacaran",
				"description": "GTS04 had \"vague estimation from bracketing radiometric ages of 600 and 635 Ma\".  Age assigned by Gehling and Shields in Concise GTS is estimated from constraints from radiometric ages.",
				"top": {
				  "name": "Cambrian base",
				  "age": 541,
				  "type": "solid"
				},
				"base": {
				  "name": "Ediacaran base",
				  "age": 635,
				  "type": "solid"
				},
				"backgroundColor": "#fed96a"
			  },
			  {
				"name": "Cryogenian",
				"description": null,
				"top": {
				  "name": "Ediacaran base",
				  "age": 635,
				  "type": "solid"
				},
				"base": {
				  "name": "Cryogenian base",
				  "age": 720,
				  "type": "solid"
				},
				"backgroundColor": "#febf4e"
			  },
			  {
				"name": "Tonian",
				"description": null,
				"top": {
				  "name": "Cryogenian base",
				  "age": 720,
				  "type": "solid"
				},
				"base": {
				  "name": "Tonian base",
				  "age": 1000,
				  "type": "solid"
				},
				"backgroundColor": "#fecc5c"
			  },
			  {
				"name": "Stenian",
				"description": null,
				"top": {
				  "name": "Tonian base",
				  "age": 1000,
				  "type": "solid"
				},
				"base": {
				  "name": "Stenian base",
				  "age": 1200,
				  "type": "solid"
				},
				"backgroundColor": "#fed99a"
			  },
			  {
				"name": "Ectasian",
				"description": null,
				"top": {
				  "name": "Stenian base",
				  "age": 1200,
				  "type": "solid"
				},
				"base": {
				  "name": "Ectasian base",
				  "age": 1400,
				  "type": "solid"
				},
				"backgroundColor": "#fdcc8a"
			  },
			  {
				"name": "Calymmian",
				"description": null,
				"top": {
				  "name": "Ectasian base",
				  "age": 1400,
				  "type": "solid"
				},
				"base": {
				  "name": "Calymmian base",
				  "age": 1600,
				  "type": "solid"
				},
				"backgroundColor": "#fdc07a"
			  },
			  {
				"name": "Statherian",
				"description": null,
				"top": {
				  "name": "Calymmian base",
				  "age": 1600,
				  "type": "solid"
				},
				"base": {
				  "name": "Statherian base",
				  "age": 1800,
				  "type": "solid"
				},
				"backgroundColor": "#f875a7"
			  },
			  {
				"name": "Orosirian",
				"description": null,
				"top": {
				  "name": "Statherian base",
				  "age": 1800,
				  "type": "solid"
				},
				"base": {
				  "name": "Orosirian base",
				  "age": 2050,
				  "type": "solid"
				},
				"backgroundColor": "#f76898"
			  },
			  {
				"name": "Rhyacian",
				"description": null,
				"top": {
				  "name": "Orosirian base",
				  "age": 2050,
				  "type": "solid"
				},
				"base": {
				  "name": "Rhyacian base",
				  "age": 2300,
				  "type": "solid"
				},
				"backgroundColor": "#f75b89"
			  },
			  {
				"name": "Siderian",
				"description": null,
				"top": {
				  "name": "Rhyacian base",
				  "age": 2300,
				  "type": "solid"
				},
				"base": {
				  "name": "Siderian base",
				  "age": 2500,
				  "type": "solid"
				},
				"backgroundColor": "#f74f7c"
			  },
			  {
				"name": " ",
				"description": null,
				"top": {
				  "name": "Siderian base",
				  "age": 2500,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 2800,
				  "type": "solid"
				},
				"backgroundColor": "#f99bc1"
			  },
			  {
				"name": " ",
				"description": null,
				"top": {
				  "name": null,
				  "age": 2800,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 3200,
				  "type": "solid"
				},
				"backgroundColor": "#f768a9"
			  },
			  {
				"name": " ",
				"description": null,
				"top": {
				  "name": null,
				  "age": 3200,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 3600,
				  "type": "solid"
				},
				"backgroundColor": "#f4449f"
			  },
			  {
				"name": " ",
				"description": null,
				"top": {
				  "name": null,
				  "age": 3600,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 4000,
				  "type": "solid"
				},
				"backgroundColor": "#da037f"
			  },
			  {
				"name": " ",
				"description": null,
				"top": {
				  "name": null,
				  "age": 4000,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 4600,
				  "type": "solid"
				},
				"backgroundColor": "#ae027e"
			  }
			]
		  },
		  "Epoch": {
			"timelines": [
			  {
				"name": "TOP",
				"age": 0,
				"type": "solid"
			  },
			  {
				"name": "Holocene base",
				"age": 0.0118,
				"type": "solid"
			  },
			  {
				"name": "Pleistocene base",
				"age": 2.580,
				"type": "solid"
			  },
			  {
				"name": "Pliocene base",
				"age": 5.333,
				"type": "solid"
			  },
			  {
				"name": "Miocene base",
				"age": 23.03,
				"type": "solid"
			  },
			  {
				"name": "Oligocene base",
				"age": 33.90,
				"type": "solid"
			  },
			  {
				"name": "Eocene base",
				"age": 55.96,
				"type": "solid"
			  },
			  {
				"name": "Paleocene base",
				"age": 66.04,
				"type": "solid"
			  },
			  {
				"name": "Late base",
				"age": 100.5,
				"type": "solid"
			  },
			  {
				"name": "Early base",
				"age": 145.01,
				"type": "dashed"
			  },
			  {
				"name": "Late base",
				"age": 163.1,
				"type": "solid"
			  },
			  {
				"name": "Middle base",
				"age": 174.15,
				"type": "solid"
			  },
			  {
				"name": "Early base",
				"age": 201.36,
				"type": "solid"
			  },
			  {
				"name": "Late base",
				"age": 237,
				"type": "solid"
			  },
			  {
				"name": "Middle base",
				"age": 246.80,
				"type": "solid"
			  },
			  {
				"name": "Early base",
				"age": 251.90,
				"type": "solid"
			  },
			  {
				"name": "Lopingian base",
				"age": 259.81,
				"type": "solid"
			  },
			  {
				"name": "Guadalupian base",
				"age": 272.3,
				"type": "solid"
			  },
			  {
				"name": "Cisuralian base",
				"age": 298.88,
				"type": "solid"
			  },
			  {
				"name": "Late Penn. base",
				"age": 306.65,
				"type": "solid"
			  },
			  {
				"name": "Middle Penn. base",
				"age": 314.6,
				"type": "dashed"
			  },
			  {
				"name": "Early Penn. base",
				"age": 323.23,
				"type": "solid"
			  },
			  {
				"name": "Late Miss. base",
				"age": 330.92,
				"type": "dashed"
			  },
			  {
				"name": "Middle Miss. base",
				"age": 346.73,
				"type": "solid"
			  },
			  {
				"name": "Early Miss. base",
				"age": 358.94,
				"type": "dashed"
			  },
			  {
				"name": "Late base",
				"age": 382.69,
				"type": "solid"
			  },
			  {
				"name": "Middle base",
				"age": 393.25,
				"type": "solid"
			  },
			  {
				"name": "Early base",
				"age": 419.2,
				"type": "solid"
			  },
			  {
				"name": "Pridoli base",
				"age": 422.96,
				"type": "solid"
			  },
			  {
				"name": "Ludlow base",
				"age": 427.36,
				"type": "solid"
			  },
			  {
				"name": "Wenlock base",
				"age": 433.35,
				"type": "dashed"
			  },
			  {
				"name": null,
				"age": 433.46,
				"type": "dashed"
			  },
			  {
				"name": "Llandovery base",
				"age": 443.83,
				"type": "solid"
			  },
			  {
				"name": "Late base",
				"age": 458.36,
				"type": "solid"
			  },
			  {
				"name": "Middle base",
				"age": 469.96,
				"type": "solid"
			  },
			  {
				"name": "Early base",
				"age": 485.37,
				"type": "solid"
			  },
			  {
				"name": "Furongian base",
				"age": 497,
				"type": "solid"
			  },
			  {
				"name": "Epoch/Series 3 base",
				"age": 509,
				"type": "solid"
			  },
			  {
				"name": "Epoch/Series 2 base",
				"age": 520,
				"type": "dashed"
			  },
			  {
				"name": "Terreneuvian base",
				"age": 541,
				"type": "solid"
			  }
			],
			"zones": [
			  {
				"name": "Holocene",
				"description": "Base Holocene = End of Younger Dryas cold interval.  Age relative to AD2000 from from ice-core layers at Greenland GSSP = 11.784 (11.8) ka.",
				"top": {
				  "name": "TOP",
				  "age": 0,
				  "type": "solid"
				},
				"base": {
				  "name": "Holocene base",
				  "age": 0.0118,
				  "type": "solid"
				},
				"backgroundColor": "#fef2e0"
			  },
			  {
				"name": "Pleistocene",
				"description": "Major expansion of N.Hemis. glaciation begins near Guss/Matuyama boundary [accepted in 2009 for base of \"Quaternary\", hence base of revised \"Pleistocene\"].  Gelasian stage was transferred to Pleistocene series by IUGS/ICS/INQUA (submitted May 2007; but was not ratified by IUGS until summer 2009 after another round of ICS voting and resubmission).  This enabled formalization of the Quaternary as an official system of the international scale.",
				"top": {
				  "name": "Holocene base",
				  "age": 0.0118,
				  "type": "solid"
				},
				"base": {
				  "name": "Pleistocene base",
				  "age": 2.580,
				  "type": "solid"
				},
				"backgroundColor": "#fff2ae"
			  },
			  {
				"name": "Pliocene",
				"description": "PLIOCENE --  Base of Pliocene is traditionally placed at base of Trubi Formation (base of Zanclean Stage) representing restoration of marine conditions in the Mediterranean following the late Miocene (Messinian) dessication.  This event occurs 5 precession cycles below the Thvera (C3n.4n) Polarity Subchron, or at 5.32 Ma [Hilgen and Langereis, 1993, \"A critical re-evaluation of the Miocene/Pliocene boundary as defined in the Mediterranean\", Earth Planet. Sci. Lett., 118: 167-179]. ",
				"top": {
				  "name": "Pleistocene base",
				  "age": 2.580,
				  "type": "solid"
				},
				"base": {
				  "name": "Pliocene base",
				  "age": 5.333,
				  "type": "solid"
				},
				"backgroundColor": "#ffff99"
			  },
			  {
				"name": "Miocene",
				"description": "Base of Miocene (base of Neogene Period) = base of Chron C6Cn.2n. The GSSP of the Oligocene/Miocene boundary is defined as 35m level of Rigorosa Formation in the Lemme-Carrosio sections of NE Italy, corresponding also to the FAD of Foram Globorotalia kugleri (base of Foram Zone M1) (Berggren et al., 1995; Steininger et al., in press)",
				"top": {
				  "name": "Pliocene base",
				  "age": 5.333,
				  "type": "solid"
				},
				"base": {
				  "name": "Miocene base",
				  "age": 23.03,
				  "type": "solid"
				},
				"backgroundColor": "#ffff00"
			  },
			  {
				"name": "Oligocene",
				"description": "Eocene/Oligocene boundary is defined at Massignano (central Italy) at the LAD of Hantkenina spp. and calibrated to magnetics, plus dated by ash beds as ca. 33.7 Ma.  Base of Rupellian is at Chron C13r.86.  Essentially, the \"top of Eocene\" is defined by a LAD, rather than a \"base of Oligocene\" (e.g., using an FAD).",
				"top": {
				  "name": "Miocene base",
				  "age": 23.03,
				  "type": "solid"
				},
				"base": {
				  "name": "Oligocene base",
				  "age": 33.90,
				  "type": "solid"
				},
				"backgroundColor": "#fdc07a"
			  },
			  {
				"name": "Eocene",
				"description": "Base of Eocene is ca. C24r.36 (decision of Paleogene-chapter group for GTS2012).  Base of Eocene is 0.94 myr (0.98 in another table) above top C25n according to cycle stratigraphy.  This is NOT tied proportionally within Chron C24r; but some indicate it as C24r.36 (e.g., used in Agnini et al'07 for calibrating nannofossil datums near boundary).  Age used here is from U-Pb => 0.05 myr lower.",
				"top": {
				  "name": "Oligocene base",
				  "age": 33.90,
				  "type": "solid"
				},
				"base": {
				  "name": "Eocene base",
				  "age": 55.96,
				  "type": "solid"
				},
				"backgroundColor": "#fdb46c"
			  },
			  {
				"name": "Paleocene",
				"description": "Mesozoic/Cenozoic boundary event is approx. Chron C29r.5 in total C29r span of ca. 710 kyr, according to cycles; Husson et al., 2011; Thibault et al., submitted)",
				"top": {
				  "name": "Eocene base",
				  "age": 55.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Paleocene base",
				  "age": 66.04,
				  "type": "solid"
				},
				"backgroundColor": "#fda75f"
			  },
			  {
				"name": "Late",
				"description": "Base-Cenomanian is base of foraminifer Rotalipora globotruncanoides, which is 6m lower than base of M. mantelli ammonite Zone at the GSSP section.  The uppermost part of the N. caractanense Subzone (basal Subzone of Cenomanian) is ~99.8 �0.37 Ma (Obradovich et al., 2002), and cycle stratigraphy scaling of its duration (0.44 myr) = 100.25 Ma, and a slight 0.25 offset to the GSSP marker below implies the base of the Cenomanian is 100.5 �0.4 Ma.",
				"top": {
				  "name": "Paleocene base",
				  "age": 66.04,
				  "type": "solid"
				},
				"base": {
				  "name": "Late base",
				  "age": 100.5,
				  "type": "solid"
				},
				"backgroundColor": "#a6d84a"
			  },
			  {
				"name": "Early",
				"description": "Base of Cretaceous (base of Berriasian) working version is Base of Chron M18r.  This is higher than B. jacobi (Tethyan ammonite zone).",
				"top": {
				  "name": "Late base",
				  "age": 100.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Early base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"backgroundColor": "#8ccd57"
			  },
			  {
				"name": "Late",
				"description": "Base of Q. mariae ammonite zone.  GSSP is not yet decided, but this level at Redcliff (England) candidate has been correlated to 25% up in Chron M37n.1n of Deep-tow extension to M-Sequence.",
				"top": {
				  "name": "Early base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"base": {
				  "name": "Late base",
				  "age": 163.1,
				  "type": "solid"
				},
				"backgroundColor": "#b3e3ee"
			  },
			  {
				"name": "Middle",
				"description": "Base of L. opalinum ammonite zone at Fuentelsaz (Spain).  ",
				"top": {
				  "name": "Late base",
				  "age": 163.1,
				  "type": "solid"
				},
				"base": {
				  "name": "Middle base",
				  "age": 174.15,
				  "type": "solid"
				},
				"backgroundColor": "#80cfd8"
			  },
			  {
				"name": "Early",
				"description": "Lowest occurrence of the ammonite Psiloceras spelae at Kuhjoch (Austria).",
				"top": {
				  "name": "Middle base",
				  "age": 174.15,
				  "type": "solid"
				},
				"base": {
				  "name": "Early base",
				  "age": 201.36,
				  "type": "solid"
				},
				"backgroundColor": "#42aed0"
			  },
			  {
				"name": "Late",
				"description": null,
				"top": {
				  "name": "Early base",
				  "age": 201.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Late base",
				  "age": 237,
				  "type": "solid"
				},
				"backgroundColor": "#bd8cc3"
			  },
			  {
				"name": "Middle",
				"description": null,
				"top": {
				  "name": "Late base",
				  "age": 237,
				  "type": "solid"
				},
				"base": {
				  "name": "Middle base",
				  "age": 246.8,
				  "type": "solid"
				},
				"backgroundColor": "#b168b1"
			  },
			  {
				"name": "Early",
				"description": "Base Triassic is coeval with FAD of H. parvus conodont",
				"top": {
				  "name": "Middle base",
				  "age": 246.8,
				  "type": "solid"
				},
				"base": {
				  "name": "Early base",
				  "age": 251.90,
				  "type": "solid"
				},
				"backgroundColor": "#983999"
			  },
			  {
				"name": "Lopingian",
				"description": "Late Permian",
				"top": {
				  "name": "Early base",
				  "age": 251.90,
				  "type": "solid"
				},
				"base": {
				  "name": "Lopingian base",
				  "age": 259.81,
				  "type": "solid"
				},
				"backgroundColor": "#fba794"
			  },
			  {
				"name": "Guadalupian",
				"description": "Middle Permian",
				"top": {
				  "name": "Lopingian base",
				  "age": 259.81,
				  "type": "solid"
				},
				"base": {
				  "name": "Guadalupian base",
				  "age": 272.3,
				  "type": "solid"
				},
				"backgroundColor": "#fb745c"
			  },
			  {
				"name": "Cisuralian",
				"description": "Base PERMIAN is coeval with FAD of Streptognathodus isolatus conodont",
				"top": {
				  "name": "Guadalupian base",
				  "age": 272.3,
				  "type": "solid"
				},
				"base": {
				  "name": "Cisuralian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"backgroundColor": "#ef5845"
			  },
			  {
				"name": "Late Penn.",
				"description": "Late Pennsylvanian",
				"top": {
				  "name": "Cisuralian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"base": {
				  "name": "Late Penn. base",
				  "age": 306.65,
				  "type": "solid"
				},
				"backgroundColor": "#bfd0ba"
			  },
			  {
				"name": "Middle Penn.",
				"description": "Middle Pennsylvanian",
				"top": {
				  "name": "Late Penn. base",
				  "age": 306.65,
				  "type": "solid"
				},
				"base": {
				  "name": "Middle Penn. base",
				  "age": 314.6,
				  "type": "dashed"
				},
				"backgroundColor": "#a6c7b7"
			  },
			  {
				"name": "Early Penn.",
				"description": "Early Pennsylvanian",
				"top": {
				  "name": "Middle Penn. base",
				  "age": 314.6,
				  "type": "dashed"
				},
				"base": {
				  "name": "Early Penn. base",
				  "age": 323.23,
				  "type": "solid"
				},
				"backgroundColor": "#8cbeb4"
			  },
			  {
				"name": "Late Miss.",
				"description": "Late Mississippian",
				"top": {
				  "name": "Early Penn. base",
				  "age": 323.23,
				  "type": "solid"
				},
				"base": {
				  "name": "Late Miss. base",
				  "age": 330.92,
				  "type": "dashed"
				},
				"backgroundColor": "#b3be6c"
			  },
			  {
				"name": "Middle Miss.",
				"description": "Middle Mississippian",
				"top": {
				  "name": "Late Miss. base",
				  "age": 330.92,
				  "type": "dashed"
				},
				"base": {
				  "name": "Middle Miss. base",
				  "age": 346.73,
				  "type": "solid"
				},
				"backgroundColor": "#99b46c"
			  },
			  {
				"name": "Early Miss.",
				"description": "Early Mississippian",
				"top": {
				  "name": "Middle Miss. base",
				  "age": 346.73,
				  "type": "solid"
				},
				"base": {
				  "name": "Early Miss. base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"backgroundColor": "#80ab6c"
			  },
			  {
				"name": "Late",
				"description": "Base of Frasnian",
				"top": {
				  "name": "Early Miss. base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"base": {
				  "name": "Late base",
				  "age": 382.69,
				  "type": "solid"
				},
				"backgroundColor": "#f1e19d"
			  },
			  {
				"name": "Middle",
				"description": "Base of Eifelian",
				"top": {
				  "name": "Late base",
				  "age": 382.69,
				  "type": "solid"
				},
				"base": {
				  "name": "Middle base",
				  "age": 393.25,
				  "type": "solid"
				},
				"backgroundColor": "#f1c868"
			  },
			  {
				"name": "Early",
				"description": "Base of Devonian is immediately below the lowest occurrence of the graptolite species Monograptus uniformis",
				"top": {
				  "name": "Middle base",
				  "age": 393.25,
				  "type": "solid"
				},
				"base": {
				  "name": "Early base",
				  "age": 419.2,
				  "type": "solid"
				},
				"backgroundColor": "#e5ac4d"
			  },
			  {
				"name": "Pridoli",
				"description": "Base of Pridoli Series coincides with the lowest occurrence of the graptolite species Monograptus parultimus",
				"top": {
				  "name": "Early base",
				  "age": 419.2,
				  "type": "solid"
				},
				"base": {
				  "name": "Pridoli base",
				  "age": 422.96,
				  "type": "solid"
				},
				"backgroundColor": "#e6f5e1"
			  },
			  {
				"name": "Ludlow",
				"description": "DASH -- Base of Ludlow and Gorstian is just below the base of the Neodiversograptus nilssoni graptolite zone (age estimate set as Base of Zone)",
				"top": {
				  "name": "Pridoli base",
				  "age": 422.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Ludlow base",
				  "age": 427.36,
				  "type": "solid"
				},
				"backgroundColor": "#bfe6cf"
			  },
			  {
				"name": "Wenlock",
				"description": "DASHED Imprecise. Base of Wenlock at GSSP is between the base of acritarch biozone 5 and LAD of conodont Pterospathodus amorphognathoides. The current GSSP does not coincide with the base of the Cyrtograptus centrifugus Biozone, as was supposed when the GSSP was defined. Restudy recommends a slightly higher and correlatable level on conodonts -- the Ireviken datum 2, which coincides approximately with the base of the murchisoni Graptolite Biozone (about 0.1 myr higher).",
				"top": {
				  "name": "Ludlow base",
				  "age": 427.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Wenlock base",
				  "age": 433.35,
				  "type": "dashed"
				},
				"backgroundColor": "#b3e1c2"
			  },
			  {
				"name": " ",
				"description": "DASHED lower possibility = base of centrifugus graptolite zone. ",
				"top": {
				  "name": "Wenlock base",
				  "age": 433.35,
				  "type": "dashed"
				},
				"base": {
				  "name": null,
				  "age": 433.46,
				  "type": "dashed"
				},
				"backgroundColor": "#b3e1c2"
			  },
			  {
				"name": "Llandovery",
				"description": "Base of Silurian coincides with incoming of graptolite Parakidograptus Akidograptus ascensus",
				"top": {
				  "name": null,
				  "age": 433.46,
				  "type": "dashed"
				},
				"base": {
				  "name": "Llandovery base",
				  "age": 443.83,
				  "type": "solid"
				},
				"backgroundColor": "#99d7b3"
			  },
			  {
				"name": "Late",
				"description": null,
				"top": {
				  "name": "Llandovery base",
				  "age": 443.83,
				  "type": "solid"
				},
				"base": {
				  "name": "Late base",
				  "age": 458.36,
				  "type": "solid"
				},
				"backgroundColor": "#7fca93"
			  },
			  {
				"name": "Middle",
				"description": null,
				"top": {
				  "name": "Late base",
				  "age": 458.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Middle base",
				  "age": 469.96,
				  "type": "solid"
				},
				"backgroundColor": "#4db47e"
			  },
			  {
				"name": "Early",
				"description": null,
				"top": {
				  "name": "Middle base",
				  "age": 469.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Early base",
				  "age": 485.37,
				  "type": "solid"
				},
				"backgroundColor": "#1a9d6f"
			  },
			  {
				"name": "Furongian",
				"description": "Base of the Paibian is base of the G. reticulatus Trilobite Zone.",
				"top": {
				  "name": "Early base",
				  "age": 485.37,
				  "type": "solid"
				},
				"base": {
				  "name": "Furongian base",
				  "age": 497,
				  "type": "solid"
				},
				"backgroundColor": "#b3e095"
			  },
			  {
				"name": "Epoch/Series 3",
				"description": "Oryctocephalus indicus FAD",
				"top": {
				  "name": "Furongian base",
				  "age": 497,
				  "type": "solid"
				},
				"base": {
				  "name": "Epoch/Series 3 base",
				  "age": 509,
				  "type": "solid"
				},
				"backgroundColor": "#a6cf86"
			  },
			  {
				"name": "Epoch/Series 2",
				"description": "First occurrence of TRILOBITES",
				"top": {
				  "name": "Epoch/Series 3 base",
				  "age": 509,
				  "type": "solid"
				},
				"base": {
				  "name": "Epoch/Series 2 base",
				  "age": 520,
				  "type": "dashed"
				},
				"backgroundColor": "#99c078"
			  },
			  {
				"name": "Terreneuvian",
				"description": "0",
				"top": {
				  "name": "Epoch/Series 2 base",
				  "age": 520,
				  "type": "dashed"
				},
				"base": {
				  "name": "Terreneuvian base",
				  "age": 541,
				  "type": "solid"
				},
				"backgroundColor": "#8cb06c"
			  }
			]
		  },
		  "Age/Stage": {
			"timelines": [
			  {
				"name": "TOP",
				"age": 0.0118,
				"type": "solid"
			  },
			  {
				"name": "Tarantian (Lt. Pleist.) base",
				"age": 0.13,
				"type": "solid"
			  },
			  {
				"name": "Ionian (M. Pleist.) base",
				"age": 0.773,
				"type": "solid"
			  },
			  {
				"name": "Calabrian base",
				"age": 1.8,
				"type": "solid"
			  },
			  {
				"name": "Gelasian base",
				"age": 2.58,
				"type": "solid"
			  },
			  {
				"name": "Piacenzian base",
				"age": 3.6,
				"type": "solid"
			  },
			  {
				"name": "Zanclean base",
				"age": 5.333,
				"type": "solid"
			  },
			  {
				"name": "Messinian base",
				"age": 7.246,
				"type": "solid"
			  },
			  {
				"name": "Tortonian base",
				"age": 11.625,
				"type": "solid"
			  },
			  {
				"name": "Serravallian base",
				"age": 13.82,
				"type": "solid"
			  },
			  {
				"name": "Langhian base",
				"age": 15.97,
				"type": "solid"
			  },
			  {
				"name": "Burdigalian base",
				"age": 20.44,
				"type": "dashed"
			  },
			  {
				"name": "Aquitanian base",
				"age": 23.03,
				"type": "solid"
			  },
			  {
				"name": "Chattian base",
				"age": 28.09,
				"type": "dashed"
			  },
			  {
				"name": "Rupelian base",
				"age": 33.9,
				"type": "solid"
			  },
			  {
				"name": "Priabonian base",
				"age": 37.99,
				"type": "dashed"
			  },
			  {
				"name": "Bartonian base",
				"age": 41.03,
				"type": "dashed"
			  },
			  {
				"name": "Lutetian base",
				"age": 47.84,
				"type": "solid"
			  },
			  {
				"name": "Ypresian base",
				"age": 55.96,
				"type": "solid"
			  },
			  {
				"name": "Thanetian base",
				"age": 59.24,
				"type": "solid"
			  },
			  {
				"name": "Selandian base",
				"age": 61.61,
				"type": "solid"
			  },
			  {
				"name": "Danian base",
				"age": 66.04,
				"type": "solid"
			  },
			  {
				"name": "Maastrichtian base",
				"age": 72.05,
				"type": "solid"
			  },
			  {
				"name": "Campanian base",
				"age": 84.19,
				"type": "dashed"
			  },
			  {
				"name": "Santonian base",
				"age": 86.26,
				"type": "dashed"
			  },
			  {
				"name": "Coniacian base",
				"age": 89.75,
				"type": "dashed"
			  },
			  {
				"name": "Turonian base",
				"age": 93.9,
				"type": "solid"
			  },
			  {
				"name": "Cenomanian base",
				"age": 100.5,
				"type": "solid"
			  },
			  {
				"name": "Albian base",
				"age": 113.14,
				"type": "dashed"
			  },
			  {
				"name": "Aptian base",
				"age": 126.3,
				"type": "solid"
			  },
			  {
				"name": "Barremian base",
				"age": 130.77,
				"type": "solid"
			  },
			  {
				"name": "Hauterivian base",
				"age": 134.69,
				"type": "solid"
			  },
			  {
				"name": "Valanginian base",
				"age": 139.39,
				"type": "solid"
			  },
			  {
				"name": "Berriasian base",
				"age": 145.01,
				"type": "dashed"
			  },
			  {
				"name": "Tithonian base",
				"age": 152.06,
				"type": "solid"
			  },
			  {
				"name": "Kimmeridgian base",
				"age": 157.25,
				"type": "solid"
			  },
			  {
				"name": "Oxfordian base",
				"age": 163.1,
				"type": "solid"
			  },
			  {
				"name": "Callovian base",
				"age": 166.07,
				"type": "solid"
			  },
			  {
				"name": "Bathonian base",
				"age": 168.28,
				"type": "solid"
			  },
			  {
				"name": "Bajocian base",
				"age": 170.3,
				"type": "solid"
			  },
			  {
				"name": "Aalenian base",
				"age": 174.15,
				"type": "solid"
			  },
			  {
				"name": "Toarcian base",
				"age": 183.7,
				"type": "solid"
			  },
			  {
				"name": "Pliensbachian base",
				"age": 191.36,
				"type": "solid"
			  },
			  {
				"name": "Sinemurian base",
				"age": 199.4,
				"type": "solid"
			  },
			  {
				"name": "Hettangian base",
				"age": 201.36,
				"type": "solid"
			  },
			  {
				"name": "Rhaetian base",
				"age": 209.56,
				"type": "dashed"
			  },
			  {
				"name": "Norian base",
				"age": 228.45,
				"type": "dashed"
			  },
			  {
				"name": "Carnian base",
				"age": 237,
				"type": "solid"
			  },
			  {
				"name": "Ladinian base",
				"age": 241.5,
				"type": "solid"
			  },
			  {
				"name": "Anisian base",
				"age": 246.8,
				"type": "solid"
			  },
			  {
				"name": "Olenekian base",
				"age": 249.81,
				"type": "dashed"
			  },
			  {
				"name": "Induan base",
				"age": 251.9,
				"type": "solid"
			  },
			  {
				"name": "Changhsingian base",
				"age": 254.2,
				"type": "solid"
			  },
			  {
				"name": "Wuchiapingian base",
				"age": 259.81,
				"type": "solid"
			  },
			  {
				"name": "Capitanian base",
				"age": 265.14,
				"type": "solid"
			  },
			  {
				"name": "Wordian base",
				"age": 268.8,
				"type": "solid"
			  },
			  {
				"name": "Roadian base",
				"age": 272.3,
				"type": "solid"
			  },
			  {
				"name": "Kungurian base",
				"age": 282,
				"type": "solid"
			  },
			  {
				"name": "Artinskian base",
				"age": 290.06,
				"type": "solid"
			  },
			  {
				"name": "Sakmarian base",
				"age": 295.5,
				"type": "solid"
			  },
			  {
				"name": "Asselian base",
				"age": 298.88,
				"type": "solid"
			  },
			  {
				"name": "Gzhelian base",
				"age": 303.65,
				"type": "solid"
			  },
			  {
				"name": "Kasimovian base",
				"age": 306.65,
				"type": "solid"
			  },
			  {
				"name": "Moscovian base",
				"age": 314.6,
				"type": "dashed"
			  },
			  {
				"name": "Bashkirian base",
				"age": 323.23,
				"type": "solid"
			  },
			  {
				"name": "Serpukhovian base",
				"age": 330.92,
				"type": "dashed"
			  },
			  {
				"name": "Visean base",
				"age": 346.73,
				"type": "solid"
			  },
			  {
				"name": "Tournaisian base",
				"age": 358.94,
				"type": "dashed"
			  },
			  {
				"name": "Famennian base",
				"age": 372.24,
				"type": "solid"
			  },
			  {
				"name": "Frasnian base",
				"age": 382.69,
				"type": "solid"
			  },
			  {
				"name": "Givetian base",
				"age": 387.72,
				"type": "solid"
			  },
			  {
				"name": "Eifelian base",
				"age": 393.25,
				"type": "solid"
			  },
			  {
				"name": "Emsian base",
				"age": 407.57,
				"type": "solid"
			  },
			  {
				"name": "Pragian base",
				"age": 410.78,
				"type": "solid"
			  },
			  {
				"name": "Lochkovian base",
				"age": 419.2,
				"type": "solid"
			  },
			  {
				"name": null,
				"age": 422.96,
				"type": "solid"
			  },
			  {
				"name": "Ludfordian base",
				"age": 425.57,
				"type": "solid"
			  },
			  {
				"name": "Gorstian base",
				"age": 427.36,
				"type": "solid"
			  },
			  {
				"name": "Homerian base",
				"age": 430.45,
				"type": "solid"
			  },
			  {
				"name": "Sheinwoodian base",
				"age": 433.35,
				"type": "dashed"
			  },
			  {
				"name": null,
				"age": 433.46,
				"type": "dashed"
			  },
			  {
				"name": "Telychian base",
				"age": 438.49,
				"type": "solid"
			  },
			  {
				"name": "Aeronian base",
				"age": 440.77,
				"type": "solid"
			  },
			  {
				"name": "Rhuddanian base",
				"age": 443.83,
				"type": "solid"
			  },
			  {
				"name": "Hirnantian base",
				"age": 445.16,
				"type": "solid"
			  },
			  {
				"name": "Katian base",
				"age": 452.97,
				"type": "solid"
			  },
			  {
				"name": "Sandbian base",
				"age": 458.36,
				"type": "solid"
			  },
			  {
				"name": "Darriwilian base",
				"age": 467.25,
				"type": "solid"
			  },
			  {
				"name": "Dapingian base",
				"age": 469.96,
				"type": "solid"
			  },
			  {
				"name": "Floian base",
				"age": 477.72,
				"type": "solid"
			  },
			  {
				"name": "Tremadocian base",
				"age": 485.37,
				"type": "solid"
			  },
			  {
				"name": "Age 10 base",
				"age": 489.5,
				"type": "solid"
			  },
			  {
				"name": "Jiangshanian base",
				"age": 494,
				"type": "solid"
			  },
			  {
				"name": "Paibian base",
				"age": 497,
				"type": "solid"
			  },
			  {
				"name": "Guzhangian base",
				"age": 500.5,
				"type": "solid"
			  },
			  {
				"name": "Drumian base",
				"age": 504.5,
				"type": "solid"
			  },
			  {
				"name": "Age 5 base",
				"age": 509,
				"type": "solid"
			  },
			  {
				"name": "Age 4 base",
				"age": 514,
				"type": "dashed"
			  },
			  {
				"name": "Age 3 base",
				"age": 520,
				"type": "dashed"
			  },
			  {
				"name": "Age 2 base",
				"age": 530,
				"type": "dashed"
			  },
			  {
				"name": "Fortunian base",
				"age": 541,
				"type": "solid"
			  }
			],
			"zones": [
			  {
				"name": "Tarantian (Lt. Pleist.)",
				"description": "Tarantian is the probable name for this \"Lt. Pleistocene\" interval, which spans the last Interglacial and following glacial cycle.  Base = Eemian Interglacial interval",
				"top": {
				  "name": "TOP",
				  "age": 0.0118,
				  "type": "solid"
				},
				"base": {
				  "name": "Tarantian (Lt. Pleist.) base",
				  "age": 0.13,
				  "type": "solid"
				},
				"backgroundColor": "#fff2d3"
			  },
			  {
				"name": "Ionian (M. Pleist.)",
				"description": "Ionian is the probably name for this \"M. Pleistocene\" interval.  Base = base of Brunhes Chron",
				"top": {
				  "name": "Tarantian (Lt. Pleist.) base",
				  "age": 0.13,
				  "type": "solid"
				},
				"base": {
				  "name": "Ionian (M. Pleist.) base",
				  "age": 0.773,
				  "type": "solid"
				},
				"backgroundColor": "#fff2c7"
			  },
			  {
				"name": "Calabrian",
				"description": "Calabrian (former base of PLEISTOCENE pre-2009) --  The Calabrian begins with \"base of a claystone unit conformably overlying sapropel marker bed \"e\" in the Vrica section of Calabria in southern Italy.  This is at or near the top of the Olduvai (C2n) Normal polarity chron.",
				"top": {
				  "name": "Ionian (M. Pleist.) base",
				  "age": 0.773,
				  "type": "solid"
				},
				"base": {
				  "name": "Calabrian base",
				  "age": 1.8,
				  "type": "solid"
				},
				"backgroundColor": "#fff2ba"
			  },
			  {
				"name": "Gelasian",
				"description": "Major expansion of N.Hemis. glaciation begins near Guss/Matuyama boundary [accepted in 2009 for base of \"Quaternary\", hence base of revised \"Pleistocene\"].  Gelasian stage was transferred to Pleistocene series by IUGS/ICS/INQUA (submitted May 2007; but was not ratified by IUGS until summer 2009 after another round of ICS voting and resubmission).  This enabled formalization of the Quaternary as an official system of the international scale.",
				"top": {
				  "name": "Calabrian base",
				  "age": 1.8,
				  "type": "solid"
				},
				"base": {
				  "name": "Gelasian base",
				  "age": 2.588,
				  "type": "solid"
				},
				"backgroundColor": "#ffffcc"
			  },
			  {
				"name": "Piacenzian",
				"description": "Zanclean/Piacenzian boundary = cycle near base of Gauss Normal; working definition of Langereis and Hilgen, 1991",
				"top": {
				  "name": "Gelasian base",
				  "age": 2.58,
				  "type": "solid"
				},
				"base": {
				  "name": "Piacenzian base",
				  "age": 3.6,
				  "type": "solid"
				},
				"backgroundColor": "#ffffbf"
			  },
			  {
				"name": "Zanclean",
				"description": "PLIOCENE --  Base of Pliocene is traditionally placed at base of Trubi Formation (base of Zanclean Stage) representing restoration of marine conditions in the Mediterranean following the late Miocene (Messinian) dessication.  This event occurs 5 precession cycles below the Thvera (C3n.4n) Polarity Subchron, or at 5.32 Ma [Hilgen and Langereis, 1993, \"A critical re-evaluation of the Miocene/Pliocene boundary as defined in the Mediterranean\", Earth Planet. Sci. Lett., 118: 167-179]. ",
				"top": {
				  "name": "Piacenzian base",
				  "age": 3.6,
				  "type": "solid"
				},
				"base": {
				  "name": "Zanclean base",
				  "age": 5.333,
				  "type": "solid"
				},
				"backgroundColor": "#ffffb3"
			  },
			  {
				"name": "Messinian",
				"description": "Base of Messinian (Top of Tortonian) is linked to the FAD of Globorotalia conomiozea (Foram) in the Falconara section in Sicily (e.g., Colalongo et al., 1979); and this datum is within polarity chron C3Br.1r in Crete with an astronomical chronology age of 7.1 Ma to this level (Krijgsman et al., 1994) (summarized in Berggren et al., 1995).  Radiometric dating yields 7.26 ±0.1 Ma (Vai et al., 1993), which is almost within the magnetostratigraphic estimate.",
				"top": {
				  "name": "Zanclean base",
				  "age": 5.333,
				  "type": "solid"
				},
				"base": {
				  "name": "Messinian base",
				  "age": 7.246,
				  "type": "solid"
				},
				"backgroundColor": "#ffff73"
			  },
			  {
				"name": "Tortonian",
				"description": "Base of Tortonian Stage = Midpoint sapropel 76 in the Monte dei Corvi section, Italy (Hilgen et al., 2003)",
				"top": {
				  "name": "Messinian base",
				  "age": 7.246,
				  "type": "solid"
				},
				"base": {
				  "name": "Tortonian base",
				  "age": 11.625,
				  "type": "solid"
				},
				"backgroundColor": "#ffff66"
			  },
			  {
				"name": "Serravallian",
				"description": "Base-Serravallian GSSP (rratified 2007) = major Mi-3b cooling = Seq Boundary TB2.5 = Hardenbol's Ser 1.  Astronomical-tuned age is 13.82 Ma.   Approximately 0.65 myr (ca. 32 precession cycles) above the base of magnetic polarity Chron C26r.   Above (13.65 Ma) is the lowest occurrence of nannofossil Sphenolithus heteromorphus (which was working base of Serravallian in GTS2004).",
				"top": {
				  "name": "Tortonian base",
				  "age": 11.608,
				  "type": "solid"
				},
				"base": {
				  "name": "Serravallian base",
				  "age": 13.82,
				  "type": "solid"
				},
				"backgroundColor": "#ffff59"
			  },
			  {
				"name": "Langhian",
				"description": "Base of Langhian = base of Chron C5Br in GTS2004",
				"top": {
				  "name": "Serravallian base",
				  "age": 13.82,
				  "type": "solid"
				},
				"base": {
				  "name": "Langhian base",
				  "age": 15.97,
				  "type": "solid"
				},
				"backgroundColor": "#ffff4d"
			  },
			  {
				"name": "Burdigalian",
				"description": "Base-Burdigalian -- Current working group (cited in Lourens et al., GTS2004) adopted age of FAD of nanno H. ampliaperta, as calibrated at Ceara Rise..  Berggren et al (1995) assigned base of Burdigalian to FAD of foram \"Globigerinoides\" altiaperturus.  Base of Burdigalian (working version) = approx. base of Chron C6An.1r (used here) or of Chron C6An.1n",
				"top": {
				  "name": "Langhian base",
				  "age": 15.97,
				  "type": "solid"
				},
				"base": {
				  "name": "Burdigalian base",
				  "age": 20.44,
				  "type": "dashed"
				},
				"backgroundColor": "#ffff41"
			  },
			  {
				"name": "Aquitanian",
				"description": "Base of Miocene (base of Neogene Period) = base of Chron C6Cn.2n. The GSSP of the Oligocene/Miocene boundary is defined as 35m level of Rigorosa Formation in the Lemme-Carrosio sections of NE Italy, corresponding also to the FAD of Foram Globorotalia kugleri (base of Foram Zone M1) (Berggren et al., 1995; Steininger et al., in press)",
				"top": {
				  "name": "Burdigalian base",
				  "age": 20.44,
				  "type": "dashed"
				},
				"base": {
				  "name": "Aquitanian base",
				  "age": 23.03,
				  "type": "solid"
				},
				"backgroundColor": "#ffff33"
			  },
			  {
				"name": "Chattian",
				"description": "Base of Chattian (Early/Late Oligocene boundary ) has not been defined (as of 2011).  Base of Chattian (working version) base of Chron C10n.1n (same as GTS08).  [NOTE: Base is potentially at ~70% up in \"undifferentiated Chron C10n\" in candidate GSSP in Italy (Coccioni et al., 2008), which would project as equivalent to C10n.1n.4.]  Potentially at 2/3rds up in undifferentiated Chron C10n in candidate GSSP in Italy (Coccioni et al., 2008).  Assigned in GTS08 as base of Chron C10n.1n = Foram Zone P21a/P21b boundary (=LAD of common Chiloguembelina occurrence => last occurrence defines top of Rupelian, rather than an FAD defining base of Chattian) following Berggren et al. (1995).  Ideally, this level would be at the base of polarity chron (C9r or C10n.1n), which provides a global marker.",
				"top": {
				  "name": "Aquitanian base",
				  "age": 23.03,
				  "type": "solid"
				},
				"base": {
				  "name": "Chattian base",
				  "age": 28.09,
				  "type": "dashed"
				},
				"backgroundColor": "#fee6aa"
			  },
			  {
				"name": "Rupelian",
				"description": "Eocene/Oligocene boundary is defined at Massignano (central Italy) at the LAD of Hantkenina spp. and calibrated to magnetics, plus dated by ash beds as ca. 33.7 Ma.  Base of Rupellian is at Chron C13r.86.  Essentially, the \"top of Eocene\" is defined by a LAD, rather than a \"base of Oligocene\" (e.g., using an FAD).",
				"top": {
				  "name": "Chattian base",
				  "age": 28.09,
				  "type": "dashed"
				},
				"base": {
				  "name": "Rupelian base",
				  "age": 33.9,
				  "type": "solid"
				},
				"backgroundColor": "#fed99a"
			  },
			  {
				"name": "Priabonian",
				"description": "Base of Priabonian assigned here as base of Chron C17n.1n.  However; at Alano (candidate GSSP section in Italy), the RARE FAD of C. oamaruensis and proposed GSSP level is 10% up in C17n.2n (about 0.3 myr older)",
				"top": {
				  "name": "Rupelian base",
				  "age": 33.9,
				  "type": "solid"
				},
				"base": {
				  "name": "Priabonian base",
				  "age": 37.99,
				  "type": "dashed"
				},
				"backgroundColor": "#fdcda1"
			  },
			  {
				"name": "Bartonian",
				"description": "Base of Bartonian (working version) assigned as base of Chron C18r.  The base of Bartonian is typically correlated to a level within Nanno Zone NP16, and closely associated with LAD of Reticulofenestra reticulata (Leg 320-321 cite same chron-age scaling as chron-age scaling as Berggren et al. (1995); = ca. C19r.7.  Berggren et al. (1995) equate to the TOP of polarity chron C19n (base of C18r), implying an age estimate of 41.25 Ma.",
				"top": {
				  "name": "Priabonian base",
				  "age": 37.99,
				  "type": "dashed"
				},
				"base": {
				  "name": "Bartonian base",
				  "age": 41.03,
				  "type": "dashed"
				},
				"backgroundColor": "#fdc091"
			  },
			  {
				"name": "Lutetian",
				"description": "Base of Lutetian is Chron C21r.6 (decision of Paleogene-chapter group of GTS2012).  Base of Lutetian (GSSP ratified Feb 2011) is base of nannofossil Blackites inflatus at Gorrondatxe section in Spain.  This level is 39 precession cycles (0.78myr if 20 kyr; 0.819 if 21 kyr) above base of Chron C21r at Otsakar section near GSSP one (using 20kyr/cycle for average precession at 50 Ma = computation used here => this is at C21r.77 using GTS2012 spline.  NOTE:  Using Lutetian GSSP proposal's assignment of \"uncertain = R\" at top of C21r (as they indicate with their labeled C21n/C21r level), then this was lower -- 40% up in C21r -- age from spline-fit with cycles.  Therefore, this is about 0.78 myr above the GTS04 working placement as base of C21r (following Berggren et al'95)",
				"top": {
				  "name": "Bartonian base",
				  "age": 41.03,
				  "type": "dashed"
				},
				"base": {
				  "name": "Lutetian base",
				  "age": 47.84,
				  "type": "solid"
				},
				"backgroundColor": "#fcb482"
			  },
			  {
				"name": "Ypresian",
				"description": "Base of Eocene is ca. C24r.36 (decision of Paleogene-chapter group for GTS2012).  Base of Eocene is 0.94 myr (0.98 in another table) above top C25n according to cycle stratigraphy.  This is NOT tied proportionally within Chron C24r; but some indicate it as C24r.36 (e.g., used in Agnini et al'07 for calibrating nannofossil datums near boundary).  Age used here is from U-Pb => 0.05 myr lower.",
				"top": {
				  "name": "Lutetian base",
				  "age": 47.84,
				  "type": "solid"
				},
				"base": {
				  "name": "Ypresian base",
				  "age": 55.96,
				  "type": "solid"
				},
				"backgroundColor": "#fca773"
			  },
			  {
				"name": "Thanetian",
				"description": "Base of Thanetian (Ratified by ICS/IUGS (Spr'08):  Base of magnetic polarity Chron C26n = same as temporary assignment in GTS2004 (GSSP in Zumaya, Spain), as in Berggren et al., 1995",
				"top": {
				  "name": "Ypresian base",
				  "age": 55.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Thanetian base",
				  "age": 59.24,
				  "type": "solid"
				},
				"backgroundColor": "#fdbf6f"
			  },
			  {
				"name": "Selandian",
				"description": "Ratified by ICS/IUGS (Spr'08):  Onset of a carbon isotope shift and sea-level drop (Exxon/Hardenbol sequence boundary \"Sel1\"); near diversification of the Fasciculith group of calcareous nannoplankton, preceding the lowest Fasciculithus tympaniformis (base of nannoplankton zone NP5).  Approximately 0.58 myr (ca. 32 precession cycles) above the base of magnetic polarity Chron C26r.  [Revised definition is about 0.6 myr younger than GTS04 provisional version (which was base of Chron C26r)]  (61.1Ma -- BUT SHOULD BE 61.0 Ma in GTS04 magscale) ",
				"top": {
				  "name": "Thanetian base",
				  "age": 59.24,
				  "type": "solid"
				},
				"base": {
				  "name": "Selandian base",
				  "age": 61.61,
				  "type": "solid"
				},
				"backgroundColor": "#febf65"
			  },
			  {
				"name": "Danian",
				"description": "Mesozoic/Cenozoic boundary event is approx. Chron C29r.5 in total C29r span of ca. 710 kyr, according to cycles; Husson et al., 2011; Thibault et al., submitted)",
				"top": {
				  "name": "Selandian base",
				  "age": 61.61,
				  "type": "solid"
				},
				"base": {
				  "name": "Danian base",
				  "age": 66.04,
				  "type": "solid"
				},
				"backgroundColor": "#fdb462"
			  },
			  {
				"name": "Maastrichtian",
				"description": "Cobban et al., 2006 \"However, in regard to the sequence at Tercis, France, which has the Global Standard Stratotype Section and Point for the Campanian-Maastrichtian Stage boundary, the base of the Maastrichtian should be placed high in the Baculites eliasi Zone (Walaszczyk et al., 2002). The latter placement of the boundary is accepted ...[NOTE: Their summary table had as Top, hence base of Baculites baculus, used here]. Odin (2001) considered base-Maastrichtian GSSP to project to near base of N.Amer. B. jenseni ammonite zone.  Cobban's zonation of 1993 had estimated base-Campanian (prior to setting of GSSP) was approximately at base of B. eliasi ammonite zone.  [GTS04: \"The last occurrence of the calcareous nannofossil Quadrum trifidum at the top of belemnite B. obtusa zone in NW Germany has a projected age of 69.9 Ma [=mid-B. grandis N.Amer. ammonite zone], based on strontium-isotope curve calibrations to dated-bentonite sections in the U.S. western interior (McArthur, 1993, 1994).  Therefore, if this highest occurrence of Q. trifidum is synchronous with its position at 16 m above the GSSP at Tercis, then the estimated sediment accumulation rate of 25 m/myr in this Tercis interval indicates that the underling GSSP level is 0.75 myr prior to this age (Odin, 2001), or at approximately 70.6 Ma.  This radiometric age is within the Baculites baculus or overlying Baculites grandis ammonoid zone of the U.S. western interior (McArthur et al., 1993).\"]",
				"top": {
				  "name": "Danian base",
				  "age": 66.04,
				  "type": "solid"
				},
				"base": {
				  "name": "Maastrichtian base",
				  "age": 72.05,
				  "type": "solid"
				},
				"backgroundColor": "#f2fa8c"
			  },
			  {
				"name": "Campanian",
				"description": "Base-Campanian is the extinction of crinoid Marsupites testudinarius (provisional boundary marker).  For this scale, we have assumed equivalence with base of S. leei III ammonite Zone of Western Interior.",
				"top": {
				  "name": "Maastrichtian base",
				  "age": 72.05,
				  "type": "solid"
				},
				"base": {
				  "name": "Campanian base",
				  "age": 84.19,
				  "type": "dashed"
				},
				"backgroundColor": "#e6f47f"
			  },
			  {
				"name": "Santonian",
				"description": "85.85 retained as 85.8 in GTS04; GSSP not yet decided",
				"top": {
				  "name": "Campanian base",
				  "age": 84.19,
				  "type": "dashed"
				},
				"base": {
				  "name": "Santonian base",
				  "age": 86.26,
				  "type": "dashed"
				},
				"backgroundColor": "#d9ef74"
			  },
			  {
				"name": "Coniacian",
				"description": "The base of the Coniacian Stage is the lowest occurrence of the Cremnoceramus rotundatus (sensu Tröger non Fiege) inoceramid bivalve.  In GTS04, this inoceramid datum had been considered to be slightly older (suggested by U. Kaplan, in northern Germany) than the lowest occurrence of ammonite Forresteria petrocoriensis, which had a spline-fit age of 89.07 Ma.  Therefore, the base-Coniacian had been estimated as 89.3 Ma.  However, it is now known from inoceramid-ammonite calibration studies that the onset of the F. petrocoriensis zone (or Foresteria peruuana zone) is in late Turonian, and the Coniacian as defined above begins approximately at the base of the overlying Scaphites preventricosus ammonite zone (age of 88.58 Ma in GTS04; which had been used as the Early/Middle Coniacian boundary level !!).  Other than the inoceramid datum and associated base-Coniacian GSSP age, this correction does not alter any of the assigned ages for any other biostratigraphic or other stratigraphic events.   [NOTE: 88.58 rounds off to 88.6]",
				"top": {
				  "name": "Santonian base",
				  "age": 86.26,
				  "type": "dashed"
				},
				"base": {
				  "name": "Coniacian base",
				  "age": 89.75,
				  "type": "dashed"
				},
				"backgroundColor": "#cce968"
			  },
			  {
				"name": "Turonian",
				"description": "The base of the Turonian Stage is at the base of Bed 86 of the Bridge Creek Limestone Member, west of Pueblo, Colorado, USA. The GSSP coincides with the first occurrence of the ammonite Watinoceras devonense, is in the middle of a global positive excursion in carbon 13 isotopes, and is bracketed by widespread bentonites that have yielded age of 93.79 to 93.96 Ma; and cycle-extrapolated as 93.90 ±0.15 myr (Meyers et al., AGU, 2010; and submitted to Geology, 2011).  Cycle-strat duration = 0.35 myr (Meyers et al., EPSL, 2011 in press); contains bentonite dated as 93.79 ±0.26 Ma in upper part of this zone.",
				"top": {
				  "name": "Coniacian base",
				  "age": 89.75,
				  "type": "dashed"
				},
				"base": {
				  "name": "Turonian base",
				  "age": 93.9,
				  "type": "solid"
				},
				"backgroundColor": "#bfe35d"
			  },
			  {
				"name": "Cenomanian",
				"description": "Base-Cenomanian is base of foraminifer Rotalipora globotruncanoides, which is 6m lower than base of M. mantelli ammonite Zone at the GSSP section.  The uppermost part of the N. caractanense Subzone (basal Subzone of Cenomanian) is ~99.8 ±0.37 Ma (Obradovich et al., 2002), and cycle stratigraphy scaling of its duration (0.44 myr) = 100.25 Ma, and a slight 0.25 offset to the GSSP marker below implies the base of the Cenomanian is 100.5 ±0.4 Ma.",
				"top": {
				  "name": "Turonian base",
				  "age": 93.9,
				  "type": "solid"
				},
				"base": {
				  "name": "Cenomanian base",
				  "age": 100.5,
				  "type": "solid"
				},
				"backgroundColor": "#b3de53"
			  },
			  {
				"name": "Albian",
				"description": "DASH -- Base of schrammeni zone (lowest of 3 Leymeriella zones) = base of Albian in NW Germany regional macrofossil system = very close to FAD of P. columnata (subcircular) according to Mutterlose et al. (2003, Cretaceous Research) = our base of Albian stage.  However, this level is probably significantly BELOW the base-tardefurcata in SE France (Tethyan).  The U-Pb age of 113.0 ±0.3 Ma from this level in Germany implies that it should not be that far above the FAD P. columnata cycle-strat age of GTS2012 (112.95 Ma ±0.4 myr) => arbitrary placed as that level.",
				"top": {
				  "name": "Cenomanian base",
				  "age": 100.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Albian base",
				  "age": 113.14,
				  "type": "dashed"
				},
				"backgroundColor": "#ccea97"
			  },
			  {
				"name": "Aptian",
				"description": "Current working definition for Base of Aptian is base of polarity chron M0r",
				"top": {
				  "name": "Albian base",
				  "age": 113.14,
				  "type": "dashed"
				},
				"base": {
				  "name": "Aptian base",
				  "age": 126.3,
				  "type": "solid"
				},
				"backgroundColor": "#bfe48a"
			  },
			  {
				"name": "Barremian",
				"description": "Base of Barremian (base of Spitidiscus hugii ammonite zone) assigned here as Chron M5n(0.8)",
				"top": {
				  "name": "Aptian base",
				  "age": 126.3,
				  "type": "solid"
				},
				"base": {
				  "name": "Barremian base",
				  "age": 130.77,
				  "type": "solid"
				},
				"backgroundColor": "#b3df7f"
			  },
			  {
				"name": "Hauterivian",
				"description": "The base of the Hauterivian (base of Acanthodiscus radiatus ammonite zone of Tethyan realm) is considered to be near the beginning of chron M10n (e.g., Weissert and others), as supported by later studies (e.g, McArthur et al., 2007, Palaeo-3), and consistent with the cycle-scaled duration of the Valanginian.  Assigned as base M10n.  In GTS04, the base of the Hauterivian Stage has been assigned, based on the reported occurrence of its earliest ammonites, to near the beginning of magnetic polarity chron M11n (Channell et al., 1995, EPSL).  However, the GTS04 authors and reviewers were not aware that this published correlation had been revised.  In GTS04; the Base of Hauterivian was assigned as base of Chron M11n.  Earlier version -- Valanginian/Hauterivian boundary is within M10Nr or within the adjacent normal-polarity chrons; tentatively assigned to middle of M10Nr.",
				"top": {
				  "name": "Barremian base",
				  "age": 130.77,
				  "type": "solid"
				},
				"base": {
				  "name": "Hauterivian base",
				  "age": 134.69,
				  "type": "solid"
				},
				"backgroundColor": "#a6d975"
			  },
			  {
				"name": "Valanginian",
				"description": "Base of Valanginian (base of Tirnovella pertransiens ammonite zone in Tethyan Realm) is assigned here as Chron M14r(0.3).  T. otopeta, formerly basal Valanginian, is now assigned to Berriasian.  Note that the Berriasian is much shorter in duration in GTS2004, even with this transfer of an ammonite zone.  This reflects the postulated faster spreading model (and dropping of U-Pb date of 137 reported for uppermost Berriasian), hence Pacific anomalies represent shorter time.",
				"top": {
				  "name": "Hauterivian base",
				  "age": 134.69,
				  "type": "solid"
				},
				"base": {
				  "name": "Valanginian base",
				  "age": 139.39,
				  "type": "solid"
				},
				"backgroundColor": "#99d36a"
			  },
			  {
				"name": "Berriasian",
				"description": "Base of Cretaceous (base of Berriasian) working version is Base of Chron M18r.  This is higher than B. jacobi (Tethyan ammonite zone).",
				"top": {
				  "name": "Valanginian base",
				  "age": 139.39,
				  "type": "solid"
				},
				"base": {
				  "name": "Berriasian base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"backgroundColor": "#8ccd60"
			  },
			  {
				"name": "Tithonian",
				"description": "Not yet defined.  Set as Base of Chron M22An, which is nearly coeval with base of H. hybonotum ammonite zone at Crussol Mountain, France",
				"top": {
				  "name": "Berriasian base",
				  "age": 145.01,
				  "type": "dashed"
				},
				"base": {
				  "name": "Tithonian base",
				  "age": 152.06,
				  "type": "solid"
				},
				"backgroundColor": "#d9f1f7"
			  },
			  {
				"name": "Kimmeridgian",
				"description": "Base of P. baylei ammonite zone (Isle of Skye), using lowest occurrence of P. flodigarriensis ammonite (not yet ratified) which is essentially coeval with Base of Chron M26r at the GSSP.",
				"top": {
				  "name": "Tithonian base",
				  "age": 152.06,
				  "type": "solid"
				},
				"base": {
				  "name": "Kimmeridgian base",
				  "age": 157.25,
				  "type": "solid"
				},
				"backgroundColor": "#ccecf4"
			  },
			  {
				"name": "Oxfordian",
				"description": "Base of Q. mariae ammonite zone.  GSSP is not yet decided, but this level at Redcliff (England) candidate has been correlated to 25% up in Chron M37n.1n of Deep-tow extension to M-Sequence.",
				"top": {
				  "name": "Kimmeridgian base",
				  "age": 157.25,
				  "type": "solid"
				},
				"base": {
				  "name": "Oxfordian base",
				  "age": 163.1,
				  "type": "solid"
				},
				"backgroundColor": "#bfe7f1"
			  },
			  {
				"name": "Callovian",
				"description": "Base of B. bullatus ammonite zone.  GSSP is not yet decided.  In magnetostratigraphy from the Albstadt-Pfeffingen GSSP candidate (Swabia, Germany), this level is the base of a brief normal-polarity zone, which is interpreted to be the base of marine magnetic anomaly M39n.3n in the Deep-Tow extension to M-Sequence (using mid-depth projection)",
				"top": {
				  "name": "Oxfordian base",
				  "age": 163.1,
				  "type": "solid"
				},
				"base": {
				  "name": "Callovian base",
				  "age": 166.07,
				  "type": "solid"
				},
				"backgroundColor": "#bfe7e5"
			  },
			  {
				"name": "Bathonian",
				"description": "Base of Z. zigzag  ammonite zone at Ravin du Bès-Bas Auran (France).  In magnetostratigraphy of Spain, this level is the base of a normal-polarity zone, which is interpreted to be the base of marine magnetic anomaly M42n.1n in the Deep-Tow extension to M-Sequence (using mid-depth projection)",
				"top": {
				  "name": "Callovian base",
				  "age": 166.07,
				  "type": "solid"
				},
				"base": {
				  "name": "Bathonian base",
				  "age": 168.28,
				  "type": "solid"
				},
				"backgroundColor": "#b3e2e3"
			  },
			  {
				"name": "Bajocian",
				"description": "Base of H. discites ammonite zone at Cabo Mondego (Portugal).  In combined magnetostratigraphy of Spain and Switzerland, this level is in the uppermost part (ca. 80% up) of a reversed-polarity-dominated zone, which is interpreted to be marine magnetic anomaly M44n.1r in the Deep-Tow extension to M-Sequence (using mid-depth projection)",
				"top": {
				  "name": "Bathonian base",
				  "age": 168.28,
				  "type": "solid"
				},
				"base": {
				  "name": "Bajocian base",
				  "age": 170.3,
				  "type": "solid"
				},
				"backgroundColor": "#a6dde0"
			  },
			  {
				"name": "Aalenian",
				"description": "Base of L. opalinum ammonite zone at Fuentelsaz (Spain).  ",
				"top": {
				  "name": "Bajocian base",
				  "age": 170.3,
				  "type": "solid"
				},
				"base": {
				  "name": "Aalenian base",
				  "age": 174.15,
				  "type": "solid"
				},
				"backgroundColor": "#9ad9dd"
			  },
			  {
				"name": "Toarcian",
				"description": "Base of D. tenuicostatum ammonite zone; but GSSP not yet decided (probably in either Portugal or Spain)",
				"top": {
				  "name": "Aalenian base",
				  "age": 174.15,
				  "type": "solid"
				},
				"base": {
				  "name": "Toarcian base",
				  "age": 183.7,
				  "type": "solid"
				},
				"backgroundColor": "#99cee3"
			  },
			  {
				"name": "Pliensbachian",
				"description": "Base of U. jamesoni ammonite zone at Robin Hood's Bay (England)  ",
				"top": {
				  "name": "Toarcian base",
				  "age": 183.7,
				  "type": "solid"
				},
				"base": {
				  "name": "Pliensbachian base",
				  "age": 191.36,
				  "type": "solid"
				},
				"backgroundColor": "#80c5dd"
			  },
			  {
				"name": "Sinemurian",
				"description": "Base of A. bucklandi ammonite zone at East Quantoxhead (England).  ",
				"top": {
				  "name": "Pliensbachian base",
				  "age": 191.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Sinemurian base",
				  "age": 199.4,
				  "type": "solid"
				},
				"backgroundColor": "#67bcd8"
			  },
			  {
				"name": "Hettangian",
				"description": "Lowest occurrence of the ammonite Psiloceras spelae at Kuhjoch (Austria).",
				"top": {
				  "name": "Sinemurian base",
				  "age": 199.4,
				  "type": "solid"
				},
				"base": {
				  "name": "Hettangian base",
				  "age": 201.36,
				  "type": "solid"
				},
				"backgroundColor": "#4eb3d3"
			  },
			  {
				"name": "Rhaetian",
				"description": null,
				"top": {
				  "name": "Hettangian base",
				  "age": 201.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Rhaetian base",
				  "age": 209.56,
				  "type": "dashed"
				},
				"backgroundColor": "#e3b9db"
			  },
			  {
				"name": "Norian",
				"description": null,
				"top": {
				  "name": "Rhaetian base",
				  "age": 209.56,
				  "type": "dashed"
				},
				"base": {
				  "name": "Norian base",
				  "age": 228.45,
				  "type": "dashed"
				},
				"backgroundColor": "#d6aad3"
			  },
			  {
				"name": "Carnian",
				"description": "Definition has been lowered to base of D. canadensis ammonite zone, following Triassic subcomm preference.",
				"top": {
				  "name": "Norian base",
				  "age": 228.45,
				  "type": "dashed"
				},
				"base": {
				  "name": "Carnian base",
				  "age": 237,
				  "type": "solid"
				},
				"backgroundColor": "#c99bcb"
			  },
			  {
				"name": "Ladinian",
				"description": null,
				"top": {
				  "name": "Carnian base",
				  "age": 237,
				  "type": "solid"
				},
				"base": {
				  "name": "Ladinian base",
				  "age": 241.5,
				  "type": "solid"
				},
				"backgroundColor": "#c983bf"
			  },
			  {
				"name": "Anisian",
				"description": null,
				"top": {
				  "name": "Ladinian base",
				  "age": 241.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Anisian base",
				  "age": 246.8,
				  "type": "solid"
				},
				"backgroundColor": "#bc75b7"
			  },
			  {
				"name": "Olenekian",
				"description": "Working group decision (Nov07) is the lowest occurrence of conodont Neospathodus waageni s.l., just above base of Rohillites rohilla ammonite zone.  This is different than in GTS2004 (FAD of Hedenstroemia or Meekoceras gracilitatis ammonites).  Base-Olenekian age derived by cycle-scaling from base-Triassic (fixed from U-Pb ages and spline-fit of ca. 252.16 Ma for that P/Tr level)",
				"top": {
				  "name": "Anisian base",
				  "age": 246.8,
				  "type": "solid"
				},
				"base": {
				  "name": "Olenekian base",
				  "age": 249.81,
				  "type": "dashed"
				},
				"backgroundColor": "#b051a5"
			  },
			  {
				"name": "Induan",
				"description": "Base Triassic is coeval with FAD of H. parvus conodont",
				"top": {
				  "name": "Olenekian base",
				  "age": 249.81,
				  "type": "dashed"
				},
				"base": {
				  "name": "Induan base",
				  "age": 251.9,
				  "type": "solid"
				},
				"backgroundColor": "#a4469f"
			  },
			  {
				"name": "Changhsingian",
				"description": "Base Changhsingian is coeval with FAD of Clarkina wangi conodont",
				"top": {
				  "name": "Induan base",
				  "age": 251.9,
				  "type": "solid"
				},
				"base": {
				  "name": "Changhsingian base",
				  "age": 254.2,
				  "type": "solid"
				},
				"backgroundColor": "#fcc0b2"
			  },
			  {
				"name": "Wuchiapingian",
				"description": "Base Wuchiapingian is coeval with FAD of Clarkina postbitteri postbitteri conodont",
				"top": {
				  "name": "Changhsingian base",
				  "age": 254.2,
				  "type": "solid"
				},
				"base": {
				  "name": "Wuchiapingian base",
				  "age": 259.81,
				  "type": "solid"
				},
				"backgroundColor": "#fcb4a2"
			  },
			  {
				"name": "Capitanian",
				"description": "Base Capitanian is coeval with FAD of Jinogondolella postserrata conodont",
				"top": {
				  "name": "Wuchiapingian base",
				  "age": 259.81,
				  "type": "solid"
				},
				"base": {
				  "name": "Capitanian base",
				  "age": 265.14,
				  "type": "solid"
				},
				"backgroundColor": "#fb9a85"
			  },
			  {
				"name": "Wordian",
				"description": "Base Wordian is coeval with FAD of Jinogondolella aserrata conodont",
				"top": {
				  "name": "Capitanian base",
				  "age": 265.14,
				  "type": "solid"
				},
				"base": {
				  "name": "Wordian base",
				  "age": 268.8,
				  "type": "solid"
				},
				"backgroundColor": "#fb8d76"
			  },
			  {
				"name": "Roadian",
				"description": "Base Roadian is coeval with FAD of Jinogondolella nankingensis conodont",
				"top": {
				  "name": "Wordian base",
				  "age": 268.8,
				  "type": "solid"
				},
				"base": {
				  "name": "Roadian base",
				  "age": 272.3,
				  "type": "solid"
				},
				"backgroundColor": "#fb8069"
			  },
			  {
				"name": "Kungurian",
				"description": "Base Kungurian is proposed to be coeval with FAD of Neostreptognathodus pnevi conodont",
				"top": {
				  "name": "Roadian base",
				  "age": 272.3,
				  "type": "solid"
				},
				"base": {
				  "name": "Kungurian base",
				  "age": 282,
				  "type": "solid"
				},
				"backgroundColor": "#e38776"
			  },
			  {
				"name": "Artinskian",
				"description": "Base Artinskian is proposed to be coeval with FAD of Sweetognathus whitei conodont",
				"top": {
				  "name": "Kungurian base",
				  "age": 282,
				  "type": "solid"
				},
				"base": {
				  "name": "Artinskian base",
				  "age": 290.06,
				  "type": "solid"
				},
				"backgroundColor": "#e37b68"
			  },
			  {
				"name": "Sakmarian",
				"description": "Base Sakmarian is proposed to be coeval with FAD of Sweetognathus merrilli conodont",
				"top": {
				  "name": "Artinskian base",
				  "age": 290.06,
				  "type": "solid"
				},
				"base": {
				  "name": "Sakmarian base",
				  "age": 295.5,
				  "type": "solid"
				},
				"backgroundColor": "#e36f5c"
			  },
			  {
				"name": "Asselian",
				"description": "Base PERMIAN is coeval with FAD of Streptognathodus isolatus conodont",
				"top": {
				  "name": "Sakmarian base",
				  "age": 295.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Asselian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"backgroundColor": "#e36350"
			  },
			  {
				"name": "Gzhelian",
				"description": "Working group definition is lowest occurrence of Idiognathodus simulator sensu stricto; rather than the Near lowest occurrences of the fusulinids Daixina, Jigulites and Rugosofusulina used in GTS2004.  Estimate is based on cycle-strat (Heckel, pers. commun., Dec07), relative to base-Permian, which is consistent with U-Pb dating by Mark Schmitz (presented at Nanjing Perm-Carb congress, June 07)",
				"top": {
				  "name": "Asselian base",
				  "age": 298.88,
				  "type": "solid"
				},
				"base": {
				  "name": "Gzhelian base",
				  "age": 303.4,
				  "type": "solid"
				},
				"backgroundColor": "#ccd4c7"
			  },
			  {
				"name": "Kasimovian",
				"description": "The current preferred definition by working group is the base of the Protriticites pseudomontiparus-Obsoletes obsoletus conodont zone (equals base of Swadelina neoshoensis zone).  GTS04 had used base of Obsoletes obsoletes and Protriticites pseudomontiparus fusulinid zone.  Estimate is based on cycle-strat (Heckel, pers. commun., Dec07) = MFS of Farlington cycle (Lower Suvorova) relative to base-Permian.",
				"top": {
				  "name": "Gzhelian base",
				  "age": 303.4,
				  "type": "solid"
				},
				"base": {
				  "name": "Kasimovian base",
				  "age": 306.65,
				  "type": "solid"
				},
				"backgroundColor": "#bfd0c5"
			  },
			  {
				"name": "Moscovian",
				"description": null,
				"top": {
				  "name": "Kasimovian base",
				  "age": 306.65,
				  "type": "solid"
				},
				"base": {
				  "name": "Moscovian base",
				  "age": 314.6,
				  "type": "dashed"
				},
				"backgroundColor": "#b3cbb9"
			  },
			  {
				"name": "Bashkirian",
				"description": null,
				"top": {
				  "name": "Moscovian base",
				  "age": 314.6,
				  "type": "dashed"
				},
				"base": {
				  "name": "Bashkirian base",
				  "age": 323.23,
				  "type": "solid"
				},
				"backgroundColor": "#99c2b5"
			  },
			  {
				"name": "Serpukhovian",
				"description": "In GTS04, the base of the Serpukhovian Stage had been assigned an age of 326 Ma based on a tentative working definition of the first appearance of the conodont Lochriea cruciformis.  The boundary working group decided that the first evolutionary appearance of the conodont Lochriea ziegleri in the lineage Lochriea nodosa - Lochriea ziegleri presents the best potential for an international definition of the boundary.",
				"top": {
				  "name": "Bashkirian base",
				  "age": 323.23,
				  "type": "solid"
				},
				"base": {
				  "name": "Serpukhovian base",
				  "age": 330.92,
				  "type": "dashed"
				},
				"backgroundColor": "#bfc26b"
			  },
			  {
				"name": "Visean",
				"description": "Assigned as base of Foram Zone \"Eoparastaffella simplex\" (Base-Visean working group of Devuyst et al., 2007 Carb-Perm Congress report).",
				"top": {
				  "name": "Serpukhovian base",
				  "age": 330.92,
				  "type": "dashed"
				},
				"base": {
				  "name": "Visean base",
				  "age": 346.73,
				  "type": "solid"
				},
				"backgroundColor": "#a6b96c"
			  },
			  {
				"name": "Tournaisian",
				"description": null,
				"top": {
				  "name": "Visean base",
				  "age": 346.73,
				  "type": "solid"
				},
				"base": {
				  "name": "Tournaisian base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"backgroundColor": "#8cb06c"
			  },
			  {
				"name": "Famennian",
				"description": null,
				"top": {
				  "name": "Tournaisian base",
				  "age": 358.94,
				  "type": "dashed"
				},
				"base": {
				  "name": "Famennian base",
				  "age": 372.24,
				  "type": "solid"
				},
				"backgroundColor": "#f2edc5"
			  },
			  {
				"name": "Frasnian",
				"description": null,
				"top": {
				  "name": "Famennian base",
				  "age": 372.24,
				  "type": "solid"
				},
				"base": {
				  "name": "Frasnian base",
				  "age": 382.69,
				  "type": "solid"
				},
				"backgroundColor": "#f2edad"
			  },
			  {
				"name": "Givetian",
				"description": null,
				"top": {
				  "name": "Frasnian base",
				  "age": 382.69,
				  "type": "solid"
				},
				"base": {
				  "name": "Givetian base",
				  "age": 387.72,
				  "type": "solid"
				},
				"backgroundColor": "#f1e185"
			  },
			  {
				"name": "Eifelian",
				"description": null,
				"top": {
				  "name": "Givetian base",
				  "age": 387.72,
				  "type": "solid"
				},
				"base": {
				  "name": "Eifelian base",
				  "age": 393.25,
				  "type": "solid"
				},
				"backgroundColor": "#f1d576"
			  },
			  {
				"name": "Emsian",
				"description": null,
				"top": {
				  "name": "Eifelian base",
				  "age": 393.25,
				  "type": "solid"
				},
				"base": {
				  "name": "Emsian base",
				  "age": 407.57,
				  "type": "solid"
				},
				"backgroundColor": "#e5d075"
			  },
			  {
				"name": "Pragian",
				"description": null,
				"top": {
				  "name": "Emsian base",
				  "age": 407.57,
				  "type": "solid"
				},
				"base": {
				  "name": "Pragian base",
				  "age": 410.78,
				  "type": "solid"
				},
				"backgroundColor": "#e5c468"
			  },
			  {
				"name": "Lochkovian",
				"description": null,
				"top": {
				  "name": "Pragian base",
				  "age": 410.78,
				  "type": "solid"
				},
				"base": {
				  "name": "Lochkovian base",
				  "age": 419.2,
				  "type": "solid"
				},
				"backgroundColor": "#e5b75a"
			  },
			  {
				"name": " ",
				"description": "Base of Pridoli Series coincides with the lowest occurrence of the graptolite species Monograptus parultimus",
				"top": {
				  "name": "Lochkovian base",
				  "age": 419.2,
				  "type": "solid"
				},
				"base": {
				  "name": null,
				  "age": 422.96,
				  "type": "solid"
				},
				"backgroundColor": "#e6f5e1"
			  },
			  {
				"name": "Ludfordian",
				"description": "DASH -- Base of Ludfordian is imprecise, but this GSSP may be near base of the Saetograptus leintwardinensis graptolite zone",
				"top": {
				  "name": null,
				  "age": 422.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Ludfordian base",
				  "age": 425.57,
				  "type": "solid"
				},
				"backgroundColor": "#d9f0df"
			  },
			  {
				"name": "Gorstian",
				"description": "DASH -- Base of Ludlow and Gorstian is just below the base of the Neodiversograptus nilssoni graptolite zone (age estimate set as Base of Zone)",
				"top": {
				  "name": "Ludfordian base",
				  "age": 425.57,
				  "type": "solid"
				},
				"base": {
				  "name": "Gorstian base",
				  "age": 427.36,
				  "type": "solid"
				},
				"backgroundColor": "#ccecdd"
			  },
			  {
				"name": "Homerian",
				"description": "Base of Homerian coincides with with the base of the Cyrtograptus lundgreni Graptolite Biozone",
				"top": {
				  "name": "Gorstian base",
				  "age": 427.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Homerian base",
				  "age": 430.45,
				  "type": "solid"
				},
				"backgroundColor": "#ccebd1"
			  },
			  {
				"name": "Sheinwoodian",
				"description": "DASHED Imprecise. Base of Wenlock at GSSP is between the base of acritarch biozone 5 and LAD of conodont Pterospathodus amorphognathoides. The current GSSP does not coincide with the base of the Cyrtograptus centrifugus Biozone, as was supposed when the GSSP was defined. Restudy recommends a slightly higher and correlatable level on conodonts -- the Ireviken datum 2, which coincides approximately with the base of the murchisoni Graptolite Biozone (about 0.1 myr higher).",
				"top": {
				  "name": "Homerian base",
				  "age": 430.45,
				  "type": "solid"
				},
				"base": {
				  "name": "Sheinwoodian base",
				  "age": 433.35,
				  "type": "dashed"
				},
				"backgroundColor": "#bfe6c3"
			  },
			  {
				"name": " ",
				"description": "DASHED lower possibility = base of centrifugus graptolite zone. ",
				"top": {
				  "name": "Sheinwoodian base",
				  "age": 433.35,
				  "type": "dashed"
				},
				"base": {
				  "name": null,
				  "age": 433.46,
				  "type": "dashed"
				},
				"backgroundColor": "#bfe6c3"
			  },
			  {
				"name": "Telychian",
				"description": "DASHED (due to no graptolites at GSSP); Base of Telechian (GSSP) is a gap between two brachiopod events (LAD below; FAD above).  Assigned here to base of graptolite Spirograptus guerichi zone.",
				"top": {
				  "name": null,
				  "age": 433.46,
				  "type": "dashed"
				},
				"base": {
				  "name": "Telychian base",
				  "age": 438.49,
				  "type": "solid"
				},
				"backgroundColor": "#bfe6cf"
			  },
			  {
				"name": "Aeronian",
				"description": "Base of Aeronian coincides with base of the graptolite Monograptus (now Demirastrites) triangulatus Biozone",
				"top": {
				  "name": "Telychian base",
				  "age": 438.49,
				  "type": "solid"
				},
				"base": {
				  "name": "Aeronian base",
				  "age": 440.77,
				  "type": "solid"
				},
				"backgroundColor": "#b3e1c2"
			  },
			  {
				"name": "Rhuddanian",
				"description": null,
				"top": {
				  "name": "Aeronian base",
				  "age": 440.77,
				  "type": "solid"
				},
				"base": {
				  "name": "Rhuddanian base",
				  "age": 443.83,
				  "type": "solid"
				},
				"backgroundColor": "#a6dcb5"
			  },
			  {
				"name": "Hirnantian",
				"description": "Base of Hirnantian coincides with the lowest occurrence of graptolite Normalograptus extraordinarius",
				"top": {
				  "name": "Rhuddanian base",
				  "age": 443.83,
				  "type": "solid"
				},
				"base": {
				  "name": "Hirnantian base",
				  "age": 445.16,
				  "type": "solid"
				},
				"backgroundColor": "#a6dbab"
			  },
			  {
				"name": "Katian",
				"description": "Base of Katian coincides with the lowest occurrence of graptolite Diplacanthograptus caudatus.  The level is very close to the FAD of D. lanceolatus (used in Spline-CONOP12 to estimate age)",
				"top": {
				  "name": "Hirnantian base",
				  "age": 445.16,
				  "type": "solid"
				},
				"base": {
				  "name": "Katian base",
				  "age": 452.97,
				  "type": "solid"
				},
				"backgroundColor": "#99d69f"
			  },
			  {
				"name": "Sandbian",
				"description": "Base of Sandbian coincides with the lowest occurrence of the graptolite Nemagraptus gracilis",
				"top": {
				  "name": "Katian base",
				  "age": 452.97,
				  "type": "solid"
				},
				"base": {
				  "name": "Sandbian base",
				  "age": 458.36,
				  "type": "solid"
				},
				"backgroundColor": "#8cd094"
			  },
			  {
				"name": "Darriwilian",
				"description": "Base of Darriwilian coincides with the lowest occurrence of the graptolite Undulograptus austrodentatus",
				"top": {
				  "name": "Sandbian base",
				  "age": 458.36,
				  "type": "solid"
				},
				"base": {
				  "name": "Darriwilian base",
				  "age": 467.25,
				  "type": "solid"
				},
				"backgroundColor": "#74c69c"
			  },
			  {
				"name": "Dapingian",
				"description": "Base of Dapingian coincides with FAD of conodont Baltoniodus triangularis.  Boundary level is close to the FAD of graptolite, Isograptus victoriae victoriae (used for age assignment; Spline-CONOP12 table)",
				"top": {
				  "name": "Darriwilian base",
				  "age": 467.25,
				  "type": "solid"
				},
				"base": {
				  "name": "Dapingian base",
				  "age": 469.96,
				  "type": "solid"
				},
				"backgroundColor": "#66c092"
			  },
			  {
				"name": "Floian",
				"description": "Base of Floian coincides with first appearance of the graptolite Tetragraptus approximatus",
				"top": {
				  "name": "Dapingian base",
				  "age": 469.96,
				  "type": "solid"
				},
				"base": {
				  "name": "Floian base",
				  "age": 477.72,
				  "type": "solid"
				},
				"backgroundColor": "#41b087"
			  },
			  {
				"name": "Tremadocian",
				"description": "Base of Ordovician coincides with the first appearance of the conodont Iapetognathus fluctivagus",
				"top": {
				  "name": "Floian base",
				  "age": 477.72,
				  "type": "solid"
				},
				"base": {
				  "name": "Tremadocian base",
				  "age": 485.37,
				  "type": "solid"
				},
				"backgroundColor": "#33a97e"
			  },
			  {
				"name": "Age 10",
				"description": "Base is base of the Lotagnostus americanus- Hedinaspis regalis Trilobite Zone",
				"top": {
				  "name": "Tremadocian base",
				  "age": 485.37,
				  "type": "solid"
				},
				"base": {
				  "name": "Age 10 base",
				  "age": 489.5,
				  "type": "solid"
				},
				"backgroundColor": "#e6f5c9"
			  },
			  {
				"name": "Jiangshanian",
				"description": "Base of Jiangshanian is base of the Agnostotes orientalis- Irving. angustilimbata Trilobite Zone",
				"top": {
				  "name": "Age 10 base",
				  "age": 489.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Jiangshanian base",
				  "age": 494,
				  "type": "solid"
				},
				"backgroundColor": "#d9f0bb"
			  },
			  {
				"name": "Paibian",
				"description": "Base of the Paibian is base of the G. reticulatus Trilobite Zone.",
				"top": {
				  "name": "Jiangshanian base",
				  "age": 494,
				  "type": "solid"
				},
				"base": {
				  "name": "Paibian base",
				  "age": 497,
				  "type": "solid"
				},
				"backgroundColor": "#ccebae"
			  },
			  {
				"name": "Guzhangian",
				"description": "Base of the Paibian is base of the Lejopyge laevigata Trilobite Zone.",
				"top": {
				  "name": "Paibian base",
				  "age": 497,
				  "type": "solid"
				},
				"base": {
				  "name": "Guzhangian base",
				  "age": 500.5,
				  "type": "solid"
				},
				"backgroundColor": "#ccdfaa"
			  },
			  {
				"name": "Drumian",
				"description": "Acidusus atavus FAD.  Age is midway between base of Stage 5 and base of Guzhangian;  both of which are constrained by radiometrics.",
				"top": {
				  "name": "Guzhangian base",
				  "age": 500.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Drumian base",
				  "age": 504.5,
				  "type": "solid"
				},
				"backgroundColor": "#bfd99d"
			  },
			  {
				"name": "Age 5",
				"description": "Oryctocephalus indicus FAD",
				"top": {
				  "name": "Drumian base",
				  "age": 504.5,
				  "type": "solid"
				},
				"base": {
				  "name": "Age 5 base",
				  "age": 509,
				  "type": "solid"
				},
				"backgroundColor": "#b3d492"
			  },
			  {
				"name": "Age 4",
				"description": "FAD of trilobite Arithricocephalus chauveaui",
				"top": {
				  "name": "Age 5 base",
				  "age": 509,
				  "type": "solid"
				},
				"base": {
				  "name": "Age 4 base",
				  "age": 514,
				  "type": "dashed"
				},
				"backgroundColor": "#b3ca8e"
			  },
			  {
				"name": "Age 3",
				"description": "First occurrence of TRILOBITES",
				"top": {
				  "name": "Age 4 base",
				  "age": 514,
				  "type": "dashed"
				},
				"base": {
				  "name": "Age 3 base",
				  "age": 520,
				  "type": "dashed"
				},
				"backgroundColor": "#a6c583"
			  },
			  {
				"name": "Age 2",
				"description": "Dashed between options of FADs of Small Shelly and of Archaeocyaths",
				"top": {
				  "name": "Age 3 base",
				  "age": 520,
				  "type": "dashed"
				},
				"base": {
				  "name": "Age 2 base",
				  "age": 530,
				  "type": "dashed"
				},
				"backgroundColor": "#a6ba80"
			  },
			  {
				"name": "Fortunian",
				"description": "0",
				"top": {
				  "name": "Age 2 base",
				  "age": 530,
				  "type": "dashed"
				},
				"base": {
				  "name": "Fortunian base",
				  "age": 541,
				  "type": "solid"
				},
				"backgroundColor": "#99b575"
			  }
			]
		  }
		}
		
		
		if(props.hideTime) {
			return(
				<div className="timeGallery">
					TIMELINES
					{collectionLines}
				</div>
			)
		} else {
			return(<div></div>)
		}
	}
);
