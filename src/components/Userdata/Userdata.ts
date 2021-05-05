export interface IuserData {
    [index: number]: {
      customer_id: number | string,
      customer_name: string,
      chargeback_quantity: number,
      chargeback_amount: number,
      sales_quantity: number,
      total_amount: string,
      chargeback_percentage: number,
      total_chargeback_percentage: number
    }
   }

let Userdata:IuserData = [
    {
      customer_id: parseInt('26174'),
      customer_name: "Socrates",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 33,
      total_amount: '652.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0003'),
      customer_name: "Plato",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 37,
      total_amount: '78.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0004'),
      customer_name: "Aristotle",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 96,
      total_amount: '55.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0005'),
      customer_name: "Ayn Rand",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 69,
      total_amount: '99.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0007'),
      customer_name: "Friedrich Nietzsche",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 22,
      total_amount: '312.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0001'),
      customer_name: "Niccolò Machiavelli",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 19,
      total_amount: '17.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0009'),
      customer_name: "George Washington",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 35,
      total_amount: '66.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('007'),
      customer_name: "Trajan",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 190,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('002'),
      customer_name: "Marcus Aurelius",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 17,
      total_amount: '39.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00070'),
      customer_name: "Karl Marx",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 91,
      total_amount: '561.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00069'),
      customer_name: "Adam Smith",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 88,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00068'),
      customer_name: "L.V Mises",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 76,
      total_amount: '362.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0010'),
      customer_name: "M. Rothbard",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 18,
      total_amount: '22.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00230'),
      customer_name: "Kassandra",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 23,
      total_amount: '42.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0002'),
      customer_name: "Paris",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00041'),
      customer_name: "Hector",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 65,
      total_amount: '82.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('01241'),
      customer_name: "Achilles",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 55,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('001231'),
      customer_name: "Spartacus",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 52,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('54353'),
      customer_name: "Victor Hugo",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 72,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('12313'),
      customer_name: "Mozart",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '7.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('8672'),
      customer_name: "John Galt",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 32,
      total_amount: '65.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('26174'),
      customer_name: "Socrates",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 33,
      total_amount: '652.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0003'),
      customer_name: "Plato",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 37,
      total_amount: '78.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0004'),
      customer_name: "Aristotle",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 96,
      total_amount: '55.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0005'),
      customer_name: "Ayn Rand",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 69,
      total_amount: '99.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0007'),
      customer_name: "Friedrich Nietzsche",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 22,
      total_amount: '312.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0001'),
      customer_name: "Niccolò Machiavelli",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 19,
      total_amount: '17.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0009'),
      customer_name: "George Washington",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 35,
      total_amount: '66.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('007'),
      customer_name: "Trajan",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 190,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('002'),
      customer_name: "Marcus Aurelius",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 17,
      total_amount: '39.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00070'),
      customer_name: "Karl Marx",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 91,
      total_amount: '561.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00069'),
      customer_name: "Adam Smith",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 88,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00068'),
      customer_name: "L.V Mises",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 76,
      total_amount: '362.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0010'),
      customer_name: "M. Rothbard",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 18,
      total_amount: '22.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00230'),
      customer_name: "Kassandra",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 23,
      total_amount: '42.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0002'),
      customer_name: "Paris",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00041'),
      customer_name: "Hector",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 65,
      total_amount: '82.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('01241'),
      customer_name: "Achilles",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 55,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('001231'),
      customer_name: "Spartacus",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 52,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('54353'),
      customer_name: "Victor Hugo",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 72,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('12313'),
      customer_name: "Mozart",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '7.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('8672'),
      customer_name: "John Galt",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 32,
      total_amount: '65.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('26174'),
      customer_name: "Socrates",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 33,
      total_amount: '652.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0003'),
      customer_name: "Plato",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 37,
      total_amount: '78.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0004'),
      customer_name: "Aristotle",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 96,
      total_amount: '55.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0005'),
      customer_name: "Ayn Rand",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 69,
      total_amount: '99.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0007'),
      customer_name: "Friedrich Nietzsche",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 22,
      total_amount: '312.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0001'),
      customer_name: "Niccolò Machiavelli",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 19,
      total_amount: '17.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0009'),
      customer_name: "George Washington",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 35,
      total_amount: '66.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('007'),
      customer_name: "Trajan",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 190,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('002'),
      customer_name: "Marcus Aurelius",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 17,
      total_amount: '39.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00070'),
      customer_name: "Karl Marx",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 91,
      total_amount: '561.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00069'),
      customer_name: "Adam Smith",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 88,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00068'),
      customer_name: "L.V Mises",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 76,
      total_amount: '362.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0010'),
      customer_name: "M. Rothbard",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 18,
      total_amount: '22.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00230'),
      customer_name: "Kassandra",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 23,
      total_amount: '42.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('0002'),
      customer_name: "Paris",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '72.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('00041'),
      customer_name: "Hector",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 65,
      total_amount: '82.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('01241'),
      customer_name: "Achilles",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 55,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('001231'),
      customer_name: "Spartacus",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 52,
      total_amount: '92.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('54353'),
      customer_name: "Victor Hugo",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 72,
      total_amount: '62.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('12313'),
      customer_name: "Mozart",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 43,
      total_amount: '7.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
    {
      customer_id: parseInt('8672'),
      customer_name: "Not John Galt",
      chargeback_quantity: 1,
      chargeback_amount: 38.92,
      sales_quantity: 32,
      total_amount: '65.000',
      chargeback_percentage: 0.05,
      total_chargeback_percentage:  0.03
    },
  ];

export default Userdata;
