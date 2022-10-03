const networkConfig = {
  31337: {
    name: 'localhost',
    keyHash:'0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a',
    fee:'100000000000000000'
  },
  4: {
    name: 'rinkeby'
  },
  5: {
    name: 'goerli',
    linkToken: '	0x326C977E6efc84E512bB9C30f76E30c160eD06FB',
    vrfCoordinator: '0x2bce784e69d2Ff36c71edcB9F88358dB0DfB55b4',
    keyHash:'0x0476f9a745b61ea5c0ab224d3a6e4c99f0b02fce4da01143a4f70aa80ae76e8a',
    fee:'100000000000000000'
  }
}

module.exports = {
    networkConfig
}