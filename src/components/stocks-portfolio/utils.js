import DATA from './data.json'
export const aggregatedDataForCollapsedView = () => {
  let ref = {}
  for (let i = 0; i < DATA.length; i++) {
    if (ref[DATA[i].Symbol]) {
      ref[DATA[i].Symbol] = {
        Symbol: ref[DATA[i].Symbol]['Symbol'],
        'Taxable Profit':
          ref[DATA[i].Symbol]['Taxable Profit'] + DATA[i]['Taxable Profit'],
        Turnover: ref[DATA[i].Symbol]['Turnover'] + DATA[i].Turnover,
        Quantity: ref[DATA[i].Symbol]['Quantity'] + DATA[i].Quantity,
        'Sell Value': ref[DATA[i].Symbol]['Sell Value'] + DATA[i]['Sell Value'],
        'Buy Value': ref[DATA[i].Symbol]['Buy Value'] + DATA[i]['Buy Value'],
        Profit: ref[DATA[i].Symbol]['Profit'] + DATA[i].Profit,
      }
    } else {
      ref[DATA[i].Symbol] = {
        Symbol: DATA[i].Symbol,
        'Taxable Profit': DATA[i]['Taxable Profit'],
        Turnover: DATA[i].Turnover,
        Quantity: DATA[i].Quantity,
        'Sell Value': DATA[i]['Sell Value'],
        'Buy Value': DATA[i]['Buy Value'],
        Profit: DATA[i].Profit,
      }
    }
  }
  return ref
}

export const formatNumber = (num) => Intl.NumberFormat('en-IN').format(num)

export const sortArray = (arr, asc, key, isNumeric) => {
  if (isNumeric) {
    return arr.sort((a, b) => (asc ? a[key] - b[key] : b[key] - a[key]))
  }
  return arr.sort((a, b) =>
    asc
      ? a[key].toUpperCase() < b[key].toUpperCase()
        ? -1
        : a[key].toUpperCase() > b[key].toUpperCase()
        ? 1
        : 0
      : a[key].toUpperCase() < b[key].toUpperCase()
      ? 1
      : a[key].toUpperCase() > b[key].toUpperCase()
      ? -1
      : 0
  )
}

export const fullTableHeader = {
  Symbol: 'string',
  'Taxable Profit': 'float',
  Turnover: 'float',
  Quantity: 'int',
  'Sell Value': 'float',
  'Buy Value': 'float',
  Profit: 'float',
  'Period of Holding': 'int',
  'Entry Date': 'date',
  'Exit Date': 'date',
}

export const collapsedTableHeader = {
  Symbol: 'string',
  'Taxable Profit': 'float',
  Turnover: 'float',
  Quantity: 'int',
  'Sell Value': 'float',
  'Buy Value': 'float',
  Profit: 'float',
}
