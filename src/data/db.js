module.exports = () => ({
  participants: [
    {firstName: "Jake", secondName: 'Smith', id: 1836072133, time: "02:01:23", competitionId: 956737354},
    {firstName: "Igor", secondName: 'Pavlov', id: 1381041756, time: "01:01:25", competitionId: 574457113},
    {firstName: "Anna", secondName: 'Karenina', id: 1362753520, time: "00:02:04", competitionId: 574457113},
    {firstName: "Nick", secondName: 'Gray', id: 1316866709, time: "01:00:59", competitionId: 574457113},
    {firstName: "Burito", secondName: 'Mexico', id: 1443908653, time: "00:59:30", competitionId: 704194432},
    {firstName: "Kate", secondName: 'Dog', id: 1932862402, time: "00:45:00", competitionId: 574457113},
    {firstName: "Alex", secondName: 'Potato', id: 1683320927, time: "03:42:34", competitionId: 956737354},
    {firstName: "Jenifer", secondName: 'MONecen', id: 1856986739, time: "00:54:45", competitionId: 574457113},
    {firstName: "Oleg", secondName: 'VoKerke', id: 1489198599, time: "00:31:00", competitionId: 574457113},
    {firstName: "Georg", secondName: 'InECUrE', id: 1767665221, time: "01:00:25", competitionId: 704194432},
    {firstName: "Bruno", secondName: 'HEiNeAf', id: 1701851044, time: "01:47:28", competitionId: 574457113},
    {firstName: "Faker", secondName: 'InVetri', id: 1067003681, time: "01:12:59", competitionId: 574457113},
    {firstName: "Mike", secondName: 'ITyLOpi', id: 1691193262, time: "00:10:30", competitionId: 704194432},
    {firstName: "Angelo", secondName: 'LEsTato', id: 1522261311, time: "00:45:01", competitionId: 574457113},
    {firstName: "Barbara", secondName: 'TAlEdmI', id: 1371481490, time: "05:04:14", competitionId: 956737354},
    {firstName: "Anonimus", secondName: 'LdRISTr', id: 1660319158, time: "03:12:28", competitionId: 574457113},
    {firstName: "Jacobo", secondName: 'IthEROS', id: 1919849805, time: "00:56:13", competitionId: 574457113},
    {firstName: "Drake", secondName: 'AIsIVIR', id: 1931925417, time: "01:01:58", competitionId: 956737354},
    {firstName: "Fast", secondName: 'ArKInEU', id: 1965487503, time: "00:59:00", competitionId: 704194432},
    {firstName: "Daniel", secondName: 'NgESupR', id: 1987757357, time: "00:12:12", competitionId: 704194432},
    {firstName: "Dominik", secondName: 'Torretto', id: 1550955515, time: "00:01:02", competitionId: 956737354}
  ],
  competitions: [
    {
      id: 956737354,
      name: 'Running 100 meters',
      status: 'finished',
      winner: {
        name: 'Anna Karenina',
        time: '00:02:04'
      }
    },
    {
      id: 704194432,
      name: 'Running 50 meters',
      status: 'finished',
      winner: {
        name: 'Mike ITyLOpi',
        time: '00:10:30'
      }
    },
    {
      id: 574457113,
      name: 'Do nothing',
      status: 'active',
      winner: null
    }
  ]
})