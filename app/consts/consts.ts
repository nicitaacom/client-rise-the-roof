export const consts = {
  yoe: 20, // years of experience
  yog: 10, // years of guarantee
  email: "duane.moody@domain.email",
  gmRating: 5,
  ourServices: [
    {
      imgUrl: "/services/flat-bitumen-roofs.jpg",
      serviceName: "Flat bitumen roofs",
    },
    {
      imgUrl: "/services/new-roof.jpg",
      serviceName: "New roof",
    },
    {
      imgUrl: "/services/roof-repair.jpg",
      serviceName: "Roof repair",
    },

    {
      imgUrl: "/services/dry-ridge-system.jpg",
      serviceName: "Dry ridge system",
    },
    {
      imgUrl: "/services/window-in-roof.jpg",
      serviceName: "Window in roof",
    },
    {
      imgUrl: "/services/fascia-and-soffit.jpg",
      serviceName: "Fascia and soffit",
    },
  ],
  reviews: [
    {
      usrAvatarUrl: "/reviews/A-red.png",
      username: "Andrea McHallum",
      date: "02.03.2025",
      reviewMessage:
        "Responded quickly, gave reasonably priced quote and completed the job all within a few days. Removed all waste, leaving area clean and tidy. Thank you!",
      amountOfStarts: 5,
    },
    {
      usrAvatarUrl: "/reviews/D-green.png",
      username: "Denise Herrington",
      date: "23.02.2025",
      reviewMessage:
        "Lovely lads, they fixed a flat roof for me, very professional stayed till the job was finished, reasonable prices, I would highly recommend them",
      amountOfStarts: 5,
    },
    {
      usrAvatarUrl: "/reviews/Chloe-Stanley.png",
      username: "Chloe Stanley",
      date: "19.03.2025",
      reviewMessage: "Excellent work, nice lads, great prices!",
      amountOfStarts: 5,
    },
    {
      usrAvatarUrl: "/reviews/L-blue.png",
      username: "Leslie Harwood",
      date: "17.02.2025",
      reviewMessage: "Nice lads, reasonable price, very prompt. Cleaned up as well. I would have them back.",
      amountOfStarts: 5,
    },
    {
      usrAvatarUrl: "/reviews/Tom-Jackson.png",
      username: "Tom Jackson",
      date: "15.02.2025",
      reviewMessage: "",
      amountOfStarts: 5,
    },
  ],
  howWeWorkTabs: [
    {
      text: "New roof",
      iconSrc: "/how-do-we-work/tabs/new-roof.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/inspect.png",
          title: "Inspect",
          description: "Before we install a new roof for you,we need to inspect and measure it",
        },
        {
          iconSrc: "/how-do-we-work/roof-remove.png",
          title: "Remove old roof",
          description: "Before we install a new roof for you, we need to remove old one :)",
        },
        {
          iconSrc: "/how-do-we-work/deck-check.png",
          title: "Deck check",
          description: "Before we install a new roof for you, we need to make sure that it’s nodeck damage",
        },
        {
          iconSrc: "/how-do-we-work/roof-underlayer.png",
          title: "Underlayer install",
          description:
            "Before we install a new roof for you, we need to install underlayment to ensure proper water protection.",
        },
        {
          iconSrc: "/how-do-we-work/roof-add.png",
          title: "New  roof install",
          description: "And finally...",
        },
      ],
    },
    {
      text: "Roof repair",
      iconSrc: "/how-do-we-work/tabs/repair.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/inspect.png",
          title: "Inspect",
          description: "Before we install a new roof for you, we need to inspect and measure it ",
        },
        {
          iconSrc: "/how-do-we-work/get-matherials.png",
          title: "Get the materials",
          description: "Depending on the repair, you may need tiles roofing nails sealant, hammer, and safety gear",
        },
        {
          iconSrc: "/how-do-we-work/damaged-tile.png",
          title: "Remove damaged matherials",
          description:
            "Carefally remove damaged tiles, flashing or underlay without causing fruther damage to surrounded areas",
        },
        {
          iconSrc: "/how-do-we-work/roof-repair.png",
          title: "Make repairs and replace matherials",
          description: "Install tiles, flashing, or underlay as needed, and secure everything to prevent leaks.",
        },
        {
          iconSrc: "/how-do-we-work/roof-clean.png",
          title: "Final inspection and clean up",
          description:
            "Check for proper installation, test for leaks and remove the debris to leave the area clean and safe.",
        },
      ],
    },
    {
      text: "Window in roof",
      iconSrc: "/how-do-we-work/tabs/roof-window.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/cut.png",
          title: "Mark and Cut the Opening",
          description: "Measure the window size, mark the roof, and cut through the tiles and underlay.",
        },
        {
          iconSrc: "/how-do-we-work/add-battens.png",
          title: "Install the Support Battens",
          description: "Add horizontal battens above and below the opening to support the window frame",
        },
        {
          iconSrc: "/how-do-we-work/window-in-roof.png",
          title: "Fit the Window Frame",
          description: "Place the window frame into the opening, ensuring it’s level and secure with screws",
        },
        {
          iconSrc: "/how-do-we-work/window-blue.png",
          title: "Install Flashing",
          description: "Attach the flashing kit around the window to create a watertight seal.",
        },
        {
          iconSrc: "/how-do-we-work/tile-reinstall.png",
          title: "Reinstall Roof Tiles",
          description: "Place the roof tiles back around the window, trimming them if needed for a snug fit.",
        },
      ],
    },
    {
      text: "Flat Bitumen Roofs",
      iconSrc: "/how-do-we-work/tabs/flat-bitumen-roofs.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/area.png",
          title: "Prepare the Area",
          description: "Remove any old roofing materials, debris, and damaged sections to create a clean base.",
        },
        {
          iconSrc: "/how-do-we-work/apply-bitumen-primer.png",
          title: "Apply Bitumen Primer",
          description: "Coat the surface with a bitumen primer to enhance the adhesion of the waterproof layers.",
        },
        {
          iconSrc: "/how-do-we-work/base-layer.png",
          title: "Install the Base Layer",
          description:
            "Lay down the first bitumen sheet (usually a felt underlay) and secure it with adhesive or mechanical fasteners.",
        },
        {
          iconSrc: "/how-do-we-work/heat-and-apply-top-layer.png",
          title: "Heat and Apply the Top Layer",
          description:
            "Heat-weld the top bitumen layer using a torch, overlapping the sheets to ensure a watertight seal.",
        },
        {
          iconSrc: "/",
          title: "Seal and Inspect",
          description:
            "Seal all seams, edges, and flashings, and thoroughly inspect the roof for any gaps or weak points.",
        },
      ],
    },
    {
      text: "Fascia and Soffit Installation",
      iconSrc: "/how-do-we-work/tabs/lead.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/damaged-tile.png",
          title: "Remove Old Materials",
          description: "Carefully remove any old fascia, soffit, and damaged materials to prepare for installation.",
        },
        {
          iconSrc: "/how-do-we-work/deck-check.png",
          title: "Check for Structural Damage",
          description: "Inspect the eaves and rafters for any signs of rot or damage and repair as necessary.",
        },
        {
          iconSrc: "/how-do-we-work/add-soffit.png",
          title: "Install New Soffit Boards",
          description:
            "Fit and secure new soffit boards under the roofline, ensuring adequate ventilation where needed.",
        },
        {
          iconSrc: "/how-do-we-work/add-fascia-boards.png",
          title: "Install New Fascia Boards",
          description: "Secure new fascia boards over the ends of the rafters, ensuring a snug fit.",
        },
        {
          iconSrc: "/how-do-we-work/inspect.png",
          title: "Seal and Inspect",
          description: "Seal any joints and inspect the installation to ensure proper alignment and weatherproofing.",
        },
      ],
    },
    {
      text: "Dry Ridge System",
      iconSrc: "/how-do-we-work/tabs/dry-ridge-system.png",
      steps: [
        {
          iconSrc: "/how-do-we-work/tile-remove.png",
          title: "Remove Old Ridge Tiles",
          description:
            "Carefully remove any old ridge tiles, mortar, and debris to prepare for the dry ridge installation.",
        },
        {
          iconSrc: "/how-do-we-work/batten-add.png",
          title: "Install Ridge Batten",
          description: "Secure a ridge batten along the roof apex, ensuring it is properly aligned.",
        },
        {
          iconSrc: "/how-do-we-work/add-ridge-unions.png",
          title: "Attach Ridge Unions",
          description: "Fix ridge unions along the ridge batten to hold the ridge tiles in place.",
        },
        {
          iconSrc: "/how-do-we-work/tile-add.png",
          title: "Install Ridge Tiles",
          description: "Fit the ridge tiles over the unions and secure them with screws provided in the dry ridge kit.",
        },
        {
          iconSrc: "/how-do-we-work/inspect.png",
          title: "Check and Finish",
          description:
            "Ensure all tiles are securely fastened and inspect the ridge for proper alignment and weatherproofing.",
        },
      ],
    },
  ],
}
