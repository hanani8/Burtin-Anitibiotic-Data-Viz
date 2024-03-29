const DATA = [
  [
    {
      Bacteria: "Brucella abortus",
      Penicilin: 1,
      Scaled_Penicilin: 10.9657842846621,
      Streptomycin: 2,
      Scaled_Streptomycin: 11.9657842846621,
      Neomycin: 0.02,
      Scaled_Neomycin: 5.32192809488736,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Proteus vulgaris",
      Penicilin: 3,
      Scaled_Penicilin: 12.5507467853832,
      Streptomycin: 0.1,
      Scaled_Streptomycin: 7.64385618977472,
      Neomycin: 0.1,
      Scaled_Neomycin: 7.64385618977472,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Klebsiella pneumoniae",
      Penicilin: 850,
      Scaled_Penicilin: 20.6971033156872,
      Streptomycin: 1.2,
      Scaled_Streptomycin: 11.2288186904959,
      Neomycin: 1,
      Scaled_Neomycin: 10.9657842846621,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Aerobacter aerogenes",
      Penicilin: 870,
      Scaled_Penicilin: 20.7306558753982,
      Streptomycin: 1,
      Scaled_Streptomycin: 10.9657842846621,
      Neomycin: 1.6,
      Scaled_Neomycin: 11.6438561897747,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Mycobacterium tuberculosis",
      Penicilin: 800,
      Scaled_Penicilin: 20.6096404744368,
      Streptomycin: 5,
      Scaled_Streptomycin: 13.2877123795495,
      Neomycin: 2,
      Scaled_Neomycin: 11.9657842846621,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Escherichia coli",
      Penicilin: 100,
      Scaled_Penicilin: 17.6096404744368,
      Streptomycin: 0.4,
      Scaled_Streptomycin: 9.64385618977473,
      Neomycin: 0.1,
      Scaled_Neomycin: 7.64385618977472,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Pseudomonas aeruginosa",
      Penicilin: 850,
      Scaled_Penicilin: 20.6971033156872,
      Streptomycin: 2,
      Scaled_Streptomycin: 11.9657842846621,
      Neomycin: 0.4,
      Scaled_Neomycin: 9.64385618977473,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Salmonella (Eberthella) typhosa",
      Penicilin: 1,
      Scaled_Penicilin: 10.9657842846621,
      Streptomycin: 0.4,
      Scaled_Streptomycin: 9.64385618977473,
      Neomycin: 0.008,
      Scaled_Neomycin: 4,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Salmonella schottmuelleri",
      Penicilin: 10,
      Scaled_Penicilin: 14.2877123795495,
      Streptomycin: 0.8,
      Scaled_Streptomycin: 10.6438561897747,
      Neomycin: 0.09,
      Scaled_Neomycin: 7.49185309632968,
      "Gram Staining": "negative",
    },
    {
      Bacteria: "Staphylococcus aureus",
      Penicilin: 0.03,
      Scaled_Penicilin: 5.90689059560852,
      Streptomycin: 0.03,
      Scaled_Streptomycin: 5.90689059560852,
      Neomycin: 0.001,
      Scaled_Neomycin: 1,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Staphylococcus albus",
      Penicilin: 0.007,
      Scaled_Penicilin: 3.8073549220576,
      Streptomycin: 0.1,
      Scaled_Streptomycin: 7.64385618977472,
      Neomycin: 0.001,
      Scaled_Neomycin: 1,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Streptococcus fecalis",
      Penicilin: 1,
      Scaled_Penicilin: 10.9657842846621,
      Streptomycin: 1,
      Scaled_Streptomycin: 10.9657842846621,
      Neomycin: 0.1,
      Scaled_Neomycin: 7.64385618977472,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Streptococcus hemolyticus",
      Penicilin: 0.001,
      Scaled_Penicilin: 1,
      Streptomycin: 14,
      Scaled_Streptomycin: 14.7731392067197,
      Neomycin: 10,
      Scaled_Neomycin: 14.2877123795495,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Streptococcus viridans",
      Penicilin: 0.005,
      Scaled_Penicilin: 3.32192809488736,
      Streptomycin: 10,
      Scaled_Streptomycin: 14.2877123795495,
      Neomycin: 40,
      Scaled_Neomycin: 16.2877123795495,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Diplococcus pneumoniae",
      Penicilin: 0.005,
      Scaled_Penicilin: 3.32192809488736,
      Streptomycin: 11,
      Scaled_Streptomycin: 14.4252159032994,
      Neomycin: 10,
      Scaled_Neomycin: 14.2877123795495,
      "Gram Staining": "positive",
    },
    {
      Bacteria: "Brucella anthracis",
      Penicilin: 0.001,
      Scaled_Penicilin: 1,
      Streptomycin: 0.01,
      Scaled_Streptomycin: 4.32192809488736,
      Neomycin: 0.007,
      Scaled_Neomycin: 3.8073549220576,
      "Gram Staining": "positive",
    },
  ],
];
