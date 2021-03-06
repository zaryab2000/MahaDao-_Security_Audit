
export const CONTRACT_ADDRESSES = {
  mainnet: {
    main: {
      ARTH: '0x853d955aCEf822Db058eb8505911ED77F175b99e',
      ARTHS: '0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0',
      vesting: 'NOT_DEPLOYED_YET'
    },
    weth: '0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2',
    oracles: {
      ARTH_WETH: '0xD18660Ab8d4eF5bE062652133fe4348e0cB996DA',
      ARTH_USDC: '0x2AD064cEBA948A2B062ba9AfF91c98B9F0a1f608',
      ARTH_USDT: '0x97587c990617f65A83CAb4f08b23F78472a0413b',
      ARTH_ARTHS: '0xD0435BF68dF2B516C6382caE8847Ab5cdC5c3Ea7',
      ARTHS_WETH: '0x9e483C76D7a66F7E1feeBEAb54c349Df2F00eBdE',
      ARTHS_USDC: '0x28fdA30a6Cf71d5fC7Ce17D6d20c788D98Ff2c46',
      ARTHS_USDT: '0x4FCb1759BD13950E7e73eEd650eb5bB355bC1CBC',
      USDC_WETH: '0x5e48C34f1005a514DaF0E1aEc53Dbb70fdC2C9F9',
      USDT_WETH: '0xA559062226AD70de1bf24D2189e0ee879D58505C'
    },
    collateral: {
      USDC: '0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48',
      USDT: '0xdAC17F958D2ee523a2206206994597C13D831ec7'
    },
    governance: '0xd74034C6109A23B6c7657144cAcBbBB82BDCB00E',
    pools: {
      USDC: '0x3C2982CA260e870eee70c423818010DfeF212659',
      USDT: '0x7d3FCd3825AE54E8E8FFD3d0ce95882330d54968'
    },
    uniswap_other: {
      router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
    },
    pricing: { swap_to_price: '0xa61cBe7E326B13A8dbA11D00f42531BE704DF51B' },
    misc: {
      timelock: '0x8412ebf45bAC1B340BbE8F318b928C466c4E39CA',
      migration_helper: '0xe16723A08Ae054a8F20BDc0395389569011e78D6'
    },
    libraries: {
      UniswapV2OracleLibrary: '0xeB85Dd2374a44F80342AcF8010d585Bda32B77a0',
      UniswapV2Library: '0xC805D4126C3Ac9d0AD7bb94c3D5cD72E3CbCd6f6',
      ArthPoolLibrary: '0xA11B9C88e4Bf89aD9A70f5d408ffB5A6d5FEb6A4'
    },
    pair_tokens: {
      'Uniswap ARTH/WETH': '0xFD0A40Bc83C5faE4203DEc7e5929B446b07d1C76',
      'Uniswap ARTH/USDC': '0x97C4adc5d28A86f9470C70DD91Dc6CC2f20d2d4D',
      'Uniswap ARTH/ARTHS': '0xE1573B9D29e2183B1AF0e743Dc2754979A40D237',
      'Uniswap ARTHS/WETH': '0xecBa967D84fCF0405F6b32Bc45F4d36BfDBB2E81'
    },
    staking_contracts: {
      'Uniswap ARTH/WETH': '0xD875628B942f8970De3CcEaf6417005F68540d4f',
      'Uniswap ARTH/USDC': '0xa29367a3f057F3191b62bd4055845a33411892b6',
      'Uniswap ARTH/ARTHS': '0xda2c338350a0E59Ce71CDCED9679A3A590Dd9BEC',
      'Uniswap ARTHS/WETH': '0xDc65f3514725206Dd83A8843AAE2aC3D99771C88'
    }
  },
  ropsten: {
    main: {
      ARTH: '0x5cD30EC40b6da67B65cFCd7A6C8c692AE70232a4',
      ARTHS: '0xd7145834f0d3D2F47f441F9302A095bd607C408d',
      vesting: 'NOT_DEPLOYED_YET'
    },
    weth: '0x9533696FdAd12ed1FC7917e9b56A8d549Df5d2b9',
    oracles: {
      ARTH_WETH: '0x6B1cA4438cb8f5E2797A4FC4F6F26CC9FF36C322',
      ARTH_USDC: '0x0d28d4330fDC8eE043B4336edA75Ae0A6c5dEE20',
      ARTH_USDT: '0x2c4C60255019334f1D73EEf25894248e0F419b50',
      ARTH_ARTHS: '0xBca2ADab420BB3928eEc843fa2039384Bfb19FD4',
      ARTHS_WETH: '0x87634e2b8e326925d8375995681808D754e56481',
      ARTHS_USDC: '0xdAf03fB7A1440Bfc724b3C7F4CF047C3aA4510A9',
      ARTHS_USDT: '0xDB0eD8ba93bcae27b624FFD0673FA75db11b4082',
      USDC_WETH: '0x0E6ad3EB50Fdd0EBcd45506dbF950b7d145128cc',
      USDT_WETH: '0x18390B775fd488c31a29c4E413ea04814554cFad'
    },
    collateral: {
      USDC: '0x62463ed90eE009fbea795D1049D44992a3612c7A',
      USDT: '0xBdD17dE7975765bC79C15F76967e2B7981887DbF'
    },
    governance: '0x4a8368662339D69377FF5bA77560DC6B907bCD85',
    pools: {
      USDC: '0xE0Df8E66BaE4aDdb8ec53C351cEC99e8A7240759',
      USDT: '0x4e61CF85ec7Aef00d3Fc02784C40Ff07283c2ceC'
    },
    uniswap_other: {
      router: '0x7a250d5630B4cF539739dF2C5dAcb4c659F2488D',
      factory: '0x5C69bEe701ef814a2B6a3EDD4B1652CB9cc5aA6f'
    },
    pricing: { swap_to_price: '0xfE421F7abb81Fc6D1E092a60139a12a3b6be8ba8' },
    misc: {
      timelock: '0x6648307DFA2604B78595a1711118f92b04028eB4',
      migration_helper: '0xe13822b795EC5c5dD248a1CdC7B923B7d8c701D0'
    },
    libraries: {
      UniswapV2OracleLibrary: '0x8A0C94E55d574C0652757C879BC89C9698076EF8',
      UniswapV2Library: '0x0E207C1332B7B9108417dE9134bd621CF212Db72',
      ArthPoolLibrary: '0x144E03F0eA54b67EB26C0CF5a06028E99670d0FB'
    },
    pair_tokens: {
      'Uniswap ARTH/WETH': '0x9A0b2d1C641561949f5f770711C3B05F86AB684e',
      'Uniswap ARTH/USDC': '0x2Fa9D5bd5B04f12bD5e7be02a59C281Df66c817f',
      'Uniswap ARTH/ARTHS': '0xC8b9A764d895E88F8D3383AeB599fE6F38503ef8',
      'Uniswap ARTHS/WETH': '0x02F823CDc4C1adE61C51346CEDFE0bB242f554C0'
    },
    staking_contracts: {
      'Uniswap ARTH/WETH': '0xE970806d91699eB59F08D849b248fc294302C05c',
      'Uniswap ARTH/USDC': '0xF02f75ffdA683fe98784E1CA048D779d5cE68174',
      'Uniswap ARTH/ARTHS': '0x7a646162bE361c2ae96d57920a06200544cf0c4F',
      'Uniswap ARTHS/WETH': '0x5B05E43546534f81CcBcb10D33B03Ac02fab1201'
    }
  },
  ganache: {
    main: {
      ARTH: '0x4c2a7b591668988C6db9184d9df9394846Bc492d',
      ARTHS: '0xc2Bb9a3ae435AC36cC1eD2c4F64910B0CF8d8ec6',
      vesting: '0x68565D3dDDEe130152536d39eeD3c22A6653E584'
    },
    weth: '0x9970c452f919b117b9A5dDa473Cf205B6446f104',
    oracles: {
      ARTH_WETH: '0xB6F388B031C74936c53d51Cd850b0a8A8879c136',
      ARTH_USDC: '0x3013CeBaF374D838426bb2f3EEF6DA86D2552c27',
      ARTH_USDT: '0x1a6B2699FE1E833C28C1c9CF69bc55b2aa4a821B',
      ARTH_6DEC: '0x0037b9708901674243F823bbCE425b455e1C7825',
      ARTH_ARTHS: '0xeb3d1033E0B1ADE4f122A0174142dD2827A29eFd',
      ARTHS_WETH: '0xD48FeeDBb2f79bCc61c1661Bb5C550dE5c03b052',
      ARTHS_USDC: '0xD234BD8098cECB9CcbFf4Bf997f9B77408EC7C78',
      ARTHS_USDT: '0x279dB552A0f507DCd6F073b8d687eF0927959DcF',
      ARTHS_6DEC: '0x687e2a83f24FA1584f7aC272Ef8f5F510ea8F0A9',
      USDC_WETH: '0x8564DA758dcb6577F87C6d9c1b53f13777018602',
      USDT_WETH: '0xeC5C28352B0e8F9Eaf12239c86996e964298d60c',
      '6DEC_WETH': '0x12711D46063C413dA53d079e88c757b003b3513e'
    },
    collateral: {
      USDC: '0xff0B79ff7E0d0f5530dbb7Fa351cF9914Ab3f4E9',
      USDT: '0xD2A6475d9434CdE3Be7cD36debDC51C187be7dbD',
      '6DEC': '0x24ce4B5c5209678452fe236BD58A2e64F1d970b6'
    },
    governance: '0xB6D19571bDC969673b7fA8080D5D80CD80b2D312',
    pools: {
      USDC: '0xeF6981031cCaFfc9B4761A1dc6C5adAa495438c1',
      USDT: '0x8c2B93A83D1f60329df986e4f4219830f8f0bE9d',
      '6DEC': '0xd32fE8cc271214d911003c0011dB1f9AD796602c'
    },
    uniswap_other: {
      router: '0x8Be085050e221bd8Db17489bD853800e600f6f58',
      factory: '0xF70bB588d44509a214Ad260C84BA0cfB031c29c5'
    },
    pricing: { swap_to_price: '0xeF2c3d7D30d2893b787c0546f9A97084b4A8F10b' },
    misc: {
      timelock: '0xaD98E1e5fe7B9e79783373faE69632390f7825A0',
      migration_helper: '0xe40a86Fb20E497B423ff88c8deA4aa9994D4dC62'
    },
    libraries: {
      UniswapV2OracleLibrary: '0xF9814413328Cc3B8B92Fd3B251461b34552f7f42',
      UniswapV2Library: '0x43098B53277892e7eb9Be480Ef7054124591cE16',
      ArthPoolLibrary: '0x992A40bfF600fd2A1B7C214F61904Db6931403af'
    },
    pair_tokens: {
      'Uniswap ARTH/WETH': '0x3483F272aba04b5dd819A4CdB3c4007dF909913c',
      'Uniswap ARTH/USDC': '0xfBf1D205ADC586ad469A5a1a2a9451B2b4Bf1243',
      'Uniswap ARTH/ARTHS': '0x7D6AD49359D3f9d0DCd7482FfD86B9C3b5a5a12D',
      'Uniswap ARTHS/WETH': '0x185c0F6A6e1D0998A22f3DA95BCc1F74b0A08Dd2'
    },
    staking_contracts: {
      'Uniswap ARTH/WETH': '0x13c9aE42c43DF2FB46218DF80b6Abad7D52a82C5',
      'Uniswap ARTH/USDC': '0x3b9c2b598589578e640627d8975De51ea7928918',
      'Uniswap ARTH/ARTHS': '0xd4119c5057237373c629eD9F83B79635a3e2e90b',
      'Uniswap ARTHS/WETH': '0x6135f354e143fbEB5fB159A76EB2590cf4f086b6'
    }
  }
}
