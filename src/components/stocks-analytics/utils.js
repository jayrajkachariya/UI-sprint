export const formatNumber = (num) => Intl.NumberFormat('en-IN').format(num)

export const csvToJson = (csv) => {
  const lines = csv.replace(/['"]+/g, '').split('\\r\\n')
  const result = []
  const headers = lines[0].split(',')
  for (let i = 1; i < lines.length; i++) {
    const obj = {}
    const currentline = lines[i].split(',')
    for (let j = 0; j < headers.length; j++) {
      obj[headers[j]] = isNaN(+currentline[j])
        ? currentline[j]
        : +currentline[j]
    }
    result.push(obj)
  }
  return result
}

export const aggregatedDataForCollapsedView = (data) => {
  let ref = {}
  for (let i = 0; i < data.length; i++) {
    if (ref[data[i].Symbol]) {
      ref[data[i].Symbol] = {
        Symbol: ref[data[i].Symbol]['Symbol'],
        'Taxable Profit':
          ref[data[i].Symbol]['Taxable Profit'] + data[i]['Taxable Profit'],
        Turnover: ref[data[i].Symbol]['Turnover'] + data[i].Turnover,
        Quantity: ref[data[i].Symbol]['Quantity'] + data[i].Quantity,
        'Sell Value': ref[data[i].Symbol]['Sell Value'] + data[i]['Sell Value'],
        'Buy Value': ref[data[i].Symbol]['Buy Value'] + data[i]['Buy Value'],
        Profit: ref[data[i].Symbol]['Profit'] + data[i].Profit,
      }
    } else {
      ref[data[i].Symbol] = {
        Symbol: data[i].Symbol,
        'Taxable Profit': data[i]['Taxable Profit'],
        Turnover: data[i].Turnover,
        Quantity: data[i].Quantity,
        'Sell Value': data[i]['Sell Value'],
        'Buy Value': data[i]['Buy Value'],
        Profit: data[i].Profit,
      }
    }
  }
  const keys = Object.keys(ref)
  for (let i = 0; i < keys.length; i++) {
    ref[keys[i]]['Profit in %'] = (
      (ref[keys[i]]['Profit'] * 100) /
      ref[keys[i]]['Buy Value']
    ).toFixed(2)
  }
  return ref
}

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

export const isEmpty = (input) => {
  return (
    !input ||
    (typeof input === 'string' && !input.trim().length) ||
    (typeof input === 'object' &&
      (Array.isArray(input) ? !input.length : !Object.keys(input).length))
  )
}

export const TABS = [
  {
    name: 'Home',
    icon: 'home',
  },
  {
    name: 'Tabular',
    icon: 'table',
  },
]
